<script setup lang="ts">
import CImage from "~/components/ui/CImage.vue";

defineProps<{
  isShown: boolean;
}>();
const emit = defineEmits(["on-close", "on-click-logo"]);
</script>

<template>
  <el-aside :class="{ 'is-open': isShown }">
    <div class="tw-py-34 tw-px-48">
      <div class="tw-flex tw-justify-between tw-items-end">
        <CImage
          class="tw-cursor-pointer"
          name="logo"
          width="98"
          @click="emit('on-click-logo')"
        />
        <NuxtIcon
          class="tw-text-28 tw-text-grey tw-cursor-pointer"
          name="close"
          @click="emit('on-close')"
        />
      </div>
      <div class="tw-mt-50">
        <h2 class="tw-text-20 tw-font-semibold tw-text-grey-200">Main Menu</h2>
        <ul class="tw-mt-24">
          <li class="tw-mb-15">
            <NuxtLink
              class="tw-flex tw-items-center tw-text-white hover:tw-text-grey"
              to="/"
            >
              <NuxtIcon class="tw-text-grey tw-text-18" name="house" />
              <span class="tw-ml-8">Home</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="tw-flex tw-items-center tw-text-white hover:tw-text-grey"
              to="/search"
            >
              <NuxtIcon class="tw-text-grey tw-text-14" name="videos" />
              <span class="tw-ml-8">Videos</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="tw-mt-50">
        <h2 class="tw-text-20 tw-font-semibold tw-text-grey-200">Library</h2>
        <ul class="tw-mt-24">
          <li class="tw-mb-15">
            <a
              class="tw-flex tw-items-center tw-text-white hover:tw-text-grey"
              href="#"
            >
              <NuxtIcon class="tw-text-grey tw-text-18" name="channel" />
              <span class="tw-ml-8">Channel</span>
            </a>
          </li>
          <li class="tw-mb-15">
            <a
              class="tw-flex tw-items-center tw-text-white hover:tw-text-grey"
              href="#"
            >
              <NuxtIcon class="tw-text-grey tw-text-18" name="history" />
              <span class="tw-ml-8">History</span>
            </a>
          </li>
          <li class="tw-mb-15">
            <a
              class="tw-flex tw-items-center tw-text-white hover:tw-text-grey"
              href="#"
            >
              <NuxtIcon class="tw-text-grey tw-text-18" name="liked" />
              <span class="tw-ml-8">Liked</span>
            </a>
          </li>
          <li>
            <a
              class="tw-flex tw-items-center tw-text-white hover:tw-text-grey"
              href="#"
            >
              <NuxtIcon class="tw-text-grey tw-text-18" name="watch-later" />
              <span class="tw-ml-8">Watch Later</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="tw-mt-50">
        <h2 class="tw-text-20 tw-font-semibold tw-text-grey-200">Other</h2>
        <ul class="tw-mt-24">
          <li class="tw-mb-15">
            <a
              class="tw-flex tw-items-center tw-text-white hover:tw-text-grey"
              href="#"
            >
              <NuxtIcon class="tw-text-grey tw-text-18" name="crown-big" />
              <span class="tw-ml-8">Premium</span>
            </a>
          </li>
          <li class="tw-mb-15">
            <a
              class="tw-flex tw-items-center tw-text-white hover:tw-text-grey"
              href="#"
            >
              <NuxtIcon class="tw-text-grey tw-text-18" name="contact" />
              <span class="tw-ml-8">Contact Us</span>
            </a>
          </li>
          <li>
            <a
              class="tw-flex tw-items-center tw-text-white hover:tw-text-grey"
              href="#"
            >
              <NuxtIcon class="tw-text-grey tw-text-18" name="rules" />
              <span class="tw-ml-8">Rules</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </el-aside>
</template>

<style lang="scss">
#hentasy {
  .el-aside {
    @apply tw-absolute tw-z-10 tw-top-0 -tw-left-full tw-h-full tw-w-[240px] tw-bg-black-200 tw-transition-all tw-duration-500;

    &.is-open {
      @apply tw-left-0;
    }
  }
}
</style>
