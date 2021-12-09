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

Capitulo 2: Unidades métricas, escala e determinação de áreas
*************************************************************

Este capítulo tem como objetivo central a determinação de áreas. Começaremos
com a apresentação das unidades de comprimento e de área mais utilizadas
em geomática. Como geralmente os desenhos topográficos estão reduzidos
à determinada escala, ela será definida e aplicada em problemas de
determinação de distância e área. Por fim, alguns métodos de cálculo
de área serão apresentados.

.. _UnidadesMetricas:

Unidades de comprimento e área
==============================

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

.. admonition:: :exem:`Exemplo 1` Converta :math:`1\,\text{km}^2` para: :math:`\text{m}^2`, ha, alqueire
    geométrico e paulista?

    :solucao:`Solução:`
    Para :math:`\text{m}^2`: como :math:`1\,\text{km}=1\,000\,\text{m}`, então, elevando ao
    quadrado ambos os lados, :math:`(1\,\text{km})^2=(1\,000\,\text{m})^2`, vai resultar
    em :math:`1\,\text{km}^2=10^6\,\text{m}^2=1\,000\,000\,\text{m}^2`;

    Para ha: sabe-se agora que a área é de :math:`10^6\,\text{m}^2`,
    como :math:`1\,\text{ha}=10\,000\,\text{m}^2`, então a área em ha :math:`(x_{\text{ha}})`:

    .. math::
       \frac{x_{\text{ha}}}{10^{6}\,\text{m}^{2}} & =\frac{1\,\text{ha}}{10\,000\,\text{m}^{2}}\\
       x_{\text{ha}} & =\frac{1\,\text{ha}\cdot10^{6}\,\text{m}^{2}}{10\,000\,\text{m}^{2}}\\
       x_{\text{ha}} & =100\,\text{ha};

    Para alqueire geométrico: como :math:`1\,\text{alqueire}=48\,400\,\text{m}^2`,
    então a área em alqueire geométrico :math:`(x_{\text{alqGeo}})`:

    .. math::
       \frac{x_{\text{alqGeo}}}{10^{6}\,\text{m}^{2}} & =\frac{1\,\text{ha}}{48\,400\,\text{m}^{2}}\\
       x_{\text{alqGeo}} & =\frac{1\,\text{alqueiro}\cdot10^{6}\,\text{m}^{2}}{48\,400\,\text{m}^{2}}\\
       x_{\text{alqGeo}} & =20,6612\,\text{alqueiro geométrico};

    Para alqueire paulista: como :math:`1\,\text{alqueire}=24\,200\,\text{m}^2`,
    então a área em alqueire paulista :math:`(x_{\text{alqPau}})`:

    .. math::
       \frac{x_{\text{alqPau}}}{10^{6}\,\text{m}^{2}} & =\frac{1\,\text{ha}}{24\,200\,\text{m}^{2}}\\
       x_{\text{alqPau}} & =\frac{1\,\text{alqueiro}\cdot10^{6}\,\text{m}^{2}}{24\,200\,\text{m}^{2}}\\
       x_{\text{alqPau}} & =41,3223\,\text{alqueiro paulista}.

----

.. _escala:

Escala
======

Escala numérica
---------------

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

.. admonition:: :exem:`Exemplo 2` A distância entre dois postes
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

----

.. admonition:: :exem:`Exemplo 3` Em uma planta topográfica mediu-se um talhão na forma de um retângulo,
    obtendo-se como comprimentos dos lados os valores de :math:`2,3\,\text{cm}` e de
    :math:`0,9\,\text{cm}`. Sabendo-se que a escala do desenho era de :math:`1:6\,000`, calcule
    a área do talhão em :math:`\,\text{m}^2`?

    :solucao:`Solução:`
    Este problema será resolvido de duas formas. A primeira
    é calculando os comprimentos dos lados em metros e depois calculando
    a área. Da escala temos, :math:`1\,\text{m}=6\,000\,\text{m}`, que é o mesmo que :math:`1\,\text{cm}=60\,\text{m}`.
    Utilizando esta última relação, aplica-se uma regra de três, obtendo-se
    para os lados de :math:`2,3\,\text{cm}` e de :math:`0,9\,\text{cm}`, respectivamente, os comprimentos
    dos lados de :math:`138\,\text{m}` e :math:`54\,\text{m}`. Desta forma, a área seria de :math:`7\,452\,\text{m}^2`
    :math:`(138\,\text{m}\times54\,\text{m})`.

    Uma outra maneira de calcular a área do talhão é, calculá-la
    em :math:`\text{cm}^2` e, posteriormente, convertê-la para :math:`\,\text{m}^2`. Assim,
    a área no papel é de :math:`2,07\,\text{cm}^2` :math:`(2,3\,\text{cm}\times0,9\,\text{cm})`.
    A escala, como já foi dito, é utilizada para medidas de comprimento.
    Todavia, elevando ambos os lados da escala ao quadrados, teremos uma
    relação entre área de desenho e área na natureza. Para a nossa escala
    :math:`(1\,\text{cm}=60\,\text{m})`, elevando ambos os lados ao quadrado tem-se:

    .. math::
       \left(1\,\text{cm}\right)^2 & =\left(60\,\text{m}\right)^2\\
       1\text{cm}^2 & =3\,600\,\text{m}^2.

    Logo, a área do talhão será :math:`2,07\times3\,600=7\,452\,\text{m}^2`.

