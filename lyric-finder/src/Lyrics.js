import React, { useState } from 'react';

function Lyrics() {
    const [songArtist, setSongArtist] = useState('');
    const [songTitle, setSongTitle] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [artist, setArtist] = useState('');
    const [title, setTitle] = useState('');
}

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
