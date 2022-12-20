import React from "react";
import { keyboardRow1 } from "../../data/keyboard";

const KeyboardRow1 = () => {
  const row1 = keyboardRow1.map((key, index) => {
    if (key[0] && key[1]) {
      return (
        <div
          key={index}
          className={`contact__keyboard--key contact__keyboard--key-${index}`}
        >
          <div>{key[0]}</div>
          <div>{key[1]}</div>
        </div>
      );
    } else {
      return (
        <div
          className={`contact__keyboard--key contact__keyboard--key-${index}`}
        >
          {key[0]}
        </div>
      );
    }
  });
  return <div className="u-row contact__computer--keyboard-row">{row1}</div>;
};

export default KeyboardRow1;
