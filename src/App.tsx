import { Text, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from './reduxStore';

export interface Props { }
export interface State { }

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={reduxStore}>
        <View>
          <Text>
            Test React native
          </Text>
        </View>
      </Provider>
    );
  }
}
