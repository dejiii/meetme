import { Header, Logo } from "../styles/styles";

import Login from "../component/Login";
import Logout from "../component/Logout";

const Nav = ({ loggedIn, setLoggedIn }) => {
  const validate = () => setLoggedIn(true);
  const unValidate = () => {
    setLoggedIn(false);
  };

  return (
    <Header>
      <Logo>
        <span>⏰</span>
        <span className="ml-5">MeetMe</span>
      </Logo>
      {loggedIn ? (
        <Logout unValidate={unValidate} />
      ) : (
        <Login validate={validate} />
      )}
    </Header>
  );
};

export default Nav;
