import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { Button, List, ListItem, ListItemText } from '@mui/material';

function BookListPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksCollectionRef = collection(db, 'books');
      const q = query(booksCollectionRef, orderBy('title'));
      const querySnapshot = await getDocs(q);
      const booksData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBooks(booksData);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>รายการหนังสือ</h1>
      <Button component={Link} to="/add" variant="contained" color="primary">
        เพิ่มหนังสือ
      </Button>
      <List>
        {books.map((book) => (
          <ListItem key={book.id}>
            <ListItemText primary={book.title} secondary={book.author} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default BookListPage;