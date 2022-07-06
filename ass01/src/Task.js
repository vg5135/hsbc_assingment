import React, { useState } from "react";
import { Button, Input } from 'reactstrap';


export default function Task({setTasksList, tasksList, statusList}) {
  let i =0;
  const [value, setValue] = useState("");
  //const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    console.log(value);
    setTasksList(tasksList.map(task=>{
      return task.title === statusList[0] ? { ...task, cards: task.cards.concat({name: value, stage: 0, cid: `ui12${i++}`}) } : task
    }))
    setValue("");
    //setDisabled(true)
  };
  const onChangeAlphaNumericInput = (e) => {
    const value = e.target.value;
    const regex = /^[0-9a-zA-Z(\-)]+$/;
    if (value.match(regex) || value === "") {
      setValue(e.target.value);
    }
  };
  return (
    <div style={{ 'display': 'flex','marginBottom':'2%', 'padding': '2%' }}>
      <form onSubmit={handleSubmit} style={{'display': '-webkit-inline-box'}}>
        <Input
          type="text"
          className="input"
          value={value}
          placeholder="Add a new task"
          onChange={(e) => onChangeAlphaNumericInput(e)}
        />
        <Button disabled={!value}>Add Button</Button>
      </form>
    </div>
  );
}
