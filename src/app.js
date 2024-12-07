import express, { response } from 'express'
import { corsMiddleware } from './middlewares/corsMiddleware.js'
import axios from 'axios'
import { enviaTemplate } from './templates/template.js'
import { enviarMail } from './config/nodemailer.config.js'
import { config } from './config/dotenv.js'




const app = express()

app.use(corsMiddleware)
// Middleware para analizar cuerpos JSON
app.use(express.json());

app.post('/enviarMail', async (req, res) => {
    
    let {remitente, mailContacto, asunto, mensaje, recaptchaToken } = req.body

    if(!remitente || !mailContacto || !asunto || !mensaje )

        return res.status(400).json({
            mensaje: "Faltan datos! Por favor completar todo el formulario para enviar el mensaje."
        })

    if(!recaptchaToken) {
       return res.status(400).json({mensaje: `Falta captcha. Por favor tildar la opción "no soy un robot" `})
    }    

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verificación de que el email sea válido
    if (!emailRegex.test(mailContacto)) {
        return res.status(400).json({
            mensaje: "El email de contacto no es válido. Por favor ingrese un email correcto."
        });
    }

    try {

        let response = await axios.post( `https://www.google.com/recaptcha/api/siteverify`, null, {
            params:{
                secret: config.SECRETKEY, 
                response: recaptchaToken
            }
        })

        let {success} = response.data

        if(!success){
            return res.status(400).json({
                mensaje: "Verificación de reCAPTCHA fallida. Por favor, inténtalo de nuevo."
            });
        }

        let html = enviaTemplate(remitente, mailContacto, asunto, mensaje)

        let mailEnviado = await enviarMail(html)

        if(mailEnviado){
            res.status(200).json({mensaje:'El mail fué enviado con éxito! Muchas gracias por pornerte en contacto conmigo! Me contactaré lo más pronto posible!'})
        }


    } catch (err) {
        console.error('Error al verificar el formulario:', err);
        res.status(500).json({ mensaje: "Error en el servidor." });        
    }
    


    



})

app.listen(config.PORT, () => {
    console.log(`Servidor corriendo en puerto ${config.PORT}`)
})