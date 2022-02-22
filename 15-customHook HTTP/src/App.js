import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";
function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    const transformTask = (tasksObj) => {
      console.log(tasksObj);
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }
      console.log(loadedTasks);
      setTasks(loadedTasks);
    };
    sendRequest(
      {
        url: "https://react-http-2660e-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
      },
      transformTask
    );
  }, [sendRequest]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
