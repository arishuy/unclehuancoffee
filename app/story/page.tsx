import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import eggCoffeeImg from "@/public/assets/image/IMG_7743.jpg";

export const metadata: Metadata = {
  title: "Câu Chuyện Thương Hiệu",
  description:
    "Khám phá hành trình đầy cảm hứng của Uncle Huan Coffee, từ những ngày đầu đặt nền móng cho hương vị cafe nguyên bản đến biểu tượng di sản thế kỷ 21.",
};

const timelineEvents = [
  {
    year: "2012",
    title: "Khởi Đầu",
    desc: "Cửa hàng đầu tiên ra đời tại một góc nhỏ phố cổ, mang theo hoài bão về một hương vị cafe nguyên bản, nguyên chất không pha tạp.",
    icon: "coffee",
  },
  {
    year: "2016",
    title: "Nghệ Thuật Botanical",
    desc: "Chính thức áp dụng phong cách 'Modern Organic' vào không gian, kết hợp hài hòa giữa kiến trúc Âu Châu tinh tế và thiên nhiên xanh mát.",
    icon: "forest",
  },
  {
    year: "2021",
    title: "Vươn Tầm Flagship",
    desc: "Khai trương flagship store tại khu trung tâm đắc địa nhất, khẳng định vị thế thương hiệu cafe cao cấp hàng đầu Việt Nam.",
    icon: "public",
  },
];

const coreValues = [
  {
    icon: "verified",
    title: "Chất Lượng",
    desc: "Hạt cafe đạt chuẩn Specialty thượng hạng, được tuyển chọn và kiểm soát nghiêm ngặt từ nông trại tới tay người thưởng thức.",
  },
  {
    icon: "brush",
    title: "Sáng Tạo",
    desc: "Không ngừng thử nghiệm các phương pháp rang và pha chế mới lạ để đánh thức những nốt hương độc bản ẩn sâu trong hạt cafe.",
  },
  {
    icon: "favorite",
    title: "Tận Tâm",
    desc: "Mỗi vị khách ghé thăm đều là người thân thiết của Uncle Huan. Sự hài lòng trọn vẹn của bạn là thước đo thành công của chúng tôi.",
  },
  {
    icon: "eco",
    title: "Bền Vững",
    desc: "Cam kết đồng hành cùng nông hộ địa phương, bảo vệ môi trường bằng cách tối giản rác thải và sử dụng bao bì tự phân hủy.",
  },
];

