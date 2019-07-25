import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Wrapper from "./Wrapper";
import Filter from "./Filter/Filter";
import Footer from "./Footer/index";
import Button from "./Button/Button.jsx";
import Nav from "./Nav/index";
import "./Signup.css";
import professions from "./profession.json";
import Col from "./Col/index";
import Row from "./Row/index";

export default class Signup extends Component {

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

    const { email, password, firstName, lastName, bio, instagram, linkedin, other } = this.state;
    console.log({ email, password, firstName, lastName, bio, instagram, linkedin, other });

    axios({
      url: "/authentication/signup",
      method: "POST",
      data: {
        email,
        password,
        firstName,
        lastName,
        bio,
        instagram,
        linkedin,
        other
      }
    })
      .then((response) => {
        this.props.history.push('/search');
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
    });
  };

  setTalents = (option) => {
    for (var i = 0; i < this.state.professions.length; i++) {
      if (option === this.state.professions[i].profession) {
          this.setState({talents:this.state.professions[i].talents});
          // this.state.subQuestions.push(this.state.professions[i].talents[j].question);
          console.log(this.state.talents)
        }

        // this.setState({ subFilter: this.state.professions[i].subQuestions });
        this.setState({ statement: "Here's the dance I'm good at:" });
      }
    }

  // this is a function that adds all the buttons' value to the talentArray
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
        <Nav />
        <Wrapper />
        <article className="container">
           <blockquote>
             <strong>Welcome</strong> to <em className="creative">our creative</em>  <strong className="community">community</strong>
           </blockquote>
         </article>

        <div className="signuppage">
          <p>Please fill out the registration form to sign-up.</p>

          <form onSubmit={this.handleSubmit}>

            <p className="IMA">I am a:</p>
            <div id="profession">
              {this.state.professions.map(x=> (
                <Button value={x.profession} handleOnClick={this.setTalents}>{x.profession}</Button>
              ))}
            </div>
            <div id="talent">
              <Filter results={this.state.talents} 
              statement={this.state.statement} 
              handleOnClick={this.handleOnClick} 
              className={this.state.className}
              />
            </div>

            <hr />

            {/* Personal info */}
            <div className="personalinfo">
              <h4>Create your account here.</h4>
              <div className="inputtitle"> First name:
                <input className="personalinput" type="text" name="firstName" onChange={this.handleChange} />
              </div>
              <div className="inputtitle">Last name:
                <input className="personalinput" type="text" name="lastName" onChange={this.handleChange} />
              </div>
              <div className="inputtitle">Email:
                <input className="personalinput" type="text" name="email" onChange={this.handleChange} />
              </div>
              <div className="inputtitle">Password:
                <input className="personalinput" type="password" name="password" onChange={this.handleChange} />
              </div>
            </div>

            <p className="subtitle">Tell us about your self.</p>
            <div className="bioform"> Bio:
                    <input
                value={this.state.bio}
                name="bio"
                onChange={this.handleChange}
                type="text"
                placeholder="Insert bio here"
              />
            </div>

            <p className="subtitle"> Add social media links.</p>
            <div className="bioform">Instagram:
                   <input
                value={this.state.instagram}
                name="instagram"
                onChange={this.handleChange}
                type="text"
                placeholder="IG handle"
              />
            </div>

            <div className="bioform">LinkedIn:
                  <input
                value={this.state.twitter}
                name="linkedin"
                onChange={this.handleChange}
                type="text"
                placeholder="Linkedin profile"
              />
            </div>

            <div className="bioform">Other:
                  <input
                value={this.state.other}
                name="other"
                onChange={this.handleChange}
                type="text"
                placeholder="Other site"
              />
            </div>


            <button>Submit</button>

            <hr />

            {/* Portfolio info */}
            <div className ="portfolioinfo">
              <h4 className="subtitle">Now, tell us about your self.
              </h4>
              <Row>
                <Col size="md-7">
                  <div className="bioform"> Bio:
                    <input className="bioinput" value={this.state.bio} name="bio" onChange={this.handleChange} type="text" placeholder="What makes you unique?"
                    />
                  </div>
                </Col>
                <Col size="md-5">
                  <div className="bioform">Instagram @:
                  <input className="personalinput" value={this.state.instagram} name="instagram" onChange={this.handleChange} type="text"
                    // placeholder="IG handle"
                    />
                  </div>
                  <div className="bioform">LinkedIn:
                  <input className="personalinput" value={this.state.twitter} type="text"
                    // placeholder="Linkedin profile"
                    />
                  </div>
                  <div className="bioform">Other:
                  <input className="personalinput" value={this.state.other} name="other" onChange={this.handleChange} type="text" placeholder="Any other info you'd like to share?"
                    />
                  </div>
               </Col>
              </Row>
            </div>
            <button className="submitbutton">Submit</button>
          </form>
          <p>{this.state.errorMessage}</p>
          {console.log(this.state.errorMessage)}
        </div>

        <Footer />
      </Fragment>
    )
  }
}

