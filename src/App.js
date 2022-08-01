import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import TodoLists from './components/TodoLists';
import FormControl,{useFormControl} from '@material-ui/core/FormControl';
import { OutlinedInput } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { css } from '@emotion/css'
import SendIcon from '@material-ui/icons/Send';
import { v4 } from 'uuid';

const TODO_APP_STORAGE_KEY = "TODO_APP";

function App() {
  const [todoList,setTodoList] = useState([]);
  const [textInput,setTextInput] = useState("");

  useEffect(() => {
    if (localStorage.getItem(TODO_APP_STORAGE_KEY)) {
      setTodoList(JSON.parse(localStorage.getItem(TODO_APP_STORAGE_KEY)));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  function MyAddButton() {
    const { filled } = useFormControl() || {};
    
    const onAddButtonClick = useCallback((e) => {
      setTodoList([{ id: v4(), name: textInput, isCompleted: false},...todoList,]);
      setTextInput("");
    },[textInput, todoList]);
    
    const addButton = React.useMemo(() => {
      if(filled) {
        return <Button variant="contained" endIcon={<SendIcon />} color="primary" onClick = {onAddButtonClick}>Send</Button>
      }
    }, [filled]);
    return <div className={css`diplay: flex; width: 20px; height: 36.5px; margin-top: -47px; margin-left: 310px; margin-bottom:20px`}>{addButton}</div>
  }

  const onTextInputChange = useCallback((e) =>{
    setTextInput(e.target.value);
  },[]);
  return (
    <div>
      <h3>Thêm việc cần làm</h3>
      <FormControl>
        <OutlinedInput
          placeholder="thêm việc cần làm...."
          value={textInput}
          onChange={onTextInputChange}
          />
        <MyAddButton/>
      </FormControl>
      <TodoLists todoList={todoList}/>
    </div>
  );
}
export default App;
