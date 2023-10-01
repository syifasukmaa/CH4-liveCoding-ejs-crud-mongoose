const express = require("express")
const adminController = require("../controllers/adminController")

const router = express.Router()

router
  .route("/dashboard")
  .get(adminController.getAllTours)
router
  .route("/dashboard/create")
  .get(adminController.createPage)

router
  .route("/dashboard/action")
  .post(adminController.createTour)

router
  .route("/dashboard/edit/:id")
  .get(adminController.editPage)

router
  .route("/tours/update/:id")
  .post(adminController.editTour)

router
  .route("/tours/delete/:id")
  .post(adminController.removeTour)
module.exports = router
