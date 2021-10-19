.. raw:: html

    <style> .exem {color:blue; font-weight: bold} </style>

.. role:: exem

.. raw:: html

    <style> .solucao {font-weight: bold} </style>

.. role:: solucao

.. raw:: html

    <style> .blue {color:blue} </style>

.. role:: blue

.. _RST Capitulo 5:

Capitulo 6: Medidas de distância
********************************

Introdução
==========

As distâncias horizontais entre pontos, juntamente com os ângulos,
são os elementos básicos necessários para o cálculo das coordenadas
dos pontos. Neste capítulo serão abordados os métodos mais utilizados
para a determinação de distâncias entre pontos. Serão
apresentados os tipos de distâncias em que se trabalha na topografia sendo neste capítulo
dada ênfase para as medidas de distância horizontal.

Alguns métodos de medidas de distância serão apresentados, como o
método direto, com o uso de trenas, e o indireto, por exemplo, com
o uso de medidores eletrônicos de distância. Medidas de distâncias por taqueometria,
obtidas por meio dos teodolitos, serão apenas apresentadas superficialmente,
uma vez que, atualmente este método vem se tornando
um obsoleto, principalmente devido a baixa precisão e baixa produtividade
em campo.

Tipos de distâncias
===================

Em geomática, temos vários tipos de distância, podendo-se citar, por
exemplo, a distância no plano de projeção cartográfico e a distância
no elipsóide. Quando realizando levantamentos topográficos, em pequenas
áreas [1]_  na superfície terrestre, onde o erro devido a curvatura da terra
é desconsiderado, as distâncias entre os pontos podem ser:

- a **distância horizontal** (DH);
- a **distância inclinada**  (DI);
- e a **distância vertical** (DV) ou **diferença de nível** (DN).

Na :numref:`fig_tiposdedistancia.png`
são apresentas graficamente estas distâncias entre os pontos A e B.
Para pequenas áreas é considerada que a direção da vertical é a mesma
para todos os pontos, desta forma, o plano horizontal que passa por
A é paralelo ao plano horizontal que passa por B. A DH é dada pela
distância entre A e B no plano horizontal. A DV ou a DN entre dois
pontos, é dada pela distância vertical que separa os planos horizontais
que passam pelos dois ponto. A DI é a medida de distância na direção
do terreno, ou da visada.

.. _fig_tiposdedistancia.png:

.. figure:: /images/capitulo6/fig_tiposdedistancia.png
   :scale: 45 %
   :alt: fig_tiposdedistancia.png
   :align: center

   Distâncias em topografia.

As DH's são utilizadas nos cálculos planimétricos, como: na determinação das medidas
de distâncias entre pontos no plano, nas medidas de áreas e nos cálculos de azimutes.
Medidas de DN's são utilizadas, por exemplo para: elaboração de perfil topográfico
do terreno; determinação de elevação
de pontos topográficos; e, cálculos de volume e aterro no terreno. As DI's são as medidas de
distâncias que os medidores de distância eletrônicos, presentem
nas estações total medem primeiramente, posteriormente, podendo-se tranformá-la
para a DH e DN (ver página \pageref{sec:Medidor-eletr=0000F4nico-de}
para maiores detalhes).

Influência da curvatura da terra nas medidas de distância horizontal
--------------------------------------------------------------------

Na :numref:`fig_errodistancia` são apresentados os pontos :math:`A` e
:math:`B`, respectivamente, a posição inicial e final de um levantamento.
Suponha, para fins de simplificação, que: estes dois pontos estão
sobre o geóide (:math:`\approx`\,nível médio dos mares), ou seja, têm as mesmas
altitudes, iguais a 0 m; o geóide tem uma forma de uma esfera de raio
6.367 km (:math:`R`), média dos raios do elipsóide WGS84 (ver Secção :any:`Elipsóide`).
Se :math:`s` é a distância entre
os dois pontos na superfície do geóide, aqui, um arco de circunferência
de um ângulo :math:`\alpha`, temos :math:`s`:


.. math::
   \frac{360^\circ}{\alpha} & =\frac{2\pi R}{s}\\
   s & =\frac{\alpha\pi R}{180}

Considerando :math:`d` a distância no plano topográfico, para o triângulo
:math:`AB'C`, temos:

.. math::
   \tan\alpha & =\frac{d}{R}\\
   d & =R\tan\alpha

.. _fig_errodistancia:

.. figure:: /images/capitulo6/fig_errodistancia.png
   :scale: 45 %
   :alt: fig_errodistancia.png
   :align: center

   Influência da esfericidade da terra nas medidadas topográficas.

Na Figura \ref{fig:errodistancia}, também é apresentada para algumas
medidas de distância no geóide (:math:`s`), a sua correspondente distância
no plano topográfico (:math:`d`). Verifica-se que, para distâncias curtas
(:math:`s<5.000` m), a diferença entre as medidas, :math:`d-s`, é insignificante
(:math:`<1` mm). Todavia, para medidas de :math:`s` maiores que 80 km, as diferenças
com relação a :math:`d` se tornam significativas (:math:`>4,2` m). Se considerarmos
que as medidas topográficas são realizadas acima do nível médio dos
mares, acima do geóide, as diferenças entre :math:`s` e :math:`d`, serão ainda
maiores com relação as medidas de :math:`s` no geóide. Para fins de levantamento
topográfico, a \citeonline{NBR13133} estabelece de :math:`80` km a dimensão
máxima a ser medida.




.. rubric:: Footnotes

.. [1] Segundo a :cite:t:`NBR13133` a dimensão máxima de um levantamento topográfico está limitado a 80 km. }