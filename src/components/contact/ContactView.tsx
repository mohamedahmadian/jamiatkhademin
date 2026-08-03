import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { SOCIETY_INFO, FAQS } from '../../data/mockData';
import { Phone, Mail, MapPin, MessageSquare, ChevronDown, CheckCircle2, HelpCircle, Send } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    fullName: '',
    phone: '',
    category: 'انتقاد',
    message: '',
  });

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <div className="space-y-10 pb-12 max-w-7xl mx-auto px-4">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#114232] to-[#0c2f24] text-[#f3ede2] rounded-3xl p-6 sm:p-8 border-2 border-[#c89234]/40 shadow-xl">
        <h1 className="text-2xl sm:text-3xl font-extrabold font-quran text-[#e5b35c]">
          ارتباط با ستاد مرکزی جمعیت خدمتگزاران
        </h1>
        <p className="text-xs sm:text-sm text-[#d0c6b4] mt-2">
          کانال‌های ارتباطی، شماره‌های تلفن پشتیبانی زائرین، ثبت انتقادات و پاسخ به پرسش‌های متداول
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Contact Info Card */}
        <div className="bg-white rounded-2xl p-6 border border-[#e2d7c5] shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-[#114232] border-r-4 border-[#c89234] pr-3">
            راه ارتباطی و دفتر مرکزی
          </h2>

          <div className="space-y-4 text-xs text-[#3a4a40]">
            <div className="flex items-start gap-3 bg-[#faf8f5] p-3.5 rounded-xl border border-[#e2d7c5]">
              <MapPin className="w-5 h-5 text-[#c89234] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#114232] mb-1">نشانی دفتر مرکزی:</strong>
                <span>{SOCIETY_INFO.address}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#faf8f5] p-3.5 rounded-xl border border-[#e2d7c5]">
              <Phone className="w-5 h-5 text-[#c89234] shrink-0" />
              <div>
                <strong className="block text-[#114232] mb-1">تلفن پشتیبانی شبانه‌روزی:</strong>
                <span className="font-mono text-sm font-bold text-[#114232] dir-ltr inline-block">{SOCIETY_INFO.hotline}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#faf8f5] p-3.5 rounded-xl border border-[#e2d7c5]">
              <Mail className="w-5 h-5 text-[#c89234] shrink-0" />
              <div>
                <strong className="block text-[#114232] mb-1">پست الکترونیک:</strong>
                <span>{SOCIETY_INFO.email}</span>
              </div>
            </div>

            <div className="bg-[#faf4e8] p-4 rounded-xl border border-[#c89234]/30 space-y-2">
              <span className="font-bold text-xs text-[#114232] block">سامانه پیامکی زائرین ۸:</span>
              <p className="text-[11px] text-[#5a6a60]">
                ارسال عدد ۸ به سامانه ۳۰۰۰۸۸ جهت دریافت فوری آدرس ایستگاه‌های اسکان و خدمات پزشکی در مسیر.
              </p>
            </div>
          </div>
        </div>

        {/* Feedback & Suggestions Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 border border-[#e2d7c5] shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-[#114232] border-r-4 border-[#c89234] pr-3">
            انتقادات و پیشنهادات
          </h2>

          {!feedbackSubmitted ? (
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">نام و نام خانوادگی *</label>
                  <input
                    type="text"
                    required
                    value={feedbackForm.fullName}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, fullName: e.target.value })}
                    placeholder="مثال: رضا احمدی"
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#114232] mb-1">شماره تلفن همراه *</label>
                  <input
                    type="tel"
                    required
                    value={feedbackForm.phone}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, phone: e.target.value })}
                    placeholder="۰۹۱۵۱۲۳۴۵۶۷"
                    className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#114232] mb-1">موضوع *</label>
                <select
                  value={feedbackForm.category}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, category: e.target.value })}
                  className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl px-3.5 py-2.5 text-xs text-[#114232]"
                >
                  <option value="انتقاد">انتقاد از خدمات ایستگاه یا اسکان</option>
                  <option value="پیشنهاد">پیشنهاد جهت بهبود خدمت‌رسانی</option>
                  <option value="تقدیر">تقدیر و تشکر از خادمان</option>
                  <option value="پیگیری">پیگیری پرونده ثبت‌نام یا بیمه</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#114232] mb-1">متن پیام / پیام شما *</label>
                <textarea
                  rows={4}
                  required
                  value={feedbackForm.message}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
                  placeholder="لطفا جزئیات نظر یا انتقاد خود را بنویسید..."
                  className="w-full bg-[#faf8f5] border border-[#e2d7c5] rounded-xl p-3 text-xs text-[#114232]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#114232] hover:bg-[#0c2f24] text-[#e5b35c] font-bold px-6 py-3 rounded-xl shadow-md text-xs inline-flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>ارسال پیام به بازرسی ستاد</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#114232] mx-auto" />
              <h3 className="font-bold text-lg text-[#114232]">پیام شما با موفقیت دریافت شد</h3>
              <p className="text-xs text-[#5a6a60]">واحد بازرسی ستاد در اسرع وقت پیام شما را بررسی خواهد کرد.</p>
              <button onClick={() => setFeedbackSubmitted(false)} className="text-xs font-bold text-[#c89234]">ارسال پیام جدید</button>
            </div>
          )}
        </div>

      </div>

      {/* FAQs Accordion */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2d7c5] shadow-sm space-y-6">
        <div className="border-r-4 border-[#c89234] pr-3">
          <h2 className="text-xl font-bold text-[#114232] flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#c89234]" />
            <span>پرسش‌های متداول زائرین و خادمین (FAQ)</span>
          </h2>
          <p className="text-xs text-[#5a6a60]">پاسخ به سوالات رایج درباره ثبت‌نام، اسکان، بیمه حوادث و زائران خارجی</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;

            return (
              <div key={idx} className="border border-[#e2d7c5] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-right p-4 bg-[#faf8f5] hover:bg-[#faf4e8] transition-colors flex justify-between items-center gap-4 text-xs sm:text-sm font-bold text-[#114232]"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#114232] text-[#e5b35c] text-xs flex items-center justify-center shrink-0">
                      ؟
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#c89234] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="p-4 text-xs text-[#3a4a40] leading-relaxed bg-white border-t border-[#e2d7c5]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
