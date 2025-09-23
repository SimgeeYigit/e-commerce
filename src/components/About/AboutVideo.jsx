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
                className="md:h-[540px] h-auto md:w-auto w-[307px] rounded-[10px] col-start-1 row-start-1"
                src={videoFile}
            />
            <button
                onClick={playPause}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`col-start-1 row-start-1 md:w-[95px] md:h-[95px] w-[50px] h-[50px] z-10
                            ${isPlaying ? "bg-transparent" : "bg-[#23A6F0]"} 
                            ${hovered && isPlaying ? "bg-[#23A6F0]" : ""}
                            text-white rounded-full flex items-center justify-center transition-colors duration-300`}
            >
                {isPlaying ? <Pause fill="white" className="md:w-8 md:h-8 w-6 h-6" /> : <Play fill="white" className="md:w-8 md:h-8 w-6 h-6" />}
            </button>
        </div>
    );
}

export default AboutVideo;
