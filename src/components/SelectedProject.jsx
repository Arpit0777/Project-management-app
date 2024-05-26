import Tasks from './Tasks.jsx';
export default function SelectedProject({task,project,onDelete,onAddTask,onDeleteTask}){
    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button className="p-1 bg-stone-600 text-stone-300 hover:bg-black" onClick={onDelete}>delete</button>
                </div>
                <p className="mb-4 text-stone-400">{project.dueDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks task={task} onAdd={onAddTask} onDelete={onDeleteTask}/>
        </div>
    )
}