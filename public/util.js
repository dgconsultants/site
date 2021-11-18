const parse = (el) => {
  return el
    .split("&")
    .reduce((acc, curr) => {
        const [k,v] = curr.split('=');
        acc[k] = v;
        return acc;
    }, {})
}