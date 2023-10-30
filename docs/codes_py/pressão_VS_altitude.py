import plotly.express as px
import numpy as np
import os

name_script = os.path.basename(__file__)
Hgmm = np.arange(550, 760)

# https://en.wikipedia.org/wiki/Pressure_altitude
h = 145366.45*(1 - (1.33322*Hgmm/1013.25)**0.190284)

fig = px.line(x=Hgmm, y=h, title=r'$Altitude = 145366,45\left(1 - \frac{1,33322\text{Hg}}{1013,25}\right)^{0,190284}$')
fig.update_layout(
    xaxis_title=r'$\text{Pressão atmosférica (mm de Hg)}$',
    yaxis_title=r'$\text{Altitude (m)}$'
)

fig.update_traces(                  hovertemplate="Hg: %{x:.1f} mm <br>Altitude: %{y:.1f} m",  name='',                  )
fig.write_html(f"/home/alexandre/Dropbox/topo/geomatica/docs/_static/name_file_{name_script}.html",
               include_mathjax='cdn'
               )
fig.show()