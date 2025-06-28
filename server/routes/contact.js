const express = require('express');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const router = express.Router();

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many contact form submissions, please try again later.'
});

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

// Contact form submission
router.post('/', contactLimiter, [
  body('name').trim().isLength({ min: 2, max: 100 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('company').optional().trim().isLength({ max: 100 }).escape(),
  body('subject').trim().isLength({ min: 5, max: 200 }).escape(),
  body('message').trim().isLength({ min: 10, max: 2000 }).escape(),
  body('inquiryType').isIn(['general', 'support', 'billing', 'feature', 'partnership', 'demo', 'other'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: errors.array() 
      });
    }

    const { name, email, company, subject, message, inquiryType, timestamp } = req.body;

    // Create email content
    const emailContent = `
      New Contact Form Submission - TaskSher
      
      =====================================
      CONTACT DETAILS
      =====================================
      Name: ${name}
      Email: ${email}
      Company: ${company || 'Not provided'}
      Inquiry Type: ${inquiryType}
      
      =====================================
      MESSAGE
      =====================================
      Subject: ${subject}
      
      ${message}
      
      =====================================
      METADATA
      =====================================
      Submitted: ${timestamp}
      IP Address: ${req.ip}
      User Agent: ${req.get('User-Agent')}
      
      =====================================
      
      This message was sent through the TaskSher contact form.
      Please respond to: ${email}
    `;

    // Email configuration
    const mailOptions = {
      from: `"TaskSher Contact Form" <${process.env.SMTP_USER}>`,
      to: 'contactsweatandcode@gmail.com',
      replyTo: email,
      subject: `[TaskSher Contact] ${subject}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #D4AF37, #B8941F); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">🦁 TaskSher</h1>
            <p style="color: white; margin: 5px 0 0 0;">New Contact Form Submission</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">Contact Details</h2>
            <table style="width: 100%; margin-bottom: 20px;">
              <tr><td style="padding: 5px 0; font-weight: bold;">Name:</td><td style="padding: 5px 0;">${name}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold;">Email:</td><td style="padding: 5px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold;">Company:</td><td style="padding: 5px 0;">${company || 'Not provided'}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold;">Inquiry Type:</td><td style="padding: 5px 0; text-transform: capitalize;">${inquiryType}</td></tr>
            </table>
            
            <h2 style="color: #333; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">Message</h2>
            <div style="background: white; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
              <h3 style="color: #D4AF37; margin-top: 0;">${subject}</h3>
              <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="background: #e9e9e9; padding: 15px; border-radius: 5px; font-size: 12px; color: #666;">
              <strong>Submission Details:</strong><br>
              Time: ${timestamp}<br>
              IP: ${req.ip}<br>
              User Agent: ${req.get('User-Agent')}
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0;">Reply directly to this email to respond to ${name}</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;">This message was sent through the TaskSher contact form</p>
          </div>
        </div>
      `
    };

    // Send email
    const transporter = createTransporter();
    await transporter.sendMail(mailOptions);

    // Send auto-reply to user
    const autoReplyOptions = {
      from: `"Kartik Singh - TaskSher" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting TaskSher!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #D4AF37, #B8941F); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">🦁 TaskSher</h1>
            <p style="color: white; margin: 5px 0 0 0;">Thank you for reaching out!</p>
          </div>
          
          <div style="padding: 30px;">
            <h2 style="color: #333;">Hi ${name},</h2>
            
            <p style="line-height: 1.6; color: #333;">
              Thank you for contacting TaskSher! I've received your message about "<strong>${subject}</strong>" 
              and I'll get back to you within 24 hours.
            </p>
            
            <div style="background: #f0f8ff; border-left: 4px solid #D4AF37; padding: 15px; margin: 20px 0;">
              <p style="margin: 0; color: #333;">
                <strong>What happens next?</strong><br>
                • I'll review your inquiry personally<br>
                • You'll receive a detailed response within 2-4 hours<br>
                • For urgent matters, feel free to email me directly
              </p>
            </div>
            
            <p style="line-height: 1.6; color: #333;">
              In the meantime, feel free to explore our <a href="${process.env.CLIENT_URL}/guide" style="color: #D4AF37;">getting started guide</a> 
              or check out our <a href="${process.env.CLIENT_URL}/#features" style="color: #D4AF37;">features</a>.
            </p>
            
            <p style="line-height: 1.6; color: #333;">
              Best regards,<br>
              <strong>Kartik Singh</strong><br>
              Founder & CEO, TaskSher<br>
              <a href="mailto:contactsweatandcode@gmail.com" style="color: #D4AF37;">contactsweatandcode@gmail.com</a>
            </p>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee;">
            <p style="margin: 0; font-size: 12px; color: #666;">
              This is an automated response. Please don't reply to this email.
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({
      message: 'Message sent successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Failed to send message',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Get contact information
router.get('/info', (req, res) => {
  res.json({
    email: 'contactsweatandcode@gmail.com',
    owner: 'Kartik Singh',
    company: 'TaskSher',
    responseTime: '2-4 hours',
    supportHours: '9 AM - 6 PM PST',
    timezone: 'Pacific Standard Time'
  });
});

module.exports = router;