import {z} from "zod"

const envSchema = z.object({
    VITE_WEATHER_APP_API:z.string(),
    VITE_LOCATION_LATITUDE:z.string(),
    VITE_LOCATION_LONGITUDE:z.string(),
    VITE_CONTATO_1:z.string(),
    VITE_CONTATO_2:z.string(),
    VITE_BIN_ID:z.string(),
    VITE_BIN_SECRET_KEY:z.string(),
    VITE_DEVELOP:z.string(),
    VITE_URL_SERVER:z.string()
})

export const env = envSchema.parse(import.meta.env)