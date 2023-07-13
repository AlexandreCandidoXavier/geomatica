import pandas as pd
import plotly.graph_objects as go
import os
import numpy as np

name_script = os.path.basename(__file__)
cota2plano = 304.624
z = np.array([[302.4, 302.3, 301.7, 301.7, 302, 301.5],
              [303.3, 303.4,   303,  302.1, 302.4, 302.2],
              [305.7, 305.6,   304,  303, 303.9, np.nan],
              [307,   307.5, 306.1,  304.5, np.nan, np.nan],
              [307.8, 307.6, 307.7, 307.4, np.nan, np.nan],
              [307.4, 306.9, 307.3, np.nan, np.nan, np.nan]], dtype="float32")
z=np.fliplr(z)
plano = np.ones_like(z) * cota2plano
plano[np.isnan(z)] = np.nan
# colunas = [1, 2, 3, 4, 5, 6]
# linhas = ["A", "B", "C", "D", "E", "F"]

linhas = np.arange(0, 60, 10)
colunas = np.arange(0, 60, 10)


col, lin, cotas, nome = [], [], [], []
for row, linha in enumerate(linhas):
    for column, coluna in enumerate(colunas):
        if ~np.isnan(z[column, row]):
            col.append(coluna)
            lin.append(linha)
            cotas.append(cota2plano)
            col.append(coluna)
            lin.append(linha)
            cotas.append(z[column, row])
            nome.append(f"{coluna}{linha}")
            nome.append(f"{coluna}{linha}")

df = pd.DataFrame({"nome": nome,
                   "linha": lin,
                   "coluna": col,
                   "cotas": cotas})
df["CV"] = df["cotas"] - cota2plano
fig = go.Figure(data=[
    go.Surface(x=linhas, y=colunas, z=z,
               hovertemplate="<br>%{y}%{x}, cota: %{z:.1f} m", name="terreno",
               colorscale=[[0, "blue"], [1, "yellow"]], colorbar={"title": "Cota", "len": .5},),
    go.Surface(x=linhas, y=colunas, z=plano, colorscale=[[0, "brown"], [1, "brown"]],
               showscale=False, opacity=0.4,  hovertemplate="<br>%{y}%{x}, cota: %{z:.1f} m", name="plano"),
    # go.Scatter3d(x=df["linha"], y=df["coluna"], z=df["cotas"], mode='lines', )
])

for n in np.unique(df["nome"]):
    index = df["nome"] == n
    name = df.loc[index, "nome"].values[0]
    CV = str(np.around((cota2plano - df.loc[index, "cotas"].values[1]), 2))
    fig.add_scatter3d(x=df.loc[index, "linha"],
                      y=df.loc[index, "coluna"],
                      z=df.loc[index, "cotas"], mode='lines', line={'width': 5},
                      name="",
                      marker=dict(color='red'), showlegend=False,
                      hovertemplate = f"CV = {CV} m"
    )

# for n in colunas:
#     fig.add_scatter3d(x=[0, 50],
#                       y=[n, n],
#                       z=[cota2plano, cota2plano], mode='lines', line={'width': 5},
#                       name="",
#                       marker=dict(color='grey'), showlegend=False,
#                       hoverinfo="skip"
#     )
#
# for n in linhas:
#     fig.add_scatter3d(y=[0, 50],
#                       x=[n, n],
#                       z=[cota2plano, cota2plano], mode='lines', line={'width': 5},
#                       name="",
#                       marker=dict(color='grey'), showlegend=False,
#                       hoverinfo="skip"
#     )

fig.update_layout(title='', autosize=True,
                  margin=dict(l=0, r=0, b=0, t=0),
                  scene={
                      "zaxis_title": "Cota (m)",
                      "xaxis_title": "",
                      "yaxis_title": "",
                      "zaxis": {"range": [295, 308],  "tickvals": [300, 304.624, 308]},
                      "yaxis": {"tickvals": linhas, "ticktext": [1, 2, 3, 4, 5, 6]},
                      "xaxis": {"tickvals": linhas[::-1], "ticktext": ["A", "B", "C", "D", "E", "F"]},
                      'camera_eye': {"x": -1, "y": -1, "z": 3},
                      "aspectratio": {"x": 1, "y": 1, "z": 1.1}}
)

fig.write_html(f"/home/alexandre/Dropbox/topo/geomatica/docs/_static/name_file_{name_script}.html")
fig.show()
