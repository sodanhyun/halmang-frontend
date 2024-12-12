const checkLogin = () => {
  return localStorage.getItem("auth-storage") ? true : false;
};

export default checkLogin;
