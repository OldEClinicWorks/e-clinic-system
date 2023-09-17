<script setup lang="ts">
import { ref, computed } from 'vue';
import { IonModal } from '@ionic/vue';
const emit = defineEmits(['input'])
const props = defineProps({
    value: String,
    label: String,
    placeholder: String,
    required: Boolean
})
const type = 'text';
const updateValue = (e: any) => {
    emit('input', e?.target?.value)
}
const detectLanguage = (text: string) => {
    // Define character ranges for some languages
    const rtlLanguages = /[\u0590-\u07FF\u0600-\u06FF\u0750-\u077F\u0591-\u05F4\u200F\u10A0-\u10FF\u0590-\u07FF\u0600-\u06FF\u0750-\u077F]/; // Arabic, Hebrew, Persian, etc.
    const ltrLanguages = /[A-Za-z0-9]/; // English, digits, etc.

    if (rtlLanguages.test(text)) {
        return 'rtl';
    } else if (ltrLanguages.test(text)) {
        return 'ltr';
    } else {
        return 'auto'; // Fallback to auto (browser default)
    }
};

const newValue = ref('')
const checkTextDir = computed(() => {
    return detectLanguage(newValue.value);
})
</script>

<template>
    <div class="text-input-container my-2">
        <span class="question">
            <input @input="updateValue" v-model="newValue" :type="type" required="true"
                :style="{ direction: checkTextDir }" />
            <label>First Name</label>
        </span>
    </div>
</template>
<style>
:root {
    --input-color: #ff4a56;
}
</style>
<style lang="scss" scoped>
.transition,
div button,
div .question label,
div .question input[type="text"] {
    -moz-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    -o-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    -webkit-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
}

div {
    background: transparent;
}

div h1 {
    color: var(--input-color);
    font-weight: 100;
    letter-spacing: 0.01em;
    margin-left: 15px;
    margin-bottom: 35px;
    text-transform: uppercase;
}

div button {
    margin-top: 35px;
    background-color: white;
    border: 1px solid var(--input-color);
    line-height: 0;
    font-size: 17px;
    display: inline-block;
    box-sizing: border-box;
    padding: 20px 15px;
    border-radius: 60px;
    color: var(--input-color);
    font-weight: 100;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
}

div button:hover,
div button:focus {
    color: white;
    background-color: var(--input-color);
}

div .question {
    position: relative;
    padding: 10px 0;
}

div .question:first-of-type {
    padding-top: 0;
}

div .question:last-of-type {
    padding-bottom: 0;
}

div .question label {
    transform-origin: left center;
    color: var(--input-color);
    font-weight: 100;
    letter-spacing: 0.01em;
    font-size: 17px;
    box-sizing: border-box;
    padding: 10px 15px;
    display: block;
    position: absolute;
    margin-top: -40px;
    z-index: 2;
    pointer-events: none;
}

div .question input[type="text"] {
    appearance: none;
    background-color: none;
    border: 1px solid var(--input-color);
    line-height: 0;
    font-size: 17px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 10px 15px;
    border-radius: 60px;
    color: var(--input-color);
    font-weight: 100;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
}

div .question input[type="text"]:focus {
    outline: none;
    background: var(--input-color);
    color: white;
    margin-top: 30px;
}

div .question input[type="text"]:valid {
    margin-top: 30px;
}

div .question input[type="text"]:focus~label {
    -moz-transform: translate(0, -35px);
    -ms-transform: translate(0, -35px);
    -webkit-transform: translate(0, -35px);
    transform: translate(0, -35px);
}

div .question input[type="text"]:valid~label {
    text-transform: uppercase;
    font-style: italic;
    -moz-transform: translate(5px, -35px) scale(0.6);
    -ms-transform: translate(5px, -35px) scale(0.6);
    -webkit-transform: translate(5px, -35px) scale(0.6);
    transform: translate(5px, -35px) scale(0.6);
}
</style>