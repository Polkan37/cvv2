'use client';

import Awards from './Awards';
import Timer from './Timer';

export default function GlobalInfo({ }: {}) {

    return (
        <div className="info">
            <Awards />
            <Timer />
        </div>
    );
}