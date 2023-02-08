import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { SharedContext } from './context';

function App() {
  const [context, setContext] = useState(null);

  function changeContext(context) {
	console.log('changeContext fired!')
	setContext(context);
  }

  return (
    <BrowserRouter>
      <SharedContext.Provider value={{ context, changeContext }}>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </SharedContext.Provider>
    </BrowserRouter>
  );
}

export default App;
