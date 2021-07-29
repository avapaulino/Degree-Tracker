fetch('./static/js/courses.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var modal = document.getElementById(modal_info);

    for (var i = 0; i < data.length; i++) {
        var info = "\t\t\t\t\t\t\t\t\t\t<!-- " + data[i].Tag + " " + data[i].Code + " -->\n";
        info += "\t\t\t\t\t\t\t\t\t\t<div class=\"modal fade\" id=\""+ data[i].id + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n";
        info += "\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-content\">\n";
        info += "\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">" + data[i].name + "\"</h5>\n";
        info += "\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n";
        info += "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal_body\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Code: " + data[i].Tag + " " + data[i].Code + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Term: " + data[i].Term + " " + data[i].Year + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Category: " + data[i].Category + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Category: " + data[i].Grade + "</p>\n\n";
        modal.innerHTML += info;
        
    }
}