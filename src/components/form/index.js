import React from "react";
import NavItem from "./navItem";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";

import "./form.css";

class ApolloForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      steps: [
        {
          tooltip: "Your contact details",
          className: "tooltip",
          completed: false,
          valid: true,
          avaible: true
        },
        {
          tooltip: "Place where the Apollo dog was seen",
          className: "tooltip",
          completed: false,
          valid: true,
          avaible: false
        },
        {
          tooltip: "Date of meeting",
          className: "tooltip",
          completed: false,
          valid: true,
          avaible: false
        },
        {
          tooltip: "Confirmation",
          className: "tooltip",
          completed: false,
          valid: true,
          avaible: false
        }
      ]
    };
  }

  setStep(current) {
    this.setState({ current });
  }
  nextStep() {
    let { current } = this.state;
    current++;
    if (this.state.steps[current]) {
      this.setState({ current });
    }
  }

  stepValidate(stepNum, valid, message) {
    const { steps } = this.state;
    steps[stepNum].valid = valid;
    steps[stepNum].completed = valid;

    if (message) {
      steps[stepNum].tooltip = message;
    }

    const checkSteps = stepNum => {
      const next_step = stepNum * 1 + 1;
      if (steps[next_step]) {
        steps[next_step].avaible = false;
      }
      if (steps[next_step] && steps[stepNum].completed) {
        steps[next_step].avaible = true;
        checkSteps(next_step);
      }
    };
    checkSteps(0);

    this.setState({ steps });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <img src="Apollo-logo-1.png" alt="Apollo logo" className="logo" />
        <div className="ApolloForm">
          <h1>
            The Apollo dog is missing. <br /> Help us to find him!{" "}
          </h1>
          <div className="navigation">
            {this.state.steps.map(({ tooltip, valid, avaible }, num) => (
              <NavItem
                key={num}
                num={num}
                current={this.state.current}
                avaible={this.state.steps[num].avaible}
                completed={this.state.steps[num].completed}
                valid={this.state.steps[num].valid}
                prev={num < this.state.current}
                active={num === this.state.current}
                tooltip={tooltip}
                onClick={() => {
                  this.setStep(num);
                }}
              />
            ))}
          </div>

          <form className="content">
            <Step1
              show={current === 0}
              num={0}
              validate={(i, v, m) => this.stepValidate(i, v, m)}
              next={() => this.nextStep()}
            />
            <Step2
              show={current === 1}
              num={1}
              validate={(i, v, m) => this.stepValidate(i, v, m)}
              next={() => this.nextStep()}
            />
            <Step3
              show={current === 2}
              num={2}
              validate={(i, v, m) => this.stepValidate(i, v, m)}
              next={() => this.nextStep()}
            />
            <Step4
              show={current === 3}
              num={3}
              validate={(i, v, m) => this.stepValidate(i, v, m)}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ApolloForm;
