import Link from 'next/link'

const Badge = ({title, imgLink, description, githubLink, projectLink, techList}) => {
    return (
        <div className="container-badge">
            <div className="badge-title">
                {title}
            </div>
            <div className="badge-image">
                <img src={imgLink} />
            </div>
            <div className="badge-descriptions">
                <p>{description}</p>
            </div>
            <div className="badge-links">
                    <Link href={githubLink}><img className='badge-link-img' src='github.svg'></img></Link>
                    {projectLink !== '' ? <Link href={projectLink}><img className='badge-link-img' src='icon-website.jpg'></img></Link> : null}
            </div>
            <div className='badge-technique-tags'>
                { techList.map((tech, idx) => <div className='badge-tech-tag' key={'tech-' + idx}>{tech}</div>) }
            </div>

        </div>
    )
}

export default Badge