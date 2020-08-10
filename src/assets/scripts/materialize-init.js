// SIDEMENU


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'right',
        inDuration: 500
    });
});

// NAVBAR

document.addEventListener('DOMContentLoaded', function() {
    var elemensDropdown = document.querySelectorAll(".dropdown-trigger");
    var instances = M.Dropdown.init(elemensDropdown);
});


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.timepicker');
    var instances = M.Timepicker.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});