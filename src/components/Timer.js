import React, { useEffect, useState } from "react";

const Timer = () =>{

    const[time,setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setTime(time => time + 1), 1000);
        return () => { clearInterval(interval); }
      }, [])


    return(
        <div>
            <p>You've been on this page for {time} seconds.</p>

        </div>
    )
}

export default Timer;