----


Escala gráfica
--------------

Uma outra forma de representação da escala é a gráfica, que tem como
vantagem, que, mesmo se o mapa/carta for reduzida ou ampliada, a escala
gráfica se mostrará apropriada para análises, uma vez que ela é reduzida
ou ampliada na mesma proporção. Dois exemplos de escalas gráficas
são apresentados na :numref:`escalagrafica`.

.. _escalagrafica:

.. figure:: /images/capitulo2/fig_escala_grafica.png
   :scale: 35 %
   :alt: fig_escala_grafica.png
   :align: center

   Exemplos de escalas gráficas.

Para desenhar uma escala gráfica aplicam-se as seguinte etapas:

- a escala gráfica a ser desenhada é colocada na parte inferior ou inferior e a direita do mapa/carta;

- quanto ao tamanho, não deve ser muito pequeno, impossibilitando uma
  leitura adequada, nem muito grande, ocupando um espaço desproporcional
  ao desenho a ser apresentado;

- definido o tamanho e posição, faz-se a sua subdivisão; pintando intercaladamente as subdivisões;

- conhecendo a escala numérica, coloca-se sobre as subdivisões suas
  distância em relação ao ponto inicial da escala;


No Exemplo abaixo é apresentado passo a passo a construção
de uma escala gráfica.

----

.. admonition:: :exem:`Exemplo 4` Um levantamento de uma propriedade
    será apresentado em papel A4, onde foi estabelecida a :math:`E=1:1\,500`,
    desenhe uma escala gráfica com :math:`6\,\text{cm}` de comprimento.

    :solucao:`Solução:`

    .. figure:: /images/capitulo2/fig_exemp_escala_grafica.png
       :scale: 55 %
       :alt: fig_exemp_escala_grafica.png
       :align: center

----

Determinação de áreas
=====================

Normalmente, em problemas topográficos, há a necessidade de se calcular
áreas. As áreas podem ser: *i*) da superfície projetada do
plano topográfico ou cartográfico (plano horizontal), quando se deseja,
por exemplo, conhecer a área que se pode cultivar, ou em caso de construções,
as áreas disponíveis para locação de obras de engenharia; ou *ii*)
no plano vertical, quando se deseja realizar cálculos de volumes de
corte e de aterro. O cálculo de áreas de figuras elementares foi apresentado
na seção :any:`secAreasdefiguras`.
Neste capítulo veremos algumas metodologias para medição de áreas
em topografia.

Decomposição de figuras elementares
-----------------------------------

Uma maneira grosseira de realizar medidas de uma área :math:`(A)`, seja
diretamente em uma planta topográfica ou mesmo em levantamento de
campo, é na decomposição de sua área em figuras geométricas simples,
como triângulos, trapézios e retângulos (ver seção :any:`secAreasdefiguras`).
Na :numref:`fig_figuraselementares` é apresentada um limite de
uma propriedade onde se pretende medir a área. Ela é delimitada a
sua esquerda por um rio e a sua direita pela poligonal :math:`ABCDEFG`.
Decidiu-se então por decompô-la nas figuras geométricas: de três triângulos
:math:`(BCF,\,CDF,\,\,\text{e}\,DEF)`; e três trapézios :math:`(GFJK,\,HIJK\,\text{e}\,ABIH)`.
Observe que as áreas dos trapézios são apenas aproximações ao limite
do rio, pois assume-se que ele se aproxima a seguimentos retos. Se
o rio fosse mais sinuoso, poderia utilizar mais retângulos e trapézios
para melhorar o ajuste.

