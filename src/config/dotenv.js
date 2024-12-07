
import dotenv from 'dotenv'

dotenv.config({path:"./src/.env", override:true})

export const config = {
    SECRETKEY:process.env.SECRETKEY,
    PORT:process.env.PORT || 3000,
    DEV_EMAIL:process.env.DEV_EMAIL,
    CLIENT_EMAIL:process.env.CLIENT_EMAIL,
    PASSMAILER:process.env.PASSMAILER
}