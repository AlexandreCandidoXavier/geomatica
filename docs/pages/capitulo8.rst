.. raw:: html

    <style> .exem {color:blue; font-weight: bold} </style>

.. role:: exem

.. raw:: html

    <style> .solucao {font-weight: bold} </style>

.. role:: solucao

.. raw:: html

    <style> .blue {color:blue} </style>

.. role:: blue

.. _RST Capitulo8:

Capitulo 8: Poligonal
*********************

Em um levantamento topográfico, pode haver a necessidade de estabelecer
uma estrutura de pontos com coordenadas conhecidas, tendo a função
de servir de base de apoio para as medidas dos pontos de detalhe.
Para a construção desta estrutura, utiliza-se o que denominamos de
poligonal, que é definida como uma séria de linhas conectadas, onde
os ângulos e as distâncias dos alinhamentos são medidos, todas as
vezes que sua direção tem mudança. A avaliação da precisão da poligonal,
quanto aos ângulos e distâncias medidas, devem ser verificadas. Neste
capítulo apresentaremos os procedimentos para determinação e avaliação
de poligonais.

Poligonal fechada
=================

Uma poligonal fechada é aquela que começa e termina no mesmo ponto,
é matematicamente e geometricamente fechada, permitindo a avaliação
dos erros angulares e lineares. Um exemplo deste tipo de poligonal
é apresentado na Figura \ref{fig:PoligonalAbertaNaFechada}, onde
os ângulos horizontais são medidos à direita. Os procedimentos para
a medição dos ângulos horizontais são apresentados no :any:`RST Capitulo7`,
sendo os medidores eletrônicos, presentes em estações totais, os equipamentos
mais utilizados para esta finalidade. Já as medidas de distâncias
horizontais (ver :any:`RST Capitulo 6`),
são realizadas, preferencialmente, por meio dos medidores eletrônicos
de distância, devido à precisão. Todavia, pode-se utilizar medidas
de distâncias obtidas por meio dos métodos taqueométricas ou à trena,
dependendo do tipo de levantamento a ser realizado :cite:`NBR13133`.

.. _fig_ExemploPoligonalFechada.png:

.. figure:: /images/capitulo8/fig_ExemploPoligonalFechada.png
   :scale: 45 %
   :alt: fig_ExemploPoligonalFechada.png
   :align: center

   Poligonal fechada, matematicamente e geometricamente fechada.}

Poligonal aberta
================

Uma poligonal aberta, geometricamente aberta, é aquela que apresenta
uma série de alinhamentos, não retornando ao ponto inicial, podendo
ser apoiada ou não. Por exemplo, na :numref:`ExemploPoligonalAbertaApoiada`a
e b é apresentada, respectivamente, uma poligonal dita apoiada e não
apoiada. Na poligonal aberta e apoiada (:numref:`ExemploPoligonalAbertaApoiada`a),
ela começa e termina em alinhamentos conhecidos, onde as suas coordenadas
foram previamente estabelecidas. Esta poligonal é dita geometricamente
aberta e matematicamente fechada, sendo possível realizar uma avaliação
do erro angular de fechamento (ver secção \ref{subsec:Erro-angular-de-fechamento},
página \pageref{subsec:Erro-angular-de-fechamento}) e do erro linear.
Já a poligonal aberta e sem apoio (:numref:`ExemploPoligonalAbertaApoiada`b), não é possível a avaliação dos
erros angulares e lineares, logo, deve-se evitá-la. Contudo, caso
ela não possa ser evitada, faz-se necessário realizar as medidas de
distância e de ângulos com o máximo de atenção, se possível com repetição,
a fim de minimizar os erros.

Também  na poligonal do tipo aberta, as distâncias e ângulos entre
os alinhamentos devem ser, preferencialmente, medidos por meio de
medidores eletrônicos, disponíveis nas estações totais. Com relação
aos ângulos horizontais, neste nosso exemplo, eles são medidos à direita.
No entanto, o método das deflexões também poderia ser o utilizado.

.. _ExemploPoligonalAbertaApoiada:

.. figure:: /images/capitulo8/ExemploPoligonalAbertaApoiada.png
   :scale: 45 %
   :alt: ExemploPoligonalAbertaApoiada.png
   :align: center

   Exemplo de poligonal aberta e apoiada (a), matematicamente fechada
   e geometricamente aberta e poligonal aberta (b), matematicamente
   e geometricamente aberta.

Cálculo de uma poligonal fechada
================================

A poligonal vai servir de estrutura básica para o mapeamento topográfico
dos pontos de detalhe. Assim, a sua qualidade com relação a precisão
angular e linear têm que ser verificadas. Tais procedimentos são realizados
no escritório ou em campo. Em campo é possível, caso se trabalhe com
estações totais que permitam estas avaliações. Os procedimentos para
a avaliação e cálculo da poligonal, só são possíveis, ao final da
coleta dos dados em campo, sendo eles apresentados na Figura ao lado.
As medidas de ângulos e de distâncias serão avaliadas, comparando
o erro destas medições com valores de tolerâncias máximas, estabelecidos
pela :cite:t:`NBR13133`, sendo que, apresentado erros superiores,
há a necessidade de retornar em campo para repetir as medições em
campo.

