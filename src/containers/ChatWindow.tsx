import * as React from 'react';
import { connect } from 'react-redux';
import { ChatState } from '../store/chat/types';
import { ApplicationState, ConnectedReduxProps } from '../store';
import { View, Text } from 'react-native';

// Standard component props
interface ChatWindowProps extends ConnectedReduxProps<ChatState> {
    // write your props here
}

// Create an intersection type of the component props and our state.
type AllProps = ChatWindowProps & ChatState;

// tslint:disable-next-line:variable-name
const ChatWindow: React.SFC<AllProps> = ({ username, messages }) => (
    <View>
        <Text>{username} -- {messages}</Text>
    </View>
);

const mapStateToProps = (state: ApplicationState) => state.chat;
export default connect(mapStateToProps)(ChatWindow);