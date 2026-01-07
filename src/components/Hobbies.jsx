import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hobbies.css';

const Hobbies = () => {
    const { language } = useLanguage();
    const [currentTrack, setCurrentTrack] = useState(0);

    const playlist = [
        {
            title: 'End of Beginning',
            artist: 'Djo',
            youtubeId: 'Jr1sLmJvlwE'
        },
        {
            title: 'Victory Lap',
            artist: 'Five',
            youtubeId: 'onPR4r2Bweg'
        },
        {
            title: 'Khi Mà',
            artist: 'Ronboogz',
            youtubeId: 'uEibsabKqYI'
        }
    ];

    const handlePrevious = () => {
        setCurrentTrack(prev => prev === 0 ? playlist.length - 1 : prev - 1);
    };

    const handleNext = () => {
        setCurrentTrack(prev => prev === playlist.length - 1 ? 0 : prev + 1);
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
            titleVi: 'Sở thích 2',
            titleEn: 'Hobby 2',
            icon: 'bx-plus-circle',
            descriptionVi: 'Thêm sở thích của bạn',
            descriptionEn: 'Add your hobby',
            isEmpty: true
        },
        {
            id: 3,
            titleVi: 'Sở thích 3',
            titleEn: 'Hobby 3',
            icon: 'bx-plus-circle',
            descriptionVi: 'Thêm sở thích của bạn',
            descriptionEn: 'Add your hobby',
            isEmpty: true
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
                            <div className="hobby-icon">
                                <i className={`bx ${hobby.icon}`}></i>
                            </div>
                            <div className="hobby-content">
                                <h3 className="hobby-title">
                                    {language === 'vi' ? hobby.titleVi : hobby.titleEn}
                                </h3>
                                <p className="hobby-description">
                                    {language === 'vi' ? hobby.descriptionVi : hobby.descriptionEn}
                                </p>

                                {hobby.hasPlayer && (
                                    <div className="music-player">
                                        {/* Current Track Info */}
                                        <div className="now-playing">
                                            <div className="track-info">
                                                <span className="track-title">{playlist[currentTrack].title}</span>
                                                <span className="track-artist">{playlist[currentTrack].artist}</span>
                                            </div>
                                            <span className="track-number">{currentTrack + 1} / {playlist.length}</span>
                                        </div>

                                        {/* Player Controls */}
                                        <div className="player-controls">
                                            <button className="control-btn" onClick={handlePrevious} title="Previous">
                                                <i className='bx bx-skip-previous'></i>
                                            </button>
                                            <button className="control-btn play-btn" title="Play on YouTube">
                                                <i className='bx bx-play'></i>
                                            </button>
                                            <button className="control-btn" onClick={handleNext} title="Next">
                                                <i className='bx bx-skip-next'></i>
                                            </button>
                                        </div>

                                        {/* YouTube Embed */}
                                        <div className="youtube-embed">
                                            <iframe
                                                key={currentTrack}
                                                src={`https://www.youtube.com/embed/${playlist[currentTrack].youtubeId}?autoplay=0`}
                                                width="100%"
                                                height="180"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title={playlist[currentTrack].title}
                                            ></iframe>
                                        </div>

                                        {/* Playlist */}
                                        <div className="playlist">
                                            {playlist.map((track, index) => (
                                                <div
                                                    key={index}
                                                    className={`playlist-item ${index === currentTrack ? 'active' : ''}`}
                                                    onClick={() => setCurrentTrack(index)}
                                                >
                                                    <div className="playlist-number">{index + 1}</div>
                                                    <div className="playlist-info">
                                                        <span className="playlist-title">{track.title}</span>
                                                        <span className="playlist-artist">{track.artist}</span>
                                                    </div>
                                                    {index === currentTrack && (
                                                        <i className='bx bx-equalizer playing-icon'></i>
                                                    )}
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
