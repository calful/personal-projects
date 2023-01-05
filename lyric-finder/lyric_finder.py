import requests
from bs4 import BeautifulSoup

songArtist = "/babytron"
songTitle = "bagszn"

URL = "https://www.azlyrics.com/lyrics/" + songArtist + songTitle + ".html"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")