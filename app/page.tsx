'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Page(){
  return (
    <main className='p-10 text-center'>
      <h1 className='text-4xl font-bold'>MarlboroMan Visuals</h1>
      <p className='mt-4 text-lg'>Cinematic Drone Services — Starter Pack $299 (2 hrs, 25 images, 3 videos)</p>
      <div className='mt-6'>
        <Card>
          <p>Book now: hello@marlboromanvisuals.com</p>
        </Card>
        <Button className='mt-4'>Book a Flight</Button>
      </div>
    </main>
  );
}