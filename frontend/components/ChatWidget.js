export default function ChatWidget(){
  const tgLink = `https://t.me/YourWeatherSenseBot`; // replace
  return (
    <div style={{
      position:'fixed', right:20, bottom:20
    }}>
      <a href={tgLink} target="_blank" rel="noreferrer">
        <button style={{
          background:'linear-gradient(90deg,#00FF87,#0061FF)',
          color:'#fff', padding:'12px 16px', borderRadius:14, boxShadow:'0 8px 20px rgba(0,0,0,0.12)'
        }}>
          Chat WeatherSense
        </button>
      </a>
    </div>
  )
}
