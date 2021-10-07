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

Capitulo 3
**********

Introdução a geodésia e cartografia
___________________________________

Serão abordados neste capítulo os conceitos básicos da geodésia como:
forma e dimensão da terra; modelos matemáticos que se aproximam da
forma da terra (elipsóide); o sistema de referência geodésico adotado
pelo Brasil. Quanto a cartografia, será definida o que é uma projeção
cartográfica mostrando alguns exemplos, como o sistema projeção e
coordenadas UTM, que é uma das projeções mais utilizada no Brasil.

Geóide
^^^^^^

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
Gravitational Model* 1996\footnote [#f1]_ :cite:p:`lemoine1998development`. A ondulação geoidal apresenta
a distância vertical entre o geóide e o elipsóide (ver Secção \ref{subsec:Nivelamento-GNSS}),
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

Elipsóide
_________

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
   f=\frac{a-b}{a}=1-\frac{b}{a}
   :label: eq:achatamento

.. _figelipsoide:

.. figure:: /images/capitulo3/fig_elipsoide.png
   :scale: 40 %
   :alt: fig_elipsoide.png
   :align: center

   Apresentação de uma elipse e um elipsóide de revolução.

----

:exem:`Exemplo 1` O elipsóide de referência utilizado pelo sistema norte-americano de posicionamento por satélite,
o GPS, é denominado de WGS84, tendo como raios dos semieixos: :math:`a=6.378.137,0\,{m}`
e :math:`b=6.356.752,31424\,\text{m}`. Calcule
o achatamento deste elipsóide.

:solucao:`Solução:`
Por meio da Equação :eq:`eq:achatamento`, tem-se:

.. math::
   f & =1-\frac{b}{a}\\
   & =1-\frac{6.356.752,31424}{6.378.137,0}\\
   & =0,003\,3528\,106\,647\\
   & =\frac{1}{298,257\,223\,563}.

Então, :math:`f=0,003\,3528\,106\,647=\frac{1}{298,257\,223\,563}`,
sendo a segunda forma, :math:`f=\frac{1}{298,257}`, com
arredondamento, a mais utilizada.

----

Para a definição precisa do elipsóide, deve-se também considerar a
constante gravitacional (GM,
*Earth's Gravitational Constant*) e a velocidade
angular de rotação da terra :math:(`\omega)`. Por exemplo, para o WGS84,
:math:`GM=3.986.004,418\pm0,008\cdot 10^8\,\text{m}^3\,\text{s}^{-2}` e :math:`\omega=7292115\cdot10^{-11}\,
\text{rad}\,\text{s}^{-1}` :cite:p:`nima:2000`.

Ao longo do tempo, vários elipsoides foram definidos, pois as medidas
da dimensão terra eram aperfeiçoadas. Os elipsoides podem ser utilizados
em nível local ou mundial, onde se estabelecem medidas de :math:`a` e :math:`f`,
de forma a melhor se ajustar ao geóide local ou mundial, respectivamente.
Na Tabela\ \ref{tab:elipsoides} são apresentados alguns parâmetros
de elipsoides e o local em que ele é ou foi utilizado
:cite:p:`smith1997introduction`.


:exem:`Resp.:` Tabela abaixo.

.. table:: Exemplo dos parâmetros de elipsoides.
   :widths: auto

   +--------------------------------------+------------------------+----------------------------+---------------------+
   |Elipsóide                             |  :math:`a` (m)         |  :math:`f^{-1}`            | Local de utilização |
   +======================================+========================+============================+=====================+
   |Everest 1830                          |  :math:`6.377.276,345` |  :math:`300,8017`          | Índia, Pakistão     |
   +--------------------------------------+------------------------+----------------------------+---------------------+
   |Hayford 1924                          |  :math:`6.378.388`     |  :math:`297`               | Europa e Brasil     |
   +--------------------------------------+------------------------+----------------------------+---------------------+
   |Krassovskiy 1942                      |  :math:`6.378.245`     |  :math:`298,3`             | USSR                |
   +--------------------------------------+------------------------+----------------------------+---------------------+
   |Elip. Inter. de 1967                  |  :math:`6.378.160`     |  :math:`298,25`            | América do Sul      |
   +--------------------------------------+------------------------+----------------------------+---------------------+
   |*Geodetic Reference System* (GRS 1980)| :math:`6.378.137`      | :math:`298,257\,222\,101`  | Mundial             |
   +--------------------------------------+------------------------+----------------------------+---------------------+
   |*World Geodetic System*       (WGS84) | :math:`6.378.137`      |  :math:`298,257\,223\,563` | Mundial             |
   +--------------------------------------+------------------------+----------------------------+---------------------+


Coordenada geodésica
____________________

Para a determinação da latitude  (:math:`\phi`, leia-se *fi*) e da longitude (:math:`\lambda`, leia-se *lambda*) geodésica
de um ponto :math:`P` qualquer, é considerada a normal :math:`P` ao elipsóide
(:math:`P'`, :numref:`fig_coordenadasretangulares`) e:

- sua projeção com o plano do Equador, para a latitude geodésica :math:`(\phi_{p})`;
- o meridiano de Greenwich (Grw) e o meridiano que passa por :math:`P'`, para a longitude geodésica :math:`(\phi_{P})` e;
- a distância entre :math:`P` e :math:`P'`, altura geodésica :math:`(h_{P}`, também
  denominada de geométrica).

O plano do Equador é o plano perpendicular ao semieixo menor, encontram-se
no centro do elipsóide. Um meridiano é uma secção elíptica gerada
no elipsóide pelo plano definido pelo semieixo menor e o ponto em
questão no elipsóide. A latitude geodésica de :math:`P` é o ângulo
entre a normal e o plano do equador :math:`(\phi_{p})`. A longitude geodésica
de :math:`P` :math:`(\lambda_{p})` é o ângulo diedro dos planos que contem
o meridiano de :math:`P'` e o Grw.

A latitude no equador é de :math:`0^{\circ}` e varia até :math:`-90^{\circ}`
ou :math:`+90^{\circ}`. Pode-se ao invés do sinal, :math:`+` ou :math:`-` , considerar o hemisfério
Sul (S) e Norte (N), por exemplo, :math:`22^{\circ}` S ou :math:`45^{\circ}`N., respectivamente, para o Polo Sul e Norte. A variação da longitude
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
_______________________________

Um outro meio de estabelecer a localização espacial de um ponto, por
exemplo o :math:`P`, a um determinado elipsóide, é por meio de sua coordenada
geodésica cartesiana (:math:`x_{P},\,y_{P},\,z_{P}`), também denominado
de sistema de coordenada geocêntrico\index{Coordenada!Geocêntrico}.
Este é o sistema onde primeiramente a coordenada de um ponto é determinada
pelos receptores GNSS. As coordenadas geodésicas retangulares também
são utilizadas para efetuar transformação de coordenadas entre elipsoides.

Definiremos primeiro a origem do sistema e os eixos-:math:`x`, -:math:`y` e
-:math:`z`, sendo: a origem, o centro do elipsóide; o eixo-:math:`z` é aquele
que coincide com o semieixo menor do elipsóide, eixo de rotação; o
eixo-:math:`x` é aquele dado pela intersecção do plano do Equador com o
meridiano de Grw; e o eixo-:math:`y` formando um diedro com os outros eixos
(Figura\ \ref{fig:coordenadasretangulares}). Quando as coordenadas
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
ao comprimento da vertical que passa por :math:`P'` ao eixo-z (Figura\ \ref{fig:coordenadasretangulares})
dado por:

.. math::
   N =\frac{a^{2}}{\sqrt{a^{2}\cos^{2}\phi+b^{2}\sin^{2}\phi}}
   :label: eq_grande_normal


----

:exem:`Exemplo 2` A latitude, longitude
e altitude geodésica de um ponto :math:`P` valem: :math:`\phi=-22^\circ13'21,1337''`,
:math:`\lambda=-41^\circ47'29,8921''` e
:math:`h=272,32\,\mathrm{m}`. Considerando elipsóide WGS84, tendo como
raios dos semieixos: :math:`a=6.378.137,0` m e :math:`b=6.356.752,3` m,
calcule as coordenadas retangulares.

:solucao:`Solução:`

\noindent Substituindo os valores nas Equações :eq:`eq_cart_x`
a :eq:`eq_grande_normal`, tem-se:

.. math::
   N & =\frac{6.378.137^2}{\sqrt{6.378.137^2\cos^2\left(-22^\circ13'21,1337''\right)+6.356.752,3^2\sin^2\left(-22^\circ13'21,1337''\right)}}\\
   N & =6.381.192,9127\,\text{m}

.. math::
   x & =(6.381.192,9127+272,32\cos\left(-22^\circ13'21,1337''\right)\cos\left(-41^\circ47'29,8921''\right)\\
   x & =4.404.445,8857\,\text{m}

.. math::
   y & =(6.381.192,9127+272,32)\cos\left(-22^\circ13'21,1337''\right)\sin\left(-41^\circ47'29,8921''\right)\\
   y & =-3.936.872,4167\,\text{m}

.. math::
   z & =\left(\frac{6.356.752,3^2}{6.378.137^2}6.381.192,9127+272,32\right)\sin(-22^\circ13'21,1337'')\\
   z & =2.397.345,4965\,\text{m}.

----


.. rubric:: Footnotes

.. [#f1] baixar em: https://www.usna.edu/Users/oceano/pguth/md_help/html/egm96.htm}},

**Referências**

.. bibliography::