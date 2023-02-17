import styled from "styled-components";
import { Link } from "react-router-dom";

// Buttons

export const Button = styled.button`
  width: 100px;
  background-color: #7373de;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    background-color: #404080;
  }
`;

// forming inputs

export const Input = styled.input`
  border-radius: 8px;
  &::placeholder {
    text-align: center;
  }
`;

// containers with flex

export const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

export const MainPageH1 = styled.h1`
  color: violet;
  transition: all 0.4 ease;

  &:hover {
    transition: all 0.4 ease;
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  color: tomato;
  text-decoration: none;
  &:hover {
    border-bottom: 2px soid tomato;
  }
`;
