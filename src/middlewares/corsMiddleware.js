import cors from 'cors'

export const corsMiddleware = cors({
    origin:`https://www.salchidev.com`, 
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
})