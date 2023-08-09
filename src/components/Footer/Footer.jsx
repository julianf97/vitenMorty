import "./_footer.scss"
import GithubIcon from '../GithubIcon/GithubIcon'

export default function Footer() {
  return (
    <div className='contenedorFooter'>
        <h6>© Julian Finelli</h6>
        <span className='contenedorIconoGithub'>
            <GithubIcon/>
        </span>
    </div>
  )
}
