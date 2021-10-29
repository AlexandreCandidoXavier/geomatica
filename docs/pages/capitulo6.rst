.. raw:: html

    <style> .exem {color:blue; font-weight: bold} </style>

.. role:: exem

.. raw:: html

    <style> .solucao {font-weight: bold} </style>

.. role:: solucao

.. raw:: html

    <style> .blue {color:blue} </style>

.. role:: blue

.. _RST Capitulo 6:

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
para a DH e DN.

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

Na :numref:`fig_errodistancia`, também é apresentada, para algumas
medidas de distância no geóide :math:`(s)`, a sua correspondente distância
no plano topográfico :math:(`d`). Verifica-se que, para distâncias curtas
:math:`(s<5.000\,\text{m})`, a diferença entre as medidas, :math:`d-s`, é insignificante
:math:`(<1\,\text{mm})`. Todavia, para medidas de :math:`s` maiores que 80 km, as diferenças
com relação a :math:`d` se tornam significativas :math:`(>4,2\,\text{m})`. Se considerarmos
que as medidas topográficas são realizadas acima do nível médio dos
mares, acima do geóide, as diferenças entre :math:`s` e :math:`d`, serão ainda
maiores com relação as medidas de :math:`s` no geóide. Para fins de levantamento
topográfico, a :cite:t:`NBR13133` estabelece de :math:`80\,\text{km}` a dimensão
máxima a ser medida.


Considerações a respeito dos cálculos das medidas de distância horizontais
para a distância geodésica, em relação ao elipsóide, ou para o plano
de projeção cartográfica, como o UTM, não serão apresentados aqui.
Contudo, para quem tiver interesse, pode consular, por exemplo, :cite:t:`WOLF`.

Medição com trena
=================

As trenas podem ser utilizadas para as medidas de distância entre
pontos. Elas podem ter como material de fabricação, por exemplo, o
aço, o invar (níquel e aço) ou a fibra de vidro. Normalmente apresentam
as medidas de metros e centímetros nas duas faces, todavia, algumas
podem apresentar em uma face a medida de metros e, na outra, a de
polegadas [2]_.
O comprimento nominal das trenas é bastante variado, encontrando comprimentos
como de: 5 m, 10 m, 20 m, ou 50 m.

.. _baliza_ficha.png:

.. figure:: /images/capitulo6/baliza_ficha.png
   :scale: 55 %
   :alt: baliza_ficha.png
   :align: center

   Baliza e ficha.

Faz-se necessário, quando se trabalhando com medidas de distância com a trena,
o uso de alguns acessórios, como as balizas e as fichas.
A baliza é uma haste de ferro de 2 m de comprimento, de madeira ou
de metal, sendo pintada, alternativamente, com as cores branco e vermelho.
Ela é utilizada para materializar a posição do ponto a ser medido
acima do solo, devendo estar, durante as medições, na posição vertical,
o que pode ser facilitado se na mesma conter um nível de bolha. Na
:numref:`fig_balizavertical.png` são apresentados balizas com a posição
da vertical correta e incorreta.

A ficha é uma pequena haste de ferro, utilizada para materializar
uma trenada. Ocorre que, quando a distância a ser medida é muito extensa,
maior do que o comprimento da trena, é necessário um conjunto de trenadas,
e a ficha servirá, tanto para indicar este número de trenadas, como
para materializar a posição de início da próxima medida.


.. _fig_balizavertical.png:

.. figure:: /images/capitulo6/fig_balizavertical.png
   :scale: 55 %
   :alt: fig_balizavertical.png
   :align: center

   Qualidade da verticalização da balizas no momento da medida. Manter sempre na vertical.

Outros cuidados que devem ser verificados durante o procedimento de
medida com a trena são: se o alinhamento está correto; e, se a trena
está em nível e com tensão adequada. Na :numref:`fig_alinhamento`
é apresentado a medida de distância entre os pontos :math:`A` e :math:`B`, onde serão
necessárias várias trenadas. Para o levantamento serão necessários
três balizeiros (pessoa com baliza). Se o caminhamento for realizado
de :math:`A` para :math:`B`, um balizeiro ficará parado em :math:`B` (balizeiro de vante)
e, os outros dois balizeiros farão as medidas, o balizeiro de ré,
inicialmente no ponto :math:`A` e o balizeiro intermediário, que vai puxar
a trena na direção de :math:`B`. Após o balizeiro intermediário chegar próximo
ao limite da trenada, por exemplo :math:`20\,\text{m}`, terá que fazer o correto alinhamento
com a linha :math:`AB`. Isto será possível com a orientação do balizeiro de
ré que, olhando para a sua baliza e para a baliza no ponto de vante,
orientará o balizeiro intermediário para o correto alinhamento. Uma
vez as três balizas alinhadas, o balizeiro de ré, com a baliza na
vertical, tensionará a trena, mantendo-a em nível e para materializar
este ponto cravará na posição da baliza uma ficha. O balizeiro de
ré deslocará para a posição da ficha, onde vai estacionar a sua baliza,
guardando para si a ficha, enquanto o balizeiro intermediário caminhará
para a próxima trenada. O procedimento se repete até o final. Obviamente,
que a última trenada, quase sempre, será apenas uma fração de :math:`20\,\text{m}`,
onde o seu valor é anotado. Ao final, a distância horizontal AB será
o número de fichas vezes o comprimento da trenada, mais a fração final.

