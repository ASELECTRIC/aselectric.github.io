<script setup>
function getCurrentYear() {
  let year = new Date().getFullYear();
  return year;
}
</script>
<template>
<footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <aside>
    <img src="/src/assets/images/logo1.png" alt="Logo" width="100" height="40" class="h-10 w-auto">
    <p>
      Copyright © {{getCurrentYear()}} - All right reserved <br />
    </p>
  </aside>
</footer>
</template>
<style scoped></style>