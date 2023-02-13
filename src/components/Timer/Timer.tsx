import { FC, useEffect, useState } from "react";
import style from "./Timer.module.scss";

interface TimerProps {
  isCounting: boolean;
}
// TODO: player lost, when time is up + loser popup
const Timer: FC<TimerProps> = ({ isCounting }) => {
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
    <div className={isCounting ? style.timerActive : style.timer}>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
};

export default Timer;
