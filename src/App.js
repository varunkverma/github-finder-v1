import React, { Component, Fragment } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar/Navbar.component";
import UserList from "./components/users/user-list/user-list.component";
import Search from "./components/search/search.component";
import Alert from "./components/alert/alert.component";
import About from "./components/pages/About.component";

import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };
  // async componentDidMount() {
  //   try {
  //     this.setState({
  //       loading: true
  //     });

  //     const response = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     const users = response.data;
  //     this.setState({
  //       users,
  //       loading: false
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // Search github Users
  searchUser = async text => {
    try {
      this.setState({
        loading: true
      });

      const response = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      this.setState({
        users: response.data.items,
        loading: false
      });
    } catch (err) {
      console.error(err);
    }
  };

  // clear users from state
  clearUsers = () =>
    this.setState({
      users: [],
      loading: false
    });

  // set alert
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });

    setTimeout(() => {
      this.setState({
        alert: null
      });
    }, 3000);
  };

  render() {
    const { loading, users } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUser={this.searchUser}
                      clearUsers={this.clearUsers}
                      setAlert={this.setAlert}
                      showClear={users.length > 0 ? true : false}
                    />
                    <UserList loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
