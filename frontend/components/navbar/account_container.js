import { connect } from 'react-redux';

import Account from './account';

const mSTP = (state) => ({
  currentProfile: state.entities.profiles[state.session.currentProfile],
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Account);
