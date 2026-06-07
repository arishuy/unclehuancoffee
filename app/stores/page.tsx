import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import StoreList from "./StoreList";
import { storesData } from "@/data/stores";

export const metadata: Metadata = {
  title: "Hệ Thống Cửa Hàng",
  description:
    "Tìm kiếm không gian Uncle Huan Coffee gần bạn nhất để tận hưởng những tách cà phê thượng hạng trong không gian mang hơi thở Âu Châu hiện đại.",
};

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

        {/* Search & Map Interactive Layout */}
        <StoreList stores={storesData} />
      </main>

      <Footer />
    </>
  );
}
