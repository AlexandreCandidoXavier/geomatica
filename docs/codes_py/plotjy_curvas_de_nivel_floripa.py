import plotly.graph_objects as go
import xarray as xr
import os

name_script = os.path.basename(__file__)

# /home/alexandre/Dropbox/pygmt/grid_para_curva_de_nivel_itera.py
df = xr.open_mfdataset('grid.nc')
# fig = go.Figure(data=[go.Surface(z=df.elevation.values)])

fig = go.Figure(go.Surface(
    contours={
    "z": {"show": True, "start": 0, "end": 400, "size": 40}
    },
    y=df.lat,
    x=df.lon,
    z=df.elevation.values,
))

fig.update_traces(contours_z=dict(show=True,
                                  usecolormap=True,
                                 project_z=True,),
                  hovertemplate="Lon: %{x:.3f}° <br>lat: %{y:.3f}° <br>Alt: %{z:.0f} m",
                  coloraxis="coloraxis1", name='',
                  )

fig.update_layout(coloraxis_colorbar=dict(
    title="Altitude",
    thicknessmode="pixels", thickness=20,
    lenmode="pixels", len=300,
    ticks="outside", ticksuffix=" m",
    dtick=50,
))

fig.update_layout(title='', autosize=True,
                  width=600, height=700,
                  margin=dict(l=0, r=0, b=0, t=0),
                  scene={
                      "zaxis_title": "Altitude (m)",
                      "xaxis_title": "Longitude",
                      "yaxis_title": "Latitude",
                      "xaxis": {"nticks": 4,},
                      "zaxis": {"nticks": 4, "range": [-800, 500], "tickvals": [0, 200, 400]},
                      'camera_eye': {"x": 0, "y": -1, "z": 2},
                      "aspectratio": {"x": 1, "y": 1, "z": .8}})

fig.write_html(f"/home/alexandre/Dropbox/topo/geomatica/docs/_static/name_file_{name_script}.html")
fig.show()
