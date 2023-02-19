import '../../assets/scss/login-register.scss';

function LoginRegisterLayout({ children }) {
    return (
        <main className="login-body" style={{backgroundImage: 'url(https://wallpapercave.com/wp/wp2481150.png)'}}>
            {children}
        </main>
    )
}

export default LoginRegisterLayout;