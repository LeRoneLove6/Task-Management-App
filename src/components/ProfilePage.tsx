import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./PageLayout";
import { Col } from "react-bootstrap";
import  { useAppContext } from "./useAppContext";

const ProfilePage: React.FC = () => {
  const { user: authUser, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { user, setUser } = useAppContext();

  useEffect(() => {
    if (authUser?.name) {
      setUser(authUser.name); // Set the global context user from Auth0
    }
  }, [authUser, setUser]);

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((token) => console.log("token", token));
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated) {
    return <div>Not authenticated</div>;
  }

  if (!authUser) {
    return <div>No user profile</div>;
  }

  return (
    <PageLayout>
      <h2>Profile Page</h2>
      <Col>
        {authUser.picture && <img src={authUser.picture} alt={authUser.name} />}
        <h3>{authUser.name}</h3>
        <p><b>Shared Context User</b>: {user ?? "Not set in context"}</p>
        <div>
          {Object.keys(authUser).map((objKey, index) => (
            <p key={index}>
              <b>{objKey}</b>: {String(authUser[objKey])}
            </p>
          ))}
        </div>
      </Col>
    </PageLayout>
  );
};

export default ProfilePage;
