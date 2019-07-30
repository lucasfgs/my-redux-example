const INITIAL_STATE = {
  email: "lucaslindo@test.com",
  senha: "heheadjqwd"
};

const user = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "LOGIN":
      return {
        email: action.email,
        senha: action.senha
      };
    default:
      return state;
  }
};

export default user;
