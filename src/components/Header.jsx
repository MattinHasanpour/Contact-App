import React from "react";
import styled from "styled-components";

const Div=styled.div`
  margin:40px 0;
`;
const Button= styled.button`
  transition: all .1s ease-in;
`

function Header() {
  return (
    <Div className="text-center">
      <h1 className="text-3xl font-bold text-blue-700">Contact App</h1>
      <br />
      <span className="text-gray-600">
        <Button className="bg-blue-200 hover:bg-blue-700 cursor-pointer text-blue-700 hover:text-blue-200 font-medium rounded-md py-1 w-20">
          Botostart
        </Button>{" "}
        | React.js Full Course
      </span>
    </Div>
  );
}

export default Header;
