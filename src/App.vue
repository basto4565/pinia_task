<template>
  <div id="app">
    <AddProductForm />
    <ProductList />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import AddProductForm from './components/AddProductForm.vue';

export default {
  components: {
    ProductList,
    AddProductForm,
  },
};
</script>
