from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def home():
    
    return render_template('index.html')

@app.route('/grades')
def grades():
    
    return render_template('grades.html')


@app.route('/courses')
def courses():
    
    return render_template('courses.html')

@app.route('/login')
def login():
    
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)