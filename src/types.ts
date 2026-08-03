export type PageType = 'home' | 'about' | 'services' | 'media' | 'contributions' | 'contact';

export type HomeVariant = 
  | 'bento-standard'      // طرح ۱: پورتال جامع (بنتو)
  | 'news-centered'       // طرح ۲: اطلاع‌رسانی و اخبار محور
  | 'service-portal'      // طرح ۳: میز خدمت زائر و خادم
  | 'campaign-donations'  // طرح ۴: پویش‌ها و نذورات مردمی
  | 'pilgrimage-guide'    // طرح ۵: راهنمای جاده‌ای و مینیمال زیارتی
  | 'custom-combined';    // طرح ۶: طرح سفارشی (ترکیبی جامع)

export type ServicesSubTab = 
  | 'khadim-register' 
  | 'zaer-register' 
  | 'mokeb-register' 
  | 'mokebs-list' 
  | 'walking-routes' 
  | 'public-transport' 
  | 'map';

export type MediaSubTab = 
  | 'news-announcements'  // اخبار و اطلاعیه‌ها
  | 'activity-reports'    // گزارش فعالیت‌ها
  | 'revayat-khedmat'     // روایت خدمت (داستان‌ها و خاطرات)
  | 'photos'              // گالری تصاویر
  | 'videos'              // گزارش‌های ویدئویی و مستند
  | 'publications';       // نشریات، بولتن‌ها و گزارش‌ها

export type AboutSubTab = 'intro' | 'mission' | 'members' | 'org-chart';

export type NewsCategory = 
  | 'گزارش عملکرد'
  | 'اطلاعیه و فراخوان'
  | 'روایت خدمت'
  | 'اخبار زائر'
  | 'فرهنگی و آموزشی'
  | 'بین‌الملل';

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  source: string;
  image: string;
  category: NewsCategory;
  featured?: boolean;
  tags?: string[];
}

export interface RevayatStory {
  id: string;
  title: string;
  narratorName: string;
  narratorRole: string; // e.g., 'خادم ۱۰ ساله ایستگاه ملک‌آباد', 'زائر پیاده از پاکستان'
  summary: string;
  fullStory: string;
  date: string;
  image: string;
  audioDuration?: string;
  likesCount?: number;
}

export interface PublicationItem {
  id: string;
  title: string;
  issueNumber: string;
  publishDate: string;
  pagesCount: number;
  coverImage: string;
  description: string;
  downloadUrl?: string;
  fileSizeMb: number;
}

export interface PhotoAlbum {
  id: string;
  title: string;
  category: string;
  date: string;
  coverImage: string;
  photosCount: number;
  images: string[];
}

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  category: string;
  date: string;
  videoUrl?: string;
  description?: string;
}

export interface Mokeb {
  id: string;
  name: string;
  manager: string;
  province: string;
  location: string;
  axis: string; // e.g., 'نیشابور - مشهد', 'قوچان - مشهد', 'سرخس - مشهد'
  distanceToMashhadKm: number;
  capacityDaily: number;
  services: ('اسکان' | 'پذیرایی گرم' | 'درمان' | 'سرویس بهداشتی' | 'حمام' | 'واکس صلواتی' | 'خیاطی و کفاشی' | 'فرهنگی')[];
  phone: string;
  coordinates: [number, number]; // [lat, lng]
}

export interface WalkingRoute {
  id: string;
  title: string;
  axis: string;
  totalKm: number;
  estimatedDays: number;
  activeStationsCount: number;
  description: string;
  keyCities: string[];
  tips: string[];
  coordinates: [number, number][]; // route path polyline
}

export interface TransportOption {
  type: 'metro' | 'bus' | 'terminal';
  title: string;
  lineOrNumber: string;
  stations: string[];
  operatingHours: string;
  description: string;
}

export interface PilgrimRegistration {
  trackingCode?: string;
  type: 'individual' | 'caravan';
  fullName: string;
  nationalId: string;
  phone: string;
  province: string;
  city: string;
  gender: 'male' | 'female';
  caravanName?: string;
  caravanSize?: number;
  entryAxis: string;
  expectedArrivalDate: string;
  needsLodging: boolean;
  needsInsurance: boolean;
}

export interface KhadimRegistration {
  fullName: string;
  nationalId: string;
  phone: string;
  age: number;
  gender: 'male' | 'female';
  province: string;
  specialty: 'medical' | 'lodging' | 'catering' | 'transport' | 'cultural' | 'technical' | 'general';
  availableDays: string[];
  pastExperienceYears: number;
}

export interface MokebRegistration {
  mokebName: string;
  managerName: string;
  phone: string;
  province: string;
  city: string;
  requestedAxis: string;
  requestedStationKm: number;
  proposedCapacity: number;
  offeredServices: string[];
}

export interface ContributionItem {
  title: string;
  targetAmountTomans: number;
  raisedAmountTomans: number;
  donorCount: number;
  unitPriceTomans?: number;
  unitLabel?: string;
  description: string;
  iconName: string;
  id: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: 'ثبت‌نام' | 'بیمه' | 'اسکان' | 'زائران خارجی' | 'مواکب';
}
