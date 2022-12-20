import React from "react";
import KeyboardRow1 from "./computer-components/KeyboardRow1";
import KeyboardRow2 from "./computer-components/KeyboardRow2";
import KeyboardRow3 from "./computer-components/KeyboardRow3";
import KeyboardRow4 from "./computer-components/KeyboardRow4";
import KeyboardRow5 from "./computer-components/KeyboardRow5";
import Monitor from "./computer-components/Monitor";
import Mouse from "./computer-components/Mouse";

const Computer = () => {
  return (
    <section className="section-contact u-margin-bottom-section">
      <h3 className="projects__heading-primary">Contact Me</h3>
      <div className="contact__computer">
        <Monitor />
        <div className="u-row contact__row--keyboard-mouse">
          <div className="contact__computer--keyboard">
            <KeyboardRow1 />
            <KeyboardRow2 />
            <KeyboardRow3 />
            <KeyboardRow4 />
            <KeyboardRow5 />
          </div>
          <Mouse />
        </div>
      </div>
    </section>
  );
};

export default Computer;
