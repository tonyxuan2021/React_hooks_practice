import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        options={options}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The Shade of Blue",
    value: "blue",
  },
];

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front end js framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a best js lib amoung engineers",
//   },
//   {
//     title: "How to use React?",
//     content: "React is used by creating components",
//   },
// ];

export default App;
