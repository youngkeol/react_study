import {useState} from "react";


const Event = (props)=>{
    const [name, setName] = useState('Mike');
    

    function showName(){
        console.log(name);
    }

    function chageName() {
        const newName = (name == 'Mike' ? "Jane" : "Mike");
        setName(newName);
    }

    return (
        <div>
            {name} ({props.age})
            
            <button onClick={chageName}>name</button>
            <button onClick={showName}>Show name</button>
            <button onClick={()=>{
                console.log('age');
            }}>Show age</button>
        </div>
    )

}

export default Event;