import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './App.css';
import { Render } from './creator';
import { useDispatch } from 'react-redux';

const CreateNav = (recip) => (
  <div style={{ width:'100%', backgroundColor:'darkgrey', color:'white' }}>
    <ul style={{ display:'flex', listStyleType:'none' }}>
      {recip.map(route => <li style={{ display:'inline', padding:'0 10px' }}><NavLink to={route.path}>{route.name}</NavLink></li>)}
    </ul>
  </div>
);

const CreateRoutes = (recip) => {
  const dispatch = useDispatch();
  let i = 0;

  return (
    <div>
      {recip.map(section => (i++ === 0 ?
        <Route exact path={section.path} component={Render(section.content)}/> :
        <Route path={section.path} component={Render(section.content)}/>
      ))}

      <button onClick={() => dispatch({type:'incA'})}>+</button>
    </div>
  );
};

function App() {
  //The recip comes from a json config file, but is simplified here
  const recip = [{
    path: '/',
    name: "Doesn't work",
    content: {
      type: 'ui', // Change this to ui-callback or ui-no-callback-but-works to see it work
      variables: ['a', '1']
    }
  }/*, { // for some reason it doesn't work when I have them all created at the same time.
    path: '/2',
    name: "Works with callback",
    content: {
      type: 'ui-callback',
      variables: ['a', '2']
    }
  }, { // I guess that I really don't understand how stuff (functions) is created...
    path: '/3',
    name: "Works without callback",
    content: {
      type: 'ui-no-callback-but-works',
      variables: ['a', '3']
    }
  }*/, {
    path: '/settings',
    name: 'Settings',
    content: {
      type: 'settings'
    }
  }];

  const Ui = () => CreateRoutes(recip);
  const Nav = () => CreateNav(recip);
  return (
    <BrowserRouter>
      <Nav/>
      <Ui/>
    </BrowserRouter>
  );
}

export default App;
