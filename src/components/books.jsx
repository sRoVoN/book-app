import {getBooks} from '../data/data';
import { NavLink, Outlet, useLocation, useSearchParams } from "react-router-dom";


function Books(props) {
    const books = getBooks();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    return (
        <div style={{display: "flex"}}>
            <nav style={{borderRight:"solid 1px", padding:"1rem"}}>
            <h2>Books</h2>
            <input type="text"
            value={searchParams.get("filter") || ""}
            onChange={e=>{
                let filter = e.target.value;
                if(filter){
                    setSearchParams({filter});
                }else {
                    setSearchParams({});
                }
            }}
            placeholder="book searching"
            style={{marginBottom:"1rem"}} />          
            {books.filter((book) => {
                let filter = searchParams.get("filter");
                if(!filter) return true;
                let title = book.title.toLowerCase();
                return title.startsWith(filter.toLowerCase());
            })
              .map((book)=> (
                <NavLink key={book.id}
                 to={`/books/${book.id}${location.search}`}
                 style={({isActive}) => {
                    return {
                        display:"block",
                        color: isActive ? "pink" : "gray"
                    }
                 }}                 
                 >{book.title}</NavLink>
                 ))}
            </nav>                   
            <Outlet />
        </div>
    );
}

export default Books;