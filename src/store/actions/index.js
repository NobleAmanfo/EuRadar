import { CLUB_DATA, DELETE_CLUB_DATA, FILTER_CLUB_DATA, SAVE_TOKEN, SEARCH_CLUB_DATA, UPDATE_CLUB_DATA } from './types';

export const saveToken = (key) => ({
  type: SAVE_TOKEN,
  payload: key
});

export const saveClubData = (key) => ({
  type: CLUB_DATA,
  payload: key
});

export const updateClubData = (key) => {
  return {
    type: UPDATE_CLUB_DATA,
    payload: key,
  };
};

export const filterClubData=(key)=>{
  return {
    type: FILTER_CLUB_DATA,
    payload: key,
  };
}

export const searchClubData=(key)=>{
  return {
    type: SEARCH_CLUB_DATA,
    payload: key,
  };
}
