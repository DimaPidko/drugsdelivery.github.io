/* eslint-disable react/prop-types */
const LogInForm = (props) => {
    return (
        <>
            {props.isAdmin ? (
                <>
                    <h2>Hello Admin</h2>
                    <form action="createDrugs">
                        <input
                            type="text"
                            placeholder="Enter name of drug"
                        />
                        <input
                            type="text"
                            placeholder="Enter name of shop"
                        />
                        <input
                            type="text"
                            placeholder="Enter link shop (if drugShop is 'Drug 24' link is 'drug24')"
                        />
                        <input
                            type="text"
                            placeholder="Enter price"
                        />
                        <button>Create drug</button>
                    </form>
                    <button onClick={() => props.setIsAdmin(false)}>Log Out</button>
                </>
            ) : (
                <div>
                    <h3>Log In</h3>
                    <form onSubmit={props.onLogIn}>
                        <input
                            type="text"
                            value={props.login}
                            onChange={(e) => props.setLogin(e.target.value)}
                        />
                        <input
                            type="password"
                            value={props.password}
                            onChange={(e) => props.setPassword(e.target.value)}
                        />
                        <button>Login</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default LogInForm;
