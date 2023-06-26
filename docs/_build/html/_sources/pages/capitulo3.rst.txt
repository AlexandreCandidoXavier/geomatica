.. raw:: html

    <style> .exem {color:blue; font-weight: bold} </style>

.. role:: exem

.. raw:: html

    <style> .solucao {font-weight: bold} </style>

.. role:: solucao

.. raw:: html

    <style> .blue {color:blue} </style>

.. role:: blue

.. _RST Capitulo 3:

Capitulo 3: Introdução a geodésia e cartografia
***********************************************

Serão abordados neste capítulo os conceitos básicos da geodésia como:
forma e dimensão da terra; modelos matemáticos que se aproximam da
forma da terra (elipsóide); o sistema de referência geodésico adotado
pelo Brasil. Quanto a cartografia, será definida o que é uma projeção
cartográfica mostrando alguns exemplos, como o sistema projeção e
coordenadas UTM, que é uma das projeções mais utilizada no Brasil.

Geóide
======

A terra vista do espaço se aproxima de uma esfera. Todavia, quanto
mais nos aproximamos dela, mais ela se torna desuniforme, sendo formada
na sua superfície, pelos continentes e mares. Nos continentes tem-se
diferentes formas de relevo, das mais planos aos mais acidentados.
Observa-se também que a superfície da terra não é estática, mas sim
dinâmica. Há um movimento da crosta terrestre, devido às forças tectônicas.
Por exemplo, no terremoto no Chile no ano de 2010, foi estimada que
a cidade de Conception moveu :math:`3,02` metros para a direção oeste :cite:p:`movimentochile`.
Já os mares apresentam-se em constante movimento, pois são sujeitos
a diversas forças, como: a centrífuga, devido a rotação da terra;
a gravitacional da terra, lua, sol; dos ventos, etc.

A geodésia é a ciência que tem como objetivo estudar a forma da terra,
sendo esta forma denominada de geóide. O geóide consiste na superfície
equipotencial do campo gravitacional da terra que melhor se ajusta
ao nível médio dos mares (NMM) e seu prolongamento sobre os continente.
Para a definição do NMM, são desconsideradas as forças do vento e
as gravitacionais da lua, sol, etc. Desta forma, NMM de um longo período,
estará sujeito apenas as forças exercidas pela massa e pelo movimento
de rotação da terra, respectivamente, os potenciais gravitacional
e centrífugo da terra. A soma dos potenciais gravitacional e centrífugo
da terra resultam na atração que sentimos sobre a terra, sendo que
a direção desta força é denominada de vertical do lugar, sendo ele
único em cada posição do Geóide. A vertical do lugar pode ser obtida
por um fio de prumo (edaço de linha ou náilon com um peso em uma extremidade).
Nos equipamentos topográficos como o teodolito, a estação total, e
o dos receptores GNSS, um dos seus eixos conterá a vertical do lugar,
ou seja, estarão perpendiculares à superfície de nível local.

