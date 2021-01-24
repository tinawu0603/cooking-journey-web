import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import RecipeDetailPage from './RecipeDetailPage';

const PageContainer = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/recipes/:recipeId">
          <RecipeDetailPage/>
        </Route>
      </Switch>
    </Router>
  )
};
export default PageContainer;