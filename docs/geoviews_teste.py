import pandas as pd
import holoviews as hv
import geoviews as gv
import geoviews.feature as gf
import cartopy
import cartopy.feature as cf

from geoviews import opts
from cartopy import crs as ccrs

gv.extension('matplotlib', 'bokeh')

gv.output(dpi=120, fig='html')