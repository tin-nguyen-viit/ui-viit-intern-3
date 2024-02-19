<script setup lang="ts">
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronRight, Menu, Search } from "lucide-vue-next";
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <button name="sidebar" class="lg:hidden">
        <Menu color="#000000" :stroke-width="1.75" />
      </button>
    </SheetTrigger>
    <SheetContent side="left">
      <div
        class="bg-white flex flex-col justify-start uppercase text-base py-14 px-4"
      >
        <div class="relative mt-1 mb-3 rounded-full shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            class="block w-full rounded-full border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Tìm kiếm"
          />
          <div class="absolute inset-y-0 right-2 flex items-center">
            <Search />
          </div>
        </div>
        <div
          class="flex justify-between items-center border-t-[1px] border-gray-200"
        >
          <a class="uppercase text-sm font-bold py-4" href="#"
            >Giày Jordan khác
          </a>
          <ChevronRight />
        </div>
        <div
          class="flex justify-between items-center border-t-[1px] border-gray-200"
        >
          <a class="uppercase text-sm font-bold py-4" href="#">Giay sneaker </a>
          <ChevronRight />
        </div>
        <div
          class="flex justify-between items-center border-t-[1px] border-gray-200"
        >
          <a class="uppercase text-sm font-bold py-4" href="#">Quần áo </a>
          <ChevronRight />
        </div>
        <div
          class="flex justify-between items-center border-t-[1px] border-gray-200"
        >
          <a class="uppercase text-sm font-bold py-4" href="#">Phụ kiện </a>
          <ChevronRight />
        </div>
        <div
          class="flex justify-between items-center border-t-[1px] border-gray-200"
        >
          <a class="uppercase text-sm font-bold py-4" href="#">News </a>
        </div>
        <div
          class="flex justify-between items-center border-t-[1px] border-gray-200"
        >
          <a class="uppercase text-sm font-bold py-4" href="#">Liên hệ </a>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
