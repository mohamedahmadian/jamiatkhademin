import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { SOCIETY_INFO, CONTRIBUTION_CAMPAIGNS } from '../../data/mockData';
import { 
  Heart, 
  CreditCard, 
  Copy, 
  Check, 
  Droplets, 
  ShieldCheck, 
  Home, 
  HeartPulse, 
  Award, 
  Sparkles, 
  Lock, 
  TrendingUp, 
  PieChart, 
  HelpCircle,
  X
} from 'lucide-react';

export const ContributionsView: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedCampaignId, setSelectedCampaignId] = useState<string>('campaign-water');
  const [donationAmount, setDonationAmount] = useState<number>(50000);
  const [donorName, setDonorName] = useState<string>('');
  const [paymentModalOpen, setPaymentModalOpen] = useState<boolean>(false);
  const [paymentSuccessModal, setPaymentSuccessModal] = useState<boolean>(false);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text.replace(/-/g, ''));
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentModalOpen(false);
    setPaymentSuccessModal(true);
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
  };

  return (
    <div className="space-y-10 pb-12 max-w-7xl mx-auto px-4">
      
      {/* Header Banner - Single Page, No Submenus */}
      <div className="bg-gradient-to-r from-[#114232] via-[#0c2f24] to-[#0a231b] text-[#f3ede2] rounded-3xl p-6 sm:p-8 border-2 border-[#c89234]/40 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-rose-500/20 text-rose-200 px-3 py-1 rounded-full text-xs font-semibold border border-rose-400/30">
            <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
            <span>سامانه مردمی نذورات و مشارکت‌های خیرین</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#f3ede2] font-quran">
            مشارکت‌های مردمی و نذورات زائرین پیاده
          </h1>
          <p className="text-xs sm:text-sm text-[#d0c6b4] leading-relaxed">
            تمامی خدمات ۲۶ ساله جمعیت خدمتگزاران اعم از اسکان رایگان، ایستگاه‌های صلواتی و پذیرایی جاده‌ای، متکی بر نذورات و کمک‌های خودجوش شما مردم شریف و دلدادگان حضرت رضا (ع) است.
          </p>
        </div>
      </div>

      {/* 1. معرفی نیازهای فعلی (Current Needs & Campaigns) */}
      <section className="space-y-4">
        <div className="border-r-4 border-[#c89234] pr-3">
          <h2 className="text-xl font-bold text-[#114232]">نیازمندی‌های فعلی و پویش‌های فعال</h2>
          <p className="text-xs text-[#5a6a60]">موضوع نذر یا کمک مالی خود را جهت تخصیص مستقیم انتخاب کنید</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONTRIBUTION_CAMPAIGNS.map((camp) => {
            const percentage = Math.min(100, Math.round((camp.raisedAmountTomans / camp.targetAmountTomans) * 100));
            const isSelected = selectedCampaignId === camp.id;

            return (
              <div 
                key={camp.id}
                onClick={() => setSelectedCampaignId(camp.id)}
                className={`bg-white rounded-2xl p-5 border transition-all cursor-pointer space-y-4 flex flex-col justify-between ${
                  isSelected 
                    ? 'border-2 border-[#114232] ring-2 ring-[#c89234]/20 shadow-md' 
                    : 'border-[#e2d7c5] hover:border-[#c89234]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#114232] flex items-center justify-center font-bold">
                      {camp.id === 'campaign-water' && <Droplets className="w-5 h-5 text-blue-600" />}
                      {camp.id === 'campaign-lodging' && <Home className="w-5 h-5 text-[#114232]" />}
                      {camp.id === 'campaign-insurance' && <ShieldCheck className="w-5 h-5 text-[#c89234]" />}
                      {camp.id === 'campaign-medical' && <HeartPulse className="w-5 h-5 text-rose-600" />}
                    </div>
                    <span className="text-[11px] font-bold text-[#114232] bg-[#faf4e8] px-2 py-0.5 rounded border border-[#e2d7c5]">
                      {camp.donorCount.toLocaleString('fa-IR')} خیر
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#114232]">{camp.title}</h3>
                  <p className="text-xs text-[#5a6a60] leading-relaxed line-clamp-2">{camp.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#f3ede2]">
                  <div className="flex justify-between text-[11px] text-[#5a6a60]">
                    <span>تأمین شده:</span>
                    <span className="font-bold text-[#114232]">{percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#f3ede2] rounded-full overflow-hidden">
                    <div className="h-full bg-[#114232] rounded-full" style={{ width: `${percentage}%` }}></div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCampaignId(camp.id);
                      setPaymentModalOpen(true);
                    }}
                    className="w-full py-2 bg-[#114232] hover:bg-[#0c2f24] text-[#e5b35c] font-bold text-xs rounded-lg transition-colors mt-1"
                  >
                    پرداخت آنلاین نذر
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. شماره کارت و حساب‌های بانکی رسمی (Bank Cards & IBANs) */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2d7c5] shadow-sm space-y-6">
        <div className="border-r-4 border-[#c89234] pr-3">
          <h2 className="text-xl font-bold text-[#114232]">شماره حساب‌ها و کارت‌های رسمی جمعیت</h2>
          <p className="text-xs text-[#5a6a60]">حساب‌های رسمی و مورد تایید جمعیت خدمتگزاران زائرین پیاده حضرت رضا (ع)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOCIETY_INFO.bankAccounts.map((acc, idx) => (
            <div key={idx} className="bg-[#faf8f5] rounded-2xl p-5 border border-[#e2d7c5] space-y-4 hover:border-[#c89234] transition-all">
              <div className="flex justify-between items-center border-b border-[#e2d7c5] pb-3">
                <span className="font-bold text-sm text-[#114232]">{acc.bankName}</span>
                <span className="text-xs bg-[#114232] text-[#e5b35c] px-2.5 py-0.5 rounded font-medium">حساب رسمی ستاد</span>
              </div>

              <div className="space-y-2 text-xs text-[#3a4a40]">
                <p>نام صاحب حساب: <strong>{acc.title}</strong></p>

                {/* Card Number */}
                <div className="bg-white p-3 rounded-xl border border-[#e2d7c5] flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] text-[#5a6a60]">شماره کارت ۱۶ رقمی:</span>
                    <strong className="font-mono text-sm text-[#114232] dir-ltr inline-block tracking-wider">{acc.cardNumber}</strong>
                  </div>
                  <button
                    onClick={() => handleCopy(acc.cardNumber, idx)}
                    className="p-2 bg-[#faf4e8] text-[#114232] hover:bg-[#c89234] hover:text-white rounded-lg transition-colors flex items-center gap-1 text-xs"
                  >
                    {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedIndex === idx ? 'کپی شد' : 'کپی کارت'}</span>
                  </button>
                </div>

                {/* IBAN */}
                <div className="bg-white p-2.5 rounded-xl border border-[#e2d7c5] text-[11px]">
                  <span className="text-[#5a6a60]">شبا: </span>
                  <strong className="font-mono dir-ltr inline-block text-[#114232]">{acc.iban}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. گزارشی از نحوه هزینه کرد کمک‌ها (Transparency & Spending Report) */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2d7c5] shadow-sm space-y-6">
        <div className="border-r-4 border-[#c89234] pr-3">
          <h2 className="text-xl font-bold text-[#114232]">گزارش شفافیت مالی و نحوه هزینه‌کرد کمک‌های مردمی</h2>
          <p className="text-xs text-[#5a6a60]">گزارش حسابرسی نذورات دریافتی و هزینه‌کرد مستقیم در سال گذشته و جاری</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#faf4e8] p-5 rounded-xl border border-[#e2d7c5] space-y-2">
            <PieChart className="w-8 h-8 text-[#114232]" />
            <h3 className="font-bold text-base text-[#114232]">۵۵٪ تامین تغذیه و ایستگاه‌ها</h3>
            <p className="text-xs text-[#5a6a60]">خرید برنج، گوشت، چای، نان و آب آشامیدنی برای ۳۸۵ ایستگاه جاده‌ای</p>
          </div>

          <div className="bg-[#faf4e8] p-5 rounded-xl border border-[#e2d7c5] space-y-2">
            <Home className="w-8 h-8 text-[#c89234]" />
            <h3 className="font-bold text-base text-[#114232]">۳۰٪ تجهیز مدارس و اسکان</h3>
            <p className="text-xs text-[#5a6a60]">تامین موکت، پتو، وسایل گرمایشی و اقلام بهداشتی ۴۰۰ مدرسه در مشهد</p>
          </div>

          <div className="bg-[#faf4e8] p-5 rounded-xl border border-[#e2d7c5] space-y-2">
            <ShieldCheck className="w-8 h-8 text-[#114232]" />
            <h3 className="font-bold text-base text-[#114232]">۱۵٪ یارانه بیمه و دارو</h3>
            <p className="text-xs text-[#5a6a60]">پرداخت ۲۰,۰۰۰ تومان یارانه بیمه حوادث برای هر زائر و تامین داروهای جاده‌ای</p>
          </div>
        </div>
      </section>

      {/* Simulated Payment Gateway Modal */}
      {paymentModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl border border-[#c89234]">
            <div className="flex justify-between items-center border-b border-[#e2d7c5] pb-3">
              <h3 className="font-bold text-[#114232] text-base">درگاه پرداخت آنلاین نذورات</h3>
              <button onClick={() => setPaymentModalOpen(false)} className="text-[#114232]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#114232] mb-1">نام خیر (اختیاری)</label>
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="خیر بومی / بی‌نام"
                  className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2 text-xs text-[#114232]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#114232] mb-1">مبلغ نذر (تومان)</label>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {[20000, 50000, 100000, 200000, 500000, 1000000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setDonationAmount(amt)}
                      className={`py-1.5 text-xs font-bold rounded-lg border ${
                        donationAmount === amt
                          ? 'bg-[#114232] text-[#e5b35c] border-[#114232]'
                          : 'bg-[#faf8f5] text-[#3a4a40] border-[#e2d7c5]'
                      }`}
                    >
                      {amt.toLocaleString('fa-IR')}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                  className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2 text-xs font-bold text-[#114232]"
                />
              </div>

              <div className="p-3 bg-[#faf4e8] rounded-xl text-xs text-[#5a6a60] flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-700" />
                <span>اتصال امن به درگاه شتابی بانک مرکزی</span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#114232] hover:bg-[#0c2f24] text-[#e5b35c] font-bold py-3 rounded-xl shadow-md text-sm"
              >
                پرداخت مبلغ {donationAmount.toLocaleString('fa-IR')} تومان
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Payment Success Modal */}
      {paymentSuccessModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl border border-[#c89234]">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#114232] flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 fill-[#114232]" />
            </div>
            <h3 className="font-bold text-xl text-[#114232]">نذر شما با موفقیت ثبت شد</h3>
            <p className="text-xs text-[#5a6a60]">
              از مشارکت شما خیر گرامی صمیمانه سپاسگزاریم. اجر شما با امام مهربانی‌ها، حضرت علی بن موسی الرضا (ع).
            </p>
            <button
              onClick={() => setPaymentSuccessModal(false)}
              className="bg-[#114232] text-[#e5b35c] font-bold px-6 py-2 rounded-xl text-xs"
            >
              بستن پنجره
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
