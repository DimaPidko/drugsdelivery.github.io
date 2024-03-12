/* eslint-disable react/prop-types */
import styles from './LogInForm.module.sass';

const LogInForm = (props) => {
    return (
        <>
            {props.isAdmin ? (
                <>
                    <h2>Hello Admin</h2>
                    <form
                        action="createDrugs"
                        onSubmit={props.handleSubmit}
                        className={styles.admin}>
                        <input
                            type="text"
                            placeholder="Enter name of drug"
                            className={styles.formIn__inpt}
                        />
                        <input
                            type="text"
                            placeholder="Enter name of shop"
                            className={styles.formIn__inpt}
                        />
                        <input
                            type="text"
                            placeholder="Enter img URL"
                            className={styles.formIn__inpt}
                        />
                        <input
                            type="text"
                            placeholder="Enter link shop ('drug24' if Drug 24)"
                            className={styles.formIn__inpt}
                        />
                        <input
                            type="text"
                            placeholder="Enter price"
                            className={styles.formIn__inpt}
                        />
                        <button>Create drug</button>
                    </form>
                    <button onClick={() => props.setIsAdmin(false)}>Log Out</button>
                </>
            ) : (
                <div>
                    <h3>Log In</h3>
                    <form
                        onSubmit={props.onLogIn}
                        className={styles.formIn}>
                        <label htmlFor="login">Login</label>
                        <input
                            type="text"
                            value={props.login}
                            onChange={(e) => props.setLogin(e.target.value)}
                            className={styles.formIn__inpt}
                            id="login"
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            value={props.password}
                            onChange={(e) => props.setPassword(e.target.value)}
                            className={styles.formIn__inpt}
                            id="password"
                        />
                        <button className={styles.formIn__btn}>Login</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default LogInForm;
