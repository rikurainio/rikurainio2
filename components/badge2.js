import Link from 'next/link'
import { motion } from "framer-motion"

const Badge2 = ({title, handle, url, }) => {
    if(url === ''){
        return null
    }

    // GET EITHER DISCORD, TWITTER, INSTAGRAM OR EMAIL LOGO
    const getCorrectIconSrc = (title) => {
        if(title === 'Discord'){
            return 'discordii.webp'
        }
        if(title === 'Twitter'){
            return 'twitteri.png'
        }
        if(title === 'Instagram'){
            return 'instagram.png'
        }
        if(title === 'Email'){
            return 'gmaili.png'
        }
        return ''
    }

    return (
        <Link href={url}>
            <motion.div
                whileTap={{ scale: 0.95}}
                whileHover={{ scale: 0.99}}
                className="container2-badge"
            >
                <div className={"badge2-links-" + title}>
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