import React from "react";
import Header from "./Header";
import MainBody from "./MainBody";

const Container = (props) => {
  return (
    <form>
      <Header titleFromContainer = {props.titleFromApp} />
      <div>
        <MainBody />
      </div>
    </form>
  );
};

export default Container;
