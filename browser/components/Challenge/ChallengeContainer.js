import { connect } from 'react-redux';
// import Challenge from './Challenge';
import ChallengeWrapper from './ChallengeWrapper';



const mapStateToProps = function (state) {
  return {
    challenges: state.challenges,
    score: state.score,
    currentLine: state.currentLine
  };
};

const mapDispatchToProps = function (dispatch) {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeWrapper);
