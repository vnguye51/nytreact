require('dotenv').config()
const router = require("express").Router();
const axios = require("axios");

const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .delete(articlesController.remove);

router.route('/search')
  .get((req,res) => {
    const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    const APIKEY = process.env.APIKEY
    
    const queryURL = BASEURL + 'api-key=' + APIKEY + '&q=' + req.query.query + '&begin_date='+req.query.start+'0101&end_date='+req.query.end+'0101'
    axios.get(queryURL)
      .then((results) => {res.json(results.data)})
      .catch((err)=>{console.log(err)})
  })
module.exports = router;
