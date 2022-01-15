const fs = require('fs');
const startDate = new Date();

try {
    let raw = fs.readFileSync('watch-history.json');
    let history = JSON.parse(raw);
    let newData = [];
    history.forEach(entry => {
        if (entry.header == 'YouTube Music') {
            entryDate = new Date(entry.time);
            if (entryDate < startDate && entry.subtitles != null) {
                //Remove " - Topic" from artist name
                let artistName = entry.subtitles[0].name.substring(0, entry.subtitles[0].name.indexOf(' - Topic'));
                //Remove "watched" from beginning of song title
                let trackName = entry.title.substring(8);
                let newEntry = {
                    'artistName': artistName,
                    'trackName': trackName,
                    'datetime': entry.time,
                }
                //Only push if artist name exists (only exists on official audio songs)
                if (artistName && trackName)
                    newData.push(newEntry);
            }
        }
    });
    newData = JSON.stringify(newData);
    fs.writeFileSync('scrubbed-watch-history.json', newData);

    console.log('Finished scrubbling file!');
}
catch (error) {
    if (error.code === 'ENOENT')
        console.log('File not found!');
    else
        throw err;
}