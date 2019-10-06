<template>
  <div class="Form">
    <h1 class="display-4">Form</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
      >
        <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
                id="input-3"
                v-model="form.food"
                :options="foods"
                required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
  import {
    BButton,
    BCard,
    BForm,
    BFormCheckbox,
    BFormCheckboxGroup,
    BFormGroup,
    BFormInput,
    BFormSelect
  } from 'bootstrap-vue';

  @Component({
    components: {
      'b-form': BForm,
      'b-form-group': BFormGroup,
      'b-form-input': BFormInput,
      'b-card': BCard,
      'b-form-select': BFormSelect,
      'b-button': BButton,
      'b-form-checkbox-group': BFormCheckboxGroup,
      'b-form-checkbox': BFormCheckbox,
    }
  })
  export default class App extends Vue {
    public dataParse: any;
    @Prop() private data!: string;

    public form = {
      email: '',
      name: '',
      food: null,
      checked: []
    };
    public foods = [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'];
    public show = true;

    public onClick(event: any) {
      event.target.dispatchEvent(new CustomEvent('my-click', {
        bubbles: true,
        detail: 'clicked',
        composed: true,
      }));
    }

    onSubmit(evt: any) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }

    onReset(evt: any) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true
      })
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
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';
  .Form {
    padding: 1em;
    border: 3px dashed #42b983;
  }
</style>
