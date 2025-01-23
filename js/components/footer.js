export default function footer(){

    let footer = document.createElement('footer')
  
    let footerText = document.createElement('h2')
    footerText.innerText = 'Systema BR'
  
    footer.appendChild(footerText)
  
    return footer
  }