.. _fig_fluxugramaPolig.png:

.. figure:: /images/capitulo8/fig_fluxugramaPolig.png
   :scale: 45 %
   :alt: fig_fluxugramaPolig.png
   :align: center

   Procedimento para cálculo de uma poligonal fechada em um ponto.}

asd

Exemplo de cálculo de poligonal fechada
---------------------------------------

Na :numref:`fig_PoligonalFechadaSolucao.png`é apresentado um exemplo
de caderneta de campo para uma poligonal do tipo fechada. Esta poligonal
será utilizada como o nosso exemplo para as avaliações e cálculos
que devem ser realizados neste tipo de politonal. Na caderneta de
campo há a indicação de que os ângulo internos foram medidos pelo
método das direções e a distâncias horizontais correspondem a média
das leituras de ré e vante dos alinhamentos. Existe dois pontos de
controle, o O e o A, onde suas coordenadas UTM foram determinadas
por meio de levantamento GNSS, logo, o azimute OA pode ser determinado.
Ele será a referência para a determinação dos demais azimutes. No
início do levantamento, com o equipamento na estação A, a primeira
medida de ângulo horizontal foi do alinhamento de azimute conhecido,
OA, ao primeiro alinhamento da poligonal, AB. Depois passou-se a medir
os ângulos internos e as distâncias horizontais dos alinhamentos,
sendo os seus valores anotados na tabela da caderneta de campo.

.. _fig_PoligonalFechadaSolucao.png:

.. figure:: /images/capitulo8/fig_PoligonalFechadaSolucao.png
   :scale: 75 %
   :alt: fig_PoligonalFechadaSolucao.png
   :align: center

   Caderneta de campo de uma poligonal fechada.

Avaliação do erro angular de fechamento
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

A avaliação o erro angular de fechamento é realizada por meio da verificação
do somatório dos ângulos internos medidos com o somatório dos ângulos
internos teórico. Para o nosso exemplo, como o número de vértices
é de :math:`5`:math:`(n=5)`, temos que o somatório teórico é de :math:`540^\circ`,
:math:`(n-2)180^\circ`. Logo, erro angular de fechamento é de :math:`35''`.
Considerando a tolerância máxima do erro angular de fechamento
:math:`\text{T}\alpha\leq40''\sqrt{n} = 89''`,
conclui-se que os ângulos internos foram medidos dentro dos limites
admissível de erro, logo, os ângulos internos podem ser compensados.
A compensação que será aplicada é a linear, conforme apresentada na
Tabela \ref{tabExemp:compensacaopolofechada}. Note que o método linear
é indicado quando o comprimento do alinhamentos forem aproximadamente
constante (ver secção \ref{subsec:Erro-angular-de-fechamento}, página
\pageref{subsec:Erro-angular-de-fechamento}). Quando isto não ocorrer,
melhor ponderar as compensações pelos comprimentos dos alinhamentos
em que o ângulo foi medido onde, as maiores compensações são aplicadas
para os comprimentos mais curtos, pois estes estão sujeitos aos maiores
erros nas suas medidas :cite:`loch`:cite:`WOLF`.

b

.. table:: Column Separators
    :widths: 1 2 3
    :header-columns: 1
    :column-alignment: left center right
    :column-dividers: none single double single
    :column-wrapping: nnn

    =========== =========== ===========
    Width x1    Width x2    :math:`a`
    =========== =========== ===========
    Header 1    Center 1    Right 1
    Header 2    Center 2    Right 2
    Header 3    Center 3    Right 3
    =========== =========== ===========



.. table:: Compensação do erro angular pelo método linear
   :widths: auto

   +------------+---------------------------------------+---------------------------------+----------------------------------------+
   | Estação    | :math:`\sphericalangle` medido        | erro médio                      |  :math:`\sphericalangle` compensado}   |
   +============+=======================================+=================================+========================================+
   | :math:`A`  | :math:`49^\circ  7'44''`              | :math:`+7`                      | :math:`49^\circ 7'51''`                |
   +            +                                       +                                 +                                        +
   | :math:`B`  | :math:`100^\circ  4' 4''`             | :math:`+7`                      | :math:`100^\circ 4'11''`               |
   +            +                                       +                                 +                                        +
   | :math:`C`  | :math:`114^\circ 34'23''`             | :math:`+7`                      | :math:`114^\circ34'30''`               |
   +            +                                       +                                 +                                        +
   | :math:`D`  | :math:`59^\circ55' 7''`               | :math:`+7`                      | :math:`59^\circ55'14''`                |
   +            +                                       +                                 +                                        +
   | :math:`E`  | :math:`\underline{216^\circ18' 7''}`  | :math:`\underline{+7}`          | :math:`\underline{216^\circ18'14''}`   |
   +------------+---------------------------------------+---------------------------------+----------------------------------------+
   |            | :math:`\Sigma=539^\circ59'25''`       | :math:`\Sigma=35''`             | :math:`\Sigma=540^\circ0'0''`          |
   +------------+---------------------------------------+---------------------------------+----------------------------------------+


