export const GetStorage = (key) => {
    let pelis = JSON.parse(localStorage.getItem(key));
    return pelis;
  };