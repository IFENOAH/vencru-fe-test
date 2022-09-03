import { Outlet } from 'react-router-dom';
import './App.css';
import { MainAppLayout } from './components/layouts/mainapp';

function App() {
  return (
    <MainAppLayout>
      <Outlet />
    </MainAppLayout>
  );
}

export default App;
