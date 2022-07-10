import React, { useState } from "react";
import Task from "./Task";
import { Link } from "react-router-dom";

import { Tasks } from "./Data";
import { FaArrowLeft, FaArrowRight, FaArrowsAlt } from "react-icons/fa";

export default function Board() {
  const statusList = ["Backlog", "Todo", "InProgress", "Done"];
  const [tasksList, setTasksList] = useState(Tasks);

  const leftArrowClickedHandler = (card, status) => {
    const currentPosition = statusList.findIndex((s) => s === status);
    if (currentPosition === 0) return;
    const prevStatus = statusList[currentPosition - 1];
    setTasksList(
      tasksList.map((task) => {
        return task.title === status
          ? { ...task, cards: task.cards.filter((c) => c.cid !== card.cid) }
          : task.title === prevStatus
          ? { ...task, cards: task.cards.concat(card) }
          : task;
      })
    );
  };
  const rightArrowClickedHandler = (card, status) => {
    const currentPosition = statusList.findIndex((s) => s === status);
    if (currentPosition === statusList.length - 1) return;
    const prevStatus = statusList[currentPosition + 1];
    setTasksList(
      tasksList.map((task) => {
        return task.title === status
          ? { ...task, cards: task.cards.filter((c) => c.cid !== card.cid) }
          : task.title === prevStatus
          ? { ...task, cards: task.cards.concat(card) }
          : task;
      })
    );
  };

  return (
    <div>
      <nav>
        <Link to="/ass02">Go to Assignment-02</Link>
      </nav>
      <div className="todo-container">
        <Task
          setTasksList={setTasksList}
          tasksList={tasksList}
          statusList={statusList}
        />
        <div
          className="tasks"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {tasksList.map((task, index) => (
            <div className="container-fluid" key={task.id}>
              <h6 style={{ marginBottom: "15git %" }}>{task.title}</h6>
              <>
                {task.cards.map((card, index) => (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                    key={card.cid}
                  >
                    <p
                      style={{
                        display: "block",
                        border: "1px solid black",
                        padding: "5px",
                        width: "150px",
                        background: `${
                          task.title === statusList[0]
                            ? "red"
                            : task.title === statusList[1]
                            ? "orange"
                            : task.title === statusList[2]
                            ? "blue"
                            : "green"
                        }`,
                      }}
                    >
                      {card.name}
                    </p>
                    <span
                      onClick={() => leftArrowClickedHandler(card, task.title)}
                    >
                      <FaArrowLeft />
                    </span>
                    <span>
                      <FaArrowsAlt />
                    </span>
                    <span
                      onClick={() => rightArrowClickedHandler(card, task.title)}
                    >
                      <FaArrowRight />
                    </span>
                  </span>
                ))}
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
