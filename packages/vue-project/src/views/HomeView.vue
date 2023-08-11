<script setup lang="ts">
import { reactive, ref } from 'vue';
// import { NTable } from '../../../vue-lib/components';

const columns = [
  {
    key: 'name',
    render: (row: any) => `<div>${row.name}</div>`,
    type: 'fixedLeft',
  },
  {
    title: '年龄',
    key: 'age',
    render: (row: any) => `<div>${row.age}</div>`,
  },
  {
    title: '年龄',
    key: 'age',
    render: (row: any) => `<div>${row.age}</div>`,
  },
  {
    title: '年龄',
    key: 'age',
    render: (row: any) => `<div>${row.age}</div>`,
  },
  {
    title: '身高',
    key: 'height',
    type: 'fixedRight',
  }
];

let tableData = ref([
  {
    name: 'StencilStencilStencilStencil',
    age: 28282828282828,
    height: 199199199199199,
  },
  {
    name: 'StencilStencilStencilStencil',
    age: 28282828282828,
    height: 199199199199199,
  },
  {
    name: 'StencilStencilStencilStencil',
    age: 28282828282828,
    height: 199199199199199,
  },
  {
    name: 'StencilStencilStencilStencil',
    age: 28282828282828,
    height: 199199199199199,
  },
  {
    name: 'StencilStencilStencilStencil',
    age: 28282828282828,
    height: 199199199199199,
  },
  {
    name: 'StencilStencilStencilStencil',
    age: 28282828282828,
    height: 199199199199199,
  },
  {
    name: 'StencilStencilStencilStencil',
    age: 28282828282828,
    height: 199199199199199,
  },
  {
    name: 'StencilStencilStencilStencil',
    age: 28282828282828,
    height: 199199199199199,
  },
  {
    name: 'StencilStencilStencilStencil',
    age: 28282828282828,
    height: 199199199199199,
  },
]);

</script>

<template>
  <n-table
    :columns="columns"
    :data="tableData"
    :fixedHead="true"
    tableClass="table-wrapper"
  >
    <p slot="name">姓名</p>
    <p slot="age">年龄</p>
  </n-table>
</template>

<style>
.table-wrapper {
  height: 100vh;
}
</style>