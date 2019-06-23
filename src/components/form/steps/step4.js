import React, { Component } from "react";
import { Button } from "antd";

export default class Step4 extends Component {
  render() {
    return (
      <div>
        <fieldset className={!this.props.show ? "block-hide" : ""}>
          <legend>Confirmation</legend>

          <p>
            Please confirm your details, and our operator will call you next 2
            hours.
          </p>

          <Button type="primary">Confirm</Button>
        </fieldset>
      </div>
    );
  }
}
