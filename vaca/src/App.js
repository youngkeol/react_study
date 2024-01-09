
import Css from './component/Css';
import DayList from './component/DayList';
import Day from './component/Day'
import  Event from './component/Event';

import Header from './component/Header';

function App() {
    const name = "Tom";
    const naver = {
        name:"네이버",
        url : 'https://naver.com'
    }

    return (
        <div className="App">
            <Header />
            <DayList />
            <Day />
            <Css />
            <Event age={10}/>
            <Event age={20}/>
            <Event age={30}/>
        </div>
    );
}

export default App;
