.. raw:: html

    <style> .exem {color:blue; font-weight: bold} </style>

.. role:: exem

.. raw:: html

    <style> .solucao {font-weight: bold} </style>

.. role:: solucao

.. raw:: html

    <style> .blue {color:blue} </style>

.. role:: blue

.. _RST Capitulo 8:

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

.. _poligonal_fechada:

Poligonal fechada
=================
Uma poligonal fechada é aquela que começa e termina no mesmo ponto,
é matematicamente e geometricamente fechada, permitindo a avaliação
dos erros angulares e lineares. Um exemplo deste tipo de poligonal
é apresentado na :numref:`fig_ExemploPoligonalFechada.png`, onde
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
ser apoiada ou não. Por exemplo, na :numref:`ExemploPoligonalAbertaApoiada` a
e b é apresentada, respectivamente, uma poligonal dita apoiada e não
apoiada. Na poligonal aberta e apoiada (:numref:`ExemploPoligonalAbertaApoiada` a),
ela começa e termina em alinhamentos conhecidos, onde as suas coordenadas
foram previamente estabelecidas. Esta poligonal é dita geometricamente
aberta e matematicamente fechada, sendo possível realizar uma avaliação
do erro angular de fechamento (ver seção :ref:`eaf`) e do erro linear.
Já a poligonal aberta e sem apoio (:numref:`ExemploPoligonalAbertaApoiada` b), não é possível a avaliação dos
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

.. _Cálculo de uma poligonal fechada:

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

   Procedimento para cálculo de uma poligonal fechada em um ponto.

Exemplo de cálculo de poligonal fechada
---------------------------------------
Na :numref:`fig_PoligonalFechadaSolucao.png` é apresentado um exemplo
de caderneta de campo para uma poligonal do tipo fechada. Esta poligonal
será utilizada como o nosso exemplo para as avaliações e cálculos
que devem ser realizados neste tipo de politonal. Na caderneta de
campo há a indicação de que os ângulo internos foram medidos pelo
método das direções e a distâncias horizontais correspondem a média
das leituras de ré e vante dos alinhamentos. Existe dois pontos de
controle, o :math:`\mathrm{O}` e o :math:`\mathrm{A}`, onde suas coordenadas UTM foram determinadas
por meio de levantamento GNSS, logo, o azimute :math:`\mathrm{OA}` pode ser determinado.
Ele será a referência para a determinação dos demais azimutes. No
início do levantamento, com o equipamento na estação :math:`\mathrm{A}`, a primeira
medida de ângulo horizontal foi do alinhamento de azimute conhecido,
:math:`\mathrm{OA}`, ao primeiro alinhamento da poligonal, :math:`\mathrm{AB}`. Depois passou-se a medir
os ângulos internos e as distâncias horizontais dos alinhamentos,
sendo os seus valores anotados na tabela da caderneta de campo.

.. _fig_PoligonalFechadaSolucao.png:

.. figure:: /images/capitulo8/fig_PoligonalFechadaSolucao.png
   :scale: 75 %
   :alt: fig_PoligonalFechadaSolucao.png
   :align: center

   Caderneta de campo de uma poligonal fechada.

.. _eaf:

Avaliação do erro angular de fechamento
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

A avaliação o erro angular de fechamento é realizada por meio da verificação
do somatório dos ângulos internos medidos com o somatório dos ângulos
internos teórico. Para o nosso exemplo, como o número de vértices
é de :math:`5` :math:`(n=5)`, temos que o somatório teórico é de :math:`540^\circ`,
:math:`(n-2)180^\circ`. Logo, erro angular de fechamento é de :math:`35''`.
Considerando a tolerância máxima do erro angular de fechamento
:math:`\text{T}\alpha\leq40''\sqrt{n} = 89''`,
conclui-se que os ângulos internos foram medidos dentro dos limites
admissível de erro, logo, os ângulos internos podem ser compensados.
A compensação que será aplicada é a linear, conforme apresentada na
Tabela abaixo. Note que o método linear
é indicado quando o comprimento do alinhamentos forem aproximadamente
constante. Quando isto não ocorrer,
melhor ponderar as compensações pelos comprimentos dos alinhamentos
em que o ângulo foi medido onde, as maiores compensações são aplicadas
para os comprimentos mais curtos, pois estes estão sujeitos aos maiores
erros nas suas medidas (ver :cite:`loch` e :cite:`WOLF`).

.. table:: Compensação do erro angular pelo método linear
    :widths: 1 1 1 1
    :header-alignment: cccc
    :column-alignment: cccr

    ============ ======================================= ================================= ========================================
    Estação      :math:`\sphericalangle` medido          erro médio                        :math:`\sphericalangle` compensado
    ============ ======================================= ================================= ========================================
    :math:`A`    :math:`49^\circ  7'44''`                :math:`+7`                        :math:`49^\circ 7'51''`
    :math:`B`    :math:`100^\circ  4' 4''`               :math:`+7`                        :math:`100^\circ 4'11''`
    :math:`C`    :math:`114^\circ 34'23''`               :math:`+7`                        :math:`114^\circ34'30''`
    :math:`D`    :math:`59^\circ55' 7''`                 :math:`+7`                        :math:`59^\circ55'14''`
    :math:`E`    :math:`\underline{216^\circ18' 7''}`    :math:`\underline{+7}`            :math:`\underline{216^\circ18'14''}`
    :math:`\,`   :math:`\Sigma=539^\circ59'25''`         :math:`\Sigma=35''`               :math:`\Sigma=540^\circ0'0''`
    ============ ======================================= ================================= ========================================


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
o meridiano da quadrícula. Como no nosso
exemplo foram determinadas as coordenadas UTM dos pontos de controle
:math:`\mathrm{O}` e :math:`\mathrm{A}`, pode-se calcular o azimute :math:`\mathrm{OA}`
e, como o ângulo :math:`\mathrm{OAB}` também foi
medido, o azimute :math:`\mathrm{AB}` pode ser calculado, conforme apresentado no Exemplo
abaixo.

