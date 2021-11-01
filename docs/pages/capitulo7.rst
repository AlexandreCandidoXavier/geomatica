.. raw:: html

    <style> .exem {color:blue; font-weight: bold} </style>

.. role:: exem

.. raw:: html

    <style> .solucao {font-weight: bold} </style>

.. role:: solucao

.. raw:: html

    <style> .blue {color:blue} </style>

.. role:: blue

.. _RST Capitulo7:

Capitulo 7: Ângulos
*******************

Introdução
==========

Para a determinação das coordenadas de pontos topográficos, uma vez
na área do levantamento, e com o auxílio de teodolitos/estações totais,
medem-se os ângulos e as distâncias entre alinhamentos. Neste capítulo
analisaremos os ângulos medidos, que podem ser, horizontais (secção
:ref:`Ângulo horizontal`) ou verticais (secção :ref:`Ângulo vertical`),
que são medidos em relação ao plano horizontal e vertical, respectivamente.
Para os cálculos das coordenadas dos pontos, há a necessidade de conhecer
(calcular) a direção dos alinhamentos em relação ao meridiano utilizado,
ou seja, os azimutes ou rumos, sendo também vistos neste capítulo.


Medidores de ângulos
====================

Na topografia, são utilizados bússolas, teodolitos ótico mecânicos,
teodolitos eletrônicos e estações totais para a medição dos ângulos.
Os ângulos que se podem medir com estes equipamentos são de dois tipos,
o horizontal e o vertical,
exceção da bússola, onde pode-se medir apenas ângulos horizontais.
Nos teodolitos eletrônicos e nas estações totais, os ângulos são medidos
eletronicamente, podendo-se armazená-los automaticamente na memória
do equipamento. Já nos teodolitos ótico mecânicos, tem-se que fazer
a leitura do ângulo no círculo horizontal e vertical graduado (limbo),
anotando-a na caderneta de campo.

Na :numref:`fig_esquemateodo.png` é apresentado um esquema dos limbos
vertical e horizontal de um teodolito ótico mecânico. Quando o equipamento
está nivelado sobre um ponto, o seu eixo vertical coincide com a linha
da vertical do lugar, contendo o ponto estacionado e o centro ótico
do equipamento :math:`(O)`. O círculo horizontal é normal ao eixo vertical.
Já o círculo vertical, tem direção paralela ao eixo vertical e o seu
centro coincide com o eixo horizontal do instrumento. Na maioria dos
nossos equipamentos, os ângulos são medidos na unidade de graus, de
:math:`0^\circ` a :math:`360^\circ`, no sentido horário. O :math:`0^\circ` do círculo
horizontal, pode ser fixo em qualquer direção, ficando independente
do movimento da luneta. Com o círculo horizontal, o ângulo horizontal
entre dois pontos qualquer pode ser medido :math:`(\alpha)`, onde os procedimentos
para a sua medição são apresentados na Secção :ref:`Método das direções`.


.. _fig_esquemateodo.png:

.. figure:: /images/capitulo7/fig_esquemateodo.png
   :scale: 75 %
   :alt: fig_esquemateodo.png
   :align: center

   Esquema de um teodolito com os círculos vertical e horizontal.


Com relação ao ângulo vertical, quando o equipamento está nivelado,
o :math:`0^\circ` do círculo vertical tem direção do zênite ou do plano
horizontal que passa pelo centro ótico da luneta, respectivamente, ângulo zenital e de inclinação
:math:`(z)`. Maiores informações sobre os ângulos verticais podem ser encontrados
na secção :ref:`Ângulo vertical`.

.. _Ângulo horizontal:

Ângulo horizontal
=================

Alinhamento de vante e ré
-------------------------

A :numref:`fig_introangulo.png` apresenta a sequência de vértices
:math:`\mathrm{EAB}`, onde é realizada a medida do ângulo horizontal, no sentido horário,
:math:`\alpha`, no vértice :math:`\mathrm{A}`. Para a medida de :math:`\alpha`, o ponto :math:`\mathrm{E}` é o
ponto inicial (**ponto de ré**), onde se realiza a **visada de ré**,
enquanto e :math:`\mathrm{B}`, é o ponto final (**ponto de vante**), onde
é realizada a **visada de vante**. Aos alinhamentos que correspondem
ao início e ao final das medidas, denominamos de alinhamentos de **ré**
e **vante**. Para este exemplo, :math:`\mathrm{AE}` é o alinhamento de ré e :math:`\mathrm{AB}`
o de vante. O ângulo :math:`\alpha` pode ser calculado subtraindo a medida
do ângulo horizontal de vante da medida de ré.

.. _fig_introangulo.png:

.. figure:: /images/capitulo7/fig_introangulo.png
   :scale: 55 %
   :alt: fig_introangulo.png
   :align: center

   Leitura do ângulos internos :math:`\mathrm{EAB}`.

Medição do ângulo horizontal
----------------------------

Existem várias formas de medição dos ângulos horizontais, a mais simples
é apresentada na :numref:`fig_introangulo.png`, em que o ângulo :math:`\alpha`
é determinado de apenas uma leitura no ponto de ré e no de vante.
Todavia, devido aos erros instrumentais, deve-se considerar a média
de várias medidas de :math:`\alpha`, com a luneta na posição direta e inversa
(ver secção :ref:`Ângulo vertical`).
Neste texto será apresentado o método das direções, que é o previsto
para ser utilizado pela :cite:t:`NBR13133` na medição de ângulos.
Para outros métodos, pode-se consultar, :cite:t:`loch`, :cite:t:`golcalves` e :cite:t:`WOLF`.

.. _Método das direções:

Método das direções
^^^^^^^^^^^^^^^^^^^

Considere os alinhamentos apresentados na :numref:`fig_introangulo.png`.
O método das direções tem as seguintes etapas quando se trabalha com
estação total:

a. equipamento é centralizado e nivelado em A, ponto da estação;
b. com a luneta na posição direta (PD), é realizada uma aproximação em E, ponto de ré. Com o movimento horizontal e vertical travados, e com o auxílio dos parafusos de movimento micrométrico, é realizada a visada exata ao centro prisma;
c. o ângulo horizontal em E pode ser zerado, ou o seu valor lido, teremos :math:`(L_{\mathrm{PD}}^\mathrm{r\acute{e}})`;
d. com o movimento horizontal e vertical solto, faz-se uma visada aproximada em B, ponto de vante, e com os parafusos micrométricos, depois que os movimentos horizontal e vertical estiverem travados, faz-se a aproximação precisa ao centro do prisma, anotando-se o ângulo horizontal :math:`(L_{\mathrm{PD}}^\mathrm{vante})`. Se na etapa anterior  o ângulo horizonal foi zerado, o ângulo horizontal em B corresponderá a :math:`\alpha` na posição direta, :math:`\alpha_{\mathrm{PD}}`. Se o ângulo horizontal na etapa anterior não foi zerado, o valor de :math:`\alpha_{\mathrm{PD}}` será dado pela diferença dos ângulos horizontais de vante e de ré, no nosso caso,  :math:`\alpha_{\mathrm{PD}}=L_{\mathrm{PD}}^\mathrm{vante}-\mathrm{L}_{\mathrm{PD}}^\mathrm{r\acute{e}}`;
e. repete-se as estapas b a d, :math:`n` vezes;
f. coloca-se a luneta na posição inversa (PI), e repete-se as etapas de b a d mais :math:`n`  vezes, onde teremos :math:`n` valores de :math:`\alpha` com a luneta na PI, :math:`\alpha_{\mathrm{PI}}`;
g. o valor médio de :math:`\alpha\,(\bar{\alpha})`, será a média de todas as medidas na posição direta e inversa:

.. math::
   \bar{\alpha} &= \frac{\sum_{i=1}^n\left(\alpha_{\mathrm{PD},i}+\alpha_{\mathrm{PI},i}\right)}{2n}\\
   &=\frac{\sum_{i=1}^n\left(L_{\mathrm{PD,}i}^\mathrm{vante}-L_{\mathrm{PD,}i}^\mathrm{r\acute{e}}+L_{\mathrm{PI,}i}^\mathrm{vante}-\mathrm{L}_{\mathrm{PI,}i}^\mathrm{r\acute{e}}\right)}{2n}

