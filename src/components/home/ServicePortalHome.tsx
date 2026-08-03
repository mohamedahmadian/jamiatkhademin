import React, { useState } from 'react';
import { PageType, ServicesSubTab } from '../../types';
import { SOCIETY_INFO } from '../../data/mockData';
import { UserCheck, Users, Tent, Building2, Compass, Bus, MapPin, Search, CheckCircle, ShieldCheck, Phone, FileText, ArrowLeft, Clock, Headphones } from 'lucide-react';

interface ServicePortalHomeProps {
  setCurrentPage: (page: PageType) => void;
  onNavigateService: (tab: ServicesSubTab) => void;
}

export const ServicePortalHome: React.FC<ServicePortalHomeProps> = ({
  setCurrentPage,
  onNavigateService,
}) => {
  const [trackingCodeInput, setTrackingCodeInput] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleTrackingSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCodeInput.trim()) return;
    setSearchResult(`پرونده ثبت‌نام با کد رهگیری ${trackingCodeInput} تایید شده و برای صدور کارت خادم/زائر صادر گردید.`);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Service Header Banner */}
      <section className="bg-[#1B4332] text-white rounded-3xl p-6 sm:p-10 border-b-4 border-[#C5A059] shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="bg-[#C5A059] text-[#1B4332] text-xs font-bold px-3 py-1 rounded-full inline-block">
            سامانه الکترونیکی یکپارچه
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white font-quran">
            میز خدمات یکپارچه زائرین، خادمین و مواکب
          </h1>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            درگاه رسمی جهت ثبت‌نام کاروان‌ها، پذیرش خادمان افتخاری، دریافت مجوزهای مواکب و پیگیری کد رهگیری پرونده‌ها.
          </p>
        </div>

        {/* Tracking Code Bar */}
        <div className="mt-6 pt-6 border-t border-white/10 max-w-2xl relative z-10">
          <form onSubmit={handleTrackingSearch} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-grow">
              <Search className="w-4 h-4 text-gray-400 absolute right-3 top-3.5" />
              <input 
                type="text" 
                placeholder="استعلام پرونده با کد رهگیری (مثلاً ZR-1403-9821)"
                value={trackingCodeInput}
                onChange={(e) => setTrackingCodeInput(e.target.value)}
                className="w-full bg-white text-[#1B4332] pr-10 pl-4 py-3 rounded-xl text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              />
            </div>
            <button 
              type="submit"
              className="bg-[#C5A059] hover:bg-[#b58f48] text-[#1B4332] font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shrink-0"
            >
              استعلام وضعیت
            </button>
          </form>

          {searchResult && (
            <div className="mt-3 p-3 bg-emerald-900/80 border border-[#C5A059] text-white rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>{searchResult}</span>
            </div>
          )}
        </div>
      </section>

      {/* Main 6 Service Portals Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Portal 1: Zaer Registration */}
        <div className="bg-white rounded-2xl border border-[#E5E1D8] p-6 shadow-sm hover:border-[#1B4332] hover:shadow-md transition-all flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-[#1B4332]">
              <UserCheck className="w-6 h-6 text-[#1B4332]" />
            </div>
            <h3 className="text-lg font-bold text-[#1B4332] font-quran">ثبت‌نام زائر پیاده (انفرادی / کاروان)</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              ثبت اطلاعات فردی و کاروانی جهت تخصیص کارت زائر، رزرو اسکان شبانه و صدور بیمه‌نامه رایگان حوادث.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E5E1D8]">
            <button
              onClick={() => { setCurrentPage('services'); onNavigateService('zaer-register'); }}
              className="w-full py-2.5 bg-[#1B4332] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-[#143326] transition-colors"
            >
              <span>ورود به فرم ثبت‌نام زائر</span>
              <ArrowLeft className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>
        </div>

        {/* Portal 2: Khadim Registration */}
        <div className="bg-white rounded-2xl border border-[#E5E1D8] p-6 shadow-sm hover:border-[#1B4332] hover:shadow-md transition-all flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-[#C5A059]">
              <Users className="w-6 h-6 text-[#C5A059]" />
            </div>
            <h3 className="text-lg font-bold text-[#1B4332] font-quran">ثبت‌نام خادم افتخاری</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              تکمیل فرم خادمی در راسته‌های پزشکی، فنی، اسکان، پذیرایی، انتظامات و امور فرهنگی.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E5E1D8]">
            <button
              onClick={() => { setCurrentPage('services'); onNavigateService('khadim-register'); }}
              className="w-full py-2.5 bg-[#C5A059] text-[#1B4332] font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-[#b58f48] transition-colors"
            >
              <span>ورود به فرم خادمان افتخاری</span>
              <ArrowLeft className="w-4 h-4 text-[#1B4332]" />
            </button>
          </div>
        </div>

        {/* Portal 3: Mokeb Permit */}
        <div className="bg-white rounded-2xl border border-[#E5E1D8] p-6 shadow-sm hover:border-[#1B4332] hover:shadow-md transition-all flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-800">
              <Tent className="w-6 h-6 text-blue-800" />
            </div>
            <h3 className="text-lg font-bold text-[#1B4332] font-quran">درخواست مجوز موکب جاده‌ای</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              ثبت درخواست استقرار ایستگاه صلواتی و موکب پذیرایی در ۶ محور ورودی مشهد مقدس.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E5E1D8]">
            <button
              onClick={() => { setCurrentPage('services'); onNavigateService('mokeb-register'); }}
              className="w-full py-2.5 border border-[#1B4332] text-[#1B4332] font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-[#F8F5F0] transition-colors"
            >
              <span>ثبت درخواست مجوز موکب</span>
              <ArrowLeft className="w-4 h-4 text-[#1B4332]" />
            </button>
          </div>
        </div>

        {/* Portal 4: Mokeb List */}
        <div className="bg-white rounded-2xl border border-[#E5E1D8] p-6 shadow-sm hover:border-[#1B4332] hover:shadow-md transition-all flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-800">
              <Building2 className="w-6 h-6 text-purple-800" />
            </div>
            <h3 className="text-lg font-bold text-[#1B4332] font-quran">فهرست مواکب و ایستگاه‌ها</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              مشاهده ظرفیت اسکان، شماره تماس مسئول موکب و خدمات ارائه‌شده در طول جاده.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E5E1D8]">
            <button
              onClick={() => { setCurrentPage('services'); onNavigateService('mokebs-list'); }}
              className="w-full py-2.5 bg-[#F8F5F0] text-[#1B4332] font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-[#E5E1D8] transition-colors"
            >
              <span>مشاهده ایستگاه‌های جاده‌ای</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Portal 5: Walking Routes */}
        <div className="bg-white rounded-2xl border border-[#E5E1D8] p-6 shadow-sm hover:border-[#1B4332] hover:shadow-md transition-all flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-[#1B4332]">
              <Compass className="w-6 h-6 text-[#1B4332]" />
            </div>
            <h3 className="text-lg font-bold text-[#1B4332] font-quran">راهنمای مسیرهای پیاده‌روی</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              نقشه راه‌های ورودی (نیشابور، قوچان، سرخس...)، فاصله تا حرم مطهر و توصیه‌های سلامت.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E5E1D8]">
            <button
              onClick={() => { setCurrentPage('services'); onNavigateService('walking-routes'); }}
              className="w-full py-2.5 bg-[#F8F5F0] text-[#1B4332] font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-[#E5E1D8] transition-colors"
            >
              <span>بررسی مسیرها و کیلومترها</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Portal 6: Map Access */}
        <div className="bg-white rounded-2xl border border-[#E5E1D8] p-6 shadow-sm hover:border-[#1B4332] hover:shadow-md transition-all flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-[#F8F5F0] border border-[#E5E1D8] rounded-2xl flex items-center justify-center text-[#1B4332]">
              <MapPin className="w-6 h-6 text-[#C5A059]" />
            </div>
            <h3 className="text-lg font-bold text-[#1B4332] font-quran">نقشه آنلاین دسترسی</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              نمایش لحظه‌ای موقعیت مکانی ایستگاه‌های درمانی، پست‌های هلال‌احمر و مواکب.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E5E1D8]">
            <button
              onClick={() => { setCurrentPage('services'); onNavigateService('map'); }}
              className="w-full py-2.5 bg-[#1B4332] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-[#143326] transition-colors"
            >
              <span>بازکردن نقشه تعاملی</span>
              <ArrowLeft className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>
        </div>

      </section>

      {/* Support Hotline Banner */}
      <div className="bg-[#F8F5F0] border border-[#E5E1D8] p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#1B4332] text-[#C5A059] rounded-2xl flex items-center justify-center shrink-0">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-base text-[#1B4332]">پشتیبانی تلفنی ۲۴ ساعته ستاد مرکزی</h4>
            <p className="text-xs text-gray-600 mt-0.5">پاسخگویی فوری به سوالات زائرین، ثبت اطلاعات گمشدگان و راهنمایی اسکان اضطراری</p>
          </div>
        </div>

        <a 
          href={`tel:${SOCIETY_INFO.hotline}`}
          className="bg-[#1B4332] text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#143326] transition-colors dir-ltr shrink-0"
        >
          {SOCIETY_INFO.hotline}
        </a>
      </div>

    </div>
  );
};
