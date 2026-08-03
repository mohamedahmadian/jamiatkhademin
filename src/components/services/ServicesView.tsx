import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ServicesSubTab, PilgrimRegistration, KhadimRegistration, MokebRegistration } from '../../types';
import { SOCIETY_INFO, MOKEBS_DATA, WALKING_ROUTES, TRANSPORT_OPTIONS } from '../../data/mockData';
import { InteractiveMap } from '../common/InteractiveMap';
import { 
  UserCheck, 
  Users, 
  Tent, 
  Building2, 
  Compass, 
  Bus, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Calendar, 
  Sparkles, 
  Search, 
  Filter, 
  Clock, 
  Info,
  Copy,
  Printer
} from 'lucide-react';

interface ServicesViewProps {
  initialTab?: ServicesSubTab;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ initialTab = 'zaer-register' }) => {
  const [activeTab, setActiveTab] = useState<ServicesSubTab>(initialTab);

  // Pilgrim Registration Form State
  const [pilgrimForm, setPilgrimForm] = useState<PilgrimRegistration>({
    type: 'individual',
    fullName: '',
    nationalId: '',
    phone: '',
    province: 'خراسان رضوی',
    city: 'مشهد',
    gender: 'male',
    entryAxis: 'محور نیشابور - مشهد',
    expectedArrivalDate: '۱۴۰۳/۰۶/۱۰',
    needsLodging: true,
    needsInsurance: true,
  });

  const [registeredPilgrimResult, setRegisteredPilgrimResult] = useState<PilgrimRegistration | null>(null);

  // Khadim Registration Form State
  const [khadimForm, setKhadimForm] = useState<KhadimRegistration>({
    fullName: '',
    nationalId: '',
    phone: '',
    age: 25,
    gender: 'male',
    province: 'خراسان رضوی',
    specialty: 'lodging',
    availableDays: ['دهه پایانی صفر'],
    pastExperienceYears: 2,
  });
  const [registeredKhadimResult, setRegisteredKhadimResult] = useState<KhadimRegistration | null>(null);

  // Mokeb Registration Form State
  const [mokebForm, setMokebForm] = useState<MokebRegistration>({
    mokebName: '',
    managerName: '',
    phone: '',
    province: 'خراسان رضوی',
    city: 'مشهد',
    requestedAxis: 'محور نیشابور - مشهد',
    requestedStationKm: 30,
    proposedCapacity: 2000,
    offeredServices: ['پذیرایی گرم', 'اسکان'],
  });
  const [registeredMokebResult, setRegisteredMokebResult] = useState<MokebRegistration | null>(null);

  // Search filter for mokebs list
  const [mokebSearchQuery, setMokebSearchQuery] = useState('');
  const [selectedAxisFilter, setSelectedAxisFilter] = useState('all');

  const handlePilgrimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trackingCode = 'ZR-' + Math.floor(100000 + Math.random() * 900000);
    const result = { ...pilgrimForm, trackingCode };
    setRegisteredPilgrimResult(result);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  const handleKhadimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisteredKhadimResult(khadimForm);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  const handleMokebSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisteredMokebResult(mokebForm);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className="space-y-8 pb-12 max-w-7xl mx-auto px-4">
      
      {/* Header */}
      <div className="bg-[#1B4332] text-white rounded-2xl p-6 sm:p-8 border border-[#1B4332] shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-bento-dots-light opacity-10 pointer-events-none"></div>
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold font-quran text-[#C5A059]">
            خدمات جامع زائرین، خادمین و مواکب
          </h1>
          <p className="text-xs sm:text-sm text-white/80 mt-2">
            ثبت‌نام اینترنتی زائرین، خادمان افتخاری، استقرار مواکب و دریافت راهنمای جاده‌ای و حمل‌ونقل
          </p>
        </div>
      </div>

      {/* Services Navigation Tabs */}
      <div className="flex border-b border-[#E5E1D8] overflow-x-auto no-scrollbar gap-2 pb-1">
        
        <button
          onClick={() => setActiveTab('zaer-register')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'zaer-register'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <UserCheck className="w-4 h-4 text-[#C5A059]" />
          <span>ثبت‌نام زائر</span>
        </button>

        <button
          onClick={() => setActiveTab('khadim-register')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'khadim-register'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <Users className="w-4 h-4 text-[#C5A059]" />
          <span>ثبت‌نام خادم</span>
        </button>

        <button
          onClick={() => setActiveTab('mokeb-register')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'mokeb-register'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <Tent className="w-4 h-4 text-[#C5A059]" />
          <span>ثبت‌نام موکب‌دار</span>
        </button>

        <button
          onClick={() => setActiveTab('mokebs-list')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'mokebs-list'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <Building2 className="w-4 h-4 text-[#C5A059]" />
          <span>معرفی موکب‌ها</span>
        </button>

        <button
          onClick={() => setActiveTab('walking-routes')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'walking-routes'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <Compass className="w-4 h-4 text-[#C5A059]" />
          <span>مسیرهای پیاده‌روی</span>
        </button>

        <button
          onClick={() => setActiveTab('public-transport')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'public-transport'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <Bus className="w-4 h-4 text-[#C5A059]" />
          <span>حمل‌ونقل عمومی</span>
        </button>

        <button
          onClick={() => setActiveTab('map')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'map'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-[#2D3436] hover:bg-[#F8F5F0] border border-[#E5E1D8]'
          }`}
        >
          <MapPin className="w-4 h-4 text-[#C5A059]" />
          <span>نقشه دسترسی</span>
        </button>

      </div>

      {/* TAB 1: Pilgrim Registration */}
      {activeTab === 'zaer-register' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2d7c5] shadow-sm animate-in fade-in duration-200">
          
          {!registeredPilgrimResult ? (
            <form onSubmit={handlePilgrimSubmit} className="space-y-6 max-w-3xl mx-auto">
              
              <div className="border-b border-[#e2d7c5] pb-4">
                <h2 className="text-xl font-bold text-[#114232] flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-[#c89234]" />
                  <span>سامانه ثبت‌نام زائرین پیاده (انفرادی و کاروانی)</span>
                </h2>
                <p className="text-xs text-[#5a6a60] mt-1">
                  زائرین انفرادی و کاروان‌ها جهت بهره‌مندی از اسکان رایگان در مشهد و پوشش بیمه حوادث، اطلاعات زیر را تکمیل کنند.
                </p>
              </div>

              {/* Pilgrim Type Toggle */}
              <div className="flex gap-4 p-1.5 bg-[#faf8f5] rounded-xl border border-[#e2d7c5]">
                <button
                  type="button"
                  onClick={() => setPilgrimForm({ ...pilgrimForm, type: 'individual' })}
                  className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
                    pilgrimForm.type === 'individual'
                      ? 'bg-[#114232] text-[#e5b35c] shadow-sm'
                      : 'text-[#5a6a60] hover:text-[#114232]'
                  }`}
                >
                  ثبت‌نام انفرادی (زائر بدون کاروان)
                </button>
                <button
                  type="button"
                  onClick={() => setPilgrimForm({ ...pilgrimForm, type: 'caravan' })}
                  className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
                    pilgrimForm.type === 'caravan'
                      ? 'bg-[#114232] text-[#e5b35c] shadow-sm'
                      : 'text-[#5a6a60] hover:text-[#114232]'
                  }`}
                >
                  ثبت‌نام کاروان پیاده (گروهی)
                </button>
              </div>

              {/* Form inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">
                    {pilgrimForm.type === 'caravan' ? 'نام و نام خانوادگی مدیر کاروان' : 'نام و نام خانوادگی زائر'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={pilgrimForm.fullName}
                    onChange={(e) => setPilgrimForm({ ...pilgrimForm, fullName: e.target.value })}
                    placeholder="مثال: علی محمدی"
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232] focus:outline-none focus:ring-2 focus:ring-[#114232]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">کد ملی (۱۰ رقمی) *</label>
                  <input
                    type="text"
                    required
                    maxLength={10}
                    value={pilgrimForm.nationalId}
                    onChange={(e) => setPilgrimForm({ ...pilgrimForm, nationalId: e.target.value })}
                    placeholder="مثال: ۰۹۲۱۲۳۴۵۶۷"
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232] focus:outline-none focus:ring-2 focus:ring-[#114232]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">شماره تلفن همراه *</label>
                  <input
                    type="tel"
                    required
                    value={pilgrimForm.phone}
                    onChange={(e) => setPilgrimForm({ ...pilgrimForm, phone: e.target.value })}
                    placeholder="مثال: ۰۹۱۵۱۲۳۴۵۶۷"
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232] focus:outline-none focus:ring-2 focus:ring-[#114232]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">استان مبدأ *</label>
                  <select
                    value={pilgrimForm.province}
                    onChange={(e) => setPilgrimForm({ ...pilgrimForm, province: e.target.value })}
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232] focus:outline-none focus:ring-2 focus:ring-[#114232]"
                  >
                    <option value="خراسان رضوی">خراسان رضوی</option>
                    <option value="خراسان شمالی">خراسان شمالی</option>
                    <option value="خراسان جنوبی">خراسان جنوبی</option>
                    <option value="تهران">تهران</option>
                    <option value="اصفهان">اصفهان</option>
                    <option value="فارس">فارس</option>
                    <option value="مازندران">مازندران</option>
                    <option value="گلستان">گلستان</option>
                    <option value="سمنان">سمنان</option>
                    <option value="یزد">یزد</option>
                    <option value="کرمان">کرمان</option>
                    <option value="سایر استان‌ها">سایر استان‌ها / زائر خارجی</option>
                  </select>
                </div>

                {pilgrimForm.type === 'caravan' && (
                  <>
                    <div>
                      <label className="block text-xs font-semibold text-[#114232] mb-1">نام کاروان *</label>
                      <input
                        type="text"
                        required
                        value={pilgrimForm.caravanName || ''}
                        onChange={(e) => setPilgrimForm({ ...pilgrimForm, caravanName: e.target.value })}
                        placeholder="مثال: کاروان عاشقان رضا (ع)"
                        className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232] focus:outline-none focus:ring-2 focus:ring-[#114232]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#114232] mb-1">تعداد اعضای کاروان (نفر) *</label>
                      <input
                        type="number"
                        min={5}
                        max={500}
                        required
                        value={pilgrimForm.caravanSize || 20}
                        onChange={(e) => setPilgrimForm({ ...pilgrimForm, caravanSize: parseInt(e.target.value) || 20 })}
                        className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232] focus:outline-none focus:ring-2 focus:ring-[#114232]"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">محور ورودی پیاده‌روی *</label>
                  <select
                    value={pilgrimForm.entryAxis}
                    onChange={(e) => setPilgrimForm({ ...pilgrimForm, entryAxis: e.target.value })}
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232] focus:outline-none focus:ring-2 focus:ring-[#114232]"
                  >
                    <option value="محور نیشابور - مشهد">محور نیشابور - ملک‌آباد - مشهد</option>
                    <option value="محور قوچان - چناران - مشهد">محور قوچان - چناران - مشهد</option>
                    <option value="محور سرخس - مشهد">محور سرخس - میامی - مشهد</option>
                    <option value="محور تربت حیدریه - فریمان - مشهد">محور تربت حیدریه - فریمان - مشهد</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">تاریخ تقریبی ورود به مشهد *</label>
                  <input
                    type="text"
                    required
                    value={pilgrimForm.expectedArrivalDate}
                    onChange={(e) => setPilgrimForm({ ...pilgrimForm, expectedArrivalDate: e.target.value })}
                    placeholder="۱۴۰۳/۰۶/۱۰"
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232] focus:outline-none focus:ring-2 focus:ring-[#114232]"
                  />
                </div>

              </div>

              {/* Insurance Calculation Box */}
              <div className="bg-[#faf4e8] border border-[#c89234]/40 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#114232]">
                  <ShieldCheck className="w-5 h-5 text-[#c89234]" />
                  <span>محاسبه شفاف بیمه حوادث و یارانه جمعیت</span>
                </div>
                <div className="text-xs text-[#3a4a40] space-y-1">
                  <div className="flex justify-between">
                    <span>هزینه پایه بیمه حوادث هر زائر:</span>
                    <span>۶۴,۰۰۰ تومان</span>
                  </div>
                  <div className="flex justify-between text-emerald-800 font-semibold">
                    <span>یارانه پرداختی توسط جمعیت (تخفیف):</span>
                    <span>- ۲۰,۰۰۰ تومان</span>
                  </div>
                  <div className="flex justify-between font-bold text-[#114232] border-t border-[#e2d7c5] pt-1">
                    <span>مبلغ نهایی پرداختی زائر:</span>
                    <span className="text-[#c89234] text-sm">۴۴,۰۰۰ تومان</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#3a4a40]">
                <input
                  type="checkbox"
                  id="needsLodging"
                  checked={pilgrimForm.needsLodging}
                  onChange={(e) => setPilgrimForm({ ...pilgrimForm, needsLodging: e.target.checked })}
                  className="rounded text-[#114232] focus:ring-[#114232]"
                />
                <label htmlFor="needsLodging" className="cursor-pointer">
                  متقاضی تخصیص اسکان رایگان در مدارس/حسینیه‌های مشهد هستم
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#114232] hover:bg-[#0c2f24] text-[#e5b35c] font-bold py-3.5 rounded-xl shadow-md transition-all text-sm"
              >
                تکمیل ثبت‌نام و دریافت کد پیگیری زائر
              </button>

            </form>
          ) : (
            <div className="text-center space-y-6 max-w-lg mx-auto py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#114232] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-[#114232]" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#114232]">ثبت‌نام با موفقیت انجام شد</h3>
                <p className="text-xs text-[#5a6a60] mt-1">اطلاعات زائر در سامانه زائرین ۸ ثبت گردید.</p>
              </div>

              <div className="bg-[#faf4e8] border-2 border-[#c89234] rounded-2xl p-6 text-right space-y-3">
                <div className="flex justify-between items-center border-b border-[#e2d7c5] pb-3">
                  <span className="text-xs text-[#5a6a60]">کد پیگیری زائر:</span>
                  <span className="font-mono text-xl font-black text-[#114232]">{registeredPilgrimResult.trackingCode}</span>
                </div>
                <div className="text-xs space-y-1.5 text-[#3a4a40]">
                  <p>نام زائر/مدیر: <strong>{registeredPilgrimResult.fullName}</strong></p>
                  <p>استان مبدأ: <strong>{registeredPilgrimResult.province}</strong></p>
                  <p>محور ورودی: <strong>{registeredPilgrimResult.entryAxis}</strong></p>
                  <p>وضعیت اسکان: <strong>{registeredPilgrimResult.needsLodging ? 'درخواست اسکان رایگان ثبت شد' : 'شخصی'}</strong></p>
                  <p>وضعیت بیمه: <strong>تحت پوشش بیمه حوادث (سهم زائر: ۴۴,۰۰۰ تومان)</strong></p>
                </div>
              </div>

              <button
                onClick={() => setRegisteredPilgrimResult(null)}
                className="bg-[#114232] text-[#e5b35c] font-bold px-6 py-2.5 rounded-xl text-xs"
              >
                ثبت‌نام زائر جدید
              </button>
            </div>
          )}

        </div>
      )}

      {/* TAB 2: Khadim Registration */}
      {activeTab === 'khadim-register' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2d7c5] shadow-sm animate-in fade-in duration-200">
          {!registeredKhadimResult ? (
            <form onSubmit={handleKhadimSubmit} className="space-y-6 max-w-3xl mx-auto">
              <div className="border-b border-[#e2d7c5] pb-4">
                <h2 className="text-xl font-bold text-[#114232] flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#c89234]" />
                  <span>ثبت‌نام خادم افتخاری زائرین پیاده امام رضا (ع)</span>
                </h2>
                <p className="text-xs text-[#5a6a60] mt-1">
                  پیوستن به جمع ۳۰,۰۰۰ خادم افتخاری در بخش‌های اسکان، پزشکی، پذیرایی و خدمات جاده‌ای.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">نام و نام خانوادگی *</label>
                  <input
                    type="text"
                    required
                    value={khadimForm.fullName}
                    onChange={(e) => setKhadimForm({ ...khadimForm, fullName: e.target.value })}
                    placeholder="علی رضایی"
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">شماره تماس *</label>
                  <input
                    type="tel"
                    required
                    value={khadimForm.phone}
                    onChange={(e) => setKhadimForm({ ...khadimForm, phone: e.target.value })}
                    placeholder="۰۹۱۵۱۲۳۴۵۶۷"
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">حوزه تخصصی خدمت *</label>
                  <select
                    value={khadimForm.specialty}
                    onChange={(e) => setKhadimForm({ ...khadimForm, specialty: e.target.value as any })}
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232]"
                  >
                    <option value="lodging">کمیته اسکان و تجهیز مدارس</option>
                    <option value="catering">پذیرایی و ایستگاه‌های صلواتی</option>
                    <option value="medical">بهداشت، درمان و اورژانس (پزشک/پرستار)</option>
                    <option value="transport">حمل‌ونقل و خادمی جاده‌ای</option>
                    <option value="cultural">امور فرهنگی و راهنمای زائران خارجی</option>
                    <option value="technical">تاسیسات، خیاطی و کفاشی صلواتی</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">سابقه خدمت افتخاری (سال)</label>
                  <input
                    type="number"
                    value={khadimForm.pastExperienceYears}
                    onChange={(e) => setKhadimForm({ ...khadimForm, pastExperienceYears: parseInt(e.target.value) || 0 })}
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#114232] hover:bg-[#0c2f24] text-[#e5b35c] font-bold py-3.5 rounded-xl shadow-md text-sm"
              >
                تکمیل ثبت‌نام خادمی
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4 py-8">
              <CheckCircle2 className="w-12 h-12 text-[#114232] mx-auto" />
              <h3 className="text-xl font-bold text-[#114232]">درخواست خادمی شما ثبت شد</h3>
              <p className="text-xs text-[#5a6a60]">همکاران کمیته خادمین به زودی جهت هماهنگی با شما تماس خواهند گرفت.</p>
              <button onClick={() => setRegisteredKhadimResult(null)} className="text-xs font-bold text-[#c89234]">ثبت درخواست جدید</button>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: Mokeb Registration */}
      {activeTab === 'mokeb-register' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2d7c5] shadow-sm animate-in fade-in duration-200">
          {!registeredMokebResult ? (
            <form onSubmit={handleMokebSubmit} className="space-y-6 max-w-3xl mx-auto">
              <div className="border-b border-[#e2d7c5] pb-4">
                <h2 className="text-xl font-bold text-[#114232] flex items-center gap-2">
                  <Tent className="w-5 h-5 text-[#c89234]" />
                  <span>ثبت‌نام و استقرار موکب / ایستگاه صلواتی</span>
                </h2>
                <p className="text-xs text-[#5a6a60] mt-1">
                  سامانه صدور مجوز استقرار مواکب در مسیرهای ۳۶۰ گانه ورودی به مشهد مقدس.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">نام موکب / هیئت *</label>
                  <input
                    type="text"
                    required
                    value={mokebForm.mokebName}
                    onChange={(e) => setMokebForm({ ...mokebForm, mokebName: e.target.value })}
                    placeholder="موکب انصار الحسین (ع)"
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">نام مسئول موکب *</label>
                  <input
                    type="text"
                    required
                    value={mokebForm.managerName}
                    onChange={(e) => setMokebForm({ ...mokebForm, managerName: e.target.value })}
                    placeholder="حسین حسینی"
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">محور پیشنهادی استقرار *</label>
                  <select
                    value={mokebForm.requestedAxis}
                    onChange={(e) => setMokebForm({ ...mokebForm, requestedAxis: e.target.value })}
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232]"
                  >
                    <option value="محور نیشابور - مشهد">محور نیشابور - مشهد</option>
                    <option value="محور قوچان - چناران - مشهد">محور قوچان - چناران - مشهد</option>
                    <option value="محور سرخس - مشهد">محور سرخس - مشهد</option>
                    <option value="محور تربت حیدریه - فریمان - مشهد">محور تربت حیدریه - فریمان - مشهد</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">ظرفیت پذیرایی روزانه (نفر) *</label>
                  <input
                    type="number"
                    value={mokebForm.proposedCapacity}
                    onChange={(e) => setMokebForm({ ...mokebForm, proposedCapacity: parseInt(e.target.value) || 1000 })}
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#114232] hover:bg-[#0c2f24] text-[#e5b35c] font-bold py-3.5 rounded-xl text-sm"
              >
                ثبت درخواست برپایی موکب
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4 py-8">
              <CheckCircle2 className="w-12 h-12 text-[#114232] mx-auto" />
              <h3 className="text-xl font-bold text-[#114232]">درخواست موکب‌داری شما ثبت شد</h3>
              <p className="text-xs text-[#5a6a60]">پس از بررسی جانمایی جاده‌ای، مجوز نهایی صادر می‌گردد.</p>
              <button onClick={() => setRegisteredMokebResult(null)} className="text-xs font-bold text-[#c89234]">ثبت جدید</button>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: Mokebs Directory */}
      {activeTab === 'mokebs-list' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          <div className="bg-white p-4 rounded-2xl border border-[#e2d7c5] flex flex-col sm:flex-row gap-3 justify-between items-center">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#5a6a60] absolute right-3 top-3" />
              <input
                type="text"
                placeholder="جستجوی موکب یا مدیر..."
                value={mokebSearchQuery}
                onChange={(e) => setMokebSearchQuery(e.target.value)}
                className="w-full pr-9 pl-3 py-2 bg-[#faf8f5] border border-[#e2d7c5] rounded-xl text-xs text-[#114232]"
              />
            </div>

            <div className="flex items-center gap-2 text-xs w-full sm:w-auto">
              <span className="text-[#5a6a60]">محور:</span>
              <select
                value={selectedAxisFilter}
                onChange={(e) => setSelectedAxisFilter(e.target.value)}
                className="bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3 py-2 text-xs text-[#114232]"
              >
                <option value="all">همه محورها</option>
                <option value="نیشابور">محور نیشابور</option>
                <option value="قوچان">محور قوچان</option>
                <option value="سرخس">محور سرخس</option>
                <option value="فریمان">محور فریمان</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOKEBS_DATA
              .filter(m => {
                const matchQuery = m.name.includes(mokebSearchQuery) || m.manager.includes(mokebSearchQuery);
                const matchAxis = selectedAxisFilter === 'all' || m.axis.includes(selectedAxisFilter);
                return matchQuery && matchAxis;
              })
              .map((mokeb) => (
                <div key={mokeb.id} className="bg-white rounded-2xl p-6 border border-[#e2d7c5] shadow-sm hover:border-[#c89234] transition-all space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[11px] font-bold text-[#c89234] bg-[#faf4e8] px-2.5 py-0.5 rounded-md border border-[#e2d7c5]">
                        {mokeb.axis}
                      </span>
                      <h3 className="font-bold text-base text-[#114232] mt-1.5">{mokeb.name}</h3>
                    </div>
                    <span className="text-xs bg-[#114232] text-[#e5b35c] px-2.5 py-1 rounded-lg font-bold">
                      {mokeb.capacityDaily.toLocaleString('fa-IR')} نفر/روز
                    </span>
                  </div>

                  <p className="text-xs text-[#5a6a60] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#c89234]" />
                    <span>{mokeb.location}</span>
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {mokeb.services.map((s, idx) => (
                      <span key={idx} className="bg-[#faf8f5] border border-[#e2d7c5] text-[10px] text-[#3a4a40] px-2 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#f3ede2] flex justify-between items-center text-xs text-[#114232]">
                    <span>مسئول: {mokeb.manager}</span>
                    <a href={`tel:${mokeb.phone}`} className="font-bold text-[#c89234] dir-ltr hover:underline">
                      {mokeb.phone} 📞
                    </a>
                  </div>
                </div>
              ))}
          </div>

        </div>
      )}

      {/* TAB 5: Walking Routes */}
      {activeTab === 'walking-routes' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WALKING_ROUTES.map((route) => (
              <div key={route.id} className="bg-white rounded-2xl p-6 border border-[#e2d7c5] shadow-sm space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold text-[#c89234] bg-[#faf4e8] px-2.5 py-1 rounded-md">
                      {route.axis}
                    </span>
                    <h3 className="font-bold text-lg text-[#114232] mt-1">{route.title}</h3>
                  </div>
                  <div className="text-left bg-[#114232] text-[#e5b35c] px-3 py-1 rounded-xl text-xs font-bold">
                    {route.totalKm} کیلومتر
                  </div>
                </div>

                <p className="text-xs text-[#5a6a60] leading-relaxed">{route.description}</p>

                <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e2d7c5] space-y-1">
                  <span className="text-xs font-bold text-[#114232]">شهرهای کلیدی مسیر:</span>
                  <p className="text-xs text-[#3a4a40]">{route.keyCities.join(' ← ')}</p>
                </div>

                <div className="space-y-1 text-xs text-[#3a4a40]">
                  <span className="font-bold text-[#114232]">توصیه‌های جاده‌ای:</span>
                  <ul className="list-disc list-inside text-[11px] space-y-0.5 text-[#5a6a60]">
                    {route.tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: Public Transport */}
      {activeTab === 'public-transport' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRANSPORT_OPTIONS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-[#e2d7c5] shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#114232] flex items-center justify-center font-bold">
                    <Bus className="w-5 h-5 text-[#114232]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#114232]">{item.title}</h3>
                    <span className="text-xs text-[#c89234] font-semibold">{item.lineOrNumber}</span>
                  </div>
                </div>

                <p className="text-xs text-[#5a6a60] leading-relaxed">{item.description}</p>

                <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e2d7c5] space-y-1">
                  <span className="text-xs font-bold text-[#114232]">ساعات فعالیت:</span>
                  <p className="text-xs text-[#3a4a40]">{item.operatingHours}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#114232]">ایستگاه‌های مهم:</span>
                  <div className="flex flex-wrap gap-1">
                    {item.stations.map((st, i) => (
                      <span key={i} className="bg-[#faf4e8] text-[11px] text-[#3a4a40] px-2 py-0.5 rounded border border-[#e2d7c5]">
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 7: Access Map */}
      {activeTab === 'map' && (
        <div className="animate-in fade-in duration-200">
          <InteractiveMap />
        </div>
      )}

    </div>
  );
};
