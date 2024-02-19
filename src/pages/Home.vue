<script setup lang="ts">
import CardProduct from "@/components/CardProduct.vue";
import CardProduct2 from "@/components/CardProduct2.vue";
import FactionInf from "@/components/FactionInf.vue";
import Slides from "@/components/Slides.vue";
import ButtonSeeAll from "@/components/ui/ButtonSeeAll.vue";
import { ref } from "vue";

let dataProduct1 = ref([
  {
    id: "001",
    title: "Giày Nike Air Force 1",
    nameProduct: "Giày Nike Air Force 1 07 Triple White CW2288-111",
    image: "./public/imgs/giay1.png",
    price: 40000,
  },
  {
    id: "002",
    title: "Giày Nike Air Force 1",
    nameProduct: "Giày Nike Air Force 1 07 Triple White CW2288-112",
    image: "./public/imgs/giay1.png",
    price: 40000,
  },
  {
    id: "003",
    title: "Giày Nike Air Force 1",
    nameProduct: "Giày Nike Air Force 1 07 Triple White CW2288-113",
    image: "./public/imgs/giay1.png",
    price: 40000,
  },
  {
    id: "003",
    title: "Giày Nike Air Force 1",
    nameProduct: "Giày Nike Air Force 1 07 Triple White CW2288-113",
    image: "./public/imgs/giay1.png",
    price: 40000,
  },
  {
    id: "003",
    title: "Giày Nike Air Force 1",
    nameProduct: "Giày Nike Air Force 1 07 Triple White CW2288-113",
    image: "./public/imgs/giay1.png",
    price: 40000,
  },
  {
    id: "003",
    title: "Giày Nike Air Force 1",
    nameProduct: "Giày Nike Air Force 1 07 Triple White CW2288-113",
    image: "./public/imgs/giay1.png",
    price: 40000,
  },
  {
    id: "003",
    title: "Giày Nike Air Force 1",
    nameProduct: "Giày Nike Air Force 1 07 Triple White CW2288-113",
    image: "./public/imgs/giay1.png",
    price: 40000,
  },
  {
    id: "003",
    title: "Giày Nike Air Force 1",
    nameProduct: "Giày Nike Air Force 1 07 Triple White CW2288-113",
    image: "./public/imgs/giay1.png",
    price: 40000,
  },
]);
let dataProduct2 = ref([
  {
    id: "001",

    nameProduct: "Adidas",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "002",

    nameProduct: "Nike",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "003",

    nameProduct: "Bitis",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "004",

    nameProduct: "Adidas",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "005",

    nameProduct: "Adidas",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "006",

    nameProduct: "Adidas",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "007",

    nameProduct: "Adidas",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "008",

    nameProduct: "Adidas",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "009",

    nameProduct: "Adidas",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "0010",

    nameProduct: "Adidas",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "0011",

    nameProduct: "Nike",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "0012",

    nameProduct: "Bitis",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
]);
let dataProduct3 = ref([
  {
    id: "001",
    title: "Phụ kiện",
    nameProduct: "Nước Hoa Alaïa Alaia Paris EDP",
    image: "./public/imgs/Nuoc-Hoa-Tom-Ford-Fabulous-EDP-1.png",
    price: 40000,
  },
  {
    id: "002",
    title: "Phụ kiện",
    nameProduct: "Nước Hoa Alaïa Alaia Paris EDP",
    image: "./public/imgs/Nuoc-Hoa-Tom-Ford-Fabulous-EDP-1.png",
    price: 40000,
  },
  {
    id: "003",
    title: "Phụ kiện",
    nameProduct: "Nước Hoa Alaïa Alaia Paris EDP",
    image: "./public/imgs/Nuoc-Hoa-Tom-Ford-Fabulous-EDP-1.png",
    price: 40000,
  },
  {
    id: "004",
    title: "Phụ kiện",
    nameProduct: "Nước Hoa Alaïa Alaia Paris EDP",
    image: "./public/imgs/Nuoc-Hoa-Tom-Ford-Fabulous-EDP-1.png",
    price: 40000,
  },
  {
    id: "005",
    title: "Phụ kiện",
    nameProduct: "Nước Hoa Alaïa Alaia Paris EDP",
    image: "./public/imgs/Nuoc-Hoa-Tom-Ford-Fabulous-EDP-1.png",
    price: 40000,
  },
  {
    id: "006",
    title: "Phụ kiện",
    nameProduct: "Nước Hoa Alaïa Alaia Paris EDP",
    image: "./public/imgs/Nuoc-Hoa-Tom-Ford-Fabulous-EDP-1.png",
    price: 40000,
  },
]);
let Factions = ref([
  {
    id: "001",
    title: "New Balance 550 da bóng bẩy và sức hút của thiết kế Retro",
    image: "../assets/imgs/giay1.png",
  },
  {
    id: "002",
    title: "New Balance 550 da bóng bẩy và sức hút của thiết kế Retro",
    image: "../assets/imgs/giay1.png",
  },
  {
    id: "003",
    title: "New Balance 550 da bóng bẩy và sức hút của thiết kế Retro",
    image: "../assets/imgs/giay1.png",
  },
]);
</script>

<template>
  <main class="w-full">
    <!-- slides -->
    <Slides />
    <section
      class="px-4 py-12 w-full flex flex-col gap-1 lg:max-w-[80rem] mx-auto"
    >
      <h2 class="text-base font-bold">Giày chính hãng Nike 2023</h2>
      <p class="text-base">
        Mẫu giày Nike Jordan 1, Air Force 1, các sản phẩm bóng rổ,… mới nhất
        2023 với giá cực tốt
      </p>
      <div class="flex flex-col items-center border-b-[2px] pb-10">
        <div class="w-full flex flex-col items-center">
          <div class="w-full flex flex-wrap">
            <CardProduct
              v-for="item in dataProduct1"
              :title="item.title"
              :nameProduct="item.nameProduct"
              :image="item.image"
              :price="item.price"
            />
          </div>
        </div>
        <ButtonSeeAll />
      </div>
    </section>
    <section
      class="px-4 py-4 lg:py-12 w-full flex flex-col gap-1 lg:max-w-[80rem] mx-auto"
    >
      <h2 class="text-base font-bold">Thương Hiệu Nổi Bật</h2>
      <p class="text-base">Mặt hàng giày các thương hiệu nổi bật</p>
      <div class="flex flex-wrap items-center py-1">
        <CardProduct2
          v-for="item in dataProduct2"
          :nameProduct="item.nameProduct"
        />
      </div>
    </section>
    <div class="w-full h-max lg:h-72 felx items-center overflow-hidden">
      <img
        class="object-cover lg:mt-[-4rem] my-auto"
        src="../assets/imgs/Jordan7RetroInfraredRelease_Prim-1-2048x648.webp"
        alt="panner"
      />
    </div>
    <section
      class="px-4 py-12 w-full flex flex-col gap-1 lg:max-w-[80rem] mx-auto"
    >
      <h2 class="text-base font-bold">Giày chính hãng Nike 2023</h2>
      <p class="text-base">
        Mẫu giày Nike Jordan 1, Air Force 1, các sản phẩm bóng rổ,… mới nhất
        2023 với giá cực tốt
      </p>
      <div class="flex flex-col items-center">
        <div class="w-full flex flex-col items-center">
          <div class="w-full flex flex-wrap">
            <CardProduct
              v-for="item in dataProduct1"
              :title="item.title"
              :nameProduct="item.nameProduct"
              :image="item.image"
              :price="item.price"
            />
          </div>
        </div>
        <ButtonSeeAll />
      </div>
    </section>
    <div
      class="px-4 w-full flex flex-col gap-1 lg:max-w-[80rem] mx-auto border-b-[2px] pb-10"
    >
      <div class="w-full h-max flex items-center overflow-hidden">
        <img
          class="object-cover my-auto"
          src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/Asics-Evergreen_Primary_Desktop.webp"
          alt="panner"
        />
      </div>
    </div>
    <section
      class="px-4 py-12 w-full flex flex-col gap-1 lg:max-w-[80rem] mx-auto"
    >
      <h2 class="text-base font-bold">Giày chính hãng Nike 2023</h2>
      <p class="text-base">
        Mẫu giày Nike Jordan 1, Air Force 1, các sản phẩm bóng rổ,… mới nhất
        2023 với giá cực tốt
      </p>
      <div class="flex flex-col items-center border-b-[2px] pb-10">
        <div class="w-full flex flex-col items-center">
          <div class="w-full flex flex-wrap">
            <CardProduct
              v-for="item in dataProduct1"
              :title="item.title"
              :nameProduct="item.nameProduct"
              :image="item.image"
              :price="item.price"
            />
          </div>
        </div>
        <ButtonSeeAll />
      </div>
    </section>
    <div class="w-full h-max lg:h-72 felx items-center overflow-hidden">
      <img
        class="object-cover lg:mt-[-4rem] my-auto"
        src="../assets/imgs/Adidas-Yeezy-Slide-2048x648.webp"
        alt="panner"
      />
    </div>
    <section
      class="px-4 py-12 w-full flex flex-col gap-1 lg:max-w-[80rem] mx-auto"
    >
      <h2 class="text-base font-bold">Giày chính hãng Nike 2023</h2>
      <p class="text-base">
        Mẫu giày Nike Jordan 1, Air Force 1, các sản phẩm bóng rổ,… mới nhất
        2023 với giá cực tốt
      </p>
      <div class="flex flex-col items-center border-b-[2px] pb-10">
        <div class="w-full flex flex-col items-center">
          <div class="w-full flex flex-wrap">
            <CardProduct
              v-for="item in dataProduct3"
              :title="item.title"
              :nameProduct="item.nameProduct"
              :image="item.image"
              :price="item.price"
            />
          </div>
        </div>
        <ButtonSeeAll />
      </div>
    </section>
    <div class="px-4 py-12 w-full flex flex-col gap-1 lg:max-w-[80rem] mx-auto">
      <h2 class="text-base font-bold">Thời trang</h2>
      <p class="text-base">Mặt hàng phụ kiện các thương hiệu nổi bật</p>
      <div class="flex flex-col items-center border-b-[2px] pb-10">
        <!--  -->
        <div class="w-full flex flex-col items-center">
          <div class="w-full flex flex-col lg:flex-row py-3">
            <FactionInf
              v-for="item in Factions"
              :title="item.title"
              :image="item.image"
            />
          </div>
        </div>
      </div>
    </div>
    <section
      class="px-4 py-12 w-full flex flex-col gap-1 lg:max-w-[80rem] mx-auto"
    >
      <h2 class="text-base font-bold">Giày chính hãng Nike 2023</h2>
      <p class="text-base">
        Mẫu giày Nike Jordan 1, Air Force 1, các sản phẩm bóng rổ,… mới nhất
        2023 với giá cực tốt
      </p>
      <div class="flex flex-col items-center border-b-[2px] pb-10">
        <div class="w-full flex flex-col items-center">
          <div class="w-full flex flex-wrap">
            <CardProduct
              v-for="item in dataProduct3"
              :title="item.title"
              :nameProduct="item.nameProduct"
              :image="item.image"
              :price="item.price"
            />
          </div>
        </div>
        <ButtonSeeAll />
      </div>
    </section>
  </main>
</template>
