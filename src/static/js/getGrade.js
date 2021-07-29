$.ajax({
    type: 'GET',
    async: false,
    url:'http://3.94.37.105:5000/grades/712744',
    crossDomain: 'true',
    dataType: 'json'
})
.done(function(data) { 
    // console.log(data.body);
    
    // data.body is returning actual data as string
    // JSON.parse turn String to JSON 
    let json = JSON.parse(data.body);
    // In grade page, only data in Courses_taken will be used
    let course = json[0].Courses_taken;


    if (console && console.log) {
        console.log(json[0]);
        console.log(json[0].Courses_taken);
        console.log($('#actualCourse')[0]);
        console.log(course[0].Tag);
    }

    console.log(json[0].Name);
    $('#name').text(json[0].Name);

    $.each(course, function(i) {
        if (course[i].Year == null){
            year = course[i].NewValue;
        }
        else{
            year = course[i].Year;
        }
        // appending body to #actualCourse
        $('#actualCourse').append(
            $("<tr></tr>")
            // lines to add data in to table on UI
                .append($("<td></td>").text("" + course[i].Tag + " " + course[i].Number + ""))
                .append($("<td></td>").text("" + course[i].Name + ""))
                .append($("<td></td>").text("" + course[i].CRN + ""))
                .append($("<td></td>").text("" + course[i].Professor + ""))
                .append($("<td></td>").text("" + year + " " + course[i].Term + ""))
                .append($("<td></td>").text("" + course[i].GPA + ""))
                .append($("<td></td>").text("" + course[i].Letter_Grade + ""))
        ); 
    });
})
.fail(function(){
    alert("error");
});