import Menu from "./Menu"
import Card from "./Card";
import "./App.css"
function App(){
	const sites = [
		{	
			foto: "big-king.webp",
			nome: "Combo Big King",
			des: "Um Hambúrguer com duas carnes bovinas grelhadas de 57g. pão com gergelin, queijo...",
			qtd: "Serve 1 pessoa",
			preco: "R$ 41,90"
		},
	];
	return(
		
		<div className="conteiner">
			<Menu/>
			<div className="tit">Destaques</div>
			<div className="produto">
			{
				sites.map((site) => {
					return (
					<Card  foto={site.foto}
							nome={site.nome}
							des={site.des}
							qtd={site.qtd}
							preco={site.preco}
						/>
					)
				})

			
			}
			</div>
		</div>
		
	);
}

export default App;