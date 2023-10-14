import React from 'react'
import Button from './Button'
import axios from 'axios';

interface ITasks {
  id: string,
  title: string,
}

export default function Tasks() {
  const [tasks, setTasks] = React.useState<ITasks[]>([]);
  const [errorMessage, setErrorMessage] = React.useState<string | null>();


  const handleClick = async () => {
    try {
      const { data } = await axios.get<ITasks[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTasks(data);
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <h1>Tasks from API</h1>
      <Button onClick={handleClick} disabled={false}>Get tasks from API</Button>
      {tasks.length > 0 && tasks.map((task) => (<p key={task.id}>{task.title}</p>))}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  )
}