Cálculo dos azimutes provisórios
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Uma vez que os ângulos internos foram compensados, o próximo passo
é o cálculo dos azimutes provisórios. Nesta fase é necessário conhecer
pelo menos um azimute do levantamento. Relembrando que os azimutes
podem ter como referência de meridiano, o geográfico, o magnético,
o hipotético ou o da quadrícula.

Com o uso do GNSS, trabalhando com coordenadas do tipo UTM, a partir
da determinação de dois pontos na área a ser levantada, o azimute
inicial tornou-se de fácil obtenção. Este azimute tem como referência
o meridiano da quadrícula\index{Norte!quadrícula}. Como no nosso
exemplo foram determinadas as coordenadas UTM dos pontos de controle
O e A, pode-se calcular o azimute OA e, como o ângulo OAB também foi
medido, o azimute AB pode ser calculado, conforme apresentado no Exemplo
abaixo.

----

:exem:`Exemplo 1` Calcular o azimute AB da poligonal fechada apresentada na :numref:`fig_PoligonalFechadaSolucao.png`,
onde se conhecem as coordenadas UTM dos pontos O e A, e o ângulo OAB.

:solucao:`Solução:`
Cálculo do azimute OA por meio das coordenadas UTM:

.. figure:: /images/capitulo8/exem_Calcularoazimutepoligonalfechadasolucaoa.png
   :scale: 55 %
   :alt: exem_Calcularoazimutepoligonalfechadasolucaoa.png
   :align: center

Cálculo do azimute AB utilizando o azimute OA e o ângulo horizontal OAB:

.. figure:: /images/capitulo8/exem_Calcularoazimutepoligonalfechadasolucaob.png
   :scale: 55 %
   :alt: exem_Calcularoazimutepoligonalfechadasolucaob.png
   :align: center

----

Por meio de um azimute da poligonal conhecido, no nosso exemplo o
azimute AB e; com as medidas dos ângulos internos compensadas, os
demais azimutes da poligonal podem ser calculados. O azimute de um
alinha manto é dado pelo azimute do alinhamento anterior :math:`\pm180^\circ`,
mais o ângulo interno compensado. Os azimutes provisórios calculados
para o nosso exemplo são apresentados na Tabela abaixo,
onde no final, o azimute AB é recalculado para a verificação dos cálculos.

.. table::
   :widths: auto

   +-------------+------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
   | Estação     | :math:`\sphericalangle` compensado | Az                                                                                                                             |
   +=============+====================================+================================================================================================================================+
   | :math:`A`   | :math:`49^\circ 7'51''`            | :math:`\color{blue}{\mathrm{\mathbf{Az_{AB}}}\mathbf{=286^\circ22'25''}}` **(conhecido)**                                      |
   +-------------+------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
   | :math:`B`   | :math:`100^\circ 4'11''`           | :math:`\mathrm{Az_{BC}}=286^\circ22'25''-180^\circ+100^\circ 4'11''=206^\circ26'36''`                                          |
   +-------------+------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
   | :math:`C`   | :math:`114^\circ33'22''`           | :math:`\mathrm{Az_{CD}}=206^\circ26'36''-180^\circ+114^\circ34'30''=141^\circ 1' 6''`                                          |
   +-------------+------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
   | :math:`D`   | :math:`59^\circ55'14''`            | :math:`\mathrm{Az_{DE}}=141^\circ 1' 6''-180^\circ+59^\circ55'14'' = 20^\circ56'20''`                                          |
   +-------------+------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
   | :math:`E`   | :math:`216^\circ18' 14''`          | :math:`\mathrm{Az_{EA}}=20^\circ56'20'' -180^\circ+216^\circ18'14''= 57^\circ14'34''`                                          |
   +-------------+------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
   |             | Verificação                        |                                                                                                                                |
   +-------------+------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
   | :math:`A`   | :math:`49^\circ 7'51''`            | :math:`\mathrm{Az_{AB}}=57^\circ14'34'' -180^\circ+49^\circ 7'51''=-73^\circ37'35''=\color{blue}\mathbf{286^\circ22'25''}`     |
   +-------------+------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+

Cálculo das coordenadas parciais
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Uma vez calculados os azimutes provisórios, tem-se que determinar
as coordenadas parciais dos alinhamentos, que nada mais são do que
as projeções dos alinhamentos sobre o eixo-:math:`x` e :math:`y`. Na
:numref:`fig_coordenadasparciais` é apresentado um alinhamento
hipotético AB, e a sua projeção sobre o eixo-:math:`x`e :math:`y`, correspondendo,
respectivamente, a :math:`\Delta x` e a :math:`\Delta y`. Como este alinhamento
teve a distância horizontal e o azimute determinados, por meio deles,
pode-se calcular as suas coordenadas parciais.

