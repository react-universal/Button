import React from 'react';
import {Text, View} from 'react-native';

import Button from '../../packages/button/lib/button';

import Header from '../components/Header';
import Container from '../components/Container';
import {storiesOf} from '../helpers/storiesOf';

storiesOf('Base Button', module)
  .addParameters({jest: ['Button']})
  .add('from click', () => (
    <Container>
      <Header title={'Ripple from where it was clicked'} />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Button rippleColor={'blue'} style={{}}>
          <Text>Click Me</Text>
        </Button>
        <Button style={{width: 200, height: 200, marginLeft: 40}}>
          <View
            style={{
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Click Me</Text>
          </View>
        </Button>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 40}}>
        <Button
          rippleColor={'#E91E63'}
          rippleContainerBorderRadius={100}
          style={{
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: 48, height: 48, backgroundColor: 'red'}} />
        </Button>
        <Button
          rippleColor={'#9C27B0'}
          style={{
            width: 300,
            height: 200,
            marginLeft: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          rippleContainerBorderRadius={100}>
          <Text>Massive Button</Text>
        </Button>
      </View>
    </Container>
  ))
  .add('from center', () => (
    <Container scroll>
      <Header title={'Ripple form center'} />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Button
          rippleColor={'blue'}
          rippleCentered
          style={{
            width: 180,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
          }}>
          <Text>Click Me</Text>
        </Button>
        <Button
          rippleCentered
          style={{width: 200, height: 200, marginLeft: 40}}>
          <View
            shadow={4}
            style={{
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Click Me</Text>
          </View>
        </Button>
      </View>
    </Container>
  ))
  .add('sequential', () => (
    <Container scroll>
      <Header title={'Sequential Ripple'} />
      <Text style={{marginBottom: 40}}>
        Try clicking quickly versus other demos
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Button
          rippleColor={'blue'}
          rippleSequential
          style={{
            width: 180,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
          }}>
          <Text>Click Me</Text>
        </Button>
        <Button
          rippleCentered
          rippleSequential
          style={{width: 200, height: 200, marginLeft: 40}}>
          <View
            shadow={4}
            style={{
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Click Me</Text>
          </View>
        </Button>
      </View>
    </Container>
  ));
