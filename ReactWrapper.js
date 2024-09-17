function initRender() {
    // Define a React component
    const { useState } = React;

    function ReactWrapper() {
        const [paymentSuccess, setPaymentSuccess] = useState(false);

      return (
        <div>
          <h1>Counter: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    }

    // Render the component into the root element
    ReactDOM.createRoot(document.getElementById('scriptDiv')).render(<ReactWrapper />);
  }