As coordenadas parciais, quando calculadas a partir do azimute, poderão
ter valores positivos ou negativos. Se :math:`\Delta x` ou :math:`\Delta y`
forem positivos, indica que o alinhamento tem direção este ou norte,
respectivamente. Por outro lado, se :math:`\Delta x` ou :math:`\Delta y`forem
negativos, a direção do alinhamento é oeste ou sul, respectivamente.
Para as coordenadas parciais calculadas por meio dos rumos, há a necessidade
de se estabelecer se o alinhamento está projetado esquerda ou ao sul
:math:`(-)`, ou se está à direita ou ao norte :math:`(+)`. Como o cálculo com
o azimute retorna o sinal da projeção automaticamente, logo o sentido
da projeção, a sua utilização se torna preferível.

.. _fig_coordenadasparciais:

.. figure:: /images/capitulo8/fig_coordenadasparciais.png
   :scale: 55 %
   :alt: fig_coordenadasparciais.png
   :align: center

   Representação e cálculo das coordenadas parciais de um alinhamento
   por meio do seu azimute e da distância horizontal.


Na :numref:`fig_coordenadaspar` são apresentadas
as coordenadas parciais dos alinhamentos da nossa poligonal de exemplo
(:numref:`fig_PoligonalFechadaSolucao.png`). Também são apresentados
os somatórios das distâncias horizontais, :math:`\Sigma\mathrm{DH}`, e
das coordenadas parciais, :math:`\Sigma\Delta x` e :math:`\Sigma\Delta y`. Estes
somatórios serão utilizados nas próximas etapas, 'avaliação
do erro de fechamento linear e a sua compensação'.

.. _fig_coordenadaspar:

.. figure:: /images/capitulo8/fig_coordenadasparciaispoligona.png
   :scale: 35 %
   :alt: fig_coordenadasparciaispoligona.png
   :align: center

   Coordenadas parciais dos alinhamentos.

Avaliação do erro de fechamento linear
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

A nossa poligonal, ABCDEA, começa e termina em um mesmo ponto, o A.
Uma vez que as medidas de ângulos e distância estão sujeitas a erros,
caso se calcule as coordenadas retangulares das estações a partir
das coordenadas parciais (:numref:`fig_coordenadaspar`),
ao invés de obtermos ao final a mesma coordenada da estação A, obteríamos
uma coordenada distinta, onde a denominaremos de A:math:`'`. Na :numref:`fig_errolinear`
é apresentado um esquema da nossa poligonal
que não fecha em A, mas sim em A:math:`'`. A distância entre A e A:math:`'`
é denominado de erro de fechamento linear (:math:`E`). Ele é utilizado
para avaliação da precisão do levantamento, sendo dado por:

.. math::
   E = \sqrt{({\Sigma\Delta x})^2+({\Sigma\Delta y})^2}
   :label: erro_linear

.. _fig_errolinear:

.. figure:: /images/capitulo8/fig_errolinear.png
   :scale: 35 %
   :alt: fig_errolinear
   :align: center

   Esquema do erro de fechamento linear de uma poligonal.

Uma vez calculado :math:`E`, deve-se compará-lo com a tolerância do erro
linear de fechamento (:math:`\mathrm{T}_p`), que é apresentado na :cite:t:`NBR13133`.
A :math:`\mathrm{T}_p` depende da finalidade da poligonal. Para os nossos
exemplo e exercícios de poligonal fechada, utilizaremos :math:`\mathrm{T}_p\leq0,56\sqrt{L(\mathrm{km})}`,
sendo que, :math:`L` é o perímetro da poligonal na unidade de quilômetros.
Em se obtendo valor de :math:`E\leq\mathrm{T}_p`, pode-se realizar a compensação
do erro de fechamento linear, a fim de tornar a poligonal fechada.
Caso contrário, :math:`E>\mathrm{T}_p`, o levantamento não está de acordo
com a precisão necessária para o projeto, devendo-se voltar ao campo
e refazer as medidas de ângulos e de distância da poligonal.

----

:exem:`Exemplo 2` Para a nossa poligonal
de exemplo, calcular o erro de fechamento linear :math:`(E)` e, verificar
se o mesmo se encontra dentro do limite de tolerância para o erro
de fechamento linear.

:solucao:`Solução:` De acordo com a :eq:`erro_linear` e, os valores
de :math:`\Sigma\Delta x` e :math:`\Sigma\Delta y` apresentados na
:numref:`fig_coordenadaspar`,
temos:

.. math::
   E = \sqrt{(0,301)^2+(-0,424)^2} =0,520\,\text{m}.

