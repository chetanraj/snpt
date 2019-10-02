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

const __VueDirectiveAutoFocus = `<template>
  <input v-auto-focus type="email" placeholder="I'm auto-focused!">
</template>

<script>
Vue.directive('auto-focus', {
  inserted: el => el.focus()
})
</script>`;

const __VueDirectiveClickAway = `<template>
  <div v-clickaway="hideMe">Hide this</div>
</template>

<script>
Vue.directive('clickaway', {
  bind (el, { value }) {
    if (typeof value !== 'function') {
      return
    }

    document.addEventListener('click', e => el.contains(e.target) || value())
  }
})

export default {
  methods: {
    hideMe () {
      // logic 
    }
  }
}
</script>`;

const __VueDirectiveLongPress = `<template>
  <button v-longpress='showOptions'>Hold me for a while</button>
</template>

<script>
const PRESS_TIMEOUT = 1000

Vue.directive('longpress', {
  bind: function (el, { value }, vNode) {
    if (typeof value !== 'function') {
      return
    }

    let pressTimer = null

    const start = e => {
      if (e.type === 'click' && e.button !== 0) {
        return;
      }

      if (pressTimer === null) {
        pressTimer = setTimeout(() => value(e), PRESS_TIMEOUT)
      }
    }

    const cancel = () => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }

    ;['mousedown', 'touchstart'].forEach(e => el.addEventListener(e, start))
    ;['click', 'mouseout', 'touchend', 'touchcancel'].forEach(e => el.addEventListener(e, cancel))
  }
})
</script>`;

const __VueDirectiveBind = `<div v-bind:class="someClassObject"></div>`;

const __VueDirectiveHtml = `<p v-html="'<strong>this is an example of a string in some text</strong>'"></p>`;

const __VueDirectiveOnSubmitPrevent = `<button v-on:submit.prevent="onSubmit"></button>`;

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
    directiveAutoFocus: {
      code: __VueDirectiveAutoFocus,
      type: 'vue'
    },
    directiveClickAway: {
      code: __VueDirectiveClickAway,
      type: 'vue'
    },
    directiveLongPress: {
      code: __VueDirectiveLongPress,
      type: 'vue'
    },
    directiveBind: {
      code: __VueDirectiveBind,
      type: 'vue'
    },
    directiveHtml: {
      code: __VueDirectiveHtml,
      type: 'vue'
    },
    directiveOnSubmitPrevent: {
      code: __VueDirectiveOnSubmitPrevent,
      type: 'vue'
    }
  }
};
