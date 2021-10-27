import { withTheme } from '@emotion/react';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
// import defaultAvatar from './default-avatar.png';
import defaultAvatar from './rock.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: '50%',
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: 'white',
  },
  pap: {
    color: '#E84A5F',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;
  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="40" style={styles.avatar} />
      <span style={styles.name}>
        Welcome, <span style={styles.pap}>{name}</span>
      </span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
// const mapStateToProps = state => ({
//   name: authSelectors.getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, )(UserMenu);