Na :numref:`fig_metododasdirecoes.png` é apresentado um exemplo de
cálculo de um ângulo horizontal entre dois alinhamentos pelo método
das direções. São realizadas duas repetições, com a luneta na posição
direta e inversa. Na posição direta, o ângulo horizontal no ponto
de ré foi zerado, o mesmo não acontecendo quando a posição era a inversa.
Se trabalhando com estação total, o ângulo horizontal no ponto de
ré, quando a luneta está na posição inversa, também poderia ter sido
zerado. Este último procedimento, zerar o ângulo horizontal no ponto
de ré quando a luneta está na posição inversa, não é realizado quando
utiliza-se o teodolito do tipo ótico mecânico. Uma vez que o método
das direções visa medir os ângulos horizontais em diferentes posições
do limbo destes equipamentos. Para maiores informações, consultar
:cite:t:`NBR13133`, página 3.

.. _fig_metododasdirecoes.png:

.. figure:: /images/capitulo7/fig_metododasdirecoes.png
   :scale: 45 %
   :alt: fig_metododasdirecoes.png
   :align: center

   Exemplo de anotações para medida de ângulo pelo método das direções.


Ângulos horizontais à direita
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Os ângulos horizontais medidos entre os alinhamentos são na grande
maioria os ângulos internos  e
de deflexão. Na :numref:`fig_ExemploAnguloDexaoInterno.png` a
são apresentados ângulos **horizontais internos** medidos
**à direita**, ou seja, no sentido horário nos vértices :math:`\mathrm{A, B, C, D}` e :math:`\mathrm{E}`.
Os ângulos são medidos na sequência :math:`\mathrm{A, B, C, D}` e :math:`\mathrm{E}`. Desta forma, os
alinhamentos :math:`\mathrm{AB}`, :math:`\mathrm{BC}`,
:math:`\mathrm{CD}`, :math:`\mathrm{DE}` e :math:`\mathrm{EA}` são denominados de *vante*.
Já :math:`\mathrm{BA}`, :math:`\mathrm{CB}`, :math:`\mathrm{DC}`,
:math:`\mathrm{DE}` e :math:`\mathrm{AE}` são os alinhamentos de *ré*. Observe
que para medir os ângulos internos horizontais à direita da poligonal
fechada :math:`\mathrm{ABCDE}`, tem-se que fazer um caminhamento no sentido anti-horário.
No alinhamento :math:`\mathrm{AB}` é apresentado o seu azimute, ou seja a sua direção
em relação ao meridiano. Ela é necessária para o cálculo dos azimutes
dos demais alinhamentos, como será visto na Secção :ref:`Cálculodoazimute`.

Ângulos de deflexão
^^^^^^^^^^^^^^^^^^^

O **ângulo de deflexão** de um determinado
alinhamento é o ângulo entre ele e o prolongamento do alinhamento
anterior. Na :numref:`fig_ExemploAnguloDexaoInterno.png` b é apresentado
um exemplo de um levantamento utilizando este tipo de medida angular.
Pode-se observar que o ângulo de deflexão pode ser à direita (deflexão
à direita, DD)  ou à esquerda
(deflexão à esquerda, DE), se
o alinhamento é medido à direita ou à esquerda do prolongamento anterior,
respectivamente. Os ângulo de deflexão têm variação de :math:`0^\circ` a :math:`180^\circ`.
As medidas de ângulos de deflexão são as mais utilizadas para a locação
de estradas, dutos, canais de irrigação, etc. Em algumas estações
totais, é possível configurá-la para trabalhar com este tipo de ângulo.

.. _fig_ExemploAnguloDexaoInterno.png:

.. figure:: /images/capitulo7/fig_ExemploAnguloDexaoInterno.png
   :scale: 65 %
   :alt: fig_ExemploAnguloDexaoInterno.png
   :align: center

   Exemplo de poligonais medidas por ângulos internos à direita (a)
   e por de deflexão (b). DD  é a deflexão à direita e DE  deflexão à esquerda.

.. _Meridiano:

Meridiano
---------

Em um levantamento topográfico, tem-se que definir qual é a referência
de meridiano que se vai utilizar, podendo ser:


- o **meridiano astronômico**: é a linha que passa pelos pólos geográficos da terra,
  é determinado usualmente por medidas astronômicas;
- o **meridiano geodésico**: é a linha
  gerada pela intersecção do elipsóide de revolução com o plano que
  passa pelos seus pólos.  Atualmente com o GNSS,  a sua definição em campo tornou-se de fácil obtenção;
- o **meridiano magnético**: é o plano
  vertical que passa pelo eixo da agulha magnetizada livre, com apoio
  apenas no seu centro. Por exemplo, a direção norte-sul dada por uma
  bússola, é a direção do meridiano local (Secção :ref:`Declinação magnética`);
- o **meridiano da quadrícula**:
  corresponde a direção do eixo-:math:`y` do sistema cartesiano da quadrícula,
  da projeção cartográfica. Nas coordenas UTM, corresponde ao eixo Norte
  (Secção :any:`UTM`).
  Também é de fácil determinação com uso do GNSS;
- o **meridiano hipotético**: é aquele
  estabelecido em campo, sem relação com os apresentados acima. Deve
  ser evitado, uma vez que, no futuro, pode tornar difícil ou até impossível
  aviventar o levantamento. Sugere-se, caso se utilize este tipo, a
  construção de marcos nos pontos que foram utilizados para a sua definição.
  Desta forma, seria possível a aviventação dos alinhamentos no futuro.

.. _Azimute:

Azimute
-------

O **azimute** (Az) de um alinhamento é o ângulo horizontal entre
o meridiano e o alinhamento, medido no sentido horário. As medidas
de azimute iniciam no norte do meridiano, variando de :math:`0^{\circ}` a :math:`360^{\circ}`.
O meridiano pode ser quaisquer dos apresentados na secção :ref:`Meridiano`.

O azimute quando medido do começo para o final do alinhamento é denominado
**azimute de vante**. Na :numref:`fig_Azimutevantere.png` a
são observados os azimutes de vante OA, OB, OC OD, respectivamente,
de :math:`45^\circ`, :math:`160^\circ`, :math:`230^\circ` e :math:`300^\circ`.

O **azimute** de ré do alinhamento OA (vante) é o azimute de AO, ou seja,
quando o azimute do alinhamento
é medido do final para o início do alinhamento. Quando se conhece
o azimute de vante um alinhamento, o seu azimute de ré pode ser calculado:
i) subtraindo-se o azimute de :math:`180^\circ` se ele estiver entre :math:`180^\circ` e :math:`360^\circ`
ou; ii) somando-se ao azimute :math:`180^\circ`, se ele estiver :math:`0^\circ` e :math:`180^\circ`.
Na :numref:`fig_Azimutevantere.png` b é apresentado o alinhamento
OA com azimute de vante, :math:`45^\circ`, e o seu azimute de ré, AO, de
:math:`225^\circ` (:math:`180^\circ+45^\circ`).

.. _fig_Azimutevantere.png:

.. figure:: /images/capitulo7/fig_Azimutevantere.png
   :scale: 45 %
   :alt: fig_Azimutevantere.png
   :align: center

   Exemplo de azimutes de vante (a) e ré do alinhamento OA (b).


Rumo
----

O rumo de um alinhamento é o menor ângulo que ele faz com o meridiano,
logo, nunca é maior que :math:`90^\circ`. A medição dele começa no norte
ou sul do meridiano, medindo-se à direita ou à esquerda, caso o alinhamento
se encontre à leste (E) ou à oeste (W) do meridiano, respectivamente.
Para a sua adequada descrição, além do ângulo, deve-se constar o quadrante
na qual o alinhamento se encontra, nordeste (NE), sudeste (SE), sudoeste
(SW) ou noroeste (NW). O meridiano pode ser o geodésico, da quadrícula,
hipotético, etc. 

Chama-se de **rumo de vante**, quando o mesmo é medido do início
do alinhamento para o final. Na :numref:`fig_rumovantere.png` a
são observados exemplos de medidas de direção utilizando o rumo de
vante. Observe que os alinhamentos estão nas mesmas direções e sentidos
do exemplo apresentado para o azimute na :numref:`fig_rumovantere.png` a.

O **rumo de ré** OA é o rumo AO, ou seja,
quando mede-se o rumo do fim do alinhamento para o começo. Os valores
dos rumos de ré também são menores que :math:`90^\circ`, e deve-se informar
o quadrante em que se encontra. O rumo de ré é de fácil determinação,
o valor angular é o mesmo e o quadrante, o oposto. Na :numref:`fig_rumovantere.png` b
é apresentado o rumo de ré do alinhamento OA, :math:`45^\circ\,\text{SW}`.

.. _fig_rumovantere.png:

.. figure:: /images/capitulo7/fig_rumovantere.png
   :scale: 45 %
   :alt: fig_rumovantere.png
   :align: center

   Exemplo de rumos de vante (a) e ré (b) do alinhamento OA.

.. _Conversão de azimutes em rumos:

Conversão de azimutes em rumos
------------------------------

