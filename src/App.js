import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import MyComponent from './component/MyComponent';
const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      Hello world with Thuy An Tran
      <MyComponent />
    </div>
  );
}

export default App;
