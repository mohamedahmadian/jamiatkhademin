import React, { useState } from 'react';
import { PageType, ServicesSubTab, MediaSubTab } from '../../types';
import { SOCIETY_INFO, NEWS_ITEMS } from '../../data/mockData';
import { InteractiveMap } from '../common/InteractiveMap';
import { PilgrimStoriesSection } from './PilgrimStoriesSection';
import { PilgrimGuideHubSection } from './PilgrimGuideHubSection';
import { 
  UserCheck, 
  Users, 
  ArrowLeft, 
  ShieldCheck,
  Search,
  CheckCircle2,
  Tent,
  Building2,
  CreditCard,
  Copy,
  Check,
  Droplets,
  Utensils,
  Home as HomeIcon,
  Stethoscope,
  Heart,
  ChevronLeft
} from 'lucide-react';

interface BentoStandardHomeProps {
  setCurrentPage: (page: PageType) => void;
  onNavigateService: (tab: ServicesSubTab) => void;
  onNavigateMedia: (tab: MediaSubTab) => void;
  onSelectNews: (newsId: string) => void;
}

export const BentoStandardHome: React.FC<BentoStandardHomeProps> = ({
  setCurrentPage,
  onNavigateService,
  onNavigateMedia,
  onSelectNews,
}) => {
  // Service Portal Inquiry State
  const [trackingCode, setTrackingCode] = useState('');
  const [trackingResult, setTrackingResult] = useState<string | null>(null);

  // Nazar & Payment States
  const [selectedNazarTitle, setSelectedNazarTitle] = useState('نذر تامین آب و آشامیدنی');
  const [nazarAmount, setNazarAmount] = useState<number>(100000);
  const [customAmountInput, setCustomAmountInput] = useState('');
  const [donorName, setDonorName] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [copiedBankKey, setCopiedBankKey] = useState<string | null>(null);

  const nazarOptions = [
    { title: 'نذر تامین آب و آشامیدنی', icon: <Droplets className="w-4 h-4 text-sky-600" /> },
    { title: 'نذر اسکان و پتو', icon: <HomeIcon className="w-4 h-4 text-emerald-600" /> },
    { title: 'نذر اطعام و غذای گرم', icon: <Utensils className="w-4 h-4 text-amber-600" /> },
    { title: 'نذر بهداشت و درمان', icon: <Stethoscope className="w-4 h-4 text-rose-600" /> },
    { title: 'نذر خادمی و عمومی', icon: <Heart className="w-4 h-4 text-purple-600" /> },
  ];

  const presetAmounts = [50000, 100000, 500000, 1000000];

  const bankAccounts = [
    {
      bank: 'بانک ملی ایران',
      accountHolder: 'جمعیت خدمتگزاران زائرین پیاده حضرت رضا (ع)',
      cardNumber: '۶۰۳۷-۹۹۱۸-۹۹۹۹-۸۸۸۸',
      rawCard: '6037991899998888',
      iban: 'IR120170000000010020030040',
      accountNo: '۰۱۰۵۵۵۵۵۵۵۰۰۱',
      color: 'from-[#1B4332] to-[#2D5A46]'
    },
    {
      bank: 'بانک صادرات ایران',
      accountHolder: 'جمعیت خدمتگزاران زائرین پیاده حضرت رضا (ع)',
      cardNumber: '۶۰۳۷-۶۹۱۹-۰۰۰۰-۷۷۷۷',
      rawCard: '6037691900007777',
      iban: 'IR880190000000007777777777',
      accountNo: '۰۲۰۳۳۳۳۳۳۳۰۰۲',
      color: 'from-[#2C3E50] to-[#34495E]'
    },
    {
      bank: 'بانک تجارت',
      accountHolder: 'جمعیت خدمتگزاران زائرین پیاده حضرت رضا (ع)',
      cardNumber: '۵۸۵۹-۸۳۷۰-۰۰۰۰-۹۹۹۹',
      rawCard: '5859837000009999',
      iban: 'IR560180000000009999999999',
      accountNo: '۱۰۴۴۴۴۴۴۴۴',
      color: 'from-[#1A365D] to-[#2B6CB0]'
    },
    {
      bank: 'بانک سپه',
      accountHolder: 'جمعیت خدمتگزاران زائرین پیاده حضرت رضا (ع)',
      cardNumber: '۵۸۹۲-۱۰۱۲-۰۰۰۰-۵۵۵۵',
      rawCard: '5892101200005555',
      iban: 'IR340150000000005555555555',
      accountNo: '۵۵۰۱۱۲۲۳۳۴۴',
      color: 'from-[#742A2A] to-[#9B2C2C]'
    }
  ];

  const handleInquirySearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode.trim()) return;
    setTrackingResult(`پرونده درخواست با شناسه ${trackingCode} در سامانه زائرین ۸ تایید گردید.`);
  };

  const handleCopyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBankKey(key);
    setTimeout(() => setCopiedBankKey(null), 2500);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentSuccess(true);
    setTimeout(() => setPaymentSuccess(false), 6000);
  };

  const finalAmount = customAmountInput ? parseInt(customAmountInput, 10) || 0 : nazarAmount;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* 1. Top Bento Grid Row */}
      <div className="grid grid-cols-12 gap-5">
        
        {/* Bento Hero Card - 7 Cols */}
        <section className="col-span-12 lg:col-span-7 bg-white rounded-2xl border border-[#E5E1D8] relative overflow-hidden shadow-sm flex flex-col justify-between p-6 sm:p-8">
          <div className="absolute inset-0 bg-emerald-pattern opacity-10 pointer-events-none"></div>
          
          <div className="relative z-10 space-y-4">
            <div>
              <span className="inline-block px-3 py-1 bg-[#1B4332] text-white text-xs font-bold rounded-full mb-3 shadow-sm">
                ۲۶ سال خدمت خالصانه
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1B4332] leading-tight font-quran">
                میزبانی از زائران پیاده خورشید طوس
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[#2D3436]/80 leading-relaxed max-w-2xl">
              جمعیت خدمتگزاران با هدف تکریم زائرین، خدمات اسکان رایگان، تغذیه، ایستگاه‌های جاده‌ای و بیمه حوادث را با ۳۰ هزار خادم داوطلب در طول مسیرهای منتهی به مشهد مقدس فراهم می‌آورد.
            </p>
          </div>

          <div className="relative z-10 pt-6 mt-4 border-t border-[#E5E1D8]/60 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => { setCurrentPage('services'); onNavigateService('zaer-register'); }}
                className="bg-[#1B4332] hover:bg-[#143326] text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow transition-all flex items-center gap-2 active:scale-95"
              >
                <UserCheck className="w-4 h-4 text-[#C5A059]" />
                <span>ثبت‌نام زائر پیاده</span>
              </button>

              <button
                onClick={() => { setCurrentPage('services'); onNavigateService('khadim-register'); }}
                className="bg-[#F8F5F0] hover:bg-[#e2d7c5] text-[#1B4332] font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-[#E5E1D8] transition-all flex items-center gap-2 active:scale-95"
              >
                <Users className="w-4 h-4 text-[#C5A059]" />
                <span>ثبت‌نام خادم افتخاری</span>
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#1B4332] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>پوشش بیمه کامل حوادث</span>
            </div>
          </div>
        </section>

        {/* Bento Service Portal Card with Top Prominent Tracking Inquiry Box & Options Below - 5 Cols */}
        <section className="col-span-12 lg:col-span-5 bg-[#1B4332] text-white rounded-2xl p-6 flex flex-col justify-between shadow-lg shadow-[#1B4332]/20 border border-[#1B4332] space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/15 pb-3">
              <h3 className="text-lg font-bold text-[#C5A059] font-quran flex items-center gap-2">
                <span>میز خدمت زائرین و خادمان</span>
              </h3>
              <span className="text-[10px] bg-[#C5A059]/20 text-[#C5A059] px-2.5 py-1 rounded-full border border-[#C5A059]/40 font-bold">
                سامانه الکترونیکی
              </span>
            </div>

            {/* TOP PROMINENT HALF-KADR (کادر نیم‌خط برجسته استعلام پرونده) */}
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-[#C5A059]/60 space-y-2 shadow-inner">
              <label className="block text-xs font-bold text-[#C5A059]">
                استعلام و پیگیری پرونده با کد رهگیری / کد ملی:
              </label>

              <form onSubmit={handleInquirySearch} className="flex gap-2">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="مثال: ZR-1403-9821 یا کد ملی..."
                    value={trackingCode}
                    onChange={(e) => setTrackingCode(e.target.value)}
                    className="w-full bg-white text-[#1B4332] placeholder-gray-400 pr-9 pl-3 py-2 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                  <Search className="w-4 h-4 text-[#1B4332]/60 absolute right-2.5 top-2.5" />
                </div>
                <button
                  type="submit"
                  className="bg-[#C5A059] hover:bg-[#b58f48] text-[#1B4332] font-black text-xs px-4 py-2 rounded-xl transition-all shadow shrink-0"
                >
                  استعلام
                </button>
              </form>

              {trackingResult && (
                <div className="p-2.5 bg-emerald-900/90 border border-emerald-400 text-white rounded-lg text-xs flex items-center gap-2 animate-in fade-in mt-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span className="text-[11px] leading-snug">{trackingResult}</span>
                </div>
              )}
            </div>

            {/* SERVICE OPTIONS BELOW (گزینه‌های میز خدمت به پایین) */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] text-white/70 block font-bold">درگاه‌های ثبت‌نام و خدمات سریع:</span>
              
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => { setCurrentPage('services'); onNavigateService('zaer-register'); }}
                  className="py-2.5 px-3 bg-white text-[#1B4332] hover:bg-[#F8F5F0] font-bold text-xs rounded-xl flex items-center justify-between shadow-sm transition-all"
                >
                  <span className="flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-[#1B4332]" />
                    <span>ثبت زائر پیاده</span>
                  </span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <button 
                  onClick={() => { setCurrentPage('services'); onNavigateService('khadim-register'); }}
                  className="py-2.5 px-3 bg-[#C5A059] text-[#1B4332] hover:bg-[#b58f48] font-bold text-xs rounded-xl flex items-center justify-between shadow-sm transition-all"
                >
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#1B4332]" />
                    <span>خادم افتخاری</span>
                  </span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <button 
                  onClick={() => { setCurrentPage('services'); onNavigateService('mokeb-register'); }}
                  className="py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs rounded-xl flex items-center justify-between transition-all"
                >
                  <span className="flex items-center gap-1.5">
                    <Tent className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>مجوز موکب</span>
                  </span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <button 
                  onClick={() => { setCurrentPage('services'); onNavigateService('mokebs-list'); }}
                  className="py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs rounded-xl flex items-center justify-between transition-all"
                >
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>فهرست مواکب</span>
                  </span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[11px] text-[#C5A059]">
            <span>پشتیبانی: {SOCIETY_INFO.hotline}</span>
            <span>سامانه پیامکی: ۳۰۰۰۸۸۸۸</span>
          </div>
        </section>

      </div>

      {/* 2. Middle Bento Grid Row (Stats & News) */}
      <div className="grid grid-cols-12 gap-5">
        
        {/* Bento Stats Card - 4 Cols */}
        <section className="col-span-12 md:col-span-4 bg-white rounded-2xl border border-[#E5E1D8] p-5 flex flex-col justify-between shadow-sm">
          <div className="mb-3 border-b border-[#E5E1D8]/60 pb-2 flex justify-between items-center">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              آمار خدمت‌رسانی ستاد
            </h3>
            <span className="text-[10px] bg-[#1B4332] text-white px-2 py-0.5 rounded font-bold">امسال</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 bg-[#F8F5F0] rounded-xl text-center border border-[#E5E1D8]/60">
              <div className="text-2xl font-black text-[#1B4332]">۳۸۵</div>
              <div className="text-[10px] font-bold text-gray-600 mt-0.5">ایستگاه صلواتی فعال</div>
            </div>

            <div className="p-3.5 bg-[#F8F5F0] rounded-xl text-center border border-[#E5E1D8]/60">
              <div className="text-2xl font-black text-[#1B4332]">۳۰,۰۰۰</div>
              <div className="text-[10px] font-bold text-gray-600 mt-0.5">خادم داوطلب</div>
            </div>

            <div className="p-3.5 bg-[#F8F5F0] rounded-xl text-center border border-[#E5E1D8]/60">
              <div className="text-2xl font-black text-[#1B4332]">۱۳۰هزار</div>
              <div className="text-[10px] font-bold text-gray-600 mt-0.5">ظرفیت اسکان شبانه</div>
            </div>

            <div className="p-3.5 bg-[#F8F5F0] rounded-xl text-center border border-[#E5E1D8]/60">
              <div className="text-2xl font-black text-[#1B4332]">۵۰۰هزار</div>
              <div className="text-[10px] font-bold text-gray-600 mt-0.5">پیش‌بینی زائران</div>
            </div>
          </div>
        </section>

        {/* Bento Latest News Card - 8 Cols */}
        <section className="col-span-12 md:col-span-8 bg-white rounded-2xl border border-[#E5E1D8] p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#E5E1D8]/60">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                آخرین اخبار و اطلاعیه‌های رسمی ستاد
              </h3>
              <button 
                onClick={() => { setCurrentPage('media'); onNavigateMedia('news-announcements'); }}
                className="text-xs text-[#1B4332] hover:text-[#C5A059] font-bold transition-colors"
              >
                مشاهده تمام اخبار ←
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {NEWS_ITEMS.slice(0, 4).map((item) => (
                <div 
                  key={item.id}
                  onClick={() => {
                    setCurrentPage('media');
                    onNavigateMedia('news-announcements');
                    onSelectNews(item.id);
                  }}
                  className="flex items-start gap-3 p-3 bg-[#F8F5F0] rounded-xl border border-[#E5E1D8]/80 cursor-pointer hover:border-[#C5A059] transition-all group"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold bg-[#1B4332] text-[#C5A059] px-2 py-0.5 rounded inline-block">
                      {item.category}
                    </span>
                    <h4 className="text-xs font-bold text-[#1B4332] group-hover:text-[#C5A059] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-gray-500">
                      {item.date} - {item.source}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* 3. STORIES & MEMORIES SECTION (روایت خدمت، دل‌نوشته‌ها و قصه‌های خادمان و زائران) */}
      <PilgrimStoriesSection
        setCurrentPage={setCurrentPage}
        onNavigateMedia={onNavigateMedia}
      />

      {/* 4. PILGRIM GUIDE HUB SECTION (مرجع اختصاصی زائر: توصیه‌های سفر، مسیرها، آداب زیارت و حمل و نقل مشهد) */}
      <PilgrimGuideHubSection
        setCurrentPage={setCurrentPage}
        onNavigateService={onNavigateService}
      />

      {/* 5. NAZAR TITLE SELECTION, QUICK PAYMENT & OFFICIAL BANK ACCOUNTS */}
      <section className="bg-white rounded-2xl border border-[#E5E1D8] p-6 sm:p-8 shadow-sm space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E1D8]/80 pb-4 gap-2">
          <div>
            <span className="text-xs font-bold text-[#C5A059] bg-[#1B4332] px-3 py-1 rounded-full inline-block mb-1">
              مشارکت و نذورات آنلاین
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1B4332] font-quran">
              انتخاب عنوان نذر، پرداخت سریع و شماره حساب‌های رسمی
            </h2>
          </div>

          <button
            onClick={() => setCurrentPage('contributions')}
            className="text-xs font-bold text-[#1B4332] hover:text-[#C5A059] flex items-center gap-1 transition-colors"
          >
            <span>مشاهده پویش‌های کامل نذر</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: Nazar Title Selection & Payment Widget - 7 Cols */}
          <div className="lg:col-span-7 bg-[#F8F5F0] rounded-2xl p-5 sm:p-6 border border-[#E5E1D8] space-y-6">
            
            {/* Step 1: Select Nazar Title */}
            <div className="space-y-3">
              <label className="block text-xs font-extrabold text-[#1B4332]">
                ۱. عنوان نذر خود را انتخاب کنید:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {nazarOptions.map((opt) => {
                  const isSelected = selectedNazarTitle === opt.title;
                  return (
                    <button
                      key={opt.title}
                      type="button"
                      onClick={() => setSelectedNazarTitle(opt.title)}
                      className={`p-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all text-right border ${
                        isSelected
                          ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-sm'
                          : 'bg-white text-[#2D3436] border-[#E5E1D8] hover:bg-[#E5E1D8]/60'
                      }`}
                    >
                      <div className="p-1.5 bg-[#F8F5F0] rounded-lg shrink-0">
                        {opt.icon}
                      </div>
                      <span className="line-clamp-1">{opt.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select or Enter Amount */}
            <div className="space-y-3">
              <label className="block text-xs font-extrabold text-[#1B4332]">
                ۲. مبلغ نذر (تومان):
              </label>

              <div className="flex flex-wrap gap-2">
                {presetAmounts.map((amt) => {
                  const isSelected = !customAmountInput && nazarAmount === amt;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => { setNazarAmount(amt); setCustomAmountInput(''); }}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                        isSelected
                          ? 'bg-[#C5A059] text-[#1B4332] border-[#C5A059] shadow-sm'
                          : 'bg-white text-[#2D3436] border-[#E5E1D8] hover:bg-[#E5E1D8]/60'
                      }`}
                    >
                      {amt.toLocaleString('fa-IR')} تومان
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount Input */}
              <div className="pt-1">
                <input
                  type="number"
                  placeholder="یا مبلغ دلخواه به تومان وارد کنید..."
                  value={customAmountInput}
                  onChange={(e) => setCustomAmountInput(e.target.value)}
                  className="w-full p-3 bg-white border border-[#E5E1D8] rounded-xl text-xs text-[#1B4332] focus:ring-2 focus:ring-[#1B4332] outline-none font-bold"
                />
              </div>
            </div>

            {/* Step 3: Donor Name (Optional) & Submit Form */}
            {paymentSuccess ? (
              <div className="bg-emerald-800 text-white p-5 rounded-2xl text-center space-y-2 border border-emerald-600 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-[#C5A059] mx-auto animate-bounce" />
                <h4 className="font-extrabold text-sm">پرداخت نذر با موفقیت انجام شد!</h4>
                <p className="text-xs text-white/90">
                  عنوان نذر: «{selectedNazarTitle}» به مبلغ {finalAmount.toLocaleString('fa-IR')} تومان. کد پیگیری: NZ-1403-{Math.floor(100000 + Math.random() * 900000)}
                </p>
                <p className="text-[11px] text-[#C5A059] font-bold">زیارتتان قبول و اجرتان با حضرت ولی‌عصر (عج)</p>
              </div>
            ) : (
              <form onSubmit={handlePaymentSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی نذرکننده (اختیاری جهت دعا در موکب)"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full p-3 bg-white border border-[#E5E1D8] rounded-xl text-xs text-[#1B4332] focus:ring-2 focus:ring-[#1B4332] outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1B4332] hover:bg-[#112d21] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <CreditCard className="w-4 h-4 text-[#C5A059]" />
                  <span>پرداخت سریع آنلاین {finalAmount.toLocaleString('fa-IR')} تومان</span>
                </button>
              </form>
            )}

          </div>

          {/* RIGHT: Official Bank Accounts Cards (شماره حساب‌های رسمی جمعیت) - 5 Cols */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-[#1B4332]">
              <Building2 className="w-5 h-5 text-[#C5A059]" />
              <h3 className="font-bold text-base font-quran">شماره حساب‌های رسمی و قانونی جمعیت</h3>
            </div>
            <p className="text-xs text-[#2D3436]/70 leading-relaxed">
              جهت واریز مستقیم از طریق کارت به کارت، پایا یا ساتنا به نام «جمعیت خدمتگزاران زائرین پیاده حضرت رضا (ع)»:
            </p>

            <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1 no-scrollbar">
              {bankAccounts.map((acc, index) => {
                const isCardCopied = copiedBankKey === `card-${index}`;
                const isIbanCopied = copiedBankKey === `iban-${index}`;

                return (
                  <div 
                    key={acc.bank}
                    className={`bg-gradient-to-r ${acc.color} text-white p-4 rounded-2xl shadow-sm border border-white/10 space-y-2`}
                  >
                    <div className="flex justify-between items-center text-xs">
                      <strong className="font-extrabold text-[#C5A059]">{acc.bank}</strong>
                      <span className="text-[10px] text-white/80 bg-white/10 px-2 py-0.5 rounded">رسمی جمعیت</span>
                    </div>

                    <div className="font-mono text-xs sm:text-sm font-bold tracking-widest text-center dir-ltr py-1 bg-black/20 rounded-lg">
                      {acc.cardNumber}
                    </div>

                    <div className="flex justify-between items-center pt-1 text-[11px] border-t border-white/10">
                      <button
                        onClick={() => handleCopyText(acc.rawCard, `card-${index}`)}
                        className="bg-white/15 hover:bg-white/25 px-2.5 py-1 rounded-lg text-white font-bold flex items-center gap-1 transition-colors"
                      >
                        {isCardCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-[#C5A059]" />}
                        <span>{isCardCopied ? 'کارت کپی شد' : 'کپی شماره کارت'}</span>
                      </button>

                      <button
                        onClick={() => handleCopyText(acc.iban, `iban-${index}`)}
                        className="bg-white/15 hover:bg-white/25 px-2.5 py-1 rounded-lg text-[#C5A059] hover:text-white font-bold flex items-center gap-1 transition-colors"
                      >
                        {isIbanCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-white" />}
                        <span>{isIbanCopied ? 'شبا کپی شد' : 'کپی شبا'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>تمامی حساب‌های فوق متعلق به ستاد مرکزی جمعیت خدمتگزاران زائرین پیاده می‌باشد.</span>
            </div>
          </div>

        </div>

      </section>

      {/* 4. Interactive Map Bento Card */}
      <section className="bg-white rounded-2xl border border-[#E5E1D8] p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#E5E1D8]/60 pb-3">
          <div>
            <h2 className="text-xl font-bold text-[#1B4332] font-quran">
              نقشه آنلاین مواکب، ایستگاه‌های صلواتی و مسیرهای ورودی
            </h2>
            <p className="text-xs text-gray-500">
              موقعیت جغرافیایی ۳۸۵ ایستگاه صلواتی و پست‌های امدادی جاده‌ای روی نقشه تعاملی
            </p>
          </div>
          <button 
            onClick={() => { setCurrentPage('services'); onNavigateService('map'); }}
            className="bg-[#F8F5F0] text-[#1B4332] border border-[#E5E1D8] font-bold text-xs px-4 py-2 rounded-xl hover:bg-[#E5E1D8] transition-colors"
          >
            صفحه کامل نقشه
          </button>
        </div>
        <InteractiveMap />
      </section>

    </div>
  );
};
