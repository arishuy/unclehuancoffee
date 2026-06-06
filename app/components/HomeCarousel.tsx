"use client";

import { useRef, useState, useEffect } from "react";

interface Review {
  text: string;
  name: string;
  role: string;
}

export default function HomeCarousel({ reviews }: { reviews: Review[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - el.offsetLeft);
      setScrollLeft(el.scrollLeft);
    };
    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX) * 2;
    };

    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div
      ref={ref}
      className="flex gap-8 overflow-x-auto no-scrollbar snap-x pb-8 cursor-grab active:cursor-grabbing"
    >
      {reviews.map((review, i) => (
        <div
          key={i}
          className="min-w-[300px] md:min-w-[400px] snap-center bg-white p-10 rounded-xl shadow-sm reveal"
          style={{ transitionDelay: `${(i + 1) * 100}ms` }}
        >
          <div className="flex text-tertiary-container mb-4">
            {[...Array(5)].map((_, s) => (
              <span
                key={s}
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <p className="font-sans text-[18px] leading-[28px] italic mb-6">
            &quot;{review.text}&quot;
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-xl">
                person
              </span>
            </div>
            <div>
              <p className="font-bold">{review.name}</p>
              <p className="text-[12px] leading-[16px] text-secondary">
                {review.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
