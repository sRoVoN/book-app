import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getBook, deleteBook } from '../data/data';

function Book(props) {
    const params = useParams();
    const book = getBook(params.bookId);
    const navigate = useNavigate();
    const location = useLocation();

    if(book){
        return (
            <main style={{padding:"1rem", marginLeft:"2rem"}}>
                <p>Book:{" "}{book.title} with it's NOM.{book.id}</p>
                <p>Language:{book.language}</p>
                <p>Author:{`MR/MISS ${book.author} `}</p>
                <p style={{color:"blue", textDecoration:"underline"}}>Link:{book.link}</p>
                 <button 
                 className='btn btn-danger'
                 onClick={() => {
                    deleteBook(book.id);
                    navigate("/books" + location.search)
                 }}>Delete</button>
            </main>
        );
    }else {
        return(
        <main>
            <p>The Book Doesn't Exist</p>
        </main>
        )       
    }
    
}

export default Book;