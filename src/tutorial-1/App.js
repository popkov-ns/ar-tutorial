import { ProfileFunction } from './ProfileFunction';
import ProfileClass from './ProfileClass';

import './App.css';

const App = () => {
    return (
        <>
            <div className="container">
                <ProfileFunction name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
                <ProfileClass name="Саша Капустин" registredAt={new Date(2020, 8, 13)} />
            </div>
        </>
    );
}

export default App;
