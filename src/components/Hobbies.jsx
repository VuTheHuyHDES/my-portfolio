import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hobbies.css';

const Hobbies = () => {
    const { language } = useLanguage();
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showPlaylist, setShowPlaylist] = useState(false);
    const [repeatMode, setRepeatMode] = useState(0); // 0: off, 1: repeat all, 2: repeat one
    const audioRef = useRef(null);

    // Playlist - Đặt file MP3 vào thư mục public/music/
    const playlist = [
        {
            title: 'End of Beginning',
            artist: 'Djo',
            file: '/music/end-of-beginning.mp3',
            cover: '/music/covers/end-of-beginning.png'
        },
        {
            title: 'Chỉ Một Đêm Nữa Thôi',
            artist: 'MCK',
            file: '/music/Chỉ Một Đêm Nữa Thôi.mp3',
            cover: '/music/covers/chi-mot-dem-nua-thoi.png'
        },
        {
            title: 'CRAZY',
            artist: 'LE SSERAFIM',
            file: '/music/CRAZY.mp3',
            cover: '/music/covers/crazy.png'
        }
    ];

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            if (isPlaying) {
                audioRef.current.play().catch(() => { });
            }
        }
    }, [currentTrack]);

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(() => {
                    alert(language === 'vi'
                        ? 'Vui lòng thêm file MP3 vào thư mục public/music/'
                        : 'Please add MP3 files to public/music/ folder');
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handlePrevious = () => {
        setCurrentTrack(prev => prev === 0 ? playlist.length - 1 : prev - 1);
    };

    const handleNext = () => {
        setCurrentTrack(prev => prev === playlist.length - 1 ? 0 : prev + 1);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setProgress(audioRef.current.currentTime);
            setDuration(audioRef.current.duration || 0);
        }
    };

    const handleProgressClick = (e) => {
        if (audioRef.current && duration) {
            const rect = e.target.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            audioRef.current.currentTime = percent * duration;
        }
    };

    const handleEnded = () => {
        if (repeatMode === 2) {
            // Repeat one: replay current track
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else if (repeatMode === 1) {
            // Repeat all: go to next, loop to start
            handleNext();
            setIsPlaying(true);
        } else {
            // No repeat: stop at end of playlist
            if (currentTrack === playlist.length - 1) {
                setIsPlaying(false);
            } else {
                handleNext();
                setIsPlaying(true);
            }
        }
    };

    const handleRepeatToggle = () => {
        setRepeatMode(prev => (prev + 1) % 3);
    };

    const getRepeatIcon = () => {
        if (repeatMode === 0) return 'bx-repeat';
        if (repeatMode === 1) return 'bx-repeat';
        return 'bx-repeat'; // repeat one uses same icon with "1"
    };

    const formatTime = (time) => {
        if (!time || isNaN(time)) return '0:00';
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const hobbies = [
        {
            id: 1,
            titleVi: 'Nghe nhạc',
            titleEn: 'Listening to Music',
            icon: 'bx-music',
            descriptionVi: 'Yêu thích các thể loại nhạc đa dạng',
            descriptionEn: 'Enjoy various music genres',
            hasPlayer: true
        },
        {
            id: 2,
            titleVi: 'Bóng đá',
            titleEn: 'Football',
            icon: 'bx-football',
            descriptionVi: 'Đam mê bóng đá và các giải đấu hàng đầu',
            descriptionEn: 'Passionate about football and top leagues',
            hasTeams: true,
            teams: [
                { name: 'Manchester United', logo: '/teams/manchester-united.png', league: 'Premier League' },
                { name: 'Real Madrid', logo: '/teams/real-madrid.png', league: 'La Liga' },
                { name: 'SSC Napoli', logo: '/teams/napoli.png', league: 'Serie A' }
            ]
        },
        {
            id: 3,
            titleVi: 'Chơi game',
            titleEn: 'Gaming',
            icon: 'bx-joystick',
            descriptionVi: 'Đam mê các tựa game cạnh tranh',
            descriptionEn: 'Passionate about competitive games',
            hasGames: true,
            games: [
                { name: 'League of Legends', logo: '/games/lol.png', genre: 'MOBA' },
                { name: 'Valorant', logo: '/games/valorant.png', genre: 'FPS' },
                { name: 'Naraka: Bladepoint', logo: '/games/naraka.png', genre: 'Battle Royale' }
            ]
        },
    ];

    return (
        <section id="hobbies" className="hobbies">
            <div className="hobbies-container">
                <div className="section-header">
                    <div className="section-label">
                        <span className="label-line"></span>
                        <span>{language === 'vi' ? 'Cá nhân' : 'Personal'}</span>
                    </div>
                    <h2 className="section-title">
                        {language === 'vi' ? 'Sở thích' : 'Hobbies'}
                    </h2>
                    <p className="section-subtitle">
                        {language === 'vi'
                            ? 'Những điều tôi yêu thích ngoài công việc'
                            : 'Things I enjoy outside of work'}
                    </p>
                </div>

                <div className="hobbies-grid">
                    {hobbies.map((hobby) => (
                        <div key={hobby.id} className={`hobby-card ${hobby.isEmpty ? 'empty' : ''}`}>
                            <div className="hobby-header">
                                <div className={`hobby-icon ${hobby.hasPlayer && isPlaying ? 'playing' : ''}`}>
                                    {hobby.hasPlayer && isPlaying ? (
                                        <div className="hobby-visualizer">
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                            <div className="bar"></div>
                                        </div>
                                    ) : (
                                        <i className={`bx ${hobby.icon}`}></i>
                                    )}
                                </div>
                                <div className="hobby-header-text">
                                    <h3 className="hobby-title">
                                        {language === 'vi' ? hobby.titleVi : hobby.titleEn}
                                    </h3>
                                    <p className="hobby-description">
                                        {language === 'vi' ? hobby.descriptionVi : hobby.descriptionEn}
                                    </p>
                                </div>
                            </div>
                            <div className="hobby-content">

                                {hobby.hasPlayer && (
                                    <div className="music-player">
                                        {/* Hidden Audio Element */}
                                        <audio
                                            ref={audioRef}
                                            src={playlist[currentTrack].file}
                                            onTimeUpdate={handleTimeUpdate}
                                            onEnded={handleEnded}
                                            onLoadedMetadata={handleTimeUpdate}
                                        />

                                        {/* Album Art & Track Info - Click to show playlist */}
                                        <div className="now-playing" onClick={() => setShowPlaylist(!showPlaylist)}>
                                            <div className={`album-art ${isPlaying ? 'playing' : ''}`}>
                                                <img src={playlist[currentTrack].cover} alt={playlist[currentTrack].title} className="album-cover" />
                                                {isPlaying && (
                                                    <div className="visualizer-overlay">
                                                        <div className="visualizer">
                                                            <div className="bar"></div>
                                                            <div className="bar"></div>
                                                            <div className="bar"></div>
                                                            <div className="bar"></div>
                                                            <div className="bar"></div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="track-info">
                                                <span className="track-title">{playlist[currentTrack].title}</span>
                                                <span className="track-artist">{playlist[currentTrack].artist}</span>
                                            </div>
                                            <div className="playlist-toggle">
                                                <i className={`bx ${showPlaylist ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
                                            </div>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="progress-container" onClick={handleProgressClick}>
                                            <div className="progress-bar">
                                                <div
                                                    className="progress-fill"
                                                    style={{ width: duration ? `${(progress / duration) * 100}%` : '0%' }}
                                                ></div>
                                            </div>
                                            <div className="time-display">
                                                <span>{formatTime(progress)}</span>
                                                <span>{formatTime(duration)}</span>
                                            </div>
                                        </div>

                                        {/* Player Controls */}
                                        <div className="player-controls">
                                            <button
                                                className={`control-btn repeat-btn ${repeatMode > 0 ? 'active' : ''}`}
                                                onClick={handleRepeatToggle}
                                                title={repeatMode === 0 ? 'Repeat off' : repeatMode === 1 ? 'Repeat all' : 'Repeat one'}
                                            >
                                                <i className='bx bx-repeat'></i>
                                                {repeatMode === 2 && <span className="repeat-one">1</span>}
                                            </button>
                                            <button className="control-btn" onClick={handlePrevious} title="Previous">
                                                <i className='bx bx-skip-previous'></i>
                                            </button>
                                            <button className="control-btn play-btn" onClick={handlePlayPause} title={isPlaying ? 'Pause' : 'Play'}>
                                                <i className={`bx ${isPlaying ? 'bx-pause' : 'bx-play'}`}></i>
                                            </button>
                                            <button className="control-btn" onClick={handleNext} title="Next">
                                                <i className='bx bx-skip-next'></i>
                                            </button>
                                            <div className="control-btn placeholder"></div>
                                        </div>

                                        {/* Playlist Popup */}
                                        {showPlaylist && (
                                            <div className="playlist-popup">
                                                <div className="playlist-header">
                                                    <span>{language === 'vi' ? 'Danh sách phát' : 'Playlist'}</span>
                                                    <button onClick={() => setShowPlaylist(false)}>
                                                        <i className='bx bx-x'></i>
                                                    </button>
                                                </div>
                                                <div className="playlist">
                                                    {playlist.map((track, index) => (
                                                        <div
                                                            key={index}
                                                            className={`playlist-item ${index === currentTrack ? 'active' : ''}`}
                                                            onClick={() => {
                                                                setCurrentTrack(index);
                                                                setIsPlaying(true);
                                                                setShowPlaylist(false);
                                                            }}
                                                        >
                                                            <img src={track.cover} alt={track.title} className="playlist-cover" />
                                                            <div className="playlist-info">
                                                                <span className="playlist-title">{track.title}</span>
                                                                <span className="playlist-artist">{track.artist}</span>
                                                            </div>
                                                            {index === currentTrack && isPlaying && (
                                                                <i className='bx bx-equalizer playing-icon'></i>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {hobby.hasTeams && (
                                    <div className="teams-section">
                                        <div className="teams-grid">
                                            {hobby.teams.map((team, index) => (
                                                <div key={index} className="team-card">
                                                    <img src={team.logo} alt={team.name} className="team-logo" />
                                                    <div className="team-info">
                                                        <span className="team-name">{team.name}</span>
                                                        <span className="team-league">{team.league}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {hobby.hasGames && (
                                    <div className="games-section">
                                        <div className="games-grid">
                                            {hobby.games.map((game, index) => (
                                                <div key={index} className="game-card">
                                                    <img src={game.logo} alt={game.name} className="game-logo" />
                                                    <div className="game-info">
                                                        <span className="game-name">{game.name}</span>
                                                        <span className="game-genre">{game.genre}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