Pode-se perceber na :numref:`fig_alinhamento` as medidas no plano,
feitas de maneira correta e não correta. Se o alinhamento do levantamento
à trena não for realizado corretamente, quando se fizer o somatório
das trenadas, não corresponderá a distância horizontal correta entre
os pontos.

.. _fig_alinhamento:

.. figure:: /images/capitulo6/fig_alinhamento.png
   :scale: 55 %
   :alt: fig_alinhamento.png
   :align: center

   Levantamento do alinhamento :math:`AB`  com o auxílio da trena.
   As duas figuras na parte inferior, apresentam duas possíveis configurações
   do levantamento visto no plano, uma com os alinhamentos realizados
   corretamente e outra, incorretamente.


Outros erros que devem-se evitar durante o levantamento são em relação
a verificação da horizontalidade da trena e a pouca tensão aplicada,
no momento da medição (:numref:`fig_trenahorizontal.png`). Quando
o terreno é plano, é fácil manter a horizontalidade, bastando a altura
da trena nas duas balizas serem as mesmas. Todavia, em terreno inclinado,
os balizeiros de ré e intermediários devem tomar cuidados, devendo-se
subir ou descer a posição da trena para se ter a horizontalidade.
Uma pessoa olhando o perfil da trenada pode auxiliar na correta horizontalidade
da trenada. Com relação a baixa tensão, quando puxando a trena, em
uma catenária elevada (ver :ref:`erro_tensao`).

.. _fig_trenahorizontal.png:

.. figure:: /images/capitulo6/fig_trenahorizontal.png
   :scale: 35 %
   :alt: fig_trenahorizontal.png
   :align: center

   Exemplos de trenadas em posição de desnível, com pouca tensão e quando utilizada corretamente.


Além dos erros durante a realização das medidas com trena, podem-se
citar :cite:t:`WOLF`: i) erros instrumentais: a trena tem comprimento
diferente do comprimento nominal, devido à falha de fabricação ou
resultado de alguma danificação; ii) erros naturais: devido ao efeito
da temperatura, tensão e catenária e vento e; iii) erros de coleta:
quando os dados são anotados errados ou a leitura equivocada, alinhamentos
incorretos, etc. Abaixo seguem uma descrição dos erros e maneiras
de evitar e, se possível, corrigi-los.

Erros instrumentais
-------------------

Por falha de fabricação, envelhecimento ou defeito devido à, por exemplo,
dobramento da mesma, a trena pode apresentar o comprimento atual diferente
daquele mostrado nominalmente. A verificação e a correção deste tipo
de erro só é possível se estiver a disponibilidade de um comprimento
padrão para comparação. Desta forma, pode-se aplicar a correção para
as medidas de uma trena defeituosa.

Erros naturais
^^^^^^^^^^^^^^

A seguir são apresentado os erros naturais que podem ser corrigidos
quando, nas medidas de distância com a trena. Um erro natural que
pode ocorrer, mas não tem como realizar a correção, é o devido ao
efeito do vento. Logo, deve-se evitar fazer medidas em condições de
vento desfavorável. 

