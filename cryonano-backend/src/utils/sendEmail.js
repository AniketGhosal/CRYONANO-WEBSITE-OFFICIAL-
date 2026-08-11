// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   secure: false, // true for port 465, false for 587
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// const sendCompanyNotification = async (subject, htmlContent) => {
//   try {
//     await transporter.sendMail({
//       from: `"CRYONANO Portal" <${process.env.SMTP_USER}>`,
//       to: process.env.ADMIN_EMAIL,
//       subject: subject,
//       html: htmlContent,
//     });
//     console.log(`Email sent: ${subject}`);
//   } catch (error) {
//     console.error("SMTP Email Error:", error);
//   }
// };

// module.exports = sendCompanyNotification;






// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   secure: false, // true for port 465, false for 587
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// // Added attachments parameter (defaulting to empty array)
// const sendCompanyNotification = async (subject, htmlContent, attachments = []) => {
//   try {
//     await transporter.sendMail({
//       from: `"CRYONANO Portal" <${process.env.SMTP_USER}>`,
//       to: process.env.ADMIN_EMAIL,
//       subject: subject,
//       html: htmlContent,
//       attachments: attachments, // Passes files directly to Nodemailer
//     });
//     console.log(`Email sent: ${subject}`);
//   } catch (error) {
//     console.error("SMTP Email Error:", error);
//   }
// };

// module.exports = sendCompanyNotification;





















const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // Changed to true for Port 465 (Better for Gmail)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendCompanyNotification = async (subject, htmlContent, attachments = []) => {
  // Removed the try/catch block here so errors flow back to the controller
  await transporter.sendMail({
    from: `"CRYONANO Portal" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: subject,
    html: htmlContent,
    attachments: attachments,
  });
  console.log(`Email sent: ${subject}`);
};

module.exports = sendCompanyNotification;