'use client'
import {useRef, useState} from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';
export default function ImagePicker({label, name}){
    const [pickerImage, setPickerImage] = useState();

    const imageInput = useRef();
    function handlePickerClick (){
        imageInput.current.click();
    }
    function handlerImageChange(event){
        const file = event.target.files[0];
        console.log(file)

        if(!file) {
            setPickerImage(null)
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickerImage(fileReader.result);
        }
        fileReader.readAsDataURL(file)
    }
    return <div className={classes.picker}>
        <label htmlFor="image">{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickerImage && <p>NO image picker yet.</p>}
                {pickerImage && <Image src={pickerImage} alt="the image selected by the user" fill />}

            </div>
            <input 
                className={classes.input}
                type="file" 
                id="image"
                accept="image/png, image/jpeg"
                name ={name}
                ref={imageInput}
                onChange={handlerImageChange}
                required
            />
            <button className={classes.button} type="button" onClick={handlePickerClick}>
                Picker an Image
            </button>
        </div>

    </div>
}