 export default class View {
    constructor(header, footer) {
      this.body = document.body;
      this.section = document.createElement("section")
      this.body.appendChild(this.section)
      this.body.appendChild(header);
      this.body.appendChild(footer);
      this.selectedList = []
    }
    add(elem){
      this.section.appendChild(elem)
    }
    delete(elem){
        let deleteElem =  document.querySelector(elem)
        if(deleteElem){
            deleteElem.remove()
        }
    }




    getUserData(){
        return JSON.parse(localStorage.getItem("usersData"))
    }
    getUserHandle(){
        return JSON.parse(localStorage.getItem("userHandle"))
    }
    updateUserHandle(data){
        localStorage.removeItem("userHandle")
        localStorage.setItem("userHandle", JSON.stringify(data))
    }
    updateUserData(data){
        localStorage.removeItem("usersData")
        localStorage.setItem("usersData", JSON.stringify(data))
    }
    addUserData(data){
        let userData = this.getUserData()
        localStorage.removeItem("usersData")

        data.id = userData.reduce((contador,user) => user.id > contador ? user.id : contador, userData[0].id)+1

        localStorage.setItem("usersData", JSON.stringify([...userData, data]))
    }



    rerunElement(elem, createFunction){
        this.delete(elem)
        this.add(createFunction)
    }





    getSelectedList(){
        return this.selectedList
    }
    addSelectedList(data){
        this.selectedList.push(data)
    }
    removeSelectedList(id){
        this.selectedList = this.selectedList.filter(item=>item.id != id)
    }
    clearSelectedList(){
        this.selectedList = []
    }




    getDOMElement(elem){
        return document.querySelector(elem)
    }
    getDOMElements(list){
        list = list.map((elem)=>{
            return document.querySelector(elem)
        })
        return list
    }
    getDOMElementsValues(list){
        list = list.map((elem)=>{
            return document.querySelector(elem).value
        })
        return list
    }

  }
  