O valor do perímetro da poligonal é de :math:`911,307\text{m}\,(0,911307\,\text{km})`
(:numref:`fig_coordenadaspar`, logo :math:`\mathrm{T}_p`:

:math:`\mathrm{T}_p=0,56\sqrt{0,911307)}=0,535\,\text{m}`.

Uma vez que o :math:`E\leq\mathrm{T}_{p}`, pode-se concluir que a poligonal
está dentro do limite máximo de erro de tolerância para o erro linear
de fechamento, podendo-se aplicar a distribuição do erro linear.

----

Precisão relativa
^^^^^^^^^^^^^^^^^

Uma forma de apresentar no memorial descritivo e na planta, o grau
de precisão interna da poligonal, é por meio da precisão relativa
:math:`(P_r)`. Ela é calculada pela razão entre o :math:`E` e o perímetro da
poligonal :math:`(\Sigma\mathrm{DH})`. Desta forma, :math:`P_r` do nosso exemplo
será:

.. math::
   Pr&=\frac{E}{\Sigma\mathrm{DH}}\\
   Pr&=\frac{0,520}{911,307}

Dividindo o numerador e o denominador por :math:`0,520`, com a finalidade
de tornar o numerador 1 e, arredondando o denominador, temos:

.. math::
   Pr&=\frac{\dfrac{0,520}{0,520}}{\dfrac{911,307}{0,520}}\\
   Pr&=\frac{1}{1\,753}.

Significa que no nosso levantamento ocorre 1 m de erro a cada :math:`1\,753`
m de perímetro da poligonal. Quanto maior o valor do denominador,
maior é a precisão do levantamento.

Compensação do erro de fechamento linear
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

A compensação do erro de fechamento linear, tem como objetivo tornar
a poligonal fechada. Pode-se citar como metodologias empregadas para
compensação do erro de fechamento linear: **i**) a distribuição
do erro de fechamento igualmente por todas a coordenadas relativas;
**ii**) proporcional ao comprimento dos lados; **iii**)
proporcional aos valores absolutos das coordenadas parciais. A :cite:t:`NBR13133`
permite a compensação por quaisquer destes métodos. Para o nosso levantamento
utilizaremos o método proporcional ao comprimento dos lados, para
os demais métodos consultar, por exemplo, em :cite:`loch`, :cite:`WOLF` e
:cite:`cole2009sur`.

A compensação do erro de fechamento linear, nas coordenadas parciais
de um alinhamento qualquer :math:`(C_{\Delta x}`e :math:`C_{\Delta y})`, por
exemplo o AB, pelo método proporcional ao comprimento do lado será:

.. math::
   C_{\Delta x_{\mathrm{AB}}} = -\frac{\Sigma\Delta x}{\Sigma \mathrm{DH}}\times \mathrm{DH}_{\mathrm{AB}}
   :label: eq:compensacaoerrolinearx

.. math::
   C_{\Delta y_{\mathrm{AB}}} = -\frac{\Sigma\Delta y}{\Sigma \mathrm{DH}}\times \mathrm{DH}_{\mathrm{AB}}
   :label: eq:compensacaoerrolineary

----

:exem:`Exemplo 3`  Considerando as coordenadas parciais apresentada na :numref:`fig_coordenadaspar`,
referente a poligonal do nosso exemplo, calcular as coordenadas parciais
compensadas por meio do método proporcional ao comprimento dos lados.

:solucao: De acordo com a Equação \ref{eq:compensacaoerrolinearx}
e \ref{eq:compensacaoerrolineary}, para o alinhamento AB, temos:

:math:`{\displaystyle C_{\Delta x_{\mathrm{AB}}}=-\frac{0,301}{911,307}\times201,737=-0,067}\,\text{m}`,

:math:`{\displaystyle C_{\Delta y_{\mathrm{AB}}}=-\frac{-0,424}{911,307}\times201,737=0,094}\,\text{m}`.

Desta forma, :math:`\Delta x` e :math:`\Delta y` compensados
:math:`(\Delta x_C` e :math:`\Delta y_C)`,
do alinhamento AB serão:

:math:`{\displaystyle \Delta x_{C_{\mathrm{AB}}}=\Delta x_{\mathrm{AB}}+C_{\Delta x_{\mathrm{AB}}}=-193,555+-0,067=-193.622\,\text{m}}`,

:math:`{\displaystyle \Delta y_{C_{\mathrm{AB}}}=\Delta y_{\mathrm{AB}}+C_{\Delta y_{\mathrm{AB}}}=56,870+0,094=56,964\,\text{m}}`.

As compensações dos demais alinhamentos são apresentadas na Tabela
a seguir. Note que ao final da tabela é realizado o somatório das
compensações e das coordenadas parciais compensadas. O somatório das
compensações tem que ser de mesmo valor do somatório das coordenadas
parciais, com sinal contrário. Já o somatório das coordenadas parciais
compensadas, tem que resultar em zero.

