<script setup lang="ts">
import TheHeader from "~/components/common/TheHeader.vue";
import TheFooter from "~/components/common/TheFooter.vue";
import SocialWidget from "~/components/common/SocialWidget.vue";
</script>

<template>
  <el-container class="tw-relative tw-h-[100vh]" direction="vertical">
    <TheHeader />
    <el-main class="tw-h-full">
      <slot />
    </el-main>
    <TheFooter />
    <SocialWidget />
  </el-container>
</template>
