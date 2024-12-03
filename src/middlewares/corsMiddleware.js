import cors from 'cors'

export const corsMiddleware = cors({
    origin:`https://sch-web.vercel.app/`, 
    methods:['GET', 'POST'],
    allowedHeaders: ['Content-Type']
})