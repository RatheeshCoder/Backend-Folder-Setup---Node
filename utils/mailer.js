// utils/mailer.js
const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASS } = process.env;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

exports.sendVerificationEmail = (email, verificationLink) => {
    return transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verify Your Email',
        html: `<p>Please verify your email by clicking <a href="${verificationLink}">here</a>.</p>`
    });

    
};

exports.adminVerificationEmail = (email, invitationLink) => {
    return transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'You’re Invited as an Agent',
        html: `<p>Please verify your email by clicking <a href="${invitationLink}">here</a>.</p>`
    });
};


exports.sendQueryConfirmationEmail = async (userEmail, { name, queryId }) => {
    const mailOptions = {
      from: config.EMAIL_USER,
      to: userEmail,
      subject: "Query Submission Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for your query, ${name}!</h2>
          <p>We have received your query and will get back to you as soon as possible.</p>
          <p>Your query reference number is: <strong>${queryId}</strong></p>
          <p>Please keep this number for future reference.</p>
          <br>
          <p>If you have any urgent concerns, please contact us at:</p>
          <p>Email: support@example.com</p>
          <p>Phone: +1234567890</p>
          <br>
          <p>Best regards,</p>
          <p>Support Team</p>
        </div>
      `
    };
  
    await transporter.sendMail(mailOptions);
  };