import { Text, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from './reduxStore';
import UserProfile from './features/user_profile/components';

export interface Props { }
export interface State { }

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={reduxStore}>
        <View>
          <Text>
            User Profile Component
          </Text>
          <UserProfile {...this.props} />
        </View>
      </Provider>
    );
  }
}
