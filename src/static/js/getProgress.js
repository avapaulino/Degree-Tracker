$.ajax({
    type: 'GET',
    async: false,
    url: 'http://3.94.37.105:5000/get-student/712732',
    crossDomain: 'true',
    dataType: 'json'
})
    .done(function (data) {
        console.log(data.body);
        let progress = JSON.parse(data.body);
        let courseCategory = progress.course_category_completion;
        // if (console && console.log) {
        //     console.log($('#get_progress')[0]);
        // }
        console.log(progress);
        console.log(courseCategory);

        $('#degree_completion').append(
            $("<div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\"></div>").text("" + progress.degree_completion + "%")
        );
        $('#degree_completion_bar').append(
            $("<div class=\"progress-bar bg-info\" role=\"progressbar\"style=\"width:" + progress.degree_completion + "%\" aria-valuenow=" + progress.degree_completion + " aria-valuemin=\"0\"aria-valuemax=\"100\"></div>")
        );

        $('#pending_courses').append(
            $("<div class=\"h5 mb-0 font-weight-bold text-gray-800\"></div>").text("" + progress.pending_courses + "")
        );

        $('#completed_courses').append(
            $("<div class=\"h5 mb-0 font-weight-bold text-gray-800\"></div>").text("" + progress.completed_courses + "")
        );

        $('#get_progress').append(
            $("<h4 class=\"small font-weight-bold\"></h4>").text("Core CS 1000")
                .append($("<span class=\"float-right\"></span>").text("" + courseCategory["Corse CS 1000"] + "%")),
            $("<div class=\"progress mb-4\"></div>")
                .append("<div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: " + courseCategory["Corse CS 1000"] + "%\" aria-valuenow=" + courseCategory["Corse CS 1000"] + " aria-valuemin=\"0\" aria-valuemax=\"100\"></div>"),
            $("<h4 class=\"small font-weight-bold\"></h4>").text("Core CS 2000")
                .append($("<span class=\"float-right\"></span>").text("" + courseCategory["Corse CS 2000"] + "%")),
            $("<div class=\"progress mb-4\"></div>")
                .append("<div class=\"progress-bar bg-dark\" role=\"progressbar\" style=\"width: " + courseCategory["Corse CS 2000"] + "%\" aria-valuenow=" + courseCategory["Corse CS 2000"] + " aria-valuemin=\"0\" aria-valuemax=\"100\"></div>"),
            $("<h4 class=\"small font-weight-bold\"></h4>").text("Core CS 3000")
                .append($("<span class=\"float-right\"></span>").text("" + courseCategory["Corse CS 3000"] + "%")),
            $("<div class=\"progress mb-4\"></div>")
                .append("<div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: " + courseCategory["Corse CS 3000"] + "%\" aria-valuenow=" + courseCategory["Corse CS 3000"] + " aria-valuemin=\"0\" aria-valuemax=\"100\"></div>"),
            $("<h4 class=\"small font-weight-bold\"></h4>").text("CS Electives 1000+")
                .append($("<span class=\"float-right\"></span>").text("" + courseCategory["CS Electives 1000+"] + "%")),
            $("<div class=\"progress mb-4\"></div>")
                .append("<div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: " + courseCategory["CS Electives 1000+"] + "%\" aria-valuenow=" + courseCategory["CS Electives 1000+"] + " aria-valuemin=\"0\" aria-valuemax=\"100\"></div>"),
            $("<h4 class=\"small font-weight-bold\"></h4>").text("CS Electives 2000+")
                .append($("<span class=\"float-right\"></span>").text("" + courseCategory["CS Electives 2000+"] + "%")),
            $("<div class=\"progress mb-4\"></div>")
                .append("<div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: " + courseCategory["CS Electives 2000+"] + "%\" aria-valuenow=" + courseCategory["CS Electives 2000+"] + " aria-valuemin=\"0\" aria-valuemax=\"100\"></div>"),
            $("<h4 class=\"small font-weight-bold\"></h4>").text("CS Electives 3000+")
                .append($("<span class=\"float-right\"></span>").text("" + courseCategory["CS Electives 3000+"] + "%")),
            $("<div class=\"progress mb-4\"></div>")
                .append("<div class=\"progress-bar bg-secondary\" role=\"progressbar\" style=\"width: " + courseCategory["CS Electives 3000+"] + "%\" aria-valuenow=" + courseCategory["CS Electives 3000+"] + " aria-valuemin=\"0\" aria-valuemax=\"100\"></div>"),
            $("<h4 class=\"small font-weight-bold\"></h4>").text("Math")
                .append($("<span class=\"float-right\"></span>").text("" + courseCategory["Math"] + "%")),
            $("<div class=\"progress mb-4\"></div>")
                .append("<div class=\"progress-bar\" role=\"progressbar\" style=\"width: " + courseCategory["Math"] + "%\" aria-valuenow=" + courseCategory["Math"] + " aria-valuemin=\"0\" aria-valuemax=\"100\"></div>"),
            $("<h4 class=\"small font-weight-bold\"></h4>").text("Sciences")
                .append($("<span class=\"float-right\"></span>").text("" + courseCategory["Sciences"] + "%")),
            $("<div class=\"progress mb-4\"></div>")
                .append("<div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: " + courseCategory["Sciences"] + "%\" aria-valuenow=" + courseCategory["Sciences"] + " aria-valuemin=\"0\" aria-valuemax=\"100\"></div>")
        );
        // $.each(course, function(i) {
        //     if(course[i].Completed==true){
        //         var comp = "Yes";
        //     }
        //     else{
        //         var comp = "No";
        //     }
        //     $('#get_courses').append(
        //         $("<tr></tr>")
        //             .append($("<td></td>").text("" + course[i].Name + ""))
        //             .append($("<td></td>").text("" + course[i].Year + ""))
        //             .append($("<td></td>").text("" + course[i].Term + ""))
        //             .append($("<td></td>").text("" + course[i].Category + ""))
        //             .append($("<td></td>").text("" + comp + ""))
        //             .append($("<td></td>").text("" + course[i].Letter_Grade + ""))
        //     ); 
        // });
    })
    .fail(function () {
        alert("error");
    });