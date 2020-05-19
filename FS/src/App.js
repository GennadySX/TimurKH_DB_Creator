import React, {Component} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/layouts/';
import routes from './routes/index'
import './App.sass';

function withLayout(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <Layout>
        <WrappedComponent/>
      </Layout>
    }
  };
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }




  render() {
    return (
        <React.Fragment>
          <Router>
            <Switch>
              {routes.map((route, idx) =>
                  <Route   path={route.path} component={withLayout(route.component)} key={idx}/>
              )}
            </Switch>
          </Router>
        </React.Fragment>
    );
  }
}


export default App;
