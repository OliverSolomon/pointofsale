from flask import Flask, render_template
from productsTable import tableContentSales

app = Flask(__name__)


@app.route('/')
@app.route('/login')
def logIn():
	return render_template('index.html')

@app.route('/dashboard')
@app.route('/home')
def dashboard():
	return render_template('dashboard.htm')

@app.route('/add')
@app.route('/store')
def store():
	return render_template('store.htm', h3 = "Store")

@app.route('/sales')
def sales():
	return render_template('sales.htm', h3 = "Sales", table = tableContentSales)

@app.route('/products')
def products():
	return render_template('products.htm', h3 = "Products", table = tableContentSales)

@app.route('/profits')
def profits():
	return render_template('profits.htm', h3 = "Profits", table = tableContentSales)

if __name__ == "__main__":
	app.run( debug = True)
