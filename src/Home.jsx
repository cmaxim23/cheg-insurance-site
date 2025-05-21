// Max Cheg Insurance Website - React + Tailwind CSS

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-red-400 via-orange-300 to-yellow-200 min-h-screen text-gray-800">
      {/* Header Section with Updated Skyline */}
      <section className="relative h-[300px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/raleigh-winter-skyline-vector-49213117.avif')" }}>
        <div className="bg-black/50 p-4 rounded-xl">
          <h1 className="text-4xl font-bold">Max Cheg Insurance</h1>
          <p className="text-lg">Life, Health, Home & Auto Insurance in North Carolina</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {[
          { title: 'Life Insurance', items: ['Term Life', 'Universal Life', 'Whole Life', 'Long-Term Care'] },
          { title: 'Auto Insurance', items: ['Car/Truck Insurance', 'Motorcycle Insurance', 'Off-Road Vehicles & Boats'] },
          { title: 'Home Insurance', items: ['Homeowners', 'Condo', 'Renters', 'Flood Insurance'] }
        ].map((service, i) => (
          <Card key={i} className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <ul className="list-disc list-inside space-y-1">
                {service.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <Button className="mt-4 w-full">Get a Quote</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer Skyline */}
      <footer className="h-[150px] bg-no-repeat bg-bottom bg-contain mt-10" style={{ backgroundImage: "url('/raleigh-skyline-silhouette.png')" }}></footer>
    </main>
  );
}
