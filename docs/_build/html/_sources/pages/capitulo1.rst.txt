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

Capitulo 1: Matemática fundamental
**********************************

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
===============================

Trigonometria é a área da matemática que estuda relações entre lados
e ângulos de um triângulo. Neste estudo utiliza-se ângulos, em diferentes
unidades, e funções trigonométricas, sendo que ao longo desta seção
estes pontos serão relembrados.

Duas semirretas, quando não coincidentes e com ponto de origem em comum, ponto este
dito vértice, tem um plano que as contêm e demarcam duas regiões deste. Os equipamentos topográficos
medem os ângulos no plano horizontal
e vertical, onde veremos maiores detalhes no :any:`RST Capitulo 7`. A noção de ângulo é estabelecida pela medida da abertura entre estas
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

Ângulo em grau, radiano e grado
-------------------------------

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
^^^^

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

.. _exemplo 1:

.. admonition:: :exem:`Exemplo 1` Converta o ângulo sexagesimal :math:`116^\circ33'54,18''` para grau decimal.

    :solucao:`Solução:`
    Sabendo-se que :math:`1^\circ=60'` e :math:`1^\circ=3\,600''`, temos:

    .. math::

       116^\circ33'54,18'' &=116^\circ+\left(\frac{33'}{60'}\right)^\circ+\left(\frac{54,18''}{3\,600''}\right)^\circ\\
                           &=116,5650511^\circ.

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

.. _exemplo 2:

.. admonition:: :exem:`Exemplo 2` Transforme o ângulo decimal do `Exemplo 1`_ para o sistema sexagesimal.

    :solucao:`Solução:`
    O ângulo é :math:`116,5650511^\circ`, logo :math:`116^\circ`. A decimal :math:`0,5650511^\circ` em minutos:

    .. math::

       \text{minutos} & =0,5650511\cdot60'\\
                      & =33,903\\  & =33'.

    Agora decimal dos minutos, :math:`0,903'`, em graus:

    .. math::

       \text{segundos} & =0,903\cdot60''\\
                       & =54,18''.

    Desta forma, temos o ângulo na forma sexagesimal, :math:`116^\circ33'54,18''`.

Radianos
^^^^^^^^

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
^^^^^^

O ângulo em grado tem como símbolo *g*, e é colocado após o valor
da medida. Nesta unidade o círculo é dividido em 400 partes iguais
e cada uma equivale a um grado, sendo aceito a decimal de grado. É
uma unidade utilizada por alguns países europeus, como por exemplo
Portugal.

A conversão entre unidades angulares é bastante simples. Por exemplo,
se considerar apenas meio círculo, têm-se: :math:`\pi\text{ rad}=180^\circ=200^{\text{g}}`.

.. admonition:: :exem:`Exemplo 3` Quanto vale :math:`116^\circ33'54,18''` em radiano e grado?

    :solucao:`Solução:`
    Primeiramente, este ângulo deve ser transformado para grau decimal, o que foi realizado no
    `exemplo 1`_. Por meio da relação entre as unidades de graus e radianos, mostradas acima,
    tem-se, para transformá-lo em radianos :math:`(x_{\text{rad}})`:

    .. math::
       \frac{x_{\text{rad}}}{116,5650511^\circ} & =\frac{\pi}{180^\circ}\\
       x_{\text{rad}} & =\frac{116,5650511^\circ\cdot\pi}{180^\circ}\\
       x_{\text{rad}} & =2,0344\,\text{rad}

    Aplica-se agora a relação entre grau e grado para encontrar o valor angular em
    grado :math:`(x_{\text{grado}})`, como:

    .. math::

       \frac{x_{\text{grado}}}{116,5650511^\circ} & =\frac{200^{\text{g}}}{180^\circ}\\
       x_{\text{grado}} & =\frac{116,5650511^\circ\cdot200^\text{g}}{180^\circ}\\
       x_{\text{grado}} & =129,5167^{\text{g}}.

Observações sobre ângulos: goniômetros; calculadora e a constante :math:`k` (Equação :eq:`definicaoangulo`)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
-----------------------

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

Uma vez conhecidos os lados de um triângulo retângulo, é possível
por meio das funções trigonométricas inversas encontrar um determinado
ângulo desejado. Cita-se abaixo as funções inversas: arco seno :math:`(\arcsin`
ou :math:`\sin^{-1})`; arco cosseno :math:`(\arccos` ou :math:`\cos^{-1})` e arco
tangente :math:`(\arctan` ou :math:`\tan^{-1})`. Em calculadoras eletrônicas
e planilhas, os valores das funções inversas estão restritas à diferentes
domínios, para maiores detalhes ver :cite:authors:`Stewart`.

.. math:: \theta=\arcsin\left(\frac{\text{cateto oposto}}{\text{hipotenusa}}\right)\\

.. math:: \theta=\arccos\left(\frac{\text{cateto adjacente}}{\text{hipotenusa}}\right)\\

.. math:: \theta=\arctan\left(\frac{\text{cateto oposto}}{\text{cateto adjacente}}\right)

.. admonition:: :exem:`Exemplo 4` Para o triângulo retângulo da Figura abaixo, determinar :math:`\theta`, :math:`\alpha`, e o seno, o cosseno e a tangente destes ângulos?

    .. figure:: /images/capitulo1/fig_trian_retangulo_exemplo.png
       :scale: 35 %
       :alt: fig_trian_retangulo_exemplo
       :align: center

    :solucao:`Solução:`
    A hipotenusa vale :math:`6,4` m. Para o ângulo :math:`\theta`, o lado de :math:`5:math:` m é o seu cateto oposto. Desta forma, pode-se utilizar a função arco seno para determinar :math:`\theta`:

    .. math::

       \theta & =\arcsin\left(\frac{\text{cateto oposto}}{\text{hipotenusa}}\right)\\
       & =\arcsin\left(\frac{5}{6,4}\right)\\  & =51,3752{}^\circ.

    Para calcular :math:`\alpha`, sabe-se que a soma dos ângulos internos de um triângulo é :math:`180^\circ`, logo :math:`\alpha=180^\circ-(51,3752^\circ+90^\circ)=38,6248^\circ`. As funções trigonométricas para :math:`\theta` e :math:`\alpha`:

    .. math::

       \sin\theta & =0,7813; & \cos\theta & =0,6242; & \tan\theta & =1,2515\\
       \sin\alpha & =0,6242; &\, \cos\alpha & =0,7813; &\, \tan\alpha & =0,7990

.. admonition:: :exem:`Exemplo 5` Com o objetivo de se estimar o raio da terra :math:`(R)`, um topógrafo subiu em uma montanha de
    :math:`5` km de altura, tendo vista para o oceano. Com o auxílio dos seus equipamentos, mediu-se o ângulo formado entre
    a linha horizontal que passa pelo equipamento e a reta tangente a superfície do oceano no ponto :math:`H`,
    obtendo :math:`2,26^\circ`. Por meio destas informações, determinar o raio aproximado da terra :math:`(R)`.

    .. figure:: /images/capitulo1/fig_raio_terra_exemplo.png
       :scale: 35 %
       :alt: fig_raio_terra_exemplo
       :align: center

    :solucao:`Solução:`
    A visada :math:`AH` é tangente à terra em :math:`H`. :math:`AH` é perpendicular à :math:`OH`, logo em :math:`H`, o ângulo
    é reto :math:`(90^\circ)` para o triângulo :math:`AOH`. O lado deste triângulo oposto a :math:`H` :math:`(R\mathrm{+5\:km})`
    é a hipotenusa. Percebe-se também que, o ângulo entre a linha do horizonte que passa em :math:`A` e a linha :math:`AO` é
    de :math:`90^\circ`, então o ângulo :math:`\theta` é de :math:`87,74^\circ` :math:`(90^\circ-2,26^\circ)`. Considerando
    :math:`\sin\theta` temos:

    .. math::
       \sin\theta & =\frac{R}{R+5}\\
       R & =(R+5)\sin87,74\\
       R-R\sin87,74 & =5\cdot\sin87,74\\
       R & =\frac{5\cdot\sin87,74}{1-\sin87,74}\\
       R & =6\,423,1\mathrm{\,km.}

Para as definições das funções trigonométricas em função apenas de um ângulo qualquer, utiliza-se a figura de um círculo
unitário no plano cartesiano, ou seja, de raio 1 conforme :numref:`figcirculounitario`. Os valores de :math:`\cos\theta`
e :math:`\sin\theta` correspondem a projeção do raio com o ângulo :math:`\theta` nos eixos :math:`x` e :math:`y`, respectivamente. Logo os seus
valores variam entre :math:`-1` e :math:`1`, sendo que os seus sinais mudam conforme o quadrante. Maiores detalhes podem ser
encontrados em livros de cálculo.

.. _figcirculounitario:

.. figure:: /images/capitulo1/fig_circulo_unitario.png
   :scale: 55 %
   :alt: fig_circulo_unitario
   :align: center

   Círculo unitário e os sinais por quadrante das funções :math:`\sin`, :math:`\cos` e :math:`\tan`.

.. admonition:: Entendendo o círculo unitário

   Consultar: https://phet.colorado.edu/sims/html/trig-tour/latest/trig-tour_en.html

**Lei dos senos**

Agora, considere um triângulo de lados :math:`a`, :math:`b` e :math:`c`, com os ângulos opostos a estes lados, respectivamente,
:math:`\widehat{A}`, :math:`\widehat{B}` e :math:`\widehat{C}`. A lei dos senos apresenta as relações apresentadas
na Equação :eq:`figleidossenoscosenos`. Um exemplo clássico de aplicação da lei dos senos aplicada à topografia é
apresentado no Exemplo 6.

.. figure:: /images/capitulo1/fig_leidossenoscosenos.png
   :scale: 35 %
   :alt: fig_leidossenoscosenos
   :align: center

.. math:: \frac{a}{\sin\widehat{A}}=\frac{b}{\sin\widehat{B}}=\frac{c}{\sin\widehat{C}}.
   :label: figleidossenoscosenos

.. admonition:: :exem:`Exemplo 6` Considere o esquema apresentado na Figura a seguir. Um levantamento topográfico foi realizado do lado
    esquerdo do rio, e não se tem acesso ao lado direito, onde encontra-se o ponto P. Todavia deseja-se obter a distância AP.
    Para tanto, mediu-se: com uma trena, a distância de A ao ponto B, resultando em :math:`50` m; por meio de um teodolito
    estacionado em A, visando-se sucessivamente P e B, o ângulo :math:`\alpha=37^\circ51'`; e por fim, também com o teodolito,
    agora estacionado em B, visando-se A e P, o ângulo :math:`\beta=75^\circ47'`. Por meio destas medidas, calcule a distância AP.

    .. figure:: /images/capitulo1/fig_exemp_lei_senos.png
       :scale: 35 %
       :alt: fig_exemp_lei_senos
       :align: center

    :solucao:`Solução:`
    A lei dos senos pode ser utilizada para determinar a distância do ponto inacessível P. Como dois ângulos do triângulo
    foram medidos, pode-se calcular o outro, ao qual denominaremos de :math:`\gamma`, sendo:

    .. math::

       \gamma & =180-\left(\alpha+\beta\right)\\
       & =180-\left(37^\circ51'+75^\circ47'\right)\\
       & =66^\circ22'

    Uma vez que conhecemos o lado AB=50 m, o seu ângulo oposto, :math:`\gamma=66^\circ22'`, e o ângulo
    :math:`\alpha=75^\circ47'`, oposto ao lado que queremos determinar, AP, pode-se aplicar a lei dos senos, como segue abaixo:

    .. math::

       \frac{\text{AB}}{\sin\gamma} & =\frac{\text{AP}}{\sin\beta}\\
       \frac{50\,\text{m}}{\sin66^\circ22'} & =\frac{AP}{\sin75^\circ47'}\\
       \text{AP} & =\frac{50\,\text{m}\cdot\sin75^\circ47'}{\sin66^\circ22'}\\
       \text{AP} & =52,906\,\text{m}.

**Lei dos cossenos**

A outra lei trigonométrica que vamos apresentar é a dos cossenos. Ela relaciona os lados do triângulo com um ângulo interno
interno segundo as Equações :eq:`eqleicos1`-:eq:`eqleicos2`. Pode-se utilizar estas Equações para marcação de ângulos em campo,
como será apresentado no Exemplo 7.


.. math:: a^{2}=b^{2}+c^{2}-2bc\cos\widehat{A} \,\,\,\text{então:}\,\, \widehat{A}=\arccos\left(\frac{a^{2}-\left(b^{2}+c^{2}\right)}{-2bc}\right)
   :label: eqleicos1

.. math:: b^{2}=a^{2}+c^{2}-2ac\cos\widehat{B} \,\,\,\text{então:}\,\, \widehat{B} =\arccos\left(\frac{b^{2}-\left(a^{2}+c^{2}\right)}{-2ac}\right)

.. math:: c^{2}=a^{2}+b^{2}-2ab\cos\widehat{C} \,\,\,\text{então:}\,\, \widehat{C} =\arccos\left(\frac{c^{2}-\left(a^{2}+b^{2}\right)}{-2ab}\right)
   :label: eqleicos2

.. admonition:: :exem:`Exemplo 7` Considerando que os comprimentos dos lados de um triângulo são: :math:`a=32` m, :math:`b=28` m e
    :math:`c=23` m. Determine os ângulos internos.

    :solucao:`Solução:`
    A partir da lei dos cossenos, temos para :math:`\widehat{A}`:

    .. math::
       \cos\widehat{A} & =\left(\frac{a^{2}-\left(b^{2}+c^{2}\right)}{-2bc}\right)\\
       \widehat{A} & =\arccos\left(\frac{a^{2}-\left(b^{2}+c^{2}\right)}{-2bc}\right)\\
       \widehat{A} & =\arccos\left(\frac{32^{2}-\left(28^{2}+23^{2}\right)}{-2\cdot28\cdot23}\right)=77,0336^\circ

    Para :math:`\widehat{B}`:

    .. math::
       \cos\widehat{B} & =\left(\frac{b^{2}-\left(a^{2}+c^{2}\right)}{-2ac}\right)\\
       \widehat{B} & =\arccos\left(\frac{b^{2}-\left(a^{2}+c^{2}\right)}{-2ac}\right)\\
       \widehat{B} & =\arccos\left(\frac{28^{2}-\left(32^{2}+23^{2}\right)}{-2\cdot32\cdot23}\right)=58,5054^\circ

    Uma vez que conhecemos dois ângulos internos do triângulo,
    então :math:`\widehat{C}=180-(\widehat{A}+\widehat{B})=44,4610^\circ`.

.. _Coordenada retangular e polar no plano:

Coordenada retangular e polar no plano
======================================

Para a apresentação gráfica de dados bidimensionais, é utilizado o
plano cartesiano, formado por dois eixos ortogonais entre si, denominados
de eixo-:math:`x` e eixo-:math:`y`. A posição de pontos neste sistema dar-se-á
por meio de coordenadas retangulares ou polares.

Coordenada retangular
---------------------

A coordenada retangular de um ponto é dada por sua posição horizontal
e vertical, coordenada :math:`x` e coordenada :math:`y`, respectivamente. Exemplo
do plano cartesiano e pontos com suas respectivas coordenadas
retangulares são apresentados na :numref:`figcoordretangular`.
Estas coordenadas podem estar em qualquer unidade de comprimento,
sendo que em geomática a mais comum é a de metro (m). Logicamente,
caso a unidade fosse de metro, esta figura estaria reduzida a determinada
escala (ver seção :any:`escala`).

.. _figcoordretangular:

.. figure:: /images/capitulo1/fig_coord_retangular.png
   :scale: 45 %
   :alt: figcoordretangular
   :align: center

   Posição de alguns pontos e suas coordenada retangulares.

**Distância Euclidiana**

Caso as coordenadas retangulares de dois pontos quaisquer sejam conhecidas,
por exemplo, os pontos :math:`1(x_{1},\,y_{1})` e :math:`2(x_{2},\,y_{2})` da
Figura ao lado, pode-se calcular a distância da linha reta entre eles
:math:`(d_{\mathrm{12}})`, denominada de distância Euclidiana.
Pelo teorema de Pitágoras, :math:`d_{\mathrm{12}}`:


.. figure:: /images/capitulo1/figDistEuclidiana.png
   :scale: 35 %
   :alt: figDistEuclidiana
   :align: center

.. math::
   d_{\mathrm{12}}^{2} & =\Delta x^{2}+\Delta y^{2}\\
   d_{\mathrm{12}} & =\sqrt{\left(x_{2}-x_{1}\right)^{2}+\left(y_{2}-y_{1}\right)^{2}}
   :label: distanciaeuclidiana

.. admonition:: :exem:`Exemplo 8` Qual a distância entre os pontos A e C apresentados na :numref:`figcoordretangular`?
    Considere que a unidade é o metro.

    :solucao:`Solução:`
    As coordenadas de A e C são :math:`(4,5\,\mathrm{m};\,2,1\,\mathrm{m})` e :math:`(-4,9\,\mathrm{m};\,-3,2\,\mathrm{m})`,
    respectivamente. Aplicando a Equação :eq:`distanciaeuclidiana`:

    .. math::
       d & =\sqrt{\left(x_{\text{A}}-x_{\text{C}}\right)^{2}+\left(y_{\text{A}}-y_{\text{C}}\right)^{2}}\\
       & =\sqrt{\left(4,5--4,9\right)^{2}+\left(2,1--3,2\right)^{2}}\\
       & =\sqrt{\left(4,5+4,9\right)^{2}+\left(2,1+3,2\right)^{2}}\\
       & =10,791\,\text{m}.

.. _Coordenada polar:

Coordenada polar
----------------

A coordenada polar de um ponto é dada pelo seu raio :math:`(r)`, distância entre a origem
do sistema cartesiano ao ponto, e seu ângulo :math:`(\theta)`, medido a
partir do eixo-:math:`x` positivo, sentido anti-horário, até raio. Exemplo
de coordenadas polares para os pontos A e C vistos na :numref:`figcoordretangular`
podem ser observados na :numref:`figCoordPolar`. Aprenderemos
posteriormente que em levantamentos topográficos trabalhamos com um
tipo de coordenada polar, em que o ângulo é denominado de Azimute,
e o raio o comprimento do alinhamento. Porém o ângulo de Azimute é
medido a partir do eixo-:math:`y` positivo, e o sentido de contagem angular
é o horário. Mais detalhes serão vistos posteriormente, no
:any:`RST Capitulo 7`.

.. _figCoordPolar:

.. figure:: /images/capitulo1/figCoordPolar.png
   :scale: 55 %
   :alt: _figCoordPolar
   :align: center

   Coordenadas polares para os pontos A e C da :numref:`figcoordretangular`.

Coordenada polar para retangular
--------------------------------

A transformação de coordenada polar para retangular pode ser deduzida
a partir da :numref:`figPolar2Retangular`. Considere
um ponto P, de coordenada polar :math:`(\theta_{\text{P}},\,r_{\text{P}})`.
Queremos obter sua coordenada retangular :math:`(x_{\text{P}},\,y_{\text{P}})`.
Pode-se verificar que o cateto oposto e o cateto adjacente ao ângulo
:math:`\theta_{\text{P}}` correspondem, respectivamente, à coordenada :math:`y_{\text{P}}`
e :math:`x_{\text{P}}`. Serão aplicadas as funções seno e cossenos ao ângulo
:math:`\theta`, que tem como hipotenusa :math:`r_{\text{P}}`, o que resultará
na obtenção da coordenada retangular, como apresentado nas Equações :eq:`eqcoordenadax` e
:eq:`eqcoordenadax`. Estas equações são aplicadas para pontos localizados em quaisquer
quadrante.

.. _figPolar2Retangular:

.. figure:: /images/capitulo1/figPolar2Retangular.png
   :scale: 35 %
   :alt: figPolar2Retangular
   :align: center

   Esquema gráfico para conversão entre coordenada polar e retangular.

.. math::
   \cos\theta_{\text{P}} =\frac{x_{\text{P}}}{r_{\text{P}}}

.. math::
   x_{\text{P}} =r_{\text{P}}\cos\theta_{\text{P}}
   :label: eqcoordenadax

.. math::
   \sin\theta_{\text{P}} =\frac{y_{\text{P}}}{r_{\text{P}}}\\

.. math::
   y_{\text{P}} =r_{\text{P}}\sin\theta_{\text{P}}
   :label: eqcoordenaday

.. admonition:: :exem:`Exemplo 9` Considere a coordenada polar do ponto C da :numref:`figCoordPolar`.
    Qual a sua coordenada retangular? A unidade de comprimento é o metro.

    :solucao:`Solução:`
    A coordenada polar de C é :math:`(213,147^\circ, 5,85)`. Então:

    :math:`x_{\mathrm{C}} =r_{\mathrm{C}}\cos\theta_{\mathrm{C}}=5,85\cos 213,147^\circ=-4,9\,\mathrm{m}`.

    :math:`y_{\mathrm{C}} =r_{\mathrm{C}}\sin\theta_{\mathrm{C}}=5,85\sin 213,147^\circ=-3,2\,\mathrm{m}`.

    Como era esperado, a coordenada retangular de C é a mesma apresentada na :numref:`figcoordretangular`.


.. _Coordenadaretangular2polar:

Coordenada retangular para polar
--------------------------------

Agora será apresentada a transformação de coordenada retangular para
polar. Para tanto utilizaremos mais uma vez o esquema da :numref:`figPolar2Retangular`.
Só que desta vez, a coordenada retangular de P, :math:`(x_{\text{P}},\,y_{\text{P}})`,
é que é conhecida. Uma vez que se têm os dois catetos do triângulo
retângulo, o raio de P, :math:`r_{\text{P}}`, é obtido por meio da Teorema
de Pitágoras (Equação :eq:`coordenadar`). Já o ângulo :math:`\theta_{\text{P}}`,
para este quadrante, pode ser obtido por meio da função arco tangente,
como apresentada na Equação :eq:`coordenadateta`.

A Equação :eq:`coordenadar`
é valida para pontos em qualquer quadrante. Já a Equação :eq:`coordenadateta`,
para cálculo de :math:`\theta_{p}`, é valida apenas para o primeiro quadrante,
sendo que para os demais, pode-se obtê-lo facilmente, como será apresentado
no Exemplo abaixo.

.. math::
   r_{\text{P}}=\sqrt{x_{\text{P}}^{2}+y_{\text{P}}^{2}}
   :label: coordenadar

Se :math:`x_{\mathrm{P}}` não for nulo:

.. math::
   \tan\theta_{\text{P}} & =\frac{y_{\text{P}}}{x_{\text{P}}}\\
   \theta_{\text{P}} & =\arctan\left(\frac{y_{\text{P}}}{x_{\text{P}}}\right)
   :label: coordenadateta

.. admonition:: :exem:`Exemplo 10` Considere a coordenada retangular do ponto D da :numref:`figcoordretangular`.
    Qual a sua coordenada polar? Considere que a unidade seja de metro.

    :solucao:`Solução:`
    A coordenada retangular de D é :math:`(4,9\,\mathrm{m};\,-1,3\,\mathrm{m})`. Ela é novamente
    mostrada na Figura ao abaixo.

    .. figure:: /images/capitulo1/figExemReta2Poloar.png
       :scale: 35 %
       :alt: figExemReta2Poloar
       :align: center

    Observe que a projeção da coordenada e
    o raio de D, :math:`r_{\text{D}}`, resultam em um triângulo retângulo,
    em que, :math:`4,9` m é o cateto adjacente a :math:`\alpha`, e :math:`1,3` m é o cateto
    oposto, podendo-se calcular :math:`\alpha`:

    .. math::
       \tan\alpha & =\frac{y_{\text{D}}}{x_{\text{D}}}\\
       \alpha & =\arctan\left(\frac{y_{\text{D}}}{x_{\text{D}}}\right)=\arctan\left(\frac{1,3}{4,9}\right)=14,8586^\circ.

    Agora pode-se calcular :math:`\theta_{\mathrm{D}}`, pois, :math:`\theta_{\mathrm{D}}=360^\circ-\alpha=345,1414^\circ`.
    Para se calcular :math:`r_{\text{D}}`, temos:

    :math:`r_\text{D}=\sqrt{x_{\text{D}}^{2}+y_{\text{D}}^2}=\sqrt{4,9^2+1,3^2}=5,07\,\text{m}.`

    Desta forma, a coordenada polar de D é :math:`(345,1414^\circ;\,5,07\,\mathrm{m})`.

.. _secAreasdefiguras:

Áreas de figuras elementares no plano
=====================================

**Área de um retângulo**

Sejam os lados de um retângulo, :math:`a` e :math:`b`. A sua área :math:`(A)` é calculada
pelo produto dos seus lados:

.. math::
   A=ab.

.. admonition:: :exem:`Exemplo 11`  Qual a área de um sala retangular, onde os lados medem :math:`5,3` m e :math:`7,9` m.

    :solucao:`Solução:`

    .. math::

       A & =ab \\
       & =5,3\cdot7,9 \\
       & =41,87\,\text{m}^{2}.

**Área de triângulo**

A área de um triângulo pode ser calculada de diversas formas, dependendo dos dados disponíveis, se os comprimentos dos
lados e/ou ângulos internos. Considere o triângulo da Figura ao lado. Caso sejam conhecidas(os)

.. figure:: /images/capitulo1/figAreaDeTriangulo.png
   :scale: 35 %
   :alt: figExemReta2Poloar
   :align: center

- a sua altura :math:`(h)` e a base (nesta Figura o lado :math:`b`), a área será:

.. math::
   A=\frac{bh}{2}.

.. admonition:: :exem:`Exemplo 12` Qual aárea de triângulo onde a base mede :math:`15,9` m e a altura :math:`9` m.

    :solucao:`Solução:`

    .. math::
       A & =\frac{bh}{2} \\
       & =\frac{15,9\cdot9}{2} \\
       & =71,55\,\text{m}^{2}

- dois lados, :math:`a` e :math:`b`, e o ângulo formado entre eles, :math:`\alpha`, a área será:

.. math::
   A=\frac{1}{2}ab\sin\alpha;

.. admonition:: :exem:`Exemplo 13` Qual a área de triângulo em que dois lados medem :math:`3,1\,\text{m}` e
    :math:`6,8\,\text{m}`, e o ângulo entre eles é de :math:`34^\circ`.

    :solucao:`Solução:`

    .. math::
       A & =\frac{1}{2}ab\sin\alpha \\
       &=\frac{1}{2}3,1\cdot6,8\sin34^\circ \\
       &=5,89\,\text{m}^2.

- os comprimentos dos três lados do triângulo, :math:`a,\,b,\,\mathrm{e}\:c`, usa-se a fórmula de Heron, também conhecida como a fórmula do semiperímetro, em que a área é:

.. math::
   A=\sqrt{p\left(p-a\right)\left(p-b\right)\left(p-c\right)}
   :label: semiperímetro

em que :math:`p` é semiperímetro:

.. math::
   p=\frac{a+b+c}{2}.

.. admonition:: :exem:`Exemplo 14` Qual a área de um triângulo de lados medem :math:`10,3` m, :math:`5,4` m e :math:`6,0` m.

    :solucao:`Solução:`
    O semiperímetro:

    .. math::
       p & =\frac{a+b+c}{2} \\
       &=\frac{10,3+5,4+6,0}{2} \\
       &=10,85\,\textrm{m}.

    A área será:

    .. math::
       A & =\sqrt{p\left(p-a\right)\left(p-b\right)\left(p-c\right)} \\
       &=\sqrt{10,85\left(10,85-10,3\right)\left(10,85-5,4\right)\left(10,85-6\right)}\\
       &=12,56\,\text{m}^{2}.

**Área de trapézio**

Chamam-se de bases de um trapézio os seus lados paralelos e, sua altura,
a distância que separa estes dois lados. A área de um trapézio é calculada pela soma da bases, :math:`b_{1}` e
:math:`b_{2}`,  multiplicada pela altura :math:`(h)` dividida por dois, isto é:

.. figure:: /images/capitulo1/figAreaTrabezio.png
   :scale: 35 %
   :alt: figAreaTrabezio
   :align: center

.. math::
   A=\frac{1}{2}(b_{1}+b_{2})h.

.. admonition:: :exem:`Exemplo 15` Uma praça pública tem a forma de um trapézio, sendo medidos os lados paralelos
    de :math:`50,7` m e :math:`80,4` m e a distância entre eles de :math:`12` m, calcular á área
    da praça.

    :solucao:`Solução:`

    .. math::
       A & =\frac{1}{2}(b_{1}+b_{2})h \\
       &=\frac{1}{2}(50,7+80,4)12 \\
       &=786,6\,\text{m}^{2}.

**Área de um círculo**

Para uma círculo, pode ser conhecido o seu raio :math:`R` ou o seu diâmetro,
:math:`D\:(2R)`. Se o :math:`R` é conhecido, a sua área é:

.. math::
   A=\pi R^{2}.

Caso seja conhecido o diâmetro :math:`(D)`:

.. math::
   A=\frac{\pi}{4}D^{2}.

.. admonition:: :exem:`Exemplo 16`  Uma caixa de água tem diâmetro de :math:`1,2` m. Qual a área de superfície que ela ocupa.

    :solucao:`Solução:`
    Conhecendo-se o diâmetro temos:

    .. math::
       A & =\frac{\pi}{4}D^{2} \\
       &=\frac{\pi}{4}1,2^{2} \\
       &=1,13 \,\text{m}^{2}.

**Área de um setor de círculo**

Seja :math:`\alpha`, em graus, o ângulo da área do setor de círculo a
ser calculado. Temos, quando se conhece o raio :math:`(R)`:

.. figure:: /images/capitulo1/figAreaSetorCirculo.png
   :scale: 35 %
   :alt: figAreaSetorCirculo.png
   :align: center

.. math::
   A=\left(\frac{\alpha}{360^\circ}\right)\pi R^{2}.

Caso o diâmetro :math:`(D)` seja conhecido:

.. math::
   A=\left(\frac{\alpha}{360^\circ}\right)\frac{\pi}{4}D^{2}.

.. admonition:: :exem:`Exemplo 17` Calcule a área de um setor de :math:`5^\circ` de uma circunferência de :math:`R` igual
    a :math:`3` m.

    :solucao:`Solução:`

    .. math::
       A & =\left(\frac{\alpha}{360^\circ}\right)\pi R^{2} \\
       &=\left(\frac{5^\circ}{360^\circ}\right)\pi3^{2}  \\
       &=0,393\,\text{m}^2.

.. admonition:: Sugestão de aula prática

   **Uso de planilha eletrônica para solução de problemas em matemática**

   *Objetivo*:  apresentar o uso de planilhas eletrônicas para a resolução de problemas em topografia. É sugerida a utilização da planilha de cálculo *Calc*, presente no pacote *libreoffice*, que é diponível gratuitamente. Para obtê-lo e encontrar maiores informações, consultar a página: https://www.libreoffice.org.

   Serão apresentados os operadores e algumas funções matemáticas, onde, uma vez sabendo utilizá-las, é possível resolver grande parte dos problemas de topografia.

   Como roteiro:

   - apresentação dos operadores matemáticos: soma :math:`(+)`, subtração :math:`(-)`, multiplicação :math:`(*)`, divisão :math:`(\backslash)` e potência :math:`(\wedge)`;
   - apresentação das funções seno, cosseno, tangente, arco cosseno, etc

Exercícios
==========

:exem:`1)` Com o triângulo da Figura abaixo, de coordenada
:math:`R(12,3\,\text{m},\,6,1\,\text{m})`,
calcular os ângulos :math:`\alpha`, :math:`\beta,` e o seno, cosseno e tangente
destes ângulos.

.. figure:: /images/capitulo1/exer_1_1.png
   :scale: 40 %
   :alt: exer_1_1.png
   :align: center

:exem:`Resp.:` :math:`\alpha=26,3784^\circ`; :math:`\beta=63,6216^\circ`; :math:`\sin\alpha=0,4443`; :math:`\cos\alpha=0,89588`; :math:`\tan\alpha=0,49593`;
:math:`\sin\beta=0,89588`; :math:`\cos\beta=0,4443`; :math:`\tan\beta=2,0163`.

----

:exem:`2)` Converter :math:`0,0006^\circ` para segundos.

:exem:`Resp.:` :math:`2,16''`.

----

:exem:`3)` Expressar :math:`2,32\,\mathrm{rad}` e :math:`1,25\,\mathrm{rad}` em graus decimais.

:exem:`Resp.:` :math:`132,926^\circ`; :math:`71,619^\circ`.

----

:exem:`4)` Converter :math:`10^\circ15'39''` para graus decimais.

:exem:`Resp.:` :math:`10,26083333`.

----

:exem:`5)` Converter :math:`11^\circ50'3''` para radianos.

:exem:`Resp.:` :math:`0,207` rad.

----

:exem:`6)` Um triângulo tem lados :math:`a=7,5\,\text{m}`, :math:`b=8,9\,\text{m}`
e :math:`c=10,2\,\text{m}`. Calcule:
i) a área (:math:`\text{m}^2` e ha); ii) os ângulos internos.

:exem:`Resp.:`  :math:`32,437\,\text{m}^2`; :math:`0,003243` ha; :math:`\hat{a}=45,614^\circ`;
:math:`\hat{b}=57,999^\circ`; :math:`\hat{c}=76,387^\circ`.

----

:exem:`7)` Utilizando calculadora, calcule o seno, cosseno e tangente de :math:`22,3^\circ`, :math:`42,6^\circ`,
:math:`51,3^\circ`, :math:`89,1^\circ` e :math:`76,5^\circ`.

:exem:`Resp.:` Tabela abaixo.

.. table:: Resposta exercício 7

    ========================== ================= ================== ===================
    Ângulo :math:`(^\circ)`    seno              cosseno            tan
    ========================== ================= ================== ===================
    :math:`22,3`               :math:`0,37946`   :math:`0,92521`    :math:`0,41013`
    :math:`42,6`               :math:`0,67688`   :math:`0,73610`    :math:`0,91955`
    :math:`51,3`               :math:`0,78043`   :math:`0,62524`    :math:`1,24820`
    :math:`89,1`               :math:`0,99988`   :math:`0,01571`    :math:`63,65674`
    :math:`76,5`               :math:`0,97237`   :math:`0,23345`    :math:`4,16530`
    ========================== ================= ================== ===================

----

:exem:`8)` Um topógrafo necessita determinar a distância entre :math:`A` e :math:`B`, mostrados
na Figura ao lado. Infelizmente, seu equipamento de medição eletrônica
de distância não está funcionando. Devido a isto: em :math:`A`, o topógrafo
mediu o ângulo de :math:`88^\circ`; determinou a distância :math:`AC=159,49` m;
e em :math:`C` mediu de :math:`51^\circ`. Calcule o comprimento :math:`AB`.


.. figure:: /images/capitulo1/exer_1_8.png
   :scale: 40 %
   :alt: exer_1_8.png
   :align: center

:exem:`Resp.:`  :math:`AB=188,927` m.

----

:exem:`9)` Dadas as coordenadas retangulares dos pontos: **A**:math:`(5,\,-19)`,
**B**:math:`(-23,\,-10)`, **C**:math:`(-29,\,4)`, **D**:math:`(13,\,11)`.
Calcular as respectivas coordenadas polares.

:exem:`Resp.:` **A**:math:`(284,7436^\circ,\, 19,6468)`; **B**:math:`(203,4986^\circ,\, 25,0798)`;
**C**:math:`(172,1467^\circ,\, 29,2745)`; **D**:math:`(40,23636^\circ,\, 17,0293)`.

----

:exem:`10)` Dadas as coordenadas polares dos pontos: **A**:math:`(72,9\text{m}, 314^\circ27')`;
**B**:math:`(58,1\text{m}, 260^\circ22')`; **C**:math:`(100,9\text{m}, 118^\circ41')`;
**D**:math:`(29,3\text{m}, 25^\circ28')`, calcular as respectivas
coordenadas retangulares.

:exem:`Resp.:`  **A**:math:`(51,05089,\,-52,0405)`; **B**:math:`(-9,72259,\,-57,2807)`;
**C**:math:`(-48,4288,\,88,51814)`; **D**:math:`26,45308,\,12,59859)`

----

:exem:`11)`  Com o objetivo de se estimar o raio da terra :math:`(R)`, um topógrafo subiu
em uma montanha de :math:`3,0` km de altura, tendo vista para o oceano. Com
o auxílio dos seus equipamentos, mediu-se o ângulo formado entre a
linha horizontal que passa pelo equipamento e a reta tangente a superfície
do oceano no ponto :math:`H`, obtendo :math:`1^\circ46'`. Determinar o raio
da terra aproximado, por meio destas medidas.

.. figure:: /images/capitulo1/exer_1_11.png
   :scale: 40 %
   :alt: exer_1_11.png
   :align: center

:exem:`Resp.:`  :math:`6\,308,3\,\text{km}`.

----

:exem:`12)` Com o objetivo de determinar a altura da árvore da Figura ao lado, o engenheiro
mediu, com o auxílio de um clinômetro (equipamento que mede ângulo
vertical), o ângulo vertical entre a sua posição e o topo da árvore.
Com uma trena, também mediu a distância horizontal à árvore. Sabendo
que o engenheiro mede :math:`1,80` m, qual é a altura da árvore?

.. figure:: /images/capitulo1/exer_1_12.png
   :scale: 40 %
   :alt: exer_1_12.png
   :align: center

:exem:`Resp.:`  :math:`20,546\,\text{m}`.

----

:exem:`13)` Determinar a altura :math:`H` do levantamento realizado conforme Figura ao lado, sendo
as medidas de distância em metros.

.. figure:: /images/capitulo1/exer_1_13.png
   :scale: 40 %
   :alt: exer_1_13.png
   :align: center

:exem:`Resp.:`  Altura = :math:`18,466\,\text{m}`.

----

:exem:`14)` Deseja-se medir a altura da torre da igreja ao lado. A distância horizontal
foi medida a partir do prédio, como mostrado, e dois ângulos verticais
foram determinados, em relação a base e ao topo da igreja. Qual a
altura da igreja?

.. figure:: /images/capitulo1/exer_1_14.png
   :scale: 40 %
   :alt: exer_1_14.png
   :align: center

:exem:`Resp.:`  Altura = :math:`31,275\,\text{m}`.

----

:exem:`15)` Com a finalidade de determinar a altura de um morro, foram medidas a distância
horizontal entre a base do morro ao primeiro ponto :math:`(200\,\text{m})`, onde nesta
primeira posição determinou-se o ângulo vertical em relação topo do
morro, conforme esquema ao lado. A partir deste ponto à outro, distante
:math:`300\,\text{m}` (percorrendo a mesma direção), mediu-se novamente o ângulo vertical
em relação ao topo do morro. Com estas medidas medidas calcular :math:`x`
e :math:`h`.

.. figure:: /images/capitulo1/exer_1_15.png
   :scale: 40 %
   :alt: exer_1_15.png
   :align: center

:exem:`Resp.:`  :math:`x=140,628\,\text{m}` e :math:`h=340,628\,\text{m}`.

----

:exem:`16)` Calcule a área de um triângulo retângulo de base :math:`20,0\,\text{m}` e
altura de :math:`14,2\,\text{m}`.

:exem:`Resp.:`  :math:`142\,\text{m}^2`.

----

:exem:`17)` Dado o triângulo da Figura ao lado, calcule qual o comprimento dos lados
:math:`x` e :math:`y`.

.. figure:: /images/capitulo1/exer_1_17.png
   :scale: 40 %
   :alt: exer_1_17.png
   :align: center

:exem:`Resp.:`  :math:`x=571,93\,\text{m}`; :math:`y=660,069`.

----

:exem:`18)` Dado o triângulo abaixo, contendo: as coordenadas dos vértices :math:`A(20
\text{ m};\,30 \text{ m})` e :math:`B(40 \text{ m};\,70 \text{ m})`. Calcular os comprimentos dos
lados :math:`AB` e :math:`AC` e a sua área.

.. figure:: /images/capitulo1/exer_1_18.png
   :scale: 40 %
   :alt: exer_1_18.png
   :align: center

:exem:`Resp.:`  :math:`AB=44,721\,\text{m}`; :math:`AC=49,594\,\text{m}`; área de :math:`774,5\,\mathrm{m}^2`.

----

:exem:`19)` Calcular a área do polígono formado pelos vértices :math:`1,\,2,\,3` e :math:`4`, sabendo-se
que: :math:`\alpha=77^\circ40'`; :math:`\beta=23^\circ10'`; :math:`\gamma=39^\circ5'`; :math:`1(60,0\,\text{m;}\,45,0\,\text{m})`;
:math:`3(10,0\,\text{m;}\,11,0\,\text{m})`; :math:`\text{DH}_{12}=44\,\text{m}`.

.. figure:: /images/capitulo1/exer_1_19.png
   :scale: 40 %
   :alt: exer_1_19.png
   :align: center

:exem:`Resp.:`  área = :math:`1\,553,941\,\text{m}^{2}`.

----

:exem:`20)` Do triângulo abaixo, contendo a distância do alinhamento :math:`CB=69,43\,\text{m}`,
Calcular os comprimentos dos lados :math:`AB` e :math:`AC` e a sua área.

.. figure:: /images/capitulo1/exer_1_20.png
   :scale: 40 %
   :alt: exer_1_20.png
   :align: center

:exem:`Resp.:`  :math:`AB = 57,095\,\text{m}`; :math:`AC = 49,594\,\text{m}`; área
de :math:`1397,850\,\text{m}^2`.

----

:exem:`21)` Dado um triângulo retângulo de catetos :math:`a=3,6\,\text{m}` e :math:`b=4,7\,\text{m}`. Encontrar a hipotenusa. Calcule os ângulos
internos.

:exem:`Resp.:`  Hipotenusa = :math:`5,920\,\text{m}`; :math:`\hat{a}=37,450^\circ`;
:math:`\hat{b}=52,549^\circ`; :math:`\hat{c}=90^\circ`.