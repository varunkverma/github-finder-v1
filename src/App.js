import React from "react";

import Navbar from "./components/layout/navbar/Navbar.component";

import UserList from "./components/users/user-list/user-list.component";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <UserList />
        </div>
      </div>
    );
  }
}

export default App;
