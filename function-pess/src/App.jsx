import User from "./User";

function App() {
  const displayName = (name) => {
    alert(name);
  };

  const getUser = () => {
    alert("Get User Function");
  };

  return (
    <>
      <h1>Call Parent Component Function form child component</h1>

      <User displayName={displayName} name="Md Mizanur Rahman" getUser={getUser} />
      <User displayName={displayName} name="John Doe" getUser={getUser} />
      <User displayName={displayName} name="Jane Smith" getUser={getUser} />
      <User displayName={displayName} name="Alice Johnson" getUser={getUser} />
    </>
  );
}

export default App;
