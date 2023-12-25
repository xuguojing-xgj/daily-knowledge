<script setup lang="ts">


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
        <img src="../images/nailao-01.png" class="image" alt="">
        {{props.title}}
    </h6>

    <div v-else class="statuscodetext">
        <img src="../images/naicha-01.png" class="image" alt="">
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
    /* 指定对齐方式 */
    vertical-align: center; 
    font-size: 14px;
    padding-top:5px;
    padding-left:10px;
}
.image {
    display: inline-block;
    width: 15px;
    height: 15px;
}

.statuscodetext {
    margin-top:10px;
    margin-left:30px;
    vertical-align: center; 
    /* 设置字体渐变 */
    background: linear-gradient(to right, red, blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>