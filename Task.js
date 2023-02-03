
export const Task = (props) => {
    return <div
    style={{backgroundColor: props.completed ? 'green' : 'white'}}
    >{props.taskName}
    <button onClick={ () =>props.completeTask(props.id)}>Complete</button>
    <button onClick={() => props.deleteTask(props.id)}>x</button>
    </div>
}