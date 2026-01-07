import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hobbies.css';

const Hobbies = () => {
    const { language } = useLanguage();

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
            // YouTube video ID for End of Beginning by Djo
            youtubeId: 'Jr1sLmJvlwE'
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
                                        <div className="youtube-embed">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${hobby.youtubeId}?autoplay=0&loop=1`}
                                                width="100%"
                                                height="200"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title={hobby.songTitle}
                                            ></iframe>
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
