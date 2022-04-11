import React from "react";
import Image from "./components/Image";
import Text from "./components/Text";
import Accordion from "./components/Accordion";

const Components = {
  text: Text,
  image: Image,
  accordion: Accordion,
};

export default function GomoComponent(data) {
  if (typeof Components[data.type] !== "undefined") {
    return React.createElement(Components[data.type], {
      key: data.id,
      data: data
    });
  }
  return React.createElement(
    () => <div>The component {data.type} does not exist.</div>,
    { key: data.id }
  );
};