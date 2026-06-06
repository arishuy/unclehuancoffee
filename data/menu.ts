import caphesua from "@/public/assets/image/drink/IMG_5137.png";
import caphemuoi from "@/public/assets/image/drink/IMG_7740.jpg";
import caphedua from "@/public/assets/image/drink/IMG_7739.jpg";
import eggCoffeeImg from "@/public/assets/image/IMG_7743.jpg";
import { StaticImageData } from "next/image";

export const categories = [
  "Tất cả",
  "Cà phê & Trà",
  "Nước ép & Sinh tố",
  "Đá xay & Soft Drink",
  "Cocktail & Rượu",
  "Khai vị & Điểm tâm",
  "Món chính & Pizza",
  "Món ăn bản địa",
  "Bánh & Tráng miệng",
];

export interface Product {
  name: string;
  price: string;
  badge?: string;
  badgeColor?: string;
  ingredients: string;
  image: string | StaticImageData;
  category: string;
}

export const products: Product[] = [
  // Cà phê & Trà
  {
    name: "Phê Sữa Đá",
    price: "65.000đ",
    badge: "Best Seller",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    ingredients: "Cà phê Robusta Đắk Lắk truyền thống chiết xuất phin, sữa đặc hảo hạng, đá viên.",
    image: caphesua,
    category: "Cà phê & Trà",
  },
  {
    name: "Cà Phê Trứng",
    price: "65.000đ",
    badge: "Best Seller",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    ingredients: "Cà phê đậm đà kết hợp lớp kem trứng đánh bông mịn, béo ngậy đặc trưng Hà Nội.",
    image: eggCoffeeImg,
    category: "Cà phê & Trà",
  },
  {
    name: "Cà Phê Muối",
    price: "65.000đ",
    badge: "Signature",
    badgeColor: "bg-primary text-on-primary",
    ingredients: "Cà phê espresso hòa quyện cùng sữa đặc và lớp kem muối mặn dịu êm.",
    image: caphemuoi,
    category: "Cà phê & Trà",
  },
  {
    name: "Cà Phê Cốt Dừa",
    price: "60.000đ",
    badge: "Best Seller",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    ingredients: "Cà phê Robusta thơm nồng quyện với cốt dừa xay đá tuyết mát lạnh béo thơm.",
    image: caphedua,
    category: "Cà phê & Trà",
  },
  {
    name: "Espresso",
    price: "55.000đ",
    ingredients: "Hạt Arabica Specialty đơn vùng chiết xuất áp suất cao đậm vị.",
    image: "https://images.unsplash.com/photo-151097252790b-af4f982c7e67?q=80&w=600&auto=format&fit=crop",
    category: "Cà phê & Trà",
  },
  {
    name: "Cà Phê Bạc Xỉu",
    price: "65.000đ",
    ingredients: "Nhiều sữa tươi thanh trùng thơm béo hòa chút cà phê phin đậm đà.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop",
    category: "Cà phê & Trà",
  },
  {
    name: "Latte",
    price: "70.000đ",
    ingredients: "Double shot espresso cùng sữa tươi đánh nóng mịn màng và nghệ thuật latte art.",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?q=80&w=600&auto=format&fit=crop",
    category: "Cà phê & Trà",
  },
  {
    name: "Cappuccino",
    price: "70.000đ",
    ingredients: "Espresso phối hợp sữa nóng và lớp bọt sữa dày xốp rắc bột cacao.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop",
    category: "Cà phê & Trà",
  },
  {
    name: "Trà Đào Cam Sả",
    price: "70.000đ",
    ingredients: "Trà đen ủ lạnh, cam tươi cắt lát, đào ngâm giòn và sả tươi đập dập.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop",
    category: "Cà phê & Trà",
  },
  {
    name: "Trà Gừng Mật Ong",
    price: "60.000đ",
    ingredients: "Gừng tươi giã ấm, mật ong rừng tự nhiên và trà xanh hữu cơ.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop",
    category: "Cà phê & Trà",
  },

  // Nước ép & Sinh tố
  {
    name: "Nước Ép Dưa Hấu",
    price: "65.000đ",
    ingredients: "Dưa hấu tươi nguyên chất ép lạnh giữ trọn vị ngọt mát tự nhiên.",
    image: "https://images.unsplash.com/photo-1589733901241-5e8a40070c10?q=80&w=600&auto=format&fit=crop",
    category: "Nước ép & Sinh tố",
  },
  {
    name: "Nước Ép Cam",
    price: "65.000đ",
    ingredients: "Cam sành vắt tay tươi mới, cung cấp dồi dào Vitamin C.",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=600&auto=format&fit=crop",
    category: "Nước ép & Sinh tố",
  },
  {
    name: "Sinh Tố Xoài",
    price: "65.000đ",
    ingredients: "Xoài chín cát Hoà Lộc thơm ngọt xay nhuyễn mịn cùng sữa tươi béo ngậy.",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=600&auto=format&fit=crop",
    category: "Nước ép & Sinh tố",
  },
  {
    name: "Sinh Tố Dừa",
    price: "75.000đ",
    ingredients: "Cùi dừa xiêm non xay nhuyễn cùng sữa đặc và nước dừa thanh ngọt.",
    image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?q=80&w=600&auto=format&fit=crop",
    category: "Nước ép & Sinh tố",
  },
  {
    name: "Uncle Huan Smoothie",
    price: "70.000đ",
    badge: "Signature",
    badgeColor: "bg-primary text-on-primary",
    ingredients: "Xoài chín tươi, chanh dây thanh chua hòa quyện cùng lá húng quế ngọt thảo mộc đặc sắc.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=600&auto=format&fit=crop",
    category: "Nước ép & Sinh tố",
  },

  // Đá xay & Soft Drink
  {
    name: "Matcha Đá Xay",
    price: "70.000đ",
    ingredients: "Bột matcha Nhật Bản Uji, sữa tươi, đá viên xay nhuyễn phủ lớp kem bông.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop",
    category: "Đá xay & Soft Drink",
  },
  {
    name: "Chocolate Đá Xay",
    price: "70.000đ",
    ingredients: "Cacao đắng nguyên chất xay cùng bơ Pháp, sữa tươi và đá tuyết thơm ngon.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop",
    category: "Đá xay & Soft Drink",
  },
  {
    name: "Chanh Tuyết (Snowy Lemon)",
    price: "75.000đ",
    ingredients: "Nước cốt chanh ta chua thanh mát xay bông tuyết nhuyễn cùng sữa béo thơm.",
    image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?q=80&w=600&auto=format&fit=crop",
    category: "Đá xay & Soft Drink",
  },
  {
    name: "Coke / Diet Coke",
    price: "35.000đ",
    ingredients: "Lon Coca-Cola ướp lạnh sảng khoái.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop",
    category: "Đá xay & Soft Drink",
  },
  {
    name: "Soda / Tonic Water",
    price: "35.000đ",
    ingredients: "Nước soda có ga sủi bọt mát lạnh.",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=600&auto=format&fit=crop",
    category: "Đá xay & Soft Drink",
  },

  // Cocktail & Rượu
  {
    name: "Classic Mojito",
    price: "130.000đ",
    ingredients: "Rượu Rum trắng, lá bạc hà giã dập, nước cốt chanh tươi, nước soda sủi tăm.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop",
    category: "Cocktail & Rượu",
  },
  {
    name: "Singapore Sling",
    price: "140.000đ",
    ingredients: "Rượu Gin, rượu mùi Cherry Brandy, nước dứa, nước cốt chanh ta, vị đắng thảo mộc.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=600&auto=format&fit=crop",
    category: "Cocktail & Rượu",
  },
  {
    name: "Espresso Martini",
    price: "140.000đ",
    ingredients: "Vodka cao cấp, rượu mùi cà phê Kahlua và shot Espresso nồng ấm từ hạt specialty.",
    image: "https://images.unsplash.com/photo-1541344999736-83ece272fedc?q=80&w=600&auto=format&fit=crop",
    category: "Cocktail & Rượu",
  },
  {
    name: "Uncle Huan Ice Tea",
    price: "180.000đ",
    badge: "Signature",
    badgeColor: "bg-primary text-on-primary",
    ingredients: "Sự bùng nổ hương vị từ Vodka, Midori, Cointreau, chanh tươi và rót đầy 7Up mát lạnh.",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=600&auto=format&fit=crop",
    category: "Cocktail & Rượu",
  },
  {
    name: "Katherine Hills Shiraz (Red Wine)",
    price: "130.000đ",
    ingredients: "Ly rượu vang đỏ hảo hạng từ Úc, hương vị đậm đà và sâu lắng của trái mọng chín.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop",
    category: "Cocktail & Rượu",
  },

  // Khai vị & Điểm tâm
  {
    name: "Bông Hồng Trắng (White Rose)",
    price: "85.000đ",
    badge: "Local Specialty",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    ingredients: "Bột gạo tinh khiết gói nhân tôm thịt đậm đà hấp mềm, ăn cùng hành phi thơm phức.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop",
    category: "Khai vị & Điểm tâm",
  },
  {
    name: "Hoành Thánh Chiên (Fried Wonton)",
    price: "95.000đ",
    ingredients: "Vỏ hoành thánh giòn tan, nhân tôm thịt băm nhuyễn chiên vàng ruộm ăn kèm nước sốt cà chua rau củ đậm đà.",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=600&auto=format&fit=crop",
    category: "Khai vị & Điểm tâm",
  },
  {
    name: "Mixed Green Salad",
    price: "90.000đ",
    ingredients: "Xà lách xanh tươi giòn rụm, quả ô liu đen, cà chua bi, dưa leo quyện sốt dầu giấm thảo mộc thanh nhẹ.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
    category: "Khai vị & Điểm tâm",
  },
  {
    name: "Granola Sữa Yogurt",
    price: "90.000đ",
    ingredients: "Hạt ngũ cốc Granola nướng thơm giòn, sữa chua mát lạnh cùng chuối chín và xoài tươi xắt hạt lựu.",
    image: "https://images.unsplash.com/photo-1517881917431-1355a630cd91?q=80&w=600&auto=format&fit=crop",
    category: "Khai vị & Điểm tâm",
  },

  // Món chính & Pizza
  {
    name: "Pizza Margherita",
    price: "130.000đ",
    badge: "Vegetarian",
    badgeColor: "bg-emerald-600 text-white",
    ingredients: "Đế bánh nướng củi giòn, sốt cà chua kiểu Ý thơm dịu, phô mai Mozzarella dẻo dai và lá húng quế tươi.",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=600&auto=format&fit=crop",
    category: "Món chính & Pizza",
  },
  {
    name: "Pizza Gà Hun Khói (BBQ Chicken)",
    price: "140.000đ",
    ingredients: "Bánh pizza đế mỏng giòn, thịt gà hun khói đậm đà, phô mai Mozzarella kéo sợi thơm lừng và sốt BBQ ngọt ngào.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
    category: "Món chính & Pizza",
  },
  {
    name: "Spaghetti Bolognese",
    price: "130.000đ",
    ingredients: "Mì Ý sợi dài luộc mềm tới (al dente) chan đẫm sốt cà chua bò bằm truyền thống thơm thảo mộc và phô mai Parmesan.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop",
    category: "Món chính & Pizza",
  },
  {
    name: "Cheese Burger",
    price: "130.000đ",
    ingredients: "Vỏ bánh burger mềm thơm mè, thịt bò băm áp chảo mọng nước, lát phô mai cheddar tan chảy, xà lách, cà chua kèm khoai tây chiên.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
    category: "Món chính & Pizza",
  },
  {
    name: "Cơm Chiên Tôm (Shrimp Fried Rice)",
    price: "130.000đ",
    ingredients: "Cơm chiên hạt tơi vàng ruộm, tôm tươi săn ngọt chắc, trứng chiên xắt hạt lựu cùng rau củ, tiêu tỏi thơm lừng.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=600&auto=format&fit=crop",
    category: "Món chính & Pizza",
  },

  // Món ăn bản địa
  {
    name: "Mì Quảng (Quang Noodles)",
    price: "65.000đ",
    badge: "Hoi An Classic",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    ingredients: "Sợi mì Quảng vàng óng mềm dai, nước dùng đậm đà ninh xương heo tôm tươi, thịt rim, rau sống và bánh tráng giòn.",
    image: "https://images.unsplash.com/photo-1583085292283-e18e87498c56?q=80&w=600&auto=format&fit=crop",
    category: "Món ăn bản địa",
  },
  {
    name: "Cao Lầu Hội An",
    price: "65.000đ",
    badge: "Hoi An Heritage",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    ingredients: "Món ăn đặc sản di sản của phố cổ Hội An: Sợi cao lầu dai dòn làm từ gạo ngâm nước tro Giếng Bá Lễ, thịt xá xíu rim mềm ngọt đậm đà, nước sốt sền sệt và tóp mỡ chiên giòn rụm.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=600&auto=format&fit=crop",
    category: "Món ăn bản địa",
  },
  {
    name: "Bún Thịt Nướng Hội An",
    price: "65.000đ",
    ingredients: "Bún tươi ăn kèm thịt heo xiên nướng trên than hồng thơm phức, rau sống xanh mát phố cổ và nước sốt tương đậu phộng bùi béo.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop",
    category: "Món ăn bản địa",
  },
  {
    name: "Cơm Gà Hội An (Chicken Rice)",
    price: "75.000đ",
    ingredients: "Cơm nấu từ gạo thơm dẻo ướp nước dùng gà vàng óng thơm nghệ, thịt gà ta xé phay trộn hành tây, rau răm thơm giòn mộc mạc.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=600&auto=format&fit=crop",
    category: "Món ăn bản địa",
  },

  // Bánh & Tráng miệng
  {
    name: "Croissant Bơ Pháp",
    price: "40.000đ",
    ingredients: "Bánh sừng bò nướng chín giòn rụm nhiều lớp thơm ngậy bơ lạt nguyên chất vùng Normandie của Pháp.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
    category: "Bánh & Tráng miệng",
  },
  {
    name: "Pain Au Chocolat",
    price: "50.000đ",
    ingredients: "Bánh mì nghìn lớp giòn béo bơ cuộn nhân sô-cô-la đen ngọt đắng quyến rũ.",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=600&auto=format&fit=crop",
    category: "Bánh & Tráng miệng",
  },
  {
    name: "Cinnamon Roll",
    price: "50.000đ",
    ingredients: "Bánh mì cuộn quế thơm nồng ấm áp kết hợp cùng kem tươi phủ ngọt mát.",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=600&auto=format&fit=crop",
    category: "Bánh & Tráng miệng",
  },
  {
    name: "Bánh Sô-cô-la (Chocolate Cake)",
    price: "60.000đ",
    ingredients: "Bánh kem sô-cô-la cốt xốp ẩm mềm mọng béo ngậy phủ lớp kem chocolate hảo hạng.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop",
    category: "Bánh & Tráng miệng",
  },
  {
    name: "Đĩa Trái Cây Tươi (Fruit Platter)",
    price: "90.000đ",
    ingredients: "Tuyển chọn các loại trái cây miền nhiệt đới tươi chín theo mùa xắt miếng xinh xắn tươi mát lành.",
    image: "https://images.unsplash.com/photo-1519996521430-02b798c1d881?q=80&w=600&auto=format&fit=crop",
    category: "Bánh & Tráng miệng",
  },
];
