import React, { useState } from 'react';
import { PageType, ServicesSubTab } from '../../types';
import { WALKING_ROUTES, SOCIETY_INFO } from '../../data/mockData';
import { Compass, Thermometer, CloudSun, MapPin, PhoneCall, Volume2, Play, Pause, AlertTriangle, ShieldCheck, HeartPulse, Sparkles, Navigation, ArrowLeft } from 'lucide-react';

interface PilgrimageGuideHomeProps {
  setCurrentPage: (page: PageType) => void;
  onNavigateService: (tab: ServicesSubTab) => void;
}

export const PilgrimageGuideHome: React.FC<PilgrimageGuideHomeProps> = ({
  setCurrentPage,
  onNavigateService,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedAxis, setSelectedAxis] = useState<string>('نیشابور - مشهد');

  const axisData = [
    { name: 'نیشابور - مشهد', distance: '۱۳۰ کیلومتر', temp: '۲۴°C', status: 'روان و خنک', activeMokebs: 145, emergencyPhone: '۰۵۱-۳۲۲۱۸۸۸۱' },
    { name: 'قوچان - مشهد', distance: '۱۴۰ کیلومتر', temp: '۲۱°C', status: 'آفتابی ملایم', activeMokebs: 98, emergencyPhone: '۰۵۱-۳۲۲۱۸۸۸۲' },
    { name: 'سرخس - مشهد', distance: '۱۸۵ کیلومتر', temp: '۲۷°C', status: 'وزش باد ملایم', activeMokebs: 52, emergencyPhone: '۰۵۱-۳۲۲۱۸۸۸۳' },
    { name: 'تربت حیدریه - مشهد', distance: '۱۴۰ کیلومتر', temp: '۲۳°C', status: 'صاف و بدون ترافیک', activeMokebs: 74, emergencyPhone: '۰۵۱-۳۲۲۱۸۸۸۴' },
    { name: 'میامی - مشهد', distance: '۹۵ کیلومتر', temp: '۲۲°C', status: 'مطبوع زیارتی', activeMokebs: 40, emergencyPhone: '۰۵۱-۳۲۲۱۸۸۸۵' },
  ];

  const currentAxis = axisData.find(a => a.name === selectedAxis) || axisData[0];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Serene Spiritual Header Banner */}
      <section className="bg-gradient-to-r from-[#1B4332] via-[#0E271C] to-[#1B4332] text-white rounded-3xl p-6 sm:p-10 border border-[#C5A059]/40 shadow-xl relative overflow-hidden text-center space-y-4">
        <div className="absolute inset-0 bg-emerald-pattern opacity-20 pointer-events-none"></div>
        <div className="max-w-2xl mx-auto space-y-3 relative z-10">
          <span className="text-[#C5A059] font-quran text-lg block animate-pulse">
            «اللَّهُمَّ صَلِّ عَلَى عَلِيِّ بْنِ مُوسَى الرِّضَا الْمُرْتَضَى...»
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white font-quran">
            راهنمای جاده‌ای و زائران پیاده در مسیر طوس
          </h1>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            اطلاعات لحظه‌ای آب‌وهوا، وضعیت ترافیک پیاده‌روی، شماره‌های امدادی و ادعیه معنوی ویژه همراهی در مسیر زیارت.
          </p>
        </div>
      </section>

      {/* Live Audio Player - Ziyarat Aminullah */}
      <div className="bg-white rounded-2xl p-5 border border-[#E5E1D8] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#C5A059] text-[#1B4332] rounded-full flex items-center justify-center font-bold">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#1B4332] font-quran">زیارت‌نامه حضرت رضا (ع) - زیارت امین‌الله</h3>
            <p className="text-xs text-gray-500">پخش صوت معنوی همگام با قدم‌های پیاده‌روی زائران</p>
          </div>
        </div>

        <button
          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
          className="bg-[#1B4332] hover:bg-[#143326] text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-all shrink-0"
        >
          {isPlayingAudio ? (
            <>
              <Pause className="w-4 h-4 text-[#C5A059]" />
              <span>توقف پخش صوت</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 text-[#C5A059]" />
              <span>پخش آنلاین زیارت امین‌الله</span>
            </>
          )}
        </button>
      </div>

      {/* Axis Selector & Weather/Traffic Live Cards */}
      <section className="bg-white rounded-2xl border border-[#E5E1D8] p-6 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-[#E5E1D8] pb-4">
          <div>
            <h2 className="text-lg font-bold text-[#1B4332] font-quran flex items-center gap-2">
              <Navigation className="w-5 h-5 text-[#C5A059]" />
              <span>وضعیت زنده محورهای ورودی به مشهد مقدس</span>
            </h2>
            <p className="text-xs text-gray-500">محور جاده‌ای خود را جهت مشاهده شرایط جوی و موکب‌های فعال انتخاب کنید</p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
            {axisData.map((axis) => (
              <button
                key={axis.name}
                onClick={() => setSelectedAxis(axis.name)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedAxis === axis.name 
                    ? 'bg-[#1B4332] text-white shadow' 
                    : 'bg-[#F8F5F0] text-[#2D3436] hover:bg-[#E5E1D8]'
                }`}
              >
                {axis.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Axis Status Card */}
        <div className="bg-[#F8F5F0] rounded-2xl border border-[#E5E1D8] p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <span className="text-[10px] text-gray-500 font-bold uppercase">نام محور</span>
            <div className="text-base font-bold text-[#1B4332] font-quran">{currentAxis.name}</div>
            <div className="text-xs text-gray-600">فاصله کلی: {currentAxis.distance}</div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-gray-500 font-bold uppercase">دمای هوای جاده</span>
            <div className="text-base font-bold text-[#1B4332] flex items-center gap-1">
              <Thermometer className="w-4 h-4 text-rose-600" />
              <span>{currentAxis.temp}</span>
            </div>
            <div className="text-xs text-gray-600">{currentAxis.status}</div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-gray-500 font-bold uppercase">ایستگاه‌های صلواتی فعال</span>
            <div className="text-base font-bold text-[#1B4332]">{currentAxis.activeMokebs} موکب</div>
            <div className="text-xs text-emerald-700 font-bold">آماده اسکان و تغذیه</div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-gray-500 font-bold uppercase">پست امداد جاده‌ای</span>
            <a href={`tel:${currentAxis.emergencyPhone}`} className="text-xs font-bold text-[#1B4332] hover:text-[#C5A059] block dir-ltr">
              {currentAxis.emergencyPhone}
            </a>
            <div className="text-[10px] text-gray-500">پاسخگویی امداد این محور</div>
          </div>
        </div>
      </section>

      {/* Health & Road Safety Tips */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Foot Care & Health */}
        <div className="bg-white rounded-2xl border border-[#E5E1D8] p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-[#E5E1D8] pb-3">
            <HeartPulse className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-bold text-base text-[#1B4332] font-quran">توصیه‌های بهداشتی و مراقبت از پا در راهپیمایی</h3>
          </div>

          <ul className="space-y-2.5 text-xs text-gray-700 leading-relaxed list-disc list-inside">
            <li>استفاده از کفش سبک پیاده‌روی با حداقل ۱ سانتی‌متر لژ نرم جهت جلوگیری از تاول.</li>
            <li>شستشوی پاهام با آب ولرم و نمک خنک در فواصل استراحت خادمان درمان.</li>
            <li>همراه داشتن جوراب‌های نخی زاپاس و تعویض آن هر ۴ ساعت یکبار.</li>
            <li>مراجعه فوری به پست‌های هلال‌احمر در صورت احساس گرفتگی عضلانی یا تاول خونی.</li>
          </ul>
        </div>

        {/* Emergency Callouts */}
        <div className="bg-white rounded-2xl border border-[#E5E1D8] p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-[#E5E1D8] pb-3">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-bold text-base text-[#1B4332] font-quran">شماره‌های ضروری هلال‌احمر و امداد جاده‌ای</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-[#F8F5F0] rounded-xl border border-[#E5E1D8]">
              <span className="text-[10px] text-gray-500 block">پشتیبانی زائرین</span>
              <strong className="text-[#1B4332] text-sm dir-ltr block mt-0.5">{SOCIETY_INFO.hotline}</strong>
            </div>

            <div className="p-3 bg-[#F8F5F0] rounded-xl border border-[#E5E1D8]">
              <span className="text-[10px] text-gray-500 block">امداد و نجات هلال احمر</span>
              <strong className="text-[#1B4332] text-sm dir-ltr block mt-0.5">۱۱۲</strong>
            </div>

            <div className="p-3 bg-[#F8F5F0] rounded-xl border border-[#E5E1D8]">
              <span className="text-[10px] text-gray-500 block">اورژانس پزشکی</span>
              <strong className="text-[#1B4332] text-sm dir-ltr block mt-0.5">۱۱۵</strong>
            </div>

            <div className="p-3 bg-[#F8F5F0] rounded-xl border border-[#E5E1D8]">
              <span className="text-[10px] text-gray-500 block">اطلاعات راهور جاده‌ای</span>
              <strong className="text-[#1B4332] text-sm dir-ltr block mt-0.5">۱۲۰</strong>
            </div>
          </div>
        </div>

      </section>

      {/* Direct Interactive Map CTA */}
      <div className="bg-[#1B4332] text-white p-6 rounded-2xl border border-[#1B4332] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-base text-[#C5A059] font-quran">یافتن نزدیک‌ترین ایستگاه صلواتی روی نقشه</h4>
          <p className="text-xs text-white/80 mt-1">مشاهده موقعیت آنلاین موکب‌ها، سرویس بهداشتی، حمام و محل اسکان شبانه</p>
        </div>

        <button 
          onClick={() => { setCurrentPage('services'); onNavigateService('map'); }}
          className="bg-[#C5A059] hover:bg-[#b58f48] text-[#1B4332] font-bold px-6 py-2.5 rounded-xl text-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>مشاهده نقشه جاده‌ای</span>
          <ArrowLeft className="w-4 h-4 text-[#1B4332]" />
        </button>
      </div>

    </div>
  );
};
