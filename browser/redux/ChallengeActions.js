import axios from 'axios';
// ----------------------     ACTIONS     ----------------------------------

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^

export const SET_CHALLENGES = 'SET_CHALLENGES';

export const setChallenges = (challenges) => {
  return {
    type: SET_CHALLENGES,
    challenges
  }
}

export const askServerForChallenge = (challenge_id) => {
  return dispatch => {
    axios.get(`/api/challenges/${challenge_id}`)
    .then(res => {
      dispatch(setChallenges(res.data));
    })
    .catch(err => {
      console.error(err);
      console.log('Error getting the challenge from the db.');
    });
  }
}

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^

// --------------------         REDUCER         --------------------------
export const challengesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CHALLENGES:
      return action.challenges;
    default:
      return state
  }
}
