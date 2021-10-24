function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="./img/logo.png" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кросссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
             <img width={18} height={18} src="./img/cart.svg" />
            <span>1205 грн.</span>
          </li>
          <li>
            <img width={18} height={18} src="./img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кросссовки</h1>
        ...
      </div>
    </div>
  );
}

export default App;
