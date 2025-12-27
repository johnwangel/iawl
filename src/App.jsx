import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout, StaticPage } from './pages/main.jsx'
import { About, Note, Concept, Story, Cast } from './pages/about.jsx'
import { Music, MusicNotes, Player } from './pages/music.jsx'
import { Media, Videos, Video, Quotes } from './pages/media.jsx'
import { Script } from './pages/script.jsx'
import { Photos } from './pages/photos.jsx'
import { Creative, Writers, OriginalCast } from './pages/creative.jsx'

import './App.scss'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/main/about/note" replace />} /> 
            <Route path="/main" element={<StaticPage />} >
              <Route path="/main/about" element={<About />}>
                <Route path="/main/about/note" element={<Note />} />
                <Route path="/main/about/concept" element={<Concept />} />
                <Route path="/main/about/story" element={<Story />} />
                <Route path="/main/about/script" element={<Script />} />
                <Route path="/main/about/cast" element={<Cast />} />
              </Route>
              <Route path="/main/music" element={<Music/>} >
                <Route path="/main/music/notes" element={<MusicNotes />} />
                <Route path="/main/music/audio" element={<Player />} />
              </Route>
              <Route path="/main/media" element={<Media/>} >
                <Route path="/main/media/videos" element={<Videos />} >
                  <Route path="/main/media/videos/promo" element={<Video id='GBO5AVAd9gI?si=NtBZxcLRVvcndeJP'/>} />
                  <Route path="/main/media/videos/sizzle" element={<Video id='8fkg26pBR14?si=kDBGQlmFUDbtFtTR' />} />
                </Route>
                <Route path="/main/media/photos" element={<Photos />} />
                <Route path="/main/media/praise" element={<Quotes />} />
              </Route>
              <Route path="/main/creative" element={<Creative />} >
                <Route path="/main/creative/writers" element={<Writers />} />
                <Route path="/main/creative/cast" element={<OriginalCast />} />
              </Route>
            </Route>
          </Route>
       </Routes>
    </>
  )
}

export default App
