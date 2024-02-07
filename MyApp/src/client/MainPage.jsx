/*import getTasks from '@wasp/queries/getTasks'
import { useQuery } from '@wasp/queries'
import createTask from '@wasp/actions/createTask'
import updateTask from '@wasp/actions/updateTask'
import logout from '@wasp/auth/logout'
*/


const MainPage = ({ user }) => {
  return (
    <body>
      <header>
        <h1>think tonk</h1>
        <p>GENERATIVE AI QUIZ</p>
        <button>LOGIN</button>
        <button>REGISTER</button>
        <button>CONTACT</button>
        <button>TRY OUT</button>
      </header>
      <section>
        <aside></aside>
        <article></article>
      </section>
    </body>
  )
}


/*
const Task = ({ task }) => {
  const handleIsDoneChange = async (event) => {
    try {
      await updateTask({
        id: task.id,
        isDone: event.target.checked,
      })
    } catch (error) {
      window.alert('Error while updating task: ' + error.message)
    }
  }

  return (
    <div>
      <input
        type="checkbox"
        id={String(task.id)}
        checked={task.isDone}
        onChange={handleIsDoneChange}
      />
      {task.description}
    </div>
  )
}
const TasksList = ({ tasks }) => {
  if (!tasks?.length) return <div>No tasks</div>

  return (
    <div>
      {tasks.map((task, idx) => (
        <Task task={task} key={idx} />
      ))}
    </div>
  )
}

const NewTaskForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const target = event.target
      const description = target.description.value
      target.reset()
      await createTask({ description })
    } catch (err) {
      window.alert('Error: ' + err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="description" type="text" defaultValue="" />
      <input type="submit" value="Create task" />
    </form>
  )
}
*/
export default MainPage