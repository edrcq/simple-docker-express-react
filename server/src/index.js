import { initWebServer } from './web.js'
import { testConnection } from './db.js'

testConnection().then(() => {
    initWebServer()
})
