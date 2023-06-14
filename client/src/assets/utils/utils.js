export const tipos = (type, array) => {
  if (array.length && type) return array.filter((p) => p.tipos.includes(type));
  else return [];
};

export const sortOrder = (order, array) => {
  let nombres = array.map((e) => e.name);
  let fuerza = array.map((e) => e.fuerza);

  const sortPorNombre = (array, getter, order = "asc") => {
    array.sort((a, b) => {
      const first = getter(a);
      const second = getter(b);
      const compare = first.localeCompare(second);
      return order === "asc" ? compare : -compare;
    });
    return array;
  };

  switch (order) {
    case "a-z":
      return sortPorNombre(nombres, (nombres) => nombres.name);
    case "z-a":
      return sortPorNombre(nombres, (nombres) => nombres.name).reverse();
    case "fuerza+":
      return fuerza.sort((a, b) => b - a);
    case "fuerza-":
      return fuerza.sort((a, b) => a - b);
    default:
      return array;
  }
};
/* 
export const tipos = (type, array) => {
  if (array.length) return array.filter((p) => p.type.includes(type));
  return [];
};

export const ordered = (order, array) => {
  let names = array.map((o) => o.name);
  let fuerza = array.map((o) => o.fuerza);
  let orde = [];

  switch (order) {
    case "a-z":
      names = names.sort();
      names.forEach((p) => {
        array.forEach((po) => {
          if (p === po.name) orde.push(po);
        });
      });
      return orde;
    case "z-a":
      names = names.sort().reverse();
      names.forEach((p) => {
        array.forEach((po) => {
          if (p === po.name) orde.push(po);
        });
      });
      return orde;
    case "fuerza+":
      fuerza = fuerza.sort((a, b) => b - a);
      fuerza.forEach((f) => {
        array.forEach((p) => {
          if (p.fuerza === f) orde.push(p);
        });
      });
      orde = orde.filter((e, i) => orde.indexOf(e) === i);
      return orde;
    case "fuerza-":
      fuerza = fuerza.sort((a, b) => a - b);
      fuerza.forEach((f) => {
        array.forEach((p) => {
          if (p.fuerza === f) orde.push(p);
        });
      });
      orde = orde.filter((e, i) => orde.indexOf(e) === i);
      return orde;
    default:
      return array;
  }
};
 */
