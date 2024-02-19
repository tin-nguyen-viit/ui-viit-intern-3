<script setup lang="ts">
import { Search, ChevronDown, ShoppingBasket } from "lucide-vue-next";
import SidebarMenu from "./SidebarMenu.vue";
</script>

<template>
  <header class="contents top-0">
    <div class="w-full hidden lg:block">
      <div class="bg-black py-2 px-4">
        <div
          class="mx-auto flex justify-between items-center text-white lg:max-w-[80rem]"
        >
          <p class="text-xs">
            Authentic Shoes - Nhà sưu tầm và phân phối chính hãng các thương
            hiệu thời trang quốc tế hàng đầu Việt Nam
          </p>
          <p class="cursor-pointe text-[13px]">Đăng nhập</p>
        </div>
      </div>
    </div>
    <!--  -->
    <nav class="w-full sticky top-[-1px] bg-white/90 z-10">
      <div
        class="flex justify-between items-center py-1 px-4 mx-auto lg:max-w-[80rem]"
      >
        <div class="flex items-center gap-10">
          <SidebarMenu />
          <div>
            <img
              class="h-14 lg:h-max"
              src="../assets/imgs/ft-logo.webp"
              alt="logo authentic-shoes"
            />
            <h1 class="hidden">authentic-shoes</h1>
          </div>

          <div class="hidden lg:block w-full h-full">
            <div
              class="w-full h-full flex justify-start items-center uppercase text-base gap-x-12 flex-wrap"
            >
              <a class="" href="/">Trang Chủ</a>
              <a class="flex justify-center items-center" href="/Giay"
                >Giày <ChevronDown color="#000000" :stroke-width="1.75"
              /></a>
              <a class="flex justify-center items-center" href="#"
                >Quần áo<ChevronDown color="#000000" :stroke-width="1.75"
              /></a>
              <a class="flex justify-center items-center" href="#"
                >phụ kiện<ChevronDown color="#000000" :stroke-width="1.75"
              /></a>

              <a class="" href="#">Tin tức - sự kiện</a
              ><a class="" href="#">Liên hệ</a>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button class="hidden lg:block">
            <Search color="#050505" />
          </button>
          <div class="hidden lg:block w-[1px] h-9 bg-slate-500"></div>
          <button><ShoppingBasket color="#050505" /></button>
        </div>
      </div>
    </nav>
  </header>
</template>
