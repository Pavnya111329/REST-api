const app = require("./app")

const dotenv = require("dotenv")

dotenv.config({ path: "backend/configaration/config.env" })

const connectDb = require("./configaration/connect")

connectDb()

const PORT = 5000


app.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})

