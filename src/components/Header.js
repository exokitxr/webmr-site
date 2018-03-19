import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <header style={{display: 'flex', fontFamily: 'Source Code Pro', flexDirection: 'column'}}>
      <div style={{display: 'flex', height: '80px', padding: '0 20px', backgroundImage: 'linear-gradient(to right, #dce35b, #45b649)', color: '#FFF', alignItems: 'center'}}>
        <div style={{fontFamily: '"Press Start 2P"', fontSize: '20px', textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>WEBMR</div>
      </div>
      <div style={{display: 'flex', height: '40px', padding: '0 20px', backgroundColor: '#222', color: '#FFF', fontSize: '13px', fontWeight: 600, whiteSpace: 'pre', alignItems: 'center'}}>
        webmr publish /my-node-module <span style={{color: '#666'}}># publish to webmr.io</span>
      </div>
    </header>;
  }
}

export default Header;
