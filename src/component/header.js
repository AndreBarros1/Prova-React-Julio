import './header.css';

const Header = () => {
    return (
        <header className='cabecalho'>
          <p className='logo'>MyFinance</p>
          <nav className='cabecalho-menu'>
            <a className='cabecalho-item'>Home</a>
            <a className='cabecalho-item'>Transações</a>
          </nav>
        </header>
    );
};

export default Header;