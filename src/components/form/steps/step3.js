import React, { Component } from "react";
import { Button } from "antd";

export default class Step3 extends Component {
  constructor(props) {
    super(props);
    this.inputs = {
      meetDate: { valid: false }
    };
    this.stepValid = false;
  }

  validate(e) {
    this.inputs[e.target.name] = {
      valid: e.target.validity.valid
    };

    let dateStart = "2019-06-01";
    let dateEnd = "2019-06-21";

    if (e.target.value >= dateStart && e.target.value < dateEnd) {
      this.stepValid = true;
    } else {
      this.stepValid = false;
    }

    for (let k in this.inputs) {
      if (!this.inputs[k].valid) this.stepValid = false;
    }

    this.props.validate(this.props.num, this.stepValid);
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
      <div>
        <fieldset className={!this.props.show ? "block-hide" : ""}>
          <legend>Date of meeting the Apollo dog</legend>

          <input
            id="date-id"
            name="meetDate"
            required
            className="ant-input"
            type="date"
            onChange={e => {
              this.validate(e);
            }}
          />
          <br />
          <br />
          <p>
            {" "}
            Please note the Apolo dog was missing <br /> between June 01, 2019,
            and June 20, 2019.{" "}
          </p>
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
      </div>
    );
  }
}
