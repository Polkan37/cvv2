'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type NavItem = { href: string; label: string, description: string };

const NAV_ITEMS: NavItem[] = [
  { href: '/',       label: 'beginning', description: 'Introduction.'   },
  { href: '/story',       label: 'Logs', description: 'degrees, Internships, and On Job Training.'   },
  { href: '/projects',       label: 'creations', description: 'Personal Projects, Wireframes, Mockups, Prototypes, Animations.'   },
//   { href: '/',  label: 'Craftsmanships', description: 'Skill sets and Future Goals.'    },
  { href: '/about',  label: 'About Me', description: 'Overview'    },
  { href: '/contact',  label: 'Contact', description: 'Open new conection if you have new quest for me'    },
];

export default function Navigation({ }: {}) {
    const path = usePathname();

    return (
        <div className="navigation">
        <nav>
          {NAV_ITEMS.map(({ href, label, description }) => {
            const isActive = path === href;
            return (
              <Link
                key={href}
                href={href}
                className={isActive ? 'active' : ''}
              >
                
                <span className='decoration'>{label}</span>
                <p>{description}</p>
              </Link>
            );
          })}
        </nav>
        </div>
    );
}