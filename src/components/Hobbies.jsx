import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hobbies.css';

const Hobbies = () => {
    const { language } = useLanguage();
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const hobbies = [
        {
            id: 1,
            titleVi: 'Nghe nhạc',
            titleEn: 'Listening to Music',
            icon: 'bx-music',
            descriptionVi: 'Yêu thích các thể loại nhạc đa dạng',
            descriptionEn: 'Enjoy various music genres',
            hasPlayer: true,
            songTitle: 'End of Beginning',
            artist: 'Djo',
            // Spotify embed for End of Beginning by Djo
            spotifyId: '58zsLZPvfflaiIbNWoA22O'
        },
        {
            id: 2,
            titleVi: 'Sở thích 2',
            titleEn: 'Hobby 2',
            icon: 'bx-plus-circle',
            descriptionVi: 'Thêm sở thích của bạn',
            descriptionEn: 'Add your hobby',
            hasPlayer: false,
            isEmpty: true
        },
        {
            id: 3,
            titleVi: 'Sở thích 3',
            titleEn: 'Hobby 3',
            icon: 'bx-plus-circle',
            descriptionVi: 'Thêm sở thích của bạn',
            descriptionEn: 'Add your hobby',
            hasPlayer: false,
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
                                        <div className="song-info">
                                            <i className='bx bx-album'></i>
                                            <div className="song-details">
                                                <span className="song-title">{hobby.songTitle}</span>
                                                <span className="song-artist">{hobby.artist}</span>
                                            </div>
                                        </div>
                                        <iframe
                                            src={`https://open.spotify.com/embed/track/${hobby.spotifyId}?utm_source=generator&theme=0`}
                                            width="100%"
                                            height="80"
                                            frameBorder="0"
                                            allowFullScreen=""
                                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                            loading="lazy"
                                            className="spotify-embed"
                                        ></iframe>
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
