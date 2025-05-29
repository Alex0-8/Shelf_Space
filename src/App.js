import { ThemeProvider } from 'styled-components'
import Theme from './theme';
import Header from './components/Header/index';
import GlobalStyle from './theme/globalStyles';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import MyShefl from './components/MyShelf';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className='App'>
        <Header />
        <Routes>
          
          <Route path='/' element={<HomePage />} />
          <Route path='/book/:id' element={<BookDetails />} />
          <Route path='/shelf_space' element={<MyShefl />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
