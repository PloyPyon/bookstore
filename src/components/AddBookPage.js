import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { TextField, Button } from '@mui/material';

function AddBookPage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBook = { title, author, price, imageUrl };
    try {
      const docRef = await addDoc(collection(db, "books"), newBook);
      console.log("Document written with ID: ", docRef.id);
      // Redirect to book list page
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <h1>เพิ่มหนังสือ</h1>
      <form onSubmit={handleSubmit}>
        <TextField label="ชื่อหนังสือ" variant="outlined" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField label="ผู้แต่ง" variant="outlined" fullWidth value={author} onChange={(e) => setAuthor(e.target.value)} />
        <TextField label="ราคา" variant="outlined" fullWidth value={price} onChange={(e) => setPrice(e.target.value)} />
        <TextField label="URL รูปภาพ" variant="outlined" fullWidth value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <Button type="submit" variant="contained" color="primary">เพิ่ม</Button>
      </form>
    </div>
  );
}

export default AddBookPage;