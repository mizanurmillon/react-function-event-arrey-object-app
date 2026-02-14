function User() {
  const getName = (yourName) => {
    return yourName;
  };

  const handelButton = () => {
    alert("Button Clicked");
  };

  function handelInput(e) {
    console.clear();
    console.log("value : ", e.target.value);
  }

  const name = "Md Mizanur Rahman";
  const designation = "Web Developer";

  const handelMouseOver = () => {
    console.log("Mouse Over");
  };

  const handelDoubleClick = () => {
    console.log("Double Click");
  };

  return (
    <div>
      <h1>{getName(name)}</h1>
      <p>{getName(designation)}</p>
      <p onMouseOver={handelMouseOver} onDoubleClick={handelDoubleClick}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button onClick={handelButton}>Click Me</button>
      <button onClick={() => alert("Hello World inline function")}>
        Say Hello
      </button>
      <br /> <br />
      <input type="text" onChange={handelInput} placeholder="enter your name" />
    </div>
  );
}

export default User;
