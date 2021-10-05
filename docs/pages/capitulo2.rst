.. raw:: html

    <style> .exem {color:blue; font-weight: bold} </style>

.. role:: exem

.. raw:: html

    <style> .solucao {font-weight: bold} </style>

.. role:: solucao

.. raw:: html

    <style> .blue {color:blue} </style>

.. role:: blue

.. _RST Capitulo 2:

Capitulo 2
**********

.. _UnidadesMetricas:

Unidades métricas, escala e determinação de áreas
-------------------------------------------------

Este capítulo tem como objetivo central a determinação de áreas. Começaremos
com a apresentação das unidades de comprimento e de área mais utilizadas
em geomática. Como geralmente os desenhos topográficos estão reduzidos
à determinada escala, ela será definida e aplicada em problemas de
determinação de distância e área. Por fim, alguns métodos de cálculo
de área serão apresentados.

Unidades de comprimento e área
------------------------------

O Sistema Internacional de Unidades (SI) tem como unidade de comprimento
o metro (m). Ele é definido como o comprimento do caminho viajado
pela luz durante o intervalo de :math:`1/299\,792\,458` segundo.
Seguem alguns exemplos de subdivisões do metro:

- o milímetro :math:`(\text{mm},\,1\,\text{mm}=10^{-3}\text{m}=0,001\,\text{m})`;
- o centímetro :math:`(\text{cm},\,1\,\text{cm}=10^{-2}\,\text{m}=0,01\,\text{m})` e;
- o decímetro :math:`(\text{dm},\,1\,\text{dm}=10^{-1}\,\text{m}=0,1\,\text{m})`.

Como múltiplo de metro pode-se citar o quilômetro :math:`(\text{km,}\,1\,\text{km}=1\,000\,\text{m})`, geralmente utilizado em medidas sobre mapas
ou cartas de pequenas escala.

A unidade de área empregada é o :math:`\text{m}^2`. Para medidas de superfície
terrestre também podem-se empregar outras unidades, como o 'are'
:math:`(1\,\text{are}=100\,\text{m}^{2})` e seus múltiplos, sendo que o mais utilizado
é o hectare ('ha'), em que :math:`1\,\text{ha}=10\,000\,\text{m}^2`.

Unidades de área mais antigas ainda hoje são utilizadas, como o alqueire
('alq'). Um alqueiro pode apresentar
diferentes valores de área, de acordo com a localidade. Por exemplo,
um alqueiro geométrico, também conhecido por mineiro, mede :math:`48\,400\,\text{m}^2`,
enquanto o paulista mede :math:`24\,200\,\text{m}^2`.
Na apresentação de grandes extensões de área, como as presentes em
mapas ou cartas topográficas, utiliza-se a unidade de :math:`\text{km}^2`. Outras
unidades de comprimento e área podem ser encontradas em :cite:p:`comastri2`.

----

:exem:`Exemplo 1` Converta :math:`1\,\text{km}^2` para: :math:`\text{m}^2`, ha, alqueire
geométrico e paulista?

:solucao:`Solução:`

Para :math:`\text{m}^2`: como :math:`1\,\text{km}=1\,000\,\text{m}`, então, elevando ao
quadrado ambos os lados, :math:`(1\,\text{km})^2=(1\,000\,\text{m})^2`, vai resultar
em :math:`1\,\text{km}^2=10^6\,\text{m}^2=1\,000\,000\,\text{m}^2`;

Para ha: sabe-se agora que a área é de :math:`10^6\,\text{m}^2`,
como :math:`1\,\text{ha}=10\,000\,\text{m}^2`, então a área em ha :math:`(x_{\text{ha}})`:

.. math::
   \frac{x_{\text{ha}}}{10^{6}~\text{m}^{2}} & =\frac{1~\text{ha}}{10\,000~\text{m}^{2}}\\
   x_{\text{ha}} & =\frac{1~\text{ha}\cdot10^{6}~\text{m}^{2}}{10\,000~\text{m}^{2}}\\
   x_{\text{ha}} & =100~\text{ha};

Para alqueire geométrico: como :math:`1\,\text{alqueire}=48\,400\,\text{m}^2`,
então a área em alqueire geométrico :math:`(x_{\text{alqGeo}})`:

