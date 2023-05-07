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
  <el-dialog v-model="isShownVal" append-to-body class="dialog">
    <el-row align="middle">
      <el-col :span="24" :lg="12">
        <img
          class="tw-block tw-w-[100%]"
          src="https://cdn.hentasy.com/static/login-required.png"
          alt="Login required"
        />
      </el-col>
      <el-col class="tw-text-white" :span="24" :lg="12">
        <div class="tw-p-40">
          <div class="tw-flex tw-items-center">
            <NuxtIcon class="tw-text-primary tw-text-24" name="key" />
            <h2 class="tw-ml-8 tw-text-24 tw-font-bold">Login required</h2>
          </div>
          <div class="tw-mt-30">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              debitis dolorem doloribus facilis fugit impedit minus molestias
              necessitatibus neque, nobis officiis quisquam quos reiciendis
              reprehenderit repudiandae sapiente sit, vel voluptatibus.
            </p>
          </div>
          <div class="tw-mt-30 md:tw-max-w-[220px]">
            <NuxtLink to="/login">
              <el-button size="large" type="primary" round> Login </el-button>
            </NuxtLink>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-dialog>
</template>