export default function StoryPage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 scale-105 animate-[subtle-zoom_20s_infinite_alternate]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkLyYZsN2IBZzHZjMhB4ZT6md4LP4X7GZD8z4_OL_HyI0tOJ6Z8jP57miS7cUMKDOWxfLL5Bmu5j_2a3dZkYYnn5ii9U7UAEbCgM_tycCbX0RgmS23m3d6gfQE3rORGGrhVeLEUKfARUC8zU2Kyehy2ffWyyGrInqKDa43pTK1MvmH6hUPNPFHG4AT2WEzJDoTLf7K5Rr4oauqjSQXWzg8FFw04QFtqjeCZ_B3Z705E97fh5FRCZcIOnpt4szQBNXChQq0urr04g"
              alt="Artisanal coffee brewing heritage"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/45" />
          </div>
          <div className="relative z-10 px-4 md:px-16 max-w-[1280px] mx-auto w-full text-white">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold rounded-full mb-6">
                Since 2012
              </span>
              <h1 className="font-serif text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] font-bold mb-6 tracking-[-0.02em]">
                Hành trình tạo nên những tách cafe đầy cảm hứng
              </h1>
              <p className="font-sans text-[18px] leading-[28px] text-white/90 max-w-xl">
                Nơi nghệ thuật rang xay truyền thống giao thoa với hơi thở hiện
                đại của khu vườn thực vật thành thị.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision (Bento Style) */}
        <section className="px-4 md:px-16 py-20 md:py-[120px] max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Mission Content */}
            <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 rounded-2xl flex flex-col justify-center border border-outline-variant/20 shadow-sm reveal">
              <span className="text-secondary font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase mb-4">
                Sứ Mệnh
              </span>
              <h2 className="font-serif text-[26px] md:text-[32px] leading-[34px] md:leading-[40px] text-primary mb-6 font-semibold">
                Cà phê Việt xứng đáng có vị thế đặc biệt trên bản đồ thế giới
              </h2>
              <div className="space-y-4 font-sans text-[16px] leading-[26px] text-on-surface-variant">
                <p>
                  Chúng tôi tin rằng cà phê Việt Nam xứng đáng có một vị trí đặc biệt trên bản đồ cà phê thế giới.
                </p>
                <p>
                  Vì vậy, Uncle Huân Coffee cam kết gìn giữ những giá trị nguyên bản của hạt cà phê Việt, tạo ra những sản phẩm chất lượng bằng sự tận tâm và trách nhiệm, đồng thời lan tỏa vẻ đẹp của văn hóa Việt Nam thông qua từng trải nghiệm cà phê.
                </p>
                <p>
                  Mỗi ly cà phê được phục vụ là một bước tiến trên hành trình đưa hương vị Việt Nam vượt qua mọi biên giới.
                </p>
              </div>
            </div>

            {/* Mission Image */}
            <div className="lg:col-span-5 relative h-80 lg:h-auto min-h-[300px] rounded-2xl overflow-hidden shadow-sm reveal">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhPWso2VxKt2eUdj_a5dMz0tN7qawXDRaKjVTHX03tgBjeEgQggtVT63exDIU9BJz9Z8bJJGSzM1yYJ4zDMMQ98lt5UrsQG2BI_5kcbmTKKrvMHlu0wBrVG71wa0mZ1oXeXNoTpNguqTmwqkplihCvOx9emcfr8XFVU-IpvryS65ru7biCNDKkufR7FsLyajIIEqXLdjsLaw4aEiYn1Zr1CGwTLZXqbnZQ7Z1GPdqqUn84dMtoDb0kC3rdNhL-5vWJPrR4XrAexQ"
                alt="Organic coffee plantation hand-harvesting"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Vision Image */}
            <div className="lg:col-span-5 relative h-80 lg:h-auto min-h-[300px] rounded-2xl overflow-hidden shadow-sm order-last lg:order-none reveal">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbe63YZTr5VlIVxcXFD1NG9EEebiYcBuNiJlOMurHMkEXUQhpI2FOHvGuPipcXU4aqPd4RhnOfOOvxBPYlIvA9bQYAHtD8_00YeT6y2y77nkERFazAMPgujIZH4b4aKsnUTkiy0nmGAHkZNm2Hf4F6Z29IPClMJM40eBkLtVHuhcCq8iIbgFiIp8za-4dqHYbOwXQWE__tjUk7hhvezTxzqbxceODws-4zyILD5gYAMF8YcFEqYvyv4dDcNa0Q2mVqJQiotESsWA"
                alt="Uncle Huan Botanical cafe layout"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Vision Content */}
            <div className="lg:col-span-7 bg-primary text-on-primary p-8 md:p-12 rounded-2xl flex flex-col justify-center reveal">
              <span className="text-tertiary-fixed font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase mb-4">
                Tầm Nhìn
              </span>
              <h2 className="font-serif text-[26px] md:text-[32px] leading-[34px] md:leading-[40px] text-tertiary-fixed mb-6 font-semibold">
                Khát vọng đưa tinh hoa cà phê Việt Nam ra thế giới
              </h2>
              <p className="font-sans text-[16px] leading-[26px] text-on-primary/80">
                Từ một quán cà phê nhỏ tại Hội An, Uncle Huân Coffee nuôi dưỡng khát vọng trở thành cầu nối đưa tinh hoa cà phê Việt Nam đến với những người yêu cà phê trên khắp thế giới, để mỗi tách cà phê không chỉ là một thức uống mà còn là câu chuyện về con người, văn hóa và niềm tự hào Việt Nam.
              </p>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="bg-surface-container-lowest py-20 md:py-[120px] border-y border-outline-variant/20">
          <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
            <div className="text-center mb-20 reveal">
              <h2 className="font-serif text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] text-primary mb-4 font-semibold">
                Dòng Chảy Lịch Sử
              </h2>
              <p className="text-secondary font-sans text-[16px] leading-[24px]">
                Mỗi dấu mốc là một bước tiến của niềm đam mê và sự cam kết
              </p>
            </div>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />

              <div className="space-y-16 md:space-y-24">
                {timelineEvents.map((event, i) => (
                  <div
                    key={event.year}
                    className={`flex flex-col md:flex-row items-center reveal`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {/* Event Content for Desktop Left (even index) */}
                    <div
                      className={`md:w-1/2 w-full text-center md:text-right md:pr-16 order-2 md:order-1 ${i % 2 === 1 ? "md:invisible md:h-0 md:p-0 md:m-0" : ""
                        }`}
                    >
                      <h3 className="font-serif text-[24px] leading-[32px] text-primary font-semibold">
                        {event.title}
                      </h3>
                      <p className="text-secondary font-sans text-[16px] leading-[24px] mt-2">
                        {event.desc}
                      </p>
                    </div>

                    {/* Timeline Marker */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-tertiary-fixed border-4 border-surface-container-lowest order-1 md:order-2 shadow-sm my-4 md:my-0">
                      <span
                        className="material-symbols-outlined text-on-tertiary-fixed text-[20px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {event.icon}
                      </span>
                    </div>

                    {/* Event Content for Desktop Right (odd index) */}
                    <div
                      className={`md:w-1/2 w-full text-center md:text-left md:pl-16 order-3 ${i % 2 === 0 ? "md:invisible md:h-0 md:p-0 md:m-0" : ""
                        }`}
                    >
                      <h3 className="font-serif text-[24px] leading-[32px] text-primary font-semibold">
                        {event.title}
                      </h3>
                      <p className="text-secondary font-sans text-[16px] leading-[24px] mt-2">
                        {event.desc}
                      </p>
                    </div>

                    {/* Mobile Year Badge (Only visible on mobile or helper for visual alignment) */}
                    <div className="absolute top-0 right-4 font-serif text-[36px] text-primary/10 select-none pointer-events-none hidden md:block">
                      {event.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Egg Coffee Story */}
        <section className="px-4 md:px-16 py-20 md:py-[120px] max-w-[1280px] mx-auto border-t border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Egg Coffee Image */}
            <div className="lg:col-span-5 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-lg reveal">
              <Image
                src={eggCoffeeImg}
                alt="Signature egg coffee of Uncle Huan Coffee"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Egg Coffee Content */}
            <div className="lg:col-span-7 flex flex-col justify-center reveal">
              <span className="text-secondary font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase mb-4 block">
                Câu Chuyện Di Sản
              </span>
              <h2 className="font-serif text-[32px] md:text-[38px] leading-[40px] md:leading-[48px] text-primary mb-6 font-semibold">
                Cà Phê Trứng – Hương Vị Và Tình Yêu
              </h2>
              <div className="space-y-4 font-sans text-[16px] leading-[26px] text-on-surface-variant">
                <p>
                  Bạn đã từng thưởng thức cà phê trứng ở nhiều nơi, cảm nhận được hương vị đặc trưng của nó. Nhưng đằng sau tách cà phê trứng thơm ngon ấy là một câu chuyện đầy ý nghĩa, ngọt ngào như chính vị béo ngậy của thức uống này.
                </p>
                <p>
                  Cà phê trứng có nguồn gốc từ Hà Nội, gắn liền với cái tên Nguyễn Văn Giảng – người đầu tiên tạo nên danh tiếng cho món cà phê độc đáo này. Tương truyền rằng, vào thời điểm khó khăn, khi sữa tươi trở nên khan hiếm, ông Giảng đã thử nghiệm dùng lòng đỏ trứng gà để thay thế, đánh bông lên cùng với đường và sữa đặc, rồi kết hợp với cà phê đậm đà. Không ngờ rằng sự sáng tạo này đã tạo nên một hương vị đặc biệt: lớp kem trứng béo mịn quyện với vị đắng nhẹ của cà phê, tạo thành một thức uống vừa lạ vừa hấp dẫn.
                </p>
                <p>
                  Cũng có một câu chuyện khác kể lại rằng, vợ ông Giảng bị bệnh và cần bổ sung trứng mỗi ngày, nhưng vì ăn mãi sinh ra ngán, ông đã tìm cách chế biến món trứng theo nhiều kiểu khác nhau để vợ có thể dễ dàng thưởng thức hơn. Và từ tình yêu thương ấy, món cà phê trứng ra đời – không chỉ đơn thuần là một thức uống mà còn chứa đựng sự quan tâm, chăm sóc của người chồng dành cho vợ.
                </p>
                <p>
                  Tại Uncle Huân Coffee, chúng tôi tiếp nối câu chuyện đầy cảm xúc này với mong muốn mang đến cho bạn một ly cà phê trứng chuẩn vị truyền thống. Chúng tôi cam kết sử dụng chỉ lòng đỏ trứng gà tươi kết hợp với cà phê Việt Nam đậm đà, không pha thêm bất kỳ hương liệu hay phụ gia nào, đảm bảo hương vị thuần khiết và sức khỏe cho người dùng.
                </p>
                <p>
                  Hơn cả một ly cà phê, chúng tôi mong rằng khi đến với Uncle Huân, bạn sẽ cảm nhận được tình yêu, sự trân trọng và tinh thần của người Việt Nam trong từng giọt cà phê trứng thơm ngon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery (Asymmetric Layout) */}
        <section className="bg-primary py-20 md:py-[120px] overflow-hidden text-on-primary">
          <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
            <div className="mb-16 reveal">
              <span className="text-tertiary-fixed font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase">
                Góc Ảnh
              </span>
              <h2 className="font-serif text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] mt-2 font-semibold">
                Khoảnh Khắc Uncle Huan
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
              {/* Image 1: Large Box */}
              <div className="sm:col-span-2 sm:row-span-2 rounded-2xl overflow-hidden relative shadow-md reveal">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWiyzn1pHt9-kInsrufzWsY0wJQWg3tdpPoNmZhNvLfm8Ezr8nEAv5hqfCDKds8bGeeMR2iCuuJ5B3RSgvXgwCjsNBOP7bVBkNO-MnlRKGw_T08K4I6tIFX59Kqng24wPh2hpyim_xz7WIZntMwIHSJT6DGwH4T7M5o5venOjzKj-7MGnLTMmjDlk1NDdQc46FGuM5CqfK8d2TsKmOj-lnN9gS93vI75Zt9Tb3Eoq_iqTDU8IQ5Tg1DNgnedQ3HfSZvCjbUnKkNA"
                  alt="Slow living space at Uncle Huan"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Image 2: Small Box */}
              <div className="rounded-2xl overflow-hidden relative shadow-md reveal">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVEvkYg4IssMwEtAiCeU-Cmwg_b8kKRlZSQ-A8EYQn9ZGD9Ay5g-A88dEmlIiN-_UPIsaZM05ATkWan1xwZkJQdJ-ePw6B79YqrbbUvPIcdaWSxc_CqzU1_mn59pBb82MnPPsnpEfSp7azWwJkFWqxstazdK4CkADAznHEMx5sAumY8CHdbmRwuiauD4hwkjTR9RhRS_Xk0fyfYcFiSU4fBb8YwvZLQiC7HrHr0tznKxAQdziu9dT9PhU3oaxFfiI0SLb6-QAUNQ"
                  alt="Espresso extraction detail"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Image 3: Tall Box */}
              <div className="sm:row-span-2 rounded-2xl overflow-hidden relative shadow-md reveal">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPLvkExynA7dOXVPjeF7AKEjQ9OxTl_-zAIR7MaWkHRkgNtgHpebGoz9-961o57TaClLR8GaVVYhC-eT1yCYrDuli3PLIOzIjGGjMy6FsUa1YSu-PZk5LPsx07x9akSrCNlNLVWT4K6Y_xoq7rGkvPrgBVY6-JrxRHMMvEYANGRChB_AtydTWn-uQp-evognb3UYiwhv9o9QMVygxq_b0iNNdvlOYeg5WCdzkS7flEMacJ92OxsGZ1HW2kOc-MRlr_Ki08UcT2Tg"
                  alt="Specialty roasting process"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Image 4: Small Box */}
              <div className="rounded-2xl overflow-hidden relative shadow-md reveal">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARzfHAFSMXNAJqd_6xxGUdYzMbqDQfYDrXwAh1blEoUHURNOs-chJyO1SNweSTKcvMlm5nVKooGZrXAfJrjdxipn4ETCD8GBGXjzUuEHQM0l2weGYMYFonG_XqHtmSg9kMvL82OgvhgsCWLp7oew_Re1H2wfHEGOUqXj-M48JuHvaLRGCq4jwL6v0lizFTeVkdiCsN2T8cQ-4w8DJivBfznZeMSE1qC431JGaFtLlQUHT1EblIqcVXmccmoCkonHomodDMR28UkA"
                  alt="Premium latte art cup"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
