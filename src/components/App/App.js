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

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from '../AppBar';
import PhonebookViews from '../../views/PhonebookViews';
import HomeView from '../../views/HomeViews';
import RegisterView from '../../views/RegisterView';
import LoginView from '../../views/LoginViews';
import Container from '../Container';
import authOperations from '../../redux/auth/auth-operations';
import { connect } from 'react-redux';

class App extends Component {
  // componentDidMount() {
  //   this.props.onGetCurretnUser();
  // }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={PhonebookViews} />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);