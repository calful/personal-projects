const express = require("express");
const {Builder, By, Key, until} = require('selenium-webdriver');
const app = express();

app.get("/lyrics/:artist/:title", async (req, res) => {
    const { artist, title } = req.params;
    try {
        const songArtist = artist;
        const songTitle = title;
        
        // Create a new instance of a web driver
        let driver = await new Builder().forBrowser('chrome').build();
        // Go to the website
        await driver.get(`https://www.azlyrics.com/lyrics/${songArtist}/${songTitle}.html`);
        // Get the lyrics and artist and title
        let lyrics = await driver.findElement(By.xpath("//div[@class='col-xs-12 col-lg-8 text-center']//div[5]")).getText();
        let artist = await driver.findElement(By.xpath("//div[@class='lyricsh']//h2")).getText();
        let title = await driver.findElement(By.xpath("//div[@class='col-xs-12 col-lg-8 text-center']//div[2]")).getText().split('"')[1];
        //Return the lyrics, artist and title as json
        res.json({artist, title, lyrics});
        // close the browser
        await driver.quit();
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"});
    }
});

app.listen(8000, () => {
    console.log("Server started on http://localhost:8000");
});

