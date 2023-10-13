import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 567,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export const sendEmail = async () => {
  try {
    const info = await transporter.sendMail({
      from: process.env.NODEMAILER_USER,
      to: "your_email_here", 
      subject: "Hello ✔", 
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error(error);

    throw error;
  }
};
