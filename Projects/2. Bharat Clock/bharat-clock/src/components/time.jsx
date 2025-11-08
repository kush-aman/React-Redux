function TimeAndDate(){
  let time = new Date();
  return <p class="time">This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}

export default TimeAndDate;