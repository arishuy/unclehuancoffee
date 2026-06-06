"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-primary text-on-primary mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-16 py-20 w-full max-w-[1280px] mx-auto">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link
            href="/"
            className="font-serif text-[24px] leading-[32px] font-semibold text-on-primary block mb-6"
          >
            Uncle Huan Coffee
          </Link>
          <p className="font-sans text-[16px] leading-[24px] text-on-primary/70 mb-8">
            Nơi hội tụ của những tâm hồn yêu cà phê và vẻ đẹp thuần khiết từ
            thiên nhiên.
          </p>
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
        </div>

        {/* About */}
        <div className="flex flex-col gap-4">
          <h5 className="font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-tertiary-fixed mb-2">
            Về chúng tôi
          </h5>
          <Link
            href="/story"
            className="text-on-primary/70 hover:text-on-primary transition-opacity"
          >
            Story
          </Link>
          <Link
            href="/stores"
            className="text-on-primary/70 hover:text-on-primary transition-opacity"
          >
            Sustainability
          </Link>
          <a
            href="#"
            className="text-on-primary/70 hover:text-on-primary transition-opacity"
          >
            Careers
          </a>
          <a
            href="#"
            className="text-on-primary/70 hover:text-on-primary transition-opacity"
          >
            Press
          </a>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-4">
          <h5 className="font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-tertiary-fixed mb-2">
            Hỗ trợ
          </h5>
          <a
            href="#"
            className="text-on-primary/70 hover:text-on-primary transition-opacity"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-on-primary/70 hover:text-on-primary transition-opacity"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-on-primary/70 hover:text-on-primary transition-opacity"
          >
            Shipping
          </a>
          <a
            href="#"
            className="text-on-primary/70 hover:text-on-primary transition-opacity"
          >
            FAQ
          </a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h5 className="font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-tertiary-fixed mb-2">
            Đăng ký nhận tin
          </h5>
          <p className="text-on-primary/70 mb-4">
            Nhận ưu đãi sớm nhất và thông tin về các dòng cà phê mới.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              className="bg-white/10 border border-white/20 text-white rounded-[0.75rem] px-4 py-2 flex-1 focus:ring-tertiary-fixed focus:border-tertiary-fixed placeholder:text-white/40"
              placeholder="Email của bạn"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-2 rounded-[0.75rem] font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:opacity-90 transition-opacity"
            >
              {subscribed ? "✓" : "Gửi"}
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 md:px-16 py-8 max-w-[1280px] mx-auto text-center md:text-left text-on-primary/50 text-[12px] leading-[16px]">
        © 2024 Uncle Huan Café. All rights reserved.
      </div>
    </footer>
  );
}
