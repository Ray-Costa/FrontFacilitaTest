
import {Route, Routes} from 'react-router-dom';
import {RegisterPage, NotFoundPage} from '../../pages/index.js';

export const RouterMain = () => {
    return(
        <Routes>
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    )
}
