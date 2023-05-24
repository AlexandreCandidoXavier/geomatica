import holoviews as hv
import geoviews as gv
import geoviews.feature as gf
import cartopy
import cartopy.feature as cf
from geoviews import opts
from cartopy import crs as ccrs
import geopandas as gpd
from cartopy import crs
import shapely.geometry as sgeom
import numpy as np
from pyproj import Geod

def circle(geod, lon, lat, radius, n_samples=360):
    """
    Return the coordinates of a geodetic circle of a given
    radius about a lon/lat point.

    Radius is in meters in the geodetic's coordinate system.

    """
    lons, lats, back_azim = geod.fwd(np.repeat(lon, n_samples),
                                     np.repeat(lat, n_samples),
                                     np.linspace(360, 0, n_samples),
                                     np.repeat(radius, n_samples),
                                     radians=False,
                                     )
    return lons, lats

geod = Geod(ellps='WGS84')

radius_km = 500
n_samples = 80

geoms = []
for lat in np.linspace(-80, 80, 10):
    for lon in np.linspace(-180, 180, 7, endpoint=False):
        lons, lats = circle(geod, lon, lat, radius_km * 1e3, n_samples)
        geoms.append(sgeom.Polygon(zip(lons, lats)))

gdf = gpd.GeoDataFrame(gpd.GeoSeries(geoms))
gdf = gdf.rename(columns={0:'geometry'}).set_geometry('geometry')


d1=gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))

gv.extension('bokeh')
a = (gf.ocean + gf.land + gf.ocean * gf.land * gf.coastline * gf.borders * geoms).cols(3)
gv.output(dpi=120, fig='html')
hv.save(a, "/home/alexandre/Dropbox/topo/geomatica/docs/_static/lixo.html", backend="bokeh")



b = (gf.ocean * gf.land.options(scale='110m', global_extent=True) * gf.coastline * gf.borders *  gv.Feature(graticules, group='Lines')
     * gv.Polygons(gdf)).opts(
    'Feature', projection=crs.Robinson(), global_extent=True, height=200)

hv.save(b, "/home/alexandre/Dropbox/topo/geomatica/docs/_static/lixo2.html", backend="bokeh")