$.ajax({
    type: 'GET',
    async: false,
    url:'https://ivn16pu4qd.execute-api.us-east-1.amazonaws.com/default/get-student?Banner_id=712744',
    headers:{
        'x-api-key': 'WIdtgv8hE75mdwKNnPIByt1HbE3T01l25NCQtaWf'
    },
    crossDomain: 'true',
    dataType: 'json'
})
.done(function(data) {
    let json = JSON.parse(data.body);
    let course = json.Item.Courses_taken;
    if (console && console.log) {
        console.log(json);
        console.log(json.Item.Courses_taken);
        console.log($('#actualCourse')[0]);
    }
    $.each(course, function(i) {
        $('#actualCourse').append(
            $("<tr></tr>")
                .append($("<td></td>").text("" + course[i].Tag + " " + course[i].Number + ""))
                .append($("<td></td>").text("" + course[i].Name + ""))
                .append($("<td></td>").text("" + course[i].CRN + ""))
                .append($("<td></td>").text("" + course[i].Professor + ""))
                .append($("<td></td>").text("" + course[i].Year + " " + course[i].Term + ""))
                .append($("<td></td>").text("" + course[i].GPA + ""))
                .append($("<td></td>").text("" + course[i].Letter_Grade + ""))
        ); 
    });
})
.fail(function(){
    alert("error");
});