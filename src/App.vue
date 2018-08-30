<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width:100%;
  }
  li,
  ul,
  div,
  p,
  body,
  html {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  body {
    //background:url('/static/images/timg1.jpg') repeat-y;
    background:#FFFAF9;
    background-size: cover;
  }
  .el-dialog {
    width: 40% !important;
  }
  @media screen and (max-width:768px) {
    .el-dialog {
      width: 90% !important;
    }
  }
</style>
