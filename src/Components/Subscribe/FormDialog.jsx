// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import Typography from '@mui/material/Typography';
// import cogeb from "../../Assets/al baraka 1.png";

// export default function FormDialog({ open, onClose }) {
//   const [formValues, setFormValues] = useState({
//     email: '',
//     name: '',
//     number: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formValues.email || !formValues.name || !formValues.number) {
//       alert('Veuillez remplir tous les champs.');
//       return; 
//     }
//     alert('Formulaire soumis avec succès!');
//     setFormValues({ email: '', name: '', number: '', message: '' }); 
//     onClose();
//   };

//   return (
//     <Dialog 
//       open={open} 
//       onClose={onClose} 
//       maxWidth="sm" 
//       fullWidth
//       PaperProps={{
//         style: {
//           backgroundColor: 'rgb(222 223 233)',
//           borderRadius: '60px',
//         },
//       }}
//     >
//       <form onSubmit={handleSubmit}>
//         <div style={{ textAlign: 'center', padding: '20px', color: '#fff' }}>
//           <img src={cogeb} alt="Silver Line Solution" style={{ width: '80px', height: 'auto', margin: '0 auto' }} />
//           {/* <Typography variant="h6" component="h2">
//             Contactez-nous
//           </Typography> */}
//         </div>
//         <DialogContent style={{ color: '#fff' }}>
//           <TextField
//             autoFocus
//             // margin="dense"
//             name="email"
//             label="Adresse e-mail"
//             type="email"
//             fullWidth
//             variant="outlined"
//             value={formValues.email}
//             onChange={handleChange}
//             InputLabelProps={{ style: { color: 'black' } }}
//             inputProps={{ style: { color: 'black' } }}
//           />
//           <TextField
//             margin="dense"
//             name="name"
//             label="Nom & Prenom"
//             type="text"
//             fullWidth
//             variant="outlined"
//             value={formValues.name}
//             onChange={handleChange}
//             InputLabelProps={{ style: { color: 'black' } }}
//             inputProps={{ style: { color: 'black' } }}
//           />
//           <TextField
//             margin="dense"
//             name="number"
//             label="Numéro de téléphone"
//             type="number"
//             fullWidth
//             variant="outlined"
//             value={formValues.number}
//             onChange={handleChange}
//             InputLabelProps={{ style: { color: 'black' } }}
//             inputProps={{ style: { color: 'black' } }}
//           />
//         </DialogContent>
//         <DialogActions className="button-container" style={{ justifyContent: 'center' }}>
//           <Button 
//             type="submit"
//             style={{
//                 border: 'none',
//                 outline: 'none',
//                 cursor: 'pointer',
//                 borderRadius: '5px',
//                 padding: '0.8rem 1.2rem',
//                 color: 'var(--whiteColor)',
//                 fontWeight: 500,
//                 background: 'linear-gradient(40deg, rgb(114, 145, 255), rgb(42, 73, 198))'
//             }}
//           >
//             Envoyer
//           </Button>
//         </DialogActions>
//       </form>
//     </Dialog>
//   );
// }


import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // Importer SweetAlert2
import "./Subscribe.css";
import cogeb from "../../Assets/al baraka 1.png";
export default function FormDialog({ open, onClose }) {
  const [formValues, setFormValues] = useState({
    email: '',
    from_name: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false); // État pour gérer le statut de chargement

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValues.email || !formValues.from_name || !formValues.message) {
      alert('Veuillez remplir tous les champs.');
      return; 
    }

    setLoading(true); // Démarrer le spinner

    // Configuration d'EmailJS pour l'envoi de l'email
    emailjs.send('service_udjcccg', 'template_1uevcn8', formValues, 'MUUK8awC8Em0DrQPe')
      .then((result) => {
        console.log(result.text);
        setLoading(false); // Arrêter le spinner
        Swal.fire({
          title: 'Succès!',
          text: 'Formulaire soumis avec succès!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setFormValues({ email: '', from_name: '', message: ''});
        onClose();
      }, (error) => {
        console.log(error.text);
        setLoading(false); // Arrêter le spinner
        Swal.fire({
          title: 'Erreur!',
          text: "Erreur lors de l'envoi du formulaire.",
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: 'rgb(222 223 233)',
          borderRadius: '60px',
        },
      }}
    >
      <form onSubmit={handleSubmit}>
      <div style={{ textAlign: 'center', padding: '20px', color: '#fff' }}>
          <img src={cogeb} alt="Silver Line Solution" style={{ width: '80px', height: 'auto', margin: '0 auto' }} />
          {/* <Typography variant="h6" component="h2">
            Contactez-nous
          </Typography> */}
        </div>
        <DialogContent style={{ color: '#fff' }}>
          <TextField
            autoFocus
            name="email"
            label="Adresse e-mail"
            type="email"
            fullWidth
            variant="outlined"
            value={formValues.email}
            onChange={handleChange}
            className="textfield-root"
          />
          <TextField
            margin="dense"
            name="from_name"
            label="Nom & Prénom"
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.from_name}
            onChange={handleChange}
            className="textfield-root"
          />
          <TextField
            margin="dense"
            name="message"
            label="Message"
            type="text"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            value={formValues.message}
            onChange={handleChange}
            className="textfield-root"
          />
        </DialogContent>
        <DialogActions className="button-container" style={{ justifyContent: 'center' }}>
          <Button 
            type="submit"
            style={{
              color: '#C9961A',
              background: 'rgba(205, 198, 198, 0.36)',
              border: '2px solid #C9961A',
              fontFamily: "'Playfair Display', serif",
              position: 'relative'
            }}
            disabled={loading} // Désactiver le bouton pendant le chargement
          >
            {loading ? <CircularProgress size={24} style={{ color: '#C9961A' }} /> : 'Envoyer'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}