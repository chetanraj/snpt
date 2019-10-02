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

const __VueImpComponentsIntoComponents = `<template>
  <div>
    <snpt />
  </div>
</template>

<script>
import Snpt from './components/Snpt'
export default {
  name: 'ParentComponent',
  components: {
    Snpt
  },
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueImpComponentsIntoComponentsWithProps = `<template>
  <div>
    <snpt v-bind:data='{key: "value"}' />
  </div>
</template>

<script>
import Snpt from './components/Snpt'
export default {
  name: 'ParentComponent',
  components: {
    Snpt
  },
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
    <h1>{{this.dataKey}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  data () {
    return {
      dataKey: "dataValue"
    }
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithMethod = `<template>
  <div>
    <button v-on:click="methodName()">Click Me</button>
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  methods: {
    methodName: () => {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithProps = `<template>
  <div>
    {{data.key}}
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  props: {
    data: {
        type: Object,
        default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithDataMethodProps = `<template>
  <div>
    <h1>{{this.dataKey}}</h1>
    {{data.key}}
    <button v-on:click="methodName()">Click Me</button>
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  data: () => {
    return {
      dataKey: "dataValue"
    }
  },
  methods: {
    methodName: () => {

    }
  },
  props: {
    data: {
        type: Object,
        default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>`;

export default {
  import: {
    vue: {
      code: __VueImp,
      type: 'vue'
    },
    defaultVue: {
      code: __VueDefault
    },
    importComponent: {
      code: __VueImpComponentsIntoComponents,
      type: 'vue'
    },
    importComponentWithProp: {
      code: __VueImpComponentsIntoComponentsWithProps,
      type: 'vue'
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
  }
};
