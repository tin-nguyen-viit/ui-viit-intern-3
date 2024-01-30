<script setup lang="ts">
defineProps({
  id: String,
  title: String,
  nameProduct: String,
  image: String,
  price: Number,
});
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
      <h2 class="underline">{{ title }}</h2>
      <h3 class="text-pretty cursor-pointer hover:text-blue-300">
        {{ nameProduct }}
      </h3>
      <p class="font-bold">{{ price }} đ</p>
    </div>
  </div>
</template>
