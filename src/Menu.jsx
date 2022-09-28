import "./Menu.css";

function Menu() {
    return (
    
        <div className="paginas">

           <div className="logo">
            <img className="foto" src="logo.png" />
            <p>IF GAMES</p>
           </div>
                
            
            
                <div className="name1">
                        <p>Home</p>
                </div>
                <div className="name1">
                        <p>Produtos</p>
                </div>
                <div className="name1">
                        <p>Carrinho</p>
                </div>
                <div className="name1">
                        <p>Contato</p>
                </div>
                <div className="name1">
                        <p>Sobre</p>
                </div>
            <div className="nome-pag2">
                <p className="n2">Login</p>
            </div>
        </div>
    );
}
export default Menu;