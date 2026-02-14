const Fruit = () => {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {index + 1} - {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fruit;
