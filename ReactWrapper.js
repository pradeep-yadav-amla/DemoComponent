function initRender(paymentRequest, libraryName, pluginScript) {
    // Define a React component
    const { useState } = React;

    function ReactWrapper() {
        const [paymentSuccess, setPaymentSuccess] = useState(false);
        const [paymentProcessing, setPaymentProcessing] = useState(false);

        const PaymentComponent = window.PaymentManager.default;

        return (
          <div>
            {PaymentComponent ? (
              <PaymentComponent
                PaymentRequest={paymentRequest}
                LibraryName={libraryName}
                PluginScript={pluginScript}
                setPaymentProcessing= {setPaymentProcessing}
                setPaymentSuccess = {setPaymentSuccess}
      
              />
            ) : null}
          </div>
        )      
    }

    // Render the component into the root element
    ReactDOM.createRoot(document.getElementById('scriptDiv')).render(<ReactWrapper />);
  }