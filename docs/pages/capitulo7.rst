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
\ref{sec:=0000C2ngulo-horizontal}) ou verticais (secção \ref{sec:=0000C2ngulo-vertical}),
que são medidos em relação ao plano horizontal e vertical, respectivamente.
Para os cálculos das coordenadas dos pontos, há a necessidade de conhecer
(calcular) a direção dos alinhamentos em relação ao meridiano utilizado,
ou seja, os azimutes ou rumos, sendo também vistos neste capítulo.\thispagestyle{empty}


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
para a sua medição são apresentados na Secção \ref{subsec:Medicao-do-=0000E2ngulo}.


.. _fig_esquemateodo.png:

.. figure:: /images/capitulo7/fig_esquemateodo.png
   :scale: 75 %
   :alt: fig_esquemateodo.png
   :align: center

   Esquema de um teodolito com os círculos vertical e horizontal.


Com relação ao ângulo vertical, quando o equipamento está nivelado,
o :math:`0^\circ` do círculo vertical tem direção do zênite ou do plano
horizontal que passa pelo centro ótico da luneta, respectivamente, ângulo zenital e de inclinação\index{Ângulo!vertical!zenital}
:math:`(z)`. Maiores informações sobre os ângulos verticais podem ser encontrados
na secção \ref{sec:=0000C2ngulo-vertical}, página \pageref{sec:=0000C2ngulo-vertical}. 



Ângulo horizontal
=================

Alinhamento de vante e ré
-------------------------

A :numref:`fig_introangulo.png` apresenta a sequência de vértices
EAB, onde é realizada a medida do ângulo horizontal, no sentido horário,
:math:`\alpha`, no vértice A. Para a medida de :math:`\alpha`, o ponto E é o
ponto inicial (**ponto de ré**), onde se realiza a **visada de ré}**,
enquanto e B, é o ponto final (**ponto de vante**), onde
é realizada a **visada de vante**. Aos alinhamentos que correspondem
ao início e ao final das medidas, denominamos de alinhamentos de **ré**
e **vante**. Para este exemplo, AE é o alinhamento de ré e AB
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
(ver secção \ref{sec:=0000C2ngulo-vertical}, página \pageref{sec:=0000C2ngulo-vertical}).
Neste texto será apresentado o método das direções, que é o previsto
para ser utilizado pela \citeonline{NBR13133} na medição de ângulos.
Para outros métodos, pode-se consultar, :cite:t:`loch`, :cite:t:`golcalves` e :cite:t:`WOLF`.

Método das direções
^^^^^^^^^^^^^^^^^^^

Considere os alinhamentos apresentados na Figura \ref{fig:introangulo}.
O método das direções tem as seguintes etapas quando se trabalha com
estação total:

a. equipamento é centralizado e nivelado em A, ponto da estação;
b. com a luneta na posição direta (PD), é realizada uma aproximação em E, ponto de ré. Com o movimento horizontal e vertical travados, e com o auxílio dos parafusos de movimento micrométrico, é realizada a visada exata ao centro prisma;
c. o ângulo horizontal em E pode ser zerado, ou o seu valor lido, teremos :math:`(L_{\mathrm{PD}}^\mathrm{r\acute{e}})`;
d. com o movimento horizontal e vertical solto, faz-se uma visada aproximada em B, ponto de vante, e com os parafusos micrométricos, depois que os movimentos horizontal e vertical estiverem travados, faz-se a aproximação precisa ao centro do prisma, anotando-se o ângulo horizontal :math:`(L_{\mathrm{PD}}^\mathrm{vante})`. Se na etapa anterior  o ângulo horizonal foi zerado, o ângulo horizontal em B corresponderá a :math:`\alpha` na posição direta, :math:`\alpha_{\mathrm{PD}}`. Se o ângulo horizontal na etapa anterior não foi zerado, o valor de :math:`\alpha_{\mathrm{PD}}` será dado pela diferença dos ângulos horizontais de vante e de ré, no nosso caso,  :math:`\alpha_{\mathrm{PD}}=L_{\mathrm{PD}}^\mathrm{vante}-\mathrm{L}_{\mathrm{PD}}^\mathrm{r\acute{e}}`;
e. repete-se as estapas b a d, :math:`n` vezes;
f. coloca-se a luneta na posição inversa (PI), e repete-se as etapas de b a d mais :math:`n`  vezes, onde teremos :math:`n` valores de :math:`\alpha` com a luneta na PI, :math:`\alpha_{\mathrm{PI}}`;
g. o valor médio de :math:`\alpha` `(\bar{\alpha})`, será a média de todas as medidas na posição direta e inversa:

