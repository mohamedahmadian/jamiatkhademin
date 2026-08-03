import React, { useState } from 'react';
import { PageType, MediaSubTab } from '../../types';
import { NEWS_ITEMS } from '../../data/mockData';
import { Newspaper, Radio, Video, Image as ImageIcon, ArrowLeft, Megaphone, Calendar, Eye, Share2, Bell, MessageCircle } from 'lucide-react';

interface NewsCenteredHomeProps {
  setCurrentPage: (page: PageType) => void;
  onNavigateMedia: (tab: MediaSubTab) => void;
  onSelectNews: (newsId: string) => void;
}

export const NewsCenteredHome: React.FC<NewsCenteredHomeProps> = ({
  setCurrentPage,
  onNavigateMedia,
  onSelectNews,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('همه');
  const [isPlayingRadio, setIsPlayingRadio] = useState<boolean>(false);

  const featuredNews = NEWS_ITEMS[0];
  const secondaryNews = NEWS_ITEMS.slice(1, 4);

  const categories = ['همه', 'اطلاعیه', 'مصاحبه', 'گزارش', 'اخبار ستاد'];

  const filteredNews = selectedCategory === 'همه'
    ? NEWS_ITEMS
    : NEWS_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Breaking News Ticker */}
      <div className="bg-[#1B4332] text-white p-3 rounded-2xl shadow-md border-b-2 border-[#C5A059] flex items-center gap-3 overflow-hidden">
        <div className="bg-[#C5A059] text-[#1B4332] px-3 py-1 rounded-lg font-bold text-xs shrink-0 flex items-center gap-1.5 animate-pulse">
          <Megaphone className="w-3.5 h-3.5" />
          <span>خبر فوری</span>
        </div>
        <div className="text-xs sm:text-sm text-white/90 truncate font-semibold">
          اطلاعیه شماره ۴ ستاد مرکزی: کلیه مواکب محور نیشابور - مشهد و قوچان آماده پذیرش زائرین با امکانات اسکان شبانه می‌باشند.
        </div>
      </div>

      {/* Hero Featured News Banner */}
      <section className="bg-white rounded-3xl border border-[#E5E1D8] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="bg-[#C5A059] text-[#1B4332] text-xs font-bold px-3 py-1 rounded-full">
                {featuredNews.category}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {featuredNews.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-[#1B4332] leading-tight font-quran hover:text-[#C5A059] cursor-pointer transition-colors"
                onClick={() => { setCurrentPage('media'); onNavigateMedia('news'); onSelectNews(featuredNews.id); }}>
              {featuredNews.title}
            </h1>

            <p className="text-xs sm:text-sm text-[#2D3436]/80 leading-relaxed line-clamp-3">
              {featuredNews.summary}
            </p>
          </div>

          <div className="pt-4 border-t border-[#E5E1D8] flex items-center justify-between">
            <button
              onClick={() => { setCurrentPage('media'); onNavigateMedia('news'); onSelectNews(featuredNews.id); }}
              className="bg-[#1B4332] hover:bg-[#143326] text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all shadow"
            >
              <span>مشاهده متن کامل خبر</span>
              <ArrowLeft className="w-4 h-4 text-[#C5A059]" />
            </button>

            <span className="text-xs text-[#C5A059] font-bold">منبع: {featuredNews.source}</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[240px] bg-emerald-900 overflow-hidden">
          <img 
            src={featuredNews.image} 
            alt={featuredNews.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 right-4 text-white text-xs bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
            گزارش اختصاصی مرکز رسانه جمعیت
          </div>
        </div>
      </section>

      {/* Live Internet Radio & Media Highlights Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Live Radio Box */}
        <div className="bg-[#1B4332] text-white rounded-2xl p-5 border border-[#1B4332] shadow-md flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio className="w-5 h-5 text-[#C5A059] animate-bounce" />
              <h3 className="font-bold text-sm font-quran text-[#C5A059]">رادیو اینترنتی زائر</h3>
            </div>
            <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-bold animate-pulse">زنده</span>
          </div>

          <p className="text-xs text-white/80 leading-relaxed">
            پخش لحظه‌ای گزارش‌های جاده‌ای، هشدارهای هواشناسی و ادعیه راهپیمایی زائران.
          </p>

          <button
            onClick={() => setIsPlayingRadio(!isPlayingRadio)}
            className="w-full py-2.5 bg-[#C5A059] hover:bg-[#b58f48] text-[#1B4332] font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow"
          >
            {isPlayingRadio ? 'توقف پخش زنده' : 'پخش آنلاین رادیو زائر'}
          </button>
        </div>

        {/* Media Spokesperson Quote */}
        <div className="bg-white rounded-2xl p-5 border border-[#E5E1D8] shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#1B4332]">
            <MessageCircle className="w-4 h-4 text-[#C5A059]" />
            <span>سخنگوی جمعیت خدمتگزاران</span>
          </div>
          <blockquote className="text-xs text-gray-700 italic border-r-2 border-[#C5A059] pr-3 leading-relaxed">
            «تمامی ظرفیت‌های مردمی استان خراسان رضوی برای خدمت‌رسانی شایسته به ۵۰۰ هزار زائر پیاده در دهه آخر صفر بسیج شده است.»
          </blockquote>
          <span className="text-[10px] text-gray-400">سخنگوی ستاد خدمت‌رسانی زائرین پیاده</span>
        </div>

        {/* Media Contact & Subscriptions */}
        <div className="bg-[#F8F5F0] rounded-2xl p-5 border border-[#E5E1D8] shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#1B4332]">
            <Bell className="w-4 h-4 text-[#C5A059]" />
            <span>عضویت در کانال اطلاع‌رسانی</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            برای دریافت سریع‌ترین اخبار، اطلاعیه‌ها و تغییرات مسیرهای راهپیمایی عضو شوید.
          </p>
          <button 
            onClick={() => alert('کانال ایتا و تلگرام جمعیت: @Zaerin_Piadeh')}
            className="w-full py-2.5 bg-[#1B4332] text-white font-bold text-xs rounded-xl hover:bg-[#143326] transition-colors"
          >
            عضویت در کانال رسمی
          </button>
        </div>

      </div>

      {/* News Filtering & Grid List */}
      <section className="bg-white rounded-2xl border border-[#E5E1D8] p-6 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#E5E1D8] pb-4">
          <div className="flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-[#C5A059]" />
            <h2 className="text-xl font-bold text-[#1B4332] font-quran">
              آخرین گزارش‌ها و اطلاعیه‌های رسمی
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#1B4332] text-white shadow-sm'
                    : 'bg-[#F8F5F0] text-[#2D3436] hover:bg-[#E5E1D8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <article 
              key={news.id} 
              onClick={() => { setCurrentPage('media'); onNavigateMedia('news'); onSelectNews(news.id); }}
              className="bg-[#F8F5F0] rounded-2xl border border-[#E5E1D8] overflow-hidden hover:shadow-md hover:border-[#C5A059] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-gray-200">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 right-3 bg-[#1B4332] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    {news.category}
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <span className="text-[10px] text-[#C5A059] font-bold flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {news.date} - {news.source}
                  </span>
                  <h3 className="font-bold text-sm text-[#1B4332] group-hover:text-[#C5A059] transition-colors leading-snug line-clamp-2 font-quran">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {news.summary}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 text-xs font-bold text-[#1B4332] flex items-center justify-between group-hover:text-[#C5A059]">
                <span>مطالعه کامل</span>
                <span>←</span>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
};
