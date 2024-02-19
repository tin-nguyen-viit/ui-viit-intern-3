import Product from "@/layout/Product.vue";
import index from "@/pages/product/detail/index.vue";

const product = [
  {
    path: "/product",
    component: () => Product,
    children: [
      {
        path: "/product/detail",
        name: "product-detail",
        component: () => index,
      },
    ],
  },
];

export default product;
