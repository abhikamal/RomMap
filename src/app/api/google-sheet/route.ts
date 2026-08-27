import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, country } = await req.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    const GOOGLE_SHEET_WEBHOOK_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    
    if (!GOOGLE_SHEET_WEBHOOK_URL) {
      // In development, if no webhook is set, just return success to simulate it
      console.warn('No GOOGLE_SHEET_WEBHOOK_URL provided in .env');
      return NextResponse.json({ success: true, message: 'Simulated success (No Webhook URL)' });
    }

    // Proxy the request to the Google Apps Script Webhook
    const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, country })
    });

    if (!response.ok) {
      throw new Error('Failed to ping Google Sheet');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
