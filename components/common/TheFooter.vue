<script setup lang="ts">
import CImage from "~/components/ui/CImage.vue";
</script>

<template>
  <el-footer height="auto">
    <div class="content-container">
      <el-row justify="center">
        <el-col :span="24" :lg="4">
          <CImage name="logo" width="140" />
          <p class="tw-mt-8">Your Hentai Fantasies</p>
          <div class="tw-mt-8 tw-flex tw-items-center">
            <a
              class="tw-text-white hover:tw-text-accent tw-transition-all"
              href="#"
              target="_blank"
            >
              <NuxtIcon class="tw-text-18" name="twitter" />
            </a>
            <a
              class="tw-ml-12 tw-text-white hover:tw-text-accent tw-transition-all"
              href="#"
              target="_blank"
            >
              <NuxtIcon class="tw-text-18" name="discord" />
            </a>
            <a
              class="tw-ml-12 tw-text-white hover:tw-text-accent tw-transition-all"
              href="#"
              target="_blank"
            >
              <NuxtIcon class="tw-text-18" name="telegram" />
            </a>
            <a
              class="tw-ml-12 tw-text-white hover:tw-text-accent tw-transition-all"
              href="#"
              target="_blank"
            >
              <NuxtIcon class="tw-text-18" name="patreon" />
            </a>
            <a
              class="tw-ml-12 tw-text-white hover:tw-text-accent tw-transition-all"
              href="#"
              target="_blank"
            >
              <NuxtIcon class="tw-text-18" name="crown" />
            </a>
          </div>
        </el-col>
        <el-col :span="24" :lg="3">
          <h4 class="tw-font-bold tw-uppercase">Pages</h4>
          <ul class="tw-mt-8 tw-text-grey tw-font-bold">
            <li>
              <NuxtLink class="hover:tw-text-white" to="/">Home</NuxtLink>
            </li>
            <li class="tw-mt-8">
              <a class="hover:tw-text-white" href="#">Contact Us</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="24" :lg="3">
          <h4 class="tw-font-bold tw-uppercase">Videos</h4>
          <ul class="tw-mt-8 tw-text-grey tw-font-bold">
            <li>
              <NuxtLink
                class="hover:tw-text-white"
                :to="{ name: 'search', query: { order: 'new-uploads' } }"
              >
                New Uploads
              </NuxtLink>
            </li>
            <li class="tw-mt-8">
              <NuxtLink
                class="hover:tw-text-white"
                :to="{ name: 'search', query: { order: 'most-viewed' } }"
              >
                Most Viewed
              </NuxtLink>
            </li>
            <li class="tw-mt-8">
              <NuxtLink
                class="hover:tw-text-white"
                :to="{ name: 'search', query: { order: 'top-rated' } }"
              >
                Top Rated
              </NuxtLink>
            </li>
            <li class="tw-mt-8">
              <NuxtLink
                class="hover:tw-text-white"
                :to="{ name: 'search', query: { order: 'random' } }"
              >
                Random
              </NuxtLink>
            </li>
          </ul>
        </el-col>
        <el-col :span="24" :lg="3">
          <h4 class="tw-font-bold tw-uppercase">Partners</h4>
          <ul class="tw-mt-8 tw-text-grey tw-font-bold">
            <li>
              <a class="hover:tw-text-white" href="#">Belief</a>
            </li>
            <li class="tw-mt-8">
              <a class="hover:tw-text-white" href="#">Hope</a>
            </li>
            <li class="tw-mt-8">
              <a class="hover:tw-text-white" href="#">Love</a>
            </li>
            <li class="tw-mt-8">
              <a class="hover:tw-text-white" href="#">Despair</a>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </el-footer>
</template>

<style scoped>
#hentasy {
  .el-footer {
    @apply tw-px-20 tw-py-64 tw-bg-black-300;
  }
}
</style>
