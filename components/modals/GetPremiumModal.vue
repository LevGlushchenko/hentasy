<script setup lang="ts">
const props = defineProps<{
  isShown: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);

const isShownVal = computed({
  get() {
    return props.isShown;
  },
  set(newVal) {
    emit("update:modelValue", newVal);
  },
});
</script>

<template>
  <el-dialog v-model="isShownVal" append-to-body>
    <div class="tw-px-40 tw-py-60 tw-text-white">
      <div class="tw-flex tw-flex-col tw-justify-center tw-items-center">
        <div class="tw-flex tw-items-center">
          <NuxtIcon class="tw-text-primary tw-text-24" name="crown" />
          <h2 class="tw-ml-8 tw-text-24 tw-font-bold">Get premium</h2>
        </div>
        <div class="tw-mt-30 tw-leading-7">
          <p>Premium membership has special futures and benefits:</p>
          <ul class="tw-pl-12 tw-list-disc">
            <li>No Ads</li>
            <li>FullHD <span class="tw-text-primary">1080P</span> videos</li>
            <li>Change your nickname and pick a special color</li>
            <li>GIFs for avatars and playlist thumbnail previews</li>
            <li>Don't like ugly bastards? Banned tags are for you</li>
          </ul>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<style scoped lang="scss"></style>
