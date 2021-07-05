AWS.config.update({
    region: "us-west-2",
    endpoint: 'http://localhost:8000',
    accessKeyId: "fakeMyKeyId",
    secretAccessKey: "fakeSecretAccessKey"
});

function getCourseData(event){
    var file = event.target.files[0];
    if (file){
        var fr = new FileReader();
        fr.onload = function(ev){
            var data = ev.target.result;
            var courses = JSON.parse(data);

            courses.forEach(function (course){
                document.getElementById('courseName').innerHTML += course.tag +" "+ course.number;
                document.getElementById('term').innerHTML += course.term + " " + course.year;
                document.getElementById('category').innerHTML += course.category;
                if (course.completed == "TRUE"){
                    document.getElementById('completed').innerHTML += "Yes";
                }
                else{
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

function getRequirements(event){
    var file = event.target.files[0];
    if (file){
        var fr = new FileReader();
        fr.onload = function(ev){
            var data = ev.target.result;
            var courses = JSON.parse(data);

            courses.forEach(function (course){
                document.getElementById('courseName').innerHTML += course.tag +" "+ course.number;
                document.getElementById('term').innerHTML += course.term + " " + course.year;
                document.getElementById('category').innerHTML += course.category;
                if (course.completed == "TRUE"){
                    document.getElementById('completed').innerHTML += "Yes";
                }
                else{
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