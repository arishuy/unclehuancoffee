"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useCallback, useEffect } from "react";
import { categories, products } from "@/data/menu";

interface ModalData {
  name: string;
  price: string;
  ingredients: string;
  image: string | StaticImageData;
}

export default function MenuContent() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [modal, setModal] = useState<ModalData | null>(null);

  const filteredProducts = activeCategory === "Tất cả"
    ? products
    : products.filter((product) => product.category === activeCategory);

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
      <section className="sticky top-16 z-40 bg-background/80 backdrop-blur-sm border-b border-outline-variant/30 mb-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 overflow-x-auto no-scrollbar">
          <div className="flex gap-8 py-4 whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold pb-2 transition-colors ${activeCategory === cat
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
          {filteredProducts.map((product) => (
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
                      className={`px-6 py-2 border rounded-[0.75rem] font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold transition-all ${i === 0
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
