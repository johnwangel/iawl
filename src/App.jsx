import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';

import { Main } from './pages/main.jsx'
import { About, Note, Concept, Story, Cast } from './pages/about.jsx'
import { Music, MusicNotes, Player } from './pages/music.jsx'
import { Media, Videos, Video } from './pages/media.jsx'
import { Photos } from './pages/photos.jsx'
import { Creative, Writers, OriginalCast } from './pages/creative.jsx'

import './App.scss'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Main/>}>
            <Route path="/about" element={<About />}>
              <Route path="/about/note" element={<Note />} />
              <Route path="/about/concept" element={<Concept />} />
              <Route path="/about/story" element={<Story />} />
              <Route path="/about/cast" element={<Cast />} />
            </Route>
            <Route path="/music" element={<Music/>} >
              <Route path="/music/notes" element={<MusicNotes />} />
              <Route path="/music/audio" element={<Player />} />
            </Route>
            <Route path="/media" element={<Media/>} >
              <Route path="/media/videos" element={<Videos id='GBO5AVAd9gI?si=NtBZxcLRVvcndeJP'/>} >
                <Route path="/media/videos/sizzle" element={<Video id='8fkg26pBR14?si=kDBGQlmFUDbtFtTR' />} />
                <Route path="/media/videos/promo" element={<Video />} />
              </Route>
              <Route path="/media/photos" element={<Photos />} />
            </Route>
            <Route path="/creative" element={<Creative />} >
              <Route path="/creative/writers" element={<Writers />} />
              <Route path="/creative/cast" element={<Cast />} />
            </Route>
          </Route>
       </Routes>
    </>
  )
}

export default App