Em campo, as medidas de comprimento dos lados das figuras geométricas
podem ser realizadas utilizando-se, por exemplo, uma trena ou uma
estação total. Se a área estivesse representada em papel, bastaria
medir os lados dos segmentos que formam as figuras geométricas com
uma régua e aplicar a estes valores a escala. Se o levantamento já
se encontra na forma digital, em ambiente de Sistema de Informação Geográfica (SIG) ou de CAD (*Computer-aided design*,
desenho acompanhado por computador), que são programas de computador para desenvolvimento
de desenhos técnicos, as distâncias são obtidas de maneira automática. Uma vez conhecida
as distâncias entre os alinhamentos das figuras geométricas propostas,
calcula-se de cada uma, e posteriormente, são somadas, obtendo-se
a área total.

.. _fig_figuraselementares:

.. figure:: /images/capitulo2/fig_figuraselementares.png
   :scale: 55 %
   :alt: fig_figuraselementares.png
   :align: center

   Decomposição de uma área em figuras elementares.


Área ao longo de um transecto
-----------------------------

Quando a superfície a ser determinada apresenta-se com uma forma estreita,
pode-se estabelecer um alinhamento na direção do maior comprimento
com o auxílio de um teodolito ou estação total, e a partir deste alinhamento,
a espaçamentos constantes ou não, lançar perpendiculares até os pontos
limitantes. A definição se o espaçamento será constante ou não dependerá
do limite da divisa ser ou não uniforme.

Um exemplo de um transecto em que o espaçamento pode ser constante
é apresentado na :numref:`transectrapezio`, onde se tem o
alinhamento principal dado por :math:`A`, e as medidas dos comprimentos
das perpendiculares, espaçada, neste caso, de 20~m em 20~m. Desta
forma, haverá como resultado, que cada par de perpendiculares, quando
ligadas, formarão as bases :math:`(b)` de um trapézio e o espaçamento entre
as perpendiculares, a sua altura :math:`(h)`. Se somarmos as áreas de todos
os trapézios, teremos a da área total. Nota-se que o ajuste ao limite
original não é perfeito, todavia, como a área é aproximadamente uniforme
e que, haverão trapézios que irão subestimar área e outros que irão
superestimá-la, há uma tendência de que o valor calculado se aproximar
do valor real. A área poderá ser calculada como:


.. math::
   A & =\frac{\left(b_{0}+b_{1}\right)h}{2}+\frac{\left(b_{1}+b_{2}\right)h}{2}+\ldots+\frac{\left(b_{n-1}+b_{n}\right)h}{2}\\
   :label: eq:areatrapezio

.. math::
  A =h\left(\frac{b_{0}}{2}+b_{1}+b_{2}+\ldots+\frac{b_{n}}{2}\right).


.. _transectrapezio:

.. figure:: /images/capitulo2/fig_transectrapezio.png
   :scale: 45 %
   :alt: fig_transectrapezio.png
   :align: center

   Exemplo de um transecto uniforme e a aproximação a figuras de trapézios.

-----

.. admonition:: :exem:`Exemplo 5` Calcular a área do transecto mostrada na :numref:`transectrapezio`.

    :solucao:`Solução:`
    Considerando a Equação :eq:`eq:areatrapezio`, com as perpendiculares
    sendo as bases e :math:`h=20\,\text{m}`, temos:

    .. math::
       A & =20\left(\frac{0}{2}+25,8+27,4+26,1+25,6+\frac{12,5}{2}\right).\\
       & =2\,223~\mathrm{m}^2.

----

Considera-se agora a parte limitante do transecto não uniforme, conforme
:numref:`transectrapezio2`. Para calcular a área com espaçamento
constante e obter uma boa estimativa da área, o espaçamento entre
as perpendiculares teriam que ser menor. Todavia, tal procedimento
aumentaria demasiadamente o trabalho em campo. Ao invés disto, podemos
considerar perpendiculares lançadas de acordo com a mudança de direção
do limite. Esta mudança de estratégia vai fazer com que o espaçamento
entre as perpendiculares sejam variáveis, mas vai adaptar melhor ao
limite. Com os espaçamentos distintos, aplica-se a Equação :eq:`eqareatrapezio2`,
considerando as alturas distintas dos trapézios.

