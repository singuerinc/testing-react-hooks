import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import TextH1 from "./components/TextH1";
import TextH2 from "./components/TextH2";
import TitleAndText from "./components/TitleAndText";
import TitleAndTextSmall from "./components/TitleAndTextSmall";

const GlobalStyles = createGlobalStyle`
  html {
    background-color: #212529;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body, #root {
    color: #eee;
  }

  h1 {
    color: #66d9e8;
  }

  h3 {
    color: #ffe066;
  }
`;

const increment = () => Math.floor(Math.random() * 10);
const format = new Intl.NumberFormat().format;

function App() {
  const [all, setAll] = useState(2504932);
  const [top, setTop] = useState({
    one: 1234212,
    two: 239447,
    three: 21223
  });

  useEffect(() => {
    setInterval(() => {
      setAll(all + increment());
      setTop({
        one: top.one + increment(),
        two: top.two + increment(),
        three: top.three + increment()
      });
    }, 1000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className="sans-serif ma5 flex flex-column justify-center">
        <TextH1 className="mv4" text={"Project"} />
        <TitleAndText title={"All events"} text={format(all)} />
        <hr className="w-100 mv4" />
        <TextH2 className="mv2" text="Top 3" />
        <div className="flex flex-row">
          <TitleAndTextSmall
            className="mr3"
            title="Event 1"
            text={format(top.one)}
          />
          <TitleAndTextSmall
            className="mr3"
            title="Event 2"
            text={format(top.two)}
          />
          <TitleAndTextSmall
            className="mr3"
            title="Event 3"
            text={format(top.three)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
