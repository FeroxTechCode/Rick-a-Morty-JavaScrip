const calcularPromedio = (notas) => {
  if (notas.length === 0) return 0;
  const suma = notas.reduce(
    (acumulador, notaActual) => acumulador + notaActual,
    0,
  );
  return suma / notas.length;
};

const filtrarAprobados = (alumnos) => {
  return alumnos.filter((alumno) => alumno.nota >= 6);
};

const formatearAlumnos = (alumnos) => {
  return alumnos.map(
    (alumno) => `Nombre: ${alumno.nombre} - Nota: ${alumno.nota}`,
  );
};

const buscarAlumno = (alumnos, nombreBuscado) => {
  return alumnos.find((alumno) => alumno.nombre === nombreBuscado);
};

const misNotas = [8, 7, 9, 10, 6];
const misAlumnos = [
  { nombre: "Ariel", nota: 9 },
  { nombre: "Patricia", nota: 5 },
  { nombre: "Marcos", nota: 7 },
  { nombre: "Lucía", nota: 4 },
];

console.log("--- Prueba (a): Promedio ---");
console.log("Promedio de notas:", calcularPromedio(misNotas));

console.log("\n--- Prueba (b): Filtrar Aprobados ---");
console.log("Aprobados:", filtrarAprobados(misAlumnos));

console.log("\n--- Prueba (c): Formatear Alumnos ---");
console.log(formatearAlumnos(misAlumnos));

console.log("\n--- Prueba (d): Buscar Alumno ---");
console.log(
  "Resultado de buscar a 'Ariel':",
  buscarAlumno(misAlumnos, "Ariel"),
);
console.log(
  "Resultado de buscar a 'Inexistente':",
  buscarAlumno(misAlumnos, "Juan"),
);
