import React from "react";
import TextH4 from "./TextH4";
import TextH3 from "./TextH3";

function TitleAndTextSmall({ className, title, text }) {
  return (
    <div className={className}>
      <TextH3 text={title} />
      <TextH4 text={text} />
    </div>
  );
}

export default TitleAndTextSmall;
