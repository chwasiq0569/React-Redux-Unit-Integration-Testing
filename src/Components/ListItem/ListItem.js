import React, { Component } from "react";
import { PropTypes } from "prop-types";

class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, desc } = this.props;
    if (!title) return null;
    return (
      <div data-test="listItemComponent">
        <h1 data-test="componentTitle">{title}</h1>
        <p data-test="componentDesc">{desc}</p>
      </div>
    );
  }
}

export default ListItem;

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
