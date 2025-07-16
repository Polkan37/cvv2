'use client';

import Link from 'next/link';
import React from 'react';

type NavItem = { href: string; label: string, description: string, title: string };

export default function Nav({ 
    NAV_ITEMS, 
    isActive,
    setIsOpen
}: {
    NAV_ITEMS: NavItem[],
    isActive: string,
    setIsOpen: Function
}) {
  

    return (
        <nav>
            {NAV_ITEMS.map(({ href, label, description }) => {
            return (
                <Link
                key={href}
                href={href}
                className={href === isActive ? 'active' : ''}
                onClick={() => setIsOpen(false)}
                >
                <span className='decoration'>{label}</span>
                <p>{description}</p>
                </Link>
            );
            })}
      </nav>
    );
}