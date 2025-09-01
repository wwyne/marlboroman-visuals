'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Page() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/drone-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">MarlboroMan Visuals</h1>
        <p className="text-lg mb-6">
          Cinematic Drone Services — Starter Pack $299 (2 hrs, 25 images, 3 videos)
        </p>
        <Card className="bg-white/20 backdrop-blur-sm p-4">
          <p>Book now: hello@marlboromanvisuals.com</p>
        </Card>
        <Button className="mt-6 bg-red-600 hover:bg-red-700">Book a Flight</Button>
      </div>
    </main>
  );
}
