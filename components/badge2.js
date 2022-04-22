import Link from 'next/link'
import { motion } from "framer-motion"

const Badge2 = ({title, handle, url, }) => {
    if(url === ''){
        return null
    }

    // GET EITHER DISCORD, TWITTER, INSTAGRAM OR EMAIL LOGO
    const getCorrectIconSrc = (title) => {
        if(title === 'Discord'){
            return 'logo-discord.png'
        }
        if(title === 'Twitter'){
            return 'logo-twitter.png'
        }
        if(title === 'Instagram'){
            return 'logo-instagram.png'
        }
        if(title === 'Email'){
            return 'logo-email.png'
        }
        return ''
    }

    return (
        <motion.div
            className="container2-badge"
            whileHover={{scale: 1, transition: { duration: 0.01 }}}    
        >
            <div className="badge2-links">
                <Link href={url}><img className='badge2-link-img' src={getCorrectIconSrc(title)}></img></Link>
            </div>
            <div className="badge2-socials-details">
                {title}
                <div>
                {handle}
                </div>
            </div>
            
            
        </motion.div>
    )
}

export default Badge2