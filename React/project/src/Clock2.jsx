import { useState, useEffect, useRef } from "react";

function Clock2() {
    const [time, setTime] = useState(new Date());
    const [running, setRunning] = useState(true);
    const timerRef = useRef(null);

    useEffect(() => {
        if (running) {
            timerRef.current = setInterval(() => setTime(new Date()), 1000);
        }
        return () => clearInterval(timerRef.current);
    }, [running]);

    return (
        <div>
            <h1>Clock with Start & Stop</h1>
            <h2>Date: {time.toLocaleDateString()}</h2>
            <h2>Time: {time.toLocaleTimeString()}</h2>
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Stop</button>
        </div>
    );
}

export default Clock2;
