"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

const categories = [
  "Tất cả",
  "Café truyền thống",
  "Espresso",
  "Cold Brew",
  "Trà",
  "Đá xay",
  "Nước ép",
  "Bánh ngọt",
];

const products = [
  {
    name: "Phê Sữa Đá",
    price: "65.000đ",
    badge: "Best Seller",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    ingredients:
      "Cà phê Robusta Đắk Lắk, sữa đặc truyền thống, đá viên tinh khiết.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAWLceHN9_zPE-MSs21Jc1oMharf5bIquFtTMwl-hfZ3Xu63iyW4oMYvLOWRsKYTzIUu5pvJeJIWZvszdAQkLAkB70Yefp0psDR_z5hJuiPJd3eo6y0swuDlx6PH-YqNYAzmXzy35f9QqgNlk2ShiSOfUm_PYiWBo2ics4Y_49FiOgIzEt0t-lDnzm-D_m7mLWwxL-QRuf6YHz29j6w-zj2FiM3vz1A2sljhpQzWjMoY-J8ujDJBqGxMRJXNz0vUKk9eDo2FaEXQ",
  },
  {
    name: "Lavender Latte",
    price: "85.000đ",
    badge: "Signature",
    badgeColor: "bg-primary text-on-primary",
    ingredients:
      "Espresso thượng hạng, sữa tươi thanh trùng, siro hoa oải hương tự nhiên, nụ hoa khô.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMGndnzjyUh5YNHHbJxDTsngi4h89JEaPdytIrD1Zd5FN2VlI9I1mslKBuuA52LSqGk1pr4VnIdexI4Gtj2R0I7e2_8ybINZ3aEtqfgxx2RDc8VtuJUptn7ZbDjUIkYwTVzB_Tbt0kxUaQTh2a1PNa8W1niUhp07SA7Wwr6lg1T6U8CTWZgfhSLiNuOzh-RBcLB51-P4r_XMLwsSn31VySgNlFV39VdzLtloiNqGOVp8DHTmgUMTlDnTnMS16q545tHqB-TqrBVQ",
  },
  {
    name: "Cold Brew Cam Sả",
    price: "75.000đ",
    ingredients:
      "Cold brew ủ 18 tiếng, nước cam tươi, hương sả tự nhiên, thảo mộc.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBPkrY62TZbFZl1C_7I_rEpXR-zXQDj83N--KTZITXlIYW-d8usrQcL2jKi3BvROl5g-eIlHge6-taa-n-JZob9dUEZzihMHvQROb4xsWzyGEYsJXcCKpTctKu25IDZpIb73uZzT7T-Kz5dQUc-Jd9eJ7TVpniFsvOnM289GhR0awLIgOBwERkdimedeWHwGy7_9ZqgPABIXc-4JIdE3lpuORdq2kzxwYJmYym_TamfRotF818f6m4ZQQmeQIeZ4-3FOsQResKKw",
  },
  {
    name: "Almond Croissant",
    price: "55.000đ",
    badge: "Seasonal",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    ingredients:
      "Bột mì cao cấp, bơ Pháp, nhân kem hạnh nhân, hạnh nhân lát nướng giòn.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9Oae1BnRcPmBbhF8DYESa8dbI-ayw9YkiUs4guM-uLNFvsrmKK7lM2xA32JPuWHXPPkRKFfvr9QpdMzSzhCWFqwCPJmxOwlUsHQVuZyttZ1XdUoCJWWH2gGKrvez_LapvQ0WDnyDzSayo5cu3N-tfYCjWzs2Zj9150kjPqAlKfxW71t_u6ZoVm3ktgvpXHsA5OEfgso8agaqgkJK9vSFpC22zVpXeeJL3IjkG6E5zme76xiec3HgXxxEp5XJDX5_KSm8DpykSTQ",
  },
  {
    name: "Tart Socola 70%",
    price: "95.000đ",
    ingredients:
      "Socola đen Bỉ 70%, bơ Pháp, kem tươi, muối biển, lá vàng ăn được.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCu4vgv6ivQILtRZmhJJYMmg2FwB3GaoHxMCh6tAZv3UeFdXzK3PIlyA9zAio5BAC1Sq42LOsKmGFvl9gSC3vgNfjvoRHZK0zaLM1pzzBVOr97af1TARow8WrL4XpG2yjcTGnGlRhLvBBfjF3jpf4cgPKw-tWLG_dweDEu2Jog_tZs5FaZbf7eiaS9EfhXRBfF-2ND1ChTa1ACF4IF13o9YDvHh5zdYMp8OJIRd-rp68_dtFOEDuMpnCcOdF4f_iuZhs8RCvIQXOQ",
  },
  {
    name: "Matcha Latte Kyoto",
    price: "80.000đ",
    ingredients:
      "Bột matcha Uji Kyoto, sữa tươi Nhật Bản, đường mía tự nhiên.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxtCGCrK6fpx-T1dlhhS_kRT34tVmaboQ5yoZpWHTeEjyH670t-wqJ_i1m6B8J6STMS10pxzv6EwEwDbDWk0fQWT8CAlxtH34BDLz7m_Xt5e-UJcUY7lU87pDyUrIL9BHGSuU6iMivNs25x7-93ZTLQ7PMArxF_dm3WwtyS5cHx3ZO2sanmN4xoHQVARY244smFkmPzVJ0eza1flgqrZ7JchXiSy-LMPJvYO0RaSPGhTh1UFGRbpX5RZRy0XXV8cQcrg3yz4iwvQ",
  },
  {
    name: "Classic Tiramisu",
    price: "110.000đ",
    ingredients:
      "Bánh ladyfinger, mascarpone Ý, espresso, cacao Van Houten, rượu Marsala.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDl6-XM830Y7Tga5UbdZXcZ2YogTspB0-SObcfWaTfPpjHNNf0cBFX8tYzMtvslNah3Y_u_uQu_htJdZkLVmefZWeOM8ke3sYC7kHkQ3PSqvDUz_JYMBb7eK2qrMgZPNrV5FIGfqLzPZkAZwIuMOfV_xtneL0s-uw2GPZz27Qx-XDA8zghIAsFqbmnnsY3hZmDiJqPuK2cv9Awi0QKTTpy93c23hftxo-Px7nXjGPSzeOqg3ug2yh-slNc-qCwRvDmeRw6t97mt5A",
  },
  {
    name: "Double Espresso",
    price: "45.000đ",
    ingredients:
      "Hạt Arabica Specialty đơn vùng, chiết xuất 2 shot espresso đậm đặc.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvuq7c585FdIIJ-PKm_GKQlmVlGim4OJLh8p9ZjarK-zb8hrlotmc7lso9rl1ENU3tc2JYuH_qqcEkB0LWPVpFmyBohqhtH-C59FEDrsBGfORbfADDJk9gF08Sa05PApMcyflG_c192X6UmZJ_6Ut_7vq5ubz-J5AKY8O-KGl69XyrPLBbonVKLQZcMMgxcu7WYYN-fqzKtaFt60esRaDZ0fzbKn43xCcy8Us2KV1kap5nLmJYAOpge6m1IQ9oMKQSniX-Q5oT3g",
  },
];

