import coso3 from "@/public/assets/image/co-so/co-so-3.jpg";
import { StaticImageData } from "next/image";

export interface Store {
  name: string;
  address: string;
  hours: string;
  phone: string;
  image: string | StaticImageData;
}

export const storesData: Store[] = [
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
