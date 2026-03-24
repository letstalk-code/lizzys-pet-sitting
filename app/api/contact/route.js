const GHL_TOKEN = process.env.GHL_API_TOKEN
const GHL_LOCATION = process.env.GHL_LOCATION_ID

// Smart Website Pipeline → "New Lead" stage
const PIPELINE_ID = 'dnt5QEZaFqNk30HeINhF'
const STAGE_ID    = '6d1940e3-039d-496c-b122-c3e828485e55'

const ghlHeaders = {
  'Authorization': `Bearer ${GHL_TOKEN}`,
  'Version': '2021-07-28',
  'Content-Type': 'application/json',
}

export async function POST(request) {
  const { firstName, lastName, email, phone, petType, service, message } = await request.json()

  // 1. Create (or upsert) contact
  const contactRes = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
    method: 'POST',
    headers: ghlHeaders,
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      phone,
      locationId: GHL_LOCATION,
      source: 'Website Contact Form',
      tags: ['website-lead'],
    }),
  })

  if (!contactRes.ok) {
    const err = await contactRes.text()
    console.error('GHL contact upsert failed:', err)
    return Response.json({ error: 'Submission failed' }, { status: 500 })
  }

  const { contact } = await contactRes.json()
  const contactId = contact?.id

  if (!contactId) {
    return Response.json({ error: 'Contact ID not returned' }, { status: 500 })
  }

  // 2. Add note with pet details + message
  await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
    method: 'POST',
    headers: ghlHeaders,
    body: JSON.stringify({
      body: `🐾 Website Enquiry\n\nPet Type: ${petType}\nService Interested: ${service}\n\nMessage:\n${message}`,
    }),
  })

  // 3. Create opportunity in pipeline
  await fetch('https://services.leadconnectorhq.com/opportunities/', {
    method: 'POST',
    headers: ghlHeaders,
    body: JSON.stringify({
      name: `${firstName} ${lastName} — ${service}`,
      pipelineId: PIPELINE_ID,
      pipelineStageId: STAGE_ID,
      contactId,
      locationId: GHL_LOCATION,
      status: 'open',
    }),
  })

  return Response.json({ success: true })
}
