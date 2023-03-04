import { 
  Component, 
  createEffect, 
  createSignal, 
  For, 
} from 'solid-js';
import { css } from '@emotion/css'

const App: Component = () => {
  type Task = {
    id: string
    text: string
    completed: boolean
  }

  const [taskList, setTaskList] = createSignal([] as Task[]);
  const addTask = (e: Event) => {
    e.preventDefault();
    const taskInput = document.querySelector('#taskInput') as HTMLInputElement;
    const newTask: Task = {
      id: Math.random().toString(36).substring(2),
      text: taskInput.value,
      completed: false,
    }
    setTaskList([newTask, ...taskList()])
    taskInput.value = '';
  }
  const deleteTask = (taskId: string) => {
    const newTaskList = taskList().filter((task) => task.id !== taskId)
    setTaskList(newTaskList)
  }
  const toggleStatus = (taskId: string) => {
    const newTaskList = taskList().map((task) => {
      if (task.id === taskId) {
        return {...task, completed: !task.completed}
      }
      return task
    })
    setTaskList(newTaskList);

    const style = css`
      text-decoration: line-through;
    `
  }
  return (
  <div>
    <h1>todo</h1>
    <form onSubmit={(e) => addTask(e)}>
      <input type="text" placeholder="Add task here..." id="taskInput" required />
      <button type='submit'>
        Add task
      </button>    
    </form>

    <div>
      <h4>tasks</h4>
      <For each={taskList()}>
        {(task: Task) => (
      <div>
        <button onclick={() => deleteTask(task.id)}>X</button>
        <div>id: {task.id}</div>
        <div css={task.completed ? style : ''}
        >{task.text}</div>
        <input type='checkbox' checked={task.completed}/>
      </div>
        )}
      </For>
    </div>
    <head>
    <style>{`
      .checked{
        text-decoration: line-through;
    `}</style>
    </head>
  </div>
  )
}

export default App;
