<script setup lang="ts">
defineProps<{
  name: string;
  width?: string;
  height?: string;
}>();

const useAsset = (path: string): string => {
  const assets = import.meta.glob("~/assets/img/**/*", {
    eager: true,
    import: "default",
  });
  // @ts-expect-error: wrong type info
  return assets["/assets/img/" + path];
};
</script>

<template>
  <img
    :src="useAsset(name + '.svg')"
    :alt="name"
    :width="width"
    :height="height"
  />
</template>
