/*
 * Vue
 */
const __VueImp = `import Vue from 'vue';`;
const __VueDefault = `<template>
  <div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponent = `<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'Snpt'
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithData = `<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'Snpt',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithMethod = `<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithProps = `<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  props: {
    data: {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithDataMethodProps = `<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  data: () => {
    return {

    }
  },
  methods: {

  },
  props: {
    data: {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VIf = `<div v-if="awesome">Snpt is awesome!</div>`;

const __VElse = `<div v-if="awesome">Snpt is awesome!</div>
<div v-else>Oh no 😢</div>`;

const __VShow = `<div v-show="ok">Snpt!</div>`;

const __VFor = `<div v-for="item in items">
  {{ item.text }}
</div>`;

export default {
  import: {
    vue: {
      code: __VueImp,
      type: 'vue'
    },
    defaultVue: {
      code: __VueDefault
    }
  },
  components: {
    component: {
      code: __VueComponent,
      type: 'vue'
    },
    componentWithData: {
      code: __VueComponentWithData,
      type: 'vue'
    },
    componentWithMethod: {
      code: __VueComponentWithMethod,
      type: 'vue'
    },
    componentWithProps: {
      code: __VueComponentWithProps,
      type: 'vue'
    },
    componentWithDataMethodProps: {
      code: __VueComponentWithDataMethodProps,
      type: 'vue'
    }
  },
  directives: {
    'v-if': {
      code: __VIf,
      type: 'vue'
    },
    'v-else': {
      code: __VElse,
      type: 'vue'
    },
    'v-show': {
      code: __VShow,
      type: 'vue'
    },
    'v-for': {
      code: __VFor,
      type: 'vue'
    }
  }
};
