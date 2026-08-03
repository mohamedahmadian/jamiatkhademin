import React, { useState } from 'react';
import { AboutSubTab } from '../../types';
import { SOCIETY_INFO, ORGANIZATIONAL_MEMBERS } from '../../data/mockData';
import { 
  Building2, 
  Sparkles, 
  Users, 
  Compass, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronLeft,
  HeartHandshake,
  Target,
  Eye,
  Crosshair
} from 'lucide-react';

interface AboutViewProps {
  initialTab?: AboutSubTab;
}

export const AboutView: React.FC<AboutViewProps> = ({ initialTab = 'intro' }) => {
  const [activeTab, setActiveTab] = useState<AboutSubTab>(initialTab);

  return (
    <div className="space-y-10 pb-12 max-w-7xl mx-auto px-4">
      
      {/* Header Banner */}
      <div className="bg-[#1B4332] text-white rounded-2xl p-6 sm:p-8 border border-[#1B4332] shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-bento-dots-light opacity-10 pointer-events-none"></div>
        <div className="max-w-3xl space-y-3 relative z-10">
          <span className="bg-[#C5A059] text-[#1B4332] text-xs font-bold px-3 py-1 rounded-full inline-block">
            درباره جمعیت خدمتگزاران زائرین پیاده
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-quran">
            ۲۶ سال خدمت بی‌منّت به عاشقان علی بن موسی الرضا (ع)
          </h1>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            مؤسسه‌ای کاملاً مردمی و عام‌المنفعه که از سال ۱۳۷۸ خورشیدی با هدف تکریم و ساماندهی زائرانی که با پای پیاده عازم مشهد مقدس می‌شوند تشکیل گردیده است.
          </p>
        </div>
      </div>

      {/* Sub-tab Navigation */}
      <div className="flex border-b border-[#E5E1D8] overflow-x-auto no-scrollbar gap-2 pb-1">
        <button
          onClick={() => setActiveTab('intro')}
          className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'intro'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <Building2 className="w-4 h-4 text-[#C5A059]" />
          <span>معرفی جمعیت</span>
        </button>

        <button
          onClick={() => setActiveTab('mission')}
          className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'mission'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <Target className="w-4 h-4 text-[#C5A059]" />
          <span>اهداف و رسالت</span>
        </button>

        <button
          onClick={() => setActiveTab('members')}
          className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'members'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <Users className="w-4 h-4 text-[#C5A059]" />
          <span>اعضا و خادمان</span>
        </button>

        <button
          onClick={() => setActiveTab('org-chart')}
          className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'org-chart'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <Compass className="w-4 h-4 text-[#C5A059]" />
          <span>چارت سازمانی</span>
        </button>
      </div>

      {/* Tab Content 1: Intro */}
      {activeTab === 'intro' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2d7c5] shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-[#114232] border-r-4 border-[#c89234] pr-3">
              تاریخچه و نحوه شکل‌گیری
            </h2>

            <p className="text-sm text-[#3a4a40] leading-relaxed">
              جمعیت خدمتگزاران زائرین پیاده امام رضا (ع) از ۲۶ سال پیش با همت جمعی از خیرین، خادمان علی بن موسی الرضا (ع) و اهالی مشهد مقدس پایه‌گذاری شد. در سال‌های نخست، تعداد زائران پیاده چند هزار نفر بود اما با توسعه زیرساخت‌های جاده‌ای و ساماندهی ایستگاه‌های صلواتی، امسال پذیرای بیش از ۵۰۰ هزار زائر پیاده از ۲۶ استان کشور و چندین کشور همسایه هستیم.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-[#faf4e8] rounded-xl p-5 border border-[#e2d7c5]">
                <Award className="w-8 h-8 text-[#c89234] mb-2" />
                <h3 className="font-bold text-base text-[#114232]">۲۶ سال سابقه مستمر</h3>
                <p className="text-xs text-[#5a6a60] mt-1">تداوم ۲۶ ساله خدمت‌رسانی بی‌منّت به زائران در دهه پایانی صفر</p>
              </div>

              <div className="bg-[#faf4e8] rounded-xl p-5 border border-[#e2d7c5]">
                <Users className="w-8 h-8 text-[#114232] mb-2" />
                <h3 className="font-bold text-base text-[#114232]">۳۰,۰۰۰ خادم افتخاری</h3>
                <p className="text-xs text-[#5a6a60] mt-1">بسیج بزرگ خادمان مردمی در بخش‌های اسکان، بهداشت، تغذیه و جاده</p>
              </div>

              <div className="bg-[#faf4e8] rounded-xl p-5 border border-[#e2d7c5]">
                <Building2 className="w-8 h-8 text-[#c89234] mb-2" />
                <h3 className="font-bold text-base text-[#114232]">۱۳۰,۰۰۰ اسکان رایگان</h3>
                <p className="text-xs text-[#5a6a60] mt-1">تجهیز بیش از ۴۰۰ مدرسه، حسینیه و سالن ورزشی در مشهد مقدس</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 2: Mission & Vision */}
      {activeTab === 'mission' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2d7c5] shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-[#114232] border-r-4 border-[#c89234] pr-3">
              اهداف، رسالت و چشم‌انداز جمعیت
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-[#114232]/20 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#114232] text-[#e5b35c] flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#114232]">رسالت اصلی</h3>
                <p className="text-xs text-[#3a4a40] leading-relaxed">
                  ارائه خدمات شایسته، رایگان و آبرومندانه به زائرانی که با گام‌های پیاده عازم آستان مقدس رضوی می‌شوند؛ ایمن‌سازی مسیرهای پیاده‌روی، اسکان کرامت‌محور و پذیرایی کامل تغذیه‌ای و درمانی.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/50 border border-[#c89234]/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#c89234] text-white flex items-center justify-center font-bold">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#114232]">چشم‌انداز</h3>
                <p className="text-xs text-[#3a4a40] leading-relaxed">
                  مبدل ساختن مسیرهای پیاده‌روی رضوی به یک فرهنگ جهانی زیارت با بالاترین استانداردهای بهداشتی، امنیتی، رفاهی و فرهنگی با محوریت مشارکت‌های خودجوش مردمی.
                </p>
              </div>

            </div>

            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-base text-[#114232]">اهداف راهبردی ۱۰گانه:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#3a4a40]">
                <li className="flex items-center gap-2 bg-[#faf8f5] p-3 rounded-lg border border-[#e2d7c5]">
                  <CheckCircle2 className="w-4 h-4 text-[#114232] shrink-0" />
                  <span>تامین اسکان رایگان و آبرومندانه در مشهد مقدس</span>
                </li>
                <li className="flex items-center gap-2 bg-[#faf8f5] p-3 rounded-lg border border-[#e2d7c5]">
                  <CheckCircle2 className="w-4 h-4 text-[#114232] shrink-0" />
                  <span>پوشش بیمه حوادث کامل تمام زائران ثبت‌نام شده</span>
                </li>
                <li className="flex items-center gap-2 bg-[#faf8f5] p-3 rounded-lg border border-[#e2d7c5]">
                  <CheckCircle2 className="w-4 h-4 text-[#114232] shrink-0" />
                  <span>تجهیز ۳۸۵ ایستگاه صلواتی ثابت و سیار بین‌راهی</span>
                </li>
                <li className="flex items-center gap-2 bg-[#faf8f5] p-3 rounded-lg border border-[#e2d7c5]">
                  <CheckCircle2 className="w-4 h-4 text-[#114232] shrink-0" />
                  <span>استقرار واحدهای اورژانس و هلال احمر در طول مسیرها</span>
                </li>
                <li className="flex items-center gap-2 bg-[#faf8f5] p-3 rounded-lg border border-[#e2d7c5]">
                  <CheckCircle2 className="w-4 h-4 text-[#114232] shrink-0" />
                  <span>تامین آب آشامیدنی بهداشتی با پویش ملی زائرین ۸</span>
                </li>
                <li className="flex items-center gap-2 bg-[#faf8f5] p-3 rounded-lg border border-[#e2d7c5]">
                  <CheckCircle2 className="w-4 h-4 text-[#114232] shrink-0" />
                  <span>پذیرش و میزبانی ویژه از زائران خارجی (پاکستان، عراق، ترکیه)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 3: Members */}
      {activeTab === 'members' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 border border-[#e2d7c5] shadow-sm">
            <h2 className="text-2xl font-bold text-[#114232] mb-6 border-r-4 border-[#c89234] pr-3">
              اعضا و مسئولین ستاد اجرایی
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ORGANIZATIONAL_MEMBERS.map((m, idx) => (
                <div key={idx} className="bg-[#faf8f5] rounded-2xl p-5 border border-[#e2d7c5] text-center space-y-2 hover:border-[#c89234] transition-all">
                  <div className="w-16 h-16 rounded-full bg-[#114232] text-[#e5b35c] flex items-center justify-center font-bold text-xl mx-auto shadow-inner">
                    {m.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-base text-[#114232]">{m.name}</h3>
                  <p className="text-xs font-semibold text-[#c89234]">{m.title}</p>
                  <p className="text-[11px] text-[#5a6a60]">{m.role}</p>
                  <span className="inline-block bg-[#e5b35c]/20 text-[#114232] text-[10px] font-bold px-2.5 py-0.5 rounded-full mt-2">
                    {m.experience}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 4: Org Chart */}
      {activeTab === 'org-chart' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2d7c5] shadow-sm space-y-8">
            <h2 className="text-2xl font-bold text-[#114232] border-r-4 border-[#c89234] pr-3">
              چارت سازمانی و ساختار ستاد
            </h2>

            {/* Visual Org Chart Tree */}
            <div className="space-y-6 max-w-3xl mx-auto">
              
              {/* Top Level */}
              <div className="bg-gradient-to-r from-[#114232] to-[#0c2f24] text-white p-4 rounded-xl text-center shadow-md font-bold text-base border-2 border-[#c89234]">
                هیئت مدیره و ستاد مرکزی جمعیت خدمتگزاران
              </div>

              {/* Connecting line */}
              <div className="w-0.5 h-6 bg-[#c89234] mx-auto"></div>

              {/* Level 2: Spokesperson & Secretariat */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#faf4e8] p-3.5 rounded-xl border border-[#c89234] text-center font-semibold text-xs text-[#114232]">
                  سخنگو و روابط عمومی (حسین رضایی)
                </div>
                <div className="bg-[#faf4e8] p-3.5 rounded-xl border border-[#c89234] text-center font-semibold text-xs text-[#114232]">
                  دبیرخانه و پشتیبانی مرکزی
                </div>
              </div>

              {/* Connecting line */}
              <div className="w-0.5 h-6 bg-[#c89234] mx-auto"></div>

              {/* Level 3: Committees */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded-lg border border-[#e2d7c5] shadow-sm text-center text-xs text-[#114232] font-medium">
                  کمیته اسکان (۱۵,۰۰۰ خادم)
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#e2d7c5] shadow-sm text-center text-xs text-[#114232] font-medium">
                  کمیته جاده و مواکب (۱۰,۰۰۰ خادم)
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#e2d7c5] shadow-sm text-center text-xs text-[#114232] font-medium">
                  کمیته بهداشت و درمان
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#e2d7c5] shadow-sm text-center text-xs text-[#114232] font-medium">
                  کمیته آمار و ثبت‌نام اینترنتی
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
