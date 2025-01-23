export default function toast(id, msgn, type_btn){
    let toast = `
    <div id=${id} class="toast align-items-center text-bg-${type_btn} border-0 toastBox" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body">
            ${msgn}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
    `
    // Criar elemento temporário para converter string em DOM
    const temp = document.createElement('div');
    temp.innerHTML = toast;
    const toastElement = temp.firstElementChild;
    
    // Adicionar o toast ao documento
    document.body.appendChild(toastElement);

    return toastElement
}