import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './App.css';
import Render from './creator';
import { useDispatch } from 'react-redux';

const Uii = (routing) => {
  const dispatch = useDispatch();
  let i = 0;

  return (
    <BrowserRouter>
      {routing.map(route => (i++ === 0 ?
        <Route exact path={route.path} component={Render(route.content)}/> :
        <Route path={route.path} component={Render(route.content)}/>
      ))}

      <button onClick={() => dispatch({type:'incA'})}>+</button>
      {/*<NavLink to='/'><div><span>Comp</span></div></NavLink>
      <NavLink to='/settings/'><div><span>Settings</span></div></NavLink>*/}
    </BrowserRouter>
  );
};

function App() {
  const routing = [{path: '/', name: 'home', content: 'ui'}, {path: '/settings', name: 'Settings', content: 'settings'}];
  const Ui = () => Uii(routing);
  return (
    <Ui/>
  );
}

export default App;
