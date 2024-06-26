import React, { forwardRef, useImperativeHandle } from 'react';
import {createPortal} from 'react-dom'

const Modal = ({children}, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, ()=>{
        return {
            open(){
                dialog.current.showModal()
            }
        }
    });

    return createPortal(
        <dialog ref={dialog}>
            {children}
        </dialog>
    , document.getElementById('modal-root'));
};

export default forwardRef(Modal);