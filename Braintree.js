

const BraintreeUI = () => {
    const useScript = url => {
        React.useEffect(() => {
            const script = document.createElement('script');
    
            script.src = url;
            script.async = true;
    
            document.body.appendChild(script);
    
            return () => {
                document.body.removeChild(script);
            }
        }, [url]);
    };
    
    const [scriptLoaded, setScriptLoaded] = React.useState(false);

    React.useEffect(()=>{
         useScript("https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js");
         useScript("https://unpkg.com/react@18/umd/react.development.js");
         useScript("https://unpkg.com/react-dom@18/umd/react-dom.development.js");
         useScript("https://unpkg.com/@babel/standalone/babel.min.js");
         useScript("https://js.braintreegateway.com/web/dropin/1.33.2/js/dropin.min.js");
         setScriptLoaded(true);
    },[]);
    
    React.useEffect(()=>{
        if(scriptLoaded){
            InitializeBraintree(); 
        }
    },[]);
  
    //This function is used to initialize Braintree UI
    const InitializeBraintree = () =>{
        var client_token = "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNkltaDBkSEJ6T2k4dllYQnBMbk5oYm1SaWIzZ3VZbkpoYVc1MGNtVmxaMkYwWlhkaGVTNWpiMjBpZlEuZXlKbGVIQWlPakUzTWpBeE9ESXdNRFlzSW1wMGFTSTZJalZpWlRBM09UUTVMV0l3TnpNdE5EQTNOaTFpTjJVNUxXUXdabUZqTTJRd1l6azVZU0lzSW5OMVlpSTZJbm8yWmpoNWNYSjRjM0oyYWpkeGFtc2lMQ0pwYzNNaU9pSm9kSFJ3Y3pvdkwyRndhUzV6WVc1a1ltOTRMbUp5WVdsdWRISmxaV2RoZEdWM1lYa3VZMjl0SWl3aWJXVnlZMmhoYm5RaU9uc2ljSFZpYkdsalgybGtJam9pZWpabU9IbHhjbmh6Y25acU4zRnFheUlzSW5abGNtbG1lVjlqWVhKa1gySjVYMlJsWm1GMWJIUWlPblJ5ZFdWOUxDSnlhV2RvZEhNaU9sc2liV0Z1WVdkbFgzWmhkV3gwSWwwc0luTmpiM0JsSWpwYklrSnlZV2x1ZEhKbFpUcFdZWFZzZENKZExDSnZjSFJwYjI1eklqcDdmWDAuU2JoUXFzaGFIc3hla1dLTlAwOEwyNS1BcXFtVkdJZmFhS3Rkd3M5TzNtNzk4dXBwUW9OMk5KVVY4dGVqM0ZzUDZJaUFFTm1TZTlwbk5WTnBkTzhVTEEiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvejZmOHlxcnhzcnZqN3Fqay9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJncmFwaFFMIjp7InVybCI6Imh0dHBzOi8vcGF5bWVudHMuc2FuZGJveC5icmFpbnRyZWUtYXBpLmNvbS9ncmFwaHFsIiwiZGF0ZSI6IjIwMTgtMDUtMDgiLCJmZWF0dXJlcyI6WyJ0b2tlbml6ZV9jcmVkaXRfY2FyZHMiXX0sImNsaWVudEFwaVVybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy96NmY4eXFyeHNydmo3cWprL2NsaWVudF9hcGkiLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJtZXJjaGFudElkIjoiejZmOHlxcnhzcnZqN3FqayIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwidmVubW8iOiJvZmYiLCJjaGFsbGVuZ2VzIjpbImN2diJdLCJ0aHJlZURTZWN1cmVFbmFibGVkIjpmYWxzZSwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vb3JpZ2luLWFuYWx5dGljcy1zYW5kLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vejZmOHlxcnhzcnZqN3FqayJ9LCJwYXlwYWxFbmFibGVkIjp0cnVlLCJwYXlwYWwiOnsiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJlbnZpcm9ubWVudE5vTmV0d29yayI6dHJ1ZSwidW52ZXR0ZWRNZXJjaGFudCI6ZmFsc2UsImFsbG93SHR0cCI6dHJ1ZSwiZGlzcGxheU5hbWUiOiJNUlIgU29mdCIsImNsaWVudElkIjpudWxsLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJicmFpbnRyZWVDbGllbnRJZCI6Im1hc3RlcmNsaWVudDMiLCJtZXJjaGFudEFjY291bnRJZCI6Im1ycnNvZnQiLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifX0=";
        var form = document.querySelector('#payment-form');
    
        braintree.dropin.create({
            authorization: client_token,
            container: '#bt-dropin',
            vaultManager: true,
            card: {
                overrides: {
                    styles: {
                        input: {
                            color: 'green',
                            'font-size': '18px'
                        },
                        '.number': {
                            'font-family': 'monospace'
                        },
                        '.invalid': {
                            color: 'red'
                        }
                    },
                    fields: {
                        number: {
                            //placeholder: 'Card Number',
                            formatInput: true // Turn off automatic formatting
                        }
                    }
                },
                cardholderName: {
                    required: true
                    // to make cardholder name required
                    // required: true
                }
            }
            }, function (createErr, instance) {
                $('div .braintree-form__field.braintree-form__checkbox').parent().closest('div').removeClass('braintree-hidden').addClass('form-group');
                $('div .braintree-form__field.braintree-form__checkbox').find('input').attr('id', 'braintree-save-card');
                $('div .braintree-form__field.braintree-form__checkbox').children('input:checkbox').prop('checked', false);
                $('div .braintree-form__field.braintree-form__checkbox').append(`<span class='lbl padding-8' for='braintree-save-card' data-test-selector='spnBraintreeSaveCreditCard'>Save CC for future use</span>`);
                $('div.braintree-form__label').remove();
                form.addEventListener('submit', function (event) {
                    event.preventDefault();
                    var isVault = false;
                    if ($('.braintree-large-button').hasClass('braintree-hidden')) {
                        isVault = true;
                    }
                instance.requestPaymentMethod(function (err, payload) {
                    if (err) {
                        console.log('Error', err);
                        return;
                    }
    
                    // Add the nonce to the form and submit
                    document.querySelector('#nonce').value = payload.nonce;
                    document.querySelector('#details').value = payload.details;
                    alert(payload);
    
                });
            });
        }); 
    }

    return (
        <div>
	    <button class="btn-text btn-text-secondary margin-right-15" id="braintreeInitializer" data-test-selector="btnPayAndSubmit" onclick={()=> InitializeBraintree()}><span>Initialize Braintree</span></button>
        <form id="payment-form" data-test-selector="formBrainTreePayment">
        <section>
            <div class="bt-drop-in-wrapper">
                <div id="bt-dropin"></div>
            </div>
        </section>
        <div class="d-flex justify-content-end">
            <input id="nonce" name="payment_method_nonce" type="hidden" />
            <input id="details" name="payment_method_details" type="hidden" />

            <button class="btn-text btn-text-secondary margin-right-15" id="BraintreeSubmitBtn" data-test-selector="btnPayAndSubmit" type="submit"><span>Pay and Submit</span></button>
            <button class="btn-text btn-text-primary" data-test-selector="btnCancel" id="BraintreeCancelBtn" data-bs-dismiss="modal">Cancel Payment</button>
        </div>
        </form>
        <div id="TokenForm" class="dirtyignore"></div>
        </div>
);
};
        
const domNode = document.getElementById('app')
const root = ReactDOM.createRoot(domNode);
root.render(<BraintreeUI/>)