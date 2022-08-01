import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import TodoLists from "./components/TodoLists";
import FormControl, { useFormControl } from "@material-ui/core/FormControl";
import { OutlinedInput } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { css } from "@emotion/css";
import SendIcon from "@material-ui/icons/Send";
import { v4 } from "uuid";

const TODO_APP_STORAGE_KEY = "TODO_APP";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    if (localStorage.getItem(TODO_APP_STORAGE_KEY)) {
      setTodoList(JSON.parse(localStorage.getItem(TODO_APP_STORAGE_KEY)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const checkButtonClick = useCallback((id, count) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        count % 2 === 1
          ? todo.id === id
            ? { ...todo, isCompleted: true }
            : todo
          : todo.id === id
          ? { ...todo, isCompleted: false }
          : todo
      )
    );
  }, []);

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  function MyAddButton() {
    const { filled } = useFormControl() || {};

    const onAddButtonClick = useCallback(
      (e) => {
        setTodoList([
          { id: v4(), name: textInput, isCompleted: false },
          ...todoList,
        ]);
        setTextInput("");
      },
      [textInput, todoList]
    );

    const addButton = React.useMemo(() => {
      if (filled) {
        return (
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            color="primary"
            onClick={onAddButtonClick}
          >
            Send
          </Button>
        );
      }
    }, [filled]);
    return (
      <div
        className={css`
          diplay: flex;
          width: 20px;
          height: 36.5px;
          margin-top: -47px;
          margin-left: 310px;
          margin-bottom: 20px;
        `}
      >
        {addButton}
      </div>
    );
  }

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);
  return (
    <div className="container-app">
      <h3>Thêm việc cần làm</h3>
      <FormControl>
        <OutlinedInput
          placeholder="thêm việc cần làm...."
          value={textInput}
          onChange={onTextInputChange}
        />
        <MyAddButton />
      </FormControl>
      <TodoLists
        todoList={todoList}
        checkButtonClick={checkButtonClick}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
export default App;
