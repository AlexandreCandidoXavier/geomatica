from bokeh.models.annotations.labels import Label
from bokeh.plotting import figure, show, output_file, ColumnDataSource
import bokeh
import os
import numpy as np

name_script = os.path.basename(__file__)

print(bokeh.__version__)

Hgmm = np.arange(150, 760, 5)
# Hgmm = np.arange(20, 100)
# https://en.wikipedia.org/wiki/Pressure_altitude
alt = 145366.45 * 0.3048 * (1 - (1.33322 * Hgmm / 1013.25) ** 0.190284)
alt = 44307.69 * (1 - (1.316e-3 * Hgmm) ** 0.190284)
# alt = 145366.45 * 0.3048 * (1 - (1/0.1 * Hgmm / 1013.25) ** 0.190284) Kpa
TOOLS = "box_select,hover,reset"

TOOLTIPS = [("altitude", "@alt{0000} m"),
            ("mm de Hg", "@Hgmm{000}"),
            ]

source = ColumnDataSource(
    data=dict(alt=alt, Hgmm=Hgmm,
              )
)

p = figure(height=350, title=r"Relação pressão atmosférica e altitude",
           tools=TOOLS, tooltips=TOOLTIPS, sizing_mode='scale_width')
# p.circle(x='Hgmm', y='alt', source=source, alpha=0.6, size=3)
p.line(x='Hgmm', y='alt', source=source, alpha=0.6, line_width=5)

label = Label(
    text=r"$$ Altitude = 44307,69\left(1 - 1,316\cdot10^{-3}\cdot\text{Hg}\right)^{0,190284} $$",
    x=300, y=10000,
    # x_units="screen", y_units="screen",
)
p.add_layout(label)

p.xaxis.axis_label = r"Pressão atmosférica (mm de Hg)"
p.yaxis.axis_label = r"Altitude (m)"

output_file(f"/home/alexandre/Dropbox/topo/geomatica/docs/_static/name_file_{name_script}.html")

show(p)
