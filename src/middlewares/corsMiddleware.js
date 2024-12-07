import cors from 'cors'

export const corsMiddleware = cors({
    origin:`https://sch-web.vercel.app`, 
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
})