<script setup lang="ts">
import Slides from "./Slides.vue";
import Card from "./Card.vue";
</script>

<template>
  <main class="w-full">
    <div class="w-full">
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
          <!--  -->
          <div class="w-full flex flex-col items-center">
            <div class="w-full flex flex-wrap">
              <Card />
            </div>
          </div>
          <!--  -->

          <button
            class="bg-white border-[2px] mt-10 py-3 px-10 w-max rounded-xl hover:bg-black hover:text-white"
          >
            Xem tất cả
            <i class="fa-solid fa-angle-right fa-sm" style="color: #000"></i>
          </button>
        </div>
      </section>
    </div>
  </main>
</template>
