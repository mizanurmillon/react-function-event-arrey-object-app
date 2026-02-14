// import "./App.css";

import { useRef } from "react";

function App() {
  const useUsername = useRef(null);
  const usePassword = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    console.log({ username, password });
  };

  const handleFormRef = (e) => {
    e.preventDefault();
    const username = useUsername.current.value;
    const password = usePassword.current.value;
    console.log({ username, password });
  };

  return (
    <>
      <h1>Uncontrolled Component</h1>

      <form action="" method="post" onSubmit={handleForm}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          id="username"
        />
        <br /> <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
        />
        <br /> <br />
        <button type="submit">Login</button>
      </form>

      <hr />

      <h1>Uncontrolled Component with useRef</h1>
      <form action="" method="post" onSubmit={handleFormRef}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          id="usernameRef"
          ref={useUsername}
        />
        <br /> <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="passwordRef"
          ref={usePassword}
        />
        <br /> <br />
        <button type="submit">Login with useRef</button>
      </form>
    </>
  );
}

export default App;
