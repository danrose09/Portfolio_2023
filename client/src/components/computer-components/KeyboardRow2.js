import React from "react";
import { keyboardRow2 } from "../../data/keyboard";

const KeyboardRow2 = () => {
  const row2 = keyboardRow2.map((key, index) => {
    if (index === 13) {
      return (
        <button
          key={index}
          form="contact-form"
          type="submit"
          className={`contact__keyboard--key contact__keyboard--key-${index} contact__keyboard--key-row2-${index}`}
        >
          <div>{key[0]}</div>
          <div>{key[1]}</div>
        </button>
      );
    }
    if (key[0] && key[1] && index !== 13) {
      return (
        <div
          key={index}
          className={`contact__keyboard--key contact__keyboard--key-${index} contact__keyboard--key-row2-${index}`}
        >
          <div>{key[0]}</div>
          <div>{key[1]}</div>
        </div>
      );
    } else {
      return (
        <div
          className={`contact__keyboard--key contact__keyboard--key-${index} contact__keyboard--key-row2-${index}`}
        >
          {key[0]}
        </div>
      );
    }
  });

  return <div className="u-row contact__computer--keyboard-row">{row2}</div>;
};

export default KeyboardRow2;
