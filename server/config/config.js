

// =============================
//   Puerto
// =============================

process.env.PORT = process.env.PORT || 3000;


// =============================
//   Entorno
// =============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =============================
//   Base de datos
// =============================
let urlDB;

if (process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe'
}else{
    // urlDB= 'mongodb+srv://bleda:vYlsoBsUDAZP557r@cluster0-7y2nu.mongodb.net/cafe'
    urlDB= process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// *****  Conexión local: ******
// mongodb://localhost:27017/cafe


// **** Conexión remota: ****
// mongodb+srv://bleda:vYlsoBsUDAZP557r@cluster0-7y2nu.mongodb.net/cafe