Para fazer a conversão de azimute para rumo basta verificar o quadrante
em que se encontra o alinhamento e aplicar a regra da Equação :eq:`eq:azimute2rumo`.
Note que para o rumo, deve-se acrescentar o quadrante em que se encontra
o alinhamento. 

.. math::
   \begin{gathered}\mathrm{Rumo}\end{gathered}
   =\begin{cases}
   \mathrm{Az} & \mathrm{(NE)\,se\,}\mathrm{0^{\circ}<Az\leq90^{\circ}}\\
   \mathrm{180^{\circ}-\mathrm{Az}} & \mathrm{(SE)\,se\,}90^{\circ}<\mathrm{Az}\leq180^{\circ}\\
   \mathrm{Az-180}^{\circ} & \mathrm{(SW)\,se\,}180^{\circ}<\mathrm{Az}\leq270\\
   360^{\circ}-\mathrm{Az} & \mathrm{(NW)\,se\,}270^{\circ}<\mathrm{Az}\leq360^{\circ}
   \end{cases}
   :label: eq:azimute2rumo

----

:exem:`Exemplo 1` Dados os azimutes dos alinhamentos: :math:`12=37^\circ40'`,
:math:`23=122^\circ15'`, :math:`34=257^\circ30'` e :math:`45=290^\circ10'`. Calcular o rumo.

:solucao:`Solução:`
Na Figura abaixo é apresentada a solução.

.. _fig_exrumoazimute.png:

.. figure:: /images/capitulo7/fig_exrumoazimute.png
   :scale: 45 %
   :alt: fig_exrumoazimute.png
   :align: center

----

Erro angular de fechamento
--------------------------

Sempre que se realiza um levantamento topográfico é necessário fazer
a verificação se os erros nas medições de ângulos e distâncias estão
de acordo com a tolerância definida pela :cite:t:`NBR13133`, para
depois compensá-los, se estiver dentro do máximo tolerado. Tal procedimento
só é possível se a poligonal for do tipo fechada ou quando aberta
e apoiada (ver :any:`RST Capitulo8`). Por exemplo, se for
uma poligonal fechada em um ponto e os ângulos internos medidos, o
erro angular de fechamento é a diferença do somatório do ângulos internos
medidos com o somatório
dos ângulos internos teórico. Se aberta e apoiada, é a diferença do
azimute calculado do alinhamento final com o azimute deste alinhamento
previamente estabelecido.

Para o somatório dos ângulos internos, considere, por exemplo, uma
poligonal fechada fechada na forma de triângulo, em que foram medidos
os ângulos internos, temos o número de lados desta poligonal, :math:`n`,
de três. Logo soma dos ângulos internos teórico é de :math:`180^\circ`.
Pode-se generalizar por :math:`(n-2)180^\circ` o
somatório dos ângulos internos teórico de uma poligonal qualquer com
:math:`n` vértices. 

A tolerância para o erro angular de fechamento :math:`(\mathrm{T}\alpha)`
vária de acordo com finalidade levantamento a ser realizado. Para
uma poligonal fechada de :math:`n` vértices e apoiada em um só ponto, cuja
a finalidade é para estudos de viabilidade em projetos de engenharia,
temos :math:`\mathrm{T}\alpha\leq40''\sqrt{n}`. Para outros casos ver :cite:t:`NBR13133`.
Em se encontrando um erro angular menor do que o estabelecido pela
norma, é realizada a compensação, que nada mais é do que, a distribuição
do erro angular de fechamento nos ângulos medidos. 

----

:exem:`Exemplo 2` Calcular o erro angular de fechamento da poligonal fechada da
:numref:`fig_ExemploAnguloDexaoInterno.png` a. Se o levantamento foi realizado
para estudos de viabilidade em projetos de engenharia,
pergunta-se, o erro angular de fechamento estaria dentro da tolerância estabelecida pela NBR13133?

:solucao:`Solução:`
Para a poligonal em questão, temos 5 lados, :math:`n=5`, então somatório de ângulos internos
teórico é :math:`540^\circ`, :math:`(5-2)180^\circ`. O somatório dos ângulos internos medidos é:

.. table::
    :widths: 1 2
    :header-alignment: lc
    :column-alignment: lr

    =========== =======================================================
    Vértice     :math:`\sphericalangle`  medido
    =========== =======================================================
    :math:`A`   :math:`99^\circ48'54''`
    :math:`B`   :math:`95^\circ55'15''`
    :math:`C`   :math:`118^\circ37'50''`
    :math:`D`   :math:`82^\circ47'2''`
    :math:`E`   :math:`\underline{142^\circ50'14''}`
    :math:`\,`  :math:`\Sigma=539^\circ59'15''`
    =========== =======================================================

Desta forma, o erro angular de fechamento é de :math:`-45''` :math:`(539^\circ59'15''-540^\circ)`.
Se o levantamento fosse para  estudos de viabilidade em projetos de engenharia,
:math:`\mathrm{T}\alpha\leq40''\sqrt{n}=89''`. Como o erro do levantamento é menor,
considerando valor absoluto :math:`(|-45''|)`, pode-se concluir que o erro nas medições
dos ângulos da poligonal estão dentro do limite estabelecido pela NBR13133, podendo-se
realizar a compensação.

----

Compensação do erro angular
---------------------------

Uma vez que o erro angular de fechamento foi menor do que a tolerância,
e antes de se calcular os rumos ou os azimutes, é necessário que se
faça a compensação do erro angular de fechamento, para que o somatório
dos ângulos internos da poligonal levantada seja igual ao do valor
teórico. Existem vários métodos de compensação, sendo que o mais comum
é distribuir o erro angular de forma linear entre os ângulos medidos.
Ou seja, aplicar em cada um dos vértices o erro médio, dado pelo erro
angular de fechamento dividido pelo número de lados. No Exemplo abaixo
é apresentada a distribuição do erro angular para o levantamento da
:numref:`fig_ExemploAnguloDexaoInterno.png` a.
Este método deve ser utilizado quando os comprimentos dos alinhamentos
forem aproximadamente iguais. Outros métodos de compensação podem
ser encontrados, por exemplo, em :cite:t:`loch`.

:exem:`Exemplo 3`
Distribuir o erro angular de fechamento da poligonal fechada
da :numref:`fig_ExemploAnguloDexaoInterno.png` pelo método linear.

:solucao:`Solução:`
Na tabela a seguir, é apresentado o resultado da compensação. Na coluna **I**
estão os ângulos horizontais medidos em cada um dos vértices; na **II**
o erro médio e na **III**, o ângulo interno compensado (**I** + **II**).
Com o erro angular de fechamento de :math:`-45''` (ver exemplo 2), e sendo a poligonal
de cinco lados, temos o erro médio de :math:`9''` :math:`(45''/5)`. Note que,
como o somatório dos ângulos medidos foi menor do que o teórico, então deve-se
somar :math:`9''` a cada um dos vértices. Caso contrário, o somatório das medidas
angulares maiores que o teórico, deve-se subtrair.

.. table::
    :header-alignment: cccc
    :column-alignment: crrr

    =========== =========================================== =========================== ================================================
    Vértice     :math:`\sphericalangle` medido **(I)**)     erro médio **(II)**         :math:`\sphericalangle` compensado **(I+II)**
    =========== =========================================== =========================== ================================================
    :math:`A`   :math:`99^\circ48'54''`                     :math:`+9`                  :math:`99^\circ49'3''`
    :math:`B`   :math:`95^\circ55'15''`                     :math:`+9`                  :math:`95^\circ55'24''`
    :math:`C`   :math:`118^\circ37'50''`                    :math:`+9`                  :math:`118^\circ37'59''`
    :math:`D`   :math:`82^\circ47'2''`                      :math:`+9`                  :math:`82^\circ47'11''`
    :math:`E`   :math:`\underline{142^\circ50'14''}`        :math:`\underline{+9}`      :math:`\underline{142^\circ50'23''}`
    :math:`\,`  :math:`\Sigma=539^\circ59'15''`             :math:`\Sigma=45''`         :math:`\Sigma=540^\circ00'00''`
    =========== =========================================== =========================== ================================================

----

.. _Cálculodoazimute:

Cálculo do azimute a partir dos ângulos internos à direita
----------------------------------------------------------

Para os cálculos das coordenadas parciais, é necessário determinar
os azimutes ou rumos dos alinhamentos. Normalmente, nos cálculos,
trabalha-se com valores de azimute, uma vez, que os sentidos das coordenadas
parciais dos alinhamentos são dados diretamente. Já, com os rumos,
temos que estabelecer os sentidos dos alinhamentos, por exemplo, se
estão com sua projeção sobre o eixo-:math:`x`, à direita ou à esquerda,
respectivamente, E ou W, do meridiano utilizado.

