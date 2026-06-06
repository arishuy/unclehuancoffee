"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("sending");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="lg:col-span-7 bg-surface p-8 md:p-12 border border-outline-variant/40 rounded-2xl shadow-sm">
      <h3 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] text-primary font-semibold mb-2">
        Gửi Tin Nhắn
      </h3>
      <p className="font-sans text-[16px] leading-[24px] text-secondary mb-10">
        Để lại thông tin bên dưới, chuyên viên của chúng tôi sẽ phản hồi bạn trong vòng 24 giờ làm việc.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary block">
              Họ và Tên <span className="text-error">*</span>
            </label>
            <input
              required
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-sans text-[16px] leading-[24px] form-input-focus transition-all"
              placeholder="Nguyễn Văn A"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={status === "sending"}
            />
          </div>
          <div className="space-y-2">
            <label className="font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary block">
              Số điện thoại
            </label>
            <input
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-sans text-[16px] leading-[24px] form-input-focus transition-all"
              placeholder="090 123 4567"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={status === "sending"}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary block">
            Địa chỉ Email <span className="text-error">*</span>
          </label>
          <input
            required
            className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-sans text-[16px] leading-[24px] form-input-focus transition-all"
            placeholder="example@email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "sending"}
          />
        </div>
        
        <div className="space-y-2">
          <label className="font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary block">
            Lời nhắn của bạn <span className="text-error">*</span>
          </label>
          <textarea
            required
            className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-sans text-[16px] leading-[24px] form-input-focus transition-all resize-none"
            placeholder="Chúng tôi có thể giúp gì cho bạn?"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={status === "sending"}
          />
        </div>
        
        <button
          type="submit"
          disabled={status === "sending"}
          className={`w-full md:w-auto px-12 py-4 font-sans text-[14px] leading-[20px] tracking-[0.1em] font-semibold uppercase hover:shadow-xl active:scale-95 transition-all duration-300 rounded-lg ${
            status === "sending"
              ? "bg-outline text-white/50 cursor-not-allowed"
              : status === "success"
              ? "bg-tertiary-container text-on-tertiary-container"
              : "bg-primary text-on-primary hover:bg-primary-container"
          }`}
        >
          {status === "sending"
            ? "Đang gửi..."
            : status === "success"
            ? "Đã nhận yêu cầu!"
            : "Gửi yêu cầu"}
        </button>
      </form>
    </div>
  );
}
