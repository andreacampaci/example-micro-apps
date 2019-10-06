<template>
  <div @click="onClick($event)">Here your WC</div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

  @Component
  export default class App extends Vue {
    public dataParse: any;
    @Prop() private data!: string;

    public onClick(event: any) {
      event.target.dispatchEvent(new CustomEvent('my-click', {
        bubbles: true,
        detail: 'clicked',
        composed: true,
      }));
    }



    @Watch('data', { immediate: true })
    private onDataChanged(newValue: any) {
      try {
        this.dataParse = JSON.parse(newValue);
      } catch (e) {
        this.dataParse = {};
      }
    }

  }
</script>

<style lang="scss" scoped>
</style>