.. math::
   \frac{x_{\text{alqGeo}}}{10^{6}~\text{m}^{2}} & =\frac{1~\text{ha}}{48\,400~\text{m}^{2}}\\
   x_{\text{alqGeo}} & =\frac{1~\text{alqueiro}\cdot10^{6}~\text{m}^{2}}{48\,400~\text{m}^{2}}\\
   x_{\text{alqGeo}} & =20,6612~\text{alqueiro geométrico};

Para alqueire paulista: como :math:`1\,\text{alqueire}=24\,200\,\text{m}^2`,
então a área em alqueire paulista :math:`(x_{\text{alqPau}})`:

.. math::
   \frac{x_{\text{alqPau}}}{10^{6}~\text{m}^{2}} & =\frac{1~\text{ha}}{24\,200~\text{m}^{2}}\\
   x_{\text{alqPau}} & =\frac{1~\text{alqueiro}\cdot10^{6}~\text{m}^{2}}{24\,200~\text{m}^{2}}\\
   x_{\text{alqPau}} & =41,3223~\text{alqueiro paulista}.

----

Escala
------

Escala numérica
^^^^^^^^^^^^^^^

Quando se realiza levantamento na superfície terrestre, obtêm-se as
coordenadas dos pontos desejáveis, e posteriormente são apresentados
em papel ou na tela do computador. Logicamente que as medidas de distância
e áreas da superfície terrestre são, em geral, demasiadamente extensas
para caberem, nas mesmas proporções, em papel ou tela de computador.
Para ajustar ao papel/tela, é realizada uma redução das dimensões
a uma escala apropriada, de acordo com o tamanho do papel/tela. E
o que vem a ser uma escala? A escala :math:`(E)` é a relação entre a distância
de um objeto apresentado no papel/tela :math:`(l)` e a sua verdadeira distância
na natureza :math:`(L)`, isto é:

.. math::
   E=\frac{l}{L}
   :label: eq:escala

Para o uso desta Equação, as unidades de :math:`l` e :math:`L` devem
ser as mesmas. Observe que para levantamentos sobre a superfície terrestre
:math:`L\gg l`. Desta forma, a :math:`E` resulta em um número muito pequeno,
o que demandaria o uso de várias casas decimais para representá-la,
dificultando a sua interpretação. Para apresentar a :math:`E` de uma forma
mais intuitiva, usa-se a forma:

.. math::
   E=\frac{1}{M},
   :label: eq:escala2

em que :math:`M` é denominado o módulo da escala, sendo :math:`M=^L/l`.
A escala numérica na forma da Equação :eq:`eq:escala2` tem uma interpretação
bastante simples. Por exemplo, se na forma de decimal :math:`E=0,00028571`,
na forma da Equação :eq:`eq:escala2` seria :math:`E=1/3\,500`. Obviamente
:math:`E=0,00028571=1/3\,500`, mas na segunda forma, já conclui-se
de imediato que, por exemplo, :math:`1\,\text{m}` de um comprimento no papel, corresponderia
ao comprimento de :math:`3\,500\,\text{m}` em campo. Ou, de outra forma, :math:`1\,\text{cm}` de comprimento
no papel, corresponde a :math:`35\,\text{m}` em campo (Como :math:`1\,\text{m}=100\,\text{cm}`, então de acordo com a escala :math:`100\,\text{cm}=3\,500\,\text{m}`,
dividindo-se ambas as partes por :math:`100`, temos :math:`1\,\text{cm}=35\,\text{m}`. A escala numérica pode estar na forma de fração (p. ex., :math:`E=1/3\,500`);
proporção (p.\,ex., :math:`E=1:3\,500`); ou equação (p.\,ex., :math:`1\,\text{cm}=35\,\text{m}`).

----

:exem:`Exemplo 1` A distância entre dois postes
em uma rua equivale a :math:`33,4\,\text{m}`. Quando representados em papel, estes
postes estavam distantes :math:`3\,\text{cm}` entre si. Qual a escala do desenho?

:solucao:`Solução:`

Utilizando a Equação :eq:`eq:escala2`, e sabendo que :math:`l=3\,\text{cm}=0,03\,\text{m}`,
e :math:`L` igual a :math:`33,4\,\text{m}`, o módulo da escala será:

.. math::
   M & =\frac{L}{l}\\
   & =\frac{33,4}{0,03}\\
   & =1\,113

O resultado exato de :math:`M` é :math:`1\,113,3333333\ldots`, todavia,
na apresentação da :math:`E`, utiliza-se, geralmente, apenas o número inteiro.
Desta forma, :math:`E=1/1\,113`.


**Referências**

.. bibliography::