Do que foi dito acima, como a densidade da massa da terra é variável espacialmente,
o geóide resulta em uma forma ondulada. Uma forma de apresentar o
geóide é por meio da ondulação geoidal :math:`(N)`. Na Figura ao lado é
apresentado a ondulação geoidal da terra dado pelo EGM96 (*Earth
Gravitational Model* 1996 [#f1]_ :cite:p:`lemoine1998development`. A ondulação geoidal apresenta
a distância vertical entre o geóide e o elipsóide (ver seção :any:`Nivelamento GNSS`,
:any:`fig_geoide`),
figura matemática que se aproxima a forma da terra, neste caso o WGS84.
Valores positivos indicam que o geóide está acima do elipóide WGS84,
e negativos, abaixo. Percebe-se que a variação da altura geoidal é
de :math:`-107\,\text{m}` a :math:`85\,\text{m}`, ou seja, algumas áreas estão mais próximas do
centro do elipsóide e outras mais distantes, o que resulta numa forma
ondulada. Vale salientar ainda que, além do geóide ser ondulado, ele
é achatado na direção dos polos. A medida do raio da terra no equador
é aproximadamente :math:`21\,\text{km}` maior que o raio na linha que contém o eixo
de rotação da terra.

.. figure:: /images/capitulo3/geoide.png
   :scale: 60 %
   :alt: geoide.png
   :align: center

   Modelo do geoide EGM96 :cite:p:`lemoine1998development`

.. admonition:: Verificando diferentes modelos de Geóide.

   Consultar: http://icgem.gfz-potsdam.de/vis3d/longtime

.. _Elipsóide:

Elipsóide
=========

O que os cientistas fazem então para realizar mapeamentos, definir
fronteiras etc, uma vez que a forma da terra tem a forma irregular?
Fazem uma aproximação do geóide à figura matemática denominada de
elipsóide de revolução, ou simplesmente elipsóide. O elipsóide nada
mais é que uma elipse rotacionando em torno de um eixo (:numref:`figelipsoide`).
O maior semieixo do elipsóide é denominado por :math:`a`, e o menor por
:math:`b`. Geralmente, na definição dos parâmetros do elipsóide, ao invés
de apresentar os dois raios, são apresentados, o raio do semieixo
:math:`a` e o achatamento,
:math:`f`, definido pela Equação :eq:`eq:achatamento`. O parâmetro :math:`f`
é preferível pois é utilizado nas equações para cálculo das, coordenadas
sobre o elipsóide e das projeções cartográficas. Nota-se que, se tivermos
quaisquer dois parâmetros do elipsóide, o terceiro poderá ser calculado
por meio da Equação :eq:`eq:achatamento`. Observando esta Equação,
se a terra tivesse a forma de uma esferoide, isto é :math:`a=b`,
:math:`f` seria zero, não teria achatamento. Como a terra é achatada nos
polos, :math:`a>b`, :math:`f` será sempre maior que zero e menor que um. Caso
trabalhando em pequenas escalas, pode-se considerar a terra um esferoide
:math:`a=b` ou :math:`f=0`.

.. math::
   f&=\frac{a-b}{a}\\
   f&=1-\frac{b}{a}
   :label: eq:achatamento

.. _figelipsoide:

.. figure:: /images/capitulo3/fig_elipsoide.png
   :scale: 40 %
   :alt: fig_elipsoide.png
   :align: center

   Apresentação de uma elipse e um elipsóide de revolução.

----

.. admonition:: :exem:`Exemplo 1` O elipsóide de referência utilizado pelo sistema norte-americano de posicionamento por satélite,
    o GPS, é denominado de WGS84, tendo como raios dos semieixos: :math:`a=6.378.137,0\,\text{m}`
    e :math:`b=6.356.752,31424\,\text{m}`. Calcule
    o achatamento deste elipsóide.

    :solucao:`Solução:`
    Por meio da Equação :eq:`eq:achatamento`, tem-se:

    .. math::
       f & =1-\frac{b}{a}\\
       & =1-\frac{6\,356\,752,31424}{6\,378\,137,0}\\
       & =0,003\,3528\,106\,647\\
       & =\frac{1}{298,257\,223\,563}.

    Então, :math:`f=0,003\,3528\,106\,647=\frac{1}{298,257\,223\,563}`,
    sendo a segunda forma, :math:`f=\frac{1}{298,257}`, com
    arredondamento, a mais utilizada.

----

Para a definição precisa do elipsóide, deve-se também considerar a
constante gravitacional (GM,
*Earth's Gravitational Constant*) e a velocidade
angular de rotação da terra :math:`(\omega)`. Por exemplo, para o WGS84,
:math:`GM=3.986.004,418\pm0,008\cdot 10^8\,\text{m}^3\,\text{s}^{-2}` e :math:`\omega=7292115\cdot10^{-11}\,
\text{rad}\,\text{s}^{-1}` :cite:p:`nima:2000`.

Ao longo do tempo, vários elipsoides foram definidos, pois as medidas
da dimensão terra eram aperfeiçoadas. Os elipsoides podem ser utilizados
em nível local ou mundial, onde se estabelecem medidas de :math:`a` e :math:`f`,
de forma a melhor se ajustar ao geóide local ou mundial, respectivamente.
Na Tabela abaixo são apresentados alguns parâmetros
de elipsoides e o local em que ele é ou foi utilizado
:cite:p:`smith1997introduction`.

.. table:: Exemplo dos parâmetros de elipsoides.
    :widths: 1 1 1 1
    :header-alignment: cccc
    :column-alignment: left right right right

    ======================================= ======================= ========================= ========================
    Elipsóide                               :math:`a` (m)           :math:`f^{-1}`            Local de utilização
    ======================================= ======================= ========================= ========================
    Everest 1830                            :math:`6\,377\,276,345` :math:`300,8017`          Índia, Pakistão
    Hayford 1924                            :math:`6\,378\,388`     :math:`297`               Europa e Brasil
    Krassovskiy 1942                        :math:`6\,378\,245`     :math:`298,3`             USSR
    Elip. Inter. de 1967                    :math:`6\,378\,160`     :math:`298,25`            América do Sul
    *Geodetic Reference System* (GRS 1980)  :math:`6\,378\,137`     :math:`298,257\,222\,101` Mundial
    *World Geodetic System*       (WGS84)   :math:`6\,378\,137`     :math:`298,257\,223\,563` Mundial
    ======================================= ======================= ========================= ========================

.. _Coordenada geodésica:

Coordenada geodésica
====================

Para a determinação da latitude  (:math:`\phi`, leia-se *fi*) e da longitude (:math:`\lambda`, leia-se *lambda*) geodésica
de um ponto :math:`P` qualquer, é considerada a normal :math:`P` ao elipsóide
(:math:`P'`, :numref:`fig_coordenadasretangulares`) e:

- sua projeção com o plano do Equador, para a latitude geodésica :math:`(\phi_{p})`;
- o meridiano de Greenwich (Grw) e o meridiano que passa por :math:`P'`, para a longitude geodésica :math:`(\phi_{P})` e;
- a distância entre :math:`P` e :math:`P'`, altura geodésica :math:`(h_{P}`, também
  denominada de geométrica).

O plano do Equador é o plano perpendicular ao semieixo menor, encontram-se
no centro do elipsóide. Um meridiano é uma seção elíptica gerada
no elipsóide pelo plano definido pelo semieixo menor e o ponto em
questão no elipsóide. A latitude geodésica de :math:`P` é o ângulo
entre a normal e o plano do equador :math:`(\phi_{p})`. A longitude geodésica
de :math:`P` :math:`(\lambda_{p})` é o ângulo diedro dos planos que contem
o meridiano de :math:`P'` e o Grw.

A latitude no equador é de :math:`0^{\circ}` e varia até :math:`-90^{\circ}`
ou :math:`+90^{\circ}`. Pode-se ao invés do sinal, :math:`+` ou :math:`-` , considerar o hemisfério
Sul (S) e Norte (N), por exemplo, :math:`22^{\circ}` S ou :math:`45^{\circ}` N, respectivamente, para o Polo Sul e Norte. A variação da longitude
é de :math:`0^{\circ}` a :math:`-180^{\circ}`, quando o meridiano
do ponto se encontra à esquerda de Grw, e de :math:`0^{\circ}` a :math:`+180^{\circ}`
quando o ponto se encontrar a sua direita. Pode-se ao invés do sinal, :math:`+` ou :math:`-`, considerar se o meridiano
encontra-se a direita (Este, E) ou a oeste (West, W) de Grw, por exemplo,
:math:`120^{\circ}` E ou :math:`45^{\circ}`W.`.

As coordenadas calculadas pelos receptores GNSS são geodésicas, logo
relacionada a um determinado elipsóide. Fato que deve-se estar atento,
para não cometer erros grosseiros de interpretação das informações
GNSS. Por exemplo, a elevação apresentada pelos receptores, é em relação
ao elipsóide e não em relação ao Geóide. Normalmente, em engenharia,
o interesse é com a elevação em relação ao geóide.

.. _fig_coordenadasretangulares:

.. figure:: /images/capitulo3/fig_coordenadasretangulares.png
   :scale: 40 %
   :alt: fig_coordenadasretangulares.png
   :align: center

   Variáveis necessárias para cálculo das coordenadas retangulares :math:`(x,y,z)`
   de um ponto :math:`P` a partir das coordenadas geodésicas :math:`(\phi,\lambda)`
   e vice-versa.

Coordenada geodésica cartesiana
===============================

Um outro meio de estabelecer a localização espacial de um ponto, por
exemplo o :math:`P`, a um determinado elipsóide, é por meio de sua coordenada
geodésica cartesiana (:math:`x_{P},\,y_{P},\,z_{P}`), também denominado
de sistema de coordenada geocêntrica.
Este é o sistema onde primeiramente a coordenada de um ponto é determinada
pelos receptores GNSS. As coordenadas geodésicas retangulares também
são utilizadas para efetuar transformação de coordenadas entre elipsoides.

Definiremos primeiro a origem do sistema e os eixos-:math:`x`, -:math:`y` e
-:math:`z`, sendo: a origem, o centro do elipsóide; o eixo-:math:`z` é aquele
que coincide com o semieixo menor do elipsóide, eixo de rotação; o
eixo-:math:`x` é aquele dado pela interseção do plano do Equador com o
meridiano de Grw; e o eixo-:math:`y` formando um diedro com os outros eixos
(:numref:`fig_coordenadasretangulares`). Quando as coordenadas
Geodésicas são conhecidas, utilizam-se Equações :eq:`eq_cart_x` a :eq:`eq_grande_normal`
para convertê-las retangulares.

.. math::
   x =\left(N+h\right)\cos\phi\cos\lambda\\
   :label: eq_cart_x

.. math::
   y =\left(N+h\right)\cos\phi\sin\lambda\\
   :label: eq_cart_y

.. math::
   z = \left({\displaystyle \frac{b^{2}}{a^{2}}N+h}\right)\sin\phi
   :label: eq_cart_z


em que: :math:`N` é denominado de grande normal, correspondendo
ao comprimento da vertical que passa por :math:`P'` ao eixo-z (:numref:`fig_coordenadasretangulares`)
dado por:

.. math::
   N =\frac{a^{2}}{\sqrt{a^{2}\cos^{2}\phi+b^{2}\sin^{2}\phi}}
   :label: eq_grande_normal

----

.. admonition:: :exem:`Exemplo 2` A latitude, longitude
    e altitude geodésica de um ponto :math:`P` valem: :math:`\phi=-22^\circ13'21,1337''`,
    :math:`\lambda=-41^\circ47'29,8921''` e
    :math:`h=272,32\,\mathrm{m}`. Considerando elipsóide WGS84, tendo como
    raios dos semieixos: :math:`a=6\,378\,137,0\,\text{m}` e :math:`b=6\,356\,752,3\,\text{m}`,
    calcule as coordenadas retangulares.

    :solucao:`Solução:`
    Substituindo os valores nas Equações :eq:`eq_cart_x`
    a :eq:`eq_grande_normal`, tem-se:

    .. math::
       N & =\frac{6\,378\,137^2}{\sqrt{6\,378\,137^2\cos^2\left(-22^\circ13'21,1337''\right)+6\,356\,752,3^2\sin^2\left(-22^\circ13'21,1337''\right)}}\\
       N & =6\,381\,192,9127\,\text{m}

    .. math::
       x & =(6\,381\,192,9127+272,32\cos\left(-22^\circ13'21,1337''\right)\cos\left(-41^\circ47'29,8921''\right)\\
       x & =4\,404\,445,8857\,\text{m}

    .. math::
       y & =(6\,381\,192,9127+272,32)\cos\left(-22^\circ13'21,1337''\right)\sin\left(-41^\circ47'29,8921''\right)\\
       y & =-3\,936\,872,4167\,\text{m}

    .. math::
       z & =\left(\frac{6\,356\,752,3^2}{6\,378\,137^2}6\,381\,192,9127+272,32\right)\sin(-22^\circ13'21,1337'')\\
       z & =2\,397\,345,4965\,\text{m}.

Para a solução inversa, a partir das coordenadas geodésicas retangulares,
calcular as coordenadas geodésicas :math:`\left(\phi,\,\lambda,\,h\right)`,
diferentes metodologias podem ser utilizadas, sendo alguns métodos
apresentados em :cite:p:`WOLF` e :cite:p:`Hofmann2008`. Aqui
será apresentada uma metodologia em que não há necessidade de iterações
(Equações eq:`cart_to_geo_lat` a :eq:`eq:cart_to_geo_h`),
ou seja, é simples, uma vez que, com a aplicação das equações, o resultado
é obtido diretamente.

.. math::
   \phi ={\displaystyle \arctan\frac{z+e'^{2}b\sin^3\theta}{p-e^2a\cos^3\theta}}
   :label: eq:cart_to_geo_lat

.. math::
   \lambda  ={\displaystyle \arctan\frac{y}{x}}\label{eq:cart_to_geo_lon}
   :label: eq:cart_to_geo_lon

.. math::
   h  ={\displaystyle \frac{p}{\cos\phi}-N}
   :label: eq:cart_to_geo_h

em que:

.. math::
   e^{2}  ={\displaystyle \frac{a^2-b^2}{a^2}}
   :label: eq:ecentricidade_primeira

.. math::
   e'^{2} ={\displaystyle \frac{a^2-b^2}{b^2}}
   :label: eq:ecentricidade_segunda

.. math::
   p ={\displaystyle \sqrt{x^2+y^2}}
   :label: eq:cart_to_geo_aux_p

.. math::
   \theta ={\displaystyle \arctan\frac{z\cdot a}{p\cdot b}}
   :label: eq:cart_to_geo_aux

Os termos :math:`e^{2}\text{ e }e'^{2}` são denominados, respectivamente
de primeira e segunda excentricidade. O valor de :math:`p` corresponde
ao raio no paralelo analisado.

.. admonition:: :exem:`Exemplo 3` A partir das coordenadas
    retangulares do Exemplo 2, referentes
    ao sistema WGS84, encontrar as coordenadas geodésicas :math:`\phi,\text{ }\lambda\text{ e }h`.

    :solucao:`Solução:` Sabendo-se que :math:`a=6\,378\,137,0\,\text{m}` e :math:`b=6\,356\,752,3\,\text{m}`
    e substituindo :math:`{x=4\,404\,445,8857\text{ m}}`, :math:`{y=-3\,936\,872,4167\,\text{m}}`
    e :math:`{z=-2\,397\,345,4965\,\text{m}}` nas Equações :eq:`eq:ecentricidade_primeira`
    a :eq:`eq:cart_to_geo_aux` para o cálculo das variáveis auxiliares:

    .. math::
       e^{2} & =\frac{6\,378\,137^2-6\,356\,752,3^2}{6\,378\,137^2}\\
       e^{2} &=0,006\,694\,384\,442.

    .. math::
       e'^{2} & =\frac{6\,378\,137,0^2-6\,356\,752,3^2}{6\,356\,752,3^2}\\
       e'^{2} &=0,006\,739\,501\,254.

    .. math::
       p & =\sqrt{4\,404\,445,8857^2+-3\,936\,872,4167^2}\\
       p &=5\,907\,462,05962.

    .. math::
       \theta & =\arctan\frac{-2\,397\,345,4965\cdot6\,378\,137,0}{5\,907\,462,059620\cdot6\,356\,752,3}\\
       \theta &=-22^{\circ}9'18,9119''.


    Agora, aplicando as Equações :eq:`eq:cart_to_geo_lat`
    a :eq:`eq:cart_to_geo_h` e utilizando o valor de :math:`N` já calculado
    no Exemplo 2 tem-se:

    .. math::
       \phi & ={\displaystyle \arctan\frac{-2\,397\,345,4965+0,006\,739\,501\,254\cdot6\,356\,752,3\sin^3\left(-22^\circ9'18,9119''\right)}{5\,907\,462,059620-0,006\,694\,384\,442\cdot6\,378\,137\cos^3\left(-22^\circ9'18,9119''\right)}}\\
       \phi & =-22^\circ13'21,1337''\\
       \lambda & ={\displaystyle \arctan\frac{-3\,936\,872,4167}{4\,404\,445,8857}}=-41^\circ47'29,8921''\\
       h & ={\displaystyle \frac{5\,907\,462,05962}{\cos\left(-22^\circ13'21,1337''\right)}-6\,381\,192,9127=272,32\text{ m }}

    Como era esperado, o resultado é o mesmo de :math:`\phi`, :math:`\lambda`
    e :math:`h` do Exemplo 2.

-----

Coordenada astronômica
======================

Quando consideramos a vertical do ponto :math:`P`, que pode ser dada pela
direção do fio de prumo, que tem a direção do centro de massa da terra,
tem-se como a latitude astronômica de :math:`P`, o ângulo medido entre
a vertical em :math:`P` o plano do equador. Já a longitude astronômica
é o ângulo entre o plano meridiano local e o meridiano de Grw. 

Sistema de geodésico brasileiro
===============================

O objetivo de um sistema de referência geodésico é o de disponibilizar,
implantar e manter uma infraestrutura básica para levantamento de
posição de pontos na superfície da terra. Os sistemas de referências
são aprimorados continuamente, de acordo com o estado da arte na época
de sua definição. Por exemplo, atualmente para a definição da rede
planimétrica, utiliza-se a tecnologia de posicionamento por satélite
e, em épocas passadas, utilizava-se equipamentos topográficos convencionais,
como pouca precisão. O Sistema Geodésico Brasileiro (SGB) é composto
pelas redes planimétricas, altimétrica e gravitacional.

A rede gravitacional é aquela que trata na determinação da força da
gravidade da terra, sendo o resultado pela atração da massa e da força
centrífuga em um determinado ponto. Tais resultados são empregados
por exemplo, na determinação da ondulação geoidal, no estudo das correntes
oceânicas e na determinação das altitudes ortométricas. Podem-se citar
como métodos empregados na sua determinação, o método pendular, a
avaliação da queda livre de um corpo e, o mais usualmente utilizado,
o Gravímetro. Outra forma de obter a gravidade da terra é utilizando-se
satélites artificiais, podendo-se citar o par de satélites GRACE (*Gravity
Recovery And Climate Experiment*), lançados em 2002. A determinação
desta quantidade foge ao escopo introdutório deste livro e, para os
que tiverem mais interesse neste tema, pode-se consultar :cite:p:`gemael` e
:cite:p:`citeulike:3786862`.

Para a definição das redes planimétricas e altimétricas são necessárias
as definições do Datum horizontal e o do Datum vertical,
respectivamente, e a materialização das posições. O Datum horizontal
é utilizado para as posições em latitude (:math:`\phi`), longitude (:math:`\lambda`)
e altitude geodésica (:math:`h`, altitude em relação ao elipsóide) e, coordenadas
cartográficas. Enquanto o Datum altimétrico é utilizado para definição
de altitude ortométrica (:math:`H`, altitude em relação ao geóide). A materialização
de posições, é realizada por meio marcos, ao longo do estado Brasileiro
e em sua fronteira. A responsabilidade pelo SGB no Brasil fica a cargo
do Instituto Brasileiro de Geografia e Estatística (IBGE).

.. _Datum horizontal:

Datum horizontal
----------------

Um Datum horizontal é constituído de um elipsóide mais uma série de
parâmetros que o posiciona à terra, como, por exemplo, a latitude
e a longitude do ponto inicial e o azimute de um alinhamento. A posição
do elipsóide em relação à terra pode ser topocêntrico, fixado a um
ponto na superfície (Datum topocêntrico) ou geocêntrico, o centro
do elipsóide coincide com centro de massa da terra (Datum geocêntrico).
Um exemplo gráfico do ajuste de um Datum horizontal topocêntrico (Datum
1) e geocêntrico (Datum 2), ao geóide, é apresentado na :numref:`fig_elipsoide_geoides.png`.
O Datum topocêntrico só se ajusta bem ao Geóide em
uma pequena porção do Geóide,
parte inferior esquerda, enquanto no restante do Geóide não há um
bom ajuste. Nota-se esta falta de ajuste, principalmente, na porção
superior direita do Geóide, em que o Datum 1 passa bem acima. Já,
o Datum 2, geocêntrico, tem seu centro C1 que coincide com centro
de massa da terra, tendo os seus parâmetros :math:`a` e :math:`f` definidos
de forma a minimizar os desvios dele com o Geóide como um todo, não
em apenas uma porção.

.. _fig_elipsoide_geoides.png:

.. figure:: /images/capitulo3/fig_elipsoide_geoides.png
   :scale: 40 %
   :alt: fig_elipsoide_geoides.png
   :align: center

   Datum horizontal do tipo topocêntrico e geocêntrico.

Como dito anteriormente, o SGB é dinâmico, o Brasil já teve o Datum
horizontal denominado de Córrego Alegre, que tinha como figura geométrica
da terra o elipsóide Hayford 1924 (Tabela 2).
Atualmente o Brasil adota dois Data [#f2]_,
o SAD69 (SAD é a abreviação de *South American Datum*, Datum Sul Americano)
e o SIRGA2000 (SIRGAS é a abreviação de **Sistema de Referência Geocêntrico para
as Américas**) . As características do SAD69 e do SISGAS2000 :cite:p:`IBGE:sgb` são
apresentadas abaixo:

Para o Datum SAD69:

- Figura geométrica para a Terra: Elipsóide Internacional de 1967; Semi
  eixo maior :math:`a=6.378.160\,\text{m}`; :math:`f=1/298,2`.
- Parâmetros referentes ao posicionamento espacial do elipsóide: Orientação
  geocêntrica com eixo de rotação paralelo ao eixo de rotação da Terra;
  plano meridiano origem paralelo ao plano meridiano de Greenwich;
- Orientação topocêntrica, com: Ponto Datum = Vértice de triangulação
  Chuá; :math:`\phi_{\mathrm{G}}=19^\circ45'41,6527''\,\text{S}`;
  :math:`\lambda_{\text{G}}=48^\circ06'04,0639''\,\text{W}`;
  :math:`\phi_{\text{A}}=19^\circ45'41,34''\,\text{S}`; :math:`\lambda_{\text{A}}=48^\circ06'07,80''\,\text{W}`;
  :math:`A_{\text{G}}=271^\circ30'04,05''` SWNE para VT-Uberaba;
  :math:`N=0,0\,\text{m.}`

em que: 'G' e 'A' referem-se, respectivamente, às medidas geodésicas
e astronômicas; :math:`N` é denominado de ondulação geoidal, diferença
entre altura do elipsóide e do geóide na posição analisada. A :math:`N`
pode ser obtido por meio do
programa `HgeoHNOR2020 <https://www.ibge.gov.br/geociencias/informacoes-sobre-posicionamento-geodesico/servicos-para-posicionamento-geodesico/31283-hgeohnor2020-modeloconversaoaltitudesgeometricasgnss-datumverticalsgb.html?edicao=31284&t=processar-os-dados>`_
, conhecendo as coordenadas do ponto em questão. Utilização do **HgeoHNOR2020**
para fins de altimetria serão apresentadas na seção :any:`Nivelamento GNSS`.

Para o SIRGAS2000:

- Figura geométrica para a Terra: Elipsóide do Sistema Geodésico de
  Referência de 1980 (*Geodetic Reference System* 1980 -
  GRS80) Semieixo maior :math:`{a=\text{6.378.137 m}}`, :math:`f=1/298,257\,222\,101`;
- Origem: Centro de massa da Terra;
- Orientação: Polos e meridiano de referência consistentes em :math:`\pm0,005''`
  com as direções definidas pelo BIH (*Bureau International de
  l'Heure*), em :math:`1984,0`.

Na Figura :numref:`fig_refer_horizontal` são apresentadas as posições dos marcos geodésicos que fazem parte
do SGB. As técnicas nas quais os pontos foram levantados também são
apresentadas. Faz parte da rede horizontal um total de :math:`8.226`, sendo
:math:`1.008`, :math:`2.443`, :math:`3.642` e :math:`1.133` pontos referentes às técnicas, respectivamente,
doppler, GPS, vértice de triangulação e estações de poligonal. Como
é observado na :numref:`fig_refer_horizontal`, algumas observações
são realizadas fora do continente, em ilhas, por exemplo em Fernando
de Noronha.

.. _fig_refer_horizontal:

.. figure:: /images/capitulo3/fig_refer_horizontal.png
   :scale: 35 %
   :alt: fig_elipsoide_geoides.png
   :align: center

   Posição das referencias horizontais e os métodos em que as posições
   foram estimadas. Dados obtidos no IBGE em 7 de maio de 2012.

.. _Datum Vertical:

Datum vertical
--------------

São duas as referencias de altitude adotado pelo Brasil, que coincide
com nível médio dos mares (NMM), sendo: *i*)
o **Datum de Imbituba**, definido de observações
da maré em Imbituba, Santa Catarina entre os anos de 1949 e 1957, na Figura ao lado as referências de nível em vermelho e;
e *ii*) o **Datum de Santana**, definido de observações da maré no estado do Amapá
entre os anos de 1957 a 1958, as referências de nível cor verde.
O **Datum de Santana** deu-se devido a
impossibilidade de estender a rede de Imbituba à região do Amapá.
Na Figura ao lado são apresentadas as posições da referência
altimétrica do SGB, sendo um total de :math:`9.397` referências de nível,
:math:`475` e :math:`8.922`, respectivamente, referentes ao Datum de Santana e ao
Datum de Imbituba (:numref:`fig_refer_vertical`).


.. _fig_refer_vertical:

.. figure:: /images/capitulo3/fig_refer_vertical.png
   :scale: 35 %
   :alt: fig_refer_vertical.png
   :align: center

   Posições das referencias horizontais das referências de nível dos Datum de Imbituba e Santana.


.. admonition:: Sistema Geodésico Brasileiro na internet

   Consultar: http://www.bdg.ibge.gov.br/appbdg/

Projeção cartográfica
=====================

Projeções cartográficas são funções matemáticas que transformam as
coordenadas geodésicas :math:`(\phi,\,\lambda)` para coordenadas planas
:math:`(x,\,y)`, isto é, :math:`x=f(\phi,\,\lambda)` e :math:`y=f(\phi,\,\lambda)`.
Podem-se classificar as projeções cartográficas de acordo com:


- a superfície utilizada na projeção: **plana** (:numref:`proj_tipos` a, d, g),  **cilíndrica** (:numref:`proj_tipos` b, e, h)
  ou **cônica** (:numref:`proj_tipos` c, f, i). Na prática, a projeção é realizada analiticamente, ou seja, por meio
  de equações matemáticas, que são variantes destas formas geométricas;
- se é **tangente** ou **secante** (:numref:`proj_tipos_sec`);
- a posição da figura geométrica, por exemplo, caso a projeção seja
  cilíndrica tangente, ela é dita como sendo normal se o cilindro é
  tangente no equador (e.g. :numref:`proj_tipos` b); transversa,
  caso o cilindro seja tangente a um meridiano (e.g. :numref:`proj_tipos` e);
  e é oblíqua caso o cilindro seja tangente à qualquer seção normal
  que passa pelo ponto central (e.g. :numref:`proj_tipos` h).

.. _proj_tipos:

.. figure:: /images/capitulo3/proj_tipos.png
   :scale: 50 %
   :alt: proj_tipos.png
   :align: center

   Tipos de projeções.


.. _proj_tipos_sec:

.. figure:: /images/capitulo3/proj_tipos_sec.png
   :scale: 35 %
   :alt: proj_tipos_sec.png
   :align: center

   Projeções tipo secantes.


.. admonition:: Entendendo as projeções.

    .. raw:: html

        <div style="position: center; padding-bottom=75%; height:0; overflow: hidden; max-width: 100%; height:auto">
           <iframe width="735" height="480" src="https://www.youtube.com/embed/kIID5FDi2JQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>


Projeções plana, cilíndrica e cônica secantes
---------------------------------------------

Nenhum mapa pode ser ao mesmo tempo **igual área** e **conforme**.
Projeções que não são **igual área** nem *conforme* são
denominadas de **afiláticas**. Pode-se citar outros termos que
descrevem características especiais de projeções:

#. Escala: projeções que mantém a escala em uma ou mais linhas do mapa são denominadas de **equidistante**. Vale salientar que nenhuma projeção é capaz de manter a escala correta em todo mapa;
#. Direção: são mapas em que uma determinadas direção ou azimute são apresentadas corretamente. Por exemplo, se a direção do azimute é apresentada corretamente entre dois pontos, diz-se que a projeção é **azimutal**;


As deformações da projeção só serão visíveis para grandes áreas, como
para o mapa do Brasil. Para pequenas áreas, as distorções são de difícil
percepção visual. A seguir serão apresentadas algumas projeções abrangendo
toda, ou quase toda, a terra. Juntamente com o limite dos continentes,
serão apresentadas elipses, denominadas de **indicatrizes de
Tissot**, cujo objetivo é avaliar as distorções
da projeção. A indicatriz de Tissot é o resultado da projeção
da figura geométrica de um círculo no elipsóide de referência. Como
exemplos de interpretação para indicatriz de Tissot na projeção
pode-se citar: se a projeção é conforme, a elipse é um círculo e o
seu tamanho vai variar ao longo do mapa; se as elipses aparentam ter
a mesma área, variando a sua forma, temos uma projeção igual área;
se os semieixos da indicatriz de Tissot são distintos, demonstra a
distorção em escala e a deformação angular.

.. admonition:: Projeções e indicatriz de Tissot.

    ver páginas:

    - https://www.jasondavies.com/maps/transition/
    - https://mangomap.com/mango-chris/maps/58854/distance-on-a-map#
    - https://observablehq.com/@toja/tissots-indicatrix


**Projeção cônica de Albers (igual área)**

Um exemplo de projeção **igual área** é a projeção cônica de
Albers (:numref:`fig_AlbersEqualArea.png`). Como diz o nome da projeção,
ela é do tipo cônica, tendo os paralelos como arcos concêntricos e
espaçamento distinto. Já os meridianos tem espaçamento igual, cortando
os paralelos em ângulos retos. Nesta projeção a escala sofre deformação
ao longo da latitude e da longitude, de forma a manter **igual
área** ao longo do mapa. Ela é utilizada para regiões que tem extensões
na direção leste-oeste, como os Estados Unidos.

.. _fig_AlbersEqualArea.png:

.. figure:: /images/capitulo3/fig_AlbersEqualArea.png
   :scale: 35 %
   :alt: fig_AlbersEqualArea.png
   :align: center

   Projeção cônica de Albers (igual área).


As fórmulas para a projeção cônica de Albers para um esferoide :math:`(a=b)` são apresentadas nas Equações :eq:`eq:proj_albers_igualarea_x`
e :eq:`eq:proj_albers_igualarea_y`, para o modelo da terra sendo
um esferoide. Para o modelo da terra sendo um elipsóide, consultar
:cite:p:`snyder1987map`.

.. math::
   x  =\rho\sin\theta
   :label: eq:proj_albers_igualarea_x

.. math::
   y  =\rho_{0}-\rho\cos\theta
   :label: eq:proj_albers_igualarea_y


em que:

.. math::
   \rho                 & =\frac{1}{n}R\left(C-2n\sin\phi\right)^{1/2}\\
   \theta               & =n(\lambda-\lambda_{0})\\
   \rho_{0}             & =\frac{1}{n}\left(C-2n\sin\phi_{0}\right)^{1/2}\\
   C                    & =\cos^2\phi_{1}+2n\sin\phi_{1}\\
   n                    & =\frac{1}{2}\left(\sin\phi_{1}+\sin\phi_{2}\right)\\
   \phi_{0},\lambda_{0} & =\text{latitude e longitude para origem do sistema de coordenadas}\\
   \phi_{1},\phi_{2}    & =\text{paralelos padrão}



O eixo-:math:`y` coincide com o meridiano central :math:`(\lambda_{0})`. O eixo-:math:`x`
intercepta perpendicularmente em :math:`\phi_{0}`, aumentando para este.
Observe que :math:`n`, :math:`C` e :math:`\rho_{0}` são constantes e são calculados
uma única vez. As fórmulas inversas são:

.. math::
   \phi & =\arcsin\left(\frac{C-(\rho n)^2}{2n}\right)\\
   \lambda & =\lambda_{0}+\theta/n\label{eq:proj_albers_igualarea_inv_long}

em que:

.. math::
   \rho & =\left(x^2+\left(\rho_{0}-y\right)^2\right)^{1/2}\\
   \lambda & =\arctan\left(\frac{x}{\rho_{0}-y}\right)


**Projeção sinusoidal (igual área)**

Outro exemplo de projeção **igual área** é a Sinusoidal
(:numref:`SinusoidalqualArea.png`). O único meridiano que se apresenta
como uma linha reta é o meridiano central (:math:`\lambda_{0}`), os demais
tem forma sinusoidal com espaçamento constante. No meridiano central
a escala é verdadeira. Os paralelos tem espaçamento igual. O eixo-:math:`x`
coincide com a linha do Equador, enquanto o eixo-:math:`y` coincide com
o meridiano central. As equações para a projeção sinusoidal são simples.
Considerando a forma da terra como um esferoide, as coordenadas retangulares
da projeção Sinusoidal são:

.. math::
   x=(\lambda-\lambda_{0})\cos\phi
   :label: eq:proj_sinu_equi

.. math::
   y=\phi
   :label: eq:proj_sinu_equi_2


As coordenadas devem estar em radianos. As funções inversas
da projeção sinusoidal são:

.. math::
   \lambda=\frac{x}{\cos\phi}+\lambda_{0}
   :label: eq:proj_sinu_equi_inv
.. math::
   \phi=y
   :label: eq:proj_sinu_equi_inv2

.. _SinusoidalqualArea.png:

.. figure:: /images/capitulo3/SinusoidalqualArea.png
   :scale: 35 %
   :alt: SinusoidalqualArea.png
   :align: center

   Projeção sinusoidal (igual área).

----

.. admonition:: :exem:`Exemplo 4` Qual é a coordenada retângular
    de um ponto de latitude :math:`-21,4324^\circ` e longitude
    de :math:`-42,7912^\circ` considerando a projeção sendo sinusoidal
    com :math:`\lambda_{0}=0^\circ`.

    :solucao:`Solução:`  Considerando as Equações :eq:`eq:proj_sinu_equi` e :eq:`eq:proj_sinu_equi_2`,
    e observando que os ângulos devem estar em radianos tem-se:

    .. math::
       x & =(\lambda-\lambda_{0})\cos\phi\\
       x & =(-42,7912\cdot\pi/180)\cos(-21,4324\cdot\pi/180)\\
       x & =-\text{0,6952}.\\
       y & =\phi\\
       y & =-21,4324\cdot\pi/180\\
       y & =-0,3741.

----

**Projeção cônica de Lambert (conforme)**

A projeção cônica de Lambert **conforme** é apresentada na :numref:`LambertConformal`.
Ela é utilizado em nações que têm área predominantemente na direção
de leste-oeste, como os Estados Unidos. Pode-se citar ainda que: os
paralelos concêntricos e com espaçamento distinto, sendo mais próximo
do centro do mapa; os meridianos tem espaçamento igual, cortando os
paralelos em ângulos retos; a escala só é verdadeira ao longo dos
paralelos padrão; e no hemisfério sobre os paralelos padrão o polo
é um ponto, e no outro polo, infinito.

.. _LambertConformal:

.. figure:: /images/capitulo3/LambertConformal.png
   :scale: 35 %
   :alt: LambertConformal.png
   :align: center

   Projeção cônica de Lambert (conforme).


**Projeção Azimutal (equidistante)**

Na :numref:`AzimuthalEquidistant` é apresentada uma
projeção **equidistante**, do tipo **Azimutal**
(azimutal equidistante). Pode-se citar como alguns aspectos desta
projeção: as distâncias a partir do centro e ao longo do raio são
verdadeiras; o único ponto que não têm distorção é o central e nenhum
ponto tem área igual ou conforme; paralelos são círculos espaçados
em intervalos verdadeiros.

.. _AzimuthalEquidistant:

.. figure:: /images/capitulo3/AzimuthalEquidistant.png
   :scale: 35 %
   :alt: AzimuthalEquidistant.png
   :align: center

   Projeção Azimutal (equidistante).

A Equações para as coordenadas planas da projeção azimutal equidistante
são:

.. math::
   x =k'\cos\phi\sin(\lambda-\lambda_{0})\\
   :label: eq:proj_azi_equidis}

.. math::
   y =k'\left(\cos\phi_{1}\sin(\phi)-\sin\phi_{1}\cos\phi\cos(\lambda-\lambda_{0})\right)

em que:

.. math::
   k' =c/\sin
  :label: eq:proj_azi_equidis_k

.. math::
   \cos c =\sin\phi_{1}\sin(\phi)-\cos\phi_{1}\cos\phi\cos(\lambda-\lambda_{0})
   :label: eq:proj_azi_equidis_cosc


Sendo :math:`(\phi_{1},\lambda_{0})` são a latitude e a longitude do centro
da projeção e a origem. O eixo-:math:`y` coincide com o meridiano central,
crescendo ao norte e diminuindo ao sul. Se :math:`\cos c=1` na Equação :eq:`eq:proj_azi_equidis_cosc`,
ela é indeterminada, mas :math:`k'=1`, e :math:`x=y=0.` Se :math:`\cos c=-1` , o
ponto é oposto ao centro :math:`(-\phi_{1},\lambda_{0}\pm180^{\circ})`.
As funções inversas são:

.. math::
   \displaystyle \phi=\arcsin\left(\cos c\sin\phi_{1}+\left(\frac{y\sin c\cos\phi_{1}}{c}\right)\right),
   :label: eq:proj_azi_equidis_inv_lat

.. math::
   {\displaystyle \lambda=\lambda_{0}+\begin{cases}
   {\displaystyle \arctan\left(\frac{x\sin c}{\rho\cos\phi_{1}\cos c-y\sin\phi_{1}\sin c}\right)} & \text{se }\phi_{1}\neq\pm90^{\circ},\\
   {\displaystyle \arctan\left(\frac{x}{-y}\right)} & \text{se }\phi_{1}=90^\circ,\\
   {\displaystyle \arctan\left(\frac{x}{y}\right)} & \text{se }\phi_{1}=-90^\circ,
   \end{cases}}
   :label: eq:proj_azi_equidis_inv_long


em que: :math:`\rho=\left(x^2+y^2\right)^{1/2}` e :math:`c=\rho/R`.

.. _UTM:

Projeção Universal Transversa de Mercador (UTM)
-----------------------------------------------

Na projeção Universal Transversa de Mercador, *Transverse Mercator
Projection* (UTM), a terra,
entre as latitudes de :math:`84^\circ`N e :math:`80^\circ`S, é dividida
em 60 fusos\footnote{Pode-se denominar também de zonas.}, cada um
abrangendo :math:`6^\circ` de longitude, numeradas de 1 a 60, começando
a numeração em :math:`-180^\circ` e caminhando a contagem no sentido
leste. Denomina-se de meridiano central (MC) ao meridiano que divide
determinado fuso ao meio. Desta forma, por exemplo, o primeiro fuso
abrange a área entre os meridianos :math:`-180^\circ` a :math:`-144^\circ`
(ou, :math:`180^\circ` W a :math:`174^\circ` W), logo, o MC deste primeiro
fuso é igual a :math:`-177^\circ`. Já as letras do alfabeto identificam
a posição em latitude, em que cada letra
corresponde a uma variação de latitude de :math:`8^\circ`, com exceção
da banda de latitude X, que abrange :math:`12^\circ`. A combinação do
número do fuso com a letra da banda latitude define a zona do grid.
Como exemplo, é apresentada a zona
22J, correspondendo, aproximadamente, a região dos estados do Paraná,
Santa Catarina e Rio Grande do Sul. Esta combinação, de fuso com a
letra da banda de latitude, é sempre apresentado, quando utilizando,
por exemplo, receptores GNSS e o programa Google Earth, se o sistema
de coordenadas estiver configurado em UTM.

Para o mapeamento de áreas fora de :math:`84^\circ\text{N}`  e :math:`80^\circ\text{S}`,
região dos polos, é adotado uma outra projeção, *Universal
Polar Stereographic* (UPS).
Ela não será tratada aqui, todavia, maiores informações podem ser
encontradas em :cite:p:`snyder1987map`.

.. _utmzone:

.. figure:: /images/capitulo3/utmzone.png
   :scale: 35 %
   :alt: utmzone.png
   :align: center

   Fusos das coordenadas UTM.

O território Brasileiro está inserido ao longo de 8 fusos UTM, do
número :math:`18` ao :math:`25`, e das bandas de latitudes designadas pelas letras
de H à N (:numref:`utmzoneBR`). Para a grande maioria dos
estados, são necessários mais de um fuso para se trabalhar com as
coordenadas UTM. Por exemplo, para o estado do Amazonas será necessário
trabalhar com quatro fusos. Já o estado do Espírito Santo, encontra-se
inserido em um único fuso, o :math:`24`, cujos meridianos limites são :math:`42^{\circ}\text{W}`
e :math:`36^\circ\text{W}`  :math:`(\text{MC}=39^\circ\text{W})`. Este estado encontra-se
entre os paralelos :math:`24^\circ\text{S}` e :math:`16^\circ\text{S}`, letra de linha
da latitude 'K'. É por isto, que quando nos encontramos com um receptor
GNSS em qualquer posição no estado, ele mostrará, juntamente com as
coordenadas UTM do ponto, a informação '24K', referente ao fuso
e a linha de latitude onde o ponto se encontra. 

.. _utmzoneBR:

.. figure:: /images/capitulo3/utmzoneBR.png
   :scale: 50 %
   :alt: utmzoneBR.png
   :align: center

   Fusos das coordenadas UTM Brasil.

Agora vamos abordar as coordenadas UTM, onde, uma apresentação gráfica
delas, para um fuso, é apresentada na Figura ao lado.
A unidade das coordenadas UTM é o metro. Para as coordenadas UTM,
considere: o eixo-:math:`x` coincide com a linha do equador, e o :math:`\text{eixo-}y`
está a distância :math:`500.000` m do MC do fuso. Nas coordenadas sobre MC
é aplicado uma redução de escala de :math:`0,9996\,(k_{0})`, sendo que este
fator vai aumentando, na medida em que se afasta do MC, sendo :math:`k=1`
a aproximadamente :math:`180` km do MC. A partir dos :math:`180` km, a escala aumentada
:math:`(k>1)`.
Para o hemisfério Norte, a interseção do do eixo-:math:`x` com MC, tem
coordenada :math:`y=0\,\text{m}` e :math:`x=500.000\,\text{m}`. Já, para o hemisfério
Sul, a interseção do do eixo-:math:`x` com MC tem coordenada :math:`x=500.000\,\text{m}`,
todavia, a fim de evitar coordenada negativas, :math:`y=10.000.000\,\text{m}`.
Em ambos os hemisférios, as coordenadas :math:`x` e :math:`y` crescem na direção,
respectivamente, oeste-leste e sul-norte. Quando se trata de descrever
as coordenadas UTM, normatizou-se em designar as coordenadas :math:`x`,
por 'E', de Este, e :math:`y`, de 'N', de Norte.

.. _utmonezone.png:

.. figure:: /images/capitulo3/utmonezone.png
   :scale: 50 %
   :alt: utmonezone.png
   :align: center

   Esquema das coordenadas UTM para um fuso qualquer.

Na :numref:`utmzoneAlegreES`  é apresentado o limite do Espírito
Santo em coordenadas UTM. Todo o limite se encontra no fuso 24, com
MC de :math:`-39^{\circ}`, como já dito anteriormente. O estado encontra-se
à esquerda do MC do fuso, logo suas coordenadas E serão sempre menores
que 500.000\ m. No MC deste fuso é aplicada uma redução na escala
de :math:`0,9996\,(k_{0})`. É apresentada nesta Figura a linha em que não
há redução de escala :math:`(k=1)`, encontrando-se a aproximadamente
:math:`180\,\text{km}` de MC. Todos os pontos que encontram-se a direita desta linha
e a esquerda do MC terão a escala reduzida, :math:`k<1`. Já pontos que
se encontrarem à esquerda da linha :math:`k=1`, será aplicada uma ampliação
:math:`(k>1)`. A coordenada do município de Alegre, :math:`\text{E}=236.175\,\text{m}`
e :math:`\text{N}=7.701.983\,\text{m}`, de onde
pode-se concluir, por exemplo, que ele está :math:`263.825\,\text{m}` do MC :math:`(500.000-236.175)`
e a uma distância de :math:`2.298.017\,\text{m}` da linha do Equador
:math:`(10.000.000-7.701.983)`.


.. _utmzoneAlegreES:

.. figure:: /images/capitulo3/utmzoneAlegreES.png
   :scale: 50 %
   :alt: utmzoneAlegreES.png
   :align: center

   Esquema das coordenadas UTM para a cidade de Alegre-ES.

**Coordenadas geográficas para UTM**

Sendo conhecidas as coordenadas geodésicas, latitude (:math:`\phi`) e longitude
(:math:`\lambda`), de um ponto, seguem as fórmulas que são utilizadas para
cálculo das coordenadas UTM. Para se obter as coordenadas, a Este
soma-se :math:`500.000\,\text{m}` ao valor de :math:`x` (Equação :eq:`eq:utmx`) e, para
coordenada Norte no hemisfério sul, soma-se :math:`10.000.000\,\text{m}` a :math:`y`
(Equação :eq:`eq:utmy`).

.. math::
   x=k_{0}N\text{(}A+(1-T+C)A^{3}/6+(5-18T+T^{2}+72C-58e'^{2}\text{)}A^{5}/120
   :label: eq:utmx

.. math::
   y=k_{0}\text{(}M+N\tan\phi(A^{2}/2+(5-T+9C+4C^{2})A^{4}/24+\\
   (61-58T+T^{2}+600C-330e'^{2})A^{6}/720))
   :label: eq:utmy


.. math::
   k=k_{0}\text{(}1+(1+C)A^{2}/2+(5-4T+42C+13C^{2}-28e'^{2})A^{4}/24+\\
   (61-148T+16T^{2})A^{6}/270\text{)}


em que: :math:`k_{0}` é a escala no meridiano central, para projeção
UTM, :math:`k_{0}=0,9996`. A grande normal, :math:`N`, foi definida na
Equação :eq:`eq_grande_normal`, a segunda excentricidade, :math:`e'^2`,
na Equação :eq:`eq:ecentricidade_segunda`, para as demais variáveis
auxiliares:

.. math::
   T =\tan^{2}\phi
   :label: eq:utm_T

.. math::
   C =e'^{2}\cos^{2}\phi
   :label: eq:utm_C

.. math::
   A =(\lambda-\lambda_{0})\cos\phi
   :label: eq:utm_A

.. math::
   M=a((1-e^{2}/4-3e^{4}/64-5e^{6}/256-...)\phi-\\
   (3e^{2}/8+3e^{4}/32+45e^{6}/1024+...)\sin2\phi+\\
   (15e^{4}/256+45e^{6}/1024)\sin4\phi-\\
   (35e^{6}/3072+...)\sin6\phi+...)
   :label: eq:utm_M

com :math:`\phi` em radianos. :math:`M` é a distância ao longo do
meridiano central de :math:`\phi`, ao equador. A primeira excentricidade
:math:`e^{2}` foi definida na Equação :eq:`eq:ecentricidade_primeira`.
Caso as coordenadas geodésicas estejam em graus, o parâmetro :math:`A`
deve ser transformado para ângulos em radianos, ou seja, :math:`A=\frac{\pi}{180}(\lambda-\lambda_{0})\cos\phi`.

----

.. admonition:: :exem:`Exemplo 4` Calcule a coordenada UTM
    de um ponto de latitude :math:`-21^{\circ}` e longitude de :math:`-41^{\circ}`.
    Considere como modelo da terra o sistema WGS84.

    :solucao:`Solução:`  Verifica-se que para o valor da longitude do ponto, :math:`-41^\circ`, o fuso é o 24, que tem MC de
    :math:`-39^\circ` :math:`(\lambda_{0})`). Do Exemplo 3 temos:
    :math:`e^2=0,006\,694\,384\,442`, logo :math:`e=0,081\,819`; e a segunda excentricidade,
    :math:`e'^2=0,006\,739\,501`. Para as outras variáveis auxiliares, considerando
    as Equações :eq:`eq_grande_normal`, :eq:`eq:utm_T` a :eq:`eq:utm_A`,
    temos:

    .. math::
       N & =\frac{6\,378\,137^2}{\sqrt{6\,378\,137^2\cos^2\left(-21^\circ\right)+6\,356\,752,3^2\sin^2\left(-21^\circ\right)}}=6\,380\,880,55\text{ m}\\
       T & =\tan^2(-21^\circ)=0,147\,351\,597\,390\\
       C & =0,006\,739\,501\cos^2(-21^\circ)=0,005\,873\,963\,368\\
       A & =\frac{\pi}{180^\circ}(-41^\circ--29^\circ)\cos(-21^\circ)=-0,0325\,881\,045\,490

    Substituindo os valores na Equação :eq:`eq:utm_M`:

    .. math::
       M= & 6\,378\,137((1-0,081\,819^{2}/4-3\cdot0,081\,819^4/64-5\cdot0,081\,819^6/256)\cdot-21^\circ\cdot\pi/180\\
       & -(3\cdot0,081\,819^2/8+3\cdot0,081\,819^4/32+45\cdot0,081\,819^6/1024)\cdot\sin(2\cdot-21^\circ)\\
       & +(15\cdot0,081\,819/256+45\cdot0,081\,819/1024)\cdot\sin(4\cdot-21^\circ)\\
       & -(35\cdot0,081\,819^6/3072)\cdot\sin(6\cdot-21^\circ))\\
       M= & -2\,323\,076,859\,370\,594\,\text{m}


    Aplicando os resultados nas Equações :eq:`eq:utmx`
    e :eq:`eq:utmy`:

    .. math::
       x= & 0,999\,6\cdot6\,380\,880,55(-0,032\,588\,104\,549+(1-0,147\,351\,597\,390+0,005\,873\,963\,368)\\
       & -0,032\,588\,104\,549^3/6+(5-18\cdot 0,147\,351\,597\,390+0,147\,351\,597\,390^2+72\cdot0,005873963368\\
       & -58\cdot0,006\,739\,501)-0,032\,588\,104\,549^5/120\\
       & -(35\cdot0,081819^6/3072)\cdot\sin(6\cdot-21^\circ))\\
       x= & -\text{207\,889,216 m }\\
       y= & 0,999\,6(-2\,323\,076,859\,370\,594+6\,380\,880,55\tan\phi\text(-0,0325\,881\,045\,490^2/2+\\
       & (5-0,14735159739+9\cdot0,005\,873\,963\,368+4\cdot0,005\,873\,963\,368^2)-0,0325\,881\,045\,490^4/24\\
       & +(61-58\cdot0,147\,351\,597\,390+0,147\,351\,597\,390^2+600\cdot0,005\,873\,963\,368-330\cdot0,006\,694\,384\,442)\\
       & -0,032\,588\,104\,549^6/720))\\
       y= & -2\,323\,448,280\text{ m}

    Para obtermos a coordenada Este, tem que se somar :math:`500\,000\,\text{m}`
    m à :math:`x` e, para a coordenada Norte, somar :math:`10\,000\,000\,\text{m}` à :math:`y`.
    Desta forma, a coordenada do ponto é: :math:`\text{E}=292\,110,784\,\text{m}` e
    :math:`\text{N}=7\,676\,551,720\,\text{m}`.

----

Para a solução do problema inverso, transformação de coordenada UTM
(E, N) em geodésica :math:`(\phi,\,\lambda)`, consultar :cite:p:`snyder1987map`, :cite:p:`TM8358:1989` e :cite:p:`wiki:UTM_coordinate_system`.

.. admonition:: Sugestão de aula prática

   *Google Earth Pro* **como ferramente para uso em alguns problemas de geomática**

   *Objetivo*: Apresentar algumas funcionalidades do *Google Earth Pro* (https://www.google.com/earth/) em geomática.

   Como roteiro:

   - apresentação geral do *Google Earth Pro*: janelas de funções; principais ícones de funções; *zoom*, adicionar ponto, caminho, etc;
   - como modificar o sistema de coordenadas de geográficas :math:`(\phi,\,\lambda)` para UTM
     :math:`(\text{E, N})`;
   - apresentar os fusos das sistema de projeção UTM;
   - realização de medidas de distância e área.

Exercícios
==========

:exem:`1)`  Como é definida a forma da terra?

----

:exem:`2)`  O que é altitude?

----

:exem:`3)`  Defina Geóide, Elipsóide e Datum.

----

:exem:`4)`  Quais são os Datum horizontal e vertical adotados
pelo Brasil?

----

:exem:`5)`  Defina latitude, longitude de um lugar?

----

:exem:`6)`  Qual a nossa referência para altitude?

----

:exem:`7)`  O que é projeção cartográfica, cite exemplos?

----

:exem:`8)`  O que é uma projeção conforme, igual área e equidistante?

----

:exem:`9)`  Descreva detalhadamente como é o sistema de coordenadas
UTM (fusos, meridiano central, abrangência de cada fuso, etc)? O que
significa uma coordenada UTM, :math:`\text{E}=610.000\,\text{m}` e :math:`\text{N}=8.500.000\,\text{m}`
no hemisfério sul?

----

:exem:`10)`  Dadas as coordenadas UTM de dois pontos no hemisfério
sul: (a) :math:`\text{E}=216.589` m e :math:`\text{N}=7.709.930\,\text{m}`;
(b) :math:`\text{E}=251.361\,\text{m}` e :math:`\text{N}=7.694.522\,\text{m}`.
Calcular a distância entre eles?

:exem:`Resp.:` :math:`38.032,860\,\text{m}`.

----

.. rubric:: Footnotes

.. [#f1] baixar dados em: https://www.usna.edu/Users/oceano/pguth/md_help/html/egm96.htm

.. [#f2] Data é o plural de Datum.