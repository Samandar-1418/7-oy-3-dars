import { Link } from 'react-router-dom';
import '../index.css'
export default function Home() {
  return (
    <div className="header">
      <span className="Planets">THE PLANETS</span>
       <nav>
        <ul>
          <li>
            <Link to='/'>mercury</Link>
          </li>
          <li>
            <Link to='/Venera'>venus</Link>
          </li>
          <li>
            <Link to='/Yer'>earth</Link>
          </li>
          <li>
            <Link to='/Mars'>mars</Link>
          </li>
          <li>
            <Link to='/Yupiter'>jupiter</Link>
          </li>
          <li>
            <Link to='/Saturn'>saturn</Link>
          </li>
          <li>
            <Link to='/Uran'>uranus</Link>
          </li>
          <li>
            <Link to='/Neptun'>neptune</Link>
          </li>
        </ul>
       </nav>
    </div>
  )
}
