import CHALLENGES_ACTION from '../pages/Challanges/model/ChallengesActions';
import { API } from '../utils/globals';

const getChallengesReducer = (dispatch) => {
  fetch(`${API}/challenges/get-challenges`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: CHALLENGES_ACTION.LOAD_CHALLENGES_FROM_API,
        payload: data,
      });
    });
};

export default getChallengesReducer;
