from flask import Flask

import os

from dotenv import load_dotenv

load_dotenv()

DEBUG=True
PORT=os.environ.get("PORT")

app = Flask(__name__)

if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)
