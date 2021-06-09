import 'styles/main.scss';
import { pages } from 'pages';
import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from 'components';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Suspense fallback={<>Loading...</>}>
          <Switch>
            {pages.map((page) => (
              <Route
                key={page.path}
                path={page.path}
                component={page.component}
                exact
              />
            ))}
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
