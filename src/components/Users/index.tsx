import { useGetUsersQuery } from "../../redux/services/usersApi"

const Users = () => {
    const { data, error, isLoading, isFetching } = useGetUsersQuery(null)

    if (isLoading || isFetching) return <div>Loading...</div>
    if (error) return <div>Oh no, there was an error</div>
    
    const renderUsers = () => {
        if (!data) return null
        return data.map(user => {
            return (
                <div key={user.id} style={{
                    border: '1px solid white',
                    borderRadius: '5px',
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '10px 0'
                }}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>Users from API</h1>
            {renderUsers()}
        </div>
    )
}

export default Users