.. table::
   :widths: auto

   +---------+--------------------------------------+----------------------------------+----------------------------------+--------------------------------+---------------------------------+---------------------------------+-----------------------------------+
   | Estação |  DH                                  | :math:`\Delta x`                 | :math:`\Delta y`                 | :math:`C_{\Delta x}`           | :math:`C_{\Delta y}`            | :math:`\Delta x_C`              | :math:`\Delta y_C`                |
   +---------+--------------------------------------+----------------------------------+----------------------------------+--------------------------------+---------------------------------+---------------------------------+-----------------------------------+
   | A       | :math:`201,737`                      | :math:`-193,555`                 | :math:`56,870`                   | :math:`-0,067`                 | :math:`0,094`                   | :math:`-193,622`                | :math:`56,964`                    |
   +---------+--------------------------------------+----------------------------------+----------------------------------+--------------------------------+---------------------------------+---------------------------------+-----------------------------------+
   | B       | :math:`224,863`                      | :math:`-100,134`                 | :math:`-201,337`                 | :math:`-0,074`                 | :math:`0,105`                   | :math:`-100,208`                | :math:`-201,232`                  |
   +---------+--------------------------------------+----------------------------------+----------------------------------+--------------------------------+---------------------------------+---------------------------------+-----------------------------------+
   | C       | :math:`141,247`                      | :math:`88,854`                   | :math:`-109,798`                 | :math:`-0,047`                 | :math:`0,066`                   | :math:`88,807`                  | :math:`-109,732`                  |
   +---------+--------------------------------------+----------------------------------+----------------------------------+--------------------------------+---------------------------------+---------------------------------+-----------------------------------+
   | D       | :math:`173,084`                      | :math:`61,855`                   | :math:`161,654`                  | :math:`-0,057`                 | :math:`0,081`                   | :math:`61,798`                  | :math:`161,735`                   |
   +---------+--------------------------------------+----------------------------------+----------------------------------+--------------------------------+---------------------------------+---------------------------------+-----------------------------------+
   | E       | :math:`\underline{170,376 }`         | :math:`\underline{143,281}`      | :math:`\underline{92,187}`       | :math:`\underline{-0,056}`     | :math:`\underline{0,078}`       | :math:`\underline{143,225}`     | :math:`\underline{92,265}`        |
   +---------+--------------------------------------+----------------------------------+----------------------------------+--------------------------------+---------------------------------+---------------------------------+-----------------------------------+
   |         |  :math:`\Sigma=911,307`              | :math:`\Sigma=0,301`             | :math:`\Sigma=-0,424`            | :math:`\Sigma=-0,301`          | :math:`\Sigma=0,424`            | :math:`\Sigma=0`                | :math:`\Sigma=0`                  |
   +---------+--------------------------------------+----------------------------------+----------------------------------+--------------------------------+---------------------------------+---------------------------------+-----------------------------------+


----
\begin{itemize}
\item \textit{cálculo das coordenadas retangulares da poligonal}\index{Poligonal!fechada!coordenadas retangulares}\index{Coordenada!retangular}
\end{itemize}
A poligonal vai servir de apoio para as medidas dos pontos de detalhe
do mapeamento logo, o cálculo das suas coordenadas retangulares se
faz necessário. A partir das coordenadas retangulares, por exemplo,
podem-se calcular as distâncias horizontais e os azimutes finais dos
alinhamentos. Também, a partir das coordenadas retângulares, pode-se
calcular a área da poligonal pelo método de Gauss (Secção \ref{subsec:C=0000E1lculo-de-=0000E1rea-gauss},
página \pageref{subsec:C=0000E1lculo-de-=0000E1rea-gauss}).

Para o cálculo das coordenadas retângulares, há a necessidade de se
conhecer pelo menos a coordenada de um ponto. Em uma situação ideal,
a poligonal é vinculada a rede geodésica (Sistema Geodésico Brasileiro),
onde será utilizada as coordenadas UTM. Em não havendo pontos de apoio
topográfico, pode-se atribuir uma coordenada a um ponto, tomando-se
o cuidado dele ter valores suficientemente altos, para não resultar
em coordenadas retângulares negativas nos outros pontos. Por exemplo
pode-se adotar no ponto inicial, :math:`x`= 10.000 m e :math:`y`= 10.000 m.
Outros procedimentos para a amarração da poligonal podem ser verificados
na \citeonline[páginas 7-8]{NBR13133}.

Considere um alinhamento hipotético AB, onde são conhecidas, a coordenada
retangular do ponto A (:math:`x_\mathrm{A},\,x_\mathrm{A}`) e as coordenadas
parciais de AB :math:`(\Delta x_{\mathrm{AB}}`e :math:`\Delta y_{\mathrm{AB}})`,
então a coordenada de B será:

\begin{equation}
\label{eq:coordenadatoalx}
x_\mathrm{B} = x_\mathrm{A}+\Delta x_{\mathrm{AB}}
\end{equation}
\begin{equation}
\label{eq:coordenadatoaly}
y_\mathrm{B} = y_\mathrm{A}+\Delta y_{\mathrm{AB}}
\end{equation}

