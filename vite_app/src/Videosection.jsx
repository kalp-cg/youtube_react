import React from 'react';
import './App.css';

const object =[
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
        title: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
        views: "1.5M views",
        channel: "Coke Studio Bangla",
        date: "2 Days ago",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",
        playButton: "",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
]


const Videosection = () =>{
    return (
        <>
         <div className="main-content">
            <div className="video-grid">
                {object.map((video, index) => (
                    <div className="video" key={index}>
                        <img src={video.thumbnail} alt="Video" />
                        <div className="play-btn">
                            {video.playButton && <img src={video.playButton} alt="Play" />}
                        </div>
                        <div className="title">{video.title}</div>
                        <div className="views">{video.views}</div>
                        <div className="channel">{video.channel}</div>
                        <div className="date">{video.date}</div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Videosection;