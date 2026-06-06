import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Liên Hệ",
  description:
    "Kết nối với Uncle Huan Coffee. Chúng tôi luôn sẵn lòng lắng nghe ý kiến đóng góp và chia sẻ những câu chuyện từ bạn.",
};

const atmosphereImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKviR-9DC6P5NskIiIzlW7q_Al10FZ2CxGYYHGZyOGGnF0vb0gqlDushmz9TwqzP7uss8fWrdRZ8OTSdFgfJ4vy_yfxnKKvYfDMGPC6I7eGzSbZiVUVUY9L-fKQiJzHnM3D1PcpchDRSz6ioFZ_HuNEnu1Cd0_teW0at1ahK1YbXeJZ4LzNLwj3Y3FgEqTrdw6Tpqsxx6O_07W4v7TAdj3G5Qxg0il7Y8fW6Qujm--D5oDtl-nDCRZVWlwI0iXGq-i4Eetwn6uyw",
    alt: "Morning coffee cup table shadows",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuArTS2ypW6JlzjvsetJ9-eUChKY0T8HFFiwx8sP35wJguy6Dh7xs_Rl8jAUbE4_aiYKK_H73n5jCkiQAybqWHMC8jkZ-mpbTKFtc8WssFT4bOsbHnYnl6BbtyKJQRoDFwG85ACCQeima18qghQEtQp6XclOVndkBinSbxKxA6FcVaWOh9udX13QmAK2qB6SjOiFOYdGrpooxEDpR7QGdfo5JZXs-QQycUIoCEbM4XPPS1XTObLplVPQAcSLSbuyJJEBVghV2FuaFA",
    alt: "Barista pouring latte art details",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJEw9zROw48Z_vDc3Wpj0DMbSqHmLwimZI9REGgl_Fx20O9UN_9tB4fMl0MElcDa4RC8ZxwEyizSmsYI21GAgPfrlAmA1sVUMsV5dzdbxP0ISAxryezFawVyTV0XcJV6WBs0cS2c-dzSxiQJfvCQb6pHCpvBEjjJZUElhKjRzV1cQxI0zHYDiJXYABuCngxau8TPYpYBX8iQgwh_tMLaA-HJLHXrIAXiZrOCuW3fbocYHAExNFiIz_p9HCpoAKhlxORMWpqt3s9g",
    alt: "Uncle Huan storefront architectural window",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      <main className="min-h-screen">
        {/* Page Header & Breadcrumb */}
        <section className="pt-16 pb-6 px-4 md:px-16 max-w-[1280px] mx-auto">
          <nav className="mb-6 flex items-center gap-2 text-secondary font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold">
            <span>Trang chủ</span>
            <span className="material-symbols-outlined text-[12px]">
              chevron_right
            </span>
            <span className="text-primary font-bold">Liên hệ</span>
          </nav>
          <h1 className="font-serif text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-bold text-primary mb-4 tracking-[-0.02em]">
            Kết Nối Với Chúng Tôi
          </h1>
          <p className="font-sans text-[18px] leading-[28px] text-secondary max-w-2xl">
            Chúng tôi luôn sẵn lòng lắng nghe ý kiến đóng góp và những câu chuyện
            từ bạn. Hãy để Uncle Huan đồng hành cùng khoảnh khắc của bạn.
          </p>
        </section>

        {/* Contact Content Grid */}
        <section className="px-4 md:px-16 max-w-[1280px] mx-auto pb-20 md:pb-[120px] pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Cards */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              {/* Card 1: Direct Contact */}
              <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/40 hover:shadow-lg transition-all duration-500 group reveal">
                <h3 className="font-serif text-[24px] leading-[32px] text-primary font-semibold mb-6">
                  Thông Tin Liên Lạc
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="font-sans text-[12px] leading-[16px] text-secondary uppercase tracking-wider font-semibold">
                        Hotline
                      </p>
                      <p className="font-serif text-[20px] leading-[28px] text-primary font-semibold">
                        0905 417 794 / 0777 815 773
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="font-sans text-[12px] leading-[16px] text-secondary uppercase tracking-wider font-semibold">
                        Email
                      </p>
                      <p className="font-sans text-[16px] leading-[24px] text-primary font-medium">
                        nguyencaohuan14@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Social Media Info */}
              <div className="bg-primary text-on-primary p-8 rounded-2xl reveal">
                <h3 className="font-serif text-[24px] leading-[32px] font-semibold mb-6">
                  Mạng Xã Hội
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/unclehuancoffee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label="Website"
                  >
                    <svg
                      className="w-4 h-4 text-white fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/unclehuan.coffee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-4 h-4 text-white fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
                <p className="mt-8 font-sans text-[15px] leading-[22px] text-on-primary/70">
                  Theo dõi chúng tôi để cập nhật những câu chuyện mới nhất về hạt
                  cà phê Specialty và phong cách sống Modern Organic.
                </p>
              </div>

              {/* Card 3: Team Image with Quote */}
              <div className="relative h-[280px] md:h-[320px] overflow-hidden rounded-2xl group shadow-sm reveal">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8mCZw9NpxWiWDODyXGzV3fTRrvopFtDq_Lh7VOCCI96V1epGzxapp-8EGGHP-68fHCbrzo_OR4qV_3yi-ZQ4FvN40SwtDXL33GjC9f5QVR-0PValuQWV2GxjOsetzvLyiXYA5cPx1qYSShtKiub0AOFOJzOpD6UX_lhxrhaP3eEs_wGQNfSg20V7GdOgxCxiLaY5KmXAX0k5rtEBzrm16uDdLUmznuyqxYSrtE4nMFRZ6qgjmXtDa3xIoiZQsx9M-tU6KaGRG5g"
                  alt="Uncle Huan Barista Team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent flex items-end p-8" />
                <div className="absolute bottom-8 left-8 right-8 z-10 text-white">
                  <p className="font-serif text-[18px] md:text-[20px] leading-[26px] italic font-semibold">
                    &ldquo;Tận tâm trong từng tách cà phê.&rdquo;
                  </p>
                  <p className="font-sans text-[12px] leading-[16px] text-white/70 mt-2 font-medium tracking-[0.05em] uppercase">
                    Đội ngũ Barista Uncle Huan
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Message Form */}
            <ContactForm />
          </div>
        </section>

        {/* Atmosphere / Aesthetics Grid */}
        <section className="py-20 md:py-[120px] bg-secondary-container/10 border-t border-outline-variant/10">
          <div className="px-4 md:px-16 max-w-[1280px] mx-auto text-center mb-16 reveal">
            <span className="font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-tertiary uppercase block mb-4">
              Ghé thăm chúng tôi
            </span>
            <h2 className="font-serif text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] text-primary font-semibold">
              Không Gian Tìm Lại Bản Thân
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 max-w-[1280px] mx-auto">
            {atmosphereImages.map((img, i) => (
              <div
                key={img.src}
                className={`aspect-[3/4] overflow-hidden rounded-2xl relative shadow-md group reveal ${i === 1 ? "md:-translate-y-6" : ""
                  }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
