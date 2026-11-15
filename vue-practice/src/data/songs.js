import daftPunkSong from '@/assets/songs/DaftPunk-LoseYourselftoDance.mp3'
import matrixSong from '@/assets/songs/MatrixLoop.mp3'
import menAtWorkSong from '@/assets/songs/MenAtWork-WhoCanItBeNow.mp3'
import michaelJacksonSong from '@/assets/songs/MichaelJackson-P.Y.T.mp3'
import roxanneSong from '@/assets/songs/roxanne.mp3'

export const songsData = [
  {
    id: 1,
    title: "Lose Yourself to Dance",
    artist: "Daft Punk",
    question: "¿Que cancion es?",
    options: ["Get Lucky", "Lose Yourself to Dance", "One More Time", "Around the World"],
    correct: "Lose Yourself to Dance",
    audioSrc: daftPunkSong
  },
  {
    id: 2,
    title: "Matrix Theme",
    artist: "Rob Dougan",
    question: "¿Que cancion es?",
    options: ["Matrix Theme", "Sandstorm", "Born Slippy", "Firestarter"],
    correct: "Matrix Theme",
    audioSrc: matrixSong
  },
  {
    id: 3,
    title: "Who Can It Be Now?",
    artist: "Men At Work",
    question: "¿Que cancion es?",
    options: ["Down Under", "Overkill", "Who Can It Be Now?", "It's a Mistake"],
    correct: "Who Can It Be Now?",
    audioSrc: menAtWorkSong
  },
  {
    id: 4,
    title: "P.Y.T. (Pretty Young Thing)",
    artist: "Michael Jackson",
    question: "¿Que cancion es?",
    options: ["Billie Jean", "Beat It", "Thriller", "P.Y.T. (Pretty Young Thing)"],
    correct: "P.Y.T. (Pretty Young Thing)",
    audioSrc: michaelJacksonSong
  },
  {
    id: 5,
    title: "Roxanne",
    artist: "The Police",
    question: "¿Que cancion es?",
    options: ["Roxanne", "Every Breath You Take", "Message in a Bottle", "So Lonely"],
    correct: "Roxanne",
    audioSrc: roxanneSong
  }
]
