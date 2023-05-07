<script setup lang="ts">
import LoginRequiredModal from "~/components/modals/LoginRequiredModal.vue";
import GetPremiumModal from "~/components/modals/GetPremiumModal.vue";

const isOpenLoginRequiredModal = ref<boolean>(false);
const toggleLoginRequiredModal = () => {
  isOpenLoginRequiredModal.value = !isOpenLoginRequiredModal.value;
};

const isOpenGetPremiumModal = ref<boolean>(false);
const toggleGetPremiumModal = () => {
  isOpenGetPremiumModal.value = !isOpenGetPremiumModal.value;
};
</script>

<template>
  <NuxtLayout name="default">
    <div
      class="tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center"
    >
      <h1 class="tw-font-bold tw-text-54 tw-text-white">Home page</h1>
      <div class="tw-mt-24">
        <el-button type="primary" round @click="toggleLoginRequiredModal">
          Open Login Required Modal
        </el-button>
        <el-button type="primary" round @click="toggleGetPremiumModal">
          Open Get Premium Modal
        </el-button>
      </div>
    </div>
    <LoginRequiredModal :is-shown="isOpenLoginRequiredModal" />
    <GetPremiumModal :is-shown="isOpenGetPremiumModal" />
  </NuxtLayout>
</template>
