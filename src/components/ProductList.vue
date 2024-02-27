<template>
    <div>
      <h2>รายการสินค้า</h2>
      <ul>
        <li v-for="(product, index) in products" :key="index">
         ชื่อสินค้า : {{ product.name }} ราคา : {{ product.price }} บาท
         ไอดี {{ product.id }}
          <button @click="deleteProduct(index)">ลบ</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { useStore } from '../store/useCounterStore';
  
  export default defineComponent({
    setup() {
      const store = useStore();
  
      const products = store.products;
  
      const deleteProduct = (index) => {
        store.deleteProduct(index);
      };
  
      return {
        products,
        deleteProduct,
      };
    },
  });
  </script>
  