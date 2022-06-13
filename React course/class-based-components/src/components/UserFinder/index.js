import {Component, useEffect, useState} from 'react';
import classes from './UserFinder.module.css';

import ErrorBoundary from '../ErrorBoundary';
import Users from '../Users';



class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: this.context.users,
      searchTerm: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter(user => user.name.includes(this.state.searchTerm))
      })
      if(this.state.filteredUsers.length === 0) throw new Error('No users found!')
    }


  }

  searchChangeHandler(event) {
    this.setState({searchTerm: event.target.value});
  }

  render() {
    return (
      <ErrorBoundary>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)}/>
          <Users users={this.state.filteredUsers}/>
        </div>
      </ErrorBoundary>
    );
  }
}

export default UserFinder;