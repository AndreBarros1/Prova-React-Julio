import './home.css'

const Home = () => {

  return (
    <div className="Home">
      <h1>Home</h1>
      <div className="sumario">
        <p className='home-item'>Total de Entradas: </p>
        <p className='home-item'>Total de Saídas: </p>
        <p className='home-item'>Saldo Atual: </p>
      </div>
    </div>
  );
};

export default Home;