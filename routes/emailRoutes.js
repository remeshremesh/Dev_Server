const express = require('express');
const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');
const reviewRouter = require('./reviewRoutes');
// const { Hello } = require("./emailTemplates/helloTemplate");

// const Email = require("./../utils/email");
const Email = require("../utils/email");

const router = express.Router();

router.post("/", async (req, res) => {
  // req.logout();
  // res.redirect("/");
  // console.log('@@ServerSide ! Received rich text from request is :');
  // console.log('body is : ', req.body);
  // console.log('posted_data is : ', req.body.posted_data);
  // console.log('my_text is : ', req.body.my_text);
  
  console.log('received data in /api/v1/email is : ', req.body.data);
  const newUser = {email: 'akhavan.khashayar@gmail.com', name: 'aftoflBig5', }
  await new Email(newUser, 'url', req.body.data).sendWelcome();
  
  
  res.send('WOW! Received it.');
});

// router.param('id', tourController.checkID);

// POST /tour/234fad4/reviews
// GET /tour/234fad4/reviews

router.use('/:tourId/reviews', reviewRouter);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);


router.route('/tour-stats').get(tourController.getTourStats);
router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'),
    tourController.getMonthlyPlan
  );

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getToursWithin);
// /tours-within?distance=233&center=-40,45&unit=mi
// /tours-within/233/center/-40,45/unit/mi

router.route('/distances/:latlng/unit/:unit').get(tourController.getDistances);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.createTour
  );

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.uploadTourImages, // upload multiple images
    tourController.resizeTourImages, // resize multiple images
    tourController.updateTour
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour
  );

module.exports = router;
