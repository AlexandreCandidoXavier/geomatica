import pandas as pd
import plotly.graph_objects as go
import os
import numpy as np

name_script = os.path.basename(__file__)
cota2plano = 102.5
z = np.array([[104.7, 103.5, 102.8],
     [103.1, 102.5, 100.8],
     [101.1, 100.8, 100]], dtype="float32")

plano = np.ones_like(z) * cota2plano

linhas = [1, 2, 3]
colunas = ["A", "B", "C"]

col, lin, cotas, nome = [], [], [], []
for row, linha in enumerate(linhas):
    for column, coluna in enumerate(colunas):
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
    go.Surface(x=linhas, y=colunas, z=plano, colorscale=[[0, "grey"], [1, "grey"]],
               showscale=False, opacity=0.4,  hovertemplate="<br>%{y}%{x}, cota: %{z:.1f} m", name="plano"),
    # go.Scatter3d(x=df["linha"], y=df["coluna"], z=df["cotas"], mode='lines', )
])

for n in np.unique(df["nome"]):
    index = df["nome"] == n
    name = df.loc[index, "nome"].values[0]
    CV = str(np.around((cota2plano - df.loc[index, "cotas"].values[1]), 2))
    fig.add_scatter3d(x=df.loc[index, "linha"],
                      y=df.loc[index, "coluna"],
                      z=df.loc[index, "cotas"], mode='lines', line={'width': 7},
                      name="",
                      marker=dict(color='red'), showlegend=False,
                      hovertemplate = f"CV = {CV} m"
    )

for n in colunas:
    fig.add_scatter3d(x=[1, 3],
                      y=[n, n],
                      z=[cota2plano, cota2plano], mode='lines', line={'width': 5},
                      name="",
                      marker=dict(color='grey'), showlegend=False,
                      hoverinfo="skip"
    )

for n in linhas:
    fig.add_scatter3d(y=["A", "C"],
                      x=[n, n],
                      z=[cota2plano, cota2plano], mode='lines', line={'width': 5},
                      name="",
                      marker=dict(color='grey'), showlegend=False,
                      hoverinfo="skip"
    )

fig.update_layout(title='', autosize=True,
                  width=500, height=500,
                  margin=dict(l=0, r=0, b=0, t=0),
                  scene={
                      "zaxis_title": "Cota (m)",
                      "xaxis_title": "",
                      "yaxis_title": "",
                      "zaxis": {"range": [99.5, 105],  "tickvals": [100, 102, 104]},
                      "yaxis": {"range": [-.1, 2],  "tickvals": colunas},
                      "xaxis": {"range": [0.9, 3],  "tickvals": linhas},
                      'camera_eye': {"x": -1, "y": -1, "z": 3},
                      "aspectratio": {"x": 1, "y": 1, "z": 1.5}}
)

fig.write_html(f"/home/alexandre/Dropbox/topo/geomatica/docs/_static/name_file_{name_script}.html")
fig.show()
