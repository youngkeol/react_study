import { Routes,  Route} from 'react-router-dom';


import Header from './component/Header';
import DayList from './component/DayList.tsx';
import Day from './component/Day.tsx';
import CreateWord from './component/CreateWord.tsx';
import EmptyPage from './component/EmptyPage';
import CreateDay from './component/CreateDay';


function App() {


    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<DayList />} />
                <Route path="/day/:day" element={<Day />} />
                <Route path="/create_word" element={<CreateWord />} />
                <Route path="/create_day" element={<CreateDay />} />
                <Route path="/*" element={<EmptyPage />} />
            </Routes>
            {/* <Css />
            <Event age={10}/>
            <Event age={20}/>
        <Event age={30}/> */}
        </div>
    );
}

export default App;