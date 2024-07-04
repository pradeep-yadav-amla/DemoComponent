
        // Define a simple React component
        const App = () => {
          const [color, setColor] =React.useState()
          
          React.useEffect(()=>{
            setColor("blue");

          },[]
        );

          const buttonClick = () =>{
            alert("clicked");
          }
          return (
              <div>
                  <h1>Hello, React!</h1>
                  <p>This is a basic React component rendered in the browser.</p>
                  <button id='paynow' color={color} onClick={()=>buttonClick()}>Pay noww</button>
              </div>
          );
      };
	  
	        const domNode = document.getElementById('app')
      const root = ReactDOM.createRoot(domNode);
	   root.render(<App/>)
