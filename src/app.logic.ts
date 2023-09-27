import fs from 'fs';
import path from 'path';

// const tabla = (num: number) => {
//    let tabla: string = '';
    // for (let i = 1; i < 10; i++) {
    //     tabla += `          
    //     ${num} * ${i} = ${ num * i} \n`
    // }
//     return tabla;
// }

// const data = `
    // =====================
    //      tabla del 5               
    // =====================

//     ${ tabla(5) }

// `;
// const carpetaRuta = path.join(__dirname, '../outputs');

// if (!fs.existsSync(carpetaRuta)) {
//     // Si no existe, crea la carpeta
//     fs.mkdir(carpetaRuta, (error) => {
//       if (error) {
//         console.error('Error al crear la carpeta:', error);
//       } else {
//         console.log('Carpeta creada exitosamente.');
//       }
//     });
// } else {
// console.log('La carpeta ya existe.');
// }

// fs.writeFile(`${carpetaRuta}/prueba.txt`, data, (err) => {
//     if (err) throw err;
//     else console.log('Archivo creado');
// })





export const genMulti = (base: number, limit: number = 10): string => {
    const headerMessage: string = `
    =====================
      tabla del ${base}               
    =====================\n
    `;

    let outputMessage: string = '';

    for (let i = 1; i <= limit; i++) {
        outputMessage += `${base} * ${i} = ${ base * i} \n`
    }

    return headerMessage + outputMessage;
}



