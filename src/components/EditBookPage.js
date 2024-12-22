import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { TextField, Button } from '@mui/material';

function EditBookPage() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      const bookRef = doc(db, "books", id);
      const bookSnap = await getDoc(bookRef);
      if (bookSnap.exists()) {
        const bookData = bookSnap.data();
        setTitle(bookData.title);
        setAuthor(bookData.author);
        setPrice(bookData.price);
        setImageUrl(bookData.imageUrl);
      } else {
        console.log("No such document!");
      }
    };
    fetchBook();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedBookData = { title, author, price, imageUrl };
    try {
      const bookRef = doc(db, "books", id);
      await updateDoc(bookRef, updatedBookData);
      console.log("Document updated with ID: ", id);
      // Redirect to book list page
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <div>
      <h1>แก้ไขหนังสือ</h1>
      <form onSubmit={handleSubmit}>
        <TextField label="ชื่อหนังสือ" variant="outlined" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField label="ผู้แต่ง" variant="outlined" fullWidth value={author} onChange={(e) => setAuthor(e.target.value)} />
        <TextField label="ราคา" variant="outlined" fullWidth value={price} onChange={(e) => setPrice(e.target.value)} />
        <TextField label="URL รูปภาพ" variant="outlined" fullWidth value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <Button type="submit" variant="contained" color="primary">บันทึก</Button>
      </form>
    </div>
  );
}

export default EditBookPage;