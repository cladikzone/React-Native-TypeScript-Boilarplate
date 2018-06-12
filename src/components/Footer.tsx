import React from 'react';
import { ChatActions, ChatState } from '../store/chat/types';
import { ConnectedReduxProps, ApplicationState } from '../store';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { makeApiCall } from '../store/chat/actions';

interface State {}
interface Props extends ConnectedReduxProps<ChatActions> {}

type FooterProps = Props & ChatState;

class Footer extends React.Component<FooterProps, State> {

  constructor(props) {
    super(props);
  }

  render() {

    const {  dispatch } = this.props;

    return(
      <View>
        <Text>This is the footer </Text>
        <Button title='Test' onPress={ () => dispatch(makeApiCall('12')) } />
      </View>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => state.chat;
export default connect<State>(mapStateToProps)(Footer);