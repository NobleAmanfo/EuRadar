import { CLUB_DATA, SAVE_TOKEN } from '../actions/types';

const initialState = {
 token: '',
 clubData: []
};

const Reducer = (state = initialState, action) => {
switch (action.type) {
case SAVE_TOKEN:
 return {
   ...state,
   token: action.payload,
};

case CLUB_DATA:
 return {
   ...state,
   clubData: action.payload,
};
default: 
 return state;
}
};

export default Reducer;