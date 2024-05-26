import NewTask from './NewTask.jsx';
export default function Tasks({task,onAdd,onDelete}){
    return(
      <section>
        <h2 className="text-2xl font-bold text-stone-600 mb-2">Tasks</h2>
        <NewTask onAdd={onAdd} />
        {/* Task List */}
        <ul className="">
           {task.map(item=>{
            return(
                <li key={item.id} className="my-4 flex justify-between py-2 text-md uppercase text-stone-800 border-b-stone-600 bg-stone-200 rounded-md"><span className="mx-2">{item.text}</span>
                   <button className="p-1 rounded-md text-stone-800 hover:text-red-600" onClick={()=>onDelete(item.id)}>Clear</button>
                </li>
            );
           })}
        </ul>
      </section>
    );
}