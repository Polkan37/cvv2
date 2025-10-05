'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { Title } from '@/components/Title';

export default function StylebookPage() {


  return (
    <div className="wrapper">
        <div className="">
          <p>button primary</p>
          <Button >send message [enter]</Button>
        </div>
        <div className="">
          <p>button secondary</p>
          <Button $type="secondary">discard [esc]</Button>
        </div>
        <div className="">
          <p>button bordered</p>
          <Button $type="bordered">view live</Button>
        </div>
        <div className="">
            <Title as="h1">Main Heading</Title>
            <Title as="h2">Subheading</Title>
            <Title as="h3">Section Title</Title>
            <Title as="h4">Card Title</Title>
        </div>
    </div>
  );
}