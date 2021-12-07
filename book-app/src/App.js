import Home from './components/Home';
import AccountProvider from './components/context/AccountProvider';
const App = () =>{
  return (
    <AccountProvider>
      <Home/>
    </AccountProvider>
  );
}

export default App;
