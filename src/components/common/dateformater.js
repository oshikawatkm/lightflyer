

const dateformater = date => {
  let month = date.getMonth()  
  let day = date.getDate()
  let formatted = month+"/"+day;
  return formatted;
};
export default dateformater;