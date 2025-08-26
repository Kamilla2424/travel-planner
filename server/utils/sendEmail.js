const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: true,
        auth: {
            user: `${process.env.EMAIL_USER}`,
            pass: `${process.env.PASS}`,
      },
    });
    await transporter.sendMail({
        from: `${process.env.EMAIL_USER}`,
        to: email,
        subject: subject,
        text: text
    });
    console.log('Email sent successfully!')
  } catch (error) {
    console.log(error, "Error sending email");
  }
};

module.exports = { sendEmail };