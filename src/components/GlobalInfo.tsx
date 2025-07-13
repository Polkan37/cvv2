'use client';
import Typewriter from './Typewriter';
import { useEffect, useState } from 'react';

export default function GlobalInfo({ }: {}) {
    const [count, setCount] = useState<number>(6197);
    const now = new Date();
    const pad = (num: number) => String(num).padStart(2, '0');
    const serverTime = pad(now.getUTCHours()) + ":" + pad(now.getUTCMinutes());
    const localTime = pad(now.getHours()) + ":" + pad(now.getMinutes());
    const timerUTCstring = `server time: <b>${serverTime}</b>`;
    const timerLocalstring = `local time: <b>${localTime}</b>`;
    const awarder = Number(count).toLocaleString();

    useEffect(() => {
        const stored = localStorage.getItem('counterValue');
        if (stored !== null) setCount(parseInt(stored, 10));
    }, []);

    useEffect(() => {
        localStorage.setItem('counterValue', count.toString());
    }, [count]);


    const increment = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCount(prev => ++prev);

        const coin = document.createElement('div');
        coin.className = 'coin';

        const buttonRect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - buttonRect.left;
        const y = e.clientY - buttonRect.top;

        // позиція відносно body
        const globalX = e.clientX;
        const globalY = e.clientY;

        coin.style.left = `${globalX - 12}px`; // центр монетки
        coin.style.top = `${globalY - 12}px`;

        document.body.appendChild(coin);

        setTimeout(() => {
            coin.remove();
        }, 800); // тривалість анімації
    };

    return (
        <div className="info">
            <div className="info-left">
                <div className="info-item">
                    <span>07</span> Level
                </div>
                <div className="info-item">
                    <button onClick={increment}>+</button>
                    <span>{awarder}</span>
                    coins awarded


                    <div id="coin-template" className="coin"></div>
                </div>
            </div>
            <div className="info-right">
                <div className="info-item timer">
                    <Typewriter messages={[timerUTCstring, timerLocalstring]} />
                </div>
            </div>
        </div>
    );
}