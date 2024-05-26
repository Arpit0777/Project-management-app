import {createPortal} from 'react-dom';
import {forwardRef,useRef,useImperativeHandle} from 'react';

const Modal =  forwardRef(function Modal({children},ref){
    const dialog = useRef();
    useImperativeHandle(ref,()=>{
        return{
            open() {
                dialog.current.showModal();
            }
        };
    });
    return(
        createPortal(<dialog ref={dialog} className="backdrop:bg-stone-900/90 shadow-md p-4 rounded-md">
            {children}
        <form method="dialog" className="mt-4 text-right">
           <button className="px-2 py-1 text-white bg-stone-900 hover:bg-stone-600 rounded">Close</button>    
        </form>  
        </dialog>,document.getElementById('modal-root'))
    );
});
export default Modal;