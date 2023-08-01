<script setup lang="ts">
import { reactive } from 'vue';

const columns = reactive([
  {
    title: '姓名',
    render: (row: any) => `<div>${row.name}</div>`,
  },
  {
    title: '年龄',
    render: (row: any) => `<div>${row.age}</div>`,
    // render: (row: any) => {
    //   return h('div', row.age)
    // }
    // render: () => h(myHello),
  }
]);
const tableData = reactive([
  {
    name: 'Stencil',
    age: 28,
  }
]);
</script>

<template>
  <n-table :columns="columns" :data="tableData">
    <p slot="my-slot">12345566</p>
  </n-table>
</template>

<style>
p {
  color: red;
}
</style>
