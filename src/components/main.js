import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Landingpage';
import AboutMe from './Aboutpage';
import Contact from './Contact';
import Projects from './Service';
import Resume from './Resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/About" component={AboutMe} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Service" component={Projects} />
    <Route path="/Resume" component={Resume} />
  </Switch>
)

export default Main;