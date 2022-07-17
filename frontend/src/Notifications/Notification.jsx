import React from "react";
import { useState } from "react";

const Notification = (props) => {
    const [exit, setExit] = useState(false);
    const [width, setWidth] = useState(0);
    const [intervalID, setInvervalID] = useState(null);

    const handleStartTimer = () =>{
        const id = setInterval(() => {
            setWidth((prev) => {
                if(prev < 100) {
                    return prev + 0.5;
                }

                return prev;
            })
        }, 20);

        setInvervalID(id);
    };

    const handlePauseTimer = () => {
        clearInterval(intervalID);
    };

    const handleCloseNotification = () => {
        handlePauseTimer();
        setExit(true);
        setTimeout(() => {
            props.dispatch({
                type: "REMOVE_NOTIFICATION",
                id: props.id,
            })
        }, 400);
    }

    React.useEffect(() => {
        if(width === 100){
            handleCloseNotification();
        }
    },[width]);

    React.useEffect(() => {
        handleStartTimer();
    }, []);

    return(
        <div onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} className={`notification-item ${props.type === "SUCCESS" ? "success" : "error"} ${exit ? "exit" : ""}`}>
            <p>{props.message}</p>
            <div className={"bar"} style={{width: `${width}%`}} />
        </div>
    )
};

export default Notification;