// import {Component} from 'react';
// import Section from '../Section';
// import Phonebook from '../Phonebook';
// import ContactList from '../ContactList';
// import Filter from '../Filter';
// import Container from '../Container';
// import { connect } from 'react-redux';
// import { fetchContact } from '../../redux/phoneBook/phonebook-operations';
// import { getLoading } from '../../redux/phoneBook/phonebook-selectors';

// class App extends Component {

//   componentDidMount() {
//   this.props.fetchContact()
//   }

//   render() {
//     return (
//       <Container>
//         <Section title="Phonebook">
//           <Phonebook />
//         </Section>

//         <Section title="Contacts">

//           <Filter />
//            {this.props.isLoadingContacts && <h3 className='loading'>Loading...</h3>}
//           <ContactList />

//         </Section>
//       </Container>
//     );
//   }
// }

// const mapStateToProps = state => ({

//     isLoadingContacts: getLoading(state),
//   });

// const mapDispatchToProps = dispatch => ({
//   fetchContact: () => dispatch(fetchContact()),

// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { useEffect, Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from '../AppBar';

// import HomeView from '../../views/HomeViews';
// import RegisterView from '../../views/RegisterView';
// import LoginView from '../../views/LoginViews';
import Container from '../Container';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import { connect, useDispatch, useSelector } from 'react-redux';
// import PhonebookViews from '../../views/PhonebookViews';
import authSelectors from '../../redux/auth/auth-selectors';

const HomeView = lazy(() => import('../../views/HomeViews'));
const RegisterView = lazy(() => import('../../views/RegisterView'));
const LoginView = lazy(() => import('../../views/LoginViews'));
const PhonebookViews = lazy(() => import('../../views/PhonebookViews'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
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
    )
  );
}
