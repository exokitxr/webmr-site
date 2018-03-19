import React from 'react';

const REGISTRY_URL = 'http://registry.webmr.io';
const _getPackageUrl = (username, module) => `http://${module}.${username}.webmr.io`;

class Package extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };
  }

  render() {
    const {package: {username, module}} = this.props;

    return <a
      href={_getPackageUrl(username, module)}
      style={{
        position: 'relative',
        display: 'flex',
        color: '#FFF',
        textDecoration: 'none',
      }}
      onMouseOver={() => this.setState({hover: true})}
      onMouseOut={() => this.setState({hover: false})}
    >
      <div style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundImage: 'linear-gradient(to right, #43c6ac, #191654)', filter: this.state.hover ? 'brightness(80%)' : null, zIndex: -1}}/>
      <div style={{marginTop: 'auto'}}>
        <div style={{padding: '10px'}}>{username}/{module}</div>
      </div>
    </a>
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      packages: [],
    };

    fetch(`${REGISTRY_URL}/p`)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          throw new Error(`invalid status code ${res.status}`);
        }
      })
      .then(packages => {
        this.setState({packages});
      })
      .catch(err => {
        console.warn(err);
      });
  }

  render() {
    return <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', gridTemplateRows: 'calc(100vw/6)'}}>
      {this.state.packages.map(p => <Package package={p} key={p.username + '/' + p.module}/>)}
    </div>;
  }
};

export default Home;
