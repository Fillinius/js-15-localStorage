export default function getHideOn (){
  const clik = window.localStorage.getItem('number')
  //console.log('clik:', clik );
  //console.log(clik!=false);
  if(clik){
    const divHidden = document.querySelector('.cookie-consent')
    divHidden.classList.add('hide')
  }
}

