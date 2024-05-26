import { forwardRef } from "react";
const Input =  forwardRef(function Input({label,textarea,...props},ref){
    return (
       <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {textarea?<textarea ref={ref}className="w-full  border-b-2 border-stone-400 bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-500" {...props}/>:<input ref={ref} className="w-full bg-stone-300 border-b-2 border-stone-400 text-stone-600 focus:outline-none focus:border-stone-600"{...props}/>}
       </p>
    );
});
export default Input;