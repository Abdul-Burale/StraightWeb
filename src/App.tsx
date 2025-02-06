import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout'
import Home  from './components/button'
function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
