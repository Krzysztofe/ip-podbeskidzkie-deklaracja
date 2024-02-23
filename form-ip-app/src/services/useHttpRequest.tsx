import { useState } from "react";

const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const sendRequest = async (
    requestConfig: any,
    returnData: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw Error("Something went wrong...");
      } else {
        returnData(response.ok);
        const responseData = await response.json();
        return responseData;
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, sendRequest };
};

export default useHttpRequest;
