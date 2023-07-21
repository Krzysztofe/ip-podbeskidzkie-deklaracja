import React from 'react';


interface Props {
  steps: JSX.Element[];
  currentStepIdx: number;
}

const StepsHeader = (props:Props) => {
    return (
      <header className="wrapper wrapper--formReactionHeader ">
        <h3 className="formReaction__stepIdx ">
          Krok {props.currentStepIdx + 1}/{props.steps.length}
        </h3>
      </header>
    );
};

export default StepsHeader;