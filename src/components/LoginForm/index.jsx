import React, { useState } from "react";

import { login } from "../../store/actions";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

import axios from "axios";

const LoginForm = ({ login }) => {
  const API_URL = "http://localhost:3006/auth/login/";
  const [user, setUser] = useState({ email: "", senha: "" });

  const updateValue = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async e => {
    const { email, senha } = user;
    e.preventDefault();
    let resp = await axios.post(API_URL, {
      email,
      senha
    });
    if (resp.status === 200) {
      login(email, senha);
    }
    console.log(resp);
  };

  return (
    <>
      <form onSubmit={e => handleLogin(e)}>
        <input
          type="text"
          placeholder="exemplo@gmail.com"
          name="email"
          onChange={updateValue}
        />
        <input
          type="password"
          placeholder="Senha"
          name="senha"
          onChange={updateValue}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  login: (email, senha) => dispatch(login(email, senha))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
