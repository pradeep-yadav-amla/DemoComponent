import { useEffect, useState } from "react";

        // Define a simple React component
        const App = () => {
          const [color, setColor] = useState("");
          
          useEffect(()=>{
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
