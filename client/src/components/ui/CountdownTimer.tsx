import { useState, useEffect } from "react";
import { GRAND_OPENING_DATE } from "@/lib/constants";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ 
    days: 0, 
    hours: 0, 
    minutes: 0, 
    seconds: 0 
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = GRAND_OPENING_DATE - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    // Initial calculation
    calculateTimeLeft();
    
    // Set up interval to update countdown
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-6" id="countdown">
      <div className="countdown-item text-center">
        <div className="countdown-number bg-[#CADEEF] rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-3xl font-bold text-[#0054AA]">
          {timeLeft.days}
        </div>
        <p className="text-sm text-[#0677BA] mt-2">Days</p>
      </div>
      <div className="countdown-item text-center">
        <div className="countdown-number bg-[#CADEEF] rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-3xl font-bold text-[#0054AA]">
          {timeLeft.hours}
        </div>
        <p className="text-sm text-[#0677BA] mt-2">Hours</p>
      </div>
      <div className="countdown-item text-center">
        <div className="countdown-number bg-[#CADEEF] rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-3xl font-bold text-[#0054AA]">
          {timeLeft.minutes}
        </div>
        <p className="text-sm text-[#0677BA] mt-2">Minutes</p>
      </div>
      <div className="countdown-item text-center">
        <div className="countdown-number bg-[#CADEEF] rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-3xl font-bold text-[#0054AA]">
          {timeLeft.seconds}
        </div>
        <p className="text-sm text-[#0677BA] mt-2">Seconds</p>
      </div>

      <style jsx>{`
        .countdown-item {
          perspective: 1000px;
        }
        .countdown-number {
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        }
      `}</style>
    </div>
  );
};

export default CountdownTimer;