----

:exem:`Exemplo 1` Calcular o azimute :math:`\mathrm{AB}` da
poligonal fechada apresentada na :numref:`fig_PoligonalFechadaSolucao.png`,
onde se conhecem as coordenadas UTM dos pontos :math:`\mathrm{O}` e :math:`\mathrm{A}`,
e o ângulo :math:`\mathrm{OAB}`.

:solucao:`Solução:`
Cálculo do azimute :math:`\mathrm{OA}` por meio das coordenadas UTM:

.. figure:: /images/capitulo8/exem_Calcularoazimutepoligonalfechadasolucaoa.png
   :scale: 55 %
   :alt: exem_Calcularoazimutepoligonalfechadasolucaoa.png
   :align: center

Cálculo do azimute :math:`\mathrm{AB}` utilizando o azimute :math:`\mathrm{OA}` e
o ângulo horizontal :math:`\mathrm{OAB}':

.. figure:: /images/capitulo8/exem_Calcularoazimutepoligonalfechadasolucaob.png
   :scale: 55 %
   :alt: exem_Calcularoazimutepoligonalfechadasolucaob.png
   :align: center

----

Por meio de um azimute da poligonal conhecido, no nosso exemplo o
azimute :math:`\mathrm{AB}` e; com as medidas dos ângulos internos compensadas, os
demais azimutes da poligonal podem ser calculados. O azimute de um
alinha manto é dado pelo azimute do alinhamento anterior :math:`\pm180^\circ`,
mais o ângulo interno compensado. Os azimutes provisórios calculados
para o nosso exemplo são apresentados na Tabela abaixo,
onde no final, o azimute :math:`\mathrm{AB}` é recalculado
para a verificação dos cálculos.

.. table:: Tabela de cálculo dos azimutes do exemplo da :numref:`fig_PoligonalFechadaSolucao.png`. Note que os ângulos internos são os compensados.
    :header-alignment: ccc
    :column-alignment: ccl

    ============= ==================================== ===========================================================================================
    Estação       :math:`\sphericalangle` compensado   Az
    ============= ==================================== ===========================================================================================
    :math:`A`     :math:`49^\circ 7'51''`              :math:`\color{blue}{\mathrm{\mathbf{Az_{AB}}}\mathbf{=286^\circ22'25''}}` **(conhecido)**
    :math:`B`     :math:`100^\circ 4'11''`             :math:`\mathrm{Az_{BC}}=286^\circ22'25''-180^\circ+100^\circ 4'11''=206^\circ26'36''`
    :math:`C`     :math:`114^\circ33'22''`             :math:`\mathrm{Az_{CD}}=206^\circ26'36''-180^\circ+114^\circ34'30''=141^\circ 1' 6''`
    :math:`D`     :math:`59^\circ55'14''`              :math:`\mathrm{Az_{DE}}=141^\circ 1' 6''-180^\circ+59^\circ55'14'' = 20^\circ56'20''`
    :math:`E`     :math:`216^\circ18' 14''`            :math:`\mathrm{Az_{EA}}=20^\circ56'20'' -180^\circ+216^\circ18'14''= 57^\circ14'34''`
    **Verificação**
    ----------------------------------------------------------------------------------------------------------------------------------------------
    :math:`A`     :math:`49^\circ 7'51''`              :math:`\mathrm{Az_{AB}}=57^\circ14'34'' -180^\circ+49^\circ 7'51''=-73^\circ37'35''=\color{blue}\mathbf{286^\circ22'25''}`
    ============= ==================================== ===========================================================================================

Cálculo das coordenadas parciais
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Uma vez calculados os azimutes provisórios, tem-se que determinar
as coordenadas parciais dos alinhamentos, que nada mais são do que
as projeções dos alinhamentos sobre o eixo-:math:`x` e :math:`y`. Na
:numref:`fig_coordenadasparciais` é apresentado um alinhamento
hipotético :math:`\mathrm{AB}`, e a sua projeção sobre o eixo-:math:`x` e :math:`y`, correspondendo,
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

A nossa poligonal, :math:`\mathrm{ABCDEA}`, começa e termina em um mesmo ponto, o :math:`\mathrm{A}`.
Uma vez que as medidas de ângulos e distância estão sujeitas a erros,
caso se calcule as coordenadas retangulares das estações a partir
das coordenadas parciais (:numref:`fig_coordenadaspar`),
ao invés de obtermos ao final a mesma coordenada da estação :math:`A`, obteríamos
uma coordenada distinta, onde a denominaremos de :math:`A'`. Na :numref:`fig_errolinear`
é apresentado um esquema da nossa poligonal
que não fecha em :math:`A`, mas sim em :math:`A'`. A distância entre :math:`A` e :math:`A'`
é denominado de erro de fechamento linear :math:`(E)`. Ele é utilizado
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

:solucao:`Solução:` De acordo com a Equação :eq:`erro_linear` e, os valores
de :math:`\Sigma\Delta x` e :math:`\Sigma\Delta y` apresentados na
:numref:`fig_coordenadaspar`,
temos:

.. math::
   E = \sqrt{(0,301)^2+(-0,424)^2} =0,520\,\text{m}.

O valor do perímetro da poligonal é de :math:`911,307\,\text{m}\,(0,911307\,\text{km})`
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
   Pr =\frac{E}{\Sigma\mathrm{DH}}\\
   Pr =\frac{0,520}{911,307}

Dividindo o numerador e o denominador por :math:`0,520`, com a finalidade
de tornar o numerador :math:`1` e, arredondando o denominador, temos:

.. math::
   Pr =\frac{\dfrac{0,520}{0,520}}{\dfrac{911,307}{0,520}}\\
   Pr =\frac{1}{1\,753}.

Significa que no nosso levantamento ocorre :math:`1\,\text{m}` de erro a cada :math:`1\,753\,\text{m}`
de perímetro da poligonal. Quanto maior o valor do denominador,
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

:solucao:`Solução:` De acordo com a Equação :eq:`eq:compensacaoerrolinearx`
e :eq:`eq:compensacaoerrolineary`, para o alinhamento AB, temos:

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
    :header-alignment: cccccccc
    :column-alignment: crrrrrrr

    =========== ===================================== ================================== ================================== ================================ ================================= ================================= ==================================
    Estação     DH                                    :math:`\Delta x`                   :math:`\Delta y`                   :math:`C_{\Delta x}`             :math:`C_{\Delta y}`              :math:`\Delta x_C`                :math:`\Delta y_C`
    =========== ===================================== ================================== ================================== ================================ ================================= ================================= ==================================
    :math:`A`   :math:`201,737`                       :math:`-193,555`                   :math:`56,870`                     :math:`-0,067`                   :math:`0,094`                     :math:`-193,622`                  :math:`56,964`
    :math:`B`   :math:`224,863`                       :math:`-100,134`                   :math:`-201,337`                   :math:`-0,074`                   :math:`0,105`                     :math:`-100,208`                  :math:`-201,232`
    :math:`C`   :math:`141,247`                       :math:`88,854`                     :math:`-109,798`                   :math:`-0,047`                   :math:`0,066`                     :math:`88,807`                    :math:`-109,732`
    :math:`D`   :math:`173,084`                       :math:`61,855`                     :math:`161,654`                    :math:`-0,057`                   :math:`0,081`                     :math:`61,798`                    :math:`161,735`
    :math:`E`   :math:`\underline{170,376 }`          :math:`\underline{143,281}`        :math:`\underline{92,187}`         :math:`\underline{-0,056}`       :math:`\underline{0,078}`         :math:`\underline{143,225}`       :math:`\underline{92,265}`
    :math:`\,`  :math:`\Sigma=911,307`                :math:`\Sigma=0,301`               :math:`\Sigma=-0,424`              :math:`\Sigma=-0,301`            :math:`\Sigma=0,424`              :math:`\Sigma=0`                  :math:`\Sigma=0`
    =========== ===================================== ================================== ================================== ================================ ================================= ================================= ==================================

----

Cálculo das coordenadas retangulares da poligonal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

A poligonal vai servir de apoio para as medidas dos pontos de detalhe
do mapeamento logo, o cálculo das suas coordenadas retangulares se
faz necessário. A partir das coordenadas retangulares, por exemplo,
podem-se calcular as distâncias horizontais e os azimutes finais dos
alinhamentos. Também, a partir das coordenadas retângulares, pode-se
calcular a área da poligonal pelo método de Gauss (seção :any:`areaGauss`).

Para o cálculo das coordenadas retângulares, há a necessidade de se
conhecer pelo menos a coordenada de um ponto. Em uma situação ideal,
a poligonal é vinculada a rede geodésica (Sistema Geodésico Brasileiro),
onde será utilizada as coordenadas UTM. Em não havendo pontos de apoio
topográfico, pode-se atribuir uma coordenada a um ponto, tomando-se
o cuidado dele ter valores suficientemente altos, para não resultar
em coordenadas retângulares negativas nos outros pontos. Por exemplo
pode-se adotar no ponto inicial, :math:`x=10.000\,\text{m}` e :math:`y=10.000\,\text{m}`.
Outros procedimentos para a amarração da poligonal podem ser verificados
na :cite:`NBR13133` [páginas 7-8].

Considere um alinhamento hipotético AB, onde são conhecidas, a coordenada
retangular do ponto A (:math:`x_\mathrm{A},\,x_\mathrm{A}`) e as coordenadas
parciais de AB :math:`(\Delta x_{\mathrm{AB}}` e :math:`\Delta y_{\mathrm{AB}})`,
então a coordenada de B será:

.. math::
   x_\mathrm{B} = x_\mathrm{A}+\Delta x_{\mathrm{AB}}
   :label: eq:coordenadatoalx

.. math::
   y_\mathrm{B} = y_\mathrm{A}+\Delta y_{\mathrm{AB}}
   :label: eq:coordenadatoaly

----

:exem:`Exemplo 4`  Calcular as coordenadas retangulares da poligonal
da :numref:`fig_PoligonalFechadaSolucao.png`, considerando conhecida
a coordenada UTM da estação A
:math:`(\text{E}=268\,011,610\,\text{m};\,\text{N}=7\,370\,836,303\,\text{m})`.

:solucao:`Solução:` A coordenada UTM, E e N, da estação A é em relação ao
eixo-:math:`x` e :math:`y` da quadrícula logo, :math:`x_{\mathrm{A}} = 268\,011,610\,\text{m}` e
:math:`y_{\mathrm{A}}=7\,370\,836,303\,\text{m}`.
De acordo com a Equação :eq:`eq:coordenadatoalx` e :eq:`eq:coordenadatoaly`,
e as coordenadas parciais AB compensada, temos:

:math:`{\displaystyle x_{\mathrm{B}}=268\,011,610+-193,622=267\,817,988}\,\text{m}`,

:math:`{\displaystyle y_{\mathrm{B}}=7\,370\,836,303+56,964=7\,370\,893,267}\,\text{m}`.

Para os demais alinhamentos, os resultados são apresentados na Tabela
a seguir. Note que a coordenada da estação conhecida
é colocada na sua respectiva linha, assim, na linha da estação A,
é colocado o valor da coordenada UTM obtida por GNSS. Para as demais
estações a coordenada é calculada, somando a coordenada da linha acima
(anterior) com a parcial, também da linha acima na Tabela. Com o objetivo
de verificção dos cálculos, ao final, a coordenada do ponto inicial
é calculada, em que deve-se obter o mesmo valor da coordenada de saída,
neste exemplo, a obtida por GNSS.

.. table::
    :header-alignment: ccccc
    :column-alignment: crrrr

    =========== ==================== ========================================= ================================================= =========================================================
    Estação     :math:`\Delta x_C`   :math:`\Delta y_C`                        :math:`x` (E)                                     :math:`y` (N)
    =========== ==================== ========================================= ================================================= =========================================================
    :math:`A`   :math:`-193,622`     :math:`56,964`                            :math:`\textcolor{blue}{\mathbf{268\,011,610}}`   :math:`\textcolor{blue}{\mathbf{7\,370\,836,303}}`
    :math:`B`   :math:`-100,208`     :math:`-201,232`                          :math:`267\,817,988`                              :math:`7\,370\,893,267`
    :math:`C`   :math:`88,807`       :math:`-109,732`                          :math:`267\,717,780`                              :math:`7\,370\,692,035`
    :math:`D`   :math:`61,798`       :math:`161,735`                           :math:`267\,806,587`                              :math:`7\,370\,582,303`
    :math:`E`   :math:`143,225`      :math:`92,265`                            :math:`267\,868,385`                              :math:`7\,370\,744,038`
    :math:`\,`  :math:`\,`           **Verificação**                           :math:`\textcolor{blue}{\mathbf{268\,011,610}}`   :math:`\textcolor{blue}{\mathbf{7\,370\,836,303}}`
    =========== ==================== ========================================= ================================================= =========================================================

----

Cálculo da distância horizontal e azimute dos alinhamentos da poligonal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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


.. math::
   \tan \mathrm{Az}_{\mathrm{AB}} = \frac{x_\mathrm{B}-x_\mathrm{A}}{y_\mathrm{B}-y_\mathrm{A}} = \frac{\Delta x}{\Delta y}
   :label: eq:calculoAzimutefinal

.. math::
   \mathrm{DH}_\mathrm{AB}  = \frac{x_\mathrm{B}-x_\mathrm{A}}{\sin \mathrm{Az}_{\mathrm{AB}}} = \frac{\Delta x}{\sin \mathrm{Az}_{\mathrm{AB}}}
   :label: eq:calculoDHfinal2

.. math::
   \mathrm{DH}_\mathrm{AB}= \frac{y_\mathrm{B}-y_\mathrm{A}}{\cos \mathrm{Az}_{\mathrm{AB}}} = \frac{\Delta y}{\cos \mathrm{Az}_{\mathrm{AB}}} \nonumber\\
   :label: eq:calculoDHfina3

.. math::
   \mathrm{DH}_\mathrm{AB}= \sqrt{(x_\mathrm{B}-x_\mathrm{A})^2+(y_\mathrm{B}-y_\mathrm{A})^2} = \sqrt{\Delta x^2 + \Delta y^2}
   :label: eq:calculoDHfinal

Parasimplificação das Equações :eq:`eq:calculoAzimutefinal` a :eq:`eq:calculoDHfinal`,
foram utilizados, :math:`\Delta x` e :math:`\Delta y`, e não :math:`\Delta x_C` e :math:`\Delta y_C`, como
apresentado anteriormente. Na determinação correta do azimute, deve-se considerar o quadrante
em que o alinhamento se encontra, somando :math:`180^\circ` se o alinhamento
estiver no quadrante SE ou SW e, somando :math:`360^\circ` se o alinhamento
estiver no quadrante NW. No quadrante NE, o azimute é dado diretamente
na Equação.

Cabe também salientar que, a Equação :eq:`eq:calculoAzimutefinal`
não é definida quando :math:`\Delta y=0`, nem a Equação :eq:`eq:calculoDHfinal2` e :eq:`eq:calculoDHfina3`,
quando  :math:`\sin \mathrm{Az}_{\mathrm{AB}}=0` ou :math:`\cos \mathrm{Az}_{\mathrm{AB}}=0`.
Desta forma, comsiderar:


- na Equação :eq:`eq:calculoAzimutefinal` o :math:`\Delta y=0`, o azimute
  será de :math:`90^\circ` ou de :math:`270^\circ`, se :math:`\Delta x>0` ou :math:`\Delta x<0`,
  respectivamente;
- na Equação :eq:`eq:calculoDHfinal2` com o :math:`\sin \mathrm{Az}_{\mathrm{AB}}=0`
  :math:`(\mathrm{Az=0^{\circ}}` ou :math:`\mathrm{Az=180^{\circ}})`, a DH será
  o módulo de :math:`\Delta y`;
- na Equação :eq:`eq:calculoDHfina3` com o :math:`\cos \mathrm{Az}_{\mathrm{AB}}=0`
  :math:`(\mathrm{Az=90^{\circ}}` ou :math:`\mathrm{Az=270^{\circ}})`, a DH será
  o módulo de :math:`\Delta x`.


:exem:`Exemplo 5` Calcular os azimutes e as distâncias horizontais
finais dos alinhamentos do nosso exemplo.

:solucao:`Solução:` A partir das  coordenadas parciais compensadas do Exemplo
2 e, por meio da Equação :eq:`eq:calculoAzimutefinal`, o azimute
AB será:

.. math::
   \tan\mathrm{Az}_{\mathrm{AB}} &=\frac{-193,622}{56,964}\\
   \tan\mathrm{Az}_{\mathrm{AB}} &=-3,3990\\
   Az_{AB} &=\arctan(-3,3990)\\
   Az_{AB} &=-73^{\circ}36'22'',

Como o alinhamento está no quadrante NW:

:math:`{\displaystyle \mathrm{Az}_{\mathrm{AB}}=360^{\circ}-73^{\circ}36'22''=286^{\circ}23'38''}`.

Já a :math:`\mathrm{DH}_{\mathrm{AB}}`, considerando a Equação :eq:`eq:calculoDHfinal`:

:math:`\mathrm{DH}_{\mathrm{AB}}=\sqrt{-193,622^2+56,964^2} = 201,828\,\text{m}`.

Para os demais alinhamentos, o procedimento é equivalente, sendo o
resultado apresentado na Tabela a seguir.

.. table::
    :header-alignment: ccccc
    :column-alignment: crrrr

    ============= ===================== ===================== =============== ===============================
    Alinhamento   :math:`\Delta x_C`    :math:`\Delta y_C`    DH               Az
    ============= ===================== ===================== =============== ===============================
    :math:`AB`    :math:`-193,622`      :math:`56,964`        :math:`201,828`  :math:`286^\circ23'38''`
    :math:`BC`    :math:`-100,208`      :math:`-201,232`      :math:`224,802`  :math:`206^\circ28'19''`
    :math:`CD`    :math:`88,807`        :math:`-109,732`      :math:`141,166`  :math:`141^\circ 0'59''`
    :math:`DE`    :math:`61,798`        :math:`161,735`       :math:`173,139`  :math:`20^\circ54'42''`
    :math:`EA`    :math:`143,225`       :math:`92,265`        :math:`170,371`  :math:`57^\circ12'38''`
    ============= ===================== ===================== =============== ===============================

Observe que as distâncias horizontais e azimutes não correspondem
aqueles medidos em campos e calculados, respectivamente (ver :numref:`fig_coordenadaspar`). Isto ocorre pois, ao longo
dos cálculos da poligonal fechada, os erros angulares e lineares foram
compensados, modificando as posições dos pontos, logo a distância
horizontal entre eles os seus sentidos.

----

Após os cálculo das coordenadas, e azimutes finais, a :cite:t:`NBR13133`, página 19,
ainda estabelece que: **'Após o ajustamento, devem ser calculados
e comparados com seus valores preestabelecidos como tolerâncias os
erros médios relativos entre quaisquer duas estações poligonais (para
todos os lados poligonais), o erro médio em azimute e o erro médio
em coordenadas (de posição)'**. Estes procedimentos de avaliação fogem
ao objetivo introdutório deste livro, logo, não serão apresentados.
Todavia, estas informações podem ser obtidas na :cite:`NBR13133`.


Cálculo da poligonal quando pontos não podem ser ocupados
---------------------------------------------------------

Muitas vezes, no levantamento de uma poligonal, não é possível ocupar
os pontos do limite da área, por exemplo, se o limite é materializado
por uma cerca. Logo, o que se pode fazer é, estacionar o equipamento
em uma posição próxima, e a partir desta estação, medir o ângulo horizontal
entre o alinhamento da poligonal e o ponto de interesse e, também,
a distância horizontal entre a estação e o ponto. Com o ângulo horizontal
do alinhamento e o azimute da poligonal conhecido, é calculado o azimute
da estação ao ponto obstruído e suas coordenadas parciais. Então,
a coordenada do ponto obstruído pode ser calculada, uma vez que ele
está apoiado em um ponto de coordenada conhecida e se conhecem as
suas coordenadas parciais.

:exem:`Exemplo 6`  Considere que no nosso exemplo, ao invés da poligonal
de interesse ser a :math:`\mathrm{ABCDEA}`, passe a ser a :math:`\mathrm{ABPDEA}`, de acordo com a Figura
que segue. A distância horizontal :math:`\mathrm{CP}` e o ângulo à direita :math:`\mathrm{BCP}` foram
medidos, sendo, respectivamente, de :math:`7,85\,\text{m}` e  :math:`253^\circ22'` . Calcular
o azimute e a distância horizontal do alinhamento :math:`\mathrm{BP}`.


.. figure:: /images/capitulo8/fig_pontoobstruido.png
   :scale: 35 %
   :alt: fig_pontoobstruido.png
   :align: center

:solucao:`Solução:` Primeiramente, deve-se calcular a coordenada do ponto :math:`\mathrm{P}`. Para tanto,
temos que determinar o  :math:`\mathrm{Az}_{\mathrm{CP}}`  e as suas coordenadas
parciais do alinhamento :math:`\mathrm{CP}`. O  :math:`\mathrm{Az}_{\mathrm{CP}}`  é:

.. math::
   \mathrm{Az}_{\mathrm{CP}} &=\mathrm{Az}_{\mathrm{BC}}-180^{\circ}+\mathrm{BCP}\\
   \mathrm{Az}_{\mathrm{CP}} &=206^{\circ}26'36''-180^{\circ}+253^{\circ}22'\\
   \mathrm{Az}_{\mathrm{CP}} &=279^{\circ}48'36''.

As coordenadas parciais do alinhamento :math:`\mathrm{CP}`:

.. math::
   \Delta x_{{\mathrm{CP}}}  &=\mathrm{DH}_{\mathrm{CP}}\sin\mathrm{Az}_{\mathrm{CP}}\\
   &=7,85\sin279^{\circ}48'36''\\
   &=-7,735\,\text{m},

.. math::
   \Delta y_{{\mathrm{CP}}} &=\mathrm{DH}_{\mathrm{CP}}\cos\mathrm{Az}_{\mathrm{CP}}\\
   &=7,85\cos279^{\circ}48'36''\\
   &=1,338\,\text{m}.

Uma vez que a coordenada do ponto :math:`\mathrm{C}` foi calculada (Exemplo 4),
:math:`x_\mathrm{C}=267.717,780\,\text{m}`  e  :math:`y_\mathrm{C}=7.370.692,035\,\text{m}`, a
coordenada de :math:`\mathrm{C}` será (Equações :eq:`eq:coordenadatoalx` e :eq:`eq:coordenadatoaly`):

.. math::
   x_{\mathrm{P}} &=x_{\mathrm{C}}+\Delta x_{{\mathrm{CP}}}\\
   &=267.717,780+-7,735\\
   &=267.710,045\,\text{m},

.. math::
   y_{\mathrm{P}} &=y_{\mathrm{C}}+\Delta y_{{\mathrm{CP}}}\\
   &=7.370.692,035+1,337\\
   &=7.370.693,372\,\text{m}.

Com a coordenada do ponto :math:`\mathrm{B}` conhecida (Exemplo 5)
e utilizando as Equação :eq:`eq:calculoAzimutefinal`, temos o azimute
:math:`\mathrm{BP}`:

.. math::
   \tan\mathrm{Az}_{\mathrm{BP}}&=\frac{x_{\mathrm{B}}-x_{\mathrm{P}}}{y_{\mathrm{B}}-y_{\mathrm{P}}}\\
   &=\frac{267.817,988-267.710,045}{7.370.893,267-7.370.693,372}\\
   &=\frac{107,943}{199,895}

Como o alinhamento :math:`\mathrm{BP}` está no quadrante SW:

.. math::
   \mathrm{Az}_{\mathrm{BP}}&=\arctan\frac{107,943}{199,895}+180^{\circ}\\
   \mathrm{Az}_{\mathrm{BP}}&=208^{\circ}22'8''.

A distância horizontal :math:`\mathrm{BP}` (Equação :eq:`eq:calculoDHfinal`):

.. math::
   \mathrm{Az}_{\mathrm{BP}} &=\sqrt{(x_{\mathrm{B}}-x_{\mathrm{P}})^{2}+(y_{\mathrm{B}}-y_{\mathrm{P}})^{2}}\\
   \mathrm{Az}_{\mathrm{BP}} &=\sqrt{(267.817,988-267.710,045)^{2}+(7.370.893,267-7.370.693,372)^{2}}\\
   \mathrm{Az}_{\mathrm{BP}} &=227,178\,\text{m}.

----

Cálculo de uma poligonal aberta e apoiada
-----------------------------------------

No cálculo de uma poligonal aberta e apoiada, as compensações dos
erros angulares e lineares são realizadas da mesma forma que na poligonal
fechada, caso estejam dentro da tolerância estabelecida pela :cite:t:`NBR13133`.
Na avaliação dos erros, se a poligonal aberta e apoiada tem desenvolvimento
curvo, deve-se calcular o erro de fechamento angular e linear da mesma
forma que na poligonal fechada em um ponto, conforme apresentado na
seção :ref:`Cálculo de uma poligonal fechada`, e comparar com a tolerância
máxima para este tipo de poligonal. Já, se o desenvolvimento da poligonal
for retilíneo, devem-se calcular os erros de fechamento longitudinal
:math:`(\mathit{efl})` e o transversal :math:`(\mathit{eft})`,
e comparar se estes estão de acordo com a tolerância da :cite:t:`NBR13133`.


.. _AbertaApoiadaErro.png:

.. figure:: /images/capitulo8/AbertaApoiadaErro.png
   :scale: 35 %
   :alt: AbertaApoiadaErro.png
   :align: center

   Representação do erro de fechamento longitudinal e transversal de uma poligonal aberta e apoiada.


Na :numref:`AbertaApoiadaErro.png` é apresentada uma representação
gráfica conceitual do :math:`\mathit{efl}`  e do :math:`\mathit{eft}`.
Seja :math:`\mathrm{AE}` o alinhamento entre os pontos das estações de apoio, de saída e de
chegada, do levantamento da poligonal :math:`\mathrm{ABCDE}`. Como o levantamento está
sujeito aos erros angulares e lineares, quando calculada a posição
do ponto de chegada, ao invés de encontrarmos a coordenada de :math:`\mathrm{E}`, será
outra, denominaremos de :math:`\mathrm{E}'` . A interseção da projeção perpendicular
de :math:`\mathrm{E}'`  ao alinhamento :math:`\mathrm{AB}`, será denominado
de :math:`\mathrm{H}`. Desta forma, o :math:`\mathit{efl}`
será comprimento entre o ponto :math:`\mathrm{H}` e :math:`\mathrm{E}`,
enquanto o :math:`\mathit{eft}`  é
a distância entre :math:`\mathrm{H}` e :math:`\mathrm{E}'` . Como a poligonal tem desenvolvimento
retilíneo, :math:`\mathit{eft}`  é função dos erro angular de fechamento,
enquanto o :math:`\mathit{efl}`  é função do erro linear.

O :math:`\mathit{eft}`  e o :math:`\mathit{efl}`  podem ser obtidos analiticamente,
antes da compensação angular. Um exemplo de procedimento de cálculo
é apresentado no Exemplo que segue.

----

:exem:`Exemplo 7` De acordo com a :numref:`AbertaApoiadaErro.png`, seja: a coordenada da estação de controle
:math:`\mathrm{E}` igual a :math:`x_{\mathrm E}=1\,420,118\,\text{m}` e
:math:`y_{\mathrm E}=1\,159,889\,\text{m}`; a
coordenada :math:`\mathrm{E}'` , calculada a partir das medidas de campo, sem a correção
angular e linear igual a :math:`x_{\mathrm{E}'}=1\,419,080\,\text{m}`
e :math:`y_{\mathrm{E}'}=1\,160,235\,\text{m}`;
o azimute entre as estações de controle :math:`\mathrm{AE}` de :math:`230^\circ28'40''`.
Pergunta-se, qual o :math:`\mathit{eft}` e o :math:`\mathit{efl}` desta poligonal aberta
e apoiada.

:solucao:`Solução:`

.. figure:: /images/capitulo8/ExemploAbertaApoiadaErro.png
   :scale: 35 %
   :alt: ExemploAbertaApoiadaErro.png
   :align: center

----

.. admonition:: Sugestão de aula prática

   **Levantamento de uma poligonal fechada**

   *Objetivo*: Levantar, e calcular as coordenadas finais de uma poligonal a ser estabelecida em campo.
   Considerar o modelo da caderneta de campo apresentada na :numref:`fig_PoligonalFechadaSolucao.png`.

   *Material*: Estação total e acessórios.

   Como sugestão de roteiro:

   - materializar em campo o poligonal a ser levantada;
   - no ponto inicial, depois do equipamento nivelado, estabelecer a direção do Norte;
   - medir o azimute do primeiro alinhamento;
   - fazer as medições no sentido anti-horário da poligonal, medindo os ângulos internos à direita e a distância horizontal do vétice ao ponto de vante;
   - avaliar o erro angular de fechamento;
   - compensar o erro angular de fechamento pelo método linear;
   - avaliar o erro linear;
   - calcular a precisão relativa;
   - compensar o erro de fechamento;
   - calcular as coordenadas totais;
   - desenhar no *AutoCad*;

   Apresentar a poligonal em planta, com a sua precisão.

Exercícios
==========

:exem:`1)`  Em uma poligonal fechada com 5 vértices, :math:`\mathrm{ABCDE}`,
foram medidos os ângulos horizontais à direita
(internos), sendo: :math:`\mathrm{A}=100^\circ 27' 9''`,
:math:`\mathrm{B}=71^\circ 20' 45''`, :math:`\mathrm{C}=216^\circ 47' 5''` , :math:`\mathrm{D}=60^\circ 0' 3''`
e :math:`\mathrm{E}=91^\circ 25'18''`. Calcular o erro angular de fechamento
e realizar a compensação pelo método linear. 

:exem:`Resp.:`  :math:`E=20'`; ângulos compensados: :math:`\mathrm{A}=100^\circ27' 5''`;
:math:`\mathrm{B}= 71^\circ20'41''`; :math:`\mathrm{C}=216^\circ47' 1''`; :math:`\mathrm{D}= 59^\circ59'59''`
e :math:`\mathrm{E}=91^\circ25'14''`.

----

:exem:`2)`  Fazer um esboço da
poligonal :math:`\mathrm{ABCDE}` e: calcular as coordenadas parciais; o erro de fechamento
linear :math:`(E)` e; a precisão relativa :math:`(P_r)` do levantamento do exercício
1. Considere o azimute do alinhamento :math:`\mathrm{AB}`
de :math:`201^\circ 4'55''`  e, as distâncias horizontais dos alinhamentos
em metros, de: :math:`\mathrm{AB}=173,831`; :math:`\mathrm{BC}=82,447`;
:math:`\mathrm{CD}=100,334`; :math:`\mathrm{DE}=206,936`  e
:math:`\mathrm{EA}133,172`.

:exem:`Resp.:`  Na Figura abaixo.

.. _resp_exer_2.png:

.. figure:: /images/capitulo8/resp_exer_2.png
   :scale: 35 %
   :alt: resp_exer_2.png
   :align: center

----

:exem:`3)`  O erro linear de fechamento encontrado no exercício
3 está dentro do limite estabelecido pela
NBR13133, considerando :math:`\mathrm{T}_p\leq0,56\sqrt{L(\mathrm{km})}` ?


:exem:`Resp.:`  Sim.

----

:exem:`4)`  Compensar as coordenadas
parciais do exercício 2  utilizando o método
proporcional ao comprimento dos lados e, sendo atribuída a coordenada
do ponto :math:`\mathrm{A}`, :math:`x_\mathrm{A}=1.000\,\text{m}` e
:math:`y_\mathrm{A}=1.000\,\text{m}`, calcular
as coordenadas dos demais vértices. 

:exem:`Resp.:`  Na Tabela abaixo.

.. table::
    :header-alignment: cccccc
    :column-alignment: crrrrr

    ====================== =============================== ============================== ================== ===================== ====================
    Alin                   :math:`\Delta x_{\mathrm{C}}`   :math:`\Delta y_{\mathrm{C}}`  Ponto              :math:`x`             :math:`y`
    ====================== =============================== ============================== ================== ===================== ====================
    :math:`\mathrm{AB}`    :math:`-62,484`                 :math:`-162,126`               :math:`\mathrm{A}` :math:`1\,000,000`    :math:`1\,000,000`
    :math:`\mathrm{BC}`    :math:`82,394`                  :math:`-3,458`                 :math:`\mathrm{B}` :math:`937,517`       :math:`837,874`
    :math:`\mathrm{CD}`    :math:`77,768`                  :math:`-63,388`                :math:`\mathrm{C}` :math:`1\,019,911`    :math:`834,416`
    :math:`\mathrm{DE}`    :math:`33,174`                  :math:`204,351`                :math:`\mathrm{D}` :math:`1\,097,679`    :math:`771,028`
    :math:`\mathrm{EA}`    :math:`-130,852`                :math:`24,620`                 :math:`\mathrm{E}` :math:`1\,130,852`    :math:`975,380`
    ====================== =============================== ============================== ================== ===================== ====================

----

:exem:`5)`  Calcular os azimutes finais dos alinhamentos
:math:`\mathrm{BC}` e :math:`\mathrm{CD}` do exercício 4.

:exem:`Resp.:`  :math:`\mathrm{Az}_{\mathrm{BC}}=92^\circ24' 11,4''` 
e :math:`\mathrm{Az}_{\mathrm{CD}}=129^\circ10'59,5''`.

----

:exem:`6)`  Calcular as distâncias horizontais finais dos alinhamentos
:math:`\mathrm{BC}` e :math:`\mathrm{CD}` do exercício 4.

:exem:`Resp.:`  :math:`\mathrm{DH}_{\mathrm{BC}}=82,467\,\text{m}` e
:math:`\mathrm{DH}_{\mathrm{CD}}=100,329\,\text{m}`.

----

:exem:`7)` Seja a poligonal
fechada apresentada na :numref:`ExerciPoligoaltriangulo`, com: os
ângulos internos medidos à direita; o azimute :math:`\mathrm{AB}` de :math:`106^\circ12'36''`
e; a coordenada de :math:`\mathrm{A}`, :math:`x_\mathrm{A}=5\,000\,\text{m}` e
:math:`y_\mathrm{A}=5\,000\,\text{m}`.
Sendo a compensação do erro de fechamento angular compensado pelo
método linear e, a compensação do erro de fechamento linear pelo o
método proporcional ao comprimento dos lados, calcular: 

a. o erro angular de fechamento;
b. o erro de fechamento linear :math:`(E)`;
c. a precisão relativa :math:`(P_r)`;
d. as coordenadas dos pontos :math:`\mathrm{B}` e :math:`\mathrm{C}`;
e. o azimute final :math:`\mathrm{BC}`.

.. _ExerciPoligoaltriangulo:

.. figure:: /images/capitulo8/ExerciPoligoaltriangulo.png
   :scale: 35 %
   :alt: ExerciPoligoaltriangulo
   :align: center

   Dados do Exercício 7.

----

:exem:`Resp.:`  a) erro angular de fechamento de :math:`9''`;
b) :math:`E=0,145\,\text{m}`;
c) :math:`P_r=1/15\,892`;
d) Ponto :math:`\mathrm{B}` :math:`(x_\mathrm{B}=5\,633,767\,\text{m; }`
:math:`y_\mathrm{B}=4\,815,722\,\text{m})` e
ponto :math:`\mathrm{C}` :math:`(x_\mathrm{C}=5\,198,167\,\text{m; }` :math:`y_\mathrm{C}=5\,660,787\,\text{m})`;
e) :math:`\mathrm{Az}_{\mathrm{BC}}=332^\circ43'50''`.