Quando o ângulo horizontal é medido para a direita, o cálculo do azimute
de um alinhamento é dado pelo azimute de ré do alinhamento anterior
mais o ângulo à direita. O azimute de ré, como já apresentado, é o
azimute de vante :math:`\pm 180^\circ`. Na :numref:`fig_AzimuteRumoCalculo1.png`
é apresentado graficamente o cálculo dos azimutes dos alinhamentos
para a poligonal da :numref:`fig_ExemploAnguloDexaoInterno.png`. Para esta solução
optou-se por calcular os azimutes de ré subtraindo :math:`180^\circ`, sendo
que não mudaria em nada os valores dos azimutes calculados se utilizasse
a soma de :math:`180^\circ`. Note que os ângulos internos utilizados são
os compensados (ver Exemplo 3),
e o azimute do alinhamento AB é conhecido :math:`(299^\circ8'19'')`. Para
o azimute do alinhamento BC temos:

- o azimute do alinhamento anterior, AB, é conhecido, logo o seu azimute
  de ré, BA, é dado subtraindo do azimute AB de :math:`180^\circ`, isto é,
  :math:`\mathrm{Az_{BA}}=299^\circ8'19''-180^\circ = 119^\circ8'19''`;
- para se calcular :math:`\mathrm{Az_{BC}}`, basta somar o :math:`\mathrm{Az_{BA}}`
  ao ângulo interno medido em B, :math:`\mathrm{Az_{BC}}=119^\circ8'19''+95^\circ55'24''=215^\circ3'34''`.

O procedimento acima é repetido para os demais vértices. Um ângulo
negativo indica que o ângulo está sendo contado no sentido anti-horário.
Quando o azimute calculado for menor que :math:`0^\circ` ou maior que :math:`360^\circ`,
deve-se somar ou subtrair :math:`360^\circ`, respectivamente. Se a poligonal
for fechada ou apoiada em vértices de controle, ao final dos cálculos
deve-se confrontar os azimute calculado com: o azimute inicial, se
a poligonal for fechada em um ponto ou; o azimute do alinhamento de
controle final, quando a poligonal for aberta e apoiada ao final.
Na Tabela abaixo são apresentados os cálculos quando
os dados estão tabelados.

.. _fig_AzimuteRumoCalculo1.png:

.. figure:: /images/capitulo7/fig_AzimuteRumoCalculo1.png
   :scale: 85 %
   :alt: fig_AzimuteRumoCalculo1.png
   :align: center

   Cálculo dos azimutes utilizando ângulos internos.


.. table:: Tabela de cálculo dos azimutes do exemplo da :numref:`fig_ExemploAnguloDexaoInterno.png` a. Os ângulos internos são os compensados (Exemplo 3).
    :header-alignment: cccc
    :column-alignment: crrr

    =========== =================================== ============================================================================================================================
    Vértice     :math:`\sphericalangle` compensado  Az
    =========== =================================== ============================================================================================================================
    A           :math:`99^\circ49'3''`              :math:`\color{blue}{\mathrm{\mathbf{Az_{AB}}}\mathbf{=299^\circ8'19''}}` (conhecido)
    B           :math:`95^\circ55'24''`             :math:`\mathrm{Az_{BC}}=299^\circ8'19''-180^\circ+95^\circ55'24''=215^\circ3'43''`
    C           :math:`118^\circ37'59''`            :math:`\mathrm{Az_{CD}}=215^\circ3'43''-180^\circ+118^\circ37'59''=153^\circ41'42''`
    D           :math:`82^\circ47'11''`             :math:`\mathrm{Az_{DE}}=153^\circ41'42''-180^\circ+82^\circ47'11''=56^\circ28'53''`
    E           :math:`142^\circ50'23''`            :math:`\mathrm{Az_{EA}}=56^\circ28'53''-180^\circ+142^\circ50'23''=19^\circ19'16''`
    **Verificação**
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    A           :math:`99^\circ49'3''`              :math:`\mathrm{Az_{AB}}=19^\circ19'16''-180^\circ+99^\circ49'3''=-60^\circ51'41''=\color{blue}\mathbf{299^\circ8'19''}`
    =========== =================================== ============================================================================================================================

No que diz respeito ao cálculo dos rumos, já foi dito anteriormente
que é preferível trabalhar com os ângulos de azimute devido a facilidade na computação
das projeções dos alinhamentos. Todavia, o cálculo do rumo é realizado
de maneira similar aos do azimutes. Devendo-se considerar o rumo anterior
e o ângulo interno medido. Outra possibilidade para determinação do
rumo, seria calcular o azimute e posteriormente converter para rumo.

Cálculo do azimute a partir da deflexão
---------------------------------------

Quando se trabalha com ângulos de deflexão, o azimute de um alinhamento
é dado pelo azimute anterior mais ou menos, respectivamente, o ângulo
de deflexão à direita (DD) ou à esquerda (DE) do alinhamento a ser
calculado. Tal procedimento é apresentado no Exemplo 4,
juntamente com o cálculo do erro de fechamento angular e sua compensação.

----

:exem:`Exemplo 4` A poligonal aberta da Figura a seguir foi medida por meio das deflexões,
sendo que os azimutes inicial e final, respectivamente, O1 e 5P, são conhecidos.
Calcular o erro angular de fechamento e compensar os azimutes pelo método linear.


.. figure:: /images/capitulo7/fig_angulodeflexaoExErroAngu.png
   :scale: 35 %
   :alt: fig_angulodeflexaoExErroAngu.png
   :align: center

:solucao:`Solução:`
O erro angular de fechamento será determinado comparando o azimute final do alinhamento 5P
calculado com o conhecido. As deflexões são apresentadas na coluna **I**. Os azimutes
são calculados somando ou subtraindo do azimute anterior a deflexão à direita ou à esquerda,
respectivamente (**II**). O primeiro azimute O1 que é conhecido não é calculado no início,
só no final, para avaliação do erro angular. O erro encontrado, depois de calculados os
azimutes com os ângulos de deflexões medidos, é de :math:`35''` a mais no azimute final
calculado (ver três últimas linhas da Tabela). Desta forma, a compensação linear a ser aplicada
em cada deflexão é de :math:`-7''`, média do erro angular. Para evitar de se fazer novamente
os cálculos dos azimutes com as deflexões compensadas, aplica-se diretamento nos azimutes
calculados a compensação do erro médio acumulado (**III**). Observe que depois da compensação
aplicada, o valor de azimute calculado do alinhamento final (5P) deve ser igual ao
valor conhecido (**IV**).


.. table::
    :widths: 1 1 3 1 1
    :header-alignment: ccccc
    :column-alignment: crrrr

    =========== ====================================== ===================================================================================================== ========================== ================================================
    Alin.        **(I)** Deflexão medida               **(II)** Cálculo do Az                                                                                **(III)** Compensação      **(IV)** Az comp
    =========== ====================================== ===================================================================================================== ========================== ================================================
    :math:`O1`  :math:`\,`                             Azimute conhecido :math:`20^\circ51'16''`                                                             :math:`\,`                 :math:`\,`
    :math:`12`  :math:`123^\circ21'52''\,\text{(DD)}`  :math:`20^\circ51'16''+123^\circ21'52''=144^\circ13'8''`                                              :math:`-7''\cdot1=-7''`    :math:`144^\circ13'1''`
    :math:`23`  :math:`71^\circ47'25''\,\text{(DE)}`   :math:`144^\circ13'8''-71^\circ47'25''=72^\circ25'43''`                                               :math:`-7''\cdot2=-14''`   :math:`72^\circ25'29''`
    :math:`34`  :math:`49^\circ34'36''\,\text{(DD)}`   :math:`72^\circ25'43''+49^\circ34'36''= 122^\circ0'19''`                                              :math:`-7''\cdot3=-21''`   :math:`121^\circ59'58''`
    :math:`45`  :math:`76^\circ38'42''\,\text{(DE)}`   :math:`122^\circ0'19''-76^\circ38'42''=45^\circ21'37''`                                               :math:`-7''\cdot4=-28''`   :math:`45^\circ21'9''`
    :math:`5P`  :math:`99^\circ23'11''\,\text{(DD)}`   :math:`45^\circ21'37''+99^\circ23'11''=144^\circ44'48''`                                              :math:`-7''\cdot5=-35''`   :math:`\color{blue}\mathbf{144^\circ44'13''}`
    :math:`\,`  :math:`\,`                             :math:`\text{Az}_\mathrm{5P}` calculado :math:`=144^\circ44'48''`                                     :math:`\,`                 :math:`\,`
    :math:`\,`  :math:`\,`                             :math:`\text{Az}_\mathrm{5P}` conhecido :math:`=\color{blue}\underline{\mathbf{-144^\circ44'13''}}`   :math:`\,`                 :math:`\,`
    :math:`\,`  :math:`\,`                             :math:`\text{erro}=35''`                                                                              :math:`\,`                 :math:`\,`
    =========== ====================================== ===================================================================================================== ========================== ================================================

