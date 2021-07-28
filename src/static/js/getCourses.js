$.ajax({
    type: 'GET',
    async: false,
    url:'http://3.94.37.105:5000/grades/712744',
    crossDomain: 'true',
    dataType: 'json'
})
.done(function(data) { 
    //console.log(data.body);
    let json = JSON.parse(data.body);
    let course = json[0].Courses_taken;
    
    $.each(course, function(i) {
        if(course[i].Completed==true){
            var comp = "Yes";
        }
        else{
            var comp = "No";
        }
        $('#get_courses').append(
            $("<tr></tr>")
                .append($("<td></td>").text("" + course[i].Name + ""))
                .append($("<td></td>").text("" + course[i].Year + ""))
                .append($("<td></td>").text("" + course[i].Term + ""))
                .append($("<td></td>").text("" + course[i].Category + ""))
                .append($("<td></td>").text("" + comp + ""))
                .append($("<td></td>").text("" + course[i].Letter_Grade + ""))
        ); 
    });
})
.fail(function(){
    alert("error");
});