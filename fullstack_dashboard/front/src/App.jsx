import './App.css';
import Appbar from './components/baseLayout/Appbar';
import Sidebar from './components/baseLayout/Sidebar';
import DashboardScreen from './components/dashboard/DashboardScreen';

const App = () => {
  return (
    <div className="App w-screen flex items-center justify-center flex-col dark:bg-[#212121] dark:text-white">
      <div className="page-wrapper min-h-screen flex w-full">
        <Sidebar />
        <div className="content-wrapper w-full">
          <Appbar />
          <DashboardScreen />
        </div>
      </div>
    </div>
  );
};

export default App;
