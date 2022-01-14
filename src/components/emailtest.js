// "use strict";
const nodemailer = require("nodemailer");
require('dotenv').config()

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    console.log(process.env.STMP_HOST);

  // create reusable transporter object using the default SMTP transport
  let transport = nodemailer.createTransport({
    host: process.env.STMP_HOST,
    port: process.env.STMP_PORT,
    secure: process.env.STMP_SECURE, // true for 465, false for other ports
    auth: {
      user: process.env.STMP_EMAIL, // generated ethereal user
      pass: process.env.STMP_PASS, // generated ethereal password
    },
    debug: true,
    logger: true
  });

  // send mail with defined transport object
  let emailMessage = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "scott.mc.henderson@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  let mailTransporter = nodemailer.createTransport(transport);

  mailTransporter.sendMail(emailMessage, function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log('Email sent successfully');
    }
});

  console.log("Message sent: %s", emailMessage.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>



  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(emailMessage));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);