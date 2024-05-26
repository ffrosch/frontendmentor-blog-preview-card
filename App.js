const styled = window.styled;

function App() {
  // React.useEffect(() => {}, []);

  const Heading = styled.h1`
    color: red;
  `;

  return (
    <div>
      <Heading>My React App</Heading>
    </div>
  );
}

export default App;
