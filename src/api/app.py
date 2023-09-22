from crypt import methods
import email
from flask import Flask, render_template, url_for, request

app = Flask(__name__)

@app.route("/")
@app.route("/index.html")
def index():
    return render_template("index.html")

@app.route("/sobre.html")
def sobre():
    return render_template("sobre.html")

@app.route("/serviços.html")
def serviços():
    return render_template("serviços.html")

@app.route("/especialidades.html")
def especialidades():
    return render_template("especialidades.html")

@app.route("/trabalhos.html")
def trabalhos():
    return render_template("trabalhos.html")

@app.route("/contato.html", methods=['GET'])
def contato():
    nome = request.args.get('nome')
    sobrenome = request.args.get('sobrenome')
    mail =  request.args.get('mail')
    msg = request.args.get('msg')
    return render_template("contato.html")

@app.route("/fotos.html")
def fotos():
    return render_template("fotos.html")


if __name__ == "__main__":
    app.run(debug=True)