export const UserList = ({users}) => {
    const UserTable = ({ users }) => {
        return (
            <table className="user-table">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className="user-list">
            {users ? <UserTable users={users} /> : <p>Nenhum usuário registrado</p>}
        </div>
    );
};
