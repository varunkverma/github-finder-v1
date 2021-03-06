import React, { Fragment } from "react";
import PropTypes from "prop-types";

import UserItem from "../user-item/user-item.component";
import Spinner from "../../spinner/spinner.component";

const UserList = ({ loading, users }) => (
  <Fragment>
    {loading ? (
      <Spinner />
    ) : (
      <div style={userListStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )}
  </Fragment>
);

UserList.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired
};

const userListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default UserList;
