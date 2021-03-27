import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Routes from './Routes'
import { createStore } from './store'

const AppStore = createStore()

function App() {
  return (
    <AppStore>
      <div className="main">
        <Routes />
      </div>
    </AppStore>
  );
}

export default App;
