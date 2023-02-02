import React from 'react'
import './_music.styles.scss'

const Music = () => {
    return (
        <section id="music">
            <div className="h2-container">
                <h2>My Music</h2>
            </div>
            <div className="spotify">
                <iframe title='my-music' style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/6ePrOsfs9dS87LOhkZiloP?utm_source=generator&theme=0" width="100%" height="360" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <div className="music-text1">
                    <p>My most recent project "Dream Powder" is an ambitious idea materialised with the help of one of my closest friends Karl Wunsche, currently living in     opposite sides of the atlantic ocean, we have been creating songs online with the main idea to explore liquid dreamy textures and pop sounds. Everything you     hear is made, recorded, designed, edited, mixed and mastered by us.</p>
                    <p>I will also upload more songs by the name of Nico Leivo as a solo artist or collaborations in the future.</p>
                </div>
            </div>
            <div className="music-skills">
                <p className="skill-text">singer.song-writer.guitar.bass-guitar.synthesizer.drums.music-production.lyrics.edition.mixing-engineer.ableton.reaper</p>
            </div>
        </section>
    )
}

export default Music