import { Icon } from '../icons.jsx'
import coverRed from '../assets/a7.jpeg'
import coverGreen from '../assets/a6.jpeg'
import homeShot from '../assets/a4.jpeg'

/* ----------------------- Phone Mockup (Now Playing) ----------------------- */
export function PhonePlayer({ artistTone = 'red' }) {
  // Both tones now render a real artwork on the cover:
  //   red   -> a7.jpeg (warm-toned devotional cover)
  //   green -> a6.jpeg (Aaisaheb portrait — replaces the green silhouette)
  const coverByTone = {
    red: coverRed,
    green: coverGreen,
  }
  const coverPhoto = coverByTone[artistTone] ?? coverRed
  const focal = {
    red: 'center 20%',
    green: 'center 12%',
  }[artistTone]
  const backdrop = {
    red: '#1a0707',
    green: '#06120c',
  }[artistTone]

  const coverStyle = {
    backgroundImage: `url(${coverPhoto})`,
    backgroundSize: 'cover',
    backgroundPosition: focal,
    backgroundColor: backdrop,
  }

  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="status-bar">
          <span>9:41</span>
          <div className="status-icons">
            <span className="sig" />
            <span className="wifi" />
            <span className="batt" />
          </div>
        </div>

        <div className="player-top">
          <button className="round-btn sm">
            <Icon.Chevron width="16" height="16" />
          </button>
          <button className="round-btn sm">
            <Icon.Share width="16" height="16" />
          </button>
        </div>

        <div className="cover cover--image" style={coverStyle}>
          <div className="cover-side-actions">
            <button className="side-btn">
              <Icon.Wave width="16" height="16" />
            </button>
            <button className="side-btn">
              <Icon.Mic width="16" height="16" />
            </button>
            <button className="side-btn active">
              <span className="badge">3D</span>
            </button>
          </div>
        </div>

        <div className="meta">
          <h4>Jiv laun Geli Jivala</h4>
          <p>Today Playlist</p>
        </div>

        <div className="progress">
          <span className="time">1:45</span>
          <div className="bar">
            <span className="fill" />
            <span className="dot" />
          </div>
          <span className="time">3:10</span>
        </div>

        <div className="controls">
          <button className="ctrl">
            <Icon.Prev width="20" height="20" />
          </button>
          <button className="ctrl">
            <Icon.Pause width="20" height="20" />
          </button>
          <button className="ctrl">
            <Icon.Next width="20" height="20" />
          </button>
        </div>
      </div>
    </div>
  )
}

/* ----------------------- Phone Mockup (Home Feed) ----------------------- */
export function PhoneHome() {
  return (
    <div className="phone phone--home">
      <div className="phone-notch" />
      <div className="phone-screen phone-screen--shot">
        <img src={homeShot} alt="Aaisaheb app home screen" />
      </div>
    </div>
  )
}
