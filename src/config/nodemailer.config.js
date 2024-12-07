import nodemailer from 'nodemailer'
import { config } from 'dotenv.js'

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: config.DEV_EMAIL,
      pass: config.PASSMAILER,
    },
  })

  export const enviarMail=async(message)=>{
    return await transporter.sendMail(
        {
            from:`schDev ${config.DEV_EMAIL}`,
            to:config.DEV_EMAIL, 
            html: message
        }
    )
}