:exem:`8)`  Na :numref:`fig_ExerciPoligoal3` são apresentadas
as distâncias horizontais e as coordenadas parciais não compensadas
da poligonal :math:`\mathrm{ABCDE}`. Calcular:

a. o erro de fechamento linear :math:`(E)`;
b. a precisão relativa :math:`(P_r)`;
c. os azimutes e as distâncias horizontais após a compensação do erro de fechamento linear pelo o método proporcional ao comprimento dos lados.

.. _fig_ExerciPoligoal3:

.. figure:: /images/capitulo8/fig_ExerciPoligoal3.png
   :scale: 35 %
   :alt: fig_ExerciPoligoal3
   :align: center

   Dados do Exercício 8.

:exem:`Resp.:`  a) :math:`E=0,424\,\text{m}`; b) :math:`P_r=1/10\,379` ;
d) na Tabela abaixo.

.. table::
    :header-alignment: ccc
    :column-alignment: crr

    ===================== ========================== =====================
    Alinhamento           Az                          DH
    ===================== ========================== =====================
    :math:`\mathrm{AB}`   :math:`213^\circ38'10''`    :math:`632,008`
    :math:`\mathrm{BC}`   :math:`121^\circ53'49''`    :math:`1\,128,664`
    :math:`\mathrm{CD}`   :math:`45^\circ57'10''`    :math:`1\,160,489`
    :math:`\mathrm{DE}`   :math:`282^\circ20'53''`    :math:`1\,476,432`
    ===================== ========================== =====================

----
