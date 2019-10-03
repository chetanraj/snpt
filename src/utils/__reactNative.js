const __NativeImp = `import {  } from 'react-native';`;
const __NativeImpModuleName = `import 'module';`;
const __NativeImpModule = `import { example } from 'module';`;
const __NativeImpModuleAlias = `import { originalName as aliasName } from 'module';`;
const __NativeImpModuleAllAlias = `import * as alias from 'module';`;

const __NativeCmp = `import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ClassComponent extends Component {
  render() {
    return (
      <View>
        <Text> Class Component </Text>
      </View>
    )
  }
}

export default ClassComponent;`;

const __NativePureCmp = `import React from 'react';
import { Text, View } from 'react-native';

const Component = (props) => {
  return (
    <View>
      <Text> Pure Component </Text>
    </View>
  )
}

export default Component;
`;

export default {
  import: {
    'react-native': {
      code: __NativeImp
    },
    'module-name': {
      code: __NativeImpModuleName
    },
    'module-destructure': {
      code: __NativeImpModule
    },
    'module-alias': {
      code: __NativeImpModuleAlias
    },
    'module-every-alias': {
      code: __NativeImpModuleAllAlias
    }
  },
  components: {
    component: {
      code: __NativeCmp,
      type: 'react-native'
    },
    'pure-component': {
      code: __NativePureCmp,
      type: 'react-native'
    }
  }
};