.. _transectrapezio2:

.. figure:: /images/capitulo2/fig_transectrapezio2.png
   :scale: 45 %
   :alt: fig_transectrapezio2.png
   :align: center

   Exemplo de um transecto uniforme e a aproximação a figuras de trapézios.


.. math::
   A  =\frac{\left(b_{0}+b_{1}\right)h_{1}}{2}+\frac{\left(b_{1}+b_{2}\right)h_{2}}{2}+\ldots+\frac{\left(b_{n-1}+b_{n}\right)h_{n}}{2}\\
   :label: eqareatrapezio2

.. math::
   A  =\frac{1}{2}\left((b_{0}+b_{1})h_{1}+(b_{1}+b_{2})h_{2}+\ldots+(b_{n-1}+b_{n})h_{n}\right).

----

.. admonition:: :exem:`Exemplo 6` Calcular a área do transecto mostrada na :numref:`transectrapezio2`.

    :solucao:`Solução:` Considerando a Equação :eq:`eqareatrapezio2`, para perpendiculares
    que não tem espaçamento constante e utilizando os dados da :numref:`transectrapezio2`,
    temos:

    .. math::
       A=\frac{1}{2}((14,7+12,2)(15,8-0)+(12,2+49,4)(30,1-15,8)+\\
       (49,4+14,9)(65,0-30,1)+(14,9+59,1)(85,4-65)+\\
       (59,1+21,5)(114,1-85,4))\\

    .. math::
       A=3\,686,4\,\text{m}^2.

.. _areaGauss:

Cálculo de área por Gauss
-------------------------

Em levantamentos topográficos, as coordenadas retangulares dos pontos
limitantes, são determinados por diversos métodos. A obtenção das
coordenadas retangulares é de suma importância, uma vez, que a partir
delas, pode-se plotar em papel, calcular distâncias entre pontos e
áreas de poligonais.

A maneira mais utilizada para se calcular a área, quando se conhecem
as coordenadas retangulares dos vértices da poligonal, é pelo método
de Gauss, também conhecido como método das coordenadas. A seu cálculo
é bastante facilitado com o uso de calculadoras ou programas computacionais.
O eixo-:math:`y` das coordenadas topográficas, coincide com a direção dita
como Norte, e o eixo-:math:`x` com a direção Leste. As coordenadas retangulares
podem também ser obtidas em papel, realizando medidas com régua na
própria planta, considerando a escala do desenho, por exemplo, por
digitalização, que é o ato de transformar a informação do papel (analítica) para um formato
em que o computador consiga trabalhar. Para digitalizar os dados de
plantas ou cartas, podem-se empregar os *scanners* e as mesas
digitalizadora.

Para demonstrar como o método funciona, considere a :numref:`fig_areagaussdesenho`,
onde pretende-se calcular a área limitada pelos vértices :math:`ABCD`,
onde suas coordenadas retangulares são conhecidas. Para obter a área
total, soma-se as áreas limitadas pelos pontos :math:`C\text{'}CDD\text{'}`
e :math:`D\text{'}DAA\text{'}` e subtrai-se das áreas :math:`C\text{'}CBB\text{'}`
e :math:`B\text{'}BAA\text{'}`. Observe que todas estas áreas formam figuras
de trapézios, desta forma, a área compreendida entre os vértices :math:`ABCD`
é dada pela Equação :eq:`eqareagauss`.

.. _fig_areagaussdesenho:

.. figure:: /images/capitulo2/fig_areagaussdesenho.png
   :scale: 45 %
   :alt: fig_areagaussdesenho.png
   :align: center

   Esquema para dedução do cálculo de área por Gauss.

.. math::
   A & =C\text{'}CDD\text{'}+D\text{'}DAA\text{'}-C\text{'}CBB\text{'}-B\text{'}BAA\text{'}\\
   A & =\frac{1}{2}(x_{C}+x_{D})(y_{C}-y_{D})+\frac{1}{2}(x_{D}+x_{A})(y_{D}-y_{A})-\frac{1}{2}(x_{C}+x_{B})(y_{C}-y_{B})-\frac{1}{2}(x_{B}+x_{A})(y_{B}-y_{A})\\
   2A & =(x_{C}+x_{D})(y_{C}-y_{D})+(x_{D}+x_{A})(y_{D}-y_{A})-(x_{C}+x_{B})(y_{C}-y_{B})-(x_{B}+x_{A})(y_{B}-y_{A})\\
   2A & =y_{A}(x_{B}-x_{D})+y_{B}(x_{C}-x_{A})+y_{C}(x_{D}-x_{B})+y_{D}(x_{A}-x_{C})\\
   2A & =y_{A}x_{B}+y_{B}x_{C}+y_{C}x_{D}+y_{D}x_{A}-x_{A}y_{B}-x_{B}y_{C}-x_{C}y_{D}-x_{D}y_{A}
   :label: eqareagauss


