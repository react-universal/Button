# @reactunivseral/button-base

The base button used for React Universal

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import Button from '@reactuniversal/button-base';

export default function Page() {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Button
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
