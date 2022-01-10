import './App.css';

const App = () => {
    let email = '';
    let password = '';

    const handleChange = (e) => {
        if (e.target.type === 'email') {
            email = e.target.value;
        } else if (e.target.type === 'password') {
            password = e.target.value;
        };
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.length !== 0 && password.length !== 0) {
            console.log('E-mail:', email, 'Пароль: ', password);
            e.target.reset();
            email = '';
            password = '';
        } else {
            alert('Заполните поля "E-mail" и "Пароль"')
        }
    }

    return (
        <>
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <input className="form__email" type="email" placeholder="E-mail" onChange={handleChange} />
                    <input className="form__password" type="password" placeholder="Пароль" onChange={handleChange} />
                    <input className="form__btn" type="submit" value="Войти" />
                </form>
            </div>
        </>
    );
}

export default App;