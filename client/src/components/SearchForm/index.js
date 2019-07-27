import React, { Fragment, Component } from 'react';
import Button from "../Button/Button";
import axios from 'axios';
import Filter from "../Filter/Filter";
import professions from "../profession.json";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
export default class SearchForm extends Component {
  state = {
    professions,
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    errorMessage: "",
    talents: [],
    statement: "",
    className: "still",
    profession: "",
    talentArray: [],
    bio: "",
    instagram: "",
    linkedin: "",
    other: "",
    subQuestions:[],
    subTalents:"hide"
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const { email, password, firstName, lastName } = this.state;
    console.log({email, password, firstName, lastName});
    
    axios({
      url: "/authentication/signup",
      method: "POST",
      data: {
        email,
        password,
        firstName,
        lastName
      }
    })
      .then((response) => {
        
        this.props.history.push('/profile');
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.response.data.message
        });
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  setTalents = (option) => {
    for (var i = 0; i < this.state.professions.length; i++) {
      if (option === this.state.professions[i].profession) {
          this.setState({talents:this.state.professions[i].talents});
          // this.state.subQuestions.push(this.state.professions[i].talents[j].question);
          console.log(this.state.talents)
        }

        // this.setState({ subFilter: this.state.professions[i].subQuestions });
        this.setState({ statement: "The type of dancer I want is:" });
      }
    }


    handleOnClick = (value, addOrRemove) => {
      if (addOrRemove) {
        this.state.talentArray.push(value);
        console.log(this.state.talentArray);
       
      }
      else {
        const index = this.state.talentArray.indexOf(value);
        this.state.talentArray.splice(index, 1);
        console.log(this.state.talentArray);
      }
    }

  render() {
    // JSX
    return (
      <Fragment>
        {/* <Nav /> */}
        {/* <Wrapper /> */}
        <div className="signuppage">
          {/* <h1 className="title">Welcome to CoLab!</h1>
          <p>Please fill out the registration form to sign-up.</p>
          <p>You will complete your profile on the next page.</p> */}

          <form onSubmit={this.handleSubmit}>

            <p className="IMA">I am looking for a:</p>
            <div id="profession">
              {this.state.professions.map(x=> (
                <Button value={x.profession} handleOnClick={this.setTalents}>{x.profession}</Button>
              ))}
            </div>
            <div id="talent">
              <Filter results={this.state.talents} 
              // statement={this.state.statement} 
              handleOnClick={this.handleOnClick} 
              className={this.state.className}
              />
            </div>
            <hr />

            {/* <div>First name:
              <input type="text" name="firstName" onChange={this.handleChange} />
            </div>
            <div>Last name:
              <input type="text" name="lastName" onChange={this.handleChange} />
            </div>
            <div>Email:
              <input type="text" name="email" onChange={this.handleChange} />
            </div>
            <div>Password:
              <input type="password" name="password" onChange={this.handleChange} />
            </div> */}

            <button>Submit</button>
          </form>
          <p>{this.state.errorMessage}</p>
          {console.log(this.state.errorMessage)}
        </div>

        {/* <Footer /> */}
      </Fragment>
    )
  }
}
