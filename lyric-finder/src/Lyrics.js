import React, { useState } from 'react';

// defining variables
function Lyrics() {
    const [songArtist, setSongArtist] = useState('');
    const [songTitle, setSongTitle] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [artist, setArtist] = useState('');
    const [title, setTitle] = useState('');
}

// building html form for frontend
<form>
    <label>
        Song Artist:
        <input
            type="text"
            value={songArtist}
            onChange={e => setSongArtist(e.target.value)}
        />
    </label>
    <label>
        Song Title:
        <input
            type="text"
            value={songTitle}
            onChange={e => setSongTitle(e.target.value)}
        />
    </label>
    <button type="submit" onClick={fetchLyrics}>
        Fetch Lyrics
    </button>
</form>

// function for fetching lyrics from server
async function fetchLyrics(e) {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/lyrics/${songArtist}/${songTitle}`);
    const data = await response.json();
    setLyrics(data.lyrics);
    setArtist(data.artist);
    setTitle(data.title);
}

// displaying variables on frontend
<div>
    <p>Artist: {artist}</p>
    <p>Title: {title}</p>
    <p>Lyrics: {lyrics}</p>
</div>

