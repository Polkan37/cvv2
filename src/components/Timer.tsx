'use client';

import { useEffect, useState } from 'react';
import Typewriter from './Typewriter';

export default function Timer() {
  const pad = (num: number) => String(num).padStart(2, '0');

  const getTimes = () => {
    const now = new Date();
    const serverTime = `${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}`;
    const localTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    return [
      `server time: <b>${serverTime}</b>`,
      `local time: <b>${localTime}</b>`
    ];
  };

  const [messages, setMessages] = useState(getTimes);

  useEffect(() => {
    const update = () => setMessages(getTimes());

    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    let intervalId: number;
    const timeoutId = window.setTimeout(() => {
      update();
      intervalId = window.setInterval(update, 60 * 1000);
    }, msUntilNextMinute);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="info-right">
      <div className="info-item timer">
        <Typewriter messages={messages} />
      </div>
    </div>
  );
}
