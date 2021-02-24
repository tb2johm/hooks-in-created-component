import Test from './Test';

const Dashboard = (ui) => {
  return (
    <div>
      {ui}
    </div>
  )
}

const Ui = () => {
  return (<div>{['a', 'b'].map(t => Test(t))}</div>);
}

const Settings = () => <h1>Settings</h1>;

const Render = (content) => {
  switch (content) {
    case 'ui':
      //WORKS
      //return Ui;

      //DOESN'T WORK
      const ui = ['a', 'b'].map(t => Test(t));
      return () => Dashboard(ui);
    case 'settings':
      return Settings;
    default:
      return <div/>
  }
}

export default Render;