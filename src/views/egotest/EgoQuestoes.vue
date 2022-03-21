<template>
  <div id="EgoQuestoes">
    <div v-if="!showTest">
      <v-row class="mt-5 justify-center">
        <h2 class="accent--text">Aguarde...</h2>
      </v-row>
    </div>
    <div v-else>
    <v-row >
      <v-col class="legenda" cols="8" offset-sm="2">
        <v-row class="ml-4 mt-4">
          <strong>0</strong><span class="ml-2 success--text">nunca sou assim</span>
        </v-row>
        <v-row class="ml-4">
          <strong>1</strong><span class="ml-2 success--text">as vezes sou assim</span>
        </v-row>
        <v-row class="ml-4">
          <strong>2</strong><span class="ml-2 success--text">a maioria das vezes sou assim</span>
        </v-row>
        <v-row class="ml-4 mb-2">
          <strong>3</strong><span class="ml-2 success--text">sempre sou assim</span>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="align-center justify-center">
      <v-col cols="10"><strong class="success--text">{{ a + 1 }}) </strong> {{ egos[a].atitude }}</v-col>
    </v-row>
    <v-row class="align-center justify-center ma-2">
        <v-btn-toggle  color="success" v-model="resp[0]">
          <v-btn small class="mr-2">
            0
          </v-btn>
          <v-btn small class="mr-2">
            1
          </v-btn>
          <v-btn small class="mr-2">
            2
          </v-btn>
          <v-btn small>
            3
          </v-btn>
        </v-btn-toggle>
    </v-row>
    <v-row class="align-center justify-center">
      <v-col cols="10"><strong class="success--text">{{ b + 1 }}) </strong> {{ egos[b].atitude }}</v-col>
    </v-row>
    <v-row class="align-center justify-center ma-2">
        <v-btn-toggle  color="success" v-model="resp[1]">
          <v-btn small class="mr-2">
            0
          </v-btn>
          <v-btn small class="mr-2">
            1
          </v-btn>
          <v-btn small class="mr-2">
            2
          </v-btn>
          <v-btn small>
            3
          </v-btn>
        </v-btn-toggle>
    </v-row>
    <v-row class="align-center justify-center">
      <v-col cols="10"><strong class="success--text">{{ c + 1 }}) </strong> {{ egos[c].atitude }}</v-col>
    </v-row>
    <v-row class="align-center justify-center ma-2">
        <v-btn-toggle  color="success" v-model="resp[2]">
          <v-btn small class="mr-2">
            0
          </v-btn>
          <v-btn small class="mr-2">
            1
          </v-btn>
          <v-btn small class="mr-2">
            2
          </v-btn>
          <v-btn small>
            3
          </v-btn>
        </v-btn-toggle>
    </v-row>

    <v-divider class="mt-5 success"></v-divider>

    <v-row class="my-5 algn-center justify-center">
      <v-btn
        class="success"
        @click="proxima()"
        :disabled="bloquear"
      >
        <v-icon>mdi-arrow-right</v-icon>
        próxima
      </v-btn>
    </v-row>
    </div>

  </div>
</template>

<script>
export default {
  name: 'EgoQuestoes',
  created () {
    this.$store.dispatch('loadEgos')
  },
  computed: {
    egos () {
      return this.$store.getters.egos
    },
    bloquear () {
      return this.resp[0] === null ||
      this.resp[1] === null ||
      this.resp[2] === null
    }
  },
  watch: {
    egos (e) {
      if (e.length > 0) {
        this.showTest = true
      }
    }
  },
  data () {
    return {
      showTest: false,
      a: 0,
      b: 1,
      c: 2,
      egoA: 0,
      egoB: 0,
      egoC: 0,
      egoD: 0,
      egoE: 0,
      egoF: 0,
      resp: [null, null, null]
    }
  },
  methods: {
    proxima () {
      const ego = [this.egos[this.a].ego, this.egos[this.b].ego, this.egos[this.c].ego]
      this.somaValor(ego)
      if (this.c === 47) {
        console.log(this.egoA, this.egoB, this.egoC, this.egoD, this.egoE, this.egoF)
        return
      }
      this.a += 3
      this.b += 3
      this.c += 3
    },
    somaValor (ego) {
      for (let i = 0; i < ego.length; i++) {
        const element = ego[i]
        switch (element) {
          case 'A': this.egoA += this.resp[i]
            break
          case 'B': this.egoB += this.resp[i]
            break
          case 'C': this.egoC += this.resp[i]
            break
          case 'D': this.egoD += this.resp[i]
            break
          case 'E': this.egoE += this.resp[i]
            break
          case 'F': this.egoF += this.resp[i]
            break
        }
      }
      this.resp = [null, null, null]
    }
  }
}
</script>

<style scoped>
  .legenda {
    font-size: 13px;
  }
</style>
