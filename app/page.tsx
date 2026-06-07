import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import HomeCarousel from "./components/HomeCarousel";
import banner from "@/public/assets/image/IMG_7743.jpg";
import { featuredProducts, homeBrandValues, reviews } from "@/data/home";
import { storesData as stores } from "@/data/stores";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      {/* Hero Banner */}
      <header className="relative h-[600px] md:h-[921px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 animate-[subtle-zoom_20s_infinite_alternate]">
          <Image
            src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/696900747_1493504585900810_8692639260685981652_n.jpg?stp=dst-jpg_tt6&cstp=mx1900x2048&ctp=s1900x2048&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeELIPGQzAnKzVqQdKS5HHJOoIKymvcnBGyggrKa9ycEbE9x_cTBQ1e5-Hyxm_EsMb08-EO7sLYmCtI3DkCalS9u&_nc_ohc=nc9y6giu7CkQ7kNvwGNBuhY&_nc_oc=AdqjsuAUk-jC4GwPzCkmikMVRfgskWbWhQ885DfWSGn1wRMfFoU3TO_3Voha-PR8dtkgztRf1Nv1exnYQ2JR-t5t&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=MzwyJxibbMte8cdmzkbqGA&_nc_ss=7b2a8&oh=00_Af8U6zUm7tSMM2UEvwQ6hg_WFT3s3HaUK7nce2ZeD7LmYA&oe=6A2AAE8B"
            alt="Signature latte art in a botanical cafe"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 px-4 md:px-16 w-full max-w-[1280px] mx-auto text-on-primary">
          <h1 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold max-w-2xl tracking-[-0.02em] reveal">
            Hương vị nguyên bản – Khoảnh khắc trọn vẹn
          </h1>
          <p
            className="mt-6 font-sans text-[18px] leading-[28px] max-w-lg text-on-primary/90 reveal"
            style={{ transitionDelay: "200ms" }}
          >
            Đắm chìm trong sự tinh tế của hạt cà phê tuyển chọn và không gian
            đậm chất nghệ thuật giữa lòng phố thị.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 reveal"
            style={{ transitionDelay: "400ms" }}
          >
            <a
              href="/menu"
              className="bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-[0.75rem] font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold flex items-center gap-2 hover:bg-white hover:text-primary transition-colors"
            >
              Xem Menu{" "}
              <span className="material-symbols-outlined">menu_book</span>
            </a>
            <a
              href="/stores"
              className="border border-white text-white px-8 py-4 rounded-[0.75rem] font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Tìm cửa hàng
            </a>
          </div>
        </div>
      </header>

      {/* Featured Products */}
      <section className="py-20 md:py-[120px] px-4 md:px-16 max-w-[1280px] mx-auto">
        <div className="flex justify-between items-end mb-16 reveal">
          <div>
            <span className="text-tertiary font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase">
              Thực Đơn Đặc Biệt
            </span>
            <h2 className="font-serif text-[32px] leading-[40px] font-semibold mt-2">
              Sản Phẩm Nổi Bật
            </h2>
          </div>
          <a
            className="text-primary font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold border-b border-primary pb-1 hidden md:block"
            href="/menu"
          >
            Xem tất cả menu
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredProducts.map((product, i) => (
            <div
              key={product.name}
              className="group reveal"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-surface-container mb-6 relative rounded-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 text-[12px] leading-[16px] font-sans font-medium rounded-[0.75rem]">
                    {product.badge}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-[24px] leading-[32px] font-semibold">
                {product.name}
              </h3>
              <p className="text-secondary font-sans text-[16px] leading-[24px] mt-2">
                {product.desc}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-primary font-bold text-lg">
                  {product.price}
                </span>
                <button className="w-10 h-10 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Values */}
      <section className="bg-primary py-20 md:py-[120px] text-on-primary">
        <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 reveal">
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold mb-8 tracking-[-0.02em]">
                Cam kết từ tâm, chất lượng xứng tầm.
              </h2>
              <p className="font-sans text-[18px] leading-[28px] text-on-primary/70 mb-12">
                Chúng tôi không chỉ bán cà phê, chúng tôi mang đến một trải
                nghiệm văn hóa trọn vẹn thông qua từng chi tiết nhỏ nhất.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-4 gap-8">
              {homeBrandValues.map((item, i) => (
                <div
                  key={item.title}
                  className="p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors reveal"
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <span
                    className="material-symbols-outlined text-tertiary-fixed text-4xl mb-4"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                  <h4 className="font-serif text-[24px] leading-[32px] font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-on-primary/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-20 md:py-[120px] px-4 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="font-serif text-[32px] leading-[40px] font-semibold">
            Hệ Thống Cửa Hàng
          </h2>
          <p className="text-secondary mt-4">
            Tìm không gian Uncle Huan gần bạn nhất
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stores.map((store, i) => (
            <div
              key={store.name}
              className="border border-outline-variant group reveal overflow-hidden rounded-sm"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="h-64 overflow-hidden">
                <Image
                  src={store.image}
                  alt={store.name}
                  width={500}
                  height={320}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-[24px] leading-[32px] font-semibold text-primary">
                  {store.name}
                </h3>
                <p className="text-secondary mt-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                  {store.address}
                </p>
                <p className="text-secondary mt-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  {store.hours}
                </p>
                <button className="mt-6 w-full border border-primary py-2 font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:bg-primary hover:text-white transition-colors rounded-sm">
                  Chỉ đường
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center reveal">
          <a
            href="/stores"
            className="bg-primary text-white px-8 py-3 rounded-[0.75rem] font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:shadow-lg transition-all"
          >
            Xem tất cả cửa hàng
          </a>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 md:py-[120px] bg-surface-container overflow-hidden">
        <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
          <h2 className="font-serif text-[32px] leading-[40px] font-semibold text-center mb-16 reveal">
            Chia sẻ từ khách hàng
          </h2>
          <HomeCarousel reviews={reviews} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-[120px] px-4 md:px-16 max-w-[1280px] mx-auto reveal">
        <div className="bg-primary-container text-on-primary rounded-3xl p-12 md:p-24 relative overflow-hidden text-center md:text-left">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold mb-8 tracking-[-0.02em]">
              Ghé thăm cửa hàng gần bạn nhất ngay hôm nay
            </h2>
            <a
              href="/stores"
              className="inline-flex bg-tertiary-fixed text-on-tertiary-fixed px-10 py-4 rounded-[0.75rem] font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:scale-105 active:scale-95 transition-all items-center gap-3"
            >
              Tìm cửa hàng{" "}
              <span className="material-symbols-outlined">map</span>
            </a>
          </div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-fixed-dim rounded-full blur-[120px] opacity-20" />
        </div>
      </section>

      <Footer />
    </>
  );
}
