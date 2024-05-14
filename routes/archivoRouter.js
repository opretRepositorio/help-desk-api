const express = require('express');
const archivo_controller = require('../controllers/archivoController');
const archivo_router = express.Router();
var multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname)
      global.__fileuploadedpath = global.__basedir + '\\uploads\\' + Date.now() + "-" + file.originalname
    },
});

const upload = multer({storage: storage})

// Router obtiene archivo por id con POST
archivo_router.route("/get_archivo/by_id").post(archivo_controller.GetArchivoById);

// Router obtiene archivo por id_ticket con POST
archivo_router.route("/get_archivo/by_id_ticket").post(archivo_controller.GetArchivoByIdTicket);

// Router obtiene archivo por id_respuesta con POST
archivo_router.route("/get_archivo/by_id_respuesta").post(archivo_controller.GetArchivoByIdRespuesta);

// Router obtiene archivo por id_mensaje con POST
archivo_router.route("/get_archivo/by_id_mensaje").post(archivo_controller.GetArchivoByIdMensaje);

// Router introduce archivo con id_ticket o id_respuesta o id_mensaje con POST
archivo_router.route("/set_archivo").post(upload.single('_archivo'), archivo_controller.SetArchivo);

// module para exportar user_router, acceso publico a otros modulos 
module.exports = archivo_router;
