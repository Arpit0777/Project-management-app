import proImg from '../assets/no-projects.png';
export default function NoProjectSelected({clicked}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img src={proImg} className="w-36 h-36 object-contain mx-auto"/>
            <h1 className="text-stone-600 font-bold mt-4 text-2xl">No Project Selected</h1>
            <p className="text-stone-500 text-base my-4">Select a Project or add a new Project</p>
            <p><button onClick={clicked}className="px-2 py-2 text-white bg-stone-900 hover:bg-stone-700 rounded-md">Create new Project</button></p>
        </div>
    );
}