Erro devido à temperatura de trabalho distinta da do padrão
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Normalmente as trenas são aferidas para uma determinada temperatura
padrão. Ou seja, ela só vai apresentar o comprimento real de :math:`20` m,
por exemplo, se trabalhando naquela temperatura. Caso se esteja trabalhando
em temperatura superior, vai ocorrer dilatação do material da trena,
logo o seu comprimento real será superior do que o medido nominalmente.
Por outro lado, caso a temperatura de trabalho seja inferior ao padrão,
a trena vai se contrair, a sua medida real será inferior a medida
nominal. A correção a ser aplicada devida a temperatura (:math:`C_{t}`),
em uma trenada de comprimento nominal (:math:`S)`, quando se está trabalhando
com temperatura distinta da padrão é:

.. math::
   C_{t}=S(t-t_{0})\alpha
  :label: eq:trenatemperatura


em que: :math:`t` é a temperatura de trabalho :math:`(^\circ\text{C})`;
:math:`t_{0}` é a temperatura na qual a trena foi aferida :math:`(^\circ\text{C})`;
e :math:`\alpha` é o coeficiente de dilatação da trena :math:`(^\circ\mathrm{C}^{-1})`.

----

:exem:`Exemplo 1` Considere uma trena que
foi aferida para trabalho na temperatura de :math:`20^{\circ}\mathrm{C}`.
Ela apresenta coeficiente de dilatação de :math:`0,0000116^{\circ}\mathrm{C}^{-1}`.
Se foi medido em campo :math:`54,3\,\text{m}` sob uma temperatura de :math:`40^{\circ}\mathrm{C}`,
calcular a distância com a correção devido a temperatura ser distinta
do padrão da trena.

:solucao:`Solução:`
De acordo com a Equação :eq:`eq:trenatemperatura`, temos:

:math:`C_{t}=S(t-t_{0})\alpha=54,3(40^{\circ}-20^{\circ})0,0000116=0,013\,\mathrm{m}`

Logo, aplicando a correção, :math:`54,3\,\mathrm{m}+0,013\,\mathrm{m}=54,313\,\mathrm{m}`. 

----

.. _erro_tensao:

Erro devido à tensão de trabalho distinta da do padrão
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Assim como com a variável temperatura, a trena é aferida para determinada
tensão padrão :math:`(T_{0})`, caso ela seja submetida a uma menor tensão,
o seu comprimento real será menor que o mostrado nominalmente, e caso
de submetida à uma tensão maior, o comprimento real será maior do
que o nominal. A correção, devido a se trabalhar com uma tensão (:math:`T`,
kg) distinta da tensão padrão (:math:`T_{0}`, kg) é:

.. math::
   C_{T}=S\frac{(T-T_{0})}{qE},
   :label: eq:trenatensao

em que: :math:`q` é a área da seção transversal da trena :math:`(\text{mm}^{2})`;
:math:`S` é a medida de distância medida; :math:`E` é o módulo
de elasticidade por tração, normalmente :math:`20\,000\,\mathrm{kg mm}^{-2}`.
A tensão pode ser medida por meio de um tensiômetro.

:exem:`Exemplo 2`  Considere uma trena que foi
aferida para trabalho na tensão de :math:`10` kg. Todavia, quando no campo
aplicou-se uma tensão de :math:`5` kg. Se foi medido em campo :math:`54,3` m nesta
condição, calcular a distância com a correção devido à tensão ser
distinta do padrão da trena. Considere a área da seção da trena
:math:`q=0,4\,\mathrm{mm}\cdot12\,\mathrm{mm=4,8\,\mathrm{mm^{2}}}`.

:solucao:`Solução:`
De acordo com a Equação :eq:`eq:trenatensao` e considerando :math:`E=20.000\,\mathrm{kg\,mm^{-2}}`
temos:

:math:`\displaystyle C_{T}=S\frac{(T-T_{0})}{qE},=54,3\frac{(5-10)}{4,8\cdot20\,000}=-0,003\,\mathrm{m}`

Logo, aplicando a correção para o erro de tensão, :math:`54,3\,\mathrm{m}-0,003\,\mathrm{m}=54,297\,\mathrm{m}`. 

----

Erro devido à catenária

A medida lida na trena de, por exemplo, :math:`20\,\text{m}`, somente corresponderá
ao comprimento de :math:`20\,\text{m}`, se ela estivesse em descanso sobre uma superfície
plana (:numref:`fig_catenari.png`). Normalmente no levantamento em
campo ela é suspensa, e devido ao seu peso, formará uma catenária.
Logo, a leitura que será feita, não corresponderá à real, mais sim,
um pouco inferior que a real. O erro devido a catenária :math:`(C_{c})`
é dado por:

.. math::
   C_{C}=-\frac{P^{2}S^{3}}{24T^{2}},
  :label: eq:catenaria

em que: :math:`P` é o peso da trena (:math:`\text{kg m}^{-1}`). Observe
que o erro sempre será negativo, isto é, a medida lida quando ela
está suspensa, é sempre menor do que a real.

.. _fig_catenari.png:

.. figure:: /images/capitulo6/fig_catenari.png
   :scale: 45 %
   :alt: fig_catenari.png
   :align: center

   Demonstração do erro devido à catenária.

:exem:`Exemplo 3` A distância de :math:`54,3` m foi
medida em duas trenadas, uma de 30 m e outra de :math:`24,3` m. Considerando
o peso da trena de :math:`0,03967` kg/m, qual o erro devido à catenária e
qual seria a medida real quando este erro for compensando? 

:solucao:`Solução:`
De acordo com a Equação :eq:`eq:catenaria`, para a primeira trenada,
:math:`S=30` m:

:math:`\displaystyle C_{C}=-\frac{P^{2}S^{3}}{24T^{2}}=-\frac{0,03967^{2}\cdot30^{3}}{24\cdot5^{2}}=-0,071\,\mathrm{m}`,

Para os :math:`24,3\,\text{m}` finais:

:math:`\displaystyle C_{C}=-\frac{P^{2}S^{3}}{24T^{2}}=-\frac{0,03967^{2}\cdot24,3^{3}}{24\cdot5^{2}}=-0,038\,\mathrm{m}`,

Logo, o erro total é :math:`-0,109\,\text{m}` :math:`(-0,071+-0,038)`. A medida correta
da trena considerando e erro da catenária é :math:`54,3-0,109=54,191\,\text{m}`.

----

Correção do efeito combinado da temperatura, tensão e catenária
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Os três erros mostrado anteriormente devido, à temperatura, à tensão
e à catenária, devem ser considerados concomitantemente, desta forma,
o comprimento corrigido devido a estes três erros :math:`(S_{\mathrm{corrigido}})`
é:

.. math::
   S_{\mathrm{corrigido}}=S+C_{t}+C_{T}+C_{C},
   :label: eq:TrenaErroTotal


em que: :math:`S_{\mathrm{corrigido}}` é o comprimento do alinhamento
corrigido (m); :math:`S` é o comprimento do alinhamento medido com a trena
(m); :math:`C_{t}` é a compensação devido à temperatura (m); :math:`C_{T}` é
a compensação devido à tensão (m); e :math:`C_{C}` é a compensação devido
à catenária (m).

----

:exem:`Exemplo 4` Considerando os erros encontrados
na medição devido à temperatura, à tensão e à catenária dos Exemplos
1, 2 e 3, respectivamente, qual seria o comprimento real, quando o nominal foi
de :math:`54,3\,\text{m}`?

:solucao:`Solução:`
De acordo com a Equação :eq:`eq:TrenaErroTotal`:

:math:`S_{\mathrm{corrigido}}=S+C_{t}+C_{T}+C_{C}=54,3+0,013+-0,003+-0,109=54,201\,\text{m}`.

----

Procedimento em campo para medidas à trena
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Se for para medição de área, mede-se a poligonal e as diagonais internar
que subdividem a área em vários triângulos. A Figura :numref:`fig_levantamentoAtrena.png`
apresenta a poligonal :math:`ABCDEFA` a ser medida com a trena. A
partir do ponto E foram determinadas as diagonais internas, subdividindo
a área em quatro triângulos. Deve-se medir em campo os alinhamento
:math:`a,\,b,\,c,\,d,\,e\,\mathrm{e\,}f`, da poligonal e as diagonais internas
:math:`g,\,h,\,\mathrm{e\,}i`.

Como os lados dos quatro triângulos foram medidos, é possível medir
individualmente a área deles por meio da Equação do semi-perímetro
(Equação :eq:`semiperímetro`),
e somando estas área individuais, obter a área total.

Conhecendo-se as DH's da poligonal e os ângulos internos dos vértices,
é possível calcular as coordenadas dos vértices, sendo este procedimento
apresentado na Secção :any:`poligonal_fechada`.
Os ângulos internos de cada vértice podem ser calculados com o auxílio
da lei dos cossenos (Equação :eq:`eqleicos1`).
Por exemplo, no vértice :math:`B`, o ângulo interno, :math:`88,35^{\circ}`,
será a soma de dois ângulos, :math:`\alpha` e :math:`\beta`, opostos, respectivamente,
as diagonais :math:`h:` e :math:`i`.

.. _fig_levantamentoAtrena.png:

.. figure:: /images/capitulo6/fig_levantamentoAtrena.png
   :scale: 45 %
   :alt: fig_levantamentoAtrena.png
   :align: center

   Esquema de um levantamento à trena.

.. admonition:: Sugestão de aula prática

   **Levantamento de área com o auxílio da trena.**

   *Objetivo*:  Realizar levantamento de área com auxílio da trena.

   *Material*: trena, baliza, fichas e estacas.

   *Procedimento*:

   - materializar com as estacas a área a ser medida em campo;
   - constituir um grupo de três balizeiros para realização das medidas;
   - subdividir a área em triângulos;
   - medir as diagonais da poligonal e as diagonais internas;
   - calcular a área dos triângulos pela equação do semi-perímetro;
   - calcular os ângulos internos pela lei dos cossenos;
   - calcular as coordenadas totais.


Medição taqueométrica
=====================

Nos teodolitos (`aqui para ver exemplares <https://en.wikipedia.org/wiki/Theodolite>`_),
quando se observa a luneta, com
o foco adequado, pode-se observar três retículos (fios) na horizontal
e um na vertical. Aos retículos da horizontal denominamos, de acordo
com a sua posição (:numref:`fig_luneta_mira.png` a) de: *i*) se na superior,
retículo superior :math:`(rs)`. *ii*) se na do meio, retículo médio
:math:`(rm)` e; *iii*) se inferior, retículo inferior :math:`(ri)`.
É possível, por meio de leituras dos retículos de um teodolito em
uma mira, e da medida do ângulo vertical, calcular a DH e a DN entre
a posição do teodolito e o ponto da mira. Para a DN há ainda a necessidade
de se medir a altura do instrumento :math:`(ai)`.

