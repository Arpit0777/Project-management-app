import { useRef } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';
export default function NewProject({ onAdd, onCancel }) {
    const modalRef = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        if (enteredTitle.trim() == '' || enteredDescription.trim() == '' || enteredDueDate.trim() == '') {
            modalRef.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }
    return (
        <>
            <Modal ref={modalRef}>

                <h2 className="text-2xl text-stone-500 font-bold">Invalid Input</h2>
                <p className="text-xl my-2 text-stone-500">Please type valid Input Thank You!</p>

            </Modal>

            <div className="w-[35rem] mt-16">
                {/* to add custom width we can use above syntax */}
                <menu className="flex items-center justify-end gap-3">
                    <li><button onClick={handleSave} className="px-4 py-2 text-stone-50 bg-stone-800 rounded-md hover:bg-stone-500">Save</button></li>

                    <li><button onClick={onCancel} className="px-4 py-2 text-stone-50 bg-stone-800 rounded-md hover:bg-stone-500">Cancel</button></li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" textarea={false} />
                    <Input ref={description} label="Description" textarea={true} />
                    <Input type="date" ref={dueDate} label="Due Date" textarea={false} />
                </div>
            </div>

        </>

    )

}