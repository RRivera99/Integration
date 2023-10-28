import SearchBar from "../SearchBar/SearchBar.jsx";
import {Link} from 'react-router-dom';


export default function Nav(props){
    return (
        <div>
            <Link to = '/about'>
            <button>
                    About me
            </button>
            </Link>
            
            <Link to = '/home'>
            <button>
                    Home
            </button>
            </Link>

            <Link to = '/favorites'>
            <button>
                Favorites
            </button>
            </Link>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}