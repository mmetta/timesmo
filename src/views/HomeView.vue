<template>
  <div id="HomeView">
    <v-row class="ma-5">
      <strong>Olá Fulano,</strong>
    </v-row>
    <v-row class="ma-5">
      <v-icon class="mr-2">mdi-checkbox-multiple-marked-outline</v-icon>
      <strong>Maslow</strong>
    </v-row>
    <v-row class="ma-5">
      <v-icon class="mr-2">mdi-checkbox-multiple-marked-outline</v-icon>
      <router-link style="text-decoration: none;" to="/egoinfo">
        <strong class="success--text">Estados do Ego</strong>
      </router-link>
    </v-row>
    <v-row class="ma-5">
      <v-icon class="mr-2">mdi-checkbox-multiple-marked-outline</v-icon>
      <strong>Compulsores</strong>
    </v-row>
    <v-row class="ma-5">
      <strong>Escolha um teste para iniciar seu autoconhecimento.</strong>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
