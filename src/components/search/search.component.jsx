import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  handleOnChangeText = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} className="form">
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleOnChangeText}
            placeholder="Search User..."
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
