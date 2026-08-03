import React, { useState } from 'react';
import { PageType, ServicesSubTab, MediaSubTab } from '../../types';
import { SOCIETY_INFO, NEWS_ITEMS, REVAYAT_STORIES } from '../../data/mockData';
import { InteractiveMap } from '../common/InteractiveMap';
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
  ChevronLeft,
  Sparkles,
  Radio,
  Quote,
  Eye,
  Phone,
  Calendar,
  Layers
} from 'lucide-react';

interface CustomCombinedHomeProps {
  setCurrentPage: (page: PageType) => void;
  onNavigateService: (tab: ServicesSubTab) => void;
  onNavigateMedia: (tab: MediaSubTab) => void;
  onSelectNews: (newsId: string) => void;
}

export const CustomCombinedHome: React.FC<CustomCombinedHomeProps> = ({
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
      color: 'from-[#1B4332] to-[#2D5A46]'
    },
    {
      bank: 'بانک صادرات ایران',
      accountHolder: 'جمعیت خدمتگزاران زائرین پیاده حضرت رضا (ع)',
      cardNumber: '۶۰۳۷-۶۹۱۹-۰۰۰۰-۷۷۷۷',
      rawCard: '6037691900007777',
      iban: 'IR880190000000007777777777',
      color: 'from-[#2C3E50] to-[#34495E]'
    },
    {
      bank: 'بانک تجارت',
      accountHolder: 'جمعیت خدمتگزاران زائرین پیاده حضرت رضا (ع)',
      cardNumber: '۵۸۵۹-۸۳۷۰-۰۰۰۰-۹۹۹۹',
      rawCard: '5859837000009999',
      iban: 'IR560180000000009999999999',
      color: 'from-[#1A365D] to-[#2B6CB0]'
    },
    {
      bank: 'بانک سپه',
      accountHolder: 'جمعیت خدمتگزاران زائرین پیاده حضرت رضا (ع)',
      cardNumber: '۵۸۹۲-۱۰۱۲-۰۰۰۰-۵۵۵۵',
      rawCard: '5892101200005555',
      iban: 'IR340150000000005555555555',
      color: 'from-[#742A2A] to-[#9B2C2C]'
    }
  ];

  const handleInquirySearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode.trim()) return;
    setTrackingResult(`پرونده شما به کد رهگیری ${trackingCode} در سامانه تایید شد.`);
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
    <div className="space-y-10 animate-in fade-in duration-200">
      
      {/* 1. Custom Layout Badge & Header Banner */}
      <section className="bg-gradient-to-r from-[#1B4332] via-[#143326] to-[#2D5A46] text-white rounded-3xl p-6 sm:p-10 border-2 border-[#C5A059] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A059] text-[#1B4332] text-xs font-black px-3.5 py-1 rounded-full shadow">
              <Sparkles className="w-3.5 h-3.5" />
              <span>طرح سفارشی ترکیبی (چیدمان ویژه)</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-quran leading-tight">
              پورتال جامع زائرین پیاده، استعلام پرونده و نذورات آنلاین
            </h1>

            <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
              این چیدمان شامل تمامی قابلیت‌های کلیدی: استعلام کدرهگیری پرونده، گزینه‌های ثبت‌نامی، سامانه پرداخت سریع نذورات و شماره حساب‌های رسمی جمعیت می‌باشد.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={() => { setCurrentPage('services'); onNavigateService('zaer-register'); }}
              className="bg-[#C5A059] hover:bg-[#b58f48] text-[#1B4332] font-black px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <UserCheck className="w-4 h-4" />
              <span>ثبت‌نام زائر پیاده</span>
            </button>

            <button
              onClick={() => { setCurrentPage('services'); onNavigateService('khadim-register'); }}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3 rounded-2xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4 text-[#C5A059]" />
              <span>ثبت‌نام خادم افتخاری</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Service Portal Section with Top Prominent Inquiry Kadr */}
      <section className="bg-white rounded-3xl border border-[#E5E1D8] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#E5E1D8] pb-4 gap-3">
          <div>
            <span className="text-xs font-bold text-[#C5A059] bg-[#1B4332] px-3 py-1 rounded-full inline-block mb-1">
              میز خدمت یکپارچه
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1B4332] font-quran">
              استعلام وضعیت پرونده و درگاه‌های خدمت‌رسانی
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#1B4332] bg-[#F8F5F0] px-3 py-1.5 rounded-xl border border-[#E5E1D8]">
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span>تلفن پشتیبانی: {SOCIETY_INFO.hotline}</span>
          </div>
        </div>

        {/* Top Prominent Tracking Kadr (نیم‌کادر برجسته استعلام در بالا) */}
        <div className="bg-[#1B4332] text-white p-6 rounded-2xl border-2 border-[#C5A059] shadow-lg space-y-3">
          <div className="flex items-center gap-2 text-[#C5A059]">
            <Search className="w-5 h-5" />
            <h3 className="font-bold text-sm sm:text-base font-quran">
              استعلام پرونده با کد رهگیری یا کد ملی زائر / خادم
            </h3>
          </div>

          <form onSubmit={handleInquirySearch} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="کد رهگیری (مثلاً ZR-1403-9821) یا شماره کد ملی را وارد نمایید..."
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              className="w-full bg-white text-[#1B4332] placeholder-gray-400 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            />
            <button
              type="submit"
              className="bg-[#C5A059] hover:bg-[#b58f48] text-[#1B4332] font-black text-xs sm:text-sm px-8 py-3 rounded-xl transition-all shadow shrink-0 active:scale-95"
            >
              استعلام سریع پرونده
            </button>
          </form>

          {trackingResult && (
            <div className="p-3 bg-emerald-900/90 border border-emerald-400 text-white rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>{trackingResult}</span>
            </div>
          )}
        </div>

        {/* Service Options Below (گزینه‌های میز خدمت در پایین) */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-extrabold text-[#1B4332]">درگاه‌های خدمات ثبت‌نامی زائرین و خادمان:</h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              onClick={() => { setCurrentPage('services'); onNavigateService('zaer-register'); }}
              className="bg-[#F8F5F0] hover:bg-white p-5 rounded-2xl border border-[#E5E1D8] hover:border-[#1B4332] hover:shadow-md transition-all cursor-pointer group space-y-2"
            >
              <div className="w-10 h-10 bg-[#1B4332] text-[#C5A059] rounded-xl flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-sm text-[#1B4332] group-hover:text-[#C5A059] transition-colors">ثبت‌نام زائر پیاده</h5>
              <p className="text-[11px] text-[#2D3436]/70 leading-relaxed">ثبت فردی و کاروانی جهت دریافت کارت و اسکان</p>
            </div>

            <div 
              onClick={() => { setCurrentPage('services'); onNavigateService('khadim-register'); }}
              className="bg-[#F8F5F0] hover:bg-white p-5 rounded-2xl border border-[#E5E1D8] hover:border-[#1B4332] hover:shadow-md transition-all cursor-pointer group space-y-2"
            >
              <div className="w-10 h-10 bg-[#C5A059] text-[#1B4332] rounded-xl flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-sm text-[#1B4332] group-hover:text-[#C5A059] transition-colors">ثبت‌نام خادم افتخاری</h5>
              <p className="text-[11px] text-[#2D3436]/70 leading-relaxed">تکمیل فرم افتخاری در ۶ رسته خدماتی</p>
            </div>

            <div 
              onClick={() => { setCurrentPage('services'); onNavigateService('mokeb-register'); }}
              className="bg-[#F8F5F0] hover:bg-white p-5 rounded-2xl border border-[#E5E1D8] hover:border-[#1B4332] hover:shadow-md transition-all cursor-pointer group space-y-2"
            >
              <div className="w-10 h-10 bg-emerald-700 text-white rounded-xl flex items-center justify-center font-bold">
                <Tent className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-sm text-[#1B4332] group-hover:text-[#C5A059] transition-colors">درخواست مجوز موکب</h5>
              <p className="text-[11px] text-[#2D3436]/70 leading-relaxed">استقرار ایستگاه پذیرایی در محورهای ورودی</p>
            </div>

            <div 
              onClick={() => { setCurrentPage('services'); onNavigateService('mokebs-list'); }}
              className="bg-[#F8F5F0] hover:bg-white p-5 rounded-2xl border border-[#E5E1D8] hover:border-[#1B4332] hover:shadow-md transition-all cursor-pointer group space-y-2"
            >
              <div className="w-10 h-10 bg-blue-800 text-white rounded-xl flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-sm text-[#1B4332] group-hover:text-[#C5A059] transition-colors">فهرست مواکب و اسکان</h5>
              <p className="text-[11px] text-[#2D3436]/70 leading-relaxed">مشاهده آدرس و ظرفیت ۳۸۵ ایستگاه فعال</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Nazar Selection & Official Bank Accounts Section */}
      <section className="bg-white rounded-3xl border border-[#E5E1D8] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E1D8] pb-4 gap-2">
          <div>
            <span className="text-xs font-bold text-[#C5A059] bg-[#1B4332] px-3 py-1 rounded-full inline-block mb-1">
              مشارکت مالی مردمی
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1B4332] font-quran">
              انتخاب عنوان نذر، پرداخت سریع و شماره حساب‌های رسمی
            </h2>
          </div>

          <button
            onClick={() => setCurrentPage('contributions')}
            className="text-xs font-bold text-[#1B4332] hover:text-[#C5A059] flex items-center gap-1 transition-colors"
          >
            <span>مشاهده تمام پویش‌ها</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Nazar Widget (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F8F5F0] rounded-2xl p-5 sm:p-6 border border-[#E5E1D8] space-y-5">
            
            <div className="space-y-2">
              <label className="block text-xs font-extrabold text-[#1B4332]">
                ۱. عنوان نذر مورد نظر خود را انتخاب فرمایید:
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

            <div className="space-y-2">
              <label className="block text-xs font-extrabold text-[#1B4332]">
                ۲. انتخاب یا ورود مبلغ نذر (تومان):
              </label>

              <div className="flex flex-wrap gap-2">
                {presetAmounts.map((amt) => {
                  const isSelected = !customAmountInput && nazarAmount === amt;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => { setNazarAmount(amt); setCustomAmountInput(''); }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
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

              <input
                type="number"
                placeholder="مبلغ دلخواه به تومان..."
                value={customAmountInput}
                onChange={(e) => setCustomAmountInput(e.target.value)}
                className="w-full p-2.5 bg-white border border-[#E5E1D8] rounded-xl text-xs text-[#1B4332] font-bold outline-none focus:ring-2 focus:ring-[#1B4332]"
              />
            </div>

            {paymentSuccess ? (
              <div className="bg-emerald-800 text-white p-4 rounded-xl text-center space-y-1 animate-in fade-in">
                <CheckCircle2 className="w-8 h-8 text-[#C5A059] mx-auto animate-bounce" />
                <h4 className="font-bold text-sm">نذر شما با موفقیت ثبت گردید</h4>
                <p className="text-xs text-white/90">مبلغ: {finalAmount.toLocaleString('fa-IR')} تومان بابت «{selectedNazarTitle}»</p>
              </div>
            ) : (
              <form onSubmit={handlePaymentSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="نام نذرکننده (اختیاری)"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full p-2.5 bg-white border border-[#E5E1D8] rounded-xl text-xs text-[#1B4332] outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-[#1B4332] hover:bg-[#112d21] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <CreditCard className="w-4 h-4 text-[#C5A059]" />
                  <span>پرداخت آنلاین {finalAmount.toLocaleString('fa-IR')} تومان</span>
                </button>
              </form>
            )}

          </div>

          {/* Bank Accounts List (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-bold text-sm text-[#1B4332] font-quran flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#C5A059]" />
              <span>شماره حساب‌های رسمی جمعیت</span>
            </h3>

            <div className="space-y-2.5">
              {bankAccounts.map((acc, index) => {
                const isCardCopied = copiedBankKey === `c-${index}`;
                const isIbanCopied = copiedBankKey === `i-${index}`;

                return (
                  <div key={acc.bank} className={`bg-gradient-to-r ${acc.color} text-white p-3.5 rounded-xl text-xs space-y-1.5 shadow-sm`}>
                    <div className="flex justify-between items-center text-[11px]">
                      <strong className="text-[#C5A059] font-bold">{acc.bank}</strong>
                      <span className="text-white/70">رسمی</span>
                    </div>

                    <div className="font-mono font-bold tracking-widest text-center dir-ltr py-1 bg-black/20 rounded">
                      {acc.cardNumber}
                    </div>

                    <div className="flex justify-between items-center text-[10px] pt-1 border-t border-white/10">
                      <button
                        onClick={() => handleCopyText(acc.rawCard, `c-${index}`)}
                        className="bg-white/15 hover:bg-white/25 px-2 py-0.5 rounded text-white font-bold flex items-center gap-1"
                      >
                        {isCardCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-[#C5A059]" />}
                        <span>{isCardCopied ? 'کپی شد' : 'کپی کارت'}</span>
                      </button>

                      <button
                        onClick={() => handleCopyText(acc.iban, `i-${index}`)}
                        className="bg-white/15 hover:bg-white/25 px-2 py-0.5 rounded text-[#C5A059] font-bold flex items-center gap-1"
                      >
                        {isIbanCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-white" />}
                        <span>{isIbanCopied ? 'کپی شد' : 'کپی شبا'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Interactive Map */}
      <section className="bg-white rounded-3xl border border-[#E5E1D8] p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#E5E1D8] pb-3">
          <div>
            <h2 className="text-xl font-bold text-[#1B4332] font-quran">
              نقشه آنلاین مواکب و ایستگاه‌های صلواتی
            </h2>
            <p className="text-xs text-gray-500">
              موقعیت جغرافیایی ۳۸۵ ایستگاه فعال در محورهای ۶ گانه ورودی مشهد
            </p>
          </div>
          <button 
            onClick={() => { setCurrentPage('services'); onNavigateService('map'); }}
            className="bg-[#F8F5F0] text-[#1B4332] border border-[#E5E1D8] font-bold text-xs px-4 py-2 rounded-xl hover:bg-[#E5E1D8]"
          >
            مشاهده نقشه کامل
          </button>
        </div>
        <InteractiveMap />
      </section>

      {/* 5. Live Stats & Latest News Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Live Metrics - 4 Cols */}
        <div className="col-span-12 md:col-span-4 bg-[#1B4332] text-white rounded-3xl p-6 shadow-md flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-[10px] font-bold bg-[#C5A059] text-[#1B4332] px-2.5 py-1 rounded-full inline-block">
              آمار خادمی صفر ۱۴۰۳
            </span>
            <h3 className="text-lg font-bold text-[#C5A059] font-quran">شاخص‌های خادمی ستاد</h3>
            
            <div className="space-y-2.5 pt-2">
              <div className="bg-white/10 p-3 rounded-xl border border-white/15 flex justify-between items-center">
                <span className="text-xs text-white/80">مواکب فعال جاده‌ای:</span>
                <strong className="text-base text-[#C5A059] font-extrabold">۳۸۵ ایستگاه</strong>
              </div>
              
              <div className="bg-white/10 p-3 rounded-xl border border-white/15 flex justify-between items-center">
                <span className="text-xs text-white/80">خادمان داوطلب:</span>
                <strong className="text-base text-[#C5A059] font-extrabold">۳۰,۰۰۰ خادم</strong>
              </div>

              <div className="bg-white/10 p-3 rounded-xl border border-white/15 flex justify-between items-center">
                <span className="text-xs text-white/80">ظرفیت اسکان شبانه:</span>
                <strong className="text-base text-[#C5A059] font-extrabold">۱۳۰,۰۰۰ نفر</strong>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 text-[11px] text-white/70">
            جمعیت خدمتگزاران زائرین پیاده حضرت رضا (ع)
          </div>
        </div>

        {/* Latest News - 8 Cols */}
        <div className="col-span-12 md:col-span-8 bg-white rounded-3xl border border-[#E5E1D8] p-6 shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b border-[#E5E1D8] pb-3">
            <h3 className="text-base font-bold text-[#1B4332] font-quran">اخبار و اطلاعیه‌های رسمی ستاد</h3>
            <button 
              onClick={() => { setCurrentPage('media'); onNavigateMedia('news-announcements'); }}
              className="text-xs font-bold text-[#1B4332] hover:text-[#C5A059]"
            >
              همه اخبار ←
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
                <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                <div className="space-y-1">
                  <span className="text-[9px] font-bold bg-[#1B4332] text-[#C5A059] px-2 py-0.5 rounded inline-block">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-[#1B4332] group-hover:text-[#C5A059] transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
