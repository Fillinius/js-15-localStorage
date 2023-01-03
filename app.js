export default function getHiddenCooks() {
  const button = document.querySelector('.cookie-consent__button')
  button.addEventListener('click',(event)=>{
  const{target} = event
  //console.log(target);
    if(target){
      const divHidden = document.querySelector('.cookie-consent') 
      divHidden.classList.add('hide')

      const hide = 'clike'
  localStorage.setItem('number',hide)
  //console.log(localStorage.getItem('number'))
      
    }
  })
}













