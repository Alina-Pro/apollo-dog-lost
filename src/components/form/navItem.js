import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDotCircle as Available,
  faCircle as Unavailable,
  faCheckCircle as Completed,
  faExclamationCircle as Invalid
} from "@fortawesome/free-solid-svg-icons";

const colors = {
  default: "#d2ddef",
  active: "#6dc5ab",
  prev: "#384b5d",
  error: "#c05f68"
};

export default class NavItem extends Component {
  render() {
    let icon = Available,
      size = "2x",
      color = colors.default;
    if (this.props.prev) color = colors.prev;
    if (this.props.active) color = colors.active;
    if (!this.props.valid) color = colors.error;

    if (this.props.completed) icon = Completed;
    if (!this.props.valid) icon = Invalid;
    if (!this.props.avaible) {
      icon = Unavailable;
    }

    return (
      <li
        className={this.props.avaible ? "avaible" : "unavaible"}
        onClick={this.props.onClick}
      >
        <FontAwesomeIcon icon={icon} style={{ color: color }} size={size} />

        <span className="tail" style={{ backgroundColor: color }} />

        <b style={{ backgroundColor: color }}>
          <u className="t" style={{ borderColor: color }} />
          {this.props.tooltip}
        </b>
      </li>
    );
  }
}
