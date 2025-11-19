import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const consent = formData.get('consent') as string;

    // Basic validation
    if (!fullName || !email || !message) {
      return NextResponse.json({
        success: false,
        message: "Please fill in all required fields (Name, Email, Message)"
      }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json({
        success: false,
        message: "Please agree to our Privacy Policy and Terms of Service"
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

    // Simulate processing (in real app, you'd send email, save to DB, etc.)
    console.log('Contact form submission:', {
      fullName,
      email,
      company,
      phone,
      message,
      submittedAt: new Date().toISOString()
    });

    // Simulate some processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry! We'll get back to you within 24 hours."
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again or contact us directly."
    }, { status: 500 });
  }
}