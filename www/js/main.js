$(document).on('click', 'a.pop', function(e) {

let href = $(this).attr('href');
history.pushState(null,null, href);

changePage();

e.preventDefault();


});

function changePage() {

let url = location.pathname;
if(url == '/') {
  
}

}