Considere agora um número qualquer de vértices :math:`(n)`, convenientemente
organizados, que delimitam a área. Poderemos, para fins de facilidade
do cálculo, organizar os dados como mostrados na :numref:`fig_areagauss2`,
com as coordenadas :math:`x` acima das coordenadas :math:`y` para cada ponto.
As coordenadas devem estar em sequência para formar um polígono, seguindo
o sentido horário ou anti-horário. Também não se deve pular coordenada
de quaisquer vértices. A primeira coordenada deve aparecer, mais uma
vez, na última posição. Faz-se então o somatório do produto da diagonal
subindo e a este resultado subtrai-se do somatório do produto da diagonal
descendo (o contrário também pode ser realizado). Considere o valor
absoluto desta operação, ou seja, se o resultado der negativo, considere-o
positivo. E por fim, para obter a área, divida este número por dois.
A unidade de área dependerá da unidade das coordenadas. Assim, se
forem coordenadas na unidade de metros, tem-se área em :math:`\text{m}^2`, se
for em quilômetros, em :math:`\text{km}^2`. Não confundir no esquema da :numref:`fig_areagauss2`
com uma divisão e produto das coordenadas.

.. _fig_areagauss2:

.. figure:: /images/capitulo2/fig_areagauss2.png
   :scale: 45 %
   :alt: fig_areagauss2.png
   :align: center

   Organização dos dados para cálculo da área por Gauss.

----

.. admonition:: :exem:`Exemplo 7` A partir das coordenadas retangulares, em metros, do levantamento da
    poligonal apresentada abaixo, calcular a sua área.

    .. figure:: /images/capitulo2/exemplo_area_gauss.png
       :scale: 35 %
       :alt: exemplo_area_gauss.png
       :align: center

    Organizando os dados e realizando os cálculos conforme metodologia
    apresentada na :numref:`fig_areagauss2`, temos:

    .. math::
       2\cdot A  =\frac{26,2}{7,5}\,\frac{9,8}{22,9}\,\frac{24,5}{67,1}\,\frac{58,9}{46,3}\,\frac{40,7}{14,2}\,\frac{26,2}{7,5} \\

    .. math::
       2\cdot A  =& (7,5\cdot 9,8+22,9\cdot 24,5+ \cdots+14,2\cdot 26,2)-\\
       &(26,2\cdot22,9+9,8\cdot67,1+\cdots +40,7\cdot7,5)

    .. math::
       A & =\frac{1}{2}\left|6\,843,2 - 3\,533,5 \right|\\
       A & = 1\,654,8\,\text{m}^2

----

.. admonition:: Sugestão de aula prática

   *Objetivo*: utilizar a ferramenta **Cad** para fins de desenho de planta topográfica.

   Serão apresentadas algumas funções básicas, necessárias para o desenho da planta.

   Como roteiro:

   - apresentação geral do *Cad* utilizado: janelas de funções; principais ícones de funções; área de desenho; coordenadas retangulares; a
     área de comando, etc;
   - apresentação de funções, como: *zoom*, *line*, *pline*, *area*, *dimaligned* e *text*;
   - como alterar as propriedades dos objetos do desenho.

   Como exemplo de aplicação: considere a poligonal do exercício 5, fazer o desenho,
   cotar, determinar a área e o perímetro.

Exercícios
==========

:exem:`1)`  A distância entre duas paredes de um apartamento
é de :math:`12,32\,\text{m}`. No desenho da planta do apartamento, estas duas paredes
estão separadas por :math:`4,2\,\text{cm}`. Qual a escala da planta?

:exem:`Resp.:`  :math:`E=1:293`.

----

:exem:`2)`  Um galpão, visto em uma planta topográfica, tem a forma de um trapézio, com dimensões:
bases de :math:`30\,\text{cm}` e :math:`25\,\text{cm}` e, altura de :math:`27\,\text{cm}`.
Sabendo que a escala é de :math:`1:200`, qual a área do galpão em :math:`\,\text{m}^2`?

