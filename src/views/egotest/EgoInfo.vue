<template>
  <div id="EgoInfo">
    <v-row class="ml-5 mt-5">
      <h2>Estados do Ego</h2>
    </v-row>
    <v-row class="secondary--text ml-5 mb-5">
      <h4>Instruções para responder o questionário</h4>
    </v-row>
    <v-row class="ml-5">
      <router-link style="text-decoration: none;" to="/egoquestoes">
        <strong class="success--text">Clique aqui para iniciar</strong>
      </router-link>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'EgoInfo'
}
</script>
