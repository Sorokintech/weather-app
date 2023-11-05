import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 50px;
  background-color: transparent;
  display: block;
  position: absolute;
  bottom: 15px;
`;
export const SearchBar = styled.input`
  display: inline-block;
  position: relative;
  border: transparent;
  border-radius: 3px;
  padding-top: 30px;
  background-color: transparent;
  width: 100%;
  height: 40px;
  transition: 0.5s;
  outline: none;
  padding: 20px;
  text-align: start;
  font-family: "Kanit", sans-serif;
  font-size: 20px;
  ::placeholder {
    font-family: "Kanit", sans-serif;
    font-size: 25px;
    transition: 0.5s;
    color: #fff;
    text-align: center;
  }
  :hover {
    background-color: #fff;

    ::placeholder {
      display: none;
      color: transparent;
      margin-left: 500px;
    }
  }
`;
export const Img = styled.div`
  width: 10px;
  height: 10px;
`;
export const list = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255, 1);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-align: center;
  display: block;
  position: absolute;
  bottom: 80%;
`;
export const listItem = styled.div`
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background-color: #eeeeee;
  }
`;
