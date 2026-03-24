export async function POST(request) {
  const { firstName, lastName, email, phone, petType, service, message } = await request.json()

  // Create contact in GHL
  const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GHL_API_TOKEN}`,
      'Version': '2021-07-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      phone,
      locationId: process.env.GHL_LOCATION_ID,
      source: 'Website Contact Form',
      tags: ['website-lead'],
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('GHL contact creation failed:', err)
    return Response.json({ error: 'Submission failed' }, { status: 500 })
  }

  const { contact } = await res.json()

  // Add a note with pet details + message
  if (contact?.id) {
    await fetch(`https://services.leadconnectorhq.com/contacts/${contact.id}/notes`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_API_TOKEN}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        body: `Pet Type: ${petType}\nService Interested: ${service}\n\nMessage:\n${message}`,
      }),
    })
  }

  return Response.json({ success: true })
}
