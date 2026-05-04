import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalTourMap from '@/components/GlobalTourMap';

export const metadata = {
  title: 'Talking Tours | EZtravelZ',
  description: 'Pick a city. Walk its streets. Hear the story. Step inside the destination with our interactive AI-narrated tours.',
};

export default function TalkingToursPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0f172a] min-h-screen">
        <GlobalTourMap />
      </main>
      <Footer />
    </>
  );
}