interface ModalData {
  name: string;
  price: string;
  ingredients: string;
  image: string;
}

export default function MenuContent() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [modal, setModal] = useState<ModalData | null>(null);

  const closeModal = useCallback(() => {
    setModal(null);
    document.body.style.overflow = "auto";
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeModal]);

  const openModal = (product: ModalData) => {
    setModal(product);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      {/* Category Filter */}
      <section className="sticky top-16 md:top-20 z-40 bg-background/80 backdrop-blur-sm border-b border-outline-variant/30 mb-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 overflow-x-auto no-scrollbar">
          <div className="flex gap-8 py-4 whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold pb-2 transition-colors ${
                  activeCategory === cat
                    ? "text-primary border-b-2 border-tertiary-container"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-16 pb-20 md:pb-[120px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card group bg-surface-container-lowest rounded-xl overflow-hidden cursor-pointer transition-all duration-500 border border-transparent"
              onClick={() => openModal(product)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="product-image object-cover transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {product.badge && (
                  <div
                    className={`absolute top-4 left-4 ${product.badgeColor} px-3 py-1 rounded-[0.75rem] text-[12px] leading-[16px] font-sans font-medium`}
                  >
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-[24px] leading-[32px] font-semibold text-primary mb-2">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[16px] leading-[24px] text-secondary">
                    {product.price}
                  </span>
                  <button className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">
                      add
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Detail Modal */}
      {modal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="modal-overlay absolute inset-0" onClick={closeModal} />
          <div className="bg-surface-bright w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl relative z-10 shadow-2xl flex flex-col md:flex-row">
            <button
              className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white rounded-full p-2 text-primary transition-colors"
              onClick={closeModal}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="md:w-1/2 aspect-[4/5] md:aspect-auto relative min-h-[300px]">
              <Image
                src={modal.image}
                alt={modal.name}
                fill
                className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
              <div className="mb-8">
                <h2 className="font-serif text-[32px] leading-[40px] font-bold text-primary mb-2">
                  {modal.name}
                </h2>
                <span className="font-serif text-[24px] leading-[32px] font-semibold text-secondary">
                  {modal.price}
                </span>
              </div>
              <div className="mb-8">
                <h4 className="font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary uppercase mb-3">
                  Thành phần
                </h4>
                <p className="font-sans text-[16px] leading-[24px] text-secondary">
                  {modal.ingredients}
                </p>
              </div>
              <div className="mb-8">
                <h4 className="font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary uppercase mb-3">
                  Kích cỡ
                </h4>
                <div className="flex gap-4">
                  {["Nhỏ", "Vừa", "Lớn"].map((size, i) => (
                    <button
                      key={size}
                      className={`px-6 py-2 border rounded-[0.75rem] font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold transition-all ${
                        i === 0
                          ? "border-primary bg-primary text-on-primary"
                          : "border-outline-variant hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-8">
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:bg-primary-container transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">
                    shopping_bag
                  </span>
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
