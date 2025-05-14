const Login = ({ email = "krishna@gmail.com", password = "12345" }) => {
  return (
    <div>
      <h1>Login</h1>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default Login;
