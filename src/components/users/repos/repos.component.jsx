import React from "react";
import PropTypes from "prop-types";

import RepoItem from "../repo-item/repo-item.component";

const Repos = ({ repos }) =>
  repos.map(repo => <RepoItem key={repo.id} repo={repo} />);

Repos.proptypes = {
  repos: PropTypes.array.isRequired
};
export default Repos;
