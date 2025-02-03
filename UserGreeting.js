
export const UserGreeting = () => {
    const isLogedIn = false
    return(
        <div>
            Welcome {isLogedIn && 'Venu'}
        </div>
    )
}