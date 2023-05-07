<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <div class="tw-absolute tw-top-[50%] -tw-translate-y-[50%] tw-right-0">
    <div class="tw-bg-black-300 tw-p-18 tw-rounded-tl-8 tw-rounded-bl-8">
      <ul>
        <li>
          <a
            class="tw-transition-all tw-text-white hover:tw-text-accent"
            :href="config.public.TWITTER_URL"
            target="_blank"
          >
            <NuxtIcon class="tw-text-24" name="twitter" />
          </a>
        </li>
        <li class="tw-mt-30">
          <a
            class="tw-transition-all tw-text-white hover:tw-text-accent"
            :href="config.public.DISCORD_URL"
            target="_blank"
          >
            <NuxtIcon class="tw-text-24" name="discord" />
          </a>
        </li>
        <li class="tw-mt-30">
          <a
            class="tw-transition-all tw-text-white hover:tw-text-accent"
            :href="config.public.TELEGRAM_URL"
            target="_blank"
          >
            <NuxtIcon class="tw-text-24" name="telegram" />
          </a>
        </li>
        <li class="tw-mt-30">
          <a
            class="tw-transition-all tw-text-white hover:tw-text-accent"
            :href="config.public.PATREON_URL"
            target="_blank"
          >
            <NuxtIcon class="tw-text-24" name="patreon" />
          </a>
        </li>
        <li class="tw-mt-30">
          <a
            class="tw-transition-all tw-text-white hover:tw-text-accent"
            href="#"
            target="_blank"
          >
            <NuxtIcon class="tw-text-24" name="crown" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
