import React from "react";
import LoginForm from "../LoginForm";

import { connect } from "react-redux";

const Login = ({ user }) => (
  <div>
    {console.log(user)}
    <span>{user.email}</span>
    <span> {user.senha}</span>
    <LoginForm />
  </div>
);

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Login);
