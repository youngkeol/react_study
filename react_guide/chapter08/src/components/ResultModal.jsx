import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import { createPortal} from 'react-dom'
const ResultModal = ({result, targetTime, remainingTime, onReset}, ref) => {
    const dialog =  useRef();
    
    const useLost =  remainingTime <= 0;
    const formattedRemainingTime = (remainingTime /1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime*1000)) * 100);

    useImperativeHandle(ref, ()=>{
        return {
            open() {
                dialog.current.showModal();
            }
        };
    })
    return createPortal(
        <dialog 
            ref={dialog} 
            className="result-modal" 
            onClose={onReset}
        >
          {useLost && <h2>You lost</h2>} 
          {!useLost && <h2>Your Score {score}</h2>} 
          <p>The target time was <strong>{targetTime} seconds.</strong></p>
          <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
          <form method="dialog" onSubmit={onReset}>
            <button >Close</button>
          </form>
        </dialog>, 
        document.getElementById("modal")
    );
};

export default forwardRef(ResultModal);