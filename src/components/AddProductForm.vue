<template>
  <div>
    <h2>เพิ่มสินค้าใหม่</h2>
    <b-form @submit.prevent="addProduct">
      <b-form-group
        id="input-productName"
        label="ชื่อสินค้า :"
        lablefor="inputproductName"
        description="กรอกชื่อสินค้าในช่อง"
      >
        <b-form-input
          id="inputproductName"
          v-model="newProduct.name"
          placeholder="ใส่ชื่อสินค้า"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-form-group
        id="input-productPrice"
        label="ราคา:"
        lablefor="inputproductPrice"
        description="กรอกราคาสินค้าในช่อง"
      >
        <b-form-input
          id="inputproductPrice"
          v-model="newProduct.price"
          placeholder="ใส่ราคาสินค้า"
          types="number"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-button type="submit"> เพิ่มสินค้า </b-button>
    </b-form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue"
import { useStore } from "../store/useCounterStore"

export default defineComponent({
  setup() {
    const store = useStore()
    const newProduct = ref({ name: "", price: 0 })

    const addProduct = () => {
      store.addProduct(newProduct.value)
      newProduct.value = { name: "", price: 0 }
    }

    return {
      newProduct,
      addProduct,
    }
  },
})
</script>
