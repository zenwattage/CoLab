import React from "react";
import Button from "../Button/Button"
import "./style.css";

// Using the datalist element we can  autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Profession:</label>
        {/* <input
          value={props.search}
          onChange={props.handleInputChange}
          name=""
          list=""
          type="text"
          className="form-control"
          placeholder="Type in a dog breed to begin"
          id="breed"
        />
        <datalist id="">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist> */}
        <Button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
          </Button>
      </div>
    </form>
  );
}

export default SearchForm;
