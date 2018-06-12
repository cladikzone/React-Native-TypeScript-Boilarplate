import { View, Text } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import ChatWindow from './containers/ChatWindow';

export interface Props {}
export interface State {}

export default class App extends React.Component<Props, State> {

	constructor(props) {
    super(props);
	}

	render() {
		return (
			<Provider store={configureStore}>
				<View style={{ backgroundColor: 'red' }}>
					<Text>This is webvsd view</Text>
					<ChatWindow />
				</View>
			</Provider>
		);
	}
}