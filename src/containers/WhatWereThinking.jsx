import React from 'react'
import CardWWT from '../components/CardWWT'
import CardNews from '../components/CardNews'
import MainNews from '../assets/databases/MainNews.json'
import AllNews from '../assets/databases/News.json'
import '../styles/Home/WhatWereThinking.css'

const WhatWereThinking = () => {
  return (
    <section className='whatWereThinking'>
      <div className='containerWWT'>
        <div className='titleWWT'>
          <a href="/" className='title'> WHAT WE'RE THINKING </a>
        </div>
        <header className='headerWWT'>
          <p> Our latest company news, whitepapers, videos, and articles. </p>
        </header>
        <article className='articleWWT'>
          {MainNews.map(mainNews => (
            <CardWWT mainNews = {mainNews} key = {mainNews.id} />
          ))}
        </article>
        <aside className='asideWWT'>
            {AllNews.map(allNews => (
              <CardNews allNews={allNews} key={allNews.id} />
            ))}
            <a href="/"> Newsroom </a>
            <a href="/"> Insights </a>
        </aside>
      </div>
      <div className='explorerMore'>
        <span> explore the future</span>
        <div className='separation'>
          <p> Unleash creativity and innovation with Slalom Element. </p>
          <a href="/"> learn more</a>
        </div>
      </div>
    </section>
  )
}

export default WhatWereThinking