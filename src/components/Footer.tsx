import React from 'react';
import { PageType, ServicesSubTab } from '../types';
import { SOCIETY_INFO } from '../data/mockData';
import { Phone, Mail, MapPin, Heart, Shield, Award, ArrowUp, ExternalLink } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
  onNavigateService: (tab: ServicesSubTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, onNavigateService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B4332] text-white pt-12 pb-6 border-t-4 border-[#C5A059] relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-bento-dots-light pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Salawat Khasah Banner */}
        <div className="bg-[#0f2c21]/80 border border-[#C5A059]/40 rounded-2xl p-4 sm:p-6 mb-10 text-center shadow-lg backdrop-blur-sm">
          <p className="font-quran text-base sm:text-lg md:text-xl text-[#C5A059] leading-relaxed">
            «اللَّهُمَّ صَلِّ عَلَى عَلِيِّ بْنِ مُوسَى الرِّضَا الْمُرْتَضَى الإِمَامِ التَّقِيِّ النَّقِيِّ وَحُجَّتِكَ عَلَى مَنْ فَوْقَ الأَرْضِ وَمَنْ تَحْتَ الثَّرَى الصِّدِّيقِ الشَّهِيدِ»
          </p>
          <p className="text-xs text-[#d0c6b4] mt-2">
            سلام بر آقای مهربانی‌ها، ولی‌نعمت ایرانیان، حضرت علی بن موسی الرضا علیه‌السلام
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: About Society */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#C5A059] text-[#1B4332] flex items-center justify-center font-bold font-quran text-lg shadow">
                رضا
              </div>
              <h3 className="font-bold text-lg text-[#C5A059]">
                {SOCIETY_INFO.name}
              </h3>
            </div>
            <p className="text-xs text-[#d0c6b4] leading-relaxed mb-4">
              نزدیک به ۲۶ سال است که با افتخار و با همت خادمان مردمی، در ایام دهه پایانی ماه صفر و مناسبت‌های زیارتی، میزبان ده‌ها هزار زائر پیاده امام مهربانی‌ها هستیم.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C5A059] bg-[#0f2c21] px-3 py-2 rounded-xl border border-[#C5A059]/30 w-fit">
              <Award className="w-4 h-4" />
              <span>۲۶ سال سابقه خدمت‌رسانی بی‌منّت</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-base text-[#C5A059] mb-4 border-r-2 border-[#C5A059] pr-2">
              دسترسی سریع
            </h4>
            <ul className="space-y-2 text-xs text-[#d0c6b4]">
              <li>
                <button 
                  onClick={() => { setCurrentPage('home'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  ‹ صفحه اصلی
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentPage('about'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  ‹ درباره جمعیت و اهداف
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentPage('media'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  ‹ اخبار و اطلاعیه‌های ستاد
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentPage('contributions'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 text-[#C5A059]"
                >
                  ‹ مشارکتهای مردمی (نذورات و نذر آب)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentPage('contact'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  ‹ ارتباط با ما و پرسش‌های متداول
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Services */}
          <div>
            <h4 className="font-bold text-base text-[#C5A059] mb-4 border-r-2 border-[#C5A059] pr-2">
              خدمات زائرین و خادمین
            </h4>
            <ul className="space-y-2 text-xs text-[#d0c6b4]">
              <li>
                <button 
                  onClick={() => { setCurrentPage('services'); onNavigateService('zaer-register'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 font-medium text-white"
                >
                  ‹ ثبت‌نام زائر پیاده (انفرادی و کاروان)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentPage('services'); onNavigateService('khadim-register'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  ‹ ثبت‌نام خادم افتخاری
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentPage('services'); onNavigateService('mokeb-register'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  ‹ ثبت‌نام موکب‌دار و ایستگاه صلواتی
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentPage('services'); onNavigateService('walking-routes'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  ‹ راهنمای مسیرهای ۶گانه پیاده‌روی
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentPage('services'); onNavigateService('public-transport'); scrollToTop(); }}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  ‹ راهنمای مترو و اتوبوس‌رانی مشهد
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 className="font-bold text-base text-[#C5A059] mb-4 border-r-2 border-[#C5A059] pr-2">
              اطلاعات تماس و دفتر مرکزی
            </h4>
            <ul className="space-y-3 text-xs text-[#d0c6b4]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{SOCIETY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>تلفن تماس: <strong className="text-white dir-ltr">{SOCIETY_INFO.hotline}</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>پست الکترونیک: {SOCIETY_INFO.email}</span>
              </li>
              <li className="pt-2">
                <div className="p-3 rounded-xl bg-[#0f2c21] border border-[#C5A059]/30 text-xs text-[#f3ede2]">
                  <p className="font-semibold text-[#C5A059] mb-1">سامانه پیامکی زائرین ۸:</p>
                  <p className="text-[11px] text-[#d0c6b4]">ارسال عدد ۸ به سامانه جهت دریافت آدرس ایستگاه‌های اسکان</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line & Back To Top */}
        <div className="pt-6 border-t border-[#0f2c21] flex flex-col sm:flex-row items-center justify-between text-xs text-[#a09480] gap-4">
          <p>
            © تمامی حقوق مادی و معنوی متعلق به «جمعیت خدمتگزاران» می‌باشد.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 bg-[#0f2c21] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#1B4332] px-3.5 py-2 rounded-xl transition-colors border border-[#C5A059]/30 font-bold"
          >
            <span>بازگشت به بالای صفحه</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
