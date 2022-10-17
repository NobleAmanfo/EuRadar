import { CLUB_DATA, SAVE_TOKEN } from './types';

export const saveToken = (key) => ({
  type: SAVE_TOKEN,
  payload: key
});

export const saveClubData = (key) => ({
    type: CLUB_DATA,
    payload: key
  });