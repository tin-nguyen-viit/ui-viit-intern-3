<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
</script>

<template>
  <div class="px-4 py-12 w-full flex flex-col gap-1 lg:max-w-[80rem] mx-auto">
    <div class="w-1/2 px-6">
      <Carousel class="h-80 border-[1px] rounded-lg overflow-hidden">
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
    <div class="w-1/2"></div>
  </div>
</template>
