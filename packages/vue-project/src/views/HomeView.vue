<script setup lang="jsx">
import { reactive } from 'vue';
import Hello from './hello';

const columns = reactive([
  {
    title: '姓名',
    render: (row) => <div>{row.name}</div>,
  },
  {
    title: '年龄',
    render: (row) => <div>{row.age}</div>,
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
  <Hello/>
  <n-table :columns="columns" :data="tableData">123</n-table>
  <my-components></my-components>
</template>
