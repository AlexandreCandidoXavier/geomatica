import holoviews as hv
import geoviews as gv
import geoviews.feature as gf
import cartopy
import cartopy.feature as cf
from geoviews import opts
from cartopy import crs as ccrs
import geopandas as gpd
from cartopy import crs


d1=gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))

gv.extension('bokeh')
a = (gf.ocean + gf.land + gf.ocean * gf.land * gf.coastline * gf.borders).cols(3)
gv.output(dpi=120, fig='html')
hv.save(a, "/home/alexandre/Dropbox/topo/geomatica/docs/_static/lixo.html", backend="bokeh")



b = (gf.ocean + gf.land + gf.ocean * gf.land * gf.coastline * gf.borders).opts(
    'Feature', projection=crs.Geostationary(), global_extent=True, height=325).cols(3)


hv.save(b, "/home/alexandre/Dropbox/topo/geomatica/docs/_static/lixo2.html", backend="bokeh")