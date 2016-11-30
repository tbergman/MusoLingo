import { combineReducers } from 'redux';
import user from "./user";
import { topicsReducer } from './TopicsActions';
import { lessonsReducer } from './LessonsActions';
import { slidesReducer } from './SlidesActions';
import { challengesReducer, scoreReducer } from './ChallengeActions';
import { numOfKeysReducer } from './UserKeyActions'
import { quizzesReducer, currentQuizReducer } from './QuizzesActions'
import {completedQuizzesReducer, quizScoreReducer} from './ProgressActions'

export default combineReducers({
    user,
    topics: topicsReducer,
    lessons: lessonsReducer,
    slides: slidesReducer,
    challenges: challengesReducer,
    score: scoreReducer,
    keys: numOfKeysReducer,
    quizzes: quizzesReducer,
    currentQuiz: currentQuizReducer,
    completedQuizzes: completedQuizzesReducer,
    quizScores: quizScoreReducer
});
