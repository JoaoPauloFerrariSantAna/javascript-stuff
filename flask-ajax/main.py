from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.get('/')
def index():
    return render_template("index.html")

@app.get("/teste")
def getTeste():
    req = request.args.get("fruta")

    print(req)

    return jsonify({"returnedAction": req})