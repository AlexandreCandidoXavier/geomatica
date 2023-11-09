import numpy as np
import pandas as pd
from scipy.interpolate import Rbf
import matplotlib.pylab as plt
import xarray as xr
import hvplot.xarray
import holoviews as hv
import cartopy
from bokeh.io import output_notebook
import geopandas as gpd
output_notebook()

#  rada no ambiente BR-DWGD

path = "/home/alexandre/Dropbox/topo/geomatica/docs/_static/"
# http://icgem.gfz-potsdam.de/calcgrid
# df = pd.read_csv("/home/alexandre/Dropbox/topo/EGM96_geoid.gdf", delimiter=r"\s+",
#                  skiprows=36, header=None)
geoid_name = "EGM2008" #
print(f"/home/alexandre/Dropbox/topo/{geoid_name}_geoid.gdf")
df = pd.read_csv(f"/home/alexandre/Dropbox/topo/{geoid_name}_geoid.gdf", delimiter=r"\s+",
                 skiprows=36, header=None)
x = df[0].values - 360
y = df[1].values
z = df[2].values

liga = True
for lat in np.unique(y):
    if liga:
        data = z[y==lat].reshape(1, -1)
        liga = False
    else:
        data = np.r_[data, z[y==lat].reshape(1, -1)]

df = xr.DataArray(data.T, dims=("Longitude", "Latitude", ),
                    coords={"Latitude": np.unique(y),
                            "Longitude": np.unique(x),
                            })

df = df.rename("N").to_dataset()

plot = df.hvplot.image(coastline=True).opts(fontscale=1.5, frame_width=280)
hv.save(df.hvplot.image(coastline=True).opts(fontscale=1.5, frame_width=280), f"{path}ondulacao_geoidal_{geoid_name}.html", backend="bokeh")

hvplot.show(plot)
