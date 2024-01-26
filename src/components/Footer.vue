<script setup lang="ts">
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  YoutubeIcon,
} from "lucide-vue-next";
</script>

<template>
  <footer class="w-full">
    <div class="w-full lg:flex px-4 lg:max-w-[80rem] mx-auto">
      <!--  -->
      <div class="w-full text-base px-4 lg:w-1/2">
        <div>
          <img
            class="h-14 lg:h-max"
            src="../assets/imgs/ft-logo.webp"
            alt="logo authentic-shoes"
          />
          <h1 class="hidden">authentic-shoes</h1>
        </div>
        <p>Công Ty TNHH TM và Đầu Tư Quốc Tế Á Châu MST : 0109539054</p>
        <p>
          Authentic Shoes - Nhà sưu tầm và phân phối chính hãng các thương hiệu
          thời trang quốc tế hàng đầu Việt Nam
        </p>
        <div class="py-3 flex flex-col gap-4">
          <p class="text-lg uppercase font-bold">Hệ thống của hàng</p>
          <div class="flex flex-col gap-3">
            <p class="flex items-center gap-4">
              <i class="fa-solid fa-location-dot"></i>
              Cơ sở 1: 561 Nguyễn Đình Chiểu Phường 2 - Quận3 - TP. Hồ Chí Minh
            </p>
            <p class="flex items-center gap-4">
              <i class="fa-solid fa-phone"></i>
              Hotline : 0786665444
            </p>
            <p class="flex items-center gap-4">
              <i class="fa-solid fa-location-dot"></i>

              Cở sở 2 : 70-72 Tây Sơn - Đống Đa - Hà Nội
            </p>
            <p class="flex items-center gap-4">
              <i class="fa-solid fa-phone"></i>
              Hotline : 0785499555
            </p>
            <p class="flex items-center gap-4">
              <i class="fa-solid fa-envelope"></i>
              Service@AutheticShoes.com
            </p>
            <p class="flex items-center gap-4">
              ĐKKD: 01E8027929 - Cấp ngày: 01/06/2019 - Nơi cấp: Hà Nội
            </p>
          </div>
          <img class="w-max object-cover" src="./imgs/nhan.png " alt="" />
        </div>
      </div>
      <!--  -->
      <div class="lg:flex w-full lg:w-1/2">
        <div class="w-full px-4 lg:w-1/2">
          <div class="flex flex-col gap-5 pb-4">
            <p class="text-lg border-b-[2px] w-max">Về chúng tôi</p>
            <p>Giới Thiêu</p>
            <p>Tuyển Dụng</p>
            <p>Dịch Vụ Spa,Sửa Giày</p>
            <p>Tin Tức-Sự Kiện</p>
          </div>
          <div class="flex flex-col gap-5 pb-4">
            <p class="text-lg border-b-[2px] w-max">Kết nối với chúng tôi</p>

            <div class="flex gap-4">
              <a
                class="w-10 h-10 flex justify-center items-center rounded-full bg-black hover:bg-blue-600 shrink-0"
                href=""
              >
                <Facebook color="#ffffff" />
                <!-- <i
                  class="m-auto fa-brands fa-facebook-f"
                  style="color: #ffff"
                ></i> -->
              </a>
              <a
                class="w-10 h-10 flex justify-center items-center rounded-full bg-black hover:bg-pink-300 shrink-0"
                href=""
                ><Instagram color="#ffffff" />
                <!-- <i
                  class="m-auto fa-brands fa-instagram fa-lg"
                  style="color: #ffff"
                ></i> -->
              </a>
              <a
                class="w-10 h-10 flex justify-center items-center rounded-full bg-black hover:bg-black/45 shrink-0"
                href=""
                ><Linkedin color="#ffffff" />
                <!-- <i class="m-auto fa-brands fa-tiktok" style="color: #ffff"></i> -->
              </a>
              <a
                class="w-10 h-10 flex justify-center items-center rounded-full bg-black hover:bg-blue-300 shrink-0"
                href=""
                ><Twitter color="#ffffff" />
                <!-- <i class="m-auto fa-brands fa-twitter" style="color: #ffff"></i> -->
              </a>
              <a
                class="w-10 h-10 flex justify-center items-center rounded-full bg-black hover:bg-red-500 shrink-0"
                href=""
                ><YoutubeIcon color="#ffffff" />
                <!-- <i class="m-auto fa-brands fa-youtube" style="color: #ffff"></i> -->
              </a>
            </div>
            <img class="w-max" src="../assets/imgs/thongbao.png" alt="" />
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="flex flex-col gap-5 pb-4">
            <p class="text-lg border-b-[2px] w-max">Về chúng tôi</p>
            <p>Hướng dẫn mua hàng</p>
            <p>Chính sách đổi trả và bảo hành</p>
            <p>Chính Sách Thanh Toán</p>
            <p>Chính sách bảo vệ thông tin cá nhân của người tiêu dùng</p>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
    <div class="bg-black px-4 lg:px-36 py-2">
      <p class="text-white lg:max-w-[80rem] mx-auto">
        © Bản quyền thuộc về Authentic Shoes
      </p>
    </div>
  </footer>
</template>
