const LoginForm = () => {
  return (
    <>
      <h2>Login form</h2>
      <form>
        <label>
          <span>Login:</span>
          <input type="text" />
        </label>
        <label>
          <span>Password:</span>
          <input type="text" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
