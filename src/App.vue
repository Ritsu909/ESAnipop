<script lang="ts" setup>
import { ref } from "vue";

/* eslint-disable no-magic-numbers */
const characterMap = new Map([
    ["仙石忍", 7],
    ["明星昴流", 11],
    ["乙狩阿多尼斯", 15],
    ["深海奏汰", 28],
    ["天城燐音", 71]
]);

const itemMap = new Map([
    ["无加成", 0],
    ["助力沙漏", 300085],
    ["加分木锤", 300086]
]);

const gamePageRoot = "game.html";

const formRef = ref<HTMLFormElement | null>(null);
const character = ref("");

const itemID = ref(0);

/* eslint-enable no-magic-numbers */

async function validate() {
    return formRef.value?.validate();
}

async function start() {
    const { valid } = await validate();
    if (!valid) {
        return;
    }

    const url = `${gamePageRoot}?item_id=${itemID.value}&character_id=${characterMap.get(character.value)}&count=1`;
    window.open(url, "_blank", "width=480,height=800");
}
</script>

<template>
    <header>
        <h1 class="banner">ES消消乐启动器</h1>
    </header>
    <main class="container">
        <v-form ref="formRef" @submit.prevent>
            <v-select
                v-model="character"
                :items="Array.from(characterMap.keys())"
                :rules="[(v) => !!v || '必选']"
                class="form-selector"
                label="角色"
                required
                variant="solo"
            ></v-select>
            <v-radio-group v-model="itemID" inline label="加成道具">
                <v-radio
                    v-for="item in itemMap.keys()"
                    :key="item"
                    :label="item"
                    :value="itemMap.get(item)"
                ></v-radio>
            </v-radio-group>
            <v-btn block class="mt-4" color="success" @click="start">
                启动
            </v-btn>
        </v-form>
    </main>
    <footer class="container">
        <span>注：角色仅在步数关卡中可见，助力沙漏仅在时间关卡中有作用</span>
    </footer>
</template>

<style scoped>
header {
    padding-top: 20px;
}

footer {
    padding-top: 50px;
}

.banner {
    margin-bottom: 50px;
    border-radius: 5px;
    font-size: xx-large;
    text-align: center;
}

.container {
    margin-left: 30vw;
    margin-right: 30vw;
}

.form-selector {
    margin-top: 10px;
    margin-bottom: 10px;
}

@media screen and (max-width: 1600px) {
    .container {
        margin-left: 20vw;
        margin-right: 20vw;
    }
}

@media screen and (max-width: 1200px) {
    .container {
        margin-left: 10vw;
        margin-right: 10vw;
    }
}

@media screen and (max-width: 600px) {
    .container {
        margin-left: 20px;
        margin-right: 20px;
    }
}
</style>
