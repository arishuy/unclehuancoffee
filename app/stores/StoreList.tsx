"use client";

import { useState, useMemo, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface Store {
  name: string;
  address: string;
  hours: string;
  phone: string;
  image: string | StaticImageData;
}

interface StoreListProps {
  stores: Store[];
}

export default function StoreList({ stores }: StoreListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("Thành phố");
  const [selectedDistrict, setSelectedDistrict] = useState("Quận/Huyện");
  const [selectedStoreName, setSelectedStoreName] = useState<string>(
    stores[0]?.name || ""
  );
  const [isMapLoading, setIsMapLoading] = useState(false);

  // Trigger loading state when selected store changes
  useEffect(() => {
    setIsMapLoading(true);
  }, [selectedStoreName]);

  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      const matchesSearch =
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.address.toLowerCase().includes(searchTerm.toLowerCase());

      let matchesCity = true;
      if (selectedCity !== "Thành phố") {
        if (selectedCity === "Hồ Chí Minh") {
          matchesCity = store.address.includes("TP. HCM") || store.address.includes("Quận 1");
        } else {
          matchesCity = store.address.toLowerCase().includes(selectedCity.toLowerCase());
        }
      }

      let matchesDistrict = true;
      if (selectedDistrict !== "Quận/Huyện") {
        matchesDistrict = store.address.toLowerCase().includes(selectedDistrict.toLowerCase());
      }

      return matchesSearch && matchesCity && matchesDistrict;
    });
  }, [stores, searchTerm, selectedCity, selectedDistrict]);

  const selectedStore = useMemo(() => {
    return (
      stores.find((store) => store.name === selectedStoreName) ||
      filteredStores[0] ||
      stores[0]
    );
  }, [stores, filteredStores, selectedStoreName]);

  return (
    <section className="px-4 md:px-16 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20 md:pb-[120px] pt-8">
      {/* Left Panel */}
      <div className="lg:col-span-5 flex flex-col gap-4 overflow-hidden h-fit lg:max-h-[850px]">
        {/* Search Bar */}
        <div className="bg-surface-container-low p-6 rounded-xl space-y-4 shadow-sm border border-outline-variant/30">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input
              className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-sans text-[16px] leading-[24px]"
              placeholder="Tìm tên cửa hàng hoặc địa chỉ..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <select
              className="bg-surface border border-outline-variant rounded-lg py-2 px-3 font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-secondary focus:border-primary focus:outline-none cursor-pointer"
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setSelectedDistrict("Quận/Huyện"); // Reset district on city change
              }}
            >
              <option>Thành phố</option>
              <option value="Quảng Nam">Quảng Nam</option>
            </select>
            <select
              className="bg-surface border border-outline-variant rounded-lg py-2 px-3 font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-secondary focus:border-primary focus:outline-none cursor-pointer"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option>Quận/Huyện</option>
              {selectedCity === "Quảng Nam" && (
                <>
                  <option value="Hội An">Thành phố Hội An</option>
                </>
              )}
              {selectedCity === "Thành phố" && (
                <>
                  <option value="Hội An">Hội An</option>
                </>
              )}
            </select>
          </div>
        </div>

        {/* Store List */}
        <div className="space-y-4 overflow-y-auto pr-2 flex-grow max-h-[500px] lg:max-h-[600px] no-scrollbar">
          {filteredStores.length === 0 ? (
            <div className="text-center py-12 text-secondary font-sans">
              Không tìm thấy cửa hàng nào khớp với tìm kiếm của bạn.
            </div>
          ) : (
            filteredStores.map((store) => {
              const isSelected = store.name === selectedStoreName;
              return (
                <div
                  key={store.name}
                  onClick={() => setSelectedStoreName(store.name)}
                  className={`store-card group bg-surface border transition-all duration-300 p-4 rounded-xl flex gap-4 cursor-pointer ${isSelected
                    ? "border-tertiary-container bg-tertiary-fixed/10 shadow-md"
                    : "border-outline-variant/50 hover:border-tertiary-container hover:shadow-lg"
                    }`}
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-lg relative">
                    <Image
                      className="store-image object-cover transition-transform duration-500 group-hover:scale-105"
                      src={store.image}
                      alt={store.name}
                      fill
                      sizes="(max-width: 768px) 96px, 128px"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-[20px] leading-[28px] font-semibold text-primary group-hover:text-primary-container transition-colors">
                        {store.name}
                      </h3>
                      <p className="font-sans text-[14px] leading-[20px] text-secondary line-clamp-2 mt-1">
                        {store.address}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mt-2">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-sans text-[12px] leading-[16px] text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">
                            schedule
                          </span>{" "}
                          {store.hours}
                        </span>
                        <span className="font-sans text-[12px] leading-[16px] text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">
                            call
                          </span>{" "}
                          {store.phone}
                        </span>
                      </div>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                          store.name + " " + store.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="self-end font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary flex items-center gap-1 hover:text-tertiary-container transition-colors animate-[pulse_2s_infinite]"
                      >
                        Chỉ đường{" "}
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_outward
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Right Panel: Map Container */}
      <div className="lg:col-span-7 h-[500px] lg:h-full min-h-[500px] relative rounded-2xl overflow-hidden border border-outline-variant/30 shadow-inner bg-[#f0f0ed] flex flex-col">
        {selectedStore ? (
          <>
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                selectedStore.name + " " + selectedStore.address
              )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              onLoad={() => setIsMapLoading(false)}
              className={`w-full h-full border-0 transition-all duration-500 ${isMapLoading ? "opacity-30 blur-[2px]" : "opacity-100 blur-0"
                }`}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={selectedStore.name}
            />

            {/* Custom Overlay Card */}
            <div className="absolute top-4 left-4 z-10 hidden sm:block max-w-xs bg-white/90 backdrop-blur-md border border-outline-variant/30 p-5 rounded-2xl shadow-lg transition-all duration-300">
              <span className="font-sans text-[10px] leading-[14px] tracking-[0.05em] font-bold text-tertiary uppercase block mb-1">
                Cửa hàng đang chọn
              </span>
              <h4 className="font-serif text-[18px] leading-[24px] font-semibold text-primary">
                {selectedStore.name}
              </h4>
              <p className="font-sans text-[12px] leading-[18px] text-secondary mt-1.5 flex items-start gap-1">
                <span className="material-symbols-outlined text-[14px] mt-0.5 text-primary">
                  location_on
                </span>
                <span>{selectedStore.address}</span>
              </p>
              <div className="flex flex-col gap-1 mt-3 border-t border-outline-variant/20 pt-3 text-[12px] text-secondary">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">
                    schedule
                  </span>
                  {selectedStore.hours}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">
                    call
                  </span>
                  {selectedStore.phone}
                </span>
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  selectedStore.name + " " + selectedStore.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-1.5 mt-4 bg-primary text-white py-2 px-4 rounded-lg font-sans text-[12px] leading-[16px] font-bold hover:bg-primary/90 transition-colors uppercase tracking-[0.05em]"
              >
                Mở Bản Đồ Chỉ Đường
                <span className="material-symbols-outlined text-[14px]">
                  arrow_outward
                </span>
              </a>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-secondary font-sans">
            Chọn một cửa hàng để xem bản đồ
          </div>
        )}

        {/* Loading Spinner Overlay */}
        {isMapLoading && selectedStore && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-[1px] transition-opacity duration-300">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <span className="font-sans text-[12px] tracking-[0.05em] uppercase font-semibold text-primary/80 bg-white/85 px-4 py-2 rounded-full shadow-sm">
                Đang tải bản đồ...
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

