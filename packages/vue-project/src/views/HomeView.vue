<script setup lang="ts">
import { reactive } from 'vue';
import { MyComponent } from '../../lib/components';

const columns = reactive([
  {
    title: '姓名',
    render: (row:any) => `<div>${row.name}</div>`,
  },
  {
    title: '年龄',
    render: (row:any) => `<div>${row.age}</div>`,
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
  <MyComponent/>
  <n-table :columns="columns" :data="tableData">123</n-table>
  <my-components></my-components>
</template>
