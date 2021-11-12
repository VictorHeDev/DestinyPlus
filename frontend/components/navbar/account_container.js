import { connect } from 'react-redux';

import Account from './account';

const mSTP = (state) => ({
  currentProfile: state.session.currentProfile,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(Account);
