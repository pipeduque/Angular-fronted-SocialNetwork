function showMessage(message) {
    document.querySelector("#messageText").innerHTML = message;
    let elem = document.querySelector('#messageModal');
    var instance = M.Modal.init(elem, {});
    instance.open();
}