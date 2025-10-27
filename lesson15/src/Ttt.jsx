import { React, useState } from "react";

const Ttt= () => {

    //const [value, setValue] = useState();
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Counter is: {count}</h2>
            <button onClick={()=> setCount(count + 1)}> +1 </button>
            <button onClick={() => setCount(count * 2)}> *3 </button>
        </div>
    )
}

export default Ttt