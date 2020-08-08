// SIDEMENU

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'right',
        inDuration: 1000, 
        onOpenStart: () => {
            alert('Open start')
        }
    });
  });

// NAVBAR

document.addEventListener('DOMContentLoaded', function(){
    var elemensDropdown = document.querySelectorAll(".dropdown-trigger");
    var instances = M.Dropdown.init(elemensDropdown);
});
