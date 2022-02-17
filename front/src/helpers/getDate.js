
const getDate = () => {
  const data = new Date();

  const day     = data.getDate();
  const month     = data.getMonth();
  const year    = data.getFullYear();

  return `${day}/${month}/${year}`;
}

export default getDate;
