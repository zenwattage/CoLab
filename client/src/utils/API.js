import axios from "axios";

export default {
    // Saves a talent document to the database
    saveTalent: function(talentData) {
        return axios.post("/api/talents")
    }

}