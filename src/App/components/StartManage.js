import React from "react";
import { useNavigate } from "react-router-dom";
import { ROOT_PAGE, POLICY_PRIVACY_LOGIN_PAGE, POLICY_PRIVACY_REGISTER_PAGE } from "../../utils/globals";
import SESSION_STORAGE from "../../utils/sessionStorage";
import LOCAL_STORAGE from "../../utils/localStorage";
import addUser from "../../api/addUser";
import KeyCloakService from "../../services/KeyCloakService";

const StartManage = () => {
    const timeoutValue = 1500;
    const navigate = useNavigate();

    const redirectToRootPage = React.useCallback(() => {
        const pageName = window.location.pathname.split(ROOT_PAGE).at(-1);
        if (pageName) {
            navigate(ROOT_PAGE);
        }
    }, [navigate]);
      
    const redirectAfterLogout = React.useCallback(() => {
        if (
            sessionStorage.getItem(SESSION_STORAGE.LOGGED) ===
            SESSION_STORAGE.STATIC_VALUE.NO
        ) {
            redirectToRootPage();
        }
    }, [redirectToRootPage]);
    
    const addUserToServer = React.useCallback(() => {
        if (
            localStorage.getItem(LOCAL_STORAGE.USER_ADDED_TO_SERVER) !==
            SESSION_STORAGE.STATIC_VALUE.YES
        ) {
            if (
                sessionStorage.getItem(SESSION_STORAGE.LOGGED) ===
                    SESSION_STORAGE.STATIC_VALUE.YES ||
                KeyCloakService.isLoggedIn()
            ) {
                addUser();
            }
        }
    }, []);

    const redirectAfterAcceptPolicyPrivacy = React.useCallback(() => {
        console.log('redirectAfterAcceptPolicyPrivacy');
        if (
            ((localStorage.getItem(LOCAL_STORAGE.PRIVACY_POLICY_ACCEPT) === LOCAL_STORAGE.STATIC_VALUE.YES) 
            && (window.location.pathname === POLICY_PRIVACY_LOGIN_PAGE
            || window.location.pathname === POLICY_PRIVACY_REGISTER_PAGE))) {
            console.log('redirectAfterAcceptPolicyPrivacy if');
            redirectToRootPage();
        }
    }, [redirectToRootPage]);

    React.useEffect(() => {
        redirectAfterLogout();
        setTimeout(() => {
          addUserToServer();
        }, timeoutValue);
        setTimeout(() => {
          redirectAfterAcceptPolicyPrivacy();
        }, timeoutValue);
    }, [redirectAfterLogout, redirectAfterAcceptPolicyPrivacy, addUserToServer]);

    return <></>;
};

export default StartManage;