import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar/';

import About from '../pages/About';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import ReleaseNotes from '../pages/ReleaseNotes';
import BlockManager from '../pages/BlockManager';
import Contact from '../pages/Contact';

function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/releasenotes' component={ReleaseNotes} />
        <Route path='/privacy' component={PrivacyPolicy} />
        <Route path='/block-manager' component={BlockManager} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  )
}

export default Routes;
