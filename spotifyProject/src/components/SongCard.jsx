/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PlayPause from "./PlayPause";


export default function SongCard({song, isPlaying, activeSong, i, data }) {

  

  

  return (
    

    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm cursor-pointer">
      <div className="relative w-full h-56 group">
        <div>
          <PlayPause 
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            // handlePause={handlePauseClick}
            // handlePlay={handlePauseClick}
          />
        </div>
        <img alt="song_img" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/294324991/original/2c310cd0e4e8b99ec6f1451d345cb25f3c603b5a/design-fantastic-music-logo.jpg" />
      </div>


      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          {song.title}
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          {song.subtitle}
        </p>
      </div>



    </div>
  )
}
