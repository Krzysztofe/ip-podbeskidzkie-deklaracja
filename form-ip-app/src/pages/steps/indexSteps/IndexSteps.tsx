import StepsMainContainer from "../StepsMainContainer";
import StepsHeader from "../stepsHeader/StepsHeader";
import HttpRequestState from "./HttpRequestState";

const IndexSteps = () => {
  return (
    <>
      <header>
        <StepsHeader />
      </header>
      <main>
        <HttpRequestState />
        <StepsMainContainer />
      </main>
    </>
  );
};

export default IndexSteps;
