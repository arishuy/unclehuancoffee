import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MenuContent from "./MenuContent";

export const metadata: Metadata = {
  title: "Thực Đơn",
  description:
    "Khám phá hương vị tinh túy từ những hạt cà phê được tuyển chọn kỹ lưỡng và các loại bánh ngọt nghệ thuật mang phong cách Âu Châu.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="py-16 md:py-24 text-center px-4">
        <h1 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-primary mb-4 tracking-[-0.02em]">
          Thực Đơn Của Chúng Tôi
        </h1>
        <p className="font-sans text-[18px] leading-[28px] text-secondary max-w-2xl mx-auto">
          Khám phá hương vị tinh túy từ những hạt cà phê được tuyển chọn kỹ
          lưỡng và các loại bánh ngọt nghệ thuật mang phong cách Âu Châu.
        </p>
      </section>

      <MenuContent />

      <Footer />
    </>
  );
}
