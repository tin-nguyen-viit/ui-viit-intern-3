<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
</script>
<template>
  <section class="splide" aria-label="Splide Basic HTML Example">
    <Carousel
      :plugins="[
        Autoplay({
          delay: 2000,
        }),
      ]"
    >
      <CarouselContent>
        <CarouselItem
          ><img
            class="object-cover"
            src="../assets/imgs/Jordan7RetroInfraredRelease_Prim-1-2048x648.webp"
            alt=""
        /></CarouselItem>
        <CarouselItem
          ><img
            class="object-cover"
            src="../assets/imgs/Adidas-Yeezy-Slide-2048x648.webp"
            alt=""
        /></CarouselItem>
        <CarouselItem
          ><img
            class="object-cover"
            src="../assets/imgs/Jordan7RetroInfraredRelease_Prim-1-2048x648.webp"
            alt=""
        /></CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="hidden lg:block" />
      <CarouselNext class="hidden lg:block" />
    </Carousel>
  </section>

  <!--  -->
  <div
    class="flex justify-center items-center gap-4 py-6 mx-4 lg:mx-36 border-b-[1px] border-gray-400/30"
  >
    <button
      class="rounded-full p-2 lg:py-8 lg:px-12 bg-black text-white lg:rounded-xl"
    >
      <h2 class="flex justify-center items-center w-16 h-16 lg:h-max lg:w-24">
        Giày Sneaker
      </h2>
    </button>
    <button
      class="rounded-full p-2 lg:py-8 lg:px-12 bg-black text-white lg:rounded-xl"
    >
      <h2 class="flex justify-center items-center w-16 h-16 lg:h-max lg:w-24">
        Áo quần
      </h2>
    </button>
    <button
      class="rounded-full p-2 lg:py-8 lg:px-12 bg-black text-white lg:rounded-xl"
    >
      <h2 class="flex justify-center items-center w-16 h-16 lg:h-max lg:w-24">
        Phụ kiện
      </h2>
    </button>
    <button
      class="rounded-full p-2 lg:py-8 lg:px-12 bg-black text-white lg:rounded-xl"
    >
      <h2 class="flex justify-center items-center w-16 h-16 lg:h-max lg:w-24">
        Brand
      </h2>
    </button>
  </div>
</template>
