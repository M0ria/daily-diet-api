import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
    config({ path: '.env.test' })
} else {
    config()
}

export const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),

    DB_HOST: z.string(),
    DB_PORT: z.coerce.number().default(5432),
    DB_NAME: z.string(),
    DB_USER: z.string(),
    DB_PASS: z.string(),


    PORT: z.coerce.number().default(8080),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.error('⚠️ Invalid environment variables!', _env.error.format())

    throw new Error('Invalid environment variables.')
}

export const env = _env.data
