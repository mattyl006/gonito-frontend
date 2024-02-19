import { Route, Routes } from 'react-router-dom';
import {
  CHALLENGES_PAGE,
  CHALLENGE_CREATE_PAGE,
  CHALLENGE_PAGE,
  CHALLENGE_SECTIONS,
  IS_LOGGED_IN,
  LOGIN_PAGE,
  POLICY_PRIVACY_PAGE,
  PROFILE_PAGE,
  REGISTER_PAGE,
} from '../../utils/globals';
import Challenge from '../../pages/Challenge';
import Challenges from '../../pages/Challanges';
import PolicyPrivacy from '../../pages/PolicyPrivacy';
import LandingPage from '../../pages/LandingPage';
import Submission from '../../pages/Submission';
import Profile from '../../pages/Profile/Profile';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import ChallengeCreate from '../../pages/ChallengeCreate/ChallengeCreate';
import LoginPage from '../../pages/auth/LoginPage';
import RegisterPage from '../../pages/auth/RegisterPage';

const RoutingManager = (props) => {
  const loggedIn = IS_LOGGED_IN();

  const logInRoutesRender = () => {
    if (loggedIn) {
      return (
        <>
          <Route
            path={`/submission/:challengeId/:submissionId`}
            element={<Submission />}
          />
          <Route
            path={`${CHALLENGE_PAGE}/:challengeId/myentries`}
            element={
              <Challenge
                section={CHALLENGE_SECTIONS.MY_ENTRIES}
                popUpMessageHandler={props.popUpMessageHandler}
              />
            }
          />
          {/* <Route
            path={`${CHALLENGE_PAGE}/:challengeId/submit`}
            element={
              <Challenge
                section={CHALLENGE_SECTIONS.SUBMIT}
                popUpMessageHandler={props.popUpMessageHandler}
              />
            }
          /> */}
          <Route
            path={PROFILE_PAGE}
            element={
              <Profile popUpMessageHandler={props.popUpMessageHandler} />
            }
          />
        </>
      );
    }
  };

  const rootPageRender = () => {
    if (loggedIn) {
      return (
        <>
          <Route
            exact
            path="/"
            element={
              <Challenges popUpMessageHandler={props.popUpMessageHandler} />
            }
          />
          <Route
            element={
              <Challenges popUpMessageHandler={props.popUpMessageHandler} />
            }
          />
        </>
      );
    }
    return (
      <>
        <Route
          exact
          path="/"
          element={
            <LandingPage
              popUpMessageHandler={props.popUpMessageHandler}
              showNavOptions={props.showNavOptions}
              hideNavOptions={props.hideNavOptions}
            />
          }
        />
        <Route
          element={
            <LandingPage
              popUpMessageHandler={props.popUpMessageHandler}
              showNavOptions={props.showNavOptions}
              hideNavOptions={props.hideNavOptions}
            />
          }
        />
      </>
    );
  };

  return (
    <Routes>
      <Route path={LOGIN_PAGE} element={<LoginPage />} />
      <Route path={REGISTER_PAGE} element={<RegisterPage />} />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId`}
        element={
          <Challenge
            section={CHALLENGE_SECTIONS.LEADERBOARD}
            popUpMessageHandler={props.popUpMessageHandler}
          />
        }
      />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId/leaderboard`}
        element={
          <Challenge
            section={CHALLENGE_SECTIONS.LEADERBOARD}
            popUpMessageHandler={props.popUpMessageHandler}
          />
        }
      />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId/allsubmissions`}
        element={
          <Challenge
            section={CHALLENGE_SECTIONS.ALL_ENTRIES}
            popUpMessageHandler={props.popUpMessageHandler}
          />
        }
      />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId/submit`}
        element={
          <Challenge
            section={CHALLENGE_SECTIONS.SUBMIT}
            popUpMessageHandler={props.popUpMessageHandler}
          />
        }
      />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId/readme`}
        element={<Challenge section={CHALLENGE_SECTIONS.README} />}
      />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId/howto`}
        element={
          <Challenge
            popUpMessageHandler={props.popUpMessageHandler}
            section={CHALLENGE_SECTIONS.HOW_TO}
          />
        }
      />
      <Route
        path={CHALLENGES_PAGE}
        element={<Challenges popUpMessageHandler={props.popUpMessageHandler} />}
      />
      <Route
        path={POLICY_PRIVACY_PAGE}
        element={
          <PolicyPrivacy popUpMessageHandler={props.popUpMessageHandler} />
        }
      />
      <Route
        path={`${POLICY_PRIVACY_PAGE}/login`}
        element={
          <PolicyPrivacy
            popUpMessageHandler={props.popUpMessageHandler}
            beforeLogin
          />
        }
      />
      <Route
        path={`${POLICY_PRIVACY_PAGE}/register`}
        element={
          <PolicyPrivacy
            popUpMessageHandler={props.popUpMessageHandler}
            beforeRegister
          />
        }
      />
      <Route
        path={CHALLENGE_CREATE_PAGE}
        element={
          <ChallengeCreate popUpMessageHandler={props.popUpMessageHandler} />
        }
      />
      <Route path={'*'} element={<PageNotFound />} />
      {logInRoutesRender()}
      {rootPageRender()}
    </Routes>
  );
};

export default RoutingManager;
