import './App.css';
import Footer from './components/Footer/Footer';
import FP from './components/FP/FP';
import Navigation from './components/Navigation/Navigation';
import Category from './components/section/Categories/Category';
import NewArrivals from './components/section/NewArrivals';
import content from './data/content.json';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <FP/>
      <NewArrivals/>
      <Category title={content?.categories[0]?.title} data={content?.categories[0]?.data}/>
      <Footer content={content?.footer}/>
    </div>
  );
}

export default App;
