const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/lyrics/:artist/:title", async (req, res) => {
    const { artist, title } = req.params;
    // code to scrape the lyrics, artist and title with BeautifulSoup and return it JSON
    // for example:
    try {
        const songArtist = artist;
        const songTitle = title;

        URL = "https://www.azlyrics.com/lyrics/" + songArtist + "/" + songTitle + ".html";
        page = await requests.get(URL);
        if (page.status_code !== 200)
            return res.status(404).json({error: "lyrics not found"});
        soup = BeautifulSoup(page.content, "html.parser");

        artist = soup.find('div', class_ = 'lyricsh').h2.text;
        title = soup.find('div', class_ = 'col-xs-12 col-lg-8 text-center').find_all('div',class_= 'div-share')[1].text.split('"')[1];
        lyrics = soup.find("div", class_="col-xs-12 col-lg-8 text-center").find_all("div")[5].text;
        res.json({artist, title, lyrics});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"});
    }
});

app.listen(8000, () => {
    console.log("Server started on http://localhost:8000");
});