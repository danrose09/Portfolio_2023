import React from "react";
import { keyboardRow3 } from "../../data/keyboard";

const KeyboardRow3 = () => {
  const row3 = keyboardRow3.map((key, index) => {
    if (key[0] && key[1]) {
      return (
        <div
          key={index}
          className={`contact__keyboard--key contact__keyboard--key-${index} contact__keyboard--key-row3-${index}`}
        >
          <div>{key[0]}</div>
          <div>{key[1]}</div>
        </div>
      );
    } else {
      return (
        <div
          className={`contact__keyboard--key contact__keyboard--key-${index} contact__keyboard--key-row3-${index}`}
        >
          {key[0]}
        </div>
      );
    }
  });

  return <div className="u-row contact__computer--keyboard-row">{row3}</div>;
};

export default KeyboardRow3;
