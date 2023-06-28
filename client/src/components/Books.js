const user= {
    id:6356,
    username:"Bob the builder"
}

const Books = (props) =>{
    return (
        <div>     
            <h2>{user.username}'s Web site</h2>
            <ul>
        { props.books.map((book) => 
          <li key={book.id}>{book.title}</li>
        ) }
      </ul>
             </div>
    );
}
export default Books;