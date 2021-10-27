import React, { useEffect, Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from '../AppBar';

// import HomeView from '../../views/HomeViews';
// import RegisterView from '../../views/RegisterView';
// import LoginView from '../../views/LoginViews';
import Container from '../Container';
// import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import { connect, useDispatch, useSelector } from 'react-redux';
// import PhonebookViews from '../../views/PhonebookViews';
// import authSelectors from '../../redux/auth/auth-selectors';

const HomeView = lazy(() => import('../../views/HomeView'));
const RegisterView = lazy(() => import('../../views/RegisterView'));
const LoginView = lazy(() => import('../../views/LoginView'));
const PhonebookViews = lazy(() => import('../../views/PhonebookView'));

export default function App() {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(
  //   authSelectors.getIsFetchingCurrentUser,
  // );

  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  // }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={PhonebookViews} />
        </Switch>
      </Suspense>
    </Container>
  );
}