----

Cálculo do azimute a partir das coordenadas retangulares
--------------------------------------------------------

A partir das coordenadas retangulares dos pontos de um alinhamento
é possível calcular o seu azimute. Atualmente, com o auxílio do GNSS,
ou a partir da rede do Sistema Geodésico Brasileiro, é comum começar
o levantamento a partir de pontos de coordenadas UTM. Se o azimute
for calculado das coordenadas UTM, os azimutes serão aqueles em relação
ao norte da quadrícula. O cálculo do azimute
é similar à conversão de coordenadas retangulares para polares (ver
secção :any:`Coordenada retangular para polar`,
todavia com a contagem dos ângulos no eixo-:math:`y` (N), e o sentido da
medição dos ângulos, o horário. Uma vez definido o azimute, o rumo
pode ser determinado como apresentado na Secção :ref:`Conversão de azimutes em rumos`.

----

:exem:`Exemplo 5` Dadas as coordenadas UTM, levantados com receptor GNSS, dos pontos
:math:`\mathrm{A}`, :math:`\mathrm{B}`, :math:`\mathrm{E}` e :math:`\mathrm{F}`, calcular
os azimutes e rumos dos alinhamentos :math:`\mathrm{AB}` e :math:`\mathrm{EF}`.

- :math:`\mathrm{A\,(E} = 485\,631\mathrm{~m;~N} = 7\,702\,079\mathrm{~m})`;
- :math:`\mathrm{B\,(E}=485\,701\mathrm{~m;~N}=7\,701\,980\mathrm{~m})`;
- :math:`\mathrm{E\,(E} = 485\,191\mathrm{~m;~N} = 7\,702\,043 \mathrm{~m})`;
- :math:`\mathrm{F\,(E}= 485\,231\mathrm{~m;~N}= 7\,702\,148\mathrm{~m})`.

:solucao:`Solução:`

.. figure:: /images/capitulo7/examplor5a.png
   :scale: 40 %
   :alt: examplor5a.png
   :align: center



.. figure:: /images/capitulo7/examplor5b.png
   :scale: 40 %
   :alt: examplor5b.png
   :align: center

----

Medidas de azimute em campo
---------------------------

No campo, conhecendo o azimute de um alinhamento, é possível determinar
os azimutes de outros alinhamentos. Por exemplo, considere o azimute
AB do Exemplo 5,
de :math:`{\mathrm{Az_{AB}}=142^\circ7'30''}`. Ele foi calculado de coordenadas
UTM, obtidas por GNSS, logo o meridiano é o da quadrícula das coordenadas
UTM. Suponha que temos que medir o azimute do alinhamento AC, conforme
apresentado na Figura ao lado. A metodologia a ser seguida é, estacionar
e nivelar o equipamento em A. Faz-se uma visada em B onde, via teclado,
o ângulo horizontal de :math:`142^\circ7'30''` é digitado para este ponto,
caso se trabalhe com estação total. Desta forma, estabelecemos em
campo o azimute de AB. Com teodolito, tal procedimento também é possível
por meio dos parafusos que prendem e soltam o movimento do limbo ao
equipamento. Uma vez que a direção AB é estabelecida, quando rodando
a luneta horizontalmente, o ângulo horizontal mostrar :math:`0^\circ00'00''`,
teremos a direção norte, neste caso, o norte da quadrícula. Para o
nosso exemplo, que é o de medir o azimute AC, basta fazer uma visada
precisa em C onde, o ângulo horizontal apresentado na tela da estação
total corresponderá ao valor do azimute AC :math:`(292^\circ50'2'')`.

.. figure:: /images/capitulo7/azimuteemcampo.png
   :scale: 45 %
   :alt: azimuteemcampo.png
   :align: center

Se o equipamento estiver nivelado e centralizado em B, pode-se fazer
uma visada para A. Como o azimute AB é conhecido, então o seu azimute
de ré, BA, também é, sendo igual a :math:`322^\circ7'30''~(142^\circ7'30''+180^\circ)`.
Este valor é inserido para o ângulo horizontal. Mais uma vez, agora
em B, quando o ângulo horizontal for :math:`0^\circ00'00''`, corresponderá
a direção do norte da quadrícula. Desta forma, as medidas de ângulo
horizontal a partir de B corresponderão aos azimutes. Tal procedimento,
de mudança de estação e medição dos azimutes a partir do anterior,
pode ser realizada para se fazer o levantamento de uma poligonal qualquer.
No caso dela ser fechada, como no exemplo da :numref:`fig_ExemploAnguloDexaoInterno.png`, deve-se repetir
a medida do alinhamento inicial, objetivando o calculo do erro angular
de fechamento.

.. _Declinação magnética:

Declinação magnética
====================

Parte dos levantamentos topográficos realizados no passado, utilizaram
como referência da direção norte, aquela observada pelo norte da bússola,
a qual denomina-se de norte magnético. A direção
do norte magnético pode ser definida pela direção longitudinal de
uma agulha magnetizada livre, apoiada apenas no seu centro. A agulha
será orientada de acordo com o campo magnético da terra, que tem variação
temporal e espacial. Logo, se o topógrafo têm como objetivo aviventar
para o presente os alinhamentos medidos no passado, em relação ao
norte magnético, deverá encontrar, por exemplo, a direção do norte
verdadeiro do alinhamento. Isto é possível através do conhecimento
da declinação magnética nas diferentes datas.

A declinação magnética é o ângulo formado entre o norte geodésico
e o norte magnético local. Quando o norte magnético se encontra à
direita do norte geodésico, a declinação magnética é positiva e podemos
abreviar pela letra 'E' (este). Por outro lado, quando o norte
magnético encontra-se à esquerda do norte geodésico, a declinação
magnética é negativa, ou pode-se utilizar a letra 'W' de *west*
(oeste). Na Figura :ref:`fig_magnetismodaterra.png` temos a apresentação
da declinação magnética de :math:`-19^\circ` para o ano de 2000, em uma
posição próxima a Brasília.

.. _fig_magnetismodaterra.png:

.. figure:: /images/capitulo7/fig_magnetismodaterra.png
   :scale: 55 %
   :alt: fig_magnetismodaterra.png
   :align: center

   Representação gráfica da declinação magnética na região central do Brasil para o ano de 2000.

----

:exem:`Exemplo 6` O azimute magnético do alinhamento AB é de :math:`230^\circ 23'`. Sabendo-se que
a declinação magnética local é :math:`-21^\circ 9'`, calcular o azimute verdadeiro deste alinhamento.

:solucao:`Solução:`

.. _fig_declinacaomagneticaex.png:

.. figure:: /images/capitulo7/fig_declinacaomagneticaex.png
   :scale: 45 %
   :alt: fig_declinacaomagneticaex.png
   :align: center

----

A variação temporal da declinação magnética, denomina-se de **variação secular**. Um exemplo
da variação secular da declinação magnética, logo, também, da variação
temporal do norte magnético, é apresentado na :numref:`fig_declinacaomagneticario.png`.
Os valores da declinação magnética são para a cidade do Rio de Janeiro,
baseados na Referência do Campo Geomagnético
Internacional (IGRF, **International Geomagnetic Reference Field**).
Em 1590, a declinação magnética era
de :math:`+13^\circ22'`. Com o passar dos anos, ela foi gradualmente se
deslocando para a esquerda, sendo que em 1800 era de :math:`+5^\circ13'`,
e em julho de 1853 era de :math:`0^\circ`. A declinação magnética continua
se deslocando para a esquerda, em 2016 é de :math:`-22^\circ44'`. Note
que, a forma da seta que apresenta a direção da declinação magnética
é representada de maneira distinta, quando está a este é desenhada
apenas a ponta direita, enquanto se a oeste, a ponta esquerda. Esta
nomenclatura é utilizada, por exemplo, nas cartas do IBGE. 

.. _fig_declinacaomagneticario.png:

.. figure:: /images/capitulo7/fig_declinacaomagneticario.png
   :scale: 55 %
   :alt: fig_declinacaomagneticario.png
   :align: center

   Variação temporal da declinação magnética :math:`(\delta)` para o Município do Rio de Janeiro. Dados do modelo IGRF.


**Linha isogônica** se refere ao conjunto de pontos ligados por linhas onde a declinação
magnética tem o mesmo valor em determinada época. Elas mostram a **variação
espacial** da declinação magnética. Na :numref:`fig_linhaisogonica.png`
são apresentadas linhas isogônicas para o Brasil, ano de 2000, segundo
o IGRF. Neste ano a declinação magnética no Brasil variou de aproximadamente
:math:`-23^\circ` a :math:`-3^\circ`, costa leste e oeste do estado do Acre,
respectivamente. A linha isogônica de :math:`0^\circ`, direção do norte
geográfico igual a do norte magnético, é denominada de **linha agônica**.

.. _fig_linhaisogonica.png:

.. figure:: /images/capitulo7/fig_linhaisogonica.png
   :scale: 55 %
   :alt: fig_linhaisogonica.png
   :align: center

   Linhas isogônicas em 2000 para a região do Brasil segundo IGRF.


Uma **linha isopórica** consiste nos pontos de mesma variação anual da declinação magnética
em determinada época. Ela apresenta a variação secular da declinação
magnética. Na :numref:`fig_linhaisoporica.png` são apresentadas linhas
isopóricas para o Brasil no ano de 2000. A unidade das linhas isopóricas
são de minutos por ano. Quando uma linha isopórica é negativa, a declinação
magnética está se movendo para oeste (W), e positiva para este (E).
No ano de 2000, as maiores variações anuais da declinação magnética
ocorre no oeste do Brasil, com uma variação próxima de :math:`-9'/\mathrm{ano}`.
No nordeste se encontrava a linha isopórica de :math:`0'/\mathrm{ano}`,
ou seja, a variação anual de declividade magnética foi zero.

Além da **variação espacial** e da **variação secular**
da declinação magnética, pode-se citar:

- a **variação diária**, é aquela em que ocorre ao longo de 24
  horas. Ela é regular, ou seja, se repete a cada 24 horas. Ocorre devido
  à correntes elétricas na alta ionosfera (região acima dos 100 km)
  variar ao longo de 24 horas. A variação da declinação magnética ao
  longo de 24 horas é pequena, por exemplo, em Hartland, Reino Unido,
  verificou-se variação de aproximadamente :math:`9'` (`ver aqui <http://www.geomag.bgs.ac.uk/education/earthmag.html>`_).
  Já para os Estados Unidos, a variação é de aproximadamente :math:`8'` ao
  longo de 24 horas :cite:`WOLF`;
- a **variação irregular**, é uma variação imprevisível. Pode ocorrer
  devido ao distúrbio das tempestades solares ao campo magnético da
  terra; ou por efeito de proximidade de materiais metálicos ou de correntes
  elétricas locais, como àquelas que são geradas por fios de alta tensão.
  Embora imprevisível, as tempestades solares tem uma frequência de
  aproximadamente 11 anos. Segundo :cite:t:`WOLF` estas perturbações
  na declinação magnética são pequenas, de cerca de um grau ou mais.

Por meio de interpolação das linhas isopóricas, pode-se encontrar
a variação anual da declinação magnética para uma posição geográfica
de interesse. O valor da variação encontrada, pode ser utilizada em
conjunto com a declinação magnética local, para encontrar a declinação
magnética em anos anteriores ou posteriores. Todavia, isto não se
faz necessário atualmente, devido à disponibilidade na internet de
dados de declinação magnética para diferentes posições geográficas
e épocas.

.. admonition:: Obtendo a declinação magnética

   `Clicando aqui <https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml?useFullSite=true>`_ você
   será encaminhado para o *site* da NOAA (Administração Nacional Oceânica e Atmosférica,
   *National Oceanic and Atmospheric Administration*), onde poderá consultar a
   declinação magnética para todo globo terrestre e para diferentes períodos, tendo os
   seguintes modelos disponíveis:

   a) o Modelo Magnético Mundial (`WMM <https://www.ngdc.noaa.gov/geomag/WMM/>`_, *World Magnetic Model*);
   b) o Campo Magnético Melhorado (`EMM <https://www.ngdc.noaa.gov/geomag/EMM/index.html>`_, *Enhanced Magnetic Model*);
   c) e o `IGRF <https://www.ngdc.noaa.gov/IAGA/vmod/igrf.html>`_.

