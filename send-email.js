import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.YOUREMAIL,
    pass: process.env.APPPASSWORD,
  }
});

const mailoptions = {
  from:{ 
    name: "MY-company", 
    address:"me" 
  },
  to: "recipient-gmail", // list of receivers
  subject: "Hello world ✔", // Subject line
  text: "Hello world?", // plain text body 
  html: "<b>Hello world?</b>", // html body
};

const sendmail = async (transporter, mailoptions )=>{
  try{
await transporter.sendMail(mailoptions)
console.log("message sended")
  }
  catch(err){
    console.error(err)
  }
}
sendmail(transporter,mailoptions)
