import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import api from '../../services/api';
import './home.css'
function Home() {
    const[filme, setFilmes] = useState([]);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key:"ce1ab5baf9719a044cf7f97bd46dc5d6",
                    language:"pt-BR",
                    page:1,
                }
            })
            // console.log(response);
            // console.log(response.data.results);
            setFilmes(response.data.results.slice(0,10))
        }
        loadFilmes();
    }, [])
    return (
        <div className='container'>
            <div className='lista-filme'>
                {filme.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></img>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}
export default Home;