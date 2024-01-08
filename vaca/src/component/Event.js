const Event = ()=>{
    function showName(){
        console.log('name')
    }
    return (
        <div>
            <button onClick={showName}>Show name</button>
            <button onClick={()=>{
                console.log('age');
            }}>Show age</button>
        </div>
    )

}

export default Event;