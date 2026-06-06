import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import StoreList from "./StoreList";

export const metadata: Metadata = {
  title: "Hệ Thống Cửa Hàng",
  description:
    "Tìm kiếm không gian Uncle Huan Coffee gần bạn nhất để tận hưởng những tách cà phê thượng hạng trong không gian mang hơi thở Âu Châu hiện đại.",
};

const storesData = [
  {
    name: "Cà Phê Cậu Huân",
    address: "657 Hai Bà Trưng, Hội An, Đà Nẵng",
    hours: "07:00 - 23:30",
    phone: "0905 417 794",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHReVS7PpUfJv1kvTJNzWj0pi2c8CdG9GZlbl53D3Ht2ORU9xZ_9g56rmqE9i_NQOU9j43fI-ZJJExIOoYLSXmOUbuTWQ_GDYkXej_TbGEJ6OxcLBI3uBffc-TAwI6490RHU6Q=s680-w680-h510-rw",
  },
  {
    name: "Uncle Huan Coffee",
    address: "71/26 Phan Chu Trinh, Hội An, Đà Nẵng",
    hours: "07:00 - 18:00",
    phone: "0777 815 773",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHLhswpyGbxEqJy63Ku4-glExItSBafYQu8iDRz0IeujRge6gqXj5iUx98MKRJzHRWVvFIpC5LFvGs3DKzlQgJArUq0OGEou9QuN54qNQyEyXie7755KJmGOgFbWIwpbpr9QhHChZK5DDav=s680-w680-h510-rw",
  },
  {
    name: "Uncle Huan Coffee & Restaurant",
    address: "61 Lê Lợi, Hội An, Đà Nẵng",
    hours: "07:00 - 23:00",
    phone: "0905 417 794",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCQF_g4_00eRZLk_ksH6_hgCyV_F-nPh-LgtyJIEodWmNi6uiKVXKJ0Eiz4sJiWx9zOhzgEnAoNpjbGNXuqeJvSuyepPhu0yHgE_8aTk3QoDnuJFmTFjDSxRGK73P5I1Vec1SUTJ9v0p8rbHhNZmdpCHkBhhsycvWQkYJfKzOGHG6k9ffqAhYEbaPv7XQHVSFUSAwSZ-62OA-KtDL6RmdG3K6468dV1Hsu6M3lLOtmyWWuLjvvmzhpk9WKRLmITcnTxVS7xhSgAA",
  },
];

export default function StoresPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="pt-16 pb-2 px-4 md:px-16 max-w-[1280px] mx-auto">
          <h1 className="font-serif text-[48px] leading-[56px] font-bold text-primary mb-4 tracking-[-0.02em]">
            Hệ Thống Cửa Hàng
          </h1>
          <p className="font-sans text-[18px] leading-[28px] text-secondary max-w-2xl">
            Tìm kiếm không gian Uncle Huan Coffee gần bạn nhất để tận hưởng
            những tách cà phê thượng hạng.
          </p>
        </section>

        {/* Search & Map Layout */}
        <section className="px-4 md:px-16 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20 md:pb-[120px] pt-8">
          {/* Left Panel */}
          <div className="lg:col-span-5 flex flex-col gap-2 overflow-hidden h-fit lg:max-h-[850px]">
            {/* Store List with Search and Filters */}
            <StoreList stores={storesData} />
          </div>

          {/* Right Panel: Map Placeholder */}
          <div className="lg:col-span-7 h-[500px] lg:h-full min-h-[500px] relative rounded-2xl overflow-hidden border border-outline-variant/30 shadow-inner">
            <div className="absolute inset-0 bg-[#f0f0ed]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD8KH8N9eVcrTnL6wbqAjvAPluF18ztlaVDWps6ymIDAEILNWiGm6RXDYZyLtm0corPA2eZuQgEfNMrxxWEoOYyZ2sHz1LkGmKPRJZADcyBFoj-c3Xgp7IvRjwgQkaYRZycoA1CAqV0tXzOKrW0c-vfyLAp9PtqGMY8HDK2EiV_XX50PozcExtShDqJIZmWHBTxjk172W3XCLJJUmdKLRBIKTLFHjeJpj9If6GiCA_4-wjWGRD-p9KRcM8EOSO3wW97petcykmdg"
                alt="Map of store locations"
                fill
                className="object-cover opacity-60 grayscale-[50%]"
              />
              {/* Map Markers */}
              <div className="absolute top-[30%] left-[40%] group cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <div className="map-marker-pulse" />
                  <span
                    className="material-symbols-outlined text-primary-container text-4xl relative z-10"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <div className="absolute bottom-full mb-2 bg-primary text-on-primary px-3 py-1 rounded text-[12px] leading-[16px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Uncle Huan - Đồng Khởi
                  </div>
                </div>
              </div>
              <div className="absolute top-[60%] left-[55%] group cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary-container text-4xl relative z-10"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <div className="absolute bottom-full mb-2 bg-primary text-on-primary px-3 py-1 rounded text-[12px] leading-[16px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Uncle Huan - Hồ Tây
                  </div>
                </div>
              </div>
              <div className="absolute top-[45%] left-[70%] group cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary-container text-4xl relative z-10"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <div className="absolute bottom-full mb-2 bg-primary text-on-primary px-3 py-1 rounded text-[12px] leading-[16px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Uncle Huan - Bạch Đằng
                  </div>
                </div>
              </div>
            </div>
            {/* Map Controls */}
            <div className="absolute bottom-6 right-6 flex flex-col gap-2">
              <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined">add</span>
              </button>
              <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined">remove</span>
              </button>
              <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-primary hover:bg-tertiary-fixed transition-colors">
                <span className="material-symbols-outlined">my_location</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
