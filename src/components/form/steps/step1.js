import React, { Component } from "react";
import { Button } from "antd";

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.inputs = {
      contactNumber: { valid: false }
    };
    this.stepValid = false;
  }

  validate(e) {
    this.inputs[e.target.name] = {
      valid: e.target.validity.valid
    };

    this.stepValid = true;
    for (let k in this.inputs) {
      if (!this.inputs[k].valid) this.stepValid = false;
    }

    let message = "";

    if (e.target.name === "contactNumber" && !e.target.validity.valid) {
      this.stepValid = false;
      message = "Please enter correct phone number";
    }

    this.props.validate(this.props.num, this.stepValid, message);
  }

  next() {
    this.stepValid = true;
    for (let k in this.inputs) {
      if (!this.inputs[k].valid) this.stepValid = false;
    }
    if (this.stepValid) {
      this.props.next();
    }
  }

  render() {
    return (
      <fieldset className={!this.props.show ? "block-hide" : ""}>
        <legend>Your contact details </legend>

        <input
          name="name"
          required
          className="ant-input"
          type="text"
          placeholder="Name"
          minLength="3"
          onChange={e => {
            this.validate(e);
          }}
        />
        <br />
        <br />
        <input
          name="contactNumber"
          required
          className="ant-input"
          type="text"
          placeholder="Phone number should be more 7 digits"
          minLength="7"
          onChange={e => {
            this.validate(e);
          }}
        />

        <br />
        <br />
        <Button
          disabled={!this.stepValid}
          type="primary"
          onClick={e => {
            this.next();
          }}
        >
          Next
        </Button>
      </fieldset>
    );
  }
}
