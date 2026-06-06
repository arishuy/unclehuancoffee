"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

interface Store {
  name: string;
  address: string;
  hours: string;
  phone: string;
  image: string;
}

interface StoreListProps {
  stores: Store[];
}

export default function StoreList({ stores }: StoreListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("Thành phố");
  const [selectedDistrict, setSelectedDistrict] = useState("Quận/Huyện");
  const [selectedStoreIndex, setSelectedStoreIndex] = useState<number | null>(0);

  // Extract cities and districts if we want to make options dynamic,
  // or use static ones matching the mock data.
  // storesData has:
  // Uncle Huan - Đồng Khởi: 151 Đồng Khởi, Bến Nghé, Quận 1, TP. HCM -> City: Hồ Chí Minh, District: Quận 1
  // Uncle Huan - Hồ Tây: 10 Phố Từ Hoa, Quảng An, Tây Hồ, Hà Nội -> City: Hà Nội, District: Quận Tây Hồ
  // Uncle Huan - Bạch Đằng: 190 Bạch Đằng, Hải Châu 1, Đà Nẵng -> City: Đà Nẵng, District: Quận Hải Châu (or similar)

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

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      {/* Search Bar */}
      {/* <div className="bg-surface-container-low p-6 rounded-xl space-y-4 shadow-sm border border-outline-variant/30">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-sans text-[16px] leading-[24px]"
            placeholder="Tìm tên cửa hàng, thành phố hoặc quận..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <select
            className="bg-surface border border-outline-variant rounded-lg py-2 px-3 font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-secondary focus:border-primary focus:outline-none"
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              setSelectedDistrict("Quận/Huyện"); // Reset district on city change
            }}
          >
            <option>Thành phố</option>
            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
          </select>
          <select
            className="bg-surface border border-outline-variant rounded-lg py-2 px-3 font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-secondary focus:border-primary focus:outline-none"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option>Quận/Huyện</option>
            {selectedCity === "Hồ Chí Minh" && (
              <>
                <option value="Quận 1">Quận 1</option>
                <option value="Quận 3">Quận 3</option>
              </>
            )}
            {selectedCity === "Hà Nội" && (
              <>
                <option value="Tây Hồ">Quận Tây Hồ</option>
                <option value="Hoàn Kiếm">Quận Hoàn Kiếm</option>
              </>
            )}
            {selectedCity === "Đà Nẵng" && (
              <>
                <option value="Hải Châu">Quận Hải Châu</option>
              </>
            )}
            {selectedCity === "Thành phố" && (
              <>
                <option value="Quận 1">Quận 1</option>
                <option value="Tây Hồ">Quận Tây Hồ</option>
                <option value="Hải Châu">Quận Hải Châu</option>
              </>
            )}
          </select>
        </div>
      </div> */}

      {/* Store List */}
      <div className="space-y-4 overflow-y-auto pr-2 flex-grow max-h-[500px] lg:max-h-[600px] no-scrollbar">
        {filteredStores.length === 0 ? (
          <div className="text-center py-12 text-secondary font-sans">
            Không tìm thấy cửa hàng nào khớp với tìm kiếm của bạn.
          </div>
        ) : (
          filteredStores.map((store, index) => {
            const isSelected = selectedStoreIndex === index;
            return (
              <div
                key={store.name}
                onClick={() => setSelectedStoreIndex(index)}
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
                    <button className="self-end font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary flex items-center gap-1 hover:text-tertiary-container transition-colors">
                      Chỉ đường{" "}
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_outward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
