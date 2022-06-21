const songs = [
    {
        song: "Nothing but a dream",
        singer: "  - H a lot -",
    },
    {
        song: "Prom",
        singer: "  - H a lot -",
    },
    {
        song: "We Will Be Fine",
        singer: "  - H a lot -",
    },
    {
        song: "If you ask me",
        singer: "  - H a lot -",
    },
    {
        song: "Be OK",
        singer: "  - H a lot -",
    },
    {
        song: "Frank",
        singer: "  - H a lot -",
    },
    {
        song: "Higher",
        singer: "  - H a lot -",
    },
    {
        song: "History",
        singer: "  - H a lot -",
    },
    {
        song: "밤",
        singer: "  - H a lot -",
    },
    {
        song: "주파수",
        singer: "  - H a lot -",
    }
]

const song = document.querySelector("#songs span:first-child");
const singer = document.querySelector("#songs span:last-child");
const todaySongs = songs[Math.floor(Math.random() * songs.length)];

console.log(todaySongs);

song.innerText = todaySongs.song;
singer.innerText = todaySongs.singer;