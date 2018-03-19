import React from 'react';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', minHeight: '100vh', flexDirection: 'column'}}>
        <Header/>
        <Body/>
      </div>
    );
  }
}
