const db = require('../config/db.config.js');
const Usuario = db.Usuario;

// Crear un nuevo usuario
exports.createUsuario = (req, res) => {
    let usuario = {};

    try {
        // Construir objeto Usuario desde el cuerpo de la solicitud
        usuario.nombre = req.body.nombre;
        usuario.apellido = req.body.apellido;
        usuario.email = req.body.email;
        usuario.telefono = req.body.telefono;
        usuario.direccion = req.body.direccion;
        usuario.fechaRegristro = req.body.fechaRegristro;
        usuario.estado = req.body.estado;

        // Guardar en la base de datos
        Usuario.create(usuario).then(result => {
            res.status(200).json({
                message: "Usuario creado exitosamente con ID = " + result.id,
                usuario: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

// Obtener todos los usuarios
exports.retrieveAllUsuarios = (req, res) => {
    Usuario.findAll()
        .then(usuarios => {
            res.status(200).json({
                message: "¡Usuarios obtenidos exitosamente!",
                usuarios: usuarios
            });
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

// Obtener un usuario por ID
exports.getUsuarioById = (req, res) => {
    let usuarioId = req.params.id;

    Usuario.findByPk(usuarioId)
        .then(usuario => {
            if (usuario) {
                res.status(200).json({
                    message: "Usuario obtenido exitosamente con ID = " + usuarioId,
                    usuario: usuario
                });
            } else {
                res.status(404).json({
                    message: "Usuario no encontrado con ID = " + usuarioId,
                    error: "404"
                });
            }
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

// Actualizar un usuario por ID
exports.updateUsuarioById = async (req, res) => {
    try {
        let usuarioId = req.params.id;
        let usuario = await Usuario.findByPk(usuarioId);

        if (!usuario) {
            res.status(404).json({
                message: "Usuario no encontrado para actualizar con ID = " + usuarioId,
                usuario: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                telefono: req.body.telefono,
                direccion: req.body.direccion,
                fechaRegristro: req.body.fechaRegristro,
                estado: req.body.estado
            };

            let result = await Usuario.update(updatedObject, {
                returning: true,
                where: { id: usuarioId }
            });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el usuario con ID = " + req.params.id,
                    error: "No se puede actualizar",
                });
            } else {
                res.status(200).json({
                    message: "Usuario actualizado exitosamente con ID = " + usuarioId,
                    usuario: updatedObject,
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el usuario con ID = " + req.params.id,
            error: error.message
        });
    }
};

// Eliminar un usuario por ID
exports.deleteUsuarioById = async (req, res) => {
    try {
        let usuarioId = req.params.id;
        let usuario = await Usuario.findByPk(usuarioId);

        if (!usuario) {
            res.status(404).json({
                message: "No existe un usuario con ID = " + usuarioId,
                error: "404",
            });
        } else {
            await usuario.destroy();
            res.status(200).json({
                message: "Usuario eliminado exitosamente con ID = " + usuarioId,
                usuario: usuario,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el usuario con ID = " + req.params.id,
            error: error.message,
        });
    }
};

//---------------------------------- Libros -------------------------------------
const Libro = db.Libro;

// Crear un nuevo libro
exports.createLibro = (req, res) => {
    let libro = {};

    try {
        // Construir objeto Libro desde el cuerpo de la solicitud
        libro.titulo = req.body.titulo;
        libro.autor = req.body.autor;
        libro.isbn = req.body.isbn;
        libro.editorial = req.body.editorial;
        libro.anioPublicacion = req.body.anioPublicacion;
        libro.categoria = req.body.categoria;
        libro.cantidadPosible = req.body.cantidadPosible;
        libro.ubicacion = req.body.ubicacion;

        // Guardar en la base de datos
        Libro.create(libro).then(result => {
            res.status(200).json({
                message: "Libro creado exitosamente con ID = " + result.id,
                libro: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

// Obtener todos los libros
exports.retrieveAllLibros = (req, res) => {
    Libro.findAll()
        .then(libros => {
            res.status(200).json({
                message: "¡Libros obtenidos exitosamente!",
                libros: libros
            });
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

// Obtener un libro por ID
exports.getLibroById = (req, res) => {
    let libroId = req.params.id;

    Libro.findByPk(libroId)
        .then(libro => {
            if (libro) {
                res.status(200).json({
                    message: "Libro obtenido exitosamente con ID = " + libroId,
                    libro: libro
                });
            } else {
                res.status(404).json({
                    message: "Libro no encontrado con ID = " + libroId,
                    error: "404"
                });
            }
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

// Actualizar un libro por ID
exports.updateLibroById = async (req, res) => {
    try {
        let libroId = req.params.id;
        let libro = await Libro.findByPk(libroId);

        if (!libro) {
            res.status(404).json({
                message: "Libro no encontrado para actualizar con ID = " + libroId,
                libro: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                titulo: req.body.titulo,
                autor: req.body.autor,
                isbn: req.body.isbn,
                editorial: req.body.editorial,
                anioPublicacion: req.body.anioPublicacion,
                categoria: req.body.categoria,
                cantidadPosible: req.body.cantidadPosible,
                ubicacion: req.body.ubicacion
            };

            let result = await Libro.update(updatedObject, {
                returning: true,
                where: { id: libroId }
            });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el libro con ID = " + req.params.id,
                    error: "No se puede actualizar",
                });
            } else {
                res.status(200).json({
                    message: "Libro actualizado exitosamente con ID = " + libroId,
                    libro: updatedObject,
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el libro con ID = " + req.params.id,
            error: error.message
        });
    }
};

// Eliminar un libro por ID
exports.deleteLibroById = async (req, res) => {
    try {
        let libroId = req.params.id;
        let libro = await Libro.findByPk(libroId);

        if (!libro) {
            res.status(404).json({
                message: "No existe un libro con ID = " + libroId,
                error: "404",
            });
        } else {
            await libro.destroy();
            res.status(200).json({
                message: "Libro eliminado exitosamente con ID = " + libroId,
                libro: libro,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el libro con ID = " + req.params.id,
            error: error.message,
        });
    }
};

//----------------------------------------- Autor ------------------------------------------------
const Autor = db.Autor;

// Crear un nuevo autor
exports.createAutor = (req, res) => {
    let autor = {};

    try {
        // Construir objeto Autor desde el cuerpo de la solicitud
        autor.nombre = req.body.nombre;
        autor.apellido = req.body.apellido;
        autor.nacionalidad = req.body.nacionalidad;
        autor.fechaNacimiento = req.body.fechaNacimiento;

        // Guardar en la base de datos
        Autor.create(autor).then(result => {
            res.status(200).json({
                message: "Autor creado exitosamente con ID = " + result.id,
                autor: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

// Obtener todos los autores
exports.retrieveAllAutores = (req, res) => {
    Autor.findAll()
        .then(autores => {
            res.status(200).json({
                message: "¡Autores obtenidos exitosamente!",
                autores: autores
            });
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

// Obtener un autor por ID
exports.getAutorById = (req, res) => {
    let autorId = req.params.id;

    Autor.findByPk(autorId)
        .then(autor => {
            if (autor) {
                res.status(200).json({
                    message: "Autor obtenido exitosamente con ID = " + autorId,
                    autor: autor
                });
            } else {
                res.status(404).json({
                    message: "Autor no encontrado con ID = " + autorId,
                    error: "404"
                });
            }
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

// Actualizar un autor por ID
exports.updateAutorById = async (req, res) => {
    try {
        let autorId = req.params.id;
        let autor = await Autor.findByPk(autorId);

        if (!autor) {
            res.status(404).json({
                message: "Autor no encontrado para actualizar con ID = " + autorId,
                autor: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                nacionalidad: req.body.nacionalidad,
                fechaNacimiento: req.body.fechaNacimiento
            };

            let result = await Autor.update(updatedObject, {
                returning: true,
                where: { id: autorId }
            });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el autor con ID = " + req.params.id,
                    error: "No se puede actualizar",
                });
            } else {
                res.status(200).json({
                    message: "Autor actualizado exitosamente con ID = " + autorId,
                    autor: updatedObject,
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el autor con ID = " + req.params.id,
            error: error.message
        });
    }
};

// Eliminar un autor por ID
exports.deleteAutorById = async (req, res) => {
    try {
        let autorId = req.params.id;
        let autor = await Autor.findByPk(autorId);

        if (!autor) {
            res.status(404).json({
                message: "No existe un autor con ID = " + autorId,
                error: "404",
            });
        } else {
            await autor.destroy();
            res.status(200).json({
                message: "Autor eliminado exitosamente con ID = " + autorId,
                autor: autor,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el autor con ID = " + req.params.id,
            error: error.message,
        });
    }
};
