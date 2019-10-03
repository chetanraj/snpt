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

const __VueComponentWithVText = `<template>
  <div>
    <h1 v-text="title"></h1>
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  data: () => {
    return {
      title: 'Hello Vue'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithVHtml = `<template>
  <div v-html="title"></div>
</template>

<script>
export default {
  name: 'Snpt',
  data: () => {
    return {
      html: '<h1>Hello Vue</h1>'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithVShow = `<template>
  <div>
    <h1 v-show="show">Hello Vue</h1>
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  data: () => {
    return {
      show: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithVIf = `<template>
  <div>
    <h1 v-if="show">Hello Vue</h1>
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  data: () => {
    return {
      show: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithVElse = `<template>
  <div>
    <h1 v-if="show">Hello Vue</h1>
    <h1 v-else>Oh no</h1>
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  data: () => {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithVElseIf = `<template>
  <div>
    <h1 v-if="titleType === 'A'">Hello Vue</h1>
    <h1 v-else-if="titleType === 'B'">Hi Vue</h1>
    <h1 v-else>By Vue</h1>
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  data: () => {
    return {
      titleType: 'B'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithVFor = `<template>
  <div>
    <ul>
      <li v-for="user in users">{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  data: () => {
    return {
      users: [
        {
          id: 1,
          name: 'John'
        },
        {
          id: 2,
          name: 'John 2'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithVOn = `<template>
  <div>
    <h1>{{ title }}</h1>
    <button v-on:click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  data: () => {
    title: 'Hello Vue'
  },
  methods: () => {
    handleClick: () => this.title = 'Bye Vue'
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithVBind = `<template>
  <div>
    <img v-bind:src="image" />

    <!-- v-bind shorthand syntax -->
    <img :src="image" />
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  data: () => {
    image: 'IMAGE_URL'
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithVModel = `<template>
  <div>
    <input v-model="name" placeholder="Edit me">
    <p>Name: {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Snpt',
  data: () => {
    name: ''
  }
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithVSlot = `<template>
  <button v-slot="clickMeButton">
    Click me
  </button>
</template>

<script>
export default {
  name: 'Snpt'
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithVPre = `<template>
  <h1 v-pre>Hello Vue</h1>
</template>

<script>
export default {
  name: 'Snpt'
}
</script>

<style lang="scss" scoped>

</style>`;

const __VueComponentWithVCloak = `<template>
  <h1 v-cloak>Hello Vue</h1>
</template>

<script>
export default {
  name: 'Snpt'
}
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
</style>`;

const __VueComponentWithVOnce = `<template>
  <h1 v-once>{{ title }}</h1>
</template>

<script>
export default {
  name: 'Snpt',
  data: () => {
    title: 'Hello Vue'
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
  },
  directives: {
    componentWithVText: {
      code: __VueComponentWithVText,
      type: 'vue'
    },
    componentWithVHtml: {
      code: __VueComponentWithVHtml,
      type: 'vue'
    },
    componentWithVShow: {
      code: __VueComponentWithVShow,
      type: 'vue'
    },
    componentWithVIf: {
      code: __VueComponentWithVIf,
      type: 'vue'
    },
    componentWithVElse: {
      code: __VueComponentWithVElse,
      type: 'vue'
    },
    componentWithVElseIf: {
      code: __VueComponentWithVElseIf,
      type: 'vue'
    },
    componentWithVFor: {
      code: __VueComponentWithVFor,
      type: 'vue'
    },
    componentWithVOn: {
      code: __VueComponentWithVOn,
      type: 'vue'
    },
    componentWithVBind: {
      code: __VueComponentWithVBind,
      type: 'vue'
    },
    componentWithVModel: {
      code: __VueComponentWithVModel,
      type: 'vue'
    },
    componentWithVSlot: {
      code: __VueComponentWithVSlot,
      type: 'vue'
    },
    componentWithVPre: {
      code: __VueComponentWithVPre,
      type: 'vue'
    },
    componentWithVCloak: {
      code: __VueComponentWithVCloak,
      type: 'vue'
    },
    componentWithVOnce: {
      code: __VueComponentWithVOnce,
      type: 'vue'
    }
  }
};
