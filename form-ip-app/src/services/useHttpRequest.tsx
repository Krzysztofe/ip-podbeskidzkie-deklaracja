import { useState } from "react";

const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = (
    requestConfig: any,
    returnData: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsLoading(true);
    setError(null);

    fetch(requestConfig.url, {
      method: requestConfig.method || "GET",
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(resp => {
        if (!resp.ok) {
          throw Error("Coś poszło nie tak...");
        } else {
          returnData(resp.ok);
          return resp.json();
        }
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  };
  return { isLoading, error, sendRequest };
};

export default useHttpRequest;
