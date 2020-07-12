
const dateformater = date => {
  let month = date.getMonth()  
  let day = date.getDate()
  let time = date.toLocaleTimeString()
  let formatted = month+"/"+day+" "+time;
  return formatted;
};
export default dateformater;