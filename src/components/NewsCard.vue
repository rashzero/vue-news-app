<template>
  <v-card
    class="mx-auto"
  >
    <v-card-text>
      <div>{{news.title}}</div>
      <p class="display-1 text--primary">
        by {{news.by}} score: {{news.score}}
      </p>
      <p>time: {{new Date(news.time).toLocaleString()}}</p>
      <div class="text--primary">
        {{news.url}}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'NewsCard',
  props: ['news'],
};
</script>

<style>
.mx-auto {
  margin: 20px auto;
  padding: 10px;
  color: #42b983;
  background: #f3f3f3;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  border-radius: 10px;
  max-width: 400px;
}
</style>
