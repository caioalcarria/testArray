export default function table (view){
    let table  = document.createElement('table')
    table.className = "table"
    table.id = "table"
    table.innerHTML =`
  
      <thead>
        <tr>
          <th scope="col">
            <input type="checkbox" id="selectAll">
          </th>
          <th scope="col">id</th>
          <th scope="col">nome</th>
          <th scope="col">idade</th>
          <th scope="col">sexo</th>
          <th scope="col">cidade</th>
        </tr>
        
      </thead>
  
  
    `
    
    
    
    let selectAllBtn = table.querySelector("#selectAll")
    selectAllBtn.addEventListener("change", (event)=>{
        let checkboxInput = document.querySelectorAll(".checkbox")
        if(event.target.checked){
          checkboxInput.forEach((elem)=>{
            elem.checked = true
            view.addSelectedList({id: elem.id, element: elem.parentNode.parentNode})
          })
        }
        else{
          checkboxInput.forEach((elem)=>{
            elem.checked = false
            view.removeSelectedList(elem.id)
          })
        }
    })
  
    let rows = document.createElement("tbody")
    rows.className = 'rows'
    table.appendChild(rows)

    let userHandle = view.getUserHandle()
    
    userHandle.forEach((user)=>{
      let tr = document.createElement("tr")
  
      let selectBox = document.createElement("td")
      let inputSelect = document.createElement("input")
      inputSelect.className = "checkbox"
      inputSelect.id = `${user.id}`
      inputSelect.type = "checkbox"
  
      inputSelect.addEventListener("change", (event) => {
        event.target.checked? view.addSelectedList({...user, element: event.target.parentNode.parentNode}) : view.removeSelectedList(event.target.id)
      })
      
      selectBox.appendChild(inputSelect)
      
      
      
      let id = document.createElement("td")
      id.innerText =  user.id
      let nome = document.createElement("td")
      nome.innerText =  user.nome
      let idade = document.createElement("td")
      idade.innerText =  user.idade
      let sexo = document.createElement("td")
      sexo.innerText =  user.sexo
      let cidade = document.createElement("td")
      cidade.innerText =  user.cidade
      
      tr.append(selectBox,id, nome, idade, sexo, cidade)
      rows.appendChild(tr)
    })

    return table
  }
  