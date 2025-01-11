import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MyComponent from './components/DemoUpdate';
import MyComponent2 from './components/demoUnMount';

function App() {
  return (
    <div id='content'>
      <Header/>
      {/* <MyComponent/> */}
      <MyComponent2/>
    </div>
  );
}

export default App;
