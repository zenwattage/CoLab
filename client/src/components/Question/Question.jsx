import React, { Component } from 'react';
import "./style.css";

export default class Question extends Component {

  render() {
    return (
      (!this.props.isHide) && <div className="Question" isHide={this.props.isHide} enableChangeState>
        <p className = "statement question">{this.props.question}</p>
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
<<<<<<< HEAD
}

<<<<<<< HEAD
// {/* <Button isHide = {this.state.HideSub} value={this.props.question} enableChangeState>{this.props.question}</Button> */ }
=======
>>>>>>> e036fd6393197449c18c221365fb08a4f1199e38
=======
}
>>>>>>> 09d0cd35a443262b556b9f6799df0fa678aa58b2
