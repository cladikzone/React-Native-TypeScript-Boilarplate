import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserProfile from '../components';
import getUser  from '../actions';

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(getUser , dispatch)
});

export const userProfile = connect(mapStateToProps, mapDispatchToProps)(UserProfile);