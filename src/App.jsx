import { ManageContext } from './store/ManagerContext.jsx';
import Aside from './components/Aside.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import {useState} from 'react';
import SelectedProject from './components/SelectedProject.jsx';

function App() {
  const [holder,setHolder] = useState({
    selectedProjectid:undefined,
    projects:[],
    tasks:[],
  });
  // 
  // Making context container:
  const contextVal = {
    item:holder.projects,
    item2:holder.tasks,
    

  }

  // This holder will have object as a value.We can define its key,Value according to us.


//defining clickHandlers for NewrTask component and performing props drilling.

  function handleAddTask(text){
   
    setHolder(prevdata=>{
      const taskId = Math.random();
      const newTask = {
       text:text,
       id:taskId,
      };
      return{
        ...prevdata,
        tasks:[...prevdata.tasks,newTask],
      }
    })
  }
  function handleDeleteTask(id){
    setHolder(prev=>{
      return{
        ...prev,
        tasks : prev.tasks.filter((data)=>data.id!==id),
      }
     });
  }


  function handleDelete(){
    setHolder(prev=>{
      return{
        ...prev,
        selectedProjectid:undefined,
        projects : prev.projects.filter((prevdata)=>prevdata.id!==prev.selectedProjectid),
      }
     });
  }
  function handleStartAddProject(id){
    setHolder(prev=>{
      return{
        ...prev,
        selectedProjectid:id,
      }
     });
  }
  function handleClick(){
     setHolder(prev=>{
      return{
        ...prev,
        selectedProjectid:null,
      }
     });
  }

  function handleOnCancel(){
    setHolder(prev=>{
      return{
        ...prev,
        selectedProjectid:undefined,
      }
     });
  }
  function addingProjects(project){
    const projectId = Math.random();
    const newProject = {...project,
    id:projectId,
    };
    setHolder(prevdata=>{
      return{
        ...prevdata,
        selectedProjectid:undefined,
        projects:[...prevdata.projects,newProject],
      }
    })
  }
  const selectedProject = holder.projects.find(project=>project.id === holder.selectedProjectid) 
  
  let content=<SelectedProject project={selectedProject} onDelete={handleDelete} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} task={holder.tasks}/>;

  if(holder.selectedProjectid===null){
    content = <NewProject onAdd={addingProjects} onCancel={handleOnCancel}/>
  }
  else if(holder.selectedProjectid===undefined){
    content =  <NoProjectSelected clicked={handleClick}/>
  }
  console.log(holder.projects);
  return (
    <main className="h-screen my-8 flex gap-8">
      <Aside clicked={handleClick} onAddProject = {handleStartAddProject} project={holder.projects} selectedProjectId={selectedProject?selectedProject.id:undefined}/>
      {content}
      
      
    </main>
  );
}

export default App;
