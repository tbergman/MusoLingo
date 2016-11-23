import axios from 'axios'

// ----------------------     ACTIONS     ----------------------------------

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
export const SET_QUIZZES = 'SET_QUIZZES';

export const askServerForQuizzes = (lesson_id) => {
  return dispatch => {
    axios.get(`/api/quizzes/lesson_id/${lesson_id}`)
    .then(res => {
      dispatch(setQuizzes(res.data));
    })
    .catch(err => {
      console.error(err);
      console.log('Error getting the quizzes from the db.');
    });
  }
}

// NOTE: action creator for setting the topics.
export const setQuizzes = (quizzes) => {
  return {
    type: SET_QUIZZES,
    quizzes
  }
}
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^

// --------------------         REDUCER         --------------------------

export const quizzesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_QUIZZES:
      // NOTE: need to sort the slides in the order they should appear.
      action.quizzes.sort((a, b) => {
        return a.number - b.number;
      });
      return action.slides;

    default:
      return state
  }
}
