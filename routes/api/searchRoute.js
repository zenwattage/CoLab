//? This file's purpose is:
//? To control the logic that runs
//? when USER pings "/search"
const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
const db = require("../../models");

//* /api/search
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

  // * THIS CODE PERFORMS THE DB SEARCH

  db.users
    .find({ userProfession: "Dancer" })
    // .find(req.query)
    // .sort({ date: -1 })
    .then(QueryRes => res.json(QueryRes))
    .catch(err => res.status(422).json(err));

  // userController.search;
});

module.exports = router;
