<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
const emit = defineEmits(['on-confirm', 'on-cancel'])
const dialog = ref(false);
enum modalResult {
    CONFIRM = 'confirm',
    CANCEL = 'cancel'
}
function modalConfirmed(result) {
    return result === modalResult.CONFIRM;
}
function modalCancelled(result) {
    return result === modalResult.CANCEL;
}
function openModal() {
    dialog.value = true;
}
function closeModal(result) {
    if (modalConfirmed(result)) {
        emit('on-confirm');
    }
    if (modalCancelled(result)) {
        emit('on-cancel');
    }
    dialog.value = false;
}

</script>

<template>
    <v-dialog v-model="dialog" persistent width="624">
        <template v-slot:activator="{ props }">
            <slot name='btn' :props="props">
            </slot>
        </template>
        <v-card class="modal-border">
            <v-card-title>
                <span class="text-h5">User Profile</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red-darken-1" variant="text" @click="closeModal('cancel')">
                    Close
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="closeModal('confirm')">
                    Confirm
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style lang="scss" scoped>
.v-btn {
    border-radius: 25px;
}

.modal-border {
    border-radius: 10px 25px !important;
}
</style>