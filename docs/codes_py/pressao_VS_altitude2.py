from numpy import arange, pi, sin
from bokeh.models.annotations.labels import Label
from bokeh.plotting import figure, show, output_file, ColumnDataSource
import bokeh
import os
import numpy as np
name_script = os.path.basename(__file__)

print(bokeh.__version__)

Hgmm = np.arange(550, 760)

# https://en.wikipedia.org/wiki/Pressure_altitude
alt = 145366.45*(1 - (1.33322*Hgmm/1013.25)**0.190284)
TOOLS = "box_select,hover,reset"

TOOLTIPS= [("altitude", "@alt{0000} m"),
("Hg", "@Hgmm{000} mmm"),
]

source = ColumnDataSource(data=dict(
    alt=alt,
    Hgmm=Hgmm,
))

p = figure(height=350, title=r"Relação pressão atmosférica e altitude",
           tools=TOOLS, tooltips=TOOLTIPS)
p.circle(x='Hgmm', y='alt', source=source, alpha=0.6, size=3)

label = Label(
    text=r"$$ Altitude = 145366,45\left(1 - \frac{1,33322\text{Hg}}{1013,25}\right)^{0,190284}$ \$$",
    x=150, y=200,
    x_units="screen", y_units="screen",
)
p.add_layout(label)


p.yaxis.axis_label = r"Pressão atmosférica (mm de Hg)"
p.xaxis.axis_label = r"Altitude (m)"

output_file(f"/home/alexandre/Dropbox/topo/geomatica/docs/_static/name_file_{name_script}.html")

show(p)