.. _fig_linhaisoporica.png:

.. figure:: /images/capitulo7/fig_linhaisoporica.png
   :scale: 55 %
   :alt: fig_linhaisoporica.png
   :align: center

   Linhas isopóricas em 2000 para a região segundo o IGRF.

----

:exem:`Exemplo 7` Na página da `NOAA <\href{https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml?useFullSite=true>`_
é possível encontrar os valores da declinação magnética do modelo IGRF.
Por meio dela, calcular a variação da declinação magnética para a cidade de Vitória,
Espírito Santo :math:`(\phi=-20^\circ19'10'',~\lambda=-40^\circ20'16'')`, entre o período de 1/Jan/1960 e 1/Jan/2014.

:solucao:`Solução:`

.. figure:: /images/capitulo7/fig_declividavariacao.png
   :scale: 35 %
   :alt: fig_declividavariacao.png
   :align: center

----

Uma vez que um alinhamento teve a sua direção determinada com referência
ao norte o magnético, o seu azimute ou rumo é dito como sendo magnético.
Conhecendo o azimute ou rumo magnético de um alinhamento é possível,
por meio da declinação magnético da época, encontrar seu azimute ou
rumo verdadeiro. Considerando o sinal negativo para declinação oeste
(W) e positiva para a declinação à leste (E), o azimute verdadeiro
é dado pelo azimute magnético mais a declinação magnética da época
do levantamento.

Muitas vezes no processo de aviventação de uma área levantada no passado,
tem-se que encontrar novamente a direção dos respectivos alinhamentos
em campo no presente. Se os alinhamentos tiveram suas direções obtidas
com a referência do norte magnético, na época da aviventação, tem-se
que fazer suas atualização, considerando a mudança da direção do norte
magnético entre as duas épocas. Mais uma vez, tal procedimento é possível,
por meio da aplicação da variação de declinação magnética entre as
épocas aos azimutes ou rumos magnéticos medidos no passado (ver Exemplo
a seguir).

----

:exem:`Exemplo 8` Na região de Umuarama, PR, o alinhamento BC teve o seu azimute magnético medido de :math:`153^\circ41'30'':math:` em
10/12/1967. Qual é o azimute magnético deste alinhamento se você estivesse locando em campo este mesmo alinhamento em 4/5/2014?

:solucao:`Solução:`

.. figure:: /images/capitulo7/DeclinacaoMagneticaUmuaramaShareLatex.png
   :scale: 35 %
   :alt: DeclinacaoMagneticaUmuaramaShareLatex.png
   :align: center

----

.. _Ângulo vertical:

Ângulo vertical
===============

O ângulo vertical é o ângulo medido no plano vertical. Quando a origem
das medição do ângulo vertical for o zênite (direção contrária ao fio de prumo),
o ângulo vertical é denominado de ângulo **zenital** :math:`(z)`.
Caso a origem seja o plano horizontal, o ângulo vertical é de **inclinação**
:math:`(\alpha)` (:numref:`fig_AnguloVertical.png`). Os ângulos verticais
medidos de estações totais e teodolitos são utilizados, por exemplo,
para calcular diferenças de nível e reduzir a distância inclinada
para distância horizontal. A maior parte dos teodolitos utilizam o
ângulo vertical do tipo zenital. De modo geral, as estações totais
têm a opção de se trabalhar com ângulo vertical tipo zenital ou de
inclinação.

.. _fig_AnguloVertical.png:

.. figure:: /images/capitulo7/fig_AnguloVertical.png
   :scale: 35 %
   :alt: fig_AnguloVertical.png
   :align: center

   Ângulo vertical zenital :math:`(z)` e de inclinação :math:`(\alpha)`. As abreviações :math:`ai` e :math:`ap`,
   correspondem, respectivamente, a altura do instrumento
   e a altura do prisma, necessárias para calcular a diferença de nível.


A variação do ângulo zenital é de :math:`0^\circ` a :math:`360^\circ`. Se o
ângulo zenital é de :math:`0^\circ`, a luneta se encontra na direção contrária
a vertical do lugar, ou seja, na direção do zênite. Na medida em que
a luneta, é inclinada na direção do horizonte, quando o ângulo for
de :math:`90^\circ`, conterá o plano horizontal. Quando ela estiver na
posição da vertical do lugar, direção do nadir, o ângulo
será de :math:`180^\circ`. A luneta está na **posição direta**
quando o ângulo zenital está entre :math:`0^\circ` e :math:`180^\circ`. Quando
o ângulo zenital for de :math:`270^\circ` a luneta estará novamente no
plano horizontal, até que, se novamente a luneta estiver no zênite,
o ângulo vertical medido será de :math:`360^\circ` ou :math:`0^\circ`. A
**posição inversa da luneta** ocorre
quando o ângulo zenital estiver entre :math:`180^\circ` e :math:`360^\circ`.

