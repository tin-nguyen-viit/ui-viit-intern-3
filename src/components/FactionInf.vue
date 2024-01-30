<script setup lang="ts">
defineProps({
  id: String,
  title: String,
  image: String,
});
</script>
<template>
  <div class="w-full lg:w-1/3 p-1">
    <div
      class="overflow-hidden h-[14rem] border-[1px] border-gray-200 rounded-xl"
    >
      <div class="flex items-center">
        <img
          class="object-cover"
          src="../assets/imgs/bo-suu-tap-new-balance-550-moi-n.png"
          alt="Hình đôi giày"
        />
      </div>
    </div>
    <div class="">
      <p class="text-base font-bold">
        {{ title }}
      </p>
    </div>
  </div>
</template>
