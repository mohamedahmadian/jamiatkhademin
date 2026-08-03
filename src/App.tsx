import React, { useState } from 'react';
import { PageType, HomeVariant, ServicesSubTab, AboutSubTab, MediaSubTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/home/HomeView';
import { AboutView } from './components/about/AboutView';
import { ServicesView } from './components/services/ServicesView';
import { MediaView } from './components/media/MediaView';
import { ContributionsView } from './components/contributions/ContributionsView';
import { ContactView } from './components/contact/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [homeVariant, setHomeVariant] = useState<HomeVariant>('bento-standard');
  const [servicesSubTab, setServicesSubTab] = useState<ServicesSubTab>('zaer-register');
  const [aboutSubTab, setAboutSubTab] = useState<AboutSubTab>('intro');
  const [mediaSubTab, setMediaSubTab] = useState<MediaSubTab>('news-announcements');
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);

  const handleNavigateHomeVariant = (variant: HomeVariant) => {
    setHomeVariant(variant);
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateService = (tab: ServicesSubTab) => {
    setServicesSubTab(tab);
    setCurrentPage('services');
  };

  const handleNavigateAbout = (tab: AboutSubTab) => {
    setAboutSubTab(tab);
    setCurrentPage('about');
  };

  const handleNavigateMedia = (tab: MediaSubTab) => {
    setMediaSubTab(tab);
    setCurrentPage('media');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#1F2925] font-sans">
      
      {/* Top Header Navbar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        homeVariant={homeVariant}
        onNavigateHomeVariant={handleNavigateHomeVariant}
        onNavigateService={handleNavigateService}
        onNavigateAbout={handleNavigateAbout}
        onNavigateMedia={handleNavigateMedia}
      />

      {/* Main Page Area */}
      <main className="flex-grow pt-6">
        {currentPage === 'home' && (
          <HomeView
            activeVariant={homeVariant}
            onSelectVariant={handleNavigateHomeVariant}
            setCurrentPage={setCurrentPage}
            onNavigateService={handleNavigateService}
            onNavigateMedia={handleNavigateMedia}
            onSelectNews={(newsId) => {
              setSelectedNewsId(newsId);
            }}
          />
        )}

        {currentPage === 'about' && (
          <AboutView initialTab={aboutSubTab} />
        )}

        {currentPage === 'services' && (
          <ServicesView initialTab={servicesSubTab} />
        )}

        {currentPage === 'media' && (
          <MediaView initialTab={mediaSubTab} initialSelectedNewsId={selectedNewsId} />
        )}

        {currentPage === 'contributions' && (
          <ContributionsView />
        )}

        {currentPage === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        onNavigateService={handleNavigateService}
      />

    </div>
  );
}
