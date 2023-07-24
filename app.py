from flask import Flask, render_template, redirect
import numpy as np
import pandas as pd
from sqlalchemy import create_engine, text
import json

# Create an instance of Flask
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///data/wildfires.sqlite")

# Route to render index.html template using data from Mongo
@app.route("/")
def home():
    # Return template and data
    return render_template("index.html")

@app.route("/about_us")
def about_us():
    # Return template and data
    return render_template("about_us.html")

@app.route("/plots")
def plots():
    # Return template and data
    return render_template("plots.html")

##########################################################################

@app.route("/api/v1.0/<min_size>/<max_size>")
def wildfire_start_end(min_siz, max_size):
    """Get stations"""
    query = text(f"""
                SELECT
                    *
                FROM
                    wildfires
                WHERE
                    fire_size >= {min_siz}
                    AND fire_size <= {max_size};
            """)

    df = pd.read_sql(query, engine)

    data = json.loads(df.to_json(orient="records"))

    return {"raw_data": data}

#############################################################

@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, public, max-age=0"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    return r

#main
if __name__ == "__main__":
    app.run(debug=True)
