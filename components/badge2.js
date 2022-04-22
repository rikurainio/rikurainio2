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
        <Link href={url}>
            <motion.div
                whileTap={{ scale: 0.95}}
                className="container2-badge"
            >
                <div className="badge2-links">
                    <img className='badge2-link-img' src={getCorrectIconSrc(title)}></img>
                </div>
                <div className="badge2-socials-details">
                    {title}
                    <div className='badge2-handle'>
                    {handle}
                    </div>
                </div>
                
                
            </motion.div>
        </Link>
        
    )
}

export default Badge2