import React from "react";
import axios from "axios";

import Navbar from "./components/layout/navbar/Navbar.component";
import UserList from "./components/users/user-list/user-list.component";

import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    try {
      this.setState({
        loading: true
      });

      const response = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const users = response.data;
      this.setState({
        users,
        loading: false
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <UserList loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
