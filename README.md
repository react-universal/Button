<p align="center" style="margin-bottom: 0px !important;">
  <img width="600" src="https://raw.githubusercontent.com/react-universal/ripple/master/media/logo.jpg" alt="Material Bread logo" align="center">
</p>

A Button component that works on the Web, Android, iOS, Electron, and anywhere else React Native is supported. This component is a part of the React Universal ecosystem of universal React and React Native components. Checkout the [React Universal docs](https://github.com/react-universal/react-universal) to learn more.

### [Storybook Demos](https://react-universal.github.io/button/?path=/story/*)

### Installation

```bash
npm i @reactuniversal/button --save
```

### Example

```
import React from 'react';
import { View, Text } from 'react-native';
import Button from '@reactuniversal/button';

export default function Page() {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Button
          rippleColor={'blue'}
          style={{
            width: 180,
            height: 250,
          }}>
          <Text>Click Me</Text>
        </Button>
      </View>
    );
}`;

```
