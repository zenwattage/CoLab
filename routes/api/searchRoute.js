//? This file's purpose is:
//? To control the logic that runs
//? when USER pings "/search"
const mongoose = require("mongoose");
const express = require("express");
const db = require("../../models");
const router = express.Router();
const userController = require("../../controllers/userController");

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
  console.log("searchRoute! Profession Query: " + professionQuery);
  console.log("searchRoute! Talent Query: " + talentQuery);

  // * THIS CODE PERFORMS THE DB SEARCH

  // TODO ADD THIS IN { userProfession: "Dancer" }
  db.user
    .find({})
    // .find(req.query)
    // .sort({ date: -1 })
    .then(res => console.log(res))
    .catch(err => res.status(422).json(err));

  // userController.search;
});

module.exports = router;
