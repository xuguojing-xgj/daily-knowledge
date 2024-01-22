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
    <h6 v-if='props.isTitle' class="StatusCodeTitle">
        <img src="../images/nailao-01.png" class="StatusCodeImage" alt="">
        {{props.title}}
    </h6>

    <div v-else class="StatusCodeText">
        <img src="../images/naicha-01.png" class="StatusCodeImage" alt="">
         {{props.text}}
    </div>
</template>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.StatusCodeTitle {
    /* 指定对齐方式 */
    vertical-align: center; 
    font-size: 14px;
    padding-top:5px;
    padding-left:10px;
}
.StatusCodeImage {
    display: inline-block;
    width: 15px;
    height: 15px;
}

.StatusCodeText {
    margin-top:10px;
    margin-left:30px;
    vertical-align: center; 
    color: cornflowerblue;
    /* 设置字体渐变 */
    /* background: linear-gradient(to right, red, blue); */
    /* -webkit-background-clip: text; */
    /* -webkit-text-fill-color: transparent; */
}
</style>