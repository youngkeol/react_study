import React, { forwardRef } from 'react';


const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
const Input = forwardRef(({ label, textare, ...props }, ref) => {
  return (
    <p className='flex flex-col gap1 my-4'>
      <label
        className='text-sm font-bold uppercase text-stone-500'
      >
        {label}
      </label>
      {
        textare ?
          <textarea ref={ref} {...props} className={classes} /> :
          <input ref={ref} {...props} className={classes} />
      }
    </p>
  );
});

export default Input;