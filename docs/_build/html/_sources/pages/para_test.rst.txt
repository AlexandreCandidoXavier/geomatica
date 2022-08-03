.. raw:: html

    <style> .exem {color:blue; font-weight: bold} </style>

.. role:: exem

.. raw:: html

    <style> .solucao {font-weight: bold} </style>

.. role:: solucao

.. raw:: html

    <style> .blue {color:blue} </style>

.. role:: blue

.. raw:: html

    <style> .degree2sex {border:2px; border-style:solid;  border-radius: 5px; border-color:gray; padding: .1em;} </style>

.. role:: degree2sex

.. _RST test:

Capitulo 1: teste
**********************************

N

.. raw:: html

    <div style="position: center; padding-bottom=75%; height:0; overflow: hidden; max-width: 100%; height:auto">
        <iframe class="center-block" width="854" height="480" src="https://www.youtube.com/embed/50kc3F0aE6Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

.. bokeh-plot:: codes_py/plotting_scatter_square.py
   :source-position: none

.. raw:: html
   <html><head>
   <title>Bokeh Example</title>
   <meta charset="iso-8859-1">
   <link rel="icon" type="image/x-icon" href="./favicon.png">
   <script type="text/javascript" src="https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js"></script>
   <script type="text/javascript" src="https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js"></script>
   <script type="text/javascript" src="https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js"></script>
   <script type="text/javascript" src="https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js"></script>
   <script type="text/javascript" src="https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"></script>

   <script type="text/javascript">
        Bokeh.set_log_level("info");
   </script>
   <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />

   <script defer src="https://pyscript.net/alpha/pyscript.js"></script>

   </head>
   <body>
   <py-env>
   - bokeh
   - numpy
   </py-env>
   <h1>Bokeh Example</h1>
   <div id="myplot"></div>

   <py-script id="main">
   import json
   import pyodide

   from js import Bokeh, console, JSON

   from bokeh.embed import json_item
   from bokeh.plotting import figure
   from bokeh.resources import CDN

   # create a new plot with default tools, using figure
   p = figure(plot_width=400, plot_height=400)

   # add a circle renderer with x and y coordinates, size, color, and alpha
   p.circle([1, 2, 3, 4, 5], [6, 7, 2, 4, 5], size=15, line_color="navy", fill_color="orange", fill_alpha=0.5)
   p_json = json.dumps(json_item(p, "myplot"))

   Bokeh.embed.embed_item(JSON.parse(p_json))
   </py-script>

   </body>
   </html>
