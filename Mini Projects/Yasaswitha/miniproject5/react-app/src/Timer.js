import React,{useEffect,useState} from "react";

function Timer(){
    const [count,setCount] = useState(0);
    useEffect(() =>{
        document.title='You clicked ${count} times'
    }, [count]);
return(
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count+1)}>Click Here!</button>
    </div>
);
}

export default Timer;