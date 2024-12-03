import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: "ignacio.tello.dev@gmail.com",
      pass: "unmo hhna iygg phtr",
    },
  })

  export const enviarMail=async(message)=>{
    return await transporter.sendMail(
        {
            from:"schDev ignacio.tello.dev@gmail.com",
            to:'ignacio.tello.dev@gmail.com', 
            html: message
        }
    )
}