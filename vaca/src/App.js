import './App.css';
import Css from './component/Css';
import  Event from './component/Event';

function App() {
    const name = "Tom";
    const naver = {
        name:"네이버",
        url : 'https://naver.com'
    }

    return (
        <div className="App">
            <Css />
            <Event />
        </div>
    );
}

export default App;
