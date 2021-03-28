const ordenarArreglo = (arr=undefined) => {
  if (arr === undefined) {
    return console.warn("No ingresaste un arreglo de números");
  }
  if (!(arr instanceof Array)) {
    return console.error("El valor que ingresaste no es un arreglo");
  }
  if (!arr.length) {
    return console.error("El arreglo esta vacío");
  }
  for (let num of arr) {
    if (typeof num !== "number") {
      return console.error(`El valor "${num}" ingresado, NO es un número`);
    }
  }
  return console.info({
    arr,
    asc: arr.map(el => el).sort(),
    desc: arr.map(el => el).sort().reverse()
  });
}

ordenarArreglo();
ordenarArreglo([1, 3, 2])
