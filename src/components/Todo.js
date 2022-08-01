import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import styled from "@emotion/styled";
import { Checkbox } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { TiDelete } from "react-icons/ti";
import "./todo.css";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  justify-content: left;
`;

export default function Todo({ todo, checkButtonClick, handleDeleteTodo }) {
  const [count, setCount] = useState(todo.isCompleted ? 0 : 1);
  const checkBoxClick = () => {
    setCount(count + 1);
  };
  console.log(count);
  return (
    <div className="container-todo">
      <Checkbox
        className="btnCheckBox"
        checked={todo.isCompleted}
        onChange={() => checkBoxClick() & checkButtonClick(todo.id, count)}
      />
      <ButtonStyled className="btnStyled" variant="outlined">
        {todo.name}
      </ButtonStyled>
      <div className="btnDelete">
        <TiDelete className="icon" onClick={() => handleDeleteTodo(todo.id)} />
      </div>
    </div>
  );
}
