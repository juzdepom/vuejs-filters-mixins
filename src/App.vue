<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <button type="btn btn-primary" @click="fruits.push('Berries')">Add Fruit</button>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
            </div>
        </div>
        <app-list></app-list>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <hr>
          <h1>Assignment</h1>
          <!-- EXERCISE 1 -->
          <p><strong>Filters</strong></p>
          <p>
            {{text | reverse | print-length}}
          </p>
          <p><strong>Computed</strong></p>
          {{ reversedText }} {{textLength}}
        </div>

    </div>
</template>

<script>
  import List from './List.vue';
  import { textMixin } from './textMixin';
  import { fruitMixin } from './fruitMixin';
    export default {
        data() {
            return {
                text: 'Hello there!',
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            },
            reverse(value){
              return value.split("").reverse().join("");
            }
        },
        components: {
          appList: List,
        },
        mixins: [fruitMixin, textMixin]
    }
</script>

<style>
</style>
