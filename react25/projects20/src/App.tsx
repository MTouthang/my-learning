import Accordion from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/randomColor';
import StartRating from './components/starRating';

function App() {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StartRating />
      <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={10} />
    </>
  );
}

export default App;
