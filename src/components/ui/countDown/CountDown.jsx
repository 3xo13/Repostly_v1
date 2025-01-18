import React, {useEffect, useState} from 'react'

const CountDown = ({seconds}) => {
    const [timeLeft, setTimeLeft] = useState(seconds || 180); // 3 minutes in seconds
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return() => clearInterval(timerId);
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10
            ? '0'
            : ''}${remainingSeconds}`;
    };
    return (
        <div>
            <p className='text-xl text-red-500'>
                {formatTime(timeLeft)}</p>
        </div>
    )
}

export default CountDown