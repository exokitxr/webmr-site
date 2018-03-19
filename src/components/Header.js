import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <header style={{display: 'flex', height: '80px', padding: '0 20px', backgroundImage: 'linear-gradient(to right, #dce35b, #45b649)', color: '#FFF', alignItems: 'center'}}>
      <div style={{fontFamily: '"Press Start 2P"', fontSize: '20px', textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}}>WEBMR</div>
    </header>;
  }
}

export default Header;
