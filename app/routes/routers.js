
const express = require('express');
const router = express.Router();
 
const departamentos = require('../controllers/controller.js');

router.post('/api/usuarios/create', departamentos.createUsuario);
router.get('/api/usuarios/all', departamentos.retrieveAllUsuarios);
router.get('/api/usuarios/onebyid/:id', departamentos.getUsuarioByIdd);
router.put('/api/usuarios/update/:id', departamentos.updateUsuarioById);
router.delete('/api/usuarios/delete/:id', departamentos.deleteUsuarioById);

router.post('/api/libros/create', departamentos.createLibro);
router.get('/api/libros/all', departamentos.retrieveAllLibros);
router.get('/api/libros/onebyid/:id', departamentos.getLibroById);
router.put('/api/libros/update/:id', departamentos.updateLibroById);
router.delete('/api/libros/delete/:id', departamentos.deleteLibroById);

router.post('/api/autores/create', departamentos.createAutor);
router.get('/api/autores/all', departamentos.retrieveAllAutores);
router.get('/api/autores/onebyid/:id', departamentos.getAutorById);
router.put('/api/autores/update/:id', departamentos.updateAutorById);
router.delete('/api/autores/delete/:id', departamentos.deleteAutorById);

module.exports = router;