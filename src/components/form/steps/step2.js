import React, { Component } from "react";
import { Radio, Button } from "antd";

export default class Step2 extends Component {
  constructor(props) {
    super(props);
    this.stepValid = false;
  }

  validate(e) {
    this.stepValid = true;
    this.props.validate(this.props.num, this.stepValid);
  }

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };

    return (
      <div>
        <fieldset className={!this.props.show ? "block-hide" : ""}>
          <legend>Where did you see the Apollo dog?</legend>

          <Radio.Group
            onChange={e => {
              this.validate(e);
            }}
          >
            <Radio style={radioStyle} value={1}>
              Sydney CBD
            </Radio>
            <Radio style={radioStyle} value={2}>
              Sutherland
            </Radio>
            <Radio style={radioStyle} value={3}>
              Cronulla
            </Radio>
          </Radio.Group>

          <br />
          <br />
          <Button
            disabled={!this.stepValid}
            type="primary"
            onClick={this.props.next}
          >
            Next
          </Button>
        </fieldset>
      </div>
    );
  }
}
