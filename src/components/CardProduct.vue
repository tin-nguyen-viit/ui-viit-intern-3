<script setup lang="ts">
const PRODUCTS = [
  {
    id: "001",

    title: "Giày Nike Air Force 1",
    nameProduct: "Giày Nike Air Force 1 07 Triple White CW2288-111",
    img: "../assets/imgs/giay1.png",
    price: 40000,
  },
  {
    id: "002",

    title: "Giày Nike Air Force 1",
    nameProduct: "Giày Nike Air Force 1 07 Triple White CW2288-111",
    img: "../assets/imgs/giay1.png",
    price: 40000,
  },
  {
    id: "003",

    title: "Giày Nike Air Force 1",
    nameProduct: "Giày Nike Air Force 1 07 Triple White CW2288-111",
    img: "../assets/imgs/giay1.png",
    price: 40000,
  },
];
</script>

<template>
  <div class="w-1/2 lg:w-1/4 p-1">
    <div
      class="h-max py-14 lg:p-5 lg:h-[19rem] border-[1px] border-gray-200 rounded-3xl relative"
    >
      <div class="px-2 lg:p-5 h-max lg:h-full flex items-center">
        <img
          class="object-cover"
          src="../assets/imgs/giay1.png"
          alt="Giày Nike Air Force 1 07 Triple White CW2288-111"
        />
      </div>
      <i class="absolute right-4 bottom-4 fa-regular fa-heart"></i>
    </div>
    <div class="flex flex-col text-sm gap-1 py-2">
      <h2 class="underline">Giày Nike Air Force 1</h2>
      <h3 class="text-pretty cursor-pointer hover:text-blue-300">
        Giày Nike Air Force 1 07 Triple White CW2288-111
      </h3>
      <p class="font-bold">4500000 đ</p>
    </div>
  </div>
</template>
