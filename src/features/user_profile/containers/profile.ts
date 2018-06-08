import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Events from '../components';

const mapStateToProps = state => ({...state});
const mapDispatchToProps = dispatch => ({ ...dispatch });

export const userProfile = connect(mapStateToProps, mapDispatchToProps)(
    Events
);