Uma mira é uma régua graduada, que deverá ser mantida na vertical
durante as medidas. Normalmente as miras são de alumínio ou de madeira.
Na :numref:`fig_luneta_mira.png` b é apresentado o esquema de uma mira
onde: mede 4 m; o número de bolas vermelhas ou os algarismos romanos
indicam a quantidade de metros; os números, na cor preta, são as medidas
dos decímetros; cada faixa branca ou preta, equivale a um centímetro.
As miras tem apresentam um sistema de encaixe, para ajustar a um comprimento
adequado e para facilitar o seu transporte e a sua guarda. Há miras
que apresentam as medidas de centímetros, como em uma trena, além
das subdivisões dos milímetros.

Quando uma mira é observada com a luneta, devem-se anotar
as leituras dos três retículos que estão na horizontal, correspondente
às posições em que elas interceptam a mira. O valor anotado deve ser
em metros, com três casas decimais, referentes aos decímetros, centímetros
e por final, os milímetros, que na mira apresentada na Figura :numref:`fig_luneta_mira.png` b,
são estimados.



.. _fig_luneta_mira.png:

.. figure:: /images/capitulo6/fig_luneta_mira.png
   :scale: 55 %
   :alt: fig_luneta_mira.png
   :align: center

   Esquema ilustrativo dos retículos de um teodolito (a) e de uma mira (b).

