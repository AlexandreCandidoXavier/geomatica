.. _RST Capitulo 1:

Capitulo 1
==========

Matemática fundamental
----------------------

Na maioria dos problemas que serão vistos ao longo dos próximos capítulos
haverá a necessidade de aplicação de cálculos simples. Por exemplo,
em levantamentos topográficos convencionais são medidos em campo,
entre os pontos de interesse, ângulos e distâncias, que posteriormente
serão utilizadas para cálculo das suas coordenadas :math:`$(x,\,y)$`, tendo
como base um plano topográfico local. Para estes cálculos são empregadas
funções trigonométricas e conhecimentos básicos de geometria analítica.
Neste capítulo será realizada uma breve revisão de trigonometria e
de geometria analítica.


Noções básicas de trigonometria
-------------------------------

Trigonometria é a área da matemática que estuda relações entre lados
e ângulos de um triângulo. Neste estudo utiliza-se ângulos, em diferentes
unidades, e funções trigonométricas, sendo que ao longo desta seção
estes pontos serão relembrados.

Duas semirretas, quando não coincidentes e com ponto de origem em comum, ponto este
dito vértice, tem um plano que as contêm e demarcam duas regiões deste. Os equipamentos topográficos
medem os ângulos no plano horizontal
e vertical, onde veremos maiores detalhes no :any:`RST Capitulo7`. A noção de ângulo é estabelecida pela medida da abertura entre estas
semirretas, neste caso, dois ângulos. Do mesmo modo, dois segmentos
de reta, não sobrepostos, com origem comum, definem dois ângulos,
se estendermos em duas semirretas a partir da origem dos segmentos.
Seja a Figura ao lado representando: dois segmentos; o ângulo :math:`\theta`;
um arco de comprimento :math:`s` que está a uma distância :math:`r`
do vértice. Matematicamente :math:`\theta` é:

.. math:: \theta=k\frac{s}{r},\label{eq:definicaoangulo}


.. image:: /images/capitulo1/fig_angulo.png
   :scale: 40 %
   :alt: alternate text
   :align: center

sendo :math:`k` uma constante, que vai depender da unidade angular
que se está trabalhando: radiano, grau ou grado, conforme será visto
adiante. A constante :math:`k` faz com que a medida do ângulo seja independentemente
do comprimento do arco :math:`s` ou da posição :math:`r` em que o arco esteja
iniciando.

Ângulo em grau, grado e radiano
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Vimos que ângulo e uma medida da abertura entre dois segmentos de
reta com origem comum ou de duas semirretas também com origem comum.
Nota-se que deve-se definir qual é o segmento ou semi-reta que terá
o início da contagem da medida e qual o sentido a ser percorrido,
se horário ou anti-horário. As unidades angulares serão apresentadas
sobre um círculo, tendo como início a contagem o segmento que coincide
com o eixo-:math:`x` e o sentido sendo anti-horário. Esta contagem é a
mesma que é utilizada para cálculos das funções trigonométricas. Na
Figura :numref:`anguloradgraugrado` são apresentados alguns ângulos,
nas unidades de grau, radiano e grado.

.. _anguloradgraugrado:

.. figure:: /images/capitulo1/fig_ang_grau_rad_grado.png
   :scale: 30 %
   :alt: map to buried treasure
   :align: center

   Ângulo de grau, radiano e grado sobre o círculo.

Grau
^^^^

A unidade de grau\index{Ângulo!grau} é aquela onde um círculo é dividido
em :math:`360` partes iguais e cada parte corresponde a um grau, sendo utilizado
como símbolo para o grau :math:`(^\circ)` devendo o mesmo ser aplicado
após o número. Sobre o círculo no eixo-:math:`x` positivo o ângulo é :math:`0^\circ`
ou :math:`360^\circ`, aumentando no sentido anti-horário até que sobre
o eixo-:math:`y` positivo o ângulo é de :math:`90^\circ`, e assim sucessivamente.

Podem-se considerar ângulos negativos. O significado é simples, por exemplo,
o ângulo :math:`-56^\circ` corresponde ao ângulo :math:`304^\circ` (Figura
abaixo), no entanto não se escreve :math:`-56^\circ=304^\circ`. Ou
seja, :math:`-56^\circ` e :math:`304^\circ` estão na mesma posição sobre
o círculo, e se forem aplicadas funções trigonométricas a estes valores,
os resultados serão os mesmo. De forma similar, pode-se ter valores
angulares superiores a :math:`360^\circ`. Por exemplo :math:`380^\circ`,
significa que já foi dada uma volta completa no círculo, mais :math:`20^\circ`,
dessa forma :math:`380^\circ` corresponde a :math:`20^\circ` graus e aqui
também não se escreve :math:`380^\circ=20^\circ`.

.. figure:: /images/capitulo1/fig_ang_neg_pos.png
   :scale: 35 %
   :alt: map to buried treasure
   :align: center

   Ângulo negativo e positivo.

**Grau sistema sexagesimal e decimal**

Os ângulos em graus podem estar nas formas sexagesimal ou decimal. A forma sexagesimal
é aquela em que o ângulo é apresentado em: *i*) **graus**,
sem sua fração; *ii*) subdivisão do graus, **minutos**
:math:`(')`; *iii*) e subdivisão dos minutos, **segundos**
:math:`($''$)`. Podem-se citar as seguintes relações entre graus, minutos
e segundos: :math:`1^\circ=60'`; :math:`1'=60''`; e logo, :math:`1^\circ=3\,600''`.
Na notação sexagesimal, os minutos variam de :math:`0'` a :math:`60'`, e os
segundos de :math:`0''` a :math:`60''` . A única parte que admite decimal é
a dos segundos.

.. figure:: /images/capitulo1/fig_ang_grau_sexag.png
   :scale: 35 %
   :alt: map to buried treasure
   :align: center

   Ângulos na forma sexagesimal.

Os ângulos em graus decimal são apresentados em graus com sua decimal,
se for o caso. A conversão de ângulos em graus sexagesimais para decimais
é simples, basta somar ao valor dos graus, aos minutos e aos segundos
transformados em graus, como apresentado no \ref{exemplosex}.


.. bibliography::

