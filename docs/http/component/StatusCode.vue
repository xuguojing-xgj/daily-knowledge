<script setup lang="ts">
import '../../iconfont/iconfont';

interface Props {
    title?: string;
    text?: string;
    isTitle?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    text: '',
    isTitle: true,
});

</script>

<template>
    <h6 v-if='props.isTitle' class="title">
        <svg class="icon" aria-hidden="true" width='15px' height='15px' style="display:inline-block;">
            <use xlink:href="#icon-nailao-01"></use>
        </svg>
        {{props.title}}
    </h6>

    <div v-else class="statuscodetext">
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

.title {
    font-size: 14px;
    padding-top:5px;
    padding-left:10px;
}

.statuscodetext {
    margin-top:10px;
    margin-left:30px;
    background: linear-gradient(to right, red, blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>