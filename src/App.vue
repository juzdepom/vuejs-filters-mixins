<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- CHAINING MULTIPLE FILTERS -->
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <!-- FILTER -->
                <button type="btn btn-primary" @click="fruits.push('Berries')">Add Fruit</button>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
                <!-- FILTER -->
            </div>
        </div>
        <app-list></app-list>
    </div>
</template>

<script>
  import List from './List.vue';
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
            }
        },
        components: {
          appList: List,
        },
        mixins: [fruitMixin]
    }
</script>

<style>
</style>