Nas medições taqueométricas, o ângulo vertical pode ser o zenital e o de inclinação (maiores informações
na Secção :any:`Ângulo vertical`.
Se o teodolito for eletrônico o ângulo vertical será apresentado no visor, mas se o teodolito for do tipo ótico mecânico, deverá ser realizado uma leitura
em uma luneta no equipamento, e o ângulo anotado. Na :numref:`fig_visadataqueometica.png`
é apresentada um esquema de uma medição da DH e DN entre os pontos A e B utilizando
um teodolito. Se o objetivo deste levantamento for apenas gerar a
planta planimétrica, será necessário determinar a :math:`\mathrm{\mathrm{DH_{AB}}}`, para isto,
serão lidos o :math:`rs`, o :math:`ri` e o :math:`z`. Com a medida do :math:`rm`, é possível
confirmar se as medidas dos outros dois retículos foram realizadas
com precisão, uma vez que: :math:`rs-rm=rm-ri`. As leituras de :math:`rm` também
são necessárias para o caso do levantamento for altimétrico, calculo
da :math:`\mathrm{\mathrm{DN_{AB}}}`, sendo que para este tipo de levantamento,
há ainda a necessidade da medição da altura do instrumento :math:`(ai)`.

.. _fig_visadataqueometica.png:

.. figure:: /images/capitulo6/fig_visadataqueometica.png
   :scale: 45 %
   :alt: fig_visadataqueometica.png
   :align: center

   Esquema de um levantamento taqueométrico em campo para as medidas da DH e da DN.

A DH (m) e a DN (m), entre os pontos A e B no terreno, respectivamente,
:math:`\mathrm{DH}_{\mathrm{AB}}` e :math:`\mathrm{DN}_{\mathrm{AB}}`, quando
se trabalha com ângulos zenitais (:math:`z`), são dadas por:

.. math::
   \mathrm{DH}_{\mathrm{AB}}=100H\sin^{2}z;
   :label: eq:taqueometria_DH

.. math::
   \mathrm{DN}_{\mathrm{AB}}=\frac{100H\sin2z}{2}+\mathit{ai}-\mathit{rm},
   :label: eq:taqueometria_DN

em que: :math:`ai` é a altura do instrumento (m); :math:`H=(rs-ri)`;
:math:`rs`, \:math:`rm` e :math:`ri`, respectivamente, retículo
superior, médio e inferior (m); e :math:`z`, o ângulo zenital :math:`(^{\circ})`.
Informações sobre como estas Equações foram determinadas, consultar
:cite:t:`loch` e :cite:t:`borge1`.

Em algumas situações, em que não se tem a leitura de um
dos retículos, pode-se empregar a :eq:`eq:taqueometria_reticulos`
para o cálculo do retículo faltante. Na :numref:`fig_luneta_mira.png` a
observa-se que a separação entre o :math:`rm` aos :math:`rs` e :math:`ri`, são as
mesmas, :math:`h`, logo:

.. math::
   2\mathit{rm}=\mathit{rs}+\mathit{ri}.
   :label: eq:taqueometria_reticulos

----

:exem:`Exemplo 5` Utilizando um teodolito estacionado no ponto A,
de altitude de :math:`456,785\,\text{m}`  e :math:`ai=1,65\,\text{m}`, fez-se uma visada ao ponto
B, anotando as seguintes medidas: :math:`z=84^{\circ}12'00''`;
:math:`ri=0,900\,\text{m}`; :math:`rm=1,732\,\text{m}`; :math:`rs=2,564\,\text{m}`.
Qual é :math:`\mathrm{DH_{AB}}` e a altitude de B?

:solucao:`Solução:`
Da Equação :eq:`eq:taqueometria_DH`:

:math:`\mathrm{DH_{AB}=100(2,564-0,900)\sin^{2}84^{\circ}12'00'=164,701}\,\text{m}`.

Da equação :eq:`eq:taqueometria_DN`:

:math:`{\displaystyle {\displaystyle \mathrm{DN_{AB}}=\frac{100(2,564-0,900)\sin2\cdot84^{\circ}12'00''}{2}+1,65-1,732=16,648}\,\text{m}}`.

Logo a altitude de B será de :math:`473,433\,\text{m}` :math:`(456,785+16,648)`.

----


Medidor Eletrônico de Distância (MED)
=====================================

Radiação eletromagnética
------------------------

Considerando a **radiação eletromagnética** (REM),
com comportamento de onda, ela será composta de dois campos perpendiculares
entre si, o campo magnético e o campo elétrico, que viajam na direção
perpendicular a eles, na velocidade da luz, :math:`c` (Figura ao lado).
A velocidade da REM no vácuo é de :math:`299\,792\,458\mathrm{\:m\,s}^{-1}`.
A REM que trabalhamos não viaja no vácuo, e sim submetida às condições
atmosféricas, logo com velocidade menor que :math:`c`. A velocidade da
luz, sob condições de de um meio refratário :math:`(V)`, será de:

.. math::
   V=\frac{c}{\eta},
   :label: eq:velocidadeluzvacuo

em que, :math:`\eta` é o índice de refração da atmosfera, entre
:math:`1,0001` e :math:`1,0005`. O comprimento de onda (:math:`\lambda`, m) da REM é definido
como a distância que separa dois pontos que nela se repete. A relação
de :math:`V` com o :math:`\lambda` e a frequência (:math:`f`, Hz, onde Hz é a abreviação de hertz, unidade de frequência igual a 1 ciclo
por segundo :math:`(\text{s}^{-1})`):

.. math::
   V=\lambda f,
   :label: eq:velocidadedaluzatmosfera

.. _fig_rem.png:

.. figure:: /images/capitulo6/fig_rem.png
   :scale: 35 %
   :alt: fig_rem.png
   :align: center

   Representação da radiação eletromagnética como onda.

Normalmente a frequência de trabalho da REM nos medidores
de distância é alta, então emprega-se a sua prefixação, sendo as mais
comuns: :math:`\mathrm{k}=10^{3}` (kHz, quilo-hertz); :math:`\mathrm{M}=10^{6}`
(MHz, mega-hertz) e :math:`\mathrm{G}=10^{9}` (GHz, quilo-hertz).

----

:exem:`Exemplo 6` Considere que um feixe de REM, emitida por um MED de uma
estação total, foi modulada na frequência de :math:`{149,84\mathrm{~kHz}}`
e :math:`\eta=1,0003`. Qual é o valor do comprimento de onda?

:solucao:`Solução:`
Das Equações :eq:`eq:velocidadeluzvacuo` e :eq:`eq:velocidadedaluzatmosfera`:

.. math::
   \lambda&=\frac{V}{f}=\frac{c}{\eta\cdot f} \\
   \lambda&=\frac{299\,792\,458}{1,0003\cdot149,84\cdot10^{3}}\\
   \lambda&=2\,000,2\,\text{m}

----

Princípio de funcionamento do MED
---------------------------------

O medidor eletrônico de distância (MED)
é um equipamento que está presente nas estações totais. O MED emite
a REM na direção de um refletor, sendo refletida de volta ao equipamento,
onde o sinal é processado e, a distância, do MED ao refletor (prisma),
é determinada.

Na :numref:`fig_MEDesquema.png` é apresentado um esquema de uma estação
total, que tem um MED, estacionada e nivelada em A e, o prisma, em
B. A distância entre o centro do MED ao prisma será denominado por
:math:`d`. O MED emite um feixe de REM, modulada em determinada frequência,
logo com um determinado :math:`\lambda`, na direção do prisma, que reflete
o sinal de volta para o MED. O MED faz a contagem do número de comprimentos
de onda inteiros (:math:`n`), obtidos entre a partida da REM e a chegada
ao MED. O valor de :math:`n` é multiplicado por :math:`\lambda` para se ter
a distância em metros de ida e volta. Soma-se a este valor a fração
do comprimento de onda (:math:`\Delta\lambda`) que faltou para completar
um :math:`\lambda` inteiro. Como o sinal percorreu a distância de ida e
volta estação prisma, divide-se resultado por dois, ou seja:

.. math::
   d=\frac{n\lambda+\Delta\lambda}{2},
   :label: eq:distanciaMED

Para a determinação de :math:`\Delta\lambda`, o equipamento é capaz de
medir a diferença de fase (:math:`\varphi`), que é a diferença na unidade
de ângulo do ângulo da REM de saída e o de chegada. Sabendo-se que
um ciclo completo da onda em graus e radianos, :math:`360^{\circ}` e :math:`2\pi`, respectivamente,
equivale a um :math:`\lambda`, então:

.. math::
   \Delta\lambda=\frac{\varphi}{360^{\circ}}\lambda,
   :label: eq:diferencadefase

.. math::
   \Delta\lambda=\frac{\varphi}{2\pi}\lambda,
   :label: eq:diferencadefaseAnguloRad

:math:`\varphi` a mudança de fase da onda entre a onda
emitida e a onda recebida (:math:`^{\circ}`), em graus e radianos
(Equação :eq:`eq:diferencadefaseAnguloRad`). Na realizade, o MED, para
medir a distância, trabalha com vária frequências. Assim pode-se obter
o valor de :math:`n`, pois este númeto inicialmete é desconhecido, e a
distância com precisão milimétrica.

.. _fig_MEDesquema.png:

.. figure:: /images/capitulo6/fig_MEDesquema.png
   :scale: 35 %
   :alt: fig_MEDesquema.png
   :align: center

   Determinação da :math:`\mathrm{DH}` e da :math:`\mathrm{DN}` por meio do MED.


----

:exem:`Exemplo 7` Trabalhando com um medidor eletrônico de distância
(MED) de frequência :math:`1,4984\,\text{MHz}` estacionado em um ponto e fazendo uma
mira no prisma sobre outro ponto, foram obtidos os seguintes dados:
um total de número de comprimento de onda inteiro de 20 :math:`(n)`; e
um ângulo de fase de :math:`15^{\circ}` :math:`(\varphi)`. Considerando :math:`\eta=1,0003`,
calcule: a) o comprimento de onda :math:`(\lambda)` para a frequência modulada
emitida; b) a distância entre o MED e o prisma.

