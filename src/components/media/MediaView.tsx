import React, { useState } from 'react';
import { MediaSubTab, NewsItem, NewsCategory, RevayatStory, PhotoAlbum, VideoItem, PublicationItem } from '../../types';
import { NEWS_ITEMS, REVAYAT_STORIES, PUBLICATIONS_DATA, PHOTO_ALBUMS_DATA, VIDEO_ITEMS_DATA, SOCIETY_INFO } from '../../data/mockData';
import { 
  Newspaper, 
  Image as ImageIcon, 
  Video, 
  Calendar, 
  Eye, 
  X, 
  Play, 
  Share2, 
  Download, 
  Heart, 
  Quote, 
  Volume2, 
  Search, 
  FileText, 
  ClipboardList, 
  Sparkles, 
  Radio, 
  CheckCircle2, 
  Building2, 
  ChevronRight, 
  ChevronLeft,
  Send,
  UserCheck,
  Megaphone
} from 'lucide-react';

interface MediaViewProps {
  initialTab?: MediaSubTab | 'news';
  initialSelectedNewsId?: string | null;
}

export const MediaView: React.FC<MediaViewProps> = ({ 
  initialTab = 'news-announcements', 
  initialSelectedNewsId = null 
}) => {
  // Handle legacy 'news' tab string gracefully
  const normalizedTab: MediaSubTab = (initialTab === 'news' ? 'news-announcements' : initialTab) as MediaSubTab;
  const [activeTab, setActiveTab] = useState<MediaSubTab>(normalizedTab);

  // States for News
  const [newsCategoryFilter, setNewsCategoryFilter] = useState<string>('همه');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(
    initialSelectedNewsId 
      ? NEWS_ITEMS.find(n => n.id === initialSelectedNewsId) || null 
      : null
  );

  // States for Revayat (Stories)
  const [selectedStory, setSelectedStory] = useState<RevayatStory | null>(null);
  const [storyLikes, setStoryLikes] = useState<Record<string, number>>({});
  const [showStorySubmissionModal, setShowStorySubmissionModal] = useState<boolean>(false);
  const [storySubmittedToast, setStorySubmittedToast] = useState<boolean>(false);

  // States for Photo Gallery Lightbox
  const [selectedAlbum, setSelectedAlbum] = useState<PhotoAlbum | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  // States for Video Player
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  // States for Publications Download
  const [downloadingPubId, setDownloadingPubId] = useState<string | null>(null);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  // Helper: Filter News
  const filteredNews = NEWS_ITEMS.filter(item => {
    const matchesCategory = newsCategoryFilter === 'همه' || item.category === newsCategoryFilter;
    const matchesSearch = item.title.includes(searchQuery) || item.summary.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // Filter Activity Reports (Reports & Stats)
  const activityReports = NEWS_ITEMS.filter(item => item.category === 'گزارش عملکرد');

  const handleLikeStory = (id: string, currentCount: number) => {
    const existing = storyLikes[id] || currentCount;
    setStoryLikes(prev => ({ ...prev, [id]: existing + 1 }));
  };

  const handleDownloadPublication = (pub: PublicationItem) => {
    setDownloadingPubId(pub.id);
    setTimeout(() => {
      setDownloadingPubId(null);
      setDownloadSuccessToast(`فایل «${pub.title}» با موفقیت آماده دانلود شد.`);
      setTimeout(() => setDownloadSuccessToast(null), 4000);
    }, 1200);
  };

  return (
    <div className="space-y-8 pb-16 max-w-7xl mx-auto px-4">
      
      {/* Toast Banner */}
      {downloadSuccessToast && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#1B4332] text-[#F8F5F0] border-2 border-[#C5A059] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
          <span className="text-xs sm:text-sm font-bold">{downloadSuccessToast}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-[#1B4332] text-white rounded-3xl p-6 sm:p-10 border-2 border-[#C5A059] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A059]/20 text-[#C5A059] text-xs font-bold px-3 py-1 rounded-full border border-[#C5A059]/40">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>مرکز رسمی رسانه و اطلاع‌رسانی جمعیت</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-quran text-[#C5A059] leading-snug">
              رسانه و اخبار خادمان زائرین پیاده
            </h1>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              روایت رویدادها، اطلاعیه‌های فوری، گزارش‌های میدانی، داستان‌های معنوی خادمان و زائران و آرشیو مصور ۲۶ سال خدمت بی‌منّت در جاده‌های منتهی به مشهد مقدس.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center space-y-2 min-w-[200px]">
            <span className="text-[11px] text-[#C5A059] font-bold block">پوشش رسانه‌ای صفر ۱۴۰۳</span>
            <div className="flex justify-around items-center gap-3 pt-1 border-t border-white/10 text-xs">
              <div>
                <strong className="block text-base font-extrabold text-white">۳۸۵</strong>
                <span className="text-[10px] text-white/70">ایستگاه فعال</span>
              </div>
              <div className="h-6 w-px bg-white/20"></div>
              <div>
                <strong className="block text-base font-extrabold text-white">۳۰K</strong>
                <span className="text-[10px] text-white/70">خادم داوطلب</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Navigation Sub-tabs */}
      <div className="flex border-b border-[#E5E1D8] overflow-x-auto no-scrollbar gap-2 pb-2">
        <button
          onClick={() => setActiveTab('news-announcements')}
          className={`px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'news-announcements'
              ? 'bg-[#1B4332] text-white shadow-md border-b-4 border-[#C5A059]'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <Newspaper className="w-4 h-4 text-[#C5A059]" />
          <span>اخبار و اطلاعیه‌ها</span>
        </button>

        <button
          onClick={() => setActiveTab('activity-reports')}
          className={`px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'activity-reports'
              ? 'bg-[#1B4332] text-white shadow-md border-b-4 border-[#C5A059]'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <ClipboardList className="w-4 h-4 text-[#C5A059]" />
          <span>گزارش عملکرد</span>
        </button>

        <button
          onClick={() => setActiveTab('revayat-khedmat')}
          className={`px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'revayat-khedmat'
              ? 'bg-[#1B4332] text-white shadow-md border-b-4 border-[#C5A059]'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <span>روایت خدمت (داستان‌ها)</span>
        </button>

        <button
          onClick={() => setActiveTab('photos')}
          className={`px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'photos'
              ? 'bg-[#1B4332] text-white shadow-md border-b-4 border-[#C5A059]'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <ImageIcon className="w-4 h-4 text-[#C5A059]" />
          <span>گالری تصاویر</span>
        </button>

        <button
          onClick={() => setActiveTab('videos')}
          className={`px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'videos'
              ? 'bg-[#1B4332] text-white shadow-md border-b-4 border-[#C5A059]'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <Video className="w-4 h-4 text-[#C5A059]" />
          <span>گزارش‌های ویدئویی</span>
        </button>

        <button
          onClick={() => setActiveTab('publications')}
          className={`px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'publications'
              ? 'bg-[#1B4332] text-white shadow-md border-b-4 border-[#C5A059]'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <FileText className="w-4 h-4 text-[#C5A059]" />
          <span>نشریات و گزارش‌ها</span>
        </button>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: NEWS & ANNOUNCEMENTS                                */}
      {/* ========================================================= */}
      {activeTab === 'news-announcements' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Filters and Search Bar */}
          <div className="bg-white rounded-2xl p-4 border border-[#E5E1D8] shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="جستجو در اخبار و اطلاعیه‌ها..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 bg-[#F8F5F0] border border-[#E5E1D8] rounded-xl text-xs sm:text-sm text-[#2D3436] focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
              />
              <Search className="w-4 h-4 text-[#C5A059] absolute right-3.5 top-3" />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {['همه', 'اطلاعیه و فراخوان', 'اخبار زائر', 'گزارش عملکرد', 'فرهنگی و آموزشی', 'بین‌الملل'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setNewsCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    newsCategoryFilter === cat
                      ? 'bg-[#1B4332] text-[#C5A059] shadow-sm'
                      : 'bg-[#F8F5F0] text-[#2D3436] hover:bg-[#E5E1D8]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Urgent Announcement Callout Box if Filter is All or Announcement */}
          {(newsCategoryFilter === 'همه' || newsCategoryFilter === 'اطلاعیه و فراخوان') && !searchQuery && (
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-500 text-white rounded-xl shadow-sm mt-0.5">
                  <Megaphone className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">فراخوان فوری زائرین و خادمان</span>
                  <h3 className="font-bold text-sm sm:text-base text-amber-950 mt-0.5">
                    ثبت‌نام و پوشش بیمه‌ای ۵۰۰ هزار زائر پیاده در سامانه زائرین ۸
                  </h3>
                  <p className="text-xs text-amber-900/80 mt-1">
                    پرداخت ۲۰ هزار تومان یارانه بیمه‌ای توسط جمعیت. برای ثبت‌نام فردی یا کاروانی فوراً اقدام نمایید.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedNews(NEWS_ITEMS[1])}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl whitespace-nowrap shadow-sm transition-all active:scale-95"
              >
                جزئیات و ثبت‌نام
              </button>
            </div>
          )}

          {/* News Items Grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedNews(item)}
                  className="bg-white rounded-2xl border border-[#E5E1D8] shadow-sm hover:border-[#C5A059] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group overflow-hidden"
                >
                  <div className="space-y-3 p-4">
                    <div className="relative h-48 rounded-xl overflow-hidden bg-[#F8F5F0]">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className={`absolute top-2 right-2 text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm ${
                        item.category === 'اطلاعیه و فراخوان' 
                          ? 'bg-amber-600 text-white' 
                          : 'bg-[#1B4332] text-[#C5A059]'
                      }`}>
                        {item.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-[#2D3436]/70">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>منبع: {item.source}</span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-[#1B4332] group-hover:text-[#C5A059] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#2D3436]/80 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>

                    {item.tags && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {item.tags.map(t => (
                          <span key={t} className="text-[10px] bg-[#F8F5F0] text-[#1B4332] px-2 py-0.5 rounded">
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-4 bg-[#F8F5F0]/50 border-t border-[#E5E1D8] text-xs font-bold text-[#1B4332] flex items-center justify-between group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
                    <span>مطالعه متن کامل خبر</span>
                    <Eye className="w-4 h-4 text-[#C5A059]" />
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center text-[#2D3436]/60 border border-[#E5E1D8]">
              نتیجه‌ای برای عبارت جستجوی شما یافت نشد.
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: ACTIVITY & PERFORMANCE REPORTS                    */}
      {/* ========================================================= */}
      {activeTab === 'activity-reports' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Overview Metrics Header */}
          <div className="bg-[#1B4332] text-white p-6 sm:p-8 rounded-2xl border border-[#1B4332] shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-1">
              <span className="text-xs text-white/70 block">تعداد مواکب فعال در ۶ محور اصلی</span>
              <strong className="text-2xl sm:text-3xl font-extrabold text-[#C5A059]">۳۸۵ ایستگاه</strong>
              <p className="text-[11px] text-white/60">۱۴ استان میزبانی مستقیم در جاده‌ها دارند</p>
            </div>
            <div className="space-y-1 border-y md:border-y-0 md:border-x border-white/15 py-4 md:py-0">
              <span className="text-xs text-white/70 block">ظرفیت اسکان شبانه آماده‌سازی‌شده</span>
              <strong className="text-2xl sm:text-3xl font-extrabold text-[#C5A059]">۱۳۰,۰۰۰ نفر / شب</strong>
              <p className="text-[11px] text-white/60">در مدارس، حسینیه‌ها و سالن‌های ورزشی</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-white/70 block">خادمان داوطلب سازمان‌دهی‌شده</span>
              <strong className="text-2xl sm:text-3xl font-extrabold text-[#C5A059]">۳۰,۰۰۰ خادم</strong>
              <p className="text-[11px] text-white/60">در بخش‌های جاده‌ای، اسکان، درمان و اطعام</p>
            </div>
          </div>

          {/* Detailed Performance News Cards */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[#1B4332] flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-[#C5A059]" />
              <span>گزارش عملکرد روزانه و بازدیدهای میدانی</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activityReports.map((report) => (
                <div key={report.id} className="bg-white rounded-2xl border border-[#E5E1D8] p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#2D3436]/60 border-b border-[#E5E1D8] pb-2">
                    <span className="font-bold text-[#1B4332]">{report.source}</span>
                    <span>{report.date}</span>
                  </div>
                  <h3 className="font-bold text-base text-[#1B4332]">{report.title}</h3>
                  <p className="text-xs text-[#2D3436]/80 leading-relaxed whitespace-pre-line">
                    {report.content}
                  </p>
                  <div className="pt-2 flex justify-end">
                    <button 
                      onClick={() => setSelectedNews(report)}
                      className="text-xs font-bold text-[#C5A059] hover:text-[#1B4332] flex items-center gap-1"
                    >
                      <span>مشاهده کامل گزارش</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 3: REVAYAT KHEDMAT (STORIES & NARRATIVES)              */}
      {/* ========================================================= */}
      {activeTab === 'revayat-khedmat' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* Banner */}
          <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A46] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#C5A059]/40 shadow-lg flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs text-[#C5A059] font-bold bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block">
                روایت‌های انسان‌محور و داستان‌های واقعی
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                روایت خدمت؛ دل‌نوشته‌ها و خاطرات خادمان و زائران
              </h2>
              <p className="text-xs text-white/80 leading-relaxed">
                پشت هر چای صلواتی، هر واکس کفش و هر شب اسکان در مسیر، قصه‌ای از عشق خالصانه نهفته است. مردم با آدم‌ها ارتباط می‌گیرند.
              </p>
            </div>

            <button
              onClick={() => setShowStorySubmissionModal(true)}
              className="bg-[#C5A059] hover:bg-[#b58f48] text-[#1B4332] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-md transition-all active:scale-95 whitespace-nowrap flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>ثبت خاطره یا روایت شما</span>
            </button>
          </div>

          {/* Stories List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVAYAT_STORIES.map((story) => {
              const currentLikes = storyLikes[story.id] || story.likesCount || 0;
              return (
                <div 
                  key={story.id} 
                  className="bg-white rounded-3xl border border-[#E5E1D8] shadow-sm hover:border-[#C5A059] transition-all overflow-hidden flex flex-col justify-between group"
                >
                  <div className="space-y-4 p-5">
                    <div className="relative h-48 rounded-2xl overflow-hidden bg-[#F8F5F0]">
                      <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md text-[#C5A059] text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                        <Quote className="w-3 h-3 text-[#C5A059]" />
                        <span>روایت شفاهی</span>
                      </div>
                      {story.audioDuration && (
                        <div className="absolute bottom-2 left-2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded font-mono flex items-center gap-1">
                          <Volume2 className="w-3 h-3 text-[#C5A059]" />
                          <span>صوت {story.audioDuration}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <strong className="text-xs font-extrabold text-[#C5A059] block">{story.narratorName}</strong>
                      <span className="text-[11px] text-[#2D3436]/60 block">{story.narratorRole}</span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-[#1B4332] leading-snug">
                      {story.title}
                    </h3>

                    <p className="text-xs text-[#2D3436]/80 leading-relaxed line-clamp-3 bg-[#F8F5F0] p-3 rounded-xl border border-[#E5E1D8]/60 italic">
                      «{story.summary}»
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8F5F0] border-t border-[#E5E1D8] flex items-center justify-between text-xs">
                    <button 
                      onClick={() => handleLikeStory(story.id, story.likesCount || 0)}
                      className="flex items-center gap-1.5 text-rose-600 font-bold hover:scale-110 transition-transform"
                    >
                      <Heart className="w-4 h-4 fill-rose-600" />
                      <span>{currentLikes} پسند</span>
                    </button>

                    <button 
                      onClick={() => setSelectedStory(story)}
                      className="bg-[#1B4332] text-[#C5A059] font-bold px-4 py-2 rounded-xl text-xs hover:bg-[#112d21] transition-colors"
                    >
                      خواندن کامل داستان
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 4: PHOTO GALLERY                                      */}
      {/* ========================================================= */}
      {activeTab === 'photos' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHOTO_ALBUMS_DATA.map((album) => (
              <div 
                key={album.id} 
                onClick={() => { setSelectedAlbum(album); setActivePhotoIndex(0); }}
                className="bg-white rounded-2xl overflow-hidden border border-[#E5E1D8] shadow-sm hover:border-[#C5A059] hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="relative h-52 overflow-hidden bg-[#F8F5F0]">
                  <img src={album.coverImage} alt={album.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-2 right-2 bg-black/70 text-white text-[10px] px-2.5 py-1 rounded-lg backdrop-blur-sm">
                    {album.category}
                  </span>
                  <span className="absolute bottom-2 left-2 bg-[#1B4332] text-[#C5A059] text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    {album.photosCount} تصویر
                  </span>
                </div>
                <div className="p-4 space-y-1">
                  <div className="text-[10px] text-[#2D3436]/60">{album.date}</div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1B4332] line-clamp-2 leading-snug group-hover:text-[#C5A059] transition-colors">
                    {album.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 5: VIDEO REPORTS & DOCUMENTARIES                      */}
      {/* ========================================================= */}
      {activeTab === 'videos' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
          {VIDEO_ITEMS_DATA.map((vid) => (
            <div 
              key={vid.id} 
              onClick={() => setSelectedVideo(vid)}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5E1D8] shadow-sm hover:border-[#C5A059] hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 bg-black overflow-hidden">
                  <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#1B4332] text-[#C5A059] border-2 border-[#C5A059] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-[#C5A059] mr-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono">
                    {vid.duration}
                  </span>
                  <span className="absolute top-2 right-2 bg-[#1B4332] text-[#C5A059] text-[10px] font-bold px-2 py-0.5 rounded">
                    {vid.category}
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <span className="text-[11px] text-[#2D3436]/60 block">{vid.date}</span>
                  <h3 className="font-bold text-sm text-[#1B4332] group-hover:text-[#C5A059] transition-colors leading-snug">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-[#2D3436]/70 line-clamp-2">
                    {vid.description}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-[#F8F5F0] border-t border-[#E5E1D8] text-center text-xs font-bold text-[#1B4332]">
                پخش ویدئو
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 6: PUBLICATIONS & PDF REPORTS                         */}
      {/* ========================================================= */}
      {activeTab === 'publications' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PUBLICATIONS_DATA.map((pub) => (
              <div key={pub.id} className="bg-white rounded-2xl border border-[#E5E1D8] p-5 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#C5A059] transition-all">
                <div className="space-y-3">
                  <div className="h-56 rounded-xl overflow-hidden bg-[#F8F5F0] relative">
                    <img src={pub.coverImage} alt={pub.title} className="w-full h-full object-cover" />
                    <span className="absolute top-2 right-2 bg-[#1B4332] text-[#C5A059] text-[10px] font-bold px-2 py-1 rounded">
                      {pub.issueNumber}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-[11px] text-[#2D3436]/60">
                    <span>انتشار: {pub.publishDate}</span>
                    <span>{pub.pagesCount} صفحه</span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-[#1B4332] leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-xs text-[#2D3436]/80 leading-relaxed">
                    {pub.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E1D8] flex items-center justify-between">
                  <span className="text-[11px] text-[#2D3436]/60 font-mono">PDF ({pub.fileSizeMb} MB)</span>
                  <button
                    onClick={() => handleDownloadPublication(pub)}
                    disabled={downloadingPubId === pub.id}
                    className="bg-[#1B4332] hover:bg-[#112d21] text-[#C5A059] font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm transition-all active:scale-95 disabled:opacity-50"
                  >
                    <Download className="w-4 h-4" />
                    <span>{downloadingPubId === pub.id ? 'در حال دریافت...' : 'دانلود مستقیم'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 1: News Detail Reader                               */}
      {/* ========================================================= */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-5 shadow-2xl border-2 border-[#C5A059]">
            <div className="flex justify-between items-center border-b border-[#E5E1D8] pb-3">
              <span className="text-xs font-bold text-[#C5A059] bg-[#1B4332] px-3 py-1 rounded-lg">
                {selectedNews.category}
              </span>
              <button 
                onClick={() => setSelectedNews(null)} 
                className="p-1 hover:bg-[#F8F5F0] rounded-full text-[#1B4332] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <h2 className="text-lg sm:text-2xl font-bold text-[#1B4332] leading-snug">
              {selectedNews.title}
            </h2>

            <div className="flex items-center gap-3 text-xs text-[#2D3436]/70">
              <span>تاریخ: {selectedNews.date}</span>
              <span>•</span>
              <span>منبع خبر: {selectedNews.source}</span>
            </div>

            <div className="h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#F8F5F0]">
              <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" />
            </div>

            <div className="text-xs sm:text-sm text-[#2D3436] leading-relaxed whitespace-pre-line border-t border-[#E5E1D8] pt-4">
              {selectedNews.content}
            </div>

            <div className="pt-4 border-t border-[#E5E1D8] flex justify-between items-center">
              <button 
                onClick={() => setSelectedNews(null)}
                className="bg-[#1B4332] text-[#C5A059] font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-[#112d21]"
              >
                بستن پنجره
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: Revayat Story Full Reader                        */}
      {/* ========================================================= */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-5 shadow-2xl border-2 border-[#C5A059]">
            <div className="flex justify-between items-center border-b border-[#E5E1D8] pb-3">
              <div>
                <strong className="text-sm font-extrabold text-[#C5A059] block">{selectedStory.narratorName}</strong>
                <span className="text-xs text-[#2D3436]/60">{selectedStory.narratorRole}</span>
              </div>
              <button onClick={() => setSelectedStory(null)} className="p-1 hover:bg-[#F8F5F0] rounded-full text-[#1B4332]">
                <X className="w-6 h-6" />
              </button>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-[#1B4332] leading-snug">
              {selectedStory.title}
            </h2>

            <div className="h-60 rounded-2xl overflow-hidden bg-[#F8F5F0]">
              <img src={selectedStory.image} alt={selectedStory.title} className="w-full h-full object-cover" />
            </div>

            <div className="bg-[#F8F5F0] p-4 rounded-2xl border border-[#E5E1D8] text-xs sm:text-sm text-[#2D3436] leading-relaxed italic">
              {selectedStory.fullStory}
            </div>

            <div className="pt-4 border-t border-[#E5E1D8] flex justify-between items-center">
              <button
                onClick={() => handleLikeStory(selectedStory.id, selectedStory.likesCount || 0)}
                className="flex items-center gap-2 bg-rose-50 text-rose-700 border border-rose-200 px-4 py-2 rounded-xl text-xs font-bold"
              >
                <Heart className="w-4 h-4 fill-rose-600 text-rose-600" />
                <span>{(storyLikes[selectedStory.id] || selectedStory.likesCount || 0)} پسند</span>
              </button>

              <button 
                onClick={() => setSelectedStory(null)}
                className="bg-[#1B4332] text-[#C5A059] font-bold px-6 py-2.5 rounded-xl text-xs"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 3: Submit Story Modal                                */}
      {/* ========================================================= */}
      {showStorySubmissionModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl border-2 border-[#C5A059]">
            <div className="flex justify-between items-center border-b border-[#E5E1D8] pb-3">
              <h3 className="font-extrabold text-base text-[#1B4332] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
                <span>ثبت داستان یا خاطره خادمی/زیارت</span>
              </h3>
              <button onClick={() => setShowStorySubmissionModal(false)} className="p-1 hover:bg-[#F8F5F0] rounded-full">
                <X className="w-6 h-6 text-[#1B4332]" />
              </button>
            </div>

            {storySubmittedToast ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="font-bold text-base text-[#1B4332]">روایت شما با موفقیت ثبت شد!</h4>
                <p className="text-xs text-[#2D3436]/80">
                  خاطره شما پس از بررسی توسط تیم تحریریه در بخش «روایت خدمت» منتشر خواهد شد.
                </p>
                <button
                  onClick={() => { setStorySubmittedToast(false); setShowStorySubmissionModal(false); }}
                  className="bg-[#1B4332] text-[#C5A059] font-bold text-xs px-6 py-2.5 rounded-xl mt-2"
                >
                  متشکرم
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setStorySubmittedToast(true);
                }} 
                className="space-y-4 text-xs"
              >
                <div>
                  <label className="block font-bold text-[#1B4332] mb-1">نام و نام خانوادگی:</label>
                  <input required type="text" placeholder="مثال: رضا احمدی" className="w-full p-2.5 border border-[#E5E1D8] rounded-xl focus:ring-2 focus:ring-[#1B4332] outline-none" />
                </div>

                <div>
                  <label className="block font-bold text-[#1B4332] mb-1">نقش شما:</label>
                  <select required className="w-full p-2.5 border border-[#E5E1D8] rounded-xl focus:ring-2 focus:ring-[#1B4332] outline-none">
                    <option value="khadim">خادم افتخاری ایستگاه جاده‌ای</option>
                    <option value="pilgrim">زائر پیاده</option>
                    <option value="donor">خیر و بانی نذورات</option>
                    <option value="citizen">شهروند مجاور مشهدی</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#1B4332] mb-1">عنوان خاطره:</label>
                  <input required type="text" placeholder="عنوان کوتاه داستان..." className="w-full p-2.5 border border-[#E5E1D8] rounded-xl focus:ring-2 focus:ring-[#1B4332] outline-none" />
                </div>

                <div>
                  <label className="block font-bold text-[#1B4332] mb-1">متن خاطره یا داستان شما:</label>
                  <textarea required rows={4} placeholder="مشاهدات و خاطرات معنوی خود را بنویسید..." className="w-full p-2.5 border border-[#E5E1D8] rounded-xl focus:ring-2 focus:ring-[#1B4332] outline-none"></textarea>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button 
                    type="button"
                    onClick={() => setShowStorySubmissionModal(false)}
                    className="px-4 py-2 rounded-xl text-[#2D3436] bg-[#F8F5F0] hover:bg-[#E5E1D8]"
                  >
                    انصراف
                  </button>
                  <button 
                    type="submit"
                    className="bg-[#1B4332] text-[#C5A059] font-bold px-6 py-2 rounded-xl shadow"
                  >
                    ارسال روایت
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 4: Photo Gallery Lightbox                            */}
      {/* ========================================================= */}
      {selectedAlbum && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full flex flex-col items-center space-y-4 text-white">
            <button 
              onClick={() => setSelectedAlbum(null)}
              className="absolute -top-10 right-0 p-2 text-white hover:text-[#C5A059]"
            >
              <X className="w-8 h-8" />
            </button>

            <h3 className="font-bold text-base sm:text-lg text-[#C5A059] text-center">
              {selectedAlbum.title} ({activePhotoIndex + 1} از {selectedAlbum.images.length})
            </h3>

            <div className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center bg-black/50 rounded-2xl overflow-hidden border border-white/20">
              <img 
                src={selectedAlbum.images[activePhotoIndex]} 
                alt="نمای تصویر" 
                className="max-w-full max-h-full object-contain"
              />

              {selectedAlbum.images.length > 1 && (
                <>
                  <button 
                    onClick={() => setActivePhotoIndex(prev => (prev > 0 ? prev - 1 : selectedAlbum.images.length - 1))}
                    className="absolute right-4 p-3 rounded-full bg-black/60 text-white hover:bg-[#1B4332] transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setActivePhotoIndex(prev => (prev < selectedAlbum.images.length - 1 ? prev + 1 : 0))}
                    className="absolute left-4 p-3 rounded-full bg-black/60 text-white hover:bg-[#1B4332] transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 5: Video Player Modal                               */}
      {/* ========================================================= */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1B4332] rounded-3xl max-w-3xl w-full p-6 text-white space-y-4 shadow-2xl border-2 border-[#C5A059]">
            <div className="flex justify-between items-center border-b border-white/20 pb-3">
              <span className="text-xs font-bold text-[#C5A059]">{selectedVideo.category}</span>
              <button onClick={() => setSelectedVideo(null)} className="p-1 hover:bg-white/10 rounded-full">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <h3 className="font-bold text-base sm:text-lg text-[#C5A059]">{selectedVideo.title}</h3>

            <div className="relative h-64 sm:h-96 bg-black rounded-2xl overflow-hidden flex items-center justify-center border border-white/20">
              <img src={selectedVideo.thumbnail} alt="ویدئو" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-20 h-20 rounded-full bg-[#C5A059] text-[#1B4332] flex items-center justify-center shadow-2xl animate-pulse">
                  <Play className="w-10 h-10 fill-[#1B4332] mr-1" />
                </div>
                <span className="text-xs text-white/90 bg-black/70 px-3 py-1 rounded-full border border-white/20">
                  در حال پخش گزارش (زمان: {selectedVideo.duration})
                </span>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed">
              {selectedVideo.description}
            </p>

            <div className="pt-2 flex justify-end">
              <button onClick={() => setSelectedVideo(null)} className="bg-[#C5A059] text-[#1B4332] font-bold px-6 py-2 rounded-xl text-xs">
                بستن پخش‌کننده
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