Já o ângulo de inclinação tem variação de :math:`0^\circ` a :math:`+90^\circ`
se a visada for ascendente e, de :math:`0^\circ` a :math:`-90^\circ` se a visada
for descendente. A Tabela abaixo apresenta
a relação entre o ângulo zenital, o de inclinação, o tipo de visada,
se ascendente ou descendente, e a posição da luneta.

.. table:: Relação entre ângulo zenital :math:`(z)`, de inclinação :math:`(\alpha)` e tipo de visada.
    :header-alignment: ccc
    :column-alignment: crr

    ============================== ====================== ================ ===================
    :math:`z`                      :math:`\alpha`         Tipo de visada   Posição da luneta
    ============================== ====================== ================ ===================
    :math:`0^\circ<z<90^\circ`     :math:`\alpha=90-z`    ascendente       Direta
    :math:`90^\circ<z<180^\circ`                          descendente
    :math:`180^\circ<z<270^\circ`  :math:`\alpha=z-270`   descendente      Inversa
    :math:`270^\circ<z<360^\circ`                         ascendente
    ============================== ====================== ================ ===================


.. _Medição do ângulo vertical:

Medição do ângulo vertical
--------------------------

Para reduzir os erros causados pelas medições dos ângulos verticais,
ao invés de se realizar apenas uma medida, sugere-se realizar pares
de medidas, com a luneta na posição direta e inversa, calculando-se
o valor médio das medidas. Tem-se que o ângulo zenital médio na direção
direta :math:`(\bar{z}_{d})` é dado por:

.. math::
   \bar{z}_{d}=\frac{\Sigma z_{d}}{n}+\frac{360^\circ\cdot n-(\Sigma z_{d}+\Sigma z_{i})}{2\cdot n}
   :label: eq:mediaangulozenital

em que: :math:`\Sigma z_d` é o somatório das medidas de :math:`z`
na posição direta; :math:`\Sigma z_i` é o somatório das medidas de :math:`z`
na posição indireta; :math:`n` é o número de pares de medidas de :math:`z_d` e :math:`z_i`.

----

:exem:`Exemplo 9` Calcule o ângulo zenital médio a partir dos quatro pares de medidas de ângulo zenital,
respectivamente, na posição direta e inversa da luneta:

1) :math:`111^\circ32'44''` e :math:`248^\circ27'5''`;
2) :math:`111^\circ32'40''` e :math:`248^\circ27'11''`;
3) :math:`111^\circ32'37''` e :math:`248^\circ27'11''` e;
4) :math:`111^\circ32'39''` e :math:`248^\circ27'13''`.

:solucao:`Solução:` Os dados podem ser organizados conforme a tabela abaixo. Nela são apresentados
os somatórios dos ângulos zenitais nas posições direta e inversa.

.. table::
    :header-alignment: ccc
    :column-alignment: crr

    ============ ======================================= =============================================
    Medida       :math:`z_d`                             :math:`z_i`
    ============ ======================================= =============================================
    1            :math:`111^\circ32'44''`                :math:`248^\circ27'5''`
    2            :math:`111^\circ32'40''`                :math:`248^\circ27'11''`
    3            :math:`111^\circ32'37''`                :math:`248^\circ27'11''`
    4            :math:`\underline{111^\circ32'39''}`    :math:`\underline{248^\circ27'13''}`
    :math:`\,`   :math:`\Sigma z_d=446^\circ10'40''`     :math:`\Sigma z_i=993^\circ48'40''`
    ============ ======================================= =============================================

De acordo com a Equação :eq:`eq:mediaangulozenital`:

.. math::
   \bar{z}_{d}&=\frac{446^\circ10'40''}{4}+\frac{4\cdot360^\circ-(446^\circ10'40''+993^\circ48'40'')}{2\cdot4}\\
   \bar{z}_{d}&=111^\circ32'40''+\frac{1440^\circ-(1439^\circ59'20'')}{8}\\
   \bar{z}_{d}&=111^\circ32'40''+0^\circ0'5''\\
   \bar{z}_{d}&=111^\circ32'45''.

----

.. admonition:: Sugestão de aula prática

   **Medição de ângulos pelo método das direções**

   *Objetivo*: Medir em campo e calcular o ângulo horizontal pelo método das direções.

   *Procedimento*: Em campo materializar três pontos consecutivos, A, B e C. Estacionar o equipamento
   em C, e realizar dois pares de medidas do ângulo horizontal ABC com a luneta na PD e PI.
   A caderneta de campo é o mesma apresentada na :numref:`fig_metododasdirecoes.png`.


Exercícios
==========

:exem:`1)` Calcular o ângulo horizontal no ponto 2 pelo método das direções, dada as leituras
de ré e vante, respectivamente, nos pontos 1 e 3, com a luneta na posição
direta e inversa, conforme a Tabela na :numref:`fig_metododasdirecoes.png`.

.. table::
    :header-alignment: ccccc
    :column-alignment: ccccr

    =========== ================ =========== ==== ==========================
    estação     posição luneta   repetição   PV   Hz
    =========== ================ =========== ==== ==========================
    :math:`\,`  PD               1           1    :math:`00^\circ 00' 00''`
    :math:`\,`  :math:`\,`       :math:`\,`  3    :math:`45^\circ19'14''`
    :math:`\,`  :math:`\,`       2           1    :math:`00^\circ 00' 00''`
    :math:`\,`  :math:`\,`       :math:`\,`  3    :math:`45^\circ19'27''`
    ----------- ---------------- ----------- ---- --------------------------
    2           PI               1           1    :math:`179^\circ59'57''`
    :math:`\,`  :math:`\,`       :math:`\,`  3    :math:`225^\circ19'15''`
    :math:`\,`  :math:`\,`       2           1    :math:`180^\circ 00'05''`
    :math:`\,`  :math:`\,`       :math:`\,`  3    :math:`225^\circ19'25''`
    =========== ================ =========== ==== ==========================

:exem:`Resp.:` :math:`45^\circ19'19,7''`.

----

:exem:`2)`  Dados os azimutes
de vante: :math:`\mathrm{Az_{01}}=132^\circ43'6''`, :math:`\mathrm{Az_{12}}=265^\circ18'9''`, :math:`\mathrm{Az_{23}}=169^\circ36'4''` e :math:`\mathrm{Az_{34}}=316^\circ21'34''`, calcule:

a) item os rumos de vante;
b) os rumos de ré e;
c) os azimutes de ré.

:exem:`Resp.:`

a) :math:`\mathrm{R_{01}}=47^\circ16'54''\,\text{SE}`, :math:`\mathrm{R_{12}}=85^\circ18'9''\,\text{SW}`, :math:`\mathrm{R_{23}}=10^\circ23'56''\,\text{SE}` e  :math:`\mathrm{R_{34}}=43^\circ38'26''\,\text{NW}`.
b) :math:`\mathrm{R_{10}}=47^\circ16'54''\,\text{NW}`, :math:`\mathrm{R_{21}}=85^\circ18'9''\,\text{NE}`, :math:`\mathrm{R_{32}}=10^\circ23'56''\,\text{NW}` e  :math:`\mathrm{R_{43}}=43^\circ38'26''\,\text{SE}`.
c) :math:`\mathrm{Az_{10}}=312^\circ43'6''`,  :math:`\mathrm{Az_{21}}=85^\circ18'9''`,  :math:`\mathrm{Az_{32}}=349^\circ36'4''` e  :math:`\mathrm{Az_{43}}=136^\circ21'34''`.

----

:exem:`3)` Dados os rumos de vante: :math:`\mathrm{R_{AB}}=54^\circ30'29''\,\text{SW}`,
:math:`\mathrm{R_{BC}}=31^\circ2'50''` NE, :math:`\mathrm{R_{CD}}=11^\circ3'41''\,\text{SE}`,
e :math:`\mathrm{R_{DE}}=61^\circ21'34''\,\text{NW}`, calcule:

a) os rumos de ré;
b) os azimutes de vante e;
c) os azimutes de ré.

:exem:`Resp.:`

