
export const Search = ({setSearchTerm, searchTerm, onSubmit }) => {
    const _onSubmit = async () => {
        try {
            await onSubmit(searchTerm);
        } catch (error) {
            console.log(error);
            throw error;
        }
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
                <button onClick={_onSubmit} className="buttoSearch">
                    Pesquisar
                </button>
            </div>
        </header>
    );
}
