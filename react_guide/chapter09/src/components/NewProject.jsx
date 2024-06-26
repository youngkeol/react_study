import React, {useRef} from 'react';
import Input from './input';
import Modal from './Modal';

const NewProject = ({onAdd}) => {
    const modal = useRef();


    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() ==='' || enteredDescription.trim() ==='' || enteredDueDate.trim() === '') {
            modal.current.open();
            return false;
        }

        onAdd({
            title : enteredTitle, 
            description : enteredDescription,
            dueDate : enteredDueDate, 
        })
    }
    return (
        <>
            <Modal/>
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li>
                        <button className="text-stone-800 hover:text-stone-950">
                            Cancel
                        </button>    
                    </li>
                    <li>
                        <button 
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input
                        ref={title}
                        label="Title"
                        type="text"
                    />
                    <Input
                        ref={description}
                        label="Description"
                        textarea
                    />
                    <Input
                        ref={dueDate}
                        label="Due Date"
                        type="date"
                    />
                </div>
            </div>
        </>
    );
};

export default NewProject;