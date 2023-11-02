import { genres } from "../assets/constants";
import { SongCard } from "../components";
import { shazamCoreApi } from "../assets/api";
import { useState } from "react";
import { useEffect } from "react";
import { Loader } from "../components/Loader";



const Discover = () => {
    

    const [isLoading, setIsLoading] = useState(true)
    const [worldChart, setWorldChart] = useState([]);
    const [isPlaying, setIsPlaying] = useState(true);
    const [activeSong, setActiveSong] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            shazamCoreApi('charts/get-top-songs-in-world')
        .then(worldChart => {
            setWorldChart(worldChart);
            setIsLoading(false)
        })
        .catch(error => console.error("Erro ao buscar os dados:", error));
        
        })
        
    }, []);
    const genreTitle = "Rock";

    if(isLoading) return <Loader title="Loading songs"/> 
    return (
        <div className="flex flex-col">
             
                <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
                    <h2 className='font-bold text-3xl text-white text-left'>Discover {genreTitle}</h2>
                    <select
                        onChange={() => { } }
                        value=""
                        className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-o mt-5"
                    >
                        {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                    </select>
                </div><div className="flex flex-wrap sm:justify-start justify-center gap-8">
                        {worldChart.map((song, i) => (
                            <SongCard
                                key={i}
                                song={song}
                                isPlaying={setIsPlaying(isPlaying)}
                                activeSong={setActiveSong(activeSong)}
                                data={worldChart} />
                        ))}


                    </div>
            
            

        </div>
    );
}

export default Discover;
