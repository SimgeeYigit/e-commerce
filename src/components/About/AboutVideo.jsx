import { useRef, useState } from "react";
import videoFile from '../../assets/aboutpage/Video/video.mp4';
import { Play, Pause } from 'lucide-react';

function AboutVideo() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hovered, setHovered] = useState(false);

    function playPause() {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    }

    return (
        <div className="grid place-items-center relative group">
            <video
                ref={videoRef}
                className="h-[540px] rounded-[10px] col-start-1 row-start-1"
                src={videoFile}
            />
            <button
                onClick={playPause}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`col-start-1 row-start-1 w-[95px] h-[95px] z-10
                            ${isPlaying ? "bg-transparent" : "bg-[#23A6F0]"} 
                            ${hovered && isPlaying ? "bg-[#23A6F0]" : ""}
                            text-white rounded-full flex items-center justify-center transition-colors duration-300`}
            >
                {isPlaying ? <Pause fill="white" className="w-8 h-8" /> : <Play fill="white" className="w-8 h-8" />}
            </button>
        </div>
    );
}

export default AboutVideo;
