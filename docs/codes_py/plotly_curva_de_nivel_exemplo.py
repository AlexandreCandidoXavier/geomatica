import plotly.graph_objects as go
import os
import numpy as np

name_script = os.path.basename(__file__)

z = np.array([[104.7, 103.5, 102.8],
     [103.1, 102.5, 100.8],
     [101.1, 100.8, 100]], dtype="float32")

fig = go.Figure(go.Surface(
    contours = {
    "z": {"show": True, "start": 100, "end": 105, "size": 1}
    },
    x=["A", "B", "C"],
    y=[1., 2., 3.],
    z=z))

fig.update_traces(contours_z=dict(show=True,
                                  usecolormap=True,
                                  project_z=True),
                                  hovertemplate="<br>Alt: %{z:.1f} m",
                                  coloraxis="coloraxis1", name='',
                  )

fig.update_layout(coloraxis_colorbar=dict(
    title="Cota",
    thicknessmode="pixels", thickness=20,
    lenmode="pixels", len=300,
    ticks="outside", ticksuffix=" m",
    dtick=1
))

fig.update_layout(title='', autosize=True,
                  width=500, height=500,
                  margin=dict(l=0, r=0, b=0, t=0),
                  scene={
                      "zaxis_title": "Cota (m)",
                      "xaxis_title": "",
                      "yaxis_title": "",
                      "zaxis": {"range": [98, 106],  "tickvals": [100, 102, 104]},
                      'camera_eye': {"x": 1, "y": -1, "z": 3},
                      "aspectratio": {"x": 1, "y": 1, "z": 1}}
)

fig.write_html(f"/home/alexandre/Dropbox/topo/geomatica/docs/_static/name_file_{name_script}.html")
fig.show()
