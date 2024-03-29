import React, {useState, useEffect} from 'react'

function Effect2() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("updating document title")
        document.title = `You clicked ${count} times`
    }, [count])

    return(
        <div>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            <button onClick={()=>setCount(count+1)}>Click Me {count} times</button>
        </div>
    )
}

export default Effect2