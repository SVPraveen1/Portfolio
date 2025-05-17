import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// Define a schema for input validation
const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the input against our schema
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      // If validation fails, return the errors
      return NextResponse.json({ success: false, errors: result.error.format() }, { status: 400 });
    }
    
    const { name, email, message } = result.data;
      // Send email using Resend
    try {
      const { data, error } = await resend.emails.send({        from: 'Portfolio Contact <onboarding@resend.dev>', // Use your verified domain in production
        to: 'shyamkaruparthi@gmail.com', // Your email address
        replyTo: email, // Allow replying directly to the sender
        subject: `Portfolio Contact from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
        `,
      });
      
      if (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ 
          success: false, 
          message: 'Failed to send your message. Please try again later.' 
        }, { status: 500 });
      }
      
      // Return success response
      return NextResponse.json({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to send your message. Please try again later.' 
      }, { status: 500 });
    }
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'An error occurred while processing your request' 
    }, { status: 500 });
  }
}
