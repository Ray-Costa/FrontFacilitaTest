import {useState} from 'react';


export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('Pesquisando por:', searchTerm);
    };

    return (
        <header>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Digite sua pesquisa"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input"
                />
                <button onClick={handleSearch} className="buttoSearch">
                    Pesquisar
                </button>
            </div>
        </header>
    );
}
