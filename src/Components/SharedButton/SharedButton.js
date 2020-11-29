import React, { Component } from "react";
import { PropTypes } from "prop-types";

class SharedButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { buttonText, emitEvent } = this.props;
    return (
      <button data-test="buttonComponent" onClick={emitEvent}>
        {buttonText}
      </button>
    );
  }
}

export default SharedButton;

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};
