import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import pewdiepie from '../../assets/pewdiepie.jpg'
import mrbeast from '../../assets/mrbeast.jpg'
import tseries from '../../assets/t-series.jpg'
import setindia from '../../assets/setindia.jpg'
import wwe from '../../assets/wwe.jpg'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category===0?"active":""}`}onClick={()=>setCategory(0)}>
          <img src={home} alt="" /><p>Início</p>
        </div>
        <div className={`side-link ${category===20?"active":""}`}onClick={()=>setCategory(20)}>
          <img src={game_icon} alt="" /><p>Jogos</p>
        </div>
        <div className={`side-link ${category===2?"active":""}`}onClick={()=>setCategory(2)}>
          <img src={automobiles} alt="" /><p>Automóveis</p>
        </div>
        <div className={`side-link ${category===17?"active":""}`}onClick={()=>setCategory(17)}>
          <img src={sports} alt="" /><p>Esportes</p>
        </div>
        <div className={`side-link ${category===24?"active":""}`}onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="" /><p>Entretenimento</p>
        </div>
        <div className={`side-link ${category===28?"active":""}`}onClick={()=>setCategory(28)}>
          <img src={tech} alt="" /><p>Tecnologia</p>
        </div>
        <div className={`side-link ${category===10?"active":""}`}onClick={()=>setCategory(10)}>
          <img src={music} alt="" /><p>Música</p>
        </div>
        <div className={`side-link ${category===22?"active":""}`}onClick={()=>setCategory(22)}>
          <img src={blogs} alt="" /><p>Blogs</p>
        </div>
        <div className={`side-link ${category===25?"active":""}`}onClick={()=>setCategory(25)}>
          <img src={news} alt="" /><p>Notícias</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Inscrições</h3>
        <div className="side-link">
          <img src={pewdiepie} alt="" /><p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={mrbeast} alt="" /><p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tseries} alt="" /><p>T-Series</p>
        </div>
        <div className="side-link">
          <img src={setindia} alt="" /><p>SET India</p>
        </div>
        <div className="side-link">
          <img src={wwe} alt="" /><p>WWE</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar