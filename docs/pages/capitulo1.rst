.. raw:: html

    <style> .exem {color:blue; font-weight: bold} </style>

.. role:: exem

.. raw:: html

    <style> .solucao {font-weight: bold} </style>

.. role:: solucao

.. raw:: html

    <style> .blue {color:blue} </style>

.. role:: blue

.. raw:: html

    <style> .degree2sex {border:2px; border-style:solid;  border-radius: 5px; border-color:gray; padding: .1em;} </style>

.. role:: degree2sex

.. _RST Capitulo 1:

Capitulo 1
==========

Matemática fundamental
----------------------

Na maioria dos problemas que serão vistos ao longo dos próximos capítulos
haverá a necessidade de aplicação de cálculos simples. Por exemplo,
em levantamentos topográficos convencionais são medidos em campo,
entre os pontos de interesse, ângulos e distâncias, que posteriormente
serão utilizadas para cálculo das suas coordenadas :math:`(x,\,y)`, tendo
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

.. math:: \theta=k\frac{s}{r},
   :label: definicaoangulo

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
:numref:`anguloradgraugrado` são apresentados alguns ângulos,
nas unidades de grau, radiano e grado.

.. _anguloradgraugrado:

.. figure:: /images/capitulo1/fig_ang_grau_rad_grado.png
   :scale: 30 %
   :alt: map to buried treasure
   :align: center

   Ângulo de grau, radiano e grado sobre o círculo.

Grau
""""

A unidade de grau é aquela onde um círculo é dividido
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
:math:`('')`. Podem-se citar as seguintes relações entre graus, minutos
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
transformados em graus, como apresentado no `Exemplo 1`_.

----

.. _exemplo 1:

| :exem:`Exemplo 1` Converta o ângulo sexagesimal :math:`116^\circ33'54,18''` para grau decimal.
| :solucao:`Solucao:`
| Sabendo-se que :math:`1^\circ=60'` e :math:`1^\circ=3\,600''`, temos:

.. math::

   116^\circ33'54,18'' &=116^\circ+\left(\frac{33'}{60'}\right)^\circ+\left(\frac{54,18''}{3\,600''}\right)^\circ\\
                       &=116,5650511^\circ.

----

Por outro lado, para converter um ângulo na forma grau decimal para
sexagesimal observamos, primeiramente, que a parte inteira corresponde
aos graus. Em seguida multiplica-se por :math:`60` a parte decimal do ângulo
e a nova parte inteira do resultado serão os minutos. Agora, multiplica-se
por :math:`60` a última parte decimal encontrada para obter os segundos, inclusive
com a parte decimal, se for o caso. Um exemplo desta conversão é apresentada
no `Exemplo 2`_. A transformação de ângulos decimais
para sexagesimais e vice-versa é realizada automaticamente, pela maioria
das calculadoras científicas, por meio da tecla :degree2sex:`° \' ”` ,
e o auxílio da tecla :degree2sex:`shift`.

----

.. _exemplo 2:

| :exem:`Exemplo 2` Transforme o ângulo decimal do `Exemplo 1`_ para o sistema sexagesimal.
| :solucao:`Solucao:`
| O ângulo é :math:`116,5650511^\circ`, logo :math:`116^\circ`. A decimal :math:`0,5650511^\circ` em minutos:

.. math::

   \text{minutos} & =0,5650511\cdot60'\\
                  & =33,903\\  & =33'.

Agora decimal dos minutos, :math:`0,903'`, em graus:

.. math::

   \text{segundos} & =0,903\cdot60''\\
                   & =54,18''.

Desta forma, temos o ângulo na forma sexagesimal, :math:`116^\circ33'54,18''`.

----

Radianos
""""""""

Os ângulos em radianos são abreviados por *rad*,
sendo que :math:`1\,\mathrm{rad}` corresponde ao ângulo que subentende o comprimento
do arco, :math:`s`, de comprimento igual ao raio, :math:`r`, como mostrado na
Figura ao lado. Uma volta total em um circunferência corresponde a
:math:`2\pi\,\mathrm{rad}`. O valor de :math:`\pi` é definido como a razão entre o perímetro
de uma circunferência e o seu diâmetro, sendo :math:`\approx3,1415927`.
Para os nossos cálculos, deve-se utilizar o valor de :math:`\pi` dado pela
calculadora ou planilha eletrônica. A unidade angular de radianos
é a utilizada para cálculos de funções trigonométricas na maior parte
dos programas e linguagens computacionais, como por exemplo a
`planilha Excel <http://office.microsoft.com/pt-br/>`_,  `planilha
do Google <https://www.google.com/intl/pt-BR/sheets/about/>`_,
`C++ <http://www.open-std.org/>`_ , `Java <http://www.java.com/pt_BR/>`_,
`Python <http://www.python.org/>`_, `Matlab <http://www.mathworks.com/>`_
etc.

Grados
""""""

O ângulo em grado tem como símbolo *g*, e é colocado após o valor
da medida. Nesta unidade o círculo é dividido em 400 partes iguais
e cada uma equivale a um grado, sendo aceito a decimal de grado. É
uma unidade utilizada por alguns países europeus, como por exemplo
Portugal.

A conversão entre unidades angulares é bastante simples. Por exemplo,
se considerar apenas meio círculo, têm-se: :math:`\pi\text{ rad}=180^\circ=200^{\text{g}}`.


| :exem:`Exemplo 3` Quanto vale :math:`116^\circ33'54,18''` em radiano e grado?
| :solucao:`Solucao:`
| Primeiramente, este ângulo deve ser transformado para grau decimal, o que foi realizado no
| `exemplo 1`_. Por meio da relação entre as unidades de graus e radianos, mostradas acima,
| tem-se, para transformá-lo em radianos :math:`(x_{\text{rad}})`:

.. math::

   \frac{x_{\text{rad}}}{116,5650511^\circ} & =\frac{\pi}{180^\circ}\\
   x_{\text{rad}} & =\frac{116,5650511^\circ\cdot\pi}{180^\circ}\\
   x_{\text{rad}} & =2,0344\text{~rad}

Aplica-se agora a relação entre grau e grado para encontrar o valor angular em
grado :math:`(x_{\text{grado}})`, como:

.. math::

   \frac{x_{\text{grado}}}{116,5650511^\circ} & =\frac{200^{\text{g}}}{180^\circ}\\
   x_{\text{grado}} & =\frac{116,5650511^\circ\cdot200^\text{g}}{180^\circ}\\
   x_{\text{grado}} & =129,5167^{\text{g}}.

Observações sobre ângulos: goniômetros; calculadora e a constante :math:`k` (Equação :eq:`definicaoangulo`)
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

Os instrumentos que medem ângulos são chamados goniômetros. Um transferidor
é um goniômetro, assim como equipamentos topográficos que os possuem,
como o teodolito e a estação total. É por meio destes equipamentos
que são realizadas a medidas de ângulos entre pontos de interesse.
Geralmente, estes equipamentos apresentam os ângulos na unidade de
graus e no sistema sexagesimal. Para trabalhar com estes dados em
planilhas eletrônicas, estes devem ser transformados para grau decimal,
e posteriormente para a unidade de radianos, pois é nesta unidade
que a maioria dos programas computacionais trabalham com as funções
trigonométricas.

Deve-se prestar atenção quanto ao uso de ângulos em calculadora científica.
Geralmente ela pode trabalhar nas três unidades angulares apresentadas,
bastando ajustá-la para a unidade que é requerida nos cálculos. A
unidade de ângulo que a calculadora está configurada pode ser visualizada
na tela da mesma, onde as letras: 'D', Abreviação de graus em inglês, *degree*,
'R' e 'G', identificam que a calculadora está trabalhando,
respectivamente, em grau, radiano e grado. Para modificar a unidade
de grau da calculadora, deve-se consultar manual e seguir procedimento
indicado.

Encerrando este assunto, vamos observar mais uma vez a Equação :eq:`definicaoangulo`.
Agora podemos facilmente calcular o valor da constante :math:`k`. Para
a unidade de radianos temos para :math:`\theta=1\text{ rad}`, o comprimento
do arco :math:`(s)` é igual ao raio :math:`(r)`, desta forma :math:`k=1\text{ rad}`.
Caso a unidade seja de graus, sabe-se que para :math:`\theta=180^\circ`,
em um arco de raio :math:`r`, teremos um comprimento de arco, :math:`s=\pi\cdot r`,
desta forma, substituindo na Equação :eq:`definicaoangulo`, temos
:math:`k=\frac{180^\circ}{\pi}`. Utilizando o mesmo raciocínio acima
você pode encontrar o valor de :math:`k` para ângulo na unidade grado.

Funções trigonométricas
^^^^^^^^^^^^^^^^^^^^^^^

Para definir as funções trigonométricas de ângulos agudos :math:`(\theta<90^\circ)`,
serão utilizadas razões entre os lados de um triângulo retângulo,
conforme a Figura abaixo. Neste triângulo, o maior lado, oposto ao
ângulo reto :math:`(90^\circ)`, é denominado de **hipotenusa**;
o cateto que contem o ângulo medido é denominado de **cateto adjacente**;
e o outro cateto é o **cateto oposto**. As funções
trigonométricas são, o seno :math:`(\sin)`, o cosseno :math:`(\cos)`, a tangente
:math:`(\tan)`, a cotangente :math:`(\cot)`, a secante :math:`(\sec)` e a cossecante
:math:`(\csc)`, sendo apresentadas nas Equações  :eq:`eqseno` a :eq:`eqcsc`

.. figure:: /images/capitulo1/fig_trian_retangulo.png
   :scale: 35 %
   :alt: fig_trian_retangulo
   :align: center

   Triângulo retângulo e seus lados.

.. math:: \sin\theta=\left(\frac{\text{cateto oposto}}{\text{hipotenusa}}\right)
    :label: eqseno

.. math:: \cos\theta=\left(\frac{\text{cateto adjacente}}{\text{hipotenusa}}\right)\\
    :label: eqcos

.. math:: \tan\theta=\left(\frac{\text{cateto oposto}}{\text{cateto adjacente}}\right)\\
    :label: eqtan

.. math:: \cot\theta=\left(\frac{\text{cateto adjacente}}{\text{cateto oposto}}\right)\\
    :label: eqcot

.. math:: \sec\theta=\left(\frac{\text{hipotenusa}}{\text{cateto adjacente}}\right)\\
    :label: eqsec

.. math:: \csc\theta=\left(\frac{\text{hipotenusa}}{\text{cateto oposto}}\right)
   :label: eqcsc

.. bibliography::


