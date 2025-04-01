import { env } from '../../config/environment'
import { app } from './app'


const PORT = env.PORT

app.listen(PORT, () => {
    console.log('[Application] HTTP Server Running on', PORT)
})