:solucao:`Solução:`
Das Equações :eq:`eq:velocidadeluzvacuo` e :eq:`eq:velocidadedaluzatmosfera`:

.. math::
   \lambda&=\frac{V}{f}\\
   \lambda&=\frac{c}{\eta\cdot f}\\
   \lambda&=\frac{299\,792\,458}{1,0003\cdot1,4984\cdot10^{6}}\\
   \lambda&=200,02\,\text{m}.

De acordo com Equação :eq:`eq:diferencadefaseAnguloRad`:

.. math::
   \Delta\lambda&=\frac{\varphi}{360^{\circ}}\lambda\\
   \Delta\lambda&=\frac{15^{\circ}}{360^{\circ}}200,02\\
   \Delta\lambda&=8,334\mathrm{\,m}.

De acordo com Equação :eq:`eq:distanciaMED`:

.. math::
   d&=\frac{n\lambda+\Delta\lambda}{2}\\
   d&= \frac{20\cdot200,02+8,334}{2}\\
   d&=2\,004,367\mathrm{\,m.}

----

Como podemos observar na :numref:`fig_MEDreducao.png`, a distância que o MED calcula
é a :math:`d`, distância do MED ao prisma, enquanto estamos normalmente interessados
na DH ou na DN. O que se deve fazer é, com o auxílio do ângulo zenital
(ou de inclinação, :math:`\alpha`), reduzir :math:`d` para a DH, e com a medida
de :math:`ai` e da altura do prisma, :math:`ap`, calcular a DN. De acordo com
as equações que seguem para os pontos A e B temos, para DH:

.. math::
   \mathrm{DH} =d\sin z,
   :label: eq:MEDDHZ

.. math::
   \mathrm{DH} =d\cos\alpha.
   :label: eq:MEDDHZAlpha


.. _fig_MEDreducao.png:

.. figure:: /images/capitulo6/fig_MEDreducao.png
   :scale: 45 %
   :alt: fig_MEDreducao.png
   :align: center

   Esquema da redução da distância inclinada obtida pelo MED para DH e DN.

Para a medida de DN, considere :math:`V` a distância vertical entre o centro
do equipamento (C) ao centro do prisma (D). Então, de acordo com o
ângulo medido, o zenital :math:`(z)` ou o de inclinação :math:`(\alpha)`, temos:

.. math::
   V  =d\cos z,
   :label: eq:MEDVZ

.. math::
   V  =d\sin\alpha.
   :label: eq:MEDVZAlpha

A DN entre o ponto A e B será:

.. math::
   \mathrm{DN}=V+ai-ap,
   :label: eq:MEDDNZ

em que: :math:`ai` é a altura do equipamento (m), medida vertical
do centro da estação total (MED) ao ponto de interesse; :math:`z` é o ângulo
zenital, :math:`\alpha` é o ângulo de inclinação; :math:`ap` é a altura do primas
(m). Normalmente, no bastão em que o prisma é sustentado, há uma régua
graduada, que é utilizada para as medidas de :math:`ap`.

Nas estações totais, a DH pode ser obtido automaticamente. Já para
a DN, deve-se inserir, via teclado, os valores de :math:`ai` e da :math:`ap`,
para que a estação total possa calculá-la. Quando é obtido um valor
de DN positivo, o ponto B, da posição do prisma, é mais elevado que
o ponto A, posição da estação. Caso contrário, DN negativa, o ponto
A é o mais elevado. Logicamente, se a altitude de A for igual a de
B, eles estão em uma mesma elevação, desta forma, a DN entre A e B
é zero. Considerações a respeito da influência da curvatura da terra
e do efeito da refração serão tratados no :any:`RST Capitulo9`,
Secção \ref{sec:Erro-de-esfericidade}.

:exem:`Exemplo 8`  De uma estação total estacionada no ponto 30, fez
uma visada no ponto 31, onde se encontrava o prisma. Sendo a :math:`ai=1,60\,\mathrm{m}`,
:math:`ap=2,000\,\mathrm{m}`. As leituras obtidas no visor da estação foram:
:math:`z=95^{\circ}41'10''`; :math:`d=329,715\,\mathrm{m}`. Calcular
a DH e a DN entre os pontos 30 e 31.

:solucao:`Solução:`
Da Equação :eq:`eq:MEDDHZ`:

.. math::
   \mathrm{DH}&=d\sin z\\
   \mathrm{DH}&=329,715\sin95^{\circ}41'10''\\
   \mathrm{DH}&=328,093\,\text{m}.

Da Equação :eq:`eq:MEDDNZ` e :eq:`eq:MEDVZ`:

.. math::
   \mathrm{DN}&=d\cos z-ai+ap\\
   \mathrm{DN}&=329,715\cos95^{\circ}41'10''+1,60-2,000\\
   \mathrm{DN}&=-33,068\mathrm{\,m}.

----

Fontes de erro
--------------

Quando trabalhando de forma adequada com um MED, a precisão deste
equipamento normalmente é muito alta, por exemplo, precisão de :math:`\pm(5\mathrm{\,mm}+2\mathrm{\,ppm)}`,
isto é, para uma medida, de :math:`5.000\,\text{m}` de distância, o erro esperado
é de :math:`\pm15\,\mathrm{mm}` :math:`\left(5\,\mathrm{mm}+\left(\frac{2}{1\,000\,000}\right)5\,000\,\textrm{m}\cdot1\,000\,\textrm{mm m}^{-1}\right)`.
Todavia algumas precauções no uso deste equipamento deve ser observadas,
pois pode implicar em erros nas medidas. Pode-se citar como erros
a serem evitados:

- **erro devido à má centralização do tripé do equipamento e do prisma**:
  se o equipamento e o prisma não estiverem bem centralizados
  e nivelados aos pontos a serem medido, haverá um erro na distância
  com MED, pois o centro do equipamento e do nível estarão deslocados
  em relação aos pontos;
- **erro devido à refração atmosférica**: como visto acima, a velocidade
  da luz, :math:`c`, é reduzida para :math:`V` quando se trabalha sob condições
  atmosféricas. Para a determinação do índice de refração, :math:`\eta`,
  deve-se conhecer: a frequência de trabalho, a temperatura, a pressão
  atmosférica e a umidade relativa. Nas estações totais, este erro é
  possível de ser corrigido, desde que as informações sejam conhecidas
  e inseridas no MED (estação total) :cite:`WOLF`;
- **centro do refletor**: o centro do refletor não coincide com
  a linha vertical ao ponto de interesse;
- **desvio da frequência**: o equipamento pode mudar a frequência
  original de trabalho ao longo de seu uso ou tempo de trabalho. Desta
  forma, periodicamente, o equipamento deve ser checado. Este procedimento
  é realizada para própria companhia do equipamento;


Exercícios
==========

:exem:`1)` A distância horizontal real do alinhamento AB é
de :math:`82,58\,\text{m}`; Este alinhamento, ao ser medido com uma trena de comprimento
nominal de :math:`20,00\,\text{m}`, resultou em :math:`82,42\,\text{m}`. Determinar o comprimento real
da trena e o seu erro. 

:exem:`Resp.:`  comprimento real da trena = :math:`20,039\,\text{m}`; erro = :math:`0,039\,\text{m}`.

-----

:exem:`2)` Um alinhamento foi medido com uma trena e obteve-se
comprimento nominal de :math:`27,95\,\text{m}`. Esta trena foi aferida para trabalho
à temperatura de :math:`20^{\circ}\text{C}` e na tensão de :math:`10\,\text{kg}`. Sabe-se que
esta trena tem peso de :math:`0,03967\,\text{kg/m}`, coeficiente de dilatação da trena
de :math:`0,000012^{\circ}\text{C}^{-1}`, módulo de elasticidade de
:math:`20.000\,\text{kg mm}^{-2}` e área de seção transversal de :math:`4,8\,\text{mm}^{2}`. Realizando
um trabalho com esta trena à temperatura de :math:`35^{\circ}\text{C}`, na tensão
de :math:`5\,\text{kg}`. Calcular para este alinhamento:

a) o erro devido a temperatura;
b) o erro devido a tensão;
c) o erro devido a catenária;
d) qual seria o comprimento real da trena nestas condições de trabalho?

:exem:`Resp.:`  a) :math:`0,0050\,\text{m}`; b) :math:`-0,0015\,\text{m}`;
c) :math:`-0,0573\,\text{m}`; d) :math:`27,89\,\text{m}`.

----

:exem:`3)` Utilizando um teodolito estacionado no ponto T,
fez-se uma visada ao ponto U, anotando as seguintes medidas: :math:`z=80^{\circ}30'0''`;
:math:`ri=0,500\,\mathrm{m}` e :math:`rm=1,765\,\mathrm{m}`. Qual é a :math:`\mathrm{DH_{TU}}`? 

:exem:`Resp.:`  :math:`\mathrm{DH}_\text{TU}=246,108\,\text{m}`.

----

:exem:`4)` Utilizando um teodolito estacionado no ponto 5 de
altitude de :math:`806,501` m com :math:`ai=1,72\,\mathrm{m}`, fez-se uma visada
ao ponto 6, anotando as seguintes medidas: :math:`z=92^{\circ}21'30''`;
:math:`ri=0,500\,\text{m}`; :math:`rm=1,543\,\text{m}`; :math:`rs=2,586\,\text{m}`. Qual é :math:`\mathrm{DH_{56}}`
e a altitude do ponto 6? 

:exem:`Resp.:`  :math:`\mathrm{DH}_{56}=208,247\,\text{m}`; altitude
de 6 é de :math:`798,102\,\text{m}`.

----

:exem:`5)` Considere um feixe de radiação eletromagnética,
emitida por uma estação total, com frequência de :math:`24,5` MHz. O índice
de refração atmosférico, :math:`\eta`, é de :math:`1,0003`. Responda:

a) qual o comprimento de onda :math:`(\lambda)`?
b) qual o comprimento de onda fase :math:`(\Delta\lambda)`
   para uma mudança de fase de :math:`193^{\circ}\,(\varphi)`?

:exem:`Resp.:`  :math:`\lambda=12,236\,\text{m}` e :math:`\Delta\lambda=6,558\,\text{m}`.

----

:exem:`6)` Trabalhando com um medidor eletrônico de distância
(MED) de frequência :math:`14,9896` MHz estacionado em um ponto e fazendo
uma mira no prisma sobre outro ponto, foram obtidos os seguintes dados:
um total de número de comprimento de onda inteiro de 34 (:math:`n`); e
um ângulo de fase de :math:`115,7^{\circ}` (:math:`\varphi`). Considerando :math:`\eta=1,0`,
Calcule: 

a) o comprimento de onda (:math:`\lambda`) para a frequência do equipamento;
b) a distância entre os pontos.

:exem:`Resp.:`  a) :math:`20,000\,\text{m}`; b) :math:`343,208\,\text{m}`.

----

:exem:`7)` De uma estação total estacionada no ponto Q, fez
uma visada no ponto R, onde se encontrava o prisma. Sendo a :math:`ai=1,60\,\mathrm{m}`, :math:`ap=3,000\,\mathrm{m}`.
As leituras obtidas no visor da estação foram: :math:`z=81^{\circ}4'30''`;
:math:`d=129,715\,\mathrm{m}`. Calcular a DH e a DN entre os pontos
Q e R.

:exem:`Resp.:`  :math:`\mathrm{DH_{QR}}=128,144\,\text{m}` e :math:`\mathrm{DN_{QR}}=18,724\,\text{m}`.

----

.. rubric:: Footnotes

.. [1] Segundo a :cite:t:`NBR13133` a dimensão máxima de um levantamento topográfico está limitado a 80 km.
.. [2] Abreviação de polegada é *in* onde, :math:`1\,\mathrm{in}=0,0254\,\mathrm{m}=2,54\,\mathrm{cm}`.