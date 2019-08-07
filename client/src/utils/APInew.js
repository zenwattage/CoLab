import axios from "axios";

export default {
  // Gets all books
  searchUsers: function(profession, talents) {
    console.log("I hail from APInew.jsx: Professions:  " + profession);
    console.log("I hail from APInew.jsx: Talents:  " + talents);

    // * Generate Query
    let query = {
      profession: profession,
      talent: talents
    };
    return axios.get("/api/search", query);
  }
};
