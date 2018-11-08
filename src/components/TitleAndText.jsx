import React from "react";
import TextH1 from "./TextH1";
import TextH2 from "./TextH2";

function TitleAndText({ title, text }) {
  return (
    <div>
      <TextH2 text={title} />
      <TextH1 text={text} />
    </div>
  );
}

export default TitleAndText;
