import React from 'react';
import { PageType, HomeVariant, ServicesSubTab, MediaSubTab } from '../../types';
import { BentoStandardHome } from './BentoStandardHome';
import { NewsCenteredHome } from './NewsCenteredHome';
import { ServicePortalHome } from './ServicePortalHome';
import { CampaignDonationsHome } from './CampaignDonationsHome';
import { PilgrimageGuideHome } from './PilgrimageGuideHome';
import { CustomCombinedHome } from './CustomCombinedHome';
import { LayoutGrid, Radio, ClipboardList, Gift, Map, Layers, Sparkles } from 'lucide-react';

interface HomeViewProps {
  activeVariant?: HomeVariant;
  onSelectVariant?: (variant: HomeVariant) => void;
  setCurrentPage: (page: PageType) => void;
  onNavigateService: (tab: ServicesSubTab) => void;
  onNavigateMedia: (tab: MediaSubTab) => void;
  onSelectNews: (newsId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  activeVariant = 'bento-standard',
  onSelectVariant,
  setCurrentPage,
  onNavigateService,
  onNavigateMedia,
  onSelectNews,
}) => {

  const variantsList: { id: HomeVariant; label: string; tag: string; icon: React.ReactNode }[] = [
    { 
      id: 'bento-standard', 
      label: 'طرح ۱: پورتال جامع (بنتو)', 
      tag: 'اصلی و ساختاری',
      icon: <LayoutGrid className="w-4 h-4 text-[#C5A059]" /> 
    },
    { 
      id: 'custom-combined', 
      label: 'طرح سفارشی (ترکیبی)', 
      tag: 'چیدمان جدید',
      icon: <Sparkles className="w-4 h-4 text-[#C5A059]" /> 
    },
    { 
      id: 'news-centered', 
      label: 'طرح ۲: اخبار و رسانه محور', 
      tag: 'اطلاع‌رسانی',
      icon: <Radio className="w-4 h-4 text-[#C5A059]" /> 
    },
    { 
      id: 'service-portal', 
      label: 'طرح ۳: میز خدمت زائر و خادم', 
      tag: 'ثبت‌نام و استعلام',
      icon: <ClipboardList className="w-4 h-4 text-[#C5A059]" /> 
    },
    { 
      id: 'campaign-donations', 
      label: 'طرح ۴: پویش‌ها و نذورات', 
      tag: 'مشارکت مردمی',
      icon: <Gift className="w-4 h-4 text-[#C5A059]" /> 
    },
    { 
      id: 'pilgrimage-guide', 
      label: 'طرح ۵: راهنمای جاده‌ای', 
      tag: 'مینیمال جاده',
      icon: <Map className="w-4 h-4 text-[#C5A059]" /> 
    },
  ];

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto px-4">
      
      {/* Home Page Layout Switcher Bar */}
      <div className="bg-white rounded-2xl p-4 border border-[#E5E1D8] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[#1B4332] shrink-0">
          <Layers className="w-4 h-4 text-[#C5A059]" />
          <span>انتخاب چیدمان و محتوای صفحه اصلی:</span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
          {variantsList.map((v) => {
            const isActive = activeVariant === v.id;
            return (
              <button
                key={v.id}
                onClick={() => onSelectVariant && onSelectVariant(v.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-sm'
                    : 'bg-[#F8F5F0] text-[#2D3436] border-[#E5E1D8] hover:bg-[#E5E1D8]'
                }`}
              >
                {v.icon}
                <span>{v.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Active Variant */}
      {activeVariant === 'bento-standard' && (
        <BentoStandardHome
          setCurrentPage={setCurrentPage}
          onNavigateService={onNavigateService}
          onNavigateMedia={onNavigateMedia}
          onSelectNews={onSelectNews}
        />
      )}

      {activeVariant === 'custom-combined' && (
        <CustomCombinedHome
          setCurrentPage={setCurrentPage}
          onNavigateService={onNavigateService}
          onNavigateMedia={onNavigateMedia}
          onSelectNews={onSelectNews}
        />
      )}

      {activeVariant === 'news-centered' && (
        <NewsCenteredHome
          setCurrentPage={setCurrentPage}
          onNavigateMedia={onNavigateMedia}
          onSelectNews={onSelectNews}
        />
      )}

      {activeVariant === 'service-portal' && (
        <ServicePortalHome
          setCurrentPage={setCurrentPage}
          onNavigateService={onNavigateService}
        />
      )}

      {activeVariant === 'campaign-donations' && (
        <CampaignDonationsHome
          setCurrentPage={setCurrentPage}
        />
      )}

      {activeVariant === 'pilgrimage-guide' && (
        <PilgrimageGuideHome
          setCurrentPage={setCurrentPage}
          onNavigateService={onNavigateService}
        />
      )}

    </div>
  );
};
