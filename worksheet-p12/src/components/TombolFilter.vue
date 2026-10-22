<script setup>
import { state, ubahKategori, aturUlang } from "../state.js";

const kategori = ["semua", "atasan", "bawahan"];
</script>

<template>
  <div>
    <button
      v-for="item in kategori"
      :key="item"
      :class="{ aktif: state.kategoriAktif === item }"
      @click="ubahKategori(item)"
    >
      {{ item }}
    </button>

    <button @click="aturUlang">Atur ulang</button>
  </div>
</template>
