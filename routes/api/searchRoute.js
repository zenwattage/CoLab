const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

// * /api/search
router.post("/search", function(req, res) {
  console.log("Checking in from searchRoute");
  //* THIS CODE BUILDS THE QUERY VARIABLES
  //  Grab the correct formatting for both professionSearch and talentSearch
  // redefine for readability
  let professionSearch = req.body.professionSearch;
  let talentSearch = req.body.talentSearch;
  // define arrays to push the lines above into
  let professionQuery = [];
  let talentQuery = [];
  // loop through pQuery and tQuery and push to above arrays
  for (let i = 0; i < professionSearch.length; i++) {
    const element1 = professionSearch[i];
    const element2 = talentSearch[i];
    professionQuery.push(element1);
    talentQuery.push(element2);
  }
  console.log("Profession Query: " + professionQuery);
  console.log("Talent Query: " + talentQuery);

  // userController.search;
});

module.exports = router;
