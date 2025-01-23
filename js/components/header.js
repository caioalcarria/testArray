export default function  header (){
    let header = document.createElement('header')
  
    let logo = document.createElement('img')
    logo.src="assets/SYSTEMA_Logo_Claim_RGB.svg"
    header.appendChild(logo)
  
    return header
  }
