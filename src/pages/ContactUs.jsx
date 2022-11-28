import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TextareaAutosize } from '@mui/material';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseauth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ContactUs = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();


  // const regExp = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  // const phonenoexp = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  const handleAction = (event) => {

    // if (regExp.test(email)) {
    //   if (phonenoexp.test(contact)) {

        const docRef = addDoc(collection(db, "contact"), {
          name: name,
          email: email,
          contact: contact,
          subject: subject,
          message: message

        });
        console.log(docRef.name)
        toast.success("Data Add Successfully");
    //   } else {
    //     toast.error("please check the contact");
    //   }
    // } else {
    //   toast.error("please check the email");
    // }
  }

  return (
    <Container container spacing={2} sx={{ my: 5 }}>
      <Grid container spacing={2} sx={{ mb: 5 }}>
        <Grid item xs={7} className='d-flex align-items-center justify-content-center'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="" />
        </Grid>
        <Grid item xs={5}>
          <ToastContainer />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Contact Page
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    onChange={(event) => setName(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type='email'
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="contact"
                    label="Contact"
                    name="contact"
                    autoComplete="contact"
                    onChange={(event) => setContact(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="subject"
                    label="Subject"
                    name="sujbect"
                    autoComplete="subject"
                    onChange={(event) => setSubject(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Enter your message here.."
                    style={{ width: '100%' }}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Remember"
                  />
                </Grid>
              </Grid>
              <Button
                onClick={handleAction}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ContactUs;