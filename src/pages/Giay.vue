<script setup lang="ts">
import CardProduct from "@/components/CardProduct.vue";
import { ref } from "vue";
let dataProduct1 = ref([
  {
    id: "001",
    title: "Giày Nike Air Force 1",
    nameProduct: "Giày Nike Air Force 1 07 Triple White CW2288-111",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/776547_01.jpg_79fdea599edb49e4ace83698f93f26e1.jpeg",
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
</script>

<template>
  <div class="w-full bg-slate-50">
    <div class="bg-white w-full">
      <div
        class="flex justify-end items-center gap-2 px-4 lg:max-w-[80rem] mx-auto py-3 border-t"
      >
        <p>Hiển thị 1–48 của 39431 kết quả</p>
        <select class="border p-2">
          <!-- <option value="">Sản phẩm xem nhiều nhất</option>
          <option value="">Thứ tự theo điểm giá</option>
          <option value="">Mới bán</option>
          <option value="">Thấp đến cao</option>
          <option value="">Cao đến thấp</option> -->
        </select>
      </div>
    </div>
    <div class="flex px-4 lg:max-w-[80rem] mx-auto py-3">
      <div class="w-1/4 pr-3 flex flex-col gap-2">
        <h2 class="text-lg uppercase font-bold pb-5">Lọc theo</h2>
        <button
          class="w-full flex justify-between bg-white rounded-lg p-2 shadow"
        >
          <p>3</p>
          <p>(1)</p>
        </button>
        <button
          class="w-full flex justify-between bg-white rounded-lg p-2 shadow"
        >
          <p>3</p>
          <p>(1)</p>
        </button>
        <button
          class="w-full flex justify-between bg-white rounded-lg p-2 shadow"
        >
          <p>3</p>
          <p>(1)</p>
        </button>
        <button
          class="w-full flex justify-between bg-white rounded-lg p-2 shadow"
        >
          <p>3</p>
          <p>(1)</p>
        </button>
        <button
          class="w-full flex justify-between bg-white rounded-lg p-2 shadow"
        >
          <p>3</p>
          <p>(1)</p>
        </button>
        <button
          class="w-full flex justify-between bg-white rounded-lg p-2 shadow"
        >
          <p>3</p>
          <p>(1)</p>
        </button>
        <button
          class="w-full flex justify-between bg-white rounded-lg p-2 shadow"
        >
          <p>3</p>
          <p>(1)</p>
        </button>
      </div>
      <div class="w-3/4 flex flex-col gap-1">
        <div class="flex flex-col items-center pb-10">
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
        </div>
      </div>
    </div>
  </div>
</template>
