// CORE PACKAGE/MODULE

// THIRD PARTY PACKAGE/MODULE
const express = require("express")
const morgan = require("morgan")
const flash = require("connect-flash")
const session = require("express-session")

// OUR OWN PACKAGE/MODULE
const tourRouter = require("./routes/tourRoutes")
const userRouter = require("./routes/userRoutes")
const adminRouter = require("./routes/adminRoutes")

const app = express()

// middleware dari express
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
// biar bisa baca static file
app.use(express.static(`${__dirname}/public`))

//untuk template engine
app.set("views", __dirname + "/view")
app.set("view engine", "ejs")

//untuk flash notifikasi
app.use(
  session({
    secret: "geeksforgeeks",
    saveUninitialized: true,
    resave: true,
  })
)

app.use(flash())

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  console.log(req.requestTime)
  next()
})

app.use("/api/v1/tours", tourRouter)
app.use("/api/v1/users", userRouter)
app.use("/", adminRouter)

module.exports = app
