// For Pages Router: pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create a transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sakshiawate31@gmail.com', // Destination Gmail address
      pass: process.env.EMAIL_PASSWORD || "wdkddysfynxagggg",
    },
  });

  try {
    await transporter.sendMail({
      from: `"Sakshi Portfolio Contact Form" <${email}>`,
      to: 'sakshiawate31@gmail.com',
      subject: `New Inquiry from Sakshi's UI/UX Portfolio: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .container { padding: 20px; border-radius: 8px; }
            .header { background-color: #2c7a7b; color: white; padding: 15px 20px; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border-left: 4px solid #2c7a7b; border-right: 1px solid #eee; border-bottom: 1px solid #eee; }
            .footer { font-size: 12px; color: #777; margin-top: 20px; text-align: center; }
            .message { white-space: pre-line; }
            .contact-info { margin-bottom: 15px; }
            a { color: #2c7a7b; text-decoration: none; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Message from UI/UX Portfolio Contact Form</h2>
            </div>
            <div class="content">
              <div class="contact-info">
                <p><strong>From:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              </div>
              <div>
                <h3>Message / Inquiry:</h3>
                <div class="message">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from Sakshi Awate's UI/UX Designer Portfolio contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}