\begin{mybox}[breakable,enhanced,pad at break=0mm,label={exemplo_cooredenadadotal}]{}Calcular as coordenadas retangulares da poligonal
da Figura \ref{fig:PoligonalFechadaSolucao}, considerando conhecida
a coordenada UTM da estação A (E = :math:`268\,011,610`m; N = :math:`7\,370\,836,303`
m).

\soluca

\noindent  A coordenada UTM, E e N, da estação A é em relação ao
eixo-\textit{x} e \textit{y} da quadrícula logo, :math:`x_{\mathrm{A}} = 268\,011,610`m e :math:`y_{\mathrm{A}} = 7\,370\,836,303`m.
De acordo com a Equação \ref{eq:coordenadatoalx} e \ref{eq:coordenadatoaly},
e as coordenadas parciais AB compensada, temos:

:math:`{\displaystyle x_{\mathrm{B}}=268\,011,610+-193,622=267\,817,988}`
m,

:math:`{\displaystyle y_{\mathrm{B}}=7\,370\,836,303+56,964=7\,370\,893,267}`
m.

Para os demais alinhamentos, os resultados são apresentados na Tabela
a seguir. Note que a coordenada da estação conhecida
é colocada na sua respectiva linha, assim, na linha da estação A,
é colocado o valor da coordenada UTM obtida por GNSS. Para as demais
estações a coordenada é calculada, somando a coordenada da linha acima
(anterior) com a parcial, também da linha acima na Tabela. Com o objetivo
de verificção dos cálculos, ao final, a coordenada do ponto inicial
é calculada, em que deve-se obter o mesmo valor da coordenada de saída,
neste exemplo, a obtida por GNSS.

%\begin{table}
\begin{tabular} {crrrrr} 
Esta\c{c}\~{a}o   |:math:`\Delta x_C`  | :math:`\Delta y_C`| :math:`x`(E) | :math:`y`(N)   | 
A |--193,622           | 56,964            |  \textbf{268\,011,610} | \textbf{7\,370\,836,303}|
B |--100,208           | --201,232          |  267\,817,988 | 7\,370\,893,267|
C |88,807             | --109,732          |  267\,717,780 | 7\,370\,692,035|
D |61,798             | 161,735           |  267\,806,587 | 7\,370\,582,303 |
E | 143,225|  92,265|  267\,868,385 | 7\,370\,744,038||  
  |      |   Verificação |  \textcolor{blue}{\textbf{268\,011,610}} | \textcolor{blue}{\textbf{7\,370\,836,303}}| 
\end{tabular}
%\caption{ }
%\label{tab:coordenadatotal}
%\end{table}

----
\begin{itemize}
\item \textit{cálculo da distância horizontal e azimute dos alinhamentos
da poligonal}\index{Poligonal!fechada!cálculo azimute}\index{Azimute!cálculo}\index{Distância horizontal!cálculo}
\end{itemize}
O azimute e a distância horizontal final dos alinhamentos devem calculados
ao final, pois, uma vez que os erros dos ângulos e o linear foram
compensados, a direção e a distância dos alinhamentos foram distintas
das inicialmente calculadas e medidas, respectivamente. Estes azimutes
e distâncias recalculados, serão as medidas a serem apresentadas no
memorial descritivo e na planta final do levantamento.

As direções e as distâncias dos alinhamentos podem ser calculadas
por meio das coordenadas parciais compensadas ou das coordenadas retangulares
finais. As relações para a determinação do azimute e da distância
horizontal de um alinhamento AB, por exemplo, por meio das coordenadas
parciais compensadas ou das coordenadas retangulares finais, são:

\begin{equation}
\label{eq:calculoAzimutefinal}
\tan \mathrm{Az}_{\mathrm{AB}} = \frac{x_\mathrm{B}-x_\mathrm{A}}{y_\mathrm{B}-y_\mathrm{A}} = \frac{\Delta x}{\Delta y}
\end{equation}

\begin{align}
\label{eq:calculoDHfinal}
\mathrm{DH}_\mathrm{AB} |= \frac{x_\mathrm{B}-x_\mathrm{A}}{\sin \mathrm{Az}_{\mathrm{AB}}} = \frac{\Delta x}{\sin \mathrm{Az}_{\mathrm{AB}}}\nonumber |
 |= \frac{y_\mathrm{B}-y_\mathrm{A}}{\cos \mathrm{Az}_{\mathrm{AB}}} = \frac{\Delta y}{\cos \mathrm{Az}_{\mathrm{AB}}} \nonumber |
 |= \sqrt{(x_\mathrm{B}-x_\mathrm{A})^2+(y_\mathrm{B}-y_\mathrm{A})^2} = \sqrt{\Delta x^2 + \Delta y^2}\
\end{align}

