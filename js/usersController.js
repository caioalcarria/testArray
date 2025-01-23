import modal from "./components/modal.js";

export function addUser(view, table){

    let modalId = "createModal"
    let modalTitle =  "Criar Usuário"
    let modalBody = `
     <form>

                  <div class="mb-3">
                    <label for="nameInput" class="form-label">Nome</label>
                    <input class="form-control" id="nameInput">
                  </div>

                  <div class="mb-3">
                    <label for="ageInput" class="form-label">Idade</label>
                    <input class="form-control" id="ageInput">
                  </div>

                  <div class="mb-3">
                    <label for="genderInput" class="form-label">Sexo</label>
                    <select class="form-select" id="genderInput">
                      <option selected>Selecione seu sexo</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="cityInput" class="form-label">Cidade</label>
                    <input class="form-control" id="cityInput">
                  </div>
                  
     </form>
    `
    let modalFooter = `

              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" id="createBtn" class="btn btn-primary btn-createUser" data-bs-dismiss="modal">Criar Usuário</button>

    `
    let modalContent = modal(modalId, modalTitle, modalBody, modalFooter)
    view.add(modalContent)

    let createBtn = view.getDOMElement("#createBtn")
    createBtn.addEventListener("click", (e)=>{
        let [name, age, gender, city] = view.getDOMElementsValues(["#nameInput","#ageInput", "#genderInput", "#cityInput"])

        view.addUserData({nome: name, idade: age, sexo: gender, cidade: city})
        view.updateUserHandle(view.getUserData())

        view.rerunElement("#table", table(view))

    })

}

export function delUser(view, table){
    view.getDOMElement("#delBtn").addEventListener("click",(e)=>{
        view.getDOMElement("#modalTitle").innerText = `Tem certeza que seja apagar ${view.getSelectedList().length} itens?`
    })
    let modalId = "deleteModal"
    let modalTitle = "apagar usuários"
    let modalBody = `
    <p id="modalTitle">Tem certeza que seja apagar ${view.getSelectedList().length} itens?</p>
    `
    let modalFooter = `

      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
      <button type="button" id="deleteBtn" class="btn btn-danger btn-deleteUser" data-bs-dismiss="modal">Apagar</button>

`
    let modalContent = modal(modalId, modalTitle, modalBody, modalFooter)
    view.add(modalContent)

    let deleteBtn = view.getDOMElement("#deleteBtn")
    deleteBtn.addEventListener("click", (e)=>{
        let userData = view.getUserData()
        let selectedList = view.getSelectedList()
        selectedList.forEach((elem)=>{
            userData = userData.filter((user)=>user.id!=elem.id)
        })
        view.updateUserData(userData)
        view.updateUserHandle(view.getUserData())
        view.clearSelectedList()

        view.rerunElement("#table", table(view))
    })

}





export function editUser(view, table){
    view.getDOMElement("#editBtn").addEventListener("click",(e)=>{
        view.getDOMElement("#nameEditInput").value = view.getSelectedList()[0].nome
        view.getDOMElement("#nameEditInput").setAttribute("placeholder",  view.getSelectedList()[0].nome)

        view.getDOMElement("#ageEditInput").value = view.getSelectedList()[0].idade
        view.getDOMElement("#ageEditInput").setAttribute("placeholder",  view.getSelectedList()[0].idade)

        view.getDOMElement("#genderEditInput").value = view.getSelectedList()[0].sexo
        view.getDOMElement("#genderEditInput").setAttribute("placeholder",  view.getSelectedList()[0].sexo)

        view.getDOMElement("#cityEditInput").value = view.getSelectedList()[0].cidade
        view.getDOMElement("#cityEditInput").setAttribute("placeholder",  view.getSelectedList()[0].cidade)
    })

    let modalId = "editModal"
    let modalTitle =  "Editar Usuário"
    let modalBody = `
     <form>

                  <div class="mb-3">
                    <label for="nameEditInput" class="form-label">Nome</label>
                    <input class="form-control" id="nameEditInput">
                  </div>

                  <div class="mb-3">
                    <label for="ageEditInput" class="form-label">Idade</label>
                    <input class="form-control" id="ageEditInput">
                  </div>

                  <div class="mb-3">
                    <label for="genderEditInput" class="form-label">Sexo</label>
                    <select class="form-select" id="genderEditInput">
                      <option selected>Selecione seu sexo</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="cityEditInput" class="form-label">Cidade</label>
                    <input class="form-control" id="cityEditInput">
                  </div>
                  
     </form>
    `
    let modalFooter = `

              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" id="editSaveBtn" class="btn btn-primary btn-editSaveBtn" data-bs-dismiss="modal">Atualizar</button>

    `
    let modalContent = modal(modalId, modalTitle, modalBody, modalFooter)
    view.add(modalContent)

    let editBtn = view.getDOMElement("#editSaveBtn")
    editBtn.addEventListener("click", (e)=>{
        let [name, age, gender, city] = view.getDOMElementsValues(["#nameEditInput","#ageEditInput", "#genderEditInput", "#cityEditInput"])

        let userData = view.getUserData()
        userData = userData.map((elem)=>{
            if(elem.id == view.getSelectedList()[0].id){
                elem.nome = name
                elem.idade = age
                elem.sexo = gender
                elem.cidade = city
            }
            return elem
        })

        view.updateUserData(userData)
        view.updateUserHandle(view.getUserData())

        view.clearSelectedList()

        view.rerunElement("#table", table(view))

    })

}