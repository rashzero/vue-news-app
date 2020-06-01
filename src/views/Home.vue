<template>
  <div>
    <div v-for="news in getData.news" :key="news.id">
      <center>
        <NewsCard v-bind:news='news' />
      </center>
    </div>
    <div>
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            class="py-2"
          >
            <v-btn-toggle
              tile
              color="deep-purple accent-3"
              group
            >
              <router-link :to="{ path: '/', query: { page: currentPage() - 1 }}">
                <v-btn value="Back">
                  Back
                </v-btn>
              </router-link>

              <router-link
                :to="{ path: '/', query: { page: index }}"
                v-for="(button, index) in buttonGroup(getData.numbOfPage)"
                :key="button"
              >
                <v-btn>
                  {{index + 1}}
                </v-btn>
              </router-link>

              <router-link :to="{ path: '/', query: { page: currentPage() +1 }}">
                <v-btn value="Next">
                  Next
                </v-btn>
              </router-link>
            </v-btn-toggle>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import NewsCard from '@/components/NewsCard.vue';

export default {
  name: 'Home',
  components: {
    NewsCard,
  },

  props: ['page'],

  mounted() {
    this.addNews(this.currentPage());
  },

  computed: {
    getData() {
      return this.$store.getters.getData;
    },
  },

  methods: {
    buttonGroup(count) {
      return new Array(count).fill(null);
    },

    addNews(page) {
      return this.$store.dispatch('addNews', page);
    },

    currentPage() {
      if (this.page) {
        return +this.page;
      }
      return 0;
    },
  },
};
</script>

<style>
.chenged {
  background: #fff333;
}
</style>
