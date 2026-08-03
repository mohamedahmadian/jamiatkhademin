import React, { useState } from 'react';
import { PageType, HomeVariant, ServicesSubTab, AboutSubTab, MediaSubTab } from '../types';
import { SOCIETY_INFO } from '../data/mockData';
import { 
  Phone, 
  Heart, 
  UserCheck, 
  Users, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Compass, 
  Bus, 
  Newspaper, 
  Image as ImageIcon, 
  Video, 
  HelpCircle, 
  MessageSquare, 
  Home, 
  Info, 
  Building2, 
  Tent,
  Droplets,
  ShieldCheck,
  LayoutGrid,
  Radio,
  ClipboardList,
  Gift,
  Map
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  homeVariant?: HomeVariant;
  onNavigateHomeVariant?: (variant: HomeVariant) => void;
  onNavigateService?: (tab: ServicesSubTab) => void;
  onNavigateAbout?: (tab: AboutSubTab) => void;
  onNavigateMedia?: (tab: MediaSubTab) => void;
  onNavigateContactAnchor?: (anchor: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  homeVariant = 'bento-standard',
  onNavigateHomeVariant,
  onNavigateService,
  onNavigateAbout,
  onNavigateMedia,
  onNavigateContactAnchor,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);

  const handlePageSelect = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setHomeDropdownOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setMediaDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubHomeVariant = (variant: HomeVariant) => {
    setCurrentPage('home');
    if (onNavigateHomeVariant) onNavigateHomeVariant(variant);
    setHomeDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleSubService = (tab: ServicesSubTab) => {
    setCurrentPage('services');
    if (onNavigateService) onNavigateService(tab);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleSubAbout = (tab: AboutSubTab) => {
    setCurrentPage('about');
    if (onNavigateAbout) onNavigateAbout(tab);
    setAboutDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleSubMedia = (tab: MediaSubTab) => {
    setCurrentPage('media');
    if (onNavigateMedia) onNavigateMedia(tab);
    setMediaDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-md transition-all">
      {/* Top Banner - Hadith & Hotline */}
      <div className="bg-[#0e271c] text-[#f3ede2] text-xs py-2 px-4 border-b border-[#C5A059]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-[#C5A059] font-quran text-sm">
            <Sparkles className="w-4 h-4 text-[#C5A059] animate-pulse" />
            <span>«مَنْ زَارَنِي عَلَى بُعْدِ بَيْتِي أَتَيْتُهُ يَوْمَ الْقِيَامَةِ فِي ثَلاَثِ مَوَاطِنَ...» - حضرت رضا (ع)</span>
          </div>
          <div className="flex items-center gap-4 text-[#f3ede2]">
            <a href={`tel:${SOCIETY_INFO.hotline}`} className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>پشتیبانی زائرین: <strong className="font-sans dir-ltr">{SOCIETY_INFO.hotline}</strong></span>
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-[#C5A059]">۲۶ سال خدمت خالصانه به زائرین پیاده</span>
          </div>
        </div>
      </div>

      {/* Main Header - Bento Grid Theme (#1B4332 with gold border-b-4 #C5A059) */}
      <div className="bg-[#1B4332] text-white border-b-4 border-[#C5A059] shadow-lg transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handlePageSelect('home')} 
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center text-[#1B4332] shadow-md group-hover:scale-105 transition-transform">
              <div className="w-5 h-5 border-2 border-[#1B4332] rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#1B4332]"></div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-lg sm:text-xl text-[#F8F5F0] group-hover:text-[#E5C384] transition-colors leading-tight font-quran">
                {SOCIETY_INFO.name}
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            
            {/* 1. صفحه اصلی (Dropdown) */}
            <div 
              className="relative group"
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
            >
              <button
                onClick={() => handlePageSelect('home')}
                className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  currentPage === 'home' 
                    ? 'bg-[#C5A059] text-[#1B4332] font-bold shadow-sm' 
                    : 'text-white/90 hover:text-[#C5A059] hover:bg-white/10'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>صفحه اصلی</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {homeDropdownOpen && (
                <div className="absolute right-0 top-full pt-1.5 w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl shadow-2xl border border-[#E5E1D8] py-2 overflow-hidden text-[#2D3436]">
                    <div className="px-4 py-1.5 text-[11px] font-bold text-[#C5A059] bg-[#1B4332] mb-1">
                      طرح‌ها و چیدمان‌های صفحه اصلی
                    </div>
                    
                    <button 
                      onClick={() => handleSubHomeVariant('bento-standard')}
                      className={`w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-xs sm:text-sm flex items-center justify-between transition-colors ${
                        currentPage === 'home' && homeVariant === 'bento-standard' ? 'bg-[#F8F5F0] text-[#1B4332] font-bold border-r-4 border-[#1B4332]' : 'hover:text-[#1B4332]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <LayoutGrid className="w-4 h-4 text-[#C5A059]" />
                        <span>طرح ۱: پورتال جامع و بنتو</span>
                      </div>
                      <span className="text-[10px] bg-emerald-100 text-[#1B4332] px-1.5 py-0.5 rounded font-bold">اصلی</span>
                    </button>

                    <button 
                      onClick={() => handleSubHomeVariant('news-centered')}
                      className={`w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-xs sm:text-sm flex items-center justify-between transition-colors ${
                        currentPage === 'home' && homeVariant === 'news-centered' ? 'bg-[#F8F5F0] text-[#1B4332] font-bold border-r-4 border-[#1B4332]' : 'hover:text-[#1B4332]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Radio className="w-4 h-4 text-[#C5A059]" />
                        <span>طرح ۲: اخبار و اطلاع‌رسانی</span>
                      </div>
                      <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">رسانه</span>
                    </button>

                    <button 
                      onClick={() => handleSubHomeVariant('service-portal')}
                      className={`w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-xs sm:text-sm flex items-center justify-between transition-colors ${
                        currentPage === 'home' && homeVariant === 'service-portal' ? 'bg-[#F8F5F0] text-[#1B4332] font-bold border-r-4 border-[#1B4332]' : 'hover:text-[#1B4332]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <ClipboardList className="w-4 h-4 text-[#C5A059]" />
                        <span>طرح ۳: میز خدمت زائر و خادم</span>
                      </div>
                      <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">خدمات</span>
                    </button>

                    <button 
                      onClick={() => handleSubHomeVariant('campaign-donations')}
                      className={`w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-xs sm:text-sm flex items-center justify-between transition-colors ${
                        currentPage === 'home' && homeVariant === 'campaign-donations' ? 'bg-[#F8F5F0] text-[#1B4332] font-bold border-r-4 border-[#1B4332]' : 'hover:text-[#1B4332]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Gift className="w-4 h-4 text-[#C5A059]" />
                        <span>طرح ۴: پویش‌ها و نذورات</span>
                      </div>
                      <span className="text-[10px] bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded">مشارکت</span>
                    </button>

                    <button 
                      onClick={() => handleSubHomeVariant('pilgrimage-guide')}
                      className={`w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-xs sm:text-sm flex items-center justify-between transition-colors ${
                        currentPage === 'home' && homeVariant === 'pilgrimage-guide' ? 'bg-[#F8F5F0] text-[#1B4332] font-bold border-r-4 border-[#1B4332]' : 'hover:text-[#1B4332]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Map className="w-4 h-4 text-[#C5A059]" />
                        <span>طرح ۵: راهنمای جاده‌ای و زیارت</span>
                      </div>
                      <span className="text-[10px] bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded">مینیمال</span>
                    </button>

                  </div>
                </div>
              )}
            </div>

            {/* 2. درباره جمعیت (Dropdown) */}
            <div 
              className="relative group"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => handlePageSelect('about')}
                className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  currentPage === 'about' 
                    ? 'bg-[#C5A059] text-[#1B4332] font-bold shadow-sm' 
                    : 'text-white/90 hover:text-[#C5A059] hover:bg-white/10'
                }`}
              >
                <Info className="w-4 h-4" />
                <span>درباره جمعیت</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute right-0 top-full pt-1.5 w-56 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl shadow-2xl border border-[#E5E1D8] py-2 overflow-hidden text-[#2D3436]">
                    <button 
                      onClick={() => handleSubAbout('intro')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <Building2 className="w-4 h-4 text-[#C5A059]" />
                      <span>معرفی جمعیت</span>
                    </button>
                    <button 
                      onClick={() => handleSubAbout('mission')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <Sparkles className="w-4 h-4 text-[#C5A059]" />
                      <span>اهداف و رسالت</span>
                    </button>
                    <button 
                      onClick={() => handleSubAbout('members')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <Users className="w-4 h-4 text-[#C5A059]" />
                      <span>اعضا و مسئولین</span>
                    </button>
                    <button 
                      onClick={() => handleSubAbout('org-chart')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <Compass className="w-4 h-4 text-[#C5A059]" />
                      <span>چارت سازمانی</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. خدمات (Dropdown) */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handlePageSelect('services')}
                className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  currentPage === 'services' 
                    ? 'bg-[#C5A059] text-[#1B4332] font-bold shadow-sm' 
                    : 'text-white/90 hover:text-[#C5A059] hover:bg-white/10'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>خدمات</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute right-0 top-full pt-1.5 w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl shadow-2xl border border-[#E5E1D8] py-2 overflow-hidden text-[#2D3436]">
                    <button 
                      onClick={() => handleSubService('zaer-register')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332] font-semibold border-b border-[#E5E1D8]/60"
                    >
                      <UserCheck className="w-4 h-4 text-[#1B4332]" />
                      <span>ثبت‌نام زائر (انفرادی و کاروانی)</span>
                    </button>
                    <button 
                      onClick={() => handleSubService('khadim-register')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <Users className="w-4 h-4 text-[#C5A059]" />
                      <span>ثبت‌نام خادم افتخاری</span>
                    </button>
                    <button 
                      onClick={() => handleSubService('mokeb-register')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <Tent className="w-4 h-4 text-[#C5A059]" />
                      <span>ثبت‌نام موکب‌دار</span>
                    </button>
                    <button 
                      onClick={() => handleSubService('mokebs-list')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <Building2 className="w-4 h-4 text-[#C5A059]" />
                      <span>معرفی مواکب و ایستگاه‌ها</span>
                    </button>
                    <button 
                      onClick={() => handleSubService('walking-routes')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <Compass className="w-4 h-4 text-[#C5A059]" />
                      <span>مسیرهای پیاده‌روی</span>
                    </button>
                    <button 
                      onClick={() => handleSubService('public-transport')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <Bus className="w-4 h-4 text-[#C5A059]" />
                      <span>حمل‌ونقل عمومی و مترو</span>
                    </button>
                    <button 
                      onClick={() => handleSubService('map')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332] font-semibold text-[#1B4332]"
                    >
                      <MapPin className="w-4 h-4 text-[#1B4332]" />
                      <span>نقشه آنلاین دسترسی</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. رسانه (Dropdown) */}
            <div 
              className="relative group"
              onMouseEnter={() => setMediaDropdownOpen(true)}
              onMouseLeave={() => setMediaDropdownOpen(false)}
            >
              <button
                onClick={() => handlePageSelect('media')}
                className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  currentPage === 'media' 
                    ? 'bg-[#C5A059] text-[#1B4332] font-bold shadow-sm' 
                    : 'text-white/90 hover:text-[#C5A059] hover:bg-white/10'
                }`}
              >
                <Newspaper className="w-4 h-4" />
                <span>رسانه</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {mediaDropdownOpen && (
                <div className="absolute right-0 top-full pt-1.5 w-56 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl shadow-2xl border border-[#E5E1D8] py-2 overflow-hidden text-[#2D3436]">
                    <button 
                      onClick={() => handleSubMedia('news-announcements')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <Newspaper className="w-4 h-4 text-[#C5A059]" />
                      <span>اخبار و اطلاعیه‌ها</span>
                    </button>
                    <button 
                      onClick={() => handleSubMedia('activity-reports')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <ClipboardList className="w-4 h-4 text-[#C5A059]" />
                      <span>گزارش فعالیت‌ها</span>
                    </button>
                    <button 
                      onClick={() => handleSubMedia('revayat-khedmat')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <Sparkles className="w-4 h-4 text-[#C5A059]" />
                      <span>روایت خدمت (داستان‌ها)</span>
                    </button>
                    <button 
                      onClick={() => handleSubMedia('photos')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <ImageIcon className="w-4 h-4 text-[#C5A059]" />
                      <span>تصاویر</span>
                    </button>
                    <button 
                      onClick={() => handleSubMedia('videos')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <Video className="w-4 h-4 text-[#C5A059]" />
                      <span>ویدئوها</span>
                    </button>
                    <button 
                      onClick={() => handleSubMedia('publications')}
                      className="w-full text-right px-4 py-2.5 hover:bg-[#F8F5F0] text-sm flex items-center gap-2 hover:text-[#1B4332]"
                    >
                      <Radio className="w-4 h-4 text-[#C5A059]" />
                      <span>نشریات و گزارش‌ها</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 5. مشارکتهای مردمی (Single Page) */}
            <button
              onClick={() => handlePageSelect('contributions')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                currentPage === 'contributions' 
                  ? 'bg-[#C5A059] text-[#1B4332] font-bold shadow-sm' 
                  : 'text-white/90 hover:text-[#C5A059] hover:bg-white/10'
              }`}
            >
              <Heart className="w-4 h-4 text-rose-300 fill-rose-300/30" />
              <span>مشارکت‌های مردمی</span>
            </button>

            {/* 6. ارتباط با ما */}
            <button
              onClick={() => handlePageSelect('contact')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                currentPage === 'contact' 
                  ? 'bg-[#C5A059] text-[#1B4332] font-bold shadow-sm' 
                  : 'text-white/90 hover:text-[#C5A059] hover:bg-white/10'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>ارتباط با ما</span>
            </button>
          </nav>

          {/* Action Button Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => handleSubService('zaer-register')}
              className="bg-[#C5A059] hover:bg-[#b58f48] text-[#1B4332] px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 active:scale-95"
            >
              <UserCheck className="w-4 h-4" />
              <span>ثبت‌نام زائر پیاده</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleSubService('zaer-register')}
              className="bg-[#C5A059] text-[#1B4332] px-3 py-1.5 rounded-lg text-xs font-bold"
            >
              ثبت‌نام
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="منوی اصلی"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e2d7c5] shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-3 max-h-[80vh] overflow-y-auto">
            
            {/* Home Submenu (Mobile) */}
            <div className="space-y-1 pr-2 border-r-2 border-[#1B4332] bg-[#F7F4EE] p-2 rounded-xl">
              <div 
                onClick={() => handlePageSelect('home')}
                className="px-2 py-1 text-xs font-bold text-[#1B4332] flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>صفحه اصلی (انتخاب طرح و چیدمان)</span>
                </div>
              </div>

              <button 
                onClick={() => handleSubHomeVariant('bento-standard')}
                className={`w-full text-right px-3 py-1.5 text-xs rounded-lg flex items-center justify-between ${
                  currentPage === 'home' && homeVariant === 'bento-standard' ? 'bg-[#1B4332] text-white font-bold' : 'text-[#2D3436] hover:text-[#1B4332]'
                }`}
              >
                <span>• طرح ۱: پورتال جامع و بنتو</span>
                <span className="text-[10px] opacity-75">جامع</span>
              </button>

              <button 
                onClick={() => handleSubHomeVariant('news-centered')}
                className={`w-full text-right px-3 py-1.5 text-xs rounded-lg flex items-center justify-between ${
                  currentPage === 'home' && homeVariant === 'news-centered' ? 'bg-[#1B4332] text-white font-bold' : 'text-[#2D3436] hover:text-[#1B4332]'
                }`}
              >
                <span>• طرح ۲: اخبار و اطلاع‌رسانی</span>
                <span className="text-[10px] opacity-75">خبر</span>
              </button>

              <button 
                onClick={() => handleSubHomeVariant('service-portal')}
                className={`w-full text-right px-3 py-1.5 text-xs rounded-lg flex items-center justify-between ${
                  currentPage === 'home' && homeVariant === 'service-portal' ? 'bg-[#1B4332] text-white font-bold' : 'text-[#2D3436] hover:text-[#1B4332]'
                }`}
              >
                <span>• طرح ۳: میز خدمت زائر و خادم</span>
                <span className="text-[10px] opacity-75">خدمت</span>
              </button>

              <button 
                onClick={() => handleSubHomeVariant('campaign-donations')}
                className={`w-full text-right px-3 py-1.5 text-xs rounded-lg flex items-center justify-between ${
                  currentPage === 'home' && homeVariant === 'campaign-donations' ? 'bg-[#1B4332] text-white font-bold' : 'text-[#2D3436] hover:text-[#1B4332]'
                }`}
              >
                <span>• طرح ۴: پویش‌ها و نذورات</span>
                <span className="text-[10px] opacity-75">حامی</span>
              </button>

              <button 
                onClick={() => handleSubHomeVariant('pilgrimage-guide')}
                className={`w-full text-right px-3 py-1.5 text-xs rounded-lg flex items-center justify-between ${
                  currentPage === 'home' && homeVariant === 'pilgrimage-guide' ? 'bg-[#1B4332] text-white font-bold' : 'text-[#2D3436] hover:text-[#1B4332]'
                }`}
              >
                <span>• طرح ۵: راهنمای جاده‌ای و زیارت</span>
                <span className="text-[10px] opacity-75">مینیمال</span>
              </button>
            </div>

            {/* About Submenu */}
            <div className="space-y-1 pr-2 border-r-2 border-[#c89234]">
              <div className="px-3 py-1 text-xs font-bold text-[#114232] flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                <span>درباره جمعیت</span>
              </div>
              <button 
                onClick={() => handleSubAbout('intro')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40] hover:text-[#114232]"
              >
                • معرفی جمعیت
              </button>
              <button 
                onClick={() => handleSubAbout('mission')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40] hover:text-[#114232]"
              >
                • اهداف و رسالت
              </button>
              <button 
                onClick={() => handleSubAbout('members')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40] hover:text-[#114232]"
              >
                • اعضا و مسئولین
              </button>
              <button 
                onClick={() => handleSubAbout('org-chart')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40] hover:text-[#114232]"
              >
                • چارت سازمانی
              </button>
            </div>

            {/* Services Submenu */}
            <div className="space-y-1 pr-2 border-r-2 border-[#114232]">
              <div className="px-3 py-1 text-xs font-bold text-[#114232] flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5" />
                <span>خدمات زائرین و خادمین</span>
              </div>
              <button 
                onClick={() => handleSubService('zaer-register')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#114232] font-bold"
              >
                • ثبت‌نام زائر (انفرادی و کاروانی)
              </button>
              <button 
                onClick={() => handleSubService('khadim-register')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40]"
              >
                • ثبت‌نام خادم افتخاری
              </button>
              <button 
                onClick={() => handleSubService('mokeb-register')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40]"
              >
                • ثبت‌نام موکب‌دار
              </button>
              <button 
                onClick={() => handleSubService('mokebs-list')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40]"
              >
                • معرفی مواکب و ایستگاه‌ها
              </button>
              <button 
                onClick={() => handleSubService('walking-routes')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40]"
              >
                • مسیرهای پیاده‌روی
              </button>
              <button 
                onClick={() => handleSubService('public-transport')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40]"
              >
                • حمل‌ونقل عمومی و مترو
              </button>
              <button 
                onClick={() => handleSubService('map')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#114232] font-semibold"
              >
                • نقشه دسترسی آنلاین
              </button>
            </div>

            {/* Media Submenu */}
            <div className="space-y-1 pr-2 border-r-2 border-[#c89234]">
              <div className="px-3 py-1 text-xs font-bold text-[#114232] flex items-center gap-1.5">
                <Newspaper className="w-3.5 h-3.5" />
                <span>رسانه</span>
              </div>
              <button 
                onClick={() => handleSubMedia('news-announcements')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40]"
              >
                • اخبار و اطلاعیه‌ها
              </button>
              <button 
                onClick={() => handleSubMedia('activity-reports')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40]"
              >
                • گزارش فعالیت‌ها
              </button>
              <button 
                onClick={() => handleSubMedia('revayat-khedmat')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40]"
              >
                • روایت خدمت (داستان‌ها)
              </button>
              <button 
                onClick={() => handleSubMedia('photos')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40]"
              >
                • تصاویر
              </button>
              <button 
                onClick={() => handleSubMedia('videos')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40]"
              >
                • ویدئوها
              </button>
              <button 
                onClick={() => handleSubMedia('publications')}
                className="w-full text-right px-3 py-1.5 text-xs text-[#3a4a40]"
              >
                • نشریات و گزارش‌ها
              </button>
            </div>

            {/* Public Contributions */}
            <button
              onClick={() => handlePageSelect('contributions')}
              className="w-full text-right px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 bg-rose-50 text-rose-900 border border-rose-200"
            >
              <Heart className="w-4 h-4 text-rose-600 fill-rose-600/20" />
              <span>مشارکت‌های مردمی (نذورات و پویَش‌ها)</span>
            </button>

            {/* Contact */}
            <button
              onClick={() => handlePageSelect('contact')}
              className="w-full text-right px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 bg-[#f8f4ed] text-[#114232]"
            >
              <MessageSquare className="w-4 h-4 text-[#c89234]" />
              <span>ارتباط با ما و انتقادات</span>
            </button>

          </div>
        </div>
      )}
    </header>
  );
};
