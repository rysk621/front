// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import MainNav from './UI/MainNav';
import Home from './component/Home';
import Login from './component/Login';
import Subway from './component/Subway';

function App() {

  return (
    <BrowserRouter>
      <RecoilRoot>
        {/* recoil 범위 설정 필요: 전체 browser로 설정함. */}
        <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
          <div>
            <MainNav />
          </div>
          <div className='grow overflow-y-auto bg-yellow-400'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sub' element={<Subway />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
