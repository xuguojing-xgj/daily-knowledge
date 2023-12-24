<script setup lang="ts">
import '../../iconfont/iconfont';

interface Props {
    text?: string;
}

const props = defineProps<Props>();

</script>

<template>
    <div style='color:#50C878;margin-top:10px;margin-left:30px;'>
        <svg class="icon" aria-hidden="true" width='15px' height='15px' style="display:inline-block;">
            <use xlink:href="#icon-naicha-01"></use>
        </svg>
         {{props.text}}
    </div>
</template>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>