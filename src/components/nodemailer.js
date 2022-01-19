"use strict";
const nodemailer = require("nodemailer");
require('dotenv').config()

console.log(process.env.TEST);

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.STMP_HOST,
    port: process.env.STMP_PORT,
    secure: process.env.STMP_SECURE, // true for 465, false for other ports
    auth: {
      user: process.env.STMP_EMAIL, // generated ethereal user
      pass: process.env.STMP_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "scott.mc.henderson@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world? this is a test message", // plain text body
    html: "<b>Hello world?</b>", // html body
    },function(error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email was successfully sent.");
      }
    }
  );

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main().catch(console.error);