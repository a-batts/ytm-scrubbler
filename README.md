# ytm-scrubbler
Convert YouTube Music watch history to a Last.fm scrubbable format

This tool allows you to convert your YouTube Music history into a json file that can be imported into Last.fm. Note that this tool will only grab audio-only songs you listened to, and not music videos.

## Instructions 

You first need to download your history from <a href="https://takeout.google.com/">Google Takeout</a>

1) Click deselect all under products
2) Scroll down and select the checkbox for YouTube and YouTube Music
3) Click the button that says "All YouTube data included"
4) On the popup menu, click deselect all and then select the checkbox for history. Press OK.
5) Click the button that says "Multiple formats"
6) Change the data format for history from HTML to JSON. Press OK.
7) Select "Next step" and select your archive options. The delivery method does not matter since you will get a link on this page once the export is completed.

Extract "watch-history.json" from inside the history folder of the file you downloaded and place it inside this packages folder. Make sure it is named "watch-history.json", or else the program will not run.
Then open the .exe file. A new file, "scrubbed-watch-history.json" will be placed inside the folder. If you have already scrobbled songs to last.fm from YouTube Music you should open this file in a JSON editor and delete all the entries after that date.
More information on this can be found <a href="https://docs.google.com/document/d/1IhFMol3wZs24uKnh2rbxHpLaxhETcfB8KqzYIkEW_iM/edit">this link</a>.

Now you just need to download the latest release of the Windows Scrubbler at <a href="https://github.com/SHOEGAZEssb/Last.fm-Scrubbler-WPF/releases/">https://github.com/SHOEGAZEssb/Last.fm-Scrubbler-WPF/releases/</a>. Extract the downloaded file and open Last.fm-Scrubbler-WPF.exe.

Sign into your Last.fm account, and then click the File Parse Scrobbler tab and change the parser to JSON. You can now upload scrubbed-watch-history.json. It will load in all of your history entries, but Last.fm has a 3000 scrobbles/day limit so you will need to manually select how many songs you want to scrobble. After that, just hit Scrobble and you're done!
