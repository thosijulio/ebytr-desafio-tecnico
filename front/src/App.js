import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import getDate from './helpers/getDate';

function App() {
  let [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    description: '',
    status: '',
    date: getDate(),
  })

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/tasks",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => {
      setTasks(res.data);
      console.log(res.data);
    });
  }, []);

  const handleSubmitTask = (ev) => {
    const { description, status, date } = newTask;
    axios({
      method: "post",
      url: "http://localhost:3000/tasks",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        description,
        status,
        date,
      },
    }).then(res => {
      setTasks(res.data);
    });
  }

  const handleFormChange = (name, value) => {
    setNewTask((oldValue) => {
      return {
        ...oldValue,
        [name]: value,
      }
    })
  }

  return (
    <div className="App">
      <section>
        <h2>Lista de Tarefas</h2>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Status</th>
              <th>Data de Criação</th>
            </tr>
          </thead>
          <tbody>
            { tasks.map((task, key) => <tr key={ key }>
              <td>{ task.description }</td>
              <td>{ task.status }</td>
              <td>{ task.date }</td>
            </tr>)}
          </tbody>
        </table>
      </section>
      <section>
        <h2>Criar nova tarefa:</h2>
        <form onSubmit={ handleSubmitTask }>
          Descrição:
          <input
            name="description"
            type="text"
            onChange={ ({ target: { value }}) => handleFormChange('description', value) }
          />
          Status:
          <input
            name="status"
            type="text"
            onChange={ ({ target: { value }}) => handleFormChange('status', value) }
          />
          <button type="submit">Criar nova tarefa</button>
        </form>
      </section>
    </div>
  );
}

export default App;
