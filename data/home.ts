import caphesua from "@/public/assets/image/drink/IMG_5137.png";
import caphemuoi from "@/public/assets/image/drink/IMG_7740.jpg";
import caphedua from "@/public/assets/image/drink/IMG_7739.jpg";
import { StaticImageData } from "next/image";

export interface FeaturedProduct {
  name: string;
  desc: string;
  price: string;
  badge?: string;
  image: string | StaticImageData;
}

export interface HomeBrandValue {
  icon: string;
  title: string;
  desc: string;
}

export interface Review {
  text: string;
  name: string;
  role: string;
}

export const featuredProducts: FeaturedProduct[] = [
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
    image: caphemuoi,
  },
  {
    name: "Coconut Coffee",
    desc: "Bột matcha Uji thượng hạng kết hợp cùng sữa hạnh nhân hữu cơ.",
    price: "75.000đ",
    image: caphedua,
  },
  {
    name: "Croissant Bơ Pháp",
    desc: "Bánh sừng bò nướng giòn với 100% bơ lạt từ vùng Normandie.",
    price: "45.000đ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_kY2l4oZdvv2P6qKuU0ZVKpA35_hd4Pnc68Ph3Y1v7XjFHJYm_gW7fSMLCQ2kjk3-XnpELTu-GfUqyZQp7hTwhZDg6H1yG5S-r-kaPAIxa-DRn88RF6UhvyDXAz4_QFz29WCvgjiRpnUq7MIy2F-dDSOQqhERnOHgpVP448OU3nce8OlepAd9PHX7XshDGxLGrjR2RkiaU06qI8fvVKJ-67q_I2e1OU7aenpoC-k8_ZlIuh6OTmZ1fWDqsqM5Vhpr_th22gxEwA",
  },
  {
    name: "Espresso Tonic",
    desc: "Sự kết hợp bùng nổ giữa espresso và nước tonic cao cấp cùng cam khô.",
    price: "70.000đ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCX7pLZSByIQdUIHidO6cjsOU72M9Zsy67qszoUmvBFJ9-RTdUS4ikVYpWEvwQ0tGd-J_CWejkn2m5xQvxP11d3vp1-waL8zFSFZA9k9hHpa3lBriLiFlRa2Cvj5QXxokTuDfe-8dfwrvca7h1P4wA8s1WAxDLZuTwSPYnA5dOQupy0-ChFrO32-yKR7oldzQ3TLz-xHsA9fLNB3s0Spi4trkOM9ib2XJqfW0nGpC58BoeCBFOxQln7KEsUnPiT-7zuuqzg6cthdg",
  },
  {
    name: "Hand-Drip Coffee",
    desc: "Cà phê pha thủ công V60 tôn vinh trọn vẹn đặc tính của hạt Specialty.",
    price: "85.000đ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYe-GIDRdgyybOeIRzpOLzT9xe3Ql61Jp4hRZeaWjtKSXU5l0-ZORu0E6Pq6kAiWTY2JSRGbWCrD1b2tDEMjTV6nkAGaR59LT0Fe6vSK9rhh3gv59JrHfmkcqx6lg7048sDSZlItrcMF9gJIR6S1ovjsU9QyXDYntnXocs7sbxDB-6WjuPqNz6cPUcWkJNl1vz7ZKo7PzLwgYAVxelGAP7bdq2OdIaXQuZu9Ur24dfLBVoyZ1Ltp1w3t2ZrH7I8WWZCP9dbDadrA",
  },
];

export const homeBrandValues: HomeBrandValue[] = [
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
];

export const reviews: Review[] = [
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
