import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './bundles/Header';
import Main from './bundles/Main';
import Maps from './bundles/Map';
import Time from './bundles/TIme';
import { useEffect, useState } from 'react';

function App() {

  //Реализация таймера
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  let updatedS = time.s, updatedM = time.m, updatedH = time.h;
  
  useEffect(() => {
    run();
  }, [])
  const run = () => {
    setInterv(setInterval(start, 1000));
  }
  
  let pause = () => {
    clearInterval(interv);
  }
  const resume = () => {
    clearInterval(interv);
    setInterv(setInterval(start, 1000));
  }

  const start = () => {
    updatedS++;
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    return setTime({ s: updatedS, m: updatedM, h: updatedH });
  }


  return (
    <Router>
      <Header />
      <Main />
      <Switch>
        <Route exact path={'/home'}>
          <Main />
        </Route>
        <Route exact path={'/map'}>
          <Maps />
        </Route>
        <Route exact path={'/time'}>
          <Time time={time} resume={resume} pause={pause} />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
