<script setup>
import { onMounted, watch } from "vue";
import { profil } from "./data.js";
import { state, simpan, muat, pulihkan, isiProyek } from "./state.js";
import { ambilProyek } from "./api.js";

import KepalaProfil from "./components/KepalaProfil.vue";
import TombolFilter from "./components/TombolFilter.vue";
import DaftarProyek from "./components/DaftarProyek.vue";

onMounted(async () => {
  pulihkan(muat());

  try {
    isiProyek(await ambilProyek());
  } catch (galat) {
    state.galat = "Data gagal dimuat. Periksa koneksi, lalu muat ulang.";
  } finally {
    state.memuat = false;
  }
});

watch(state, (nilai) => simpan(nilai), { deep: true });
</script>

<template>
  <KepalaProfil :profil="profil" />

  <h1>Koleksi Gaya Busana</h1>

  <TombolFilter />
  <DaftarProyek />
</template>
