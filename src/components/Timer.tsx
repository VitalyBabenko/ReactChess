import { FC, useEffect, useState } from "react";

interface TimerProps {
  className: string;
  isCounting: boolean;
}

const Timer: FC<TimerProps> = ({ className, isCounting }) => {
  const [timeLeft, setTimeLeft] = useState(900);
  const getPadTime = (time: number): string => time.toString().padStart(2, "0");
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - +minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimeLeft((prev) => (prev >= 1 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isCounting]);

  return (
    <div className={className}>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
};

export default Timer;
