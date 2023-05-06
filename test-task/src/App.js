import {Container} from '@mui/material'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
function App() {
  return (
    <Container maxWidth="xl">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
     </BrowserRouter>
    </Container>
  );
}

export default App;
