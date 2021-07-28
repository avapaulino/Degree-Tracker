function apiConnect() {
    $(document).ready(function () {
        $.ajax({
            type: 'GET',
            async: false,
            url:'http://3.94.37.105:5000/grades/712744',
            crossDomain: 'true',
            dataType: 'json'
        })
    })
}

function getCourseData(event) {
    var file = event.target.files[0];
    if (file) {
        var fr = new FileReader();
        fr.onload = function (ev) {
            var data = ev.target.result;
            var courses = JSON.parse(data);

            courses.forEach(function (course) {
                document.getElementById('courseName').innerHTML += course.tag + " " + course.number;
                document.getElementById('term').innerHTML += course.term + " " + course.year;
                document.getElementById('category').innerHTML += course.category;
                if (course.completed == "TRUE") {
                    document.getElementById('completed').innerHTML += "Yes";
                }
                else {
                    document.getElementById("completed").innerHTML += "No";
                }
                document.getElementById('grade').innerHTML += course.grade;
                var info = {
                    TableName: "Courses",
                    Item: {
                        "name": course.name,
                        "number": course.number,
                        "crn": course.crn,
                        "tag": course.tag,
                        "category": course.category,
                        "completed": course.completed,
                        "term": course.term,
                        "year": course.year,
                        "grade": course.grade
                    }
                };
            })
        }
    }
}

function getRequirements(event) {
    var file = event.target.files[0];
    if (file) {
        var fr = new FileReader();
        fr.onload = function (ev) {
            var data = ev.target.result;
            var courses = JSON.parse(data);

            courses.forEach(function (course) {
                document.getElementById('courseName').innerHTML += course.tag + " " + course.number;
                document.getElementById('term').innerHTML += course.term + " " + course.year;
                document.getElementById('category').innerHTML += course.category;
                if (course.completed == "TRUE") {
                    document.getElementById('completed').innerHTML += "Yes";
                }
                else {
                    document.getElementById("completed").innerHTML += "No";
                }
                document.getElementById('grade').innerHTML += course.grade;
                var info = {
                    TableName: "Courses",
                    Item: {
                        "name": course.name,
                        "number": course.number,
                        "crn": course.crn,
                        "tag": course.tag,
                        "category": course.category,
                        "completed": course.completed,
                        "term": course.term,
                        "year": course.year,
                        "grade": course.grade
                    }
                };
            })
        }
    }
}