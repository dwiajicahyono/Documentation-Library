import React, { useState, useEffect } from 'react';

const ComingSoon = () => {
    const [countdown, setCountdown] = useState({
        days: '0d',
        hours: '0h',
        minutes: '0m',
        seconds: '0s',
    });

    useEffect(() => {
        // Set the date we're counting down to
        const countDownDate = new Date("Dec 5, 2023 00:00:00").getTime();

        // Update the countdown every 1 second
        const interval = setInterval(() => {
            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the countdown date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update state
            setCountdown({
                days: days + 'd',
                hours: hours + 'h',
                minutes: minutes + 'm',
                seconds: seconds + 's',
            });

            // If the countdown is over, stop the interval
            if (distance < 0) {
                clearInterval(interval);
                setCountdown({ days: '0', hours: '0', minutes: '0', seconds: 'EXPIRED' });
            }
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex justify-center items-center h-screen bg-gray-800">
        <div className="text-center">
            <h2 className="text-4xl lg:text-5xl text-white font-bold mb-8">Our Website is Coming Soon</h2>
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-12">
                Stay tuned for updates and get ready for an extraordinary experience!
            </p>
            <div className="flex flex-wrap justify-center gap-4 p-2">
                <TimeDisplay label="days" value={countdown.days} />
                <TimeDisplay label="hours" value={countdown.hours} />
                <TimeDisplay label="minutes" value={countdown.minutes} />
                <TimeDisplay label="seconds" value={countdown.seconds} />
            </div>
        </div>
    </section>
    );
};

const TimeDisplay = ({ label, value }) => (
    <div className="bg-white rounded-full px-6 py-2 min-w-[120px]">
        <div className="font-bold text-xl text-gray-800">{value}</div>
        <div className="text-xs uppercase text-gray-500">{label}</div>
    </div>
);

export default ComingSoon;
