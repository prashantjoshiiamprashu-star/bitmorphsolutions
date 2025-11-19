import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;

    // Basic validation
    if (!email) {
      return NextResponse.json({
        success: false,
        message: "Please enter a valid email address"
      }, { status: 400 });
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: false,
        message: "Please enter a valid email address"
      }, { status: 400 });
    }

    // Simulate processing
    console.log('Newsletter subscription:', {
      email,
      subscribedAt: new Date().toISOString()
    });

    // Simulate some processing time
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing! You'll receive updates about our latest innovations."
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({
      success: false,
      message: "Subscription failed. Please try again."
    }, { status: 500 });
  }
}