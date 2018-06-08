import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export interface Props {
    user?: any;
}
export interface State { }
export default class UserProfile extends Component<Props, State> {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // this.props.getUser(1);
    }

    render() {
        return (
            <View style={styles}>
                <Text>
                    User Name: { this.props.user && this.props.user.username }
                </Text>
            </View>
        );
    }
}