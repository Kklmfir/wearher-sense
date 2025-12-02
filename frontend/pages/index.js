import Head from 'next/head'
import MapView from '../components/MapView'
import WeatherCard from '../components/WeatherCard'
import ChatWidget from '../components/ChatWidget'
import styles from '../styles/globals.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>WeatherSense — Cuaca & Traffic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{padding:20}}>
        <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <div style={{
              width:48,height:48,borderRadius:10,
              background:'linear-gradient(90deg,#00FF87,#0061FF)'}} />
            <h1>WeatherSense</h1>
          </div>
          <nav>
            <button style={{padding:'8px 12px', borderRadius:10}}>Cek Rute</button>
          </nav>
        </header>

        <div style={{display:'grid', gridTemplateColumns:'1fr 360px', gap:16}}>
          <div style={{height:'70vh', borderRadius:16, overflow:'hidden', boxShadow:'0 6px 20px rgba(0,0,0,0.08)'}}>
            <MapView />
          </div>

          <aside style={{display:'flex', flexDirection:'column', gap:12}}>
            <WeatherCard />
            <div style={{background:'#fff', borderRadius:12, padding:12, boxShadow:'0 6px 20px rgba(0,0,0,0.04)'}}>
              <h3>Notifikasi</h3>
              <p>Atur notifikasi hujan, banjir, gempa.</p>
            </div>
          </aside>
        </div>
      </main>

      <ChatWidget />
    </div>
  )
}
