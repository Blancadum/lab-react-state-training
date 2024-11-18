import Panel from "../panel/panel";
import { useState } from "react";

function Counter({ min = 0, className = '' }) {
    const [count, setCount] = useState(0);

    const handleCounterUp = () => {
        setCount(count + 1);
    };

    const handleCounterDown = () => {
        if (count > min) {
            setCount(count - 1);
        }
    };

    return (
        <Panel className={`m-4 d-flex gap-1 align-items-center justify-content-center ${className}`}>
            <button className="btn btn-primary btn-sm gap-2" onClick={handleCounterDown}> - </button>
        
            <p className="m-0 fs-2 text-center fixed-width-number">{count}</p>

            <button className="btn btn-primary btn-sm gap-2" onClick={handleCounterUp}> + </button>       
        </Panel>
    );
}

export default Counter;