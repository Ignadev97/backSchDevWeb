
import dotenv from 'dotenv'

dotenv.config({path:"./src/.env", override:true})

export const config = {
    SECRETKEY:process.env.SECRETKEY,
    PORT:process.env.PORT || 3000
}