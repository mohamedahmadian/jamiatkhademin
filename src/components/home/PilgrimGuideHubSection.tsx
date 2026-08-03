import React, { useState } from 'react';
import { PageType, ServicesSubTab } from '../../types';
import { WALKING_ROUTES, TRANSPORT_OPTIONS } from '../../data/mockData';
import { 
  Compass, 
  Footprints, 
  MapPin, 
  HeartPulse, 
  BookMarked, 
  Train, 
  Bus, 
  Info, 
  CheckCircle2, 
  Sparkles, 
  ChevronLeft, 
  ArrowLeft,
  ShieldAlert,
  Clock,
  Shirt,
  Luggage,
  Sparkle
} from 'lucide-react';

interface PilgrimGuideHubSectionProps {
  setCurrentPage: (page: PageType) => void;
  onNavigateService: (tab: ServicesSubTab) => void;
}

export const PilgrimGuideHubSection: React.FC<PilgrimGuideHubSectionProps> = ({
  setCurrentPage,
  onNavigateService,
}) => {
  const [activeTab, setActiveTab] = useState<'tips' | 'routes' | 'etiquette' | 'transport'>('tips');

  const travelTips = [
    {
      title: 'کفش و جوراب مناسب پیاده‌روی',
      icon: <Footprints className="w-5 h-5 text-emerald-700" />,
      desc: 'حتماً از کفش‌های ورزشی طبی یا استانداردی که قبلاً پا کرده‌اید استفاده کنید. کفش نو نپوشید! دو جفت جوراب نخی ضخیم همراه داشته باشید تا از اصطکاک و تاول جلوگیری شود.'
    },
    {
      title: 'مراقبت از تاول و بهداشت پا',
      icon: <HeartPulse className="w-5 h-5 text-rose-600" />,
      desc: 'در ایستگاه‌های صلواتی پاها را با آب گرم شسته و خشک کنید. در صورت بروز تاول، از سوزاندن یا پاره کردن خودسرانه آن پرهیز نموده و به ایستگاه‌های بهداشت و درمان هلال‌احمر مراجعه کنید.'
    },
    {
      title: 'وسایل ضروری کوله‌پشتی',
      icon: <Luggage className="w-5 h-5 text-amber-600" />,
      desc: 'کوله نباید بیش از ۱۰ درصد وزن بدن باشد. مدارک شناسایی، داروهای شخصی، کلاه آفتاب‌گیر، لیوان شخصی، ملحفه و شارژر موبایل را در پلاستیک زیپ‌دار قرار دهید.'
    },
    {
      title: 'پوشاک و لباس مناسب فصل',
      icon: <Shirt className="w-5 h-5 text-sky-600" />,
      desc: 'هوای جاده‌های خراسان در ایام پایانی صفر (پاییز و زمستان) روزها معتدل و شب‌ها بسیار سرد است. استفاده از پوشش چندلایه (کاپشن سبک و بادگیر) توصیه می‌شود.'
    }
  ];

  const etiquetteList = [
    {
      title: 'خلوص نیت و حضور قلب',
      desc: 'پیاده‌روی زیارتی را تمرین بندگی و پاکسازی روح قرار دهید. از گفتگوهای لغو و دنیوی پرهیز کرده و همراه با صلوات و ذکر امام رضا (ع) قدم بردارید.'
    },
    {
      title: 'ادب و مهربانی با همسفران',
      desc: 'کمک به سالمندان، کودکان و زائران کم‌توان، بالاترین ثواب خادمی را دارد. در ایستگاه‌های اسکان، جا را برای زائران خسته‌تر باز بگذارید.'
    },
    {
      title: 'اذن دخول و طهارت ظاهری',
      desc: 'قبل از ورود به حرم مطهر رضوی، غسل زیارت بجا آورده، لباس تمیز بپوشید و اذن دخول حضرت را با خضوع و خشوع تلاوت کنید.'
    },
    {
      title: 'زیارت به نیابت از شهدا و ملتمسین دعا',
      desc: 'قدم‌های خود را به نیابت از پدر و مادر، شهیدان والامقام و همه ملتمسان دعا هدیه کنید تا برکت سفر مضاعف گردد.'
    }
  ];

  return (
    <section className="bg-white rounded-3xl border border-[#E5E1D8] p-6 sm:p-8 shadow-sm space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#E5E1D8] pb-4 gap-3">
        <div>
          <span className="text-xs font-bold text-[#C5A059] bg-[#1B4332] px-3 py-1 rounded-full inline-block mb-1">
            مرجع جامع راهنمای زائر
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1B4332] font-quran">
            راهنمای عملی و معنوی سفر، مسیرها و حمل‌ونقل مشهد
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            اطلاعات ضروری پیاده‌روی، آداب زیارت رضوی، نقشه‌های ورودی و راه‌اندازی مترو و اتوبوس‌های شهری
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#F8F5F0] p-1.5 rounded-2xl border border-[#E5E1D8]">
          <button
            onClick={() => setActiveTab('tips')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'tips'
                ? 'bg-[#1B4332] text-white shadow-sm'
                : 'text-[#2D3436] hover:bg-[#E5E1D8]/60'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>توصیه‌های سلامت و سفر</span>
          </button>

          <button
            onClick={() => setActiveTab('routes')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'routes'
                ? 'bg-[#1B4332] text-white shadow-sm'
                : 'text-[#2D3436] hover:bg-[#E5E1D8]/60'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>مسیرهای پیاده‌روی</span>
          </button>

          <button
            onClick={() => setActiveTab('etiquette')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'etiquette'
                ? 'bg-[#1B4332] text-white shadow-sm'
                : 'text-[#2D3436] hover:bg-[#E5E1D8]/60'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>آداب زیارت</span>
          </button>

          <button
            onClick={() => setActiveTab('transport')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'transport'
                ? 'bg-[#1B4332] text-white shadow-sm'
                : 'text-[#2D3436] hover:bg-[#E5E1D8]/60'
            }`}
          >
            <Train className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>حمل‌ونقل و مترو مشهد</span>
          </button>
        </div>
      </div>

      {/* TAB CONTENT 1: TRAVEL TIPS */}
      {activeTab === 'tips' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {travelTips.map((tip, idx) => (
              <div 
                key={idx}
                className="bg-[#F8F5F0] p-5 rounded-2xl border border-[#E5E1D8] space-y-3 hover:border-[#1B4332] transition-colors"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-[#E5E1D8] shadow-sm">
                  {tip.icon}
                </div>
                <h3 className="font-bold text-sm text-[#1B4332]">{tip.title}</h3>
                <p className="text-xs text-[#2D3436]/80 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
              <span>پزشکان هلال‌احمر و ایستگاه‌های درمانی در تمامی ۳۸۵ مواکب جاده‌ای مستقر می‌باشند.</span>
            </div>
            <button
              onClick={() => { setCurrentPage('services'); onNavigateService('map'); }}
              className="bg-amber-800 text-white font-bold text-[11px] px-3.5 py-1.5 rounded-xl hover:bg-amber-900 transition-colors shrink-0"
            >
              مشاهده موقعیت ایستگاه‌های درمانی روی نقشه
            </button>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: WALKING ROUTES */}
      {activeTab === 'routes' && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WALKING_ROUTES.map((route) => (
              <div 
                key={route.id}
                className="bg-[#F8F5F0] p-5 rounded-2xl border border-[#E5E1D8] flex flex-col justify-between space-y-3 hover:border-[#C5A059] transition-all"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className="bg-[#1B4332] text-white px-2 py-0.5 rounded">
                      محور {route.axis}
                    </span>
                    <span className="text-[#C5A059] bg-white px-2 py-0.5 rounded border border-[#E5E1D8]">
                      {route.activeStationsCount} موکب فعال
                    </span>
                  </div>

                  <h3 className="font-extrabold text-sm text-[#1B4332] leading-snug font-quran">
                    {route.title}
                  </h3>

                  <p className="text-xs text-[#2D3436]/75 leading-relaxed line-clamp-2">
                    {route.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E1D8]/80 space-y-2 text-xs">
                  <div className="flex justify-between items-center font-bold text-[#1B4332]">
                    <span>کل مسافت: {route.totalKm} کیلومتر</span>
                    <span>تخمین زمان: {route.estimatedDays} روز</span>
                  </div>

                  <button
                    onClick={() => { setCurrentPage('services'); onNavigateService('walking-routes'); }}
                    className="w-full py-2 bg-white hover:bg-[#1B4332] hover:text-white border border-[#E5E1D8] text-[#1B4332] text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1"
                  >
                    <span>جزئیات کامل و مواکب این مسیر</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: ETIQUETTE & SPIRITUALITY */}
      {activeTab === 'etiquette' && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {etiquetteList.map((eti, idx) => (
              <div key={idx} className="bg-[#F8F5F0] p-5 rounded-2xl border border-[#E5E1D8] space-y-2">
                <div className="flex items-center gap-2 text-[#1B4332]">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <h3 className="font-extrabold text-sm font-quran">{eti.title}</h3>
                </div>
                <p className="text-xs text-[#2D3436]/80 leading-relaxed">
                  {eti.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#1B4332] text-white p-5 rounded-2xl border border-[#C5A059] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="space-y-1 text-center sm:text-right">
              <h4 className="font-bold text-sm text-[#C5A059] font-quran">دعای خیر و اذن دخول حضرت رضا (ع)</h4>
              <p className="text-xs text-white/80">«اللَّهُمَّ إِنِّي وَقَفْتُ عَلَى بَابٍ مِنْ أَبْوَابِ بُيُوتِ نَبِيِّكَ...»</p>
            </div>
            <button
              onClick={() => { setCurrentPage('media'); }}
              className="bg-[#C5A059] hover:bg-[#b58f48] text-[#1B4332] font-black text-xs px-4 py-2.5 rounded-xl shadow shrink-0"
            >
              دانلود زیارتنامه و ادعیه سفر
            </button>
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: MASHHAD PUBLIC TRANSPORT */}
      {activeTab === 'transport' && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRANSPORT_OPTIONS.map((item, idx) => (
              <div key={idx} className="bg-[#F8F5F0] p-5 rounded-2xl border border-[#E5E1D8] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold bg-[#1B4332] text-[#C5A059] px-2.5 py-1 rounded-full">
                    {item.lineOrNumber}
                  </span>
                  <span className="text-[11px] text-gray-500 font-mono">
                    ساعات کاری: {item.operatingHours}
                  </span>
                </div>

                <h3 className="font-extrabold text-sm text-[#1B4332] flex items-center gap-2">
                  {item.type === 'metro' ? <Train className="w-4 h-4 text-[#C5A059]" /> : <Bus className="w-4 h-4 text-[#C5A059]" />}
                  <span>{item.title}</span>
                </h3>

                <p className="text-xs text-[#2D3436]/80 leading-relaxed">
                  {item.description}
                </p>

                <div className="bg-white p-3 rounded-xl border border-[#E5E1D8]/80 space-y-1">
                  <span className="text-[11px] font-bold text-[#1B4332] block">ایستگاه‌های کلیدی منتهی به حرم:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.stations.map((st, i) => (
                      <span key={i} className="text-[10px] bg-[#F8F5F0] text-[#1B4332] px-2 py-0.5 rounded border border-[#E5E1D8]">
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-1">
            <button
              onClick={() => { setCurrentPage('services'); onNavigateService('public-transport'); }}
              className="text-xs font-bold text-[#1B4332] hover:text-[#C5A059] flex items-center gap-1"
            >
              <span>مشاهده راهنمای کامل خطوط اتوبوس‌رانی و کارت‌لیت (من‌کارت) مشهد</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
