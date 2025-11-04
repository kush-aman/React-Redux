function Hello(){

  let myName = 'Aman';
  let number = 456;
  let fullName = () => {
    return 'Aman kushwaha'
  }

  return <h3>
    MessageNo:{number} I am your master {fullName()}
  </h3>
}

export default Hello;