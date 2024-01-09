import React, { useState } from "react";
import Layout from "@theme/Layout";

const URL_REQUEST_DELETE_ACCOUNT_API = 'https://kubusback.fajarhac.com/functions/deleteAccount';
// const URL_REQUEST_DELETE_ACCOUNT_API = 'http://localhost:30202/functions/deleteAccount';
const URL_APP_ID = 'kubus_back_production';

function RequestDeleteAccount() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [succesfulMessage, setSuccesfulMessage] = useState("");

  const onSubmit = (e) => {
    // reset when re-submit
    setIsLoading(true);
    setErrorMessage("");
    setSuccesfulMessage("");

    e.preventDefault();

    console.log(e.target.email.value);
    const email = e.target.email.value;

    // submit to server
    fetch(URL_REQUEST_DELETE_ACCOUNT_API, {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': URL_APP_ID,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        // get response
        if (response.ok) {
          return response.json();
        } else {
          throw response.json();
        }
      })
      .then(data => {
        // Successful
        setIsSuccessful(true);
        setIsLoading(false);
        console.log(`Successful data`);
        console.log(data);
        setSuccesfulMessage(data.result.message);
      })
      .catch((error) => {
        if (typeof error === 'object') {
          // Failed
          error.then((errorJson) => {
            console.log(`------`);
            console.log(errorJson);
            // const errorData = JSON.parse(error);
            setIsSuccessful(false);
            setErrorMessage(errorJson.error);
  
            setIsLoading(false);
          });
        }
        else {
          setErrorMessage('Unexpected Error. Reload and try again');
        }
      })

  };

  return (
    <Layout>
      <div className="container">
        <h1>Request Delete Account</h1>

        <p>
          Read the documentation on request account deletion. Once, you
          understand and you are sure still want to delete your account from
          Kubus, submit your email.
        </p>

        {
          isLoading && (
            <p className="mybox">loading ...</p>
          )
        }

        {!isSuccessful && !isLoading && (
          <div className="mybox myform">
            <form onSubmit={onSubmit}>
              <div className="myform__row">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
                <button>Request Delete Account</button>
              </div>
            </form>
          </div>
        )}


        {/* Response */}

        <div>
          {
            succesfulMessage && <p className="mybox__success">{succesfulMessage}</p>
          }

          {
            errorMessage && <p className="mybox__error">{errorMessage}</p>
          }
        </div>
      </div>
    </Layout>
  );
}

export default RequestDeleteAccount;
