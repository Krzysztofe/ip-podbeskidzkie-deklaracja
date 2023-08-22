import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = (
    requestConfig: any,
    returnData: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsLoading(true);
    setError(null);

    // console.log("body z fetch", requestConfig.body);
    // console.log("body JSON z fetch", JSON.stringify(requestConfig.body));

    fetch(requestConfig.url, {
      method: requestConfig.method || "GET",
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      // body: JSON.stringify(requestConfig.body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(resp => {
        if (resp.ok) {
          // console.log("resp", resp);
           returnData(resp.ok);
          return resp.json();
        }
        // throw Error("Nie znaleziono metody zapisu");
          // returnData(resp);
      })
      .then(data => {
        setIsLoading(false);
        // returnData(resp);
        // if (typeof returnData === "function") {
        //   return returnData(data);
        // }
        // return null;
      })
      .catch(err => {
        // console.log('err',err)
        setError(err);
        setIsLoading(false);
      });
  };
  return { isLoading, error, sendRequest };
};

export default useHttp;
