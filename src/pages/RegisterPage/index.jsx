import {RegisterForm} from '../../components/RegisterForm/index.jsx';
import {calculateRoute, createUser, listUsers} from '../../services/index.js';
import {UserList} from '../../components/UserList/index.jsx';
import {useEffect, useState} from 'react';
import ErrorToast from '../../components/Toast/index.jsx';
import {Search} from '../../components/Search/index.jsx';
import {AcessRouterModal} from '../../components/AcessRouterModal/index.jsx';

export const RegisterPage = () => {
    useEffect(() => {
        listUsers(setUsers);
    }, []);

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [route, setRoute] = useState({});
    const [totalDistance, setTotalDistance] = useState(0);

    const handleError = () => {
        return <ErrorToast error={error} setError={setError}/>;
    };

    const onSubmit = async (payload) => {
        try {
            await createUser(payload);
            await listUsers(setUsers);
        } catch (error) {
            console.log(error);
            setError(error.message);
            throw error;
        }
    };

    const toggleModal = async () => {
        try {

            if (!isModalOpen) {
                const data = await calculateRoute();
                setRoute(data.route);
                setTotalDistance(data.totalDistance);
            }
            setModalOpen(!isModalOpen);

        } catch (error) {
            console.log(error);
            setError(error.message);
            throw error;
        }


    };

    const onSearchSubmit = async (term) => {
        try {
            await listUsers(setUsers, term);
        } catch (error) {
            console.log(error);
            setError(error.message);
            throw error;
        }
    };

    return (
        <main>
            <div>
                <Search onSubmit={onSearchSubmit} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </div>
            <div>
                <section>
                    <h1>Registro de usuários</h1>
                    <RegisterForm onSubmit={onSubmit}/>
                </section>
                <div>
                    <button className="button" type="button" onClick={toggleModal}>
                        Exibir Rota
                    </button>
                    {isModalOpen && <AcessRouterModal totalDistance={totalDistance} route={route}/>}
                </div>
                <section>
                    <h1>Lista de usuários</h1>
                    <UserList users={users}/>
                </section>
                {handleError()}
            </div>
        </main>
    );
};
