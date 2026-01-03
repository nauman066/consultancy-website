// ==============================
// CONSULTANCY FIRM BACKEND SERVER
// ==============================

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// ==============================
// MIDDLEWARE SETUP
// ==============================

// Enable CORS (allows frontend to communicate with backend)
app.use(cors({
  origin: [
    'http://localhost:3000',           // Local development
    /.vercel.app$/,                    // Vercel frontend deployments
    /.vercel.app$/                     // Vercel backend deployments
  ],
  credentials: true
}));

// Parse JSON data
app.use(express.json({ limit: '10mb' }));

// Parse URL-encoded data (forms)
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ==============================
// EMAIL CONFIGURATION
// ==============================

// Create transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',    // Gmail SMTP server
  port: 587,                 // Gmail SMTP port
  secure: false,             // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,    // Your Gmail address
    pass: process.env.EMAIL_PASS     // Your Gmail App Password
  },
  tls: {
    rejectUnauthorized: false      // Handle self-signed certificates
  }
});

// Verify email configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('❌ Email configuration error:');
    console.log(error);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// ==============================
// API ROUTES
// ==============================

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'Consultancy Firm Backend Server is running perfectly!' 
  });
});

// Enquiry form submission endpoint
app.post('/api/enquiry', async (req, res) => {
  try {
    // Extract data from request body
    const { name, email, phone, advisory, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All required fields must be filled' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    // Validate phone number (basic 10-15 digits check)
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)\+]/g, ''))) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid phone number' 
      });
    }

    // Prepare email content
    const mailOptions = {
      from: `"Consultancy Firm Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Send to your email
      subject: `🆕 New Enquiry: ${name} - ${advisory}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Enquiry</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: white;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #4682B4 0%, #1E90FF 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 600;
            }
            .content {
              padding: 30px;
            }
            .client-info {
              background-color: #f8f9fa;
              padding: 20px;
              border-radius: 8px;
              margin-bottom: 20px;
            }
            .client-info h2 {
              color: #4682B4;
              margin-top: 0;
              margin-bottom: 15px;
              font-size: 18px;
            }
            .client-info p {
              margin: 8px 0;
              font-size: 14px;
            }
            .message-section {
              background-color: #f8f9fa;
              padding: 20px;
              border-radius: 8px;
            }
            .message-section h2 {
              color: #4682B4;
              margin-top: 0;
              margin-bottom: 15px;
              font-size: 18px;
            }
            .message-section p {
              margin: 0;
              font-size: 14px;
              line-height: 1.6;
            }
            .footer {
              padding: 20px;
              text-align: center;
              color: #666;
              font-size: 12px;
              background-color: #f8f9fa;
              border-top: 1px solid #eee;
            }
            .label {
              font-weight: bold;
              color: #4682B4;
              display: inline-block;
              min-width: 120px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🆕 New Consultancy Enquiry</h1>
            </div>
            <div class="content">
              <div class="client-info">
                <h2>📋 Client Information</h2>
                <p><span class="label">Name:</span> ${name}</p>
                <p><span class="label">Email:</span> ${email}</p>
                <p><span class="label">Phone:</span> ${phone}</p>
                <p><span class="label">Advisory Type:</span> ${advisory}</p>
              </div>
              <div class="message-section">
                <h2>💬 Message</h2>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            <div class="footer">
              <p>This enquiry was submitted through your Consultancy Firm website on ${new Date().toLocaleString()}.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);

    // Send success response to frontend
    res.status(200).json({ 
      success: true, 
      message: 'Your enquiry has been received! We will contact you soon.',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    // Send error response to frontend
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, there was an error sending your enquiry. Please try again or contact us directly.',
      error: error.message
    });
  }
});

// Handle undefined routes
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    message: 'The requested endpoint does not exist'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('❌ Server error:', error);
  res.status(500).json({ 
    error: 'Internal server error',
    message: 'Something went wrong on our server'
  });
});

// ==============================
// START SERVER
// ==============================

app.listen(PORT, '0.0.0.0', () => {
  console.log('\n');
  console.log('🚀 CONSULTANCY FIRM BACKEND SERVER');
  console.log('==================================');
  console.log(`✅ Server is running on port ${PORT}`);
  console.log(`🔧 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📧 Email notifications enabled: ${process.env.EMAIL_USER || 'Not configured'}`);
  console.log('==================================\n');
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 Server is shutting down...');
  process.exit(0);
});