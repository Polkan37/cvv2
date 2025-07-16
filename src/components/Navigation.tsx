'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Awards from './Awards';
import Nav from './Nav';

type NavItem = { href: string; label: string, description: string, title: string };

const NAV_ITEMS: NavItem[] = [
  { href: '/',       label: 'beginning', description: 'Introduction.', title: 'Home'  },
  { href: '/story',       label: 'Logs', description: 'degrees, Internships, and On Job Training.', title: 'My Path'   },
  { href: '/projects',       label: 'creations', description: 'Personal Projects, Wireframes, Mockups.', title: 'Works'    },
//   { href: '/',  label: 'Craftsmanships', description: 'Skill sets and Future Goals.'    },
  { href: '/about',  label: 'About Me', description: 'Overview', title: 'About'     },
  { href: '/contact',  label: 'Contact', description: 'Open new conection if you have new quest for me', title: 'Contact' },
];

export default function Navigation({ }: {}) {
  const path = usePathname();
  const [isActive, setIsActive] = useState(path);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(NAV_ITEMS.find(el => el.href === path)?.title);

  useEffect(() => {
    setIsActive(path);
    const header = NAV_ITEMS.find(el => el.href === path)?.title;
    setTitle(header);
  }, [path])

    return (
        <div className={isOpen ? "navigation active" : "navigation"}>
          <div className="buttons">
            <button className={isOpen ? "burger active" : "burger"}
              onClick={() => setIsOpen(!isOpen)}
              >
              Navigation
            </button>
            <div className="title">{title}</div>
          </div>
          <div className={isOpen ? "mobile-nav active" : "mobile-nav"}>
            <div className="mobile-nav__header">
              <div className="title">Navigation</div>
              <button className="close" onClick={() => setIsOpen(!isOpen)}></button>
            </div>
            <div className="mobile-nav__body">
              <Awards />
              <Nav NAV_ITEMS={NAV_ITEMS} isActive={isActive} setIsOpen={setIsOpen} />
            </div>
          </div>
          <Nav NAV_ITEMS={NAV_ITEMS} isActive={isActive} setIsOpen={setIsOpen}  />
        </div>
    );
}