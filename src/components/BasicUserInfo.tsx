'use client';

import { useState } from 'react';
import Typewriter from './Typewriter';
import Link from 'next/link';

const USER_INFO = {
    image: "/user.png",
    name: "Marharyta Neskoromna",
    occupation: "Frontend developer",
    corporation: "Freelancing",
    available: false,
}

export default function BasicUserInfo({ }: {}) {
    const [bageActive, setBageActive] = useState(USER_INFO.available);

    return (
        <div className="basic">
            <div className="basic-icon frame">
                <img src={USER_INFO.image} width="156" alt="user" />

                <div className="small-corners">
                    <div></div><div></div><div></div><div></div>
                </div>
            </div>
            <ul className="basic-list">
                {
                    [
                        { label: "name", option: USER_INFO.name },
                        { label: "occupation", option: USER_INFO.occupation },
                        { label: "corporation", option: USER_INFO.corporation }
                    ].map(({ label, option }) => (
                        <li key={label} className="basic-item">
                            <span>{label}</span>
                            <Typewriter messages={[option]} />
                        </li>
                    ))
                }
                <li className="basic-item" onClick={()=>setBageActive(!bageActive)}>
                    <span>availability</span>
                    {bageActive ?
                        <p className="decoration active-bage bage"><b>open</b> <b>for</b> <b>hire</b></p> :
                        <p className="decoration basic-bage bage">open for hire</p>}
                </li>
                <li className="basic-item">
                    <span>contact</span>
                    <Link
                        href='/contact'
                        className="contact-button"
                    >
                        open connection
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            style={{ color: 'inherit' }}
                        >
                            <g clipPath="url(#clip0_1_47)">
                                <path
                                    d="M14.341 12.0301L18.684 16.3731L13.028 22.0291H11.028V15.3431L6.66402 19.7071L5.24902 18.2931L11.028 12.5151V11.5451L5.24902 5.76505L6.66402 4.35105L11.028 8.71505V2.02905H13.028L18.684 7.68605L14.341 12.0301ZM13.028 13.5441V19.2011L15.856 16.3731L13.028 13.5441ZM13.028 10.5141L15.856 7.68605L13.028 4.85805V10.5151V10.5141Z"
                                    fill="currentColor"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_47">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </li>
            </ul>
        </div>
    );
}