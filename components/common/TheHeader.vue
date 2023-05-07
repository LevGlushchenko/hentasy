<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import CImage from "~/components/ui/CImage.vue";
import TheSidebar from "~/components/common/TheSidebar.vue";

const route = useRoute();
const router = useRouter();

const search = ref<string>("");

const isOpenSidebar = ref<boolean>(false);
const toggleSidebar = () => (isOpenSidebar.value = !isOpenSidebar.value);

const goToHome = () => {
  if (route.name !== "index") {
    toggleSidebar();
    router.push("/");
  }
};

const goToSearch = () => {
  router.push({
    name: "search",
    query: { search: search.value },
  });
};

const isAuthenticated = ref<boolean>(false);

const toggleAuthenticate = () =>
  (isAuthenticated.value = !isAuthenticated.value);
</script>

<template>
  <el-header class="tw-bg-black-100" height="80">
    <div class="tw-flex tw-items-center tw-justify-between content-container">
      <div class="tw-flex tw-items-end">
        <NuxtIcon
          class="tw-text-24 tw-text-white tw-cursor-pointer"
          name="burger"
          @click="toggleSidebar"
        />
        <CImage
          class="tw-ml-16 tw-cursor-pointer"
          name="logo"
          @click="goToHome"
        />
      </div>
      <div class="tw-w-full tw-max-w-[460px]">
        <el-input
          v-model="search"
          placeholder="Search"
          @keypress.enter="goToSearch"
        >
          <template #prefix>
            <NuxtIcon
              class="tw-text-18 tw-cursor-pointer"
              name="search"
              filled
              @click="goToSearch"
            />
          </template>
        </el-input>
      </div>
      <div class="tw-flex tw-items-center">
        <NuxtLink v-if="isAuthenticated" to="/">
          <img src="/img/avatar.png" alt="Avatar logo" />
        </NuxtLink>
        <template v-else>
          <NuxtLink class="tw-mr-8" to="/login">
            <el-button round>
              <NuxtIcon
                class="tw-mr-4 tw-text-primary tw-text-14"
                name="profile"
              />
              Login
            </el-button>
          </NuxtLink>
          <el-button round type="primary" @click="toggleAuthenticate">
            <NuxtIcon
              class="tw-mr-4 tw-text-black-100 tw-text-14"
              name="crown"
            />
            Get premium
          </el-button>
        </template>
      </div>
    </div>
  </el-header>
  <TheSidebar
    :is-shown="isOpenSidebar"
    @on-close="toggleSidebar"
    @on-click-logo="goToHome"
  />
</template>

<style lang="scss">
#hentasy {
  .el-header {
    @apply tw-p-20 tw-shadow-100;
  }
}
</style>
