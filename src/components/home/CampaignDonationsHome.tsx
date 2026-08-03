import React, { useState } from 'react';
import { PageType } from '../../types';
import { CONTRIBUTION_CAMPAIGNS, SOCIETY_INFO } from '../../data/mockData';
import { Heart, Droplets, Utensils, Home, Stethoscope, Copy, Check, ShieldCheck, Award, ArrowLeft, CreditCard, Sparkles, Building2 } from 'lucide-react';

interface CampaignDonationsHomeProps {
  setCurrentPage: (page: PageType) => void;
}

export const CampaignDonationsHome: React.FC<CampaignDonationsHomeProps> = ({
  setCurrentPage,
}) => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [selectedCampaignId, setSelectedCampaignId] = useState<string>('campaign-water');
  const [customAmount, setCustomAmount] = useState<number>(50000);
  const [donorName, setDonorName] = useState<string>('');
  const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);

  const waterCampaign = CONTRIBUTION_CAMPAIGNS.find(c => c.id === 'campaign-water') || CONTRIBUTION_CAMPAIGNS[0];
  const activeCampaign = CONTRIBUTION_CAMPAIGNS.find(c => c.id === selectedCampaignId) || waterCampaign;

  const percentage = Math.min(100, Math.round((activeCampaign.raisedAmountTomans / activeCampaign.targetAmountTomans) * 100));

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(label);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccessMessage(true);
    setTimeout(() => setIsSuccessMessage(false), 5000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Hero Campaign Banner with Progress Meter */}
      <section className="bg-[#1B4332] text-white rounded-3xl p-6 sm:p-10 border-b-4 border-[#C5A059] shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-pattern opacity-15 pointer-events-none"></div>
        <div className="max-w-4xl space-y-6 relative z-10">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#C5A059] text-[#1B4332] text-xs font-bold px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow">
              <Sparkles className="w-3.5 h-3.5" />
              <span>پویش ملی نذر «زائرین ۸»</span>
            </span>
            <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">
              ویژه دهه آخر صفر
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl font-black text-white font-quran leading-tight">
              در ثواب گام‌های عاشقانه زائرین پیاده شریک شوید
            </h1>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-2xl">
              جمعیت خدمتگزاران با ۲۶ سال سابقه شفافیت مالی، تمامی نذورات شما را مستقیماً صرف تامین آب آشامیدنی، طبخ غذای گرم، اسکان و خدمات دارویی زائرین الرضا (ع) می‌نماید.
            </p>
          </div>

          {/* Active Campaign Progress */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs sm:text-sm font-bold">
              <span className="text-[#C5A059]">{activeCampaign.title}</span>
              <span>
                تامین {activeCampaign.raisedAmountTomans.toLocaleString('fa-IR')} از {activeCampaign.targetAmountTomans.toLocaleString('fa-IR')} تومان ({percentage}٪)
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-3.5 overflow-hidden p-0.5">
              <div 
                className="bg-gradient-to-r from-[#C5A059] to-[#E5C384] h-full rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>

            <div className="flex justify-between items-center text-[11px] text-white/80 pt-1">
              <span>تعداد حامیان تاکنون: {activeCampaign.donorCount.toLocaleString('fa-IR')} نفر</span>
              <span>{activeCampaign.unitLabel ? `هر سهم: ${activeCampaign.unitPriceTomans?.toLocaleString('fa-IR')} تومان` : ''}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Campaign Categories Grid */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1B4332] font-quran border-r-4 border-[#C5A059] pr-3">
          انتخاب عنوان نذر و مشارکت
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONTRIBUTION_CAMPAIGNS.map((camp) => {
            const isSelected = selectedCampaignId === camp.id;
            const campPercent = Math.min(100, Math.round((camp.raisedAmountTomans / camp.targetAmountTomans) * 100));

            return (
              <div
                key={camp.id}
                onClick={() => setSelectedCampaignId(camp.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                  isSelected 
                    ? 'bg-white border-2 border-[#1B4332] shadow-md ring-2 ring-[#C5A059]/40' 
                    : 'bg-white border-[#E5E1D8] hover:border-[#C5A059]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl">
                      {camp.id === 'campaign-water' ? '💧' : camp.id === 'campaign-food' ? '🍲' : camp.id === 'campaign-lodging' ? '🏠' : '🩺'}
                    </span>
                    <span className="text-[10px] bg-[#F8F5F0] text-[#1B4332] px-2 py-1 rounded font-bold border border-[#E5E1D8]">
                      {campPercent}٪ تکمیل
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-[#1B4332] font-quran">{camp.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{camp.description}</p>
                </div>

                <div className="pt-3 border-t border-[#E5E1D8] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#1B4332]">
                    {camp.unitPriceTomans ? `${camp.unitPriceTomans.toLocaleString('fa-IR')} ت/سهم` : 'دلخواه'}
                  </span>
                  <span className={`text-[11px] font-bold ${isSelected ? 'text-[#C5A059]' : 'text-gray-400'}`}>
                    {isSelected ? 'انتخاب شده ✓' : 'انتخاب'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Online Payment & Card Transfer Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Fast Online Donation Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E5E1D8] p-6 shadow-sm space-y-5">
          <div className="border-b border-[#E5E1D8] pb-3">
            <h3 className="text-lg font-bold text-[#1B4332] font-quran">
              پرداخت سریع نذر آنلاین ({activeCampaign.title})
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              اتصال مستقیم به درگاه بانکی امن ستاد مرکزی خدمتگزاران
            </p>
          </div>

          {isSuccessMessage ? (
            <div className="p-6 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-2xl text-center space-y-2 animate-in zoom-in-95">
              <Check className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-base">با تشکر از نذر ارزشمند شما</h4>
              <p className="text-xs">تراکنش فرضی با موفقیت ثبت شد. ان‌شاءالله مشمول عنایت حضرت رضا (ع) قرار گیرید.</p>
            </div>
          ) : (
            <form onSubmit={handleDonationSubmit} className="space-y-4">
              
              {/* Preset Amount Buttons */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#1B4332]">انتخاب مبلغ نذر (تومان):</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {[20000, 50000, 100000, 250000, 500000, 1000000].map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => setCustomAmount(amt)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                        customAmount === amt 
                          ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-sm' 
                          : 'bg-[#F8F5F0] text-[#2D3436] border-[#E5E1D8] hover:bg-[#E5E1D8]'
                      }`}
                    >
                      {amt.toLocaleString('fa-IR')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#1B4332] mb-1 block">مبلغ دلخواه (تومان):</label>
                  <input 
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(Number(e.target.value))}
                    className="w-full bg-[#F8F5F0] border border-[#E5E1D8] rounded-xl px-4 py-2.5 text-xs font-bold text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1B4332] mb-1 block">نام یا نیت خیر (اختیاری):</label>
                  <input 
                    type="text"
                    placeholder="مثال: به نیابت از اموات"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full bg-[#F8F5F0] border border-[#E5E1D8] rounded-xl px-4 py-2.5 text-xs text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-[#C5A059] hover:bg-[#b58f48] text-[#1B4332] font-black text-sm rounded-xl transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                <span>پرداخت آنلاین {customAmount.toLocaleString('fa-IR')} تومان</span>
              </button>
            </form>
          )}
        </div>

        {/* Bank Account Details */}
        <div className="lg:col-span-5 bg-[#1B4332] text-white rounded-2xl p-6 shadow-md border border-[#1B4332] space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#C5A059]">
              <Building2 className="w-5 h-5" />
              <h3 className="font-bold text-base font-quran">شماره حساب‌های رسمی جمعیت</h3>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              جهت واریز مستقیم از طریق کارت به کارت یا پایا به نام «جمعیت خدمتگزاران زائرین پیاده»:
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="bg-white/10 p-3 rounded-xl border border-white/15 space-y-1">
                <div className="flex justify-between items-center text-[11px] text-[#C5A059]">
                  <span>بانک ملی ایران</span>
                  <button 
                    onClick={() => copyToClipboard('۶۰۳۷۹۹۱۸۹۹۹۹۸۸۸۸', 'کارت')}
                    className="hover:text-white flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedAccount === 'کارت' ? 'کپی شد' : 'کپی شماره کارت'}</span>
                  </button>
                </div>
                <div className="font-mono text-sm font-bold tracking-widest text-center dir-ltr">
                  ۶۰۳۷-۹۹۱۸-۹۹۹۹-۸۸۸۸
                </div>
              </div>

              <div className="bg-white/10 p-3 rounded-xl border border-white/15 space-y-1">
                <div className="flex justify-between items-center text-[11px] text-[#C5A059]">
                  <span>شماره شبا (IR)</span>
                  <button 
                    onClick={() => copyToClipboard('IR120170000000010020030040', 'شبا')}
                    className="hover:text-white flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedAccount === 'شبا' ? 'کپی شد' : 'کپی شبا'}</span>
                  </button>
                </div>
                <div className="font-mono text-xs font-bold tracking-wider text-center dir-ltr text-white/90">
                  IR120170000000010020030040
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 text-[11px] text-white/70 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>تمامی حساب‌ها تحت نظارت هیئت امنا و امور مالی جمعیت می‌باشد.</span>
          </div>
        </div>

      </section>

      {/* Financial Transparency Report */}
      <section className="bg-white rounded-2xl border border-[#E5E1D8] p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-[#1B4332] font-quran border-r-4 border-[#C5A059] pr-3">
          شفافیت مالی و گزارش هزینه‌کرد نذورات سال گذشته
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-[#F8F5F0] p-4 rounded-xl border border-[#E5E1D8]">
            <div className="text-xl font-black text-[#1B4332]">۴.۵ میلیارد</div>
            <div className="text-[10px] font-bold text-gray-600 mt-1">تامین بطری آب معدنی</div>
          </div>

          <div className="bg-[#F8F5F0] p-4 rounded-xl border border-[#E5E1D8]">
            <div className="text-xl font-black text-[#1B4332]">۶.۲ میلیارد</div>
            <div className="text-[10px] font-bold text-gray-600 mt-1">طبخ ۲.۵ میلیون پرس غذا</div>
          </div>

          <div className="bg-[#F8F5F0] p-4 rounded-xl border border-[#E5E1D8]">
            <div className="text-xl font-black text-[#1B4332]">۳.۱ میلیارد</div>
            <div className="text-[10px] font-bold text-gray-600 mt-1">تجهیز سالن‌های اسکان و پتو</div>
          </div>

          <div className="bg-[#F8F5F0] p-4 rounded-xl border border-[#E5E1D8]">
            <div className="text-xl font-black text-[#1B4332]">۱.۸ میلیارد</div>
            <div className="text-[10px] font-bold text-gray-600 mt-1">دارو و تجهیزات پزشکی</div>
          </div>
        </div>
      </section>

    </div>
  );
};
