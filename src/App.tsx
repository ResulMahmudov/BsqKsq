import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

import Footer from './components/Footer';
import Semiannual from './page/Semiannual';
import Annual from './page/Annual';


const App = () => {
  return (
    <div className="min-h-screen bg-[#f7f5f5] w-full overflow-x-hidden">
      <NavigationBar />
      <div className="w-[98%] max-w-[1300px] mx-auto my-0">
        <div>
          <Routes>
            <Route path="/" element={<Semiannual />} />

            <Route path="/annual" element={<Annual/>} />

            {/* Səhv link yazılarsa (404), bura istədiyin bir mesajı və ya komponenti qoya bilərsən */}
            <Route
              path="*"
              element={<h1 className="text-center mt-10">Səhifə tapılmadı!</h1>}
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
