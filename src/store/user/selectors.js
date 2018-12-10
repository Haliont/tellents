// import { createSelector } from 'reselect';

export const getUsername = state => state.user.userData.full_name;
export const getUserAvatar = state => (state.user.userData.image || { url: '' }).url;
export const getUserData = state => state.user.userData;

export const isSignedIn = state => state.user.isSignedIn;
export const isSigningIn = state => state.user.signingInState === 'requested';
export const isSigningUp = state => state.user.signingUpState === 'requested';