:exem:`Resp.:`  Área de :math:`2\,970\,{m}^2`.

----

:exem:`3)` Com a finalidade de determinar uma área de forma circular em uma planta topográfica,
mediu-se, com uma régua, o seu  diâmetro, obtendo-se a medida de :math:`25\,\text{cm}`.
A escala desta planta é de :math:`1:4\,000`. Pergunda-se: qual é esta respectiva área, em ha, no terreno?

:exem:`Resp.:`  Área de :math:`78,54\,\text{ha}`.

----

:exem:`4)` Calcular a área total da poligonal *ABCDEFGKH*
da :numref:`fig_figuraselementares`?

:exem:`Resp.:` Área de :math:`6\,026,0` :math:`\,\text{m}^{2}`.

----

:exem:`5)` Seguem as coordenadas
em metros dos vértices de uma área levantada: **1**:math:`(0,\,19)`,
**2**:math:`(4,\,29)`,  **3**:math:`(34,\,44)`,  **4**:math:`(64,\,29)`,  **5**:math:`(71,\,11)`,
**6**:math:`(49,\,2)`,  **7**:math:`(34,\,10)`,  **8**:math:`(29,\,11)`,  **9**:math:`(14,\,0)`.
Calcule a área pela fórmula de Gauss nas unidade de :math:`\text{m}^2` e ha.
Represente graficamente.

:exem:`Resp.:` área = :math:`1\,925\,\text{m}^2`; área = :math:`0,1925\,\text{ha}`.

.. figure:: /images/capitulo2/exe_calculodearea26.png
   :scale: 35 %
   :alt: exe_calculodearea26.png
   :align: center

----

:exem:`6)` Seguem as coordenadas em metros dos vértices de uma área levantada: **A**:math:`(0,\,0)`,
**B**:math:`(5,\,-19)`, **C**:math:`(23,\,-10)`, **D**:math:`(29,\,4)`,
**E**:math:`(13,\,11)`, com a representação gráfica na Figura ao lado.

a) Calcule a área pela fórmula de Gauss nas unidade de :math:`\text{m}^2` e ha. Represente graficamente.

b) Qual a distância entre os pontos **B** e **C**?

c) Qual a distância entre os pontos **C** e **D**?

:exem:`Resp.:`  a) :math:`518` :math:`\text{m}^2` e :math:`0,0518\,\text{ha}`;
b) :math:`20,125\,\text{m}`; c) :math:`15,232\,\text{m}`.

----

:exem:`7)` Sendo as coordenadas de uma poligonal: **a**:math:`(0,\,0)`,
**b**:math:`(32,\,34)`, **c**:math:`(23,\,9)`, **d**:math:`(54,\,35)`, **e**:math:`(19,\,-27)`,
**f**:math:`(16,\,-8)`. Estando elas em metros, pede-se:

a) Calcule a área pela fórmula de gauss nas unidade de :math:`\text{m}^2` e ha.

b) Represente graficamente.

c) Qual a distância entre os pontos **a** e **b**?

d) Qual a distância entre os pontos **e** e **f**?

:exem:`Resp.:`  a) :math:`1\,009\,\text{m}^2`; :math:`0,1009\,\text{ha}`; c) :math:`46,690\,\text{m}`;
d) :math:`19,235\,\text{m}`.

----

:exem:`8)` Na Figura abaixo é apresentado um transecto uniforme e os dados de
distância. Calcule a área em alqueire geométrico.

.. figure:: /images/capitulo2/exe_calculodearea28.png
   :scale: 35 %
   :alt: exe_calculodearea28.png
   :align: center


:exem:`Resp.:`  :math:`0,06818` alqueire.

----

:exem:`9)` Na Figura abaixo são apresentados os dados um levantamento de um transecto
não uniforme, sendo as medidas na unidade de metros. Calcule a área
em hectare.

.. figure:: /images/capitulo2/exe_calculodearea29.png
   :scale: 35 %
   :alt: exe_calculodearea28.png
   :align: center

:exem:`Resp.:`  :math:`0,6723\,\text{ha}`.

----

:exem:`10)` Desenhar uma escala gráfica de :math:`1:2\,000`,
com :math:`10\,\text{cm}` de tamanho.

:exem:`11)` Desenhar uma escala gráfica de :math:`1:500`, com :math:`8\,\text{cm}` de
tamanho.

----
