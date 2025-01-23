export default function tableHeader (view, table){
    let tableHeader = document.createElement('div')
    tableHeader.className = "tableHeader"

    tableHeader.innerHTML = `
        <div class="input-group searchForm">
            <input class="form-control" type="text">
            <button class="btn btn-outline-secondary">
                <i class="bi bi-search"></i>
            </button>
        </div>
        <div class="btn-group">
            <button class="btn addBtn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#createModal">add</button>
            <button id="editBtn" class="btn updBtn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editModal">update</button>
            <button id="delBtn" class="btn delBtn btn-danger"  data-bs-toggle="modal" data-bs-target="#deleteModal">delete</button>
        </div>
    `

    tableHeader.querySelector('input').addEventListener('input', (event) => {
        let value = event.target.value

        let usersData = view.getUserData()

        usersData = usersData.filter((user) => {
            return user.nome.toLowerCase().includes(value.toLowerCase())
        })

        view.updateUserHandle(usersData)

        view.rerunElement("#table", table(view))

    })

    return tableHeader
  }