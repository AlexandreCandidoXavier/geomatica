from bokeh.models import HoverTool
from bokeh.plotting import figure, show
from bokeh.models import NumeralTickFormatter

# prepare some data

point = ["A", "B", "C","D", "E","A"]
x=[268011.610, 267817.988, 267717.780, 267806.587, 267868.385, 268011.610]
y=[7370836.303, 7370893.267, 7370692.035, 7370582.303, 7370744.038, 7370836.303]

p = figure(
    #y_range=(0, 10),
    #toolbar_location=None,
    #tools=[HoverTool()],
    tooltips="E = @x{0.000} m; N = @y{0.000} m",
    sizing_mode="stretch_width",
    max_width=500,
    height=500,
)

# add renderers
p.circle(x[:-1], y[:-1], size=10, color="navy")
p.line(x, y, line_width=4, color="navy", alpha=0.5)
p.yaxis.formatter=NumeralTickFormatter(format="0")
p.xaxis.formatter=NumeralTickFormatter(format="0")
p.xaxis.axis_label = 'E (m)'
p.yaxis.axis_label = 'N (m)'

p.text(x[:-1], y[:-1], text=["  %s" % d for d in point[:-1]],
       text_baseline="middle", text_align="left")

p.arc(x[0], y[0], radius=20, start_angle=0.4, end_angle=4.8, color="navy")
# show the results
show(p)