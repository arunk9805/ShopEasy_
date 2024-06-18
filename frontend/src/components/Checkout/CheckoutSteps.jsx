import React from "react";

import styles from "../../styles/styles";

const CheckoutSteps = ({ active }) => {
  console.log(active);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[100%] 1000px:w-[70%] flex items-center flex-wrap">
        {Array.from({ length: 4 }).map((_, index) => (
          <Step
            key={index}
            stepNumber={index + 1}
            label={getStepLabel(index + 1)}
            active={active >= index + 1}
          />
        ))}
      </div>
    </div>
  );
};

const Step = ({ stepNumber, label, active }) => {
  return (
    <div className={`${styles.noramlFlex}`}>
      <div
        className={`rounded-full w-6 h-6 flex items-center justify-center ${
          active ? "bg-[#3fb42d]" : "bg-[#9c9c9c]"
        }`}
      >
        {active ? (
          <span className="text-[#fff]">✓</span>
        ) : (
          <span className="text-[#fff]">{stepNumber}</span>
        )}
      </div>
      <p style={{ fontSize: "15px", paddingLeft: "5px" }}>{label}</p>
      {stepNumber !== 4 && (
        <div
          className={`${
            active
              ? "w-[30px] 1000px:w-[224px] h-[2px] !bg-[#3fb42d]"
              : "w-[30px] 800px:w-[224px] h-[2px] !bg-[#9c9c9c]"
          }`}
        />
      )}
    </div>
  );
};

const getStepLabel = (stepNumber) => {
  switch (stepNumber) {
    case 1:
      return "Login";
    case 2:
      return "Shipping";
    case 3:
      return "Payment";
    case 4:
      return "Success";
    default:
      return "";
  }
};

export default CheckoutSteps;
