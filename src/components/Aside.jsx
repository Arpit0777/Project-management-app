import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Aside({ clicked, project, onAddProject, selectedProjectId }) {
    return (
        <aside className="w-1/3 px-6 py-16 bg-black rounded-r-xl md:w-72">
            <h1 className="text-white text-lg ml-1.5 mt-1.5">Your Projects</h1>
            <div >
                <button onClick={clicked} className="my-3 px-4 py-2 bg-stone-800 text-stone-200 text-md hover:bg-stone-700 hover:text-stone-50 rounded-md">+Add Project</button>

            </div>
            <ul >
                {project.map((project) => {
                    let cssClass = "w-full text-left px-2 py-1 my-1 text-stone-50  hover:bg-stone-800 rounded-md";
                    if (project.id === selectedProjectId) {
                        cssClass += ' bg-stone-800'
                    }
                    else{
                        cssClass+=' bg-black';
                    }
                    return (
                        <li key={project.id}><button onClick={()=>onAddProject(project.id)} className={cssClass}>{project.title}</button></li>
                    );
                }

                )}
            </ul>

        </aside>
    );
}