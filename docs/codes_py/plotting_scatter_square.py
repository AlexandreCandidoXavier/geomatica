import bokeh
print(bokeh.__version__)
from bokeh.plotting import figure, show
from bokeh.models import NumeralTickFormatter, Panel, Tabs, BoxZoomTool, ColumnDataSource, LabelSet
import geopandas as pd
import scipy

# BoxZoomTool(match_aspect = True)
# BoxZoomTool()
Hz_dms = [[139, 27, 3],
      [49, 7, 44],
      [100, 4, 4],
      [114, 34, 23],
      [59, 55, 7],
      [216, 18, 7]]
Hz_dms_str = [str(ang[0]) + "°" + str(ang[1]) + "'" + str(ang[2]) + "''" for ang in Hz_dms]


Hz_d = [ang[0]+ang[1]/60+ang[2]/3600 for ang in Hz_dms]
Hz_d_poligonal = Hz_d[1:]
Hz_d_base = Hz_d[0]

Az_dms = [[286, 22, 25],
      [206, 26, 36],
      [141, 1, 6],
      [20, 56, 20],
      [57, 14, 34]]
Az_dms_str = [str(ang[0]) + "°" + str(ang[1]) + "'" + str(ang[2]) for ang in Az_dms]
Az_d = [ang[0]+ang[1]/60+ang[2]/3600 for ang in Az_dms]
Hz_re = []
for n, ang in enumerate(Az_d):
    Hz = ang - Hz_d_poligonal[n]
    Hz_re.append(Hz)


# prepare some data
point = ["O", "A", "B", "C","D", "E","A"]
x=[268111.805, 268011.610, 267817.988, 267717.780, 267806.587, 267868.385, 268011.610]
y=[7370682.471, 7370836.303, 7370893.267, 7370692.035, 7370582.303, 7370744.038, 7370836.303]

source = ColumnDataSource(data=dict(x=x[1:], y=y[1:], Hz=Hz_dms_str))

def base_poligonal(tipo):
    if tipo == "Poligonal":
        tooltips = [("E", "@x{0.000} m"), ("N", "@y{0.000} m")]
    else:
        tooltips = [("DH", "aleaxndre"), ("Hz", "100,208")]

    p = figure(
        #y_range=(0, 10),
        #toolbar_location=None,
        #tools=[HoverTool()],
        tooltips=tooltips,
        match_aspect=True,
        max_width=500,
        height=500,
        tools='pan, wheel_zoom, reset',
    )
    p.add_tools(BoxZoomTool(match_aspect=True))
    # add renderers
    p.circle(x[2:-1], y[2:-1], size=10, color="navy")
    p.line(x[1:], y[1:], line_width=4, color="navy", alpha=0.5)
    p.line(x[0:2], y[0:2], line_width=4, color="navy", alpha=0.5, line_dash='dashed')
    p.triangle(x[0:2], y[0:2], size=15, color="navy", fill_color="white")

    p.yaxis.formatter=NumeralTickFormatter(format="0")
    p.xaxis.formatter=NumeralTickFormatter(format="0")
    p.xaxis.axis_label = 'E (m)'
    p.yaxis.axis_label = 'N (m)'
    p.text(x[:-1], y[:-1], text=["  %s" % d for d in point[:-1]],
            text_baseline="middle", text_align="left")
    return p


tipo = "Campo"
p1 = base_poligonal(tipo)
for n in range(len(Az_d)):
    arc = p1.arc(x[n+1], y[n+1], radius=20, start_angle=450-Az_d[n], end_angle=450-Hz_re[n], color="orange",
          end_angle_units="deg", start_angle_units="deg",line_width=2,)
    # arc.add_decoration(TeeHead(size=10), "start")
#labels = LabelSet(x='x', y='y', text='Hz',
#              x_offset=[5, 10], y_offset=5, source=source, render_mode='canvas')

#p1.add_layout(labels)
tab1 = Panel(child=p1, title=tipo)

tipo = "Poligonal"
p2 = base_poligonal(tipo)
tab2 = Panel(child=p2, title=tipo)

# show the results
show(Tabs(tabs=[tab1, tab2]))