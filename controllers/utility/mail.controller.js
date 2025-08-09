import nodemailer from "nodemailer";
import config from "@/config";
import moment from "moment";

const sendEmail = async (toEmail, subject, template, attachments = []) => {
  try {
    const transport = nodemailer.createTransport({
      host: config.NODEMAILER.HOST,
      port: config.NODEMAILER.PORT,
      secure: config.NODEMAILER.SECURE,
      auth: {
        user: config.NODEMAILER.USER_NAME,
        pass: config.NODEMAILER.PASSWORD,
      },
    });

    const mailSentInformation = await transport.sendMail({
      from: config.NODEMAILER.MAIL,
      to: toEmail,
      subject,
      html: template,
      attachments,
    });

    console.log("Mail sent info:", mailSentInformation.accepted, mailSentInformation.messageId);
    return true;
  } catch (error) {
    console.log("Error in sending email", error);
    return false;
  }
};

export const sendEmailViaTemplate = async ({ identifier, to, content, attachments = [] }) => {
  try {
    const currentDate = moment().format("DD MMM, YYYY");
    const year = moment().format("YYYY");
    let subject = "";
    let template = "";
    console.log("shsjfnjr",content)

    switch (identifier) {
      case "EMAIL_VERIFICATION":
        subject = "Email Verification - Action Required";
        template = `
          <p>Dear User,</p>
          <p>Please verify your email by clicking the link below:</p>
          <p><a href="${content.magicLink}" target="_blank">Verify Email</a></p>
          <p>If you did not request this verification, please ignore this email.</p>
          <p>Thank you,</p>
          <p>Your Company</p>
          <p>${year}</p>
        `;
        break;
      
      case "OTP_VERIFICATION":
        subject = "Your OTP for Email Verification";
        template = `
          <p>Dear User,</p>
          <p>Your OTP for email verification is: <strong>${content.otp}</strong></p>
          <p>If you did not request this OTP, please ignore this email.</p>
          <p>Thank you,</p>
          <p>Your Company</p>
          <p>${year}</p>
        `;
        break;
        case "OTP_FOR_TWO_STEP_VERIFICATION":
          subject = "Your OTP for two step Verification";
          template = `
            <p>Dear User,</p>
            <p>Your OTP for two step verification is: <strong>${content.otp}</strong></p>
            <p>If you did not request this OTP, please ignore this email.</p>
            <p>Thank you,</p>
            <p>Your Company</p>
            <p>${year}</p>
          `;
          break;
        
      case "TICKET_REMINDER":
        subject = `Ticket Reminder: ${content.ticketId}`;
        template = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
            <h2 style="color: #333;">Ticket Notification</h2>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Product:</strong> ${content.productName}</p>
              <p><strong>Ticket ID:</strong> ${content.ticketId}</p>
              <p><strong>Title:</strong> ${content.ticketTitle}</p>
              <p><strong>Description:</strong> ${content.ticketDescription}</p>
            </div>
            
            <div style="text-align: center; margin: 25px 0;">
              <a href="${content.ticketLink}" style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
                View Ticket
              </a>
            </div>
            
            <p style="font-size: 12px; color: #777; margin-top: 30px; text-align: center;">
              This is an automated message. Please do not reply directly to this email.<br>
              &copy; ${year} All rights reserved.
            </p>
          </div>
        `;
        break;
        
      default:
        console.log("Unknown identifier for email template");
        return false;
    }

    return await sendEmail(to, subject, template, attachments);
  } catch (error) {
    console.log("sendEmailViaTemplate Error:", error);
    return false;
  }
};