Para simplificação das Equações \ref{eq:calculoAzimutefinal} e \ref{eq:calculoDHfinal},
foram utilizados, :math:`\Delta x`e :math:`\Delta y`, e não :math:`\Delta x_C`e :math:`\Delta y_C`, como
apresentado anteriormente. Na determinação correta do azimute, deve-se considerar o quadrante
em que o alinhamento se encontra, somando :math:`180^\circ`se o alinhamento
estiver no quadrante SE ou SW e, somando :math:`360^\circ`se o alinhamento
estiver no quadrante NW. No quadrante NE, o azimute é dado diretamente
na Equação.

Cabe também salientar que, a Equação \ref{eq:calculoAzimutefinal}
não é definida quando :math:`\Delta y=0`, nem a Equação \ref{eq:calculoDHfinal},
quando :math:`\sin \mathrm{Az}_{\mathrm{AB}}=0`ou :math:`\cos \mathrm{Az}_{\mathrm{AB}}=0`.
Desta forma, comsiderar:
\begin{enumerate}
\item na Equação \ref{eq:calculoAzimutefinal} o :math:`\Delta y=0`, o azimute
será de :math:`90^\circ`ou de :math:`270^\circ`, se :math:`\Delta x>0`ou :math:`\Delta x<0`,
respectivamente;
\item na Equação \ref{eq:calculoDHfinal} com o :math:`\sin \mathrm{Az}_{\mathrm{AB}}=0`
(:math:`\mathrm{Az=0^{\circ}}`ou :math:`\mathrm{Az=180^{\circ}}`), a DH será
o módulo de :math:`\Delta y`;
\item na Equação \ref{eq:calculoDHfinal} com o :math:`\cos \mathrm{Az}_{\mathrm{AB}}=0`
(:math:`\mathrm{Az=90^{\circ}}`ou :math:`\mathrm{Az=270^{\circ}}`), a DH será
o módulo de :math:`\Delta x`.
\end{enumerate}
\begin{mybox}[breakable,enhanced,pad at break=0mm]{}Calcular os azimutes e as distâncias horizontais
finais dos alinhamentos do nosso exemplo.

\soluca

\noindent  A partir das  coordenadas parciais compensadas do Exemplo
\ref{exem:Calcular_erro_linear} e, por meio da Equação \ref{eq:calculoAzimutefinal}, o azimute
AB será:

:math:`{\displaystyle \tan\mathrm{Az}_{\mathrm{AB}}=\frac{-193,622}{56,964}=-3,3990}\therefore\mathrm{Az_{AB}}=\arctan-3,3990=-73^{\circ}36'22''`,

Como o alinhamento está no quadrante NW:

:math:`{\displaystyle \mathrm{Az}_{\mathrm{AB}}=360^{\circ}-73^{\circ}36'22''=286^{\circ}23'38''}`.

Já a :math:`\mathrm{DH}_{\mathrm{AB}}`, considerando a Equação \ref{eq:calculoDHfinal}:

:math:`\mathrm{DH}_{\mathrm{AB}}=\sqrt{-193,622^2+56,964^2} = 201,828`m.|

Para os demais alinhamentos, o procedimento é equivalente, sendo o
resultado apresentado na Tabela a seguir.


\begin{tabular} {crrrr} 
Alinhamento    |:math:`\Delta x_C`      | :math:`\Delta y_C`     | DH       | Az  | 
AB             | :math:`-193,622`          | :math:`56,964`           |  :math:`201,828`| :math:`286^\circ23'38''`|
BC             | :math:`-100,208`          | :math:`-201,232`         |  :math:`224,802`| :math:`206^\circ28'19''`|
CD             |:math:`88,807`            | :math:`-109,732`        |  :math:`141,166`| :math:`141^\circ 0'59''`|
DE             |:math:`61,798`            | :math:`161,735`          |  :math:`173,139`| :math:`20^\circ54'42''`|
EA             | :math:`143,225`          |  :math:`92,265`          |  :math:`170,371`| :math:`57^\circ12'38'':math:`|  

\end{tabular}

Observe que as distâncias horizontais e azimutes não correspondem
aqueles medidos em campos e calculados, respectivamente (ver Figura
\ref{fig:coordenadasparciaispoligona}). Isto ocorre pois, ao longo
dos cálculos da poligonal fechada, os erros angulares e lineares foram
compensados, modificando as posições dos pontos, logo a distância
horizontal entre eles os seus sentidos.

----

Após os cálculo das coordenadas, e azimutes finais, a \citeonline[página 19]{NBR13133}
ainda estabelece que:``\textit{Após o ajustamento, devem ser calculados
e comparados com seus valores preestabelecidos como tolerâncias os
erros médios relativos entre quaisquer duas estações poligonais (para
todos os lados poligonais), o erro médio em azimute e o erro médio
em coordenadas (de posição)}''. Estes procedimentos de avaliação fogem
ao objetivo introdutório deste livro, logo, não serão apresentados.
Todavia, estas informações podem ser obtidas na \citeonline{NBR13133}.