a) :math:`\mathrm{R_{BA}}=54^\circ30'29''\,\text{NE}`, :math:`\mathrm{R_{CB}}=31^\circ2'50''\,\text{SW}`, :math:`\mathrm{R_{DC}}=11^\circ3'41''\,\text{NW}`   e :math:`\mathrm{R_{ED}}=61^\circ21'34''\,\text{SE}`.
b) :math:`\mathrm{Az_{AB}}=234^\circ30'29''`, :math:`\mathrm{Az_{BC}}=31^\circ2'50''`, :math:`\mathrm{Az_{CD}}=168^\circ56'19''` e :math:`\mathrm{Az_{EF}}=298^\circ38'26''`.
c) :math:`\mathrm{Az_{BA}}= 54^\circ30'29''`, :math:`\mathrm{Az_{CB}}=211^\circ2'50''`, :math:`\mathrm{Az_{DC}}=348^\circ56'19''` e  :math:`\mathrm{Az_{FE}}=118^\circ38'26''`.

----

:exem:`4)` Calcular o azimute CD sabendo que: o azimute AB é :math:`47^\circ21'2''`; ângulos
medidos à direita :math:`\mathrm{ABC}=141^\circ1'54''` e :math:`\mathrm{BCD}=85^\circ36'10''`. 

:exem:`Resp.:` :math:`\mathrm{Az_{CD}}= 273^\circ59'6''`.

----

:exem:`5)`  Calcular o azimute 34 sabendo que: o azimute 12 é :math:`242^\circ55'22''`; ângulos
medidos à direita :math:`123=65^\circ12'13''` e :math:`234=125^\circ6'40''`. 

:exem:`Resp.:` :math:`\mathrm{Az_{34}}= 73^\circ14'15''`.

----

:exem:`6)`  O alinhamento AB é de controle, sendo suas coordenadas retangulares, em metros,
de :math:`\mathrm{A}(559,432; 765,231)` e de :math:`\mathrm{B}(612,019; 791,692)`. Determine o azimute
AB. 

:exem:`Resp.:` :math:`\mathrm{Az_{AB}}=63^\circ17'20,9''`.

----

:exem:`7)` Calcular o azimute do alinhamento OP, cuja as coordenadas são
:math:`\mathrm{O}(975,796; 419,790)` e :math:`\mathrm{P}(801,218; 152,865)`.

:exem:`Resp.:` :math:`\mathrm{Az_{OP}}=213^\circ11'9,8''`.

----

:exem:`8)` A soma dos ângulos
internos medidos de uma poligonal de 9 lados é de :math:`1\,259^\circ 59' 24''`.
Determine qual o erro angular de fechamento e a compensação a ser
aplicada em cada ângulo medido, a fim de tornar a poligonal com erro
angular igual a zero. 

:exem:`Resp.:` o erro angular de fechamento é de :math:`-36''`.
Será aplicado :math:`+4''` em cada ângulo interno medido.

----

:exem:`9)` Na Tabela abaixo
são apresentados os ângulos internos à direita medidos da poligonal
fechada :math:`\mathrm{ABCD}`. Calcule o erro angular de fechamento. Compense pelo
método linear e calcule os azimutes dos alinhamentos :math:`\mathrm{BC}`,
:math:`\mathrm{CD}` e :math:`\mathrm{DA}`.
 
.. table:: Caderneta de campo do exemplo 9.
    :header-alignment: cccc
    :column-alignment: cccr

    =============== ============================ ==========================================
    Alin            Azimute                      :math:`\sphericalangle` à direita
    =============== ============================ ==========================================
    :math:`AB`      :math:`186^\circ9'33''`      :math:`\mathrm{{A}}=128^\circ 4' 2''`
    :math:`BC`      :math:`\,`                   :math:`\mathrm{{B}}= 68^\circ57'34''`
    :math:`CD`      :math:`\,`                   :math:`\mathrm{{C}}=113^\circ41'32''`
    :math:`DA`      :math:`\,`                   :math:`\mathrm{{D}}= 49^\circ17'32''`
    =============== ============================ ==========================================

:exem:`Resp.:` o erro angular de fechamento é de :math:`40''`.
Os azimutes compensados: :math:`\mathrm{Az_{BC}}=75^\circ6'57''`, :math:`\mathrm{Az_{CD}}=  8^\circ48'19''`  e :math:`\mathrm{Az_{DA}}=238^\circ 5'41''`.

----

:exem:`10)`  No levantamento apresentado abaixo, poligonal aberta e apoiada, foram
medidos os ângulos de deflexão: :math:`\mathrm{DD_{BC}}=132^\circ43'6''`, :math:`\mathrm{DE_{CD}}=65^\circ18'9''`, :math:`\mathrm{DD_{DE}}=69^\circ36'4''`, :math:`\mathrm{DE_{EF}}=66^\circ21'34''`, :math:`\mathrm{DE_{FG}}=106^\circ10'11''`. Os azimutes de controle de saída e chegada foram de :math:`\mathrm{Az_{AB}}=63^\circ52'8''` e :math:`\mathrm{Az_{FG}}=28^\circ22'9''`.
Determinar:

a) o erro angular de fechamento;
b) os azimutes considerando a compensação  do erro angular de fechamento.

.. _exemplo_10.png:

.. figure:: /images/capitulo7/exemplo_10.png
   :scale: 50 %
   :alt: exemplo_10.png
   :align: center

:exem:`Resp.:` o erro angular de fechamento é de :math:`45''`.
Os azimutes compensados: :math:`{\mathrm{Az_{BC}}=196^\circ35'23''}`,
:math:`\mathrm{Az_{CD}}=131^\circ17'23''`, :math:`\mathrm{Az_{DE}}=200^\circ53'36''` e
:math:`\mathrm{Az_{EF}}=134^\circ32'11''`.

----

:exem:`11)`   Converta em azimutes e rumos verdadeiros os seguintes
azimutes magnéticos com suas respectivas declinações magnéticas :math:`(\delta)`:

a) :math:`6^\circ35'30'',~\delta=10^\circ5'\mathrm{W}`;
b) :math:`28^\circ3'40'',~\delta=22^\circ32'\mathrm{W}`;
c) :math:`228^\circ43'20'',~\delta=5^\circ52'\mathrm{E}`;

:exem:`Resp.:`

a) :math:`\mathrm{Az_{verda}}=356^\circ30'30''` e :math:`\mathrm{R_{verda}}=3^\circ29'30''` NW;
b) :math:`\mathrm{Az_{verda}}=5^\circ31'40''` e :math:`\mathrm{R_{verda}}=5^\circ31'40''` NE;
c) :math:`\mathrm{Az_{verda}}=234^\circ35'20''` e :math:`\mathrm{R_{verda}}=54^\circ35'20''` SW.

----

:exem:`12)` Pesquisar na página da `NOAA <https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml?useFullSite=true>`_
a declinação magnética para a Cidade de Campina
Grande :math:`(\phi=-7^\circ13'50'',~\lambda=-35^\circ51'52'';~\mathrm{altitude}=551~\mathrm{m})`,
PB, para a data de 28/jan/1996, modelo **IGRF**.

:exem:`Resp.:` :math:`\delta=-22,33^\circ`.

----

:exem:`13)` Calcular a declinação magnética e a variação sua variação (modelo **IGRF**) para o município de
Piracicaba, São Paulo :math:`(\phi=-22^\circ43'31'',~\lambda=-47^\circ38'57'')`,
entre o período 1/Jul/1950 e 15/Ago/2010. 

:exem:`Resp.:` Em 1/Jul/1950 e 15/Ago/2010 a declinação
magnética foi de, respectivamente, :math:`-11,87^\circ` e :math:`-20,11^\circ`,
logo a variação é de :math:`8,24^\circ` W.

----

:exem:`14)`  O ângulo zenital na posição direta é de :math:`74^\circ2'48''`.
Qual seria o ângulo equivalente se a luneta estivesse na posição inversa. 

:exem:`Resp.:` :math:`z_d=285^\circ57'12''`.

----

:exem:`15)` Foram medidos dois pares
de ângulo zenital, na posição direta e inversa da luneta, resultando
nas seguintes leituras: na posição direta :math:`87^\circ9'37''` e :math:`87^\circ9'43''`
e, na posição inversa :math:`272^\circ50'27''` e :math:`272^\circ50'21''`. Calcular
o ângulo zenital médio na posição direta da luneta :math:`(\bar{z}_{d})`.

:exem:`Resp.:` :math:`\bar{z}_{d}=87^\circ9'38''`.

----

:exem:`10)`  Repetir o exercício 15 considerando
os seguintes valores de ângulos zenitais: na posição direta :math:`95^\circ49'14''` e :math:`95^\circ49'18''`
e, na posição inversa :math:`264^\circ10'40''` e :math:`264^\circ10'36''`. 

:exem:`Resp.:` :math:`\bar{z}_{d}=95^\circ49'19''`.

----