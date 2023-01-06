import requests
from bs4 import BeautifulSoup

songArtist = "/babytron"
songTitle = "bagszn"

URL = "https://www.azlyrics.com/lyrics/" + songArtist + "/" + songTitle + ".html"
page = requests.get(URL)

# testing URL
print(URL)

soup = BeautifulSoup(page.content, "html.parser")

# /html/body/div[2]/div[2]/div[2] 

artist = soup.find('div' , class_ = 'lyricsh').h2.text

title = soup.find('div' , class_ = 'col-xs-12 col-lg-8 text-center').find_all('div',class_= 'div-share')[1].text.split('"')[1]

lyrics = soup.find("div", class_="col-xs-12 col-lg-8 text-center").find_all("div")[5].text

if (songArtist == artist):
    print("Artist: " + artist + "\n")
if (songTitle == title):
    print("Title: " + title + "\n")

print(artist)
print(title)
print(lyrics)