import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

const items = [
  {
    title: "What is React?",
    content: "React is a front end js framework",
  },
  {
    title: "Why use React?",
    content: "React is a best js lib amoung engineers",
  },
  {
    title: "How to use React?",
    content: "React is used by creating components",
  },
];

export default App;
