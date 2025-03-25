import React from "react";
import styled from "styled-components";

const Div=styled.div`
  margin:40px 0;
`;

function Header() {
  return (
    <Div className="text-center">
      <h1 className="text-3xl font-bold text-blue-700">Contact App</h1>
      <br />
      <span className="text-gray-600">
        <button className="bg-blue-200 text-blue-700 font-medium rounded-md py-1 w-20">
          Botostart
        </button>{" "}
        | React.js Full Course
      </span>
    </Div>
  );
}

export default Header;
