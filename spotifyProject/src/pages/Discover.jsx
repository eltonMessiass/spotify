import { genres } from "../assets/constants";
import { SongCard } from "../components";
import { worldCharts } from "../assets/api";
import { useState } from "react";
import { useEffect } from "react";


const Discover = () => {
    const [worldChart, setWorldChart] = useState([]);
    useEffect(() => {
        worldCharts()
            .then(worldChart => setWorldChart(worldChart))
            .catch(error => console.error("Erro ao buscar os dados:", error));
    }, []);
    const genreTitle = "Rock";
    return (
        <div className="flex flex-col">
            <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-white text-left'>Discover {genreTitle}</h2>
                <select 
                    onChange={() => {}}
                    value=""
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-o mt-5"
                >
                  {
                    genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)
                  }  
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {worldChart.map((song, i) =>(
                    <SongCard
                        key={i}
                        song={song}
                        data={worldChart}
                    />
                ))
                    
                }
                

            </div>

        </div>
    );
}

export default Discover;
