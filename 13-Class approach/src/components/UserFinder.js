import { Fragment, useState, useEffect, Component } from "react";
import Users from "./Users";
import ErrorBoundry from "./ErrorBoundry";
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: "",
    };
  }

  componentDidMount() {
    //send http rquest...
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }
  render() {
    return (
      <Fragment>
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        <ErrorBoundry>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundry>
      </Fragment>
    );
  }
}

export default UserFinder;
