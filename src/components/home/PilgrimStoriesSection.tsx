import React, { useState } from 'react';
import { PageType, MediaSubTab } from '../../types';
import { REVAYAT_STORIES } from '../../data/mockData';
import { 
  Heart, 
  Volume2, 
  Quote, 
  Sparkles, 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  BookOpen, 
  UserCheck, 
  MessageSquare,
  Calendar,
  ChevronLeft
} from 'lucide-react';

interface PilgrimStoriesSectionProps {
  setCurrentPage: (page: PageType) => void;
  onNavigateMedia: (tab: MediaSubTab) => void;
}

export const PilgrimStoriesSection: React.FC<PilgrimStoriesSectionProps> = ({
  setCurrentPage,
  onNavigateMedia,
}) => {
  const [likes, setLikes] = useState<Record<string, number>>({
    'story-1': 1420,
    'story-2': 980,
    'story-3': 1150
  });
  const [likedStories, setLikedStories] = useState<Record<string, boolean>>({});
  
  // Submit story modal/drawer state
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [storyForm, setStoryForm] = useState({ name: '', role: 'زائر پیاده', text: '', city: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedStories[id]) {
      setLikes(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setLikedStories(prev => ({ ...prev, [id]: false }));
    } else {
      setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      setLikedStories(prev => ({ ...prev, [id]: true }));
    }
  };

  const handleStorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storyForm.text.trim()) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowSubmissionForm(false);
      setStoryForm({ name: '', role: 'زائر پیاده', text: '', city: '' });
    }, 3500);
  };

  return (
    <section className="bg-gradient-to-br from-[#FFFDF9] via-white to-[#F8F5F0] rounded-3xl border border-[#E5E1D8] p-6 sm:p-8 shadow-sm space-y-8 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E1D8]/80 pb-5 gap-4 relative z-10">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 bg-[#1B4332] text-[#C5A059] text-xs font-bold px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>روایت خدمت و دل‌نوشته‌ها</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1B4332] font-quran leading-snug">
            قصه‌های خواندنی خادمان و خاطرات زائران پیاده
          </h2>
          <p className="text-xs text-[#2D3436]/75">
            تجربه‌های واقعی از صفا، معنویت، فداکاری خادمان و عنایات حضرت رضا (ع) در جاده‌های عشق
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSubmissionForm(!showSubmissionForm)}
            className="bg-[#C5A059] hover:bg-[#b58f48] text-[#1B4332] font-black text-xs px-4 py-2.5 rounded-xl transition-all shadow flex items-center gap-1.5 active:scale-95 shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
            <span>ثبت خاطره شما</span>
          </button>

          <button
            onClick={() => {
              setCurrentPage('media');
              onNavigateMedia('revayat-khedmat');
            }}
            className="bg-[#F8F5F0] hover:bg-[#E5E1D8] text-[#1B4332] border border-[#E5E1D8] font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1 shrink-0"
          >
            <span>همه روایت‌ها</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Story Submission Modal / Drawer inline expansion */}
      {showSubmissionForm && (
        <div className="bg-[#1B4332] text-white p-6 rounded-2xl border-2 border-[#C5A059] shadow-xl space-y-4 animate-in fade-in duration-300 relative z-10">
          <div className="flex justify-between items-center border-b border-white/15 pb-3">
            <h3 className="font-bold text-sm text-[#C5A059] font-quran flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#C5A059]" />
              <span>ارسال خاطره، دل‌نوشته یا قصه خادمی</span>
            </h3>
            <button 
              onClick={() => setShowSubmissionForm(false)}
              className="text-xs text-white/60 hover:text-white"
            >
              بستن ×
            </button>
          </div>

          {formSubmitted ? (
            <div className="bg-emerald-900/90 border border-emerald-400 p-4 rounded-xl text-center space-y-2 text-xs animate-in zoom-in-95">
              <CheckCircle2 className="w-8 h-8 text-[#C5A059] mx-auto animate-bounce" />
              <strong className="font-bold text-sm block">خاطره شما با موفقیت ثبت گردید</strong>
              <p className="text-white/85">پس از بررسی توسط تیم روابط عمومی، در بخش «روایت خدمت» منتشر خواهد شد.</p>
            </div>
          ) : (
            <form onSubmit={handleStorySubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  placeholder="نام و نام خانوادگی..."
                  value={storyForm.name}
                  onChange={(e) => setStoryForm({ ...storyForm, name: e.target.value })}
                  className="bg-white text-[#1B4332] p-2.5 rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-[#C5A059]"
                />

                <select
                  value={storyForm.role}
                  onChange={(e) => setStoryForm({ ...storyForm, role: e.target.value })}
                  className="bg-white text-[#1B4332] p-2.5 rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-[#C5A059]"
                >
                  <option value="زائر پیاده">زائر پیاده</option>
                  <option value="خادم افتخاری">خادم افتخاری</option>
                  <option value="موکب‌دار">مسئول موکب / ایستگاه</option>
                  <option value="پزشک/پرستار">کادر بهداشت و درمان</option>
                </select>

                <input
                  type="text"
                  placeholder="شهر مبدأ یا محل خادمی (مثلاً نیشابور)"
                  value={storyForm.city}
                  onChange={(e) => setStoryForm({ ...storyForm, city: e.target.value })}
                  className="bg-white text-[#1B4332] p-2.5 rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <textarea
                required
                rows={3}
                placeholder="خاطره، عنایت معنوی یا تجربه شیرین خود از مسیر پیاده‌روی یا خادمی زائران امام رضا (ع) را بنویسید..."
                value={storyForm.text}
                onChange={(e) => setStoryForm({ ...storyForm, text: e.target.value })}
                className="w-full bg-white text-[#1B4332] p-3 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#C5A059]"
              ></textarea>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowSubmissionForm(false)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-xs text-white rounded-xl"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#C5A059] hover:bg-[#b58f48] text-[#1B4332] font-black text-xs rounded-xl shadow"
                >
                  ثبت و ارسال جهت انتشار
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {REVAYAT_STORIES.slice(0, 3).map((story) => {
          const isLiked = likedStories[story.id];
          const count = likes[story.id] || story.likesCount || 100;

          return (
            <div
              key={story.id}
              onClick={() => {
                setCurrentPage('media');
                onNavigateMedia('revayat-khedmat');
              }}
              className="bg-white rounded-2xl border border-[#E5E1D8] overflow-hidden shadow-sm hover:shadow-md hover:border-[#C5A059] transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Image Header with Badge & Quote Icon */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Quote Overlay Badge */}
                  <div className="absolute top-3 right-3 bg-[#1B4332]/90 backdrop-blur-md text-[#C5A059] p-1.5 rounded-lg border border-[#C5A059]/40">
                    <Quote className="w-4 h-4" />
                  </div>

                  {story.audioDuration && (
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded-full text-[10px] font-mono flex items-center gap-1 border border-white/20">
                      <Volume2 className="w-3 h-3 text-[#C5A059]" />
                      <span>{story.audioDuration} پادکست</span>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 left-3 text-white">
                    <span className="text-[10px] font-bold text-[#C5A059] bg-[#1B4332]/90 px-2 py-0.5 rounded">
                      {story.narratorRole}
                    </span>
                    <h3 className="text-xs font-black text-white mt-1 line-clamp-1 group-hover:text-[#C5A059] transition-colors">
                      {story.narratorName}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4 space-y-2.5">
                  <h4 className="text-sm font-extrabold text-[#1B4332] leading-snug font-quran line-clamp-2">
                    {story.title}
                  </h4>
                  <p className="text-xs text-[#2D3436]/80 leading-relaxed line-clamp-3 bg-[#F8F5F0] p-3 rounded-xl border border-[#E5E1D8]/60 italic">
                    «{story.summary}»
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-4 py-3 border-t border-[#E5E1D8]/60 bg-[#FFFDF9] flex justify-between items-center text-xs">
                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{story.date}</span>
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => handleLike(story.id, e)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all border ${
                      isLiked
                        ? 'bg-rose-50 text-rose-600 border-rose-200'
                        : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                    <span>{count.toLocaleString('fa-IR')}</span>
                  </button>

                  <span className="text-xs font-bold text-[#1B4332] group-hover:text-[#C5A059] flex items-center gap-0.5">
                    <span>مطالعه</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
