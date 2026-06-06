import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import HomeCarousel from "./components/HomeCarousel";
import banner from "@/public/assets/image/IMG_7743.jpg";
import coso3 from "@/public/assets/image/co-so/co-so-3.jpg";
import caphesua from "@/public/assets/image/drink/IMG_5137.png";
import caphemuoi from "@/public/assets/image/drink/IMG_7740.jpg";
import caphedua from "@/public/assets/image/drink/IMG_7739.jpg";

const featuredProducts = [
  {
    name: "Egg Coffee",
    desc: "Cà phê ủ lạnh 24 giờ mang hương vị mượt mà, thoảng hương trái cây chín.",
    price: "65.000đ",
    badge: "Bestseller",
    image: caphesua,
  },
  {
    name: "Salted Coffee",
    desc: "Espresso đậm đà hòa quyện cùng lớp bọt sữa mịn màng được vẽ nghệ thuật.",
    price: "55.000đ",
    image: caphemuoi
  },
  {
    name: "Coconut Coffee",
    desc: "Bột matcha Uji thượng hạng kết hợp cùng sữa hạnh nhân hữu cơ.",
    price: "75.000đ",
    image: caphedua
  },
  {
    name: "Croissant Bơ Pháp",
    desc: "Bánh sừng bò nướng giòn với 100% bơ lạt từ vùng Normandie.",
    price: "45.000đ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_kY2l4oZdvv2P6qKuU0ZVKpA35_hd4Pnc68Ph3Y1v7XjFHJYm_gW7fSMLCQ2kjk3-XnpELTu-GfUqyZQp7hTwhZDg6H1yG5S-r-kaPAIxa-DRn88RF6UhvyDXAz4_QFz29WCvgjiRpnUq7MIy2F-dDSOQqhERnOHgpVP448OU3nce8OlepAd9PHX7XshDGxLGrjR2RkiaU06qI8fvVKJ-67q_I2e1OU7aenpoC-k8_ZlIuh6OTmZ1fWDqsqM5Vhpr_th22gxEwA",
  },
  {
    name: "Espresso Tonic",
    desc: "Sự kết hợp bùng nổ giữa espresso và nước tonic cao cấp cùng cam khô.",
    price: "70.000đ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX7pLZSByIQdUIHidO6cjsOU72M9Zsy67qszoUmvBFJ9-RTdUS4ikVYpWEvwQ0tGd-J_CWejkn2m5xQvxP11d3vp1-waL8zFSFZA9k9hHpa3lBriLiFlRa2Cvj5QXxokTuDfe-8dfwrvca7h1P4wA8s1WAxDLZuTwSPYnA5dOQupy0-ChFrO32-yKR7oldzQ3TLz-xHsA9fLNB3s0Spi4trkOM9ib2XJqfW0nGpC58BoeCBFOxQln7KEsUnPiT-7zuuqzg6cthdg",
  },
  {
    name: "Hand-Drip Coffee",
    desc: "Cà phê pha thủ công V60 tôn vinh trọn vẹn đặc tính của hạt Specialty.",
    price: "85.000đ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYe-GIDRdgyybOeIRzpOLzT9xe3Ql61Jp4hRZeaWjtKSXU5l0-ZORu0E6Pq6kAiWTY2JSRGbWCrD1b2tDEMjTV6nkAGaR59LT0Fe6vSK9rhh3gv59JrHfmkcqx6lg7048sDSZlItrcMF9gJIR6S1ovjsU9QyXDYntnXocs7sbxDB-6WjuPqNz6cPUcWkJNl1vz7ZKo7PzLwgYAVxelGAP7bdq2OdIaXQuZu9Ur24dfLBVoyZ1Ltp1w3t2ZrH7I8WWZCP9dbDadrA",
  },
];

const stores = [
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
    image: coso3,
  },
];

const reviews = [
  {
    text: "Không gian ở đây thực sự rất chill, cà phê Cold Brew có vị thanh nhẹ rất đặc biệt. Chắc chắn sẽ quay lại!",
    name: "Minh Anh",
    role: "Khách hàng thân thiết",
  },
  {
    text: "Lần đầu tiên mình thấy một quán cà phê chú trọng vào tính bền vững như vậy. Matcha latte rất ngon!",
    name: "Trần Hoàng",
    role: "Freelance Designer",
  },
  {
    text: "Nhân viên phục vụ cực kỳ tận tâm. Mình được tư vấn rất kỹ về các loại hạt Specialty tại đây.",
    name: "Ngọc Diệp",
    role: "Food Blogger",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      {/* Hero Banner */}
      <header className="relative h-[600px] md:h-[921px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 animate-[subtle-zoom_20s_infinite_alternate]">
          <Image
            src={banner}
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
              {[
                {
                  icon: "eco",
                  title: "Hạt cà phê tuyển chọn",
                  desc: "Sourcing trực tiếp từ những nông hộ bền vững tại Đà Lạt và Ethiopia.",
                },
                {
                  icon: "skillet",
                  title: "Pha chế thủ công",
                  desc: "Mỗi tách cà phê là một tác phẩm nghệ thuật được pha chế bởi những Barista tâm huyết.",
                },
                {
                  icon: "potted_plant",
                  title: "Không gian thư giãn",
                  desc: "Thiết kế hiện đại kết hợp mảng xanh, mang lại sự bình yên giữa lòng thành phố.",
                },
                {
                  icon: "volunteer_activism",
                  title: "Phục vụ tận tâm",
                  desc: "Chúng tôi luôn lắng nghe và chăm chút cho từng khoảnh khắc của bạn tại cửa hàng.",
                },
              ].map((item, i) => (
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
