import React from 'react'
import './experience.css'
import {SiKotlin,SiSwift,SiFlutter,SiFirebase,SiSupabase,SiReact,SiAngular,SiJavascript,SiCss3,
  SiMicrosoftsqlserver,SiMysql,SiPostgresql} from 'react-icons/si'
import {FaJava,FaNodeJs} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>

      <div className="experience__mobile">
        <h3>Mobile developer</h3>
        <div className="experience__content">
          <article className='experience__details'>
          <SiKotlin className='experience__details-icon'/>
          <div>
          <h4>Kotlin</h4>
          </div>
          </article>
          <article className='experience__details'>
          <FaJava className='experience__details-icon'/>
          <div>
          <h4>Java</h4>
          </div>
          </article>
          <article className='experience__details'>
          <SiSwift className='experience__details-icon'/>
          <div>
          <h4>Swift</h4>
          </div>
          </article>
          <article className='experience__details'>
          <SiFlutter className='experience__details-icon'/>
          <div>
          <h4>Flutter</h4>
          </div>
          </article>
          <article className='experience__details'>
          <SiFirebase className='experience__details-icon'/>
          <div>
          <h4>Firebase</h4>
          </div>
          </article>
          <article className='experience__details'>
          <SiSupabase className='experience__details-icon'/>
          <div>
          <h4>Supabase</h4>
          </div>
          </article>
        </div>
      </div>

      <div className="experience__web">
      <h3>Web developer</h3>
      <div className="experience__content">
          <article className='experience__details'>
          <SiReact className='experience__details-icon'/>
          <div>
          <h4>React</h4>
          </div>
          </article>
          <article className='experience__details'>
          <SiAngular className='experience__details-icon'/>
          <div>
          <h4>Angular</h4>
          </div>
          </article>
          <article className='experience__details'>
          <FaNodeJs className='experience__details-icon'/>
          <div>
          <h4>NodeJS</h4>
          </div>
          </article>
          <article className='experience__details'>
          <SiJavascript className='experience__details-icon'/>
          <div>
          <h4>Javascript</h4>
          </div>
          </article>
          <article className='experience__details'>
          <SiCss3 className='experience__details-icon'/>
          <div>
          <h4>CSS</h4>
          </div>
          </article>
          <article className='experience__details'>
          <SiMicrosoftsqlserver className='experience__details-icon'/>
          <div>
          <h4>SQL</h4>
          </div>
          </article>
          <article className='experience__details'>
          <SiMysql className='experience__details-icon'/>
          <div>
          <h4>MySQL</h4>
          </div>
          </article>
          <article className='experience__details'>
          <SiPostgresql className='experience__details-icon'/>
          <div>
          <h4>PostgreSQL</h4>
          </div>
          </article>
        </div>
      </div>

      </div>
    </section>
  )
}

export default Experience