.. math::
   \bar{\alpha} = \frac{\sum_{i=1}^n\left(\alpha_{\mathrm{PD},i}+\alpha_{\mathrm{PI},i}\right)}{2n}=\frac{\sum_{i=1}^n\left(L_{\mathrm{PD,}i}^\mathrm{vante}-L_{\mathrm{PD,}i}^\mathrm{r\acute{e}}+L_{\mathrm{PI,}i}^\mathrm{vante}-\mathrm{L}_{\mathrm{PI,}i}^\mathrm{r\acute{e}}\right)}{2n}


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
cite:t:`NBR13133`, página 3.

.. _fig_metododasdirecoes.png:

.. figure:: /images/capitulo7/fig_metododasdirecoes.png
   :scale: 45 %
   :alt: fig_metododasdirecoes.png
   :align: center

   Exemplo de anotações para medida de ângulo pelo método das direções.


Ângulos horizontais à direita
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Os ângulos horizontais medidos entre os alinhamentos são na grande
maioria os ângulos internos  e
de deflexão. Na :numref:`fig_ExemploAnguloDexaoInterno.png` a
são apresentados ângulos **horizontais internos** medidos
**à direita**, ou seja, no sentido horário nos vértices A, B, C, D e E.
Os ângulos são medidos na sequência A, B, C, D e E. Desta forma, os
alinhamentos AB, BC, CD, DE e EA são denominados de *vante*.
Já BA, CB, DC, DE e AE são os alinhamentos de *ré*. Observe
que para medir os ângulos internos horizontais à direita da poligonal
fechada ABCDE, tem-se que fazer um caminhamento no sentido anti-horário.
No alinhamento AB é apresentado o seu azimute, ou seja a sua direção
em relação ao meridiano. Ela é necessária para o cálculo dos azimutes
dos demais alinhamentos, como será visto na Secção \ref{subsec:C=0000E1lculo-do-azimute}.

Ângulos de deflexão
^^^^^^^^^^^^^^^^^^

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


- o **meridiano astronômico**: é a linha que passa pelos pólos geográficos da terra (Secção \ref{sec:Posi=0000E7=0000E3o-Geod=0000E9sica}),
  é determinado usualmente por medidas astronômicas;
- o **meridiano geodésico**: é a linha
  gerada pela intersecção do elipsóide de revolução com o plano que
  passa pelos seus pólos (Secção \ref{sec:Posi=0000E7=0000E3o-Geod=0000E9sica}).
  Atualmente com o GNSS (Secção \ref{sec:Posicionamento-por-sat=0000E9lite}),
  a sua definição em campo tornou-se de fácil obtenção;
- o **meridiano magnético**: é o plano
  vertical que passa pelo eixo da agulha magnetizada livre, com apoio
  apenas no seu centro. Por exemplo, a direção norte-sul dada por uma
  bússola, é a direção do meridiano local (Secção \ref{declinacaomagnetica});
- o **meridiano da quadrícula**:
  corresponde a direção do eixo-:math:`y` do sistema cartesiano da quadrícula,
  da projeção cartográfica. Nas coordenas UTM, corresponde ao eixo Norte
  (Secção \ref{subsec:Proje=0000E7=0000E3o-Universal-Transversa}).
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

O **azimute de ré} \index{Azimute!de ré} do alinhamento OA
(vante) é o azimute de AO, ou seja, quando o azimute do alinhamento
é medido do final para o início do alinhamento. Quando se conhece
o azimute de vante um alinhamento, o seu azimute de ré pode ser calculado:
i) subtraindo-se o azimute de :math:`180^\circ` se ele estiver entre :math:`180^\circ` e :math:`360^\circ`
ou; ii) somando-se ao azimute :math:`180^\circ`, se ele estiver :math:`0^\circ` e :math:`180^\circ`.
Na Figura \ref{fig:azimute_vante_re}b é apresentado o alinhamento
OA com azimute de vante, :math:`45^\circ`, e o seu azimute de ré, AO, de
:math:`225^\circ` (:math:`180^\circ+45^\circ`).

.. _fig_Azimutevantere.png:

.. figure:: /images/capitulo7/fig_Azimutevantere.png
   :scale: 65 %
   :alt: fig_Azimutevantere.png
   :align: center

   Exemplo de azimutes de vante (a) e ré do alinhamento OA (b).