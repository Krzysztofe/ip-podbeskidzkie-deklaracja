import StepsContainer from "../stepsContainer/StepsContainer";
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
        <StepsContainer />
      </main>
    </>
  );
};

export default IndexSteps;
