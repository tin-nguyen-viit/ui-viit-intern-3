<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { BadgePercent, Phone, PiggyBank, ShoppingCart } from "lucide-vue-next";
import { ref } from "vue";
let sizes = ref([36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40]);
const accordionItems = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    title: "Is it unstyled?",
    content:
      "Yes. It's unstyled by default, giving you freedom over the look and feel.",
  },
  {
    value: "item-3",
    title: "Can it be animated?",
    content: "Yes! You can use the transition prop to configure the animation.",
  },
];
</script>

<template>
  <div
    class="lg:px-4 lg:py-12 px-4 w-full lg:flex gap-1 lg:max-w-[80rem] mx-auto"
  >
    <div class="lg:w-1/2 lg:px-6">
      <Carousel class="border-[1px] rounded-lg overflow-hidden">
        <CarouselContent class="">
          <CarouselItem
            ><img
              class="object-cover"
              src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/06/3b099eaa-b0a6-4e01-a548-b0ed81b9195c-600x467.png"
              alt=""
          /></CarouselItem>
          <CarouselItem
            ><img
              class="object-cover"
              src="@/assets/imgs/Adidas-Yeezy-Slide-2048x648.webp"
              alt=""
          /></CarouselItem>
          <CarouselItem
            ><img
              class="object-cover"
              src="@/assets/imgs/Jordan7RetroInfraredRelease_Prim-1-2048x648.webp"
              alt=""
          /></CarouselItem>
        </CarouselContent>

        <CarouselPrevious class="left-1" />
        <CarouselNext class="right-1" />
      </Carousel>
    </div>
    <div class="lg:w-1/2">
      <a href="" class="text-blue-400">Air Jordan 1 Low</a>
      <h2 class="text-lg mt-3">
        Giày Nike Air Jordan 1 Low ‘Panda’ DC0774-101
      </h2>
      <p class="text-lg mt-3 font-bold">4,100,000 ₫ – 4,500,000 ₫</p>
      <div class="flex gap-2 mt-3 items-center">
        <p class="text-base">
          Trả sau <span class="text-blue-400 px-1"> 2.050.000đ </span> x2 kỳ với
        </p>
        <img
          src="@/assets/imgs/logo_transparent.png"
          alt=""
          class="object-cover h-5"
        />
      </div>
      <div
        class="flex p-2 h-16 mt-3 rounded-lg w-full lg:w-2/3 bg-gradient-to-r from-cyan-500 to-purple-500"
      >
        <BadgePercent :size="45" color="#ffffff" :stroke-width="2.25" />
        <p class="px-2 text-white font-bold">
          Giảm giá đến 50% khi thanh toán qua Fundiin.
          <a class="underline" href=" ">xem thêm</a>
        </p>
      </div>
      <p class="text-lg mt-3">Kính thước</p>
      <div class="mt-3 flex flex-wrap gap-3">
        <button
          v-for="item in sizes"
          class="border-[1px] border-black px-3 py-1 text-sm rounded-lg"
        >
          {{ item }}
        </button>
      </div>
      <div class="flex mt-3 p-2 border-[2px] border-dotted w-full rounded-2xl">
        <div class="w-1/5 flex justify-center items-center">
          <Phone :size="48" color="#0091ff" :stroke-width="3" />
        </div>
        <div class="w-4/5">
          <p class="font-bold">Gọi ngay để có giá tốt</p>
          <p class="font-bold">
            Hotline HN : 0984918486 - 0785499555 - 72 Tây Sơn Đống Đa
          </p>
          <p class="font-bold">
            Hotline HCM : 0786665444 - 561 Nguyễn Đình Chiểu Q.3
          </p>
          <p class="italic">Tổng đài hoạt động từ 10h00 - 22h00 mỗi ngày</p>
        </div>
      </div>
      <button
        class="mt-3 bg-red-400 uppercase w-full p-5 flex justify-center gap-1 rounded-xl text-white"
      >
        <span><ShoppingCart color="#ffffff" /></span> mua ngay
      </button>
      <div class="mt-3 flex gap-x-3">
        <button
          class="bg-orange-300 uppercase w-full py-5 flex justify-center gap-1 rounded-xl text-white"
        >
          them vào giỏ hàng
        </button>
        <button
          class="bg-green-400 uppercase w-full flex flex-col justify-center items-center gap-1 rounded-xl text-white"
        >
          <span class="flex gap-1"
            ><PiggyBank color="#ffffff" />Mua trả góp 0%</span
          >
          <span class="text-sm">QUA CÔNG TY TÀI CHÍNH</span>
        </button>
      </div>
      <Accordion type="single" class="w-full" collapsible>
        <AccordionItem
          v-for="item in accordionItems"
          :key="item.value"
          :value="item.value"
        >
          <AccordionTrigger>{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>
