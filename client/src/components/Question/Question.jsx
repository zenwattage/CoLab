import React, { Component } from 'react';
import "./style.css";

export default class Question extends Component {

  render() {
    return (
      (!this.props.isHide) && <div className="Question" isHide={this.props.isHide} enableChangeState>
        <p>{this.props.question}</p>
        <form>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="yes"
                className="form-check-input"
              />
              Yes
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="no"
                className="form-check-input"
              />
              No
            </label>
          </div>

        </form>
      </div>
    )
  }
}

<<<<<<< HEAD
// {/* <Button isHide = {this.state.HideSub} value={this.props.question} enableChangeState>{this.props.question}</Button> */ }
=======
>>>>>>> 02fa318437d8e9d41f68c5111ade5f5a5e104341
