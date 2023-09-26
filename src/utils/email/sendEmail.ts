import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export const sendEmail = async () => {
  try {
    const info = await transporter.sendMail({
      from: process.env.NODEMAILER_USER, // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error(error);

    throw error;
  }
};
