import Head from 'next/head'
import Image from 'next/image'
import Badge from '../components/badge'
import Heading from '../components/heading'
import Quote from '../components/quote'
import { motion } from "framer-motion"
import Heading2 from '../components/heading2'
import Badge2 from '../components/badge2'

const INFO = '<p> a computer science student from Finland. Creating smooth, beautiful and interactive frontends with React is what gives me joy </p>'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>rikurainio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container-main'>

        <div className='container-home'>

          <div className='container-row-1'>
            <p className='heading-name'> Riku Rainio</p>
          </div>
          <div className='container-row-2'>
            <Quote text={INFO} />
          </div>
          <div className='container-row-3'>

          </div>
          <div className='container-row-4'>

          </div>
        </div>

        <div className='container-aboutme' id='aboutme'>
          <Heading text='About me'/>
        </div>
        <div className='container-skills' id='skills'>
          <Heading text='Skills'/>    

          <Heading2 text='Languages and Frameworks'/>

          <div className='logos-languages'>
            <img className='logo' src='logo-cpp-purple.png' width={'63px'} />
            <img className='logo' src='logo-react-purple.png' width={'73px'}/>
            <img className='logo' src='logo-python-purple.png' width={'59px'}/>
            <img className='logo' src='logo-js-purple2.png' width={'58px'}/>
            <img className='logo' src='logo-typescript-purple.png' width={'58px'}/>
            <img className='logo' src='logo-nextjs.png' width={'90px'}/>
            <img className='logo' src='logo-nodejs-purple.png' width={'90px'}/>
          </div>

          <Heading2 text='Database'/>

          <div className='logos-languages'>
            <img className='logo' src='logo-mongodb-purple.png' width={'90px'}/>
            <img className='logo' src='logo-firebase-purple.png' width={'90px'} />
            <img className='logo' src='logo-redis-purple.png' width={'90px'}/>
          </div>

        </div>
        <div className='container-projects' id='projects'>
          <Heading text='Projects'/>

            <div className='container-badges'>
              <Badge
                title='Bark.gg'
                imglink=''
                description='A League of Legends profile lookup site that fetches the data from Riot Games API'
                githubLink='https://github.com/rikurainio/barkgg'
                projectLink='https://barkgg.vercel.app/'
                techList={['Next.js', 'React hooks', 'JavaScript Array methods', 'Axios client', 'Riot Games API']}
                />

              <Badge
                title='React-Svelte Comparison'
                imglink=''
                description='Selenium script that runs different DOM operations to similar React & Svelte web pages and logs the result'
                githubLink='https://github.com/rikurainio/svelte-react-comparison'
                projectLink=''
                techList={['Svelte', 'React', 'Selenium']}
                />

              <Badge
                title='Example NFT minting project'
                imglink=''
                description='A very basic project to test how Ethereum blockchain smart contracts can be written by using Solidity and ERC721 Token standard'
                githubLink='https://github.com/rikurainio/svelte-react-comparison'
                projectLink=''
                techList={['Solidity', 'React']}
                />

              <Badge
                title='Ikkiar Discord Bot'
                imglink=''
                description='Discord bot that runs on simple Node.Js backend and uses MongoDB as its&apos; database'
                githubLink='https://github.com/rikurainio/svelte-react-comparison'
                projectLink=''
                techList={['Node.js', 'MongoDB', 'Discord.js']}
                />
            </div>
            

          <div className='project'>

          </div>
          <div className='project'>

          </div>

        </div>
        <div className='container-contact' id='contact'>
          <Heading text='Contact'/>

          <div className='container-badges2'>
            <Badge2
              title='Email'
              handle='rainioriku@gmail.com'
              url='mailto:rainioriku@gmail.com'
            />
            <Badge2
              title='Instagram'
              handle='Oiniar'
              url='https://www.instagram.com/oiniar/?hl=en'
            />
            <Badge2
              title='Discord'
              handle='Rhan#5498'
              url='https://discord.com/users/107596792421449728'
            />
            
            <Badge2
              title='Twitter'
              handle='RhanLoL'
              url='https://twitter.com/RhanLoL'
            />
            
          </div>
          
        </div>

      </main>
    </div>
  )
}
