from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.get('/')
def index():
    return render_template("index.html", banana="maca")

@app.get("/teste")
def getTeste():
    return jsonify({"word":"banana"})