import * as ProfileApiUtil from '../util/profile_api_util';

// constants
export const RECEIVE_ALL_PROFILES = 'RECEIVE_ALL_PROFILES';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const REMOVE_PROFILE = 'REMOVE_PROFILE';
export const REFORMAT_PROFILE = 'REFORMAT_PROFILE';

// action creators
const receiveProfiles = (profiles) => {
  return {
    type: RECEIVE_ALL_PROFILES,
    profiles,
  };
};

const receiveProfile = (profile) => {
  return {
    type: RECEIVE_PROFILE,
    profile,
  };
};

const removeProfile = (profileId) => {
  return {
    type: REMOVE_PROFILE,
    profileId,
  };
};

const reformatProfile = (profileId) => {
  return {
    type: REFORMAT_PROFILE,
    profileId,
  };
};

export const reformatProfiles = (profileId) => (dispatch) => {
  dispatch(reformatProfile(profileId));
};

// thunk action creators
export const requestProfiles = () => (dispatch) => {
  return ProfileApiUtil.fetchProfiles().then((profiles) =>
    dispatch(receiveProfiles(profiles))
  );
};

export const requestProfile = (profileId) => (dispatch) => {
  return ProfileApiUtil.fetchProfile(profileId).then((profile) => {
    dispatch(receiveProfile(profile));
  });
};

export const createProfile = (profile) => (dispatch) => {
  return ProfileApiUtil.createProfile(profile).then((profile) =>
    dispatch(receiveProfile(profile))
  );
};

export const updateProfile = (profile) => (dispatch) => {
  return ProfileApiUtil.updateProfile(profile).then((profile) =>
    dispatch(receiveProfile(profile))
  );
};

export const deleteProfile = (profileId) => (dispatch) => {
  return ProfileApiUtil.deleteProfile(profileId).then(() =>
    dispatch(removeProfile(profileId))
  );
};
