import numpy as np
import pandas as pd
from scipy.interpolate import Rbf
import matplotlib.pylab as plt
import xarray as xr
import hvplot.xarray
import holoviews as hv
import cartopy

# http://icgem.gfz-potsdam.de/calcgrid
# plots estao no projeo BR-DWGD
# c