import usuarios from "./service.js";
import View from "./view.js";

import header from "./components/header.js";
import footer from "./components/footer.js";
import table from "./components/table.js";
import tableHeader from "./components/tableHeader.js";
import {addUser, delUser, editUser} from "./usersController.js";
import toast from "./components/toast.js";




if (!localStorage.getItem("usersData")){
    localStorage.setItem("usersData", JSON.stringify(usuarios))
  }

localStorage.setItem("userHandle", localStorage.getItem("usersData"))


let view = new View(header(), footer())

view.add(tableHeader(view, table))
view.add(table(view))

addUser(view, table)

delUser(view, table)

editUser(view, table)


