import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MOKEBS_DATA, WALKING_ROUTES } from '../../data/mockData';
import { Tent, MapPin, Compass, Phone, Users, ShieldAlert } from 'lucide-react';

interface InteractiveMapProps {
  selectedAxis?: string;
  onSelectMokeb?: (mokebId: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ selectedAxis, onSelectMokeb }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersGroupRef = useRef<L.LayerGroup | null>(null);
  
  const [filterService, setFilterService] = useState<string>('all');
  const [activeMokebCount, setActiveMokebCount] = useState<number>(MOKEBS_DATA.length);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize Leaflet Map if not already initialized
    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [36.2880, 59.6158], // Mashhad Haram
        zoom: 9,
        scrollWheelZoom: true,
      });

      // OpenStreetMap Tiles with subtle style
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map);

      // Add Haram Special Marker
      const haramIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: #b8860b; color: white; padding: 6px 12px; border-radius: 20px; font-weight: bold; border: 2px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.3); font-size: 12px; font-family: Vazirmatn; white-space: nowrap;">✨ حرم مطهر رضوی</div>`,
        iconSize: [120, 30],
        iconAnchor: [60, 15],
      });
      L.marker([36.2880, 59.6158], { icon: haramIcon }).addTo(map)
        .bindPopup('<strong style="font-family:Vazirmatn;">حرم مطهر حضرت علی بن موسی الرضا (ع)</strong><br/>مقصد نهایی زائران پیاده');

      // Draw Routes Polyline
      WALKING_ROUTES.forEach((route) => {
        const polyline = L.polyline(route.coordinates, {
          color: '#114232',
          weight: 4,
          opacity: 0.8,
          dashArray: '8, 8',
        }).addTo(map);

        polyline.bindPopup(`
          <div style="font-family: Vazirmatn; text-align: right; direction: rtl;">
            <strong style="color: #114232;">${route.title}</strong><br/>
            <span>مسافت: ${route.totalKm} کیلومتر | ایستگاه فعال: ${route.activeStationsCount}</span>
          </div>
        `);
      });

      markersGroupRef.current = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;
    if (!map || !markersGroupRef.current) return;

    // Clear existing markers in group
    markersGroupRef.current.clearLayers();

    // Filter Mokebs
    const filtered = MOKEBS_DATA.filter((m) => {
      const matchAxis = !selectedAxis || selectedAxis === 'all' || m.axis.includes(selectedAxis);
      const matchService = filterService === 'all' || m.services.includes(filterService as any);
      return matchAxis && matchService;
    });

    setActiveMokebCount(filtered.length);

    filtered.forEach((mokeb) => {
      const mokebIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: #114232; color: #e5b35c; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid #c89234; box-shadow: 0 2px 5px rgba(0,0,0,0.3); font-weight: bold; font-size: 14px;">🏕️</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const marker = L.marker(mokeb.coordinates, { icon: mokebIcon });

      const popupContent = `
        <div style="font-family: Vazirmatn; text-align: right; direction: rtl; padding: 4px; max-width: 240px;">
          <h4 style="margin: 0 0 6px 0; color: #114232; font-weight: bold; font-size: 14px;">${mokeb.name}</h4>
          <p style="margin: 2px 0; font-size: 12px; color: #555;">📍 ${mokeb.location}</p>
          <p style="margin: 2px 0; font-size: 12px; color: #114232;">⚡ ظرفیت روزانه: <strong>${mokeb.capacityDaily.toLocaleString('fa-IR')} نفر</strong></p>
          <p style="margin: 2px 0; font-size: 12px; color: #555;">👤 مسئول: ${mokeb.manager}</p>
          <div style="margin-top: 8px; padding-top: 6px; border-top: 1px solid #eee; display: flex; flex-wrap: wrap; gap: 4px;">
            ${mokeb.services.map(s => `<span style="background: #faf4e8; color: #b8860b; border: 1px solid #e2d7c5; border-radius: 4px; padding: 2px 6px; font-size: 10px;">${s}</span>`).join('')}
          </div>
          <a href="tel:${mokeb.phone}" style="display: block; margin-top: 8px; background-color: #114232; color: white; text-align: center; padding: 4px; border-radius: 4px; text-decoration: none; font-size: 11px;">📞 تماس: ${mokeb.phone}</a>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on('click', () => {
        if (onSelectMokeb) onSelectMokeb(mokeb.id);
      });

      markersGroupRef.current?.addLayer(marker);
    });

  }, [selectedAxis, filterService]);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-[#e2d7c5] p-4 sm:p-6 space-y-4">
      {/* Map Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-[#faf8f5] p-3 rounded-xl border border-[#e2d7c5]/60">
        <div className="flex items-center gap-2 text-sm text-[#114232] font-semibold">
          <Tent className="w-5 h-5 text-[#c89234]" />
          <span>نقشه زنده ایستگاه‌های صلواتی ({activeMokebCount} موکب فعال)</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[#5a6a60]">فیلتر خدمات:</span>
          <select
            value={filterService}
            onChange={(e) => setFilterService(e.target.value)}
            className="bg-white border border-[#c89234]/40 rounded-lg px-2.5 py-1.5 text-[#114232] font-medium focus:outline-none focus:ring-2 focus:ring-[#114232]"
          >
            <option value="all">همه خدمات</option>
            <option value="اسکان">فقط دارای اسکان</option>
            <option value="پذیرایی گرم">فقط پذیرایی گرم</option>
            <option value="درمان">واحدهای درمانی و اورژانس</option>
            <option value="حمام">سرویس حمام و بهداشتی</option>
          </select>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative w-full h-[400px] sm:h-[480px] rounded-xl overflow-hidden border border-[#e2d7c5] shadow-inner">
        <div ref={mapContainerRef} className="w-full h-full" />
      </div>

      {/* Map Legend */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#3a4a40] pt-2 border-t border-[#f3ede2]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#b8860b] border border-white shadow-sm inline-block"></span>
          <span>حرم مطهر رضوی</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#114232] border border-[#c89234] shadow-sm inline-block"></span>
          <span>ایستگاه صلواتی (موکب)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-6 h-1.5 bg-[#114232] inline-block border-t border-b border-dashed border-[#c89234]"></span>
          <span>مسیر اصلی پیاده‌روی</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-red-600" />
          <span>پست‌های اورژانس جاده‌ای</span>
        </div>
      </div>
    </div>
  );
};
