<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row
        class="mb-6"
        no-gutters
      >
        <v-col
          v-for="n in 2"
          :key="n"
        >
          <NewsCard v-bind:news='news' v-for="news in getData.news" :key="news.id"/>
        </v-col>
      </v-row>
    </v-container>
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
              <button type="button" value="Back" class="button">
                Back
              </button>
            </router-link>

            <router-link
              :to="{ path: '/', query: { page: index }}"
              v-for="(button, index) in buttonGroup(getData.numbOfPage)"
              :key="button"
            >
              <button
                type="button"
                class="button"
                v-bind:style="{ background: index === currentPage() ? '#fff333' : '',
                  display: index > currentPage() + 2 || index < currentPage() - 2 ? 'none' : ''}"
              >
                {{index + 1}}
              </button>
            </router-link>

            <router-link :to="{ path: '/', query: { page: currentPage() +1 }}">
              <button
                type="button"
                value="Next"
                class="button"
              >
                Next
              </button>
            </router-link>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-container>
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
},

.button {
  background-color: #FFFFFF;
  border: 1px solid #CCCCCC;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
  border-radius: 4px;
  color: #555555;
  display:block;
  width:120px;
  font-size: 14px;
  text-align:center;
  height: 20px;
  line-height: 20px;
  margin-bottom: 10px;
  padding: 4px 6px;
  vertical-align: middle;
  text-decoration:none;
}
.button:hover, a.bot8:focus {
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6);
  outline: 0 none;
}
</style>
