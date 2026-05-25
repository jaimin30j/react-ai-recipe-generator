import Header from './components/Header';
import MainContent from './components/MainContent';

export default function App() {
  const apikey = import.meta.env.VITE_REACT_APP_RECIPE_API_KEY;
  return (
      <>
        <Header />
        <MainContent />
      </>
  )
}
 