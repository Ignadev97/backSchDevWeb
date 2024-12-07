import cors from 'cors'

export const corsMiddleware = cors({
    origin:`http://localhost:4321`, 
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
})