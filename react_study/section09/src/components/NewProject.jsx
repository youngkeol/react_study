import React, { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    const newProject = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    }

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      //shwo error modal 
      modal.current.open();
      return null;
    }
    onAdd(newProject);

  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okey">
        <h2 className='text-xl font-bold text-stone-700 my-4'>invalid Input</h2>
        <p className='text-stone-600 mb-4'>Oops... looks like you forget to enter a value.</p>
        <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button
              className='text-stone-800 hover:text-stone-950'
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className='px-6 py-2 rounded bg-stone-800 text-stone-50 hover:bg-stone-950'
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label="title" ref={title} />
          <Input label="Description" textare ref={description} />
          <Input type="date" label="DueDate" ref={dueDate} />
        </div>
      </div>
    </>
  );
};

export default NewProject;