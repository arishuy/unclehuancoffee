export interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
  icon: string;
}

export interface CoreValue {
  icon: string;
  title: string;
  desc: string;
}

export const timelineEvents: TimelineEvent[] = [
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

export const coreValues: CoreValue[] = [
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
