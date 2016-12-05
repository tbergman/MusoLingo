import { combineReducers } from 'redux';
import user from "./user";
import { topicsReducer } from './TopicsActions';
import { lessonsReducer } from './LessonsActions';
import { slidesReducer } from './SlidesActions';
import { challengesReducer, scoreReducer, currentLineReducer } from './ChallengeActions';
import { metronomeReducer } from './MetronomeActions';
import { numOfKeysReducer } from './UserKeyActions';
import { quizzesReducer, currentQuizReducer } from './QuizzesActions'

export default combineReducers({
    user,
    topics: topicsReducer,
    lessons: lessonsReducer,
    slides: slidesReducer,
    challenges: challengesReducer,
    score: scoreReducer,
    currentLine: currentLineReducer,
    keys: numOfKeysReducer,
    quizzes: quizzesReducer,
    rhythm: metronomeReducer
});
