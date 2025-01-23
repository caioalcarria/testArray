export default function modal (modalId, modalTitle, modalBody, modalFooter){


    let modal = document.createElement("div")

    modal.classList.add("modal", "fade")
    modal.id = modalId
    modal.setAttribute("tabindex", "-1")
    modal.setAttribute("aria-hidden", "true" )
  
    modal.innerHTML = `


          <div class="modal-dialog">

          
          <div class="modal-content">

              <div class="modal-header">
              <h1 class="modal-title fs-5" id="modalLabel">${modalTitle}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>


              <div class="modal-body">


                ${modalBody}


              </div>


              <div class="modal-footer">
                ${modalFooter}
              </div>




            </div>
  
  
          </div>
    

    `
    return modal
  }