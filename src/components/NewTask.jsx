import {useState} from 'react';
export default function NewTask({onAdd}){
    const [enteredValue,setEneteredValue]= useState();
    function handleChange(e){
        setEneteredValue(e.target.value);
    }
    function handleClick(){
        if(enteredValue.trim()===''){
            return;
        }
        onAdd(enteredValue);
        setEneteredValue('');
     
    }
    return(
       <div className="flex items-center gap-4">
         <input onChange={handleChange} value={enteredValue} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-300"/>
         <button className="p-1 bg-stone-600 text-stone-300 hover:bg-black rounded-md" onClick={handleClick}>+Add Task</button>
       </div>
    );
}