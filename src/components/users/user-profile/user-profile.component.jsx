import React, { Component } from "react";

class UserProfile extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gist,
      hireable
    } = this.props.user;

    const { loading } = this.props;
    return <div>User Profile: {name}</div>;
  }
}
export default UserProfile;
