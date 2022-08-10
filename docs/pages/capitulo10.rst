.. raw:: html

    <style> .exem {color:blue; font-weight: bold} </style>

.. role:: exem

.. raw:: html

    <style> .solucao {font-weight: bold} </style>

.. role:: solucao

.. raw:: html

    <style> .blue {color:blue} </style>

.. role:: blue

.. _RST Capitulo 10:

Capitulo 10: Curva de nível e cálculo de volume
***********************************************

Uma das maneiras de avaliar o relevo de uma região é por meio de
curvas de nível. Neste capítulo será apresentado sua importância,
como se fazer a sua leitura, e também, uma metodologia para desenhá-la.
Outro tema que será abordado neste capítulo é o de cálculo de volume de
material a ser escavado e/ou aterrado para obras de sistematização.

Curva de nível
==============

Entende-se por **curva de nível** a linha que liga pontos de igual cota ou altitude. 
Em uma curva de nível perfeita, todos os seus pontos teriam mesma altitude/cota no 
terreno, desta forma, se uma pessoa estivesse realizando uma caminhada ao longo desta, 
no terreno, ela não estaria subindo ou descendo. As curvas de nível são importantes 
para se conhecer o terreno quanto ao seu relevo, podendo-se aferir por meio delas: 
o grau de inclinação nas diferentes direções de pontos no mapa; se tem forma plana 
ou ondulada; os locais em que podem ocorrer escoamento e/ou alagamento. Logo, as 
curvas de nível, fornecem informações essenciais para planejamento de projetos: de 
estradas; de terraplanagem; de zoneamento agrícola; hidráulicos/hidrológicos, etc.

A título de ilustração, na :numref:`curva_nivel1` é apresentado um
exemplo de relevo, juntamente com linhas de interseção do terreno com várias 
superfícies de nível interceptando o mesmo. A separação entre as superfícies,
na vertical, é de :math:`40\,\text{m}`. Estas linhas de interseção, quando projetadas no plano de
projeção, cartográfico ou topográfico, resultam nas curvas de níveis, onde  podem ser 
observadas na :numref:`curva_nivel2`.


Para facilitar a leitura das curvas de nível, normalmente a cada sequência de cinco curvas,
uma é cotada. As linhas cotadas são denominadas de **curvas mestras**, sendo
apresentadas com linhas mais grossas. Na :numref:`curva_nivel2` as
curvas mestras são as de :math:`0\,\text{m}`, :math:`200\,\text{m}` e
:math:`400\,\text{m}`.
Observe que, apenas com a leitura nas curvas mestras, é possível calcular a
distância vertical entre quaisquer par de linhas subsequentes e,
logicamente, atribuir a sua cota. Para se calcular a distância vertical
entre duas curvas na sequência, toma-se, por exemplo, as curvas mestras
:math:`400\,\text{m}` e :math:`200\,\text{m}`, então:

.. math::
   \frac{400\,\mathrm{m}-200\,\mathrm{m}}{5}=40\,\mathrm{m},
   :label: eq:equi_vertical


isto é, as curvas de nível terão cotas de :math:`40\,\text{m}` em
:math:`40\,\text{m}`. Entende-se por **equidistância vertical**
de curvas de nível, a distância vertical entre uma curva e a sua sequente,
sendo este valor constante no mapa. Logo, neste nosso exemplo, a
equidistância vertical do mapa apresentado na :numref:`curva_nivel1` é de
:math:`40\,\text{m}`.

.. _curva_nivel1:

.. figure:: /images/capitulo10/topo-plot_3d_script_name_curvas_de_nivel.py.png
   :scale: 20 %
   :alt: cap_altimetria_definicoes.png
   :align: center

   Representação do relevo em 3D, de uma área do município de Florianopopis-SC,
   juntamente com as curvas de nível
   com uma equidistância vertical de :math:`40\,\text{m}`.

.. _curva_nivel2:

.. figure:: /images/capitulo10/topo-plot_2d_script_name_curvas_de_nivel.py.png
   :scale: 15 %
   :alt: cap_altimetria_definicoes.png
   :align: center

   Curvas de nível no plano, referente à :numref:`curva_nivel1`.
   Equidistância vertical de :math:`40\,\text{m}`.

A equidistância vertical que será utilizada no mapeamento vai depender do
relevo e da escala do mapa. Considere duas regiões distintas, uma de
montanha e outra de planície, ambas com uma mesma medida de área e mapeadas em
mesma escala. Nestas condições, espera-se a utilização de um valor de equidistância
vertical, maior no terreno de montanha do que no plano. Pois, se no mapeamento do
terreno montanhoso a equidistância vertical for pequena, pode-se ter um
sobrecarregamento de curvas de nível, o mesmo não acontecendo em região mais plana.
Tais observações podem ser observadas na Figura :numref:`curva_nivelSP`, que
representam uma região plana no Oeste do estado de São Paulo e,
outra de montanha, no Espírito Santo, Figura :numref:`curva_nivelES`.
As duas regiões tem aproximadamente a mesma área
:math:`(\approx 105\,\text{km}^2)` e são apresentadas na mesma escala.
Para permitir uma leitura adequada
das curvas de nível, enquanto na região de SP se permitiu uma equidistância
vertical de :math:`10\,\text{m}` (Figura :numref:`curva_nivelSP` b), a região de
montanha do ES, a equidistância vertical ficou em :math:`80\,\text{m}`
(Figura :numref:`curva_nivelES` b).

.. _curva_nivelSP:

.. figure:: /images/capitulo10/topo_curvas_de_nivel_script_name_curvas_de_nivel.py.png
   :scale: 15 %
   :alt: topo_curvas_de_nivel_script_name_curvas_de_nivel.py.png
   :align: center

   Área na região Oste de São Paulo, ponto cinza (a). Curvas de nível
   com equidistância vertical de :math:`10\,\text{m}` (b) e representação do
   relevo (c), com as curvas de nível.

.. _curva_nivelES:

.. figure:: /images/capitulo10/topo_curvas_de_nivel_script_name_ES_curvas_de_nivel.py.png
   :scale: 15 %
   :alt: topo_curvas_de_nivel_script_name_ES_curvas_de_nivel.png
   :align: center

   Área na região Sul de ES, ponto na cor laranja (a). Curvas de nível
   com equidistância vertical de :math:`80\,\text{m}` (b) e representação do
   relevo (c), com as curvas de nível.

A seguir, é apresentada a forma de se realizar a leitura/interpretação das curvas
de nível, assim como suas características :cite:`cole2009surveyor`:

-  as curvas de nível são sempre fechadas dentro ou fora da borda do mapa.
   Desta forma, uma curva de nível nunca pode acabar abruptamente num mapa;
-  em condições normais, as curvas de nível nunca se tocam ou se cruzam. Exceções
   são saliências em penhasco ou cachoeiras;
-  sequências de curvas de nível fechadas na planta, tanto podem ser a representação
   de um morro como uma depressão. Será um morro se, na leitura das cotas das curvas de nível, seus valores aumentam à medida que as curvas se tornam menores. Por outro lado, se as cotas das curvas de nível diminuem à medida que as curvas se tornam menores, esta área representará uma depressão.
-  curvas de nível cortando rios tem forma de 'V', indicando rio acima;
-  antes de junção de cursos de água, as curvas de nível tem forma de 'M';
-  curvas de nível cortando um cume tem forma de 'U';
-  curvas de nível são espaçadas uniformidade em terrenos com uniforme declividade;
-  curvas de nível espaçadas de forma irregular, representa terreno acidentado;
-  a distância horizontal entre curvas de nível indicam o grau de declividade.
   Quanto mais próximas, maior a declividade, mais íngreme é o terreno.
   Por outro lado, quando espaçadas, menor declividade, terrenos planos;
-  curvas de nível são perpendiculares a direção de máxima declividade,
   podendo esta informação ser utilizada para determinação do escoamento da água no terreno.


Com o objetivo de se caracterizar melhor o relevo, além das curvas de nível,
pontos de destaque são cotados, podendo ser, por exemplo, picos, depressões
locais e pontos onde as curvas de nível são muito espaçadas (terrenos planos).
Para apresentar a posição destes pontos cotados, usa-se, normalmente, o
símbolo :math:`\times`, acompanhado do valor da cota ou da altitude.

.. _curva_nivel:

.. figure:: /images/capitulo10/curva_nivel1.png
   :scale: 25 %
   :alt: cap_altimetria_definicoes.png
   :align: center

   Considerações do relevo a partir da leitura das curvas de nível
   com equidistância vertical de :math:`10\,\text{m}`.
   Linhas tracejadas na cor azul, são cursos de água, e as marcas :math:`\times`
   são pontos cotados.

Determinação das curvas de nível
--------------------------------

Existem vários métodos para se determinar as curvas de nível. Para todos os métodos,
há necessidade de se conhecer, na área a ser levantada, as coordenadas de pontos,
juntamente com os seus respectivos valores da altitude ou cota. As coordenadas e
cotas dos pontos, em levantamentos convencionais, são obtidas com o auxílio da
estação total, pelo método da irradiação. Em levantamentos que requerem maior
precisão na determinação das cotas, é preferível o nivelamento do tipo geométrico,
ou seja, emprega-se o nível como equipamento. Quanto à distribuição espacial dos
pontos cotados, estes podem estar uniformementes distribuídos ou não. Quando os
pontos são uniformemente distribuídos, denominamos de **grade
regular**, sendo utilizada em terrenos de topografia mais uniforme. Já uma grade
irregular, é aquela em que os pontos cotados não são uniformemente distribuídos no
terreno, podendo ser utilizada para todos os tipos de terreno.

Nesta seção será apresentada um método de determinação de curvas de nível para
quando os pontos estão distribuídos em grade regular. Para a geração das curvas
de nível de grade irregular, pode-se consultar
:cite:`comastri`, :cite:`WOLF` e :cite:`cole2009surveyor`.

Saliente-se também que no dia a dia de um técnico em topografia, mapas com
curvas de nível são geradas rapidamente por meio de programas de computador,
podendo-se destacar os programas `QGIS <https://www.qgis.org/pt_BR/site/>`_,
que é gratuito e o Autocad. Resumidamente, para se obter as curvas em computador,
deve-se importar ou inserir os dados de posição e de altitude dos pontos
:math:`(x,\,y,\,z)` no programa utilizado, sendo que as posições podem estar em
grade regular ou irregular; e, para finalizar a operação, defini-se alguns parâmetros,
como a equidistância vertical desejada. Para descrição detalhada dos procedimentos
necessários, consultar os manuais dos respectivos programas e, para estudar a teoria
por trás da geração, pode-se consultar :cite:`WOLF`.

.. admonition:: Exemplo de geração de curvas de nível com dados de altitude do *Google Earth* e do **QGIS**.

    .. raw:: html

        <div style="position: center; padding-bottom=75%; height:0; overflow: hidden; max-width: 100%; height:auto">
           <iframe width="608" height="360" src="https://www.youtube.com/embed/xekwB3d6e6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

Determinação de curva de nível em grade regular
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Nesta seção veremos a metodologia para determinação de curvas de nível quando o
terreno é nivelado por meio de uma grade regular. O nivelamento por grade regular é
utilizado em terreno  de declividade uniforme e em área pequenas.

No terreno, é realizada a quadriculação (área dividida em quadrados),
com estacas materializando os vértices, formando uma grade. As :math:`\text{DH}` s
entre as estacas são, normalmente, de :math:`10\,\text{m}` ou de :math:`20\,\text{m}`,
a depender do relevo a ser levantado. Os pontos são cotados pelo método do nivelamento
geométrico ou pelo nivelamento trigonométrico com teodolitos ou estações totais. As
linhas e colunas da grade são nomeadas para se localizar as estacas no terreno.

Para exemplificar a metodologia da determinação das curvas de nível, vamos utilizar a
:numref:`curva_nivel3`. Na :numref:`curva_nivel3` a é apresentada a grade,
com as respectivas cotas das estacas, em metros. As linhas foram nominadas pelas
letras :math:`\text{A}`, :math:`\text{B}` e :math:`\text{C}`, enquanto as colunas, pelos números
:math:`1`, :math:`2` e :math:`3`. Desta forma, pode-se verificar facilmente as
cotas das estacas,  por exemplo, a estaca :math:`\text{B2}` tem cota de
:math:`102,5\,\text{m}`.  Para esta grade, vamos considerar que a
:math:`\text{DH}` entre as estaca é de :math:`20\,\text{m}`.

A grade tem a menor e a maior cota nas estacas :math:`\text{C3}` e :math:`\text{A1}`,
:math:`100,0\,\text{m}` e :math:`104,5\,\text{m}`, respectivamente, ou seja, há uma
:math:`\text{DN}` total de :math:`4,5\,\text{m}` no terreno. Pode-se considerar razoável, que
uma equidistância vertical de :math:`1\,\text{m}` seja adequada para representar o
relevo deste terreno. Considerando esta equidistância vertical, teremos que desenhar
as curvas de nível :math:`101\,\text{m}`, :math:`102\,\text{m}`, :math:`103\,\text{m}`
e :math:`104\,\text{m}`.

Para cada curva de nível deve ser verificado em quais pares de estacas ela passa. Por
exemplo, considere a curva de nível :math:`101\,\text{m}`, em algum ponto entre a
estaca :math:`\text{C1}` e :math:`\text{C2}` ela ira passar, uma vez que as suas respectivas cotas são de
:math:`101,1\,\text{m}` e :math:`100,8\,\text{m}`. Seja o perfil do terreno uniforme
entre estas (sem grandes variações), pode-se, por interpolação, determinar a
:math:`\text{DH}` que a curva de nível :math:`101\,\text{m}` estará em relação a
estaca :math:`\text{C1}` ou :math:`\text{C2}`, mas como? Entre estas estacas, há uma :math:`\text{DN}` de
:math:`0,3\,\text{m}` e uma math:`\text{DH}` de :math:`20\,\text{m}`.
Da estaca :math:`\text{C1}`, cota :math:`101,1\,\text{m}`, ao ponto de
cota :math:`101\,\text{m}`, onde passa a curva de nível :math:`101\,\text{m}`,
há uma DN de :math:`0,1`. Por regra de três, a curva de nível :math:`101\,\text{m}`
estará a :math:`\approx6,7\,\text{m}` da estaca :math:`\text{C1}`
:math:`\left(0,1\frac{20}{0,3}\right)`. Desta forma, entre :math:`\text{C1}` e
:math:`\text{C2}`, no ponto a :math:`6,7\,\text{m}` da estaca :math:`\text{C1}`
é feito um pequeno risco. Tal procedimento é repetido para todos os pares
de estacas onde a curva de nível :math:`101` os cruzam. Para curva de nível
:math:`101`, os pares a serem verificados são :math:`\text{C2-B2}`,
:math:`\text{B2-B3}` e :math:`\text{B3-A3}`. Para estes pares encontra-se
o ponto de cota :math:`101\,\text{m}` e marca-se a posição, sempre com um risco,
ou seja a posição onde a curva de nível :math:`101` cruza as estacas.

As marcas onde as curvas de nível cruzam os quadrados da quadrícula são
apresentadas na Figura :numref:`curva_nivel3` b. Após tal procedimento, é realizada a
conexão das marcas de cada uma das curvas de nível por linhas retas ou suavizadas. No
nosso exemplo, as marcas foram conectadas por linhas retas
(Figura :numref:`curva_nivel3` b). Caso contenha linhas mestras, utilizar linha mais
grossa para destacá-la. Para finalizar, as curvas de nível são cotadas com as
respectivas cotas (Figura :numref:`curva_nivel3` d).

.. _curva_nivel3:

.. figure:: /images/capitulo10/curva_nivel3.png
   :scale: 45 %
   :alt: curva_nivel3.png
   :align: center

   Método da determinação das curvas de nível por meio de dados em grade regular.

Obtenção das curvas de nível em campo
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

A obtenção de curvas de nível em campo pode ser necessária na locação de linhas de
plantio de culturas agrícolas e florestais, na construção de terraços, visando a
prevenção e contenção da erosão do solo, etc. Para a locação das mesmas, podem ser
utilizados como equipamentos os níveis, os teodolitos  ou as estações totais, sempre
realizando visadas horizontais.

Vamos considerar que o equipamento que será utilizado é uma estação total com o prisma.
O técnico na estação fará visadas horizontais, ou seja, o ângulo zenital :math:`(z)`
deverá sempre marcar :math:`90^\circ`. Suponha que a estação esteja em um ponto de
cota :math:`100\,\text{m}`, com a altura do instrumento :math:`(ai)` de :math:`1,7\,\text{m}`
(medida com uma trena) então, a altura do instrumento :math:`(AI)` seria de
:math:`101,7\,\text{m}`. Para se obter pontos onde passa a curva de nível de
:math:`100\,\text{m}`, por exemplo, deve-se fixar a altura do prisma em
:math:`1,7\,\text{m}`. Desta forma, toda vez que, da estação, o centro do prisma
for corretamente observado, a cota naquela posição do prisma será de
:math:`100\,\text{m}`. O técnico com o prisma é orientado pelo o da estação total,
que o indica, se o prisma deve ser posto em posição mais ou menos elevada, de tal
forma que o centro do prisma esteja na visada correta. Quando houver concordância,
o ponto é materializado por uma estaca, sabendo-se que nela, passa a curva de nível
de :math:`100\,\text{m}`. O técnico com o prisma desloca-se para uma nova posição, e
novamente procura-se fazer a visada no centro do prisma.

Se no levantamento há também o objetivo de desenho em planta, para fins de determinação
das coordenadas, deve-se anotar as :math:`\text{DH's}` e o :math:`\text{Hz's}`,
para posterior cálculo das coordenadas.

Outros métodos para locação de curvas de nível em campo podem ser encontradas
em :cite:`godoy`.

Sistematização e cálculo de volume
==================================

Um dos serviços importantes de técnicos em topografia é o de sistematização
de terrenos, ou seja, modificar a sua forma, tornando-o plano, para fins de execução
de projetos de engenharia na área de interesse. Podem-se citar como projetos que
demandam sistematização de um determinado terreno: os residenciais e prediais; os de
irrigação por gravidade; construção de quadras e campos de futebol, etc.

Na execução da sistematização de um terreno, geralmente acorrerá as seguintes etapas:
*i*) escavação de rochas, terras e cascalhos, ou mistura destes, sendo esta etapa
denominada de (**corte**); *ii*) o transporte de material e; *iii*) a sua deposição,
normalmente com compactação do material, denominada de **aterro**. Certos projetos
podem ter mais ênfase no corte do terreno, como em projetos de estradas. Outros, terão
mais trabalho de aterro, como na construção de barragens. Na sistematização, se busca
quantificar o volume de material a ser trabalhado, assim como analisar a forma de
quantificar este material em escritório. Se busca também diminuir custos da operação.
Por exemplo, sabendo-se que o custo de transporte de material é elevado, buscar-se-á
minimizar o volume desta operação.

O volume de material a ser movimentado, seja no corte ou no aterro, é mensurado na
unidade de :math:`\text{m}^3`. Um fato importante na hora de quantificar o volume de
material, é que o mesmo vai variar seu volume com a mudança da sua condição inicial
para uma outra condição, por exemplo: *i*) um volume na condição natural no terreno,
após ser escavado, sofrerá expansão, pois o mesmo será desagregado; *ii*) o volume
transportado de material que será utilizado em aterro, vai ser compactado, diminuindo o
seu volume.

Suponha o volume de :math:`1\,\text{m}^3` de terra ainda no terreno natural, após a
sua escavação, será desagregado, e terá o seu volume aumentado em aproximadamente
:math:`20\%`, o que resultará em um volume :math:`\approx1,2\,\text{m}^3` para ser
transportado. Por outro lado, um volume de :math:`1\,\text{m}^3`, após submetido à
compactação, terá o volume reduzido em aproximadamente :math:`15\%`, logo, o
:math:`1\,\text{m}^3` de material, após processo de compactação, resultará em um
volume de :math:`\approx0,85\,\text{m}`:math:`^3` :cite:`cole2009surveyor`.

.. admonition:: :exem:`Exemplo 1` Considere a escavação para fins de construção de uma piscina, cuja
   dimensão é de :math:`50\,\text{m}` de comprimento, :math:`20\,\text{m}` de largura e
   :math:`2\,\text{m}` de profundidade. Qual o número de viagens que um caminhão vai
   realizar para transporte deste material? Sabe-se que, o caminhão a ser utilizado tem
   capacidade de transporte de :math:`10\,\text{m}`:math:`^3` por viagem e, que a terra a
   ser escavada vai expandir em :math:`20\%`.

   :solucao:`Solução:`
   Volume de terra a ser retirado do terreno será:

   .. math::
      V=50\times20\times2=2\,000\,\mathrm{m^3}

   Considerando o fator de expansão de :math:`20\%` e o volume de :math:`10\,\text{m}`:math:`^3` por viagem, temos um total de viagens:

   .. math::
      \frac{2\,000\times1,2}{10}=240.



Os métodos para se medir o volume de material dependem do tipo de projeto executado e dos dados
disponíveis, sendo os mais usuais, o por secções e o por área unitária.

Volume por meio da área média de secções
----------------------------------------

O volume de um sólido que tem duas secções paralelas onde se conhecem suas respectivas áreas e a distância que as
separam, conforme :numref:`volume_area_media_metodo`, é calculado como a média da área das
secções multiplicada pela distância entre elas:

.. _volume_area_media_metodo:

.. figure:: /images/capitulo10/volume_area_media_metodo.png
   :scale: 45 %
   :alt: volume_area_media_metodo.png
   :align: center

   Volume pela método da área média das secções


.. math::
   V=\frac{A_1+A_2}{2}\times L
   :label: eq:volume_area_media


em que :math:`A_1` e :math:`A_2`, são as áreas das secções paralelas analisadas e
:math:`L`, a distância horizontal que separa as secções. Considerando que as medidas das áreas das seção são
em :math:`\mathrm{m}^2` e a distância horizontal em metros, teremos o volume na unidade de :math:`\mathrm{m}^3`.

.. admonition:: :exem:`Exemplo 2` Considere  as áreas entre as secções da estaca :math:`10+0\,\text{m}`
   e :math:`11+0\,\text{m}` de, respectivamente :math:`61\,\text{m}`:math:`^2` e :math:`37\,\text{m}`:math:`^2`.
   Qual o volume entre estas duas estacas?

   :solucao:`Solução:`
   Considerando que a distância entre as estacas é de :math:`20\,\text{m}`:

   .. math::
      V&=\frac{61+37}{2}20\\
      V&=980\,\mathrm{m^3}.


.. admonition:: :exem:`Exemplo 3` Considere  as áreas entre as secções da estaca
   :math:`10+0\,\text{m}` e a intermediária :math:`10+10\,\text{m}` de, respectivamente
   :math:`61\,\text{m}`:math:`^2` e :math:`46\,\text{m}`:math:`^2`.
   Qual o volume entre estas duas estacas?

   :solucao:`Solução:`
   Considerando que a distância entre as estacas é de :math:`20\,\text{m}`, a distância entre as
   secções medidas é de :math:`10\,\text{m}`, logo:

   .. math::
      V&=\frac{61+46}{2}10\\
      V&=535\,\mathrm{m^3}.

O método de cálculo do volume pela área média das secções se aplica em áreas longitudinais, como
em trechos de estradas. Para  exemplificar aplicação deste método, considere a
:numref:`exemplo_area_de_secoes`, na qual são apresentados os cálculos de volume do terreno da
:numref:`curva_nivel3`, quando o mesmo é sistematizado para ter cota de :math:`102,5\,\text{m}`
em toda a sua extensão. Primeiramente calcula-se as CVs das estacas, em que valores negativos e
positivos são pontos de corte e aterro, respectivamente. Neste exemplo escolheu fazer os cálculos
das áreas de corte e de aterro utilizando-se como secções as colunas 1, 2 e 3.
Para cada seção e desenhado o perfil do terreno e a sua distância vertical para cota a ser sistematizado.
Por meio desta representação, pode-se verificar as áreas de cortes e aterros onde suas áreas são calculadas
por meio de aproximação destas à figuras geométricas elementares, com triângulo e trapézio. Com os dados das
áreas de corte e aterro tabulados, para cada par de seção é calculado o seu respectivo volume por meio
da Equação :eq:`eq:volume_area_media`.


.. _exemplo_area_de_secoes:

.. figure:: /images/capitulo10/volume_media_seccoes.png
   :scale: 45 %
   :alt: volume_media_seccoes.png
   :align: center

   Procedimentos para medição de volume pela área média das secções. Distância entre as estacas é de
   :math:`20\,\text{m}` e sistematização do terreno para cota de :math:`102,5`.



Volume por meio da área unitária
--------------------------------

O método por área unitária pode ser aplicado para a maioria dos casos de sistematização, exceção em
casos de levantamento longitudinal, como em projetos de estradas, que é preferível o método da área
média das secções. No método da área unitária, para a estimativa do volume de material a ser escavado
ou depositado na área de interesse, primeiramente, a área é estaqueada em quadrados. As estacas têm a
sua cota determinada por nivelamento, seja o trigonométrico, com estação total ou, por meio do
nivelamento geométrico, com o nível. As linhas e colunas são identificadas por letras ou números.
Na :numref:`volume_area_unitaria` a é apresentada uma área a ser sistematizada, constando,
para cada estaca, os valores das cotas. As colunas e linhas da grade são identificadas por letras e
números, sendo, por exemplo, a estaca :math:`\mathrm{A1}` a cota de :math:`302,4\,\text{m}`.

.. _volume_area_unitaria:

.. figure:: /images/capitulo10/curva_nivel4.png
   :scale: 45 %
   :alt: curva_nivel4.png
   :align: center

   Exemplo de terreno nivelado para fins de sistematização pelo método da área unitária. É apresenta a cota de cada estaca, seguido
   do seu peso, entre parênteses, para ser utilizado no calculo do volume

Suponha que o projeto de engenharia definiu que, após a sistematização, o terreno terá cota de
:math:`301,0\,\text{m}` na sua extensão, logo, todas estacas terão também ao final cota de
:math:`301,0\,\text{m}`. Para apresentar o procedimento do método área unitária, vamos considerar
inicialmente, o primeiro quadrado da grade, :math:`\mathrm{A1-A2-B1-B2}` (:numref:`volume_area_unitaria` b),
onde pode-se notar que em todas as suas estacas haverá corte para se ter cota final de
:math:`301,0\,\text{m}`. Uma maneira de verificar se em determinada estaca haverá corte ou aterro e de
quanto será, é por meio da cota vermelha
:math:`(\mathrm{CV}=\mathrm{cota}_{\mathrm{greide}}-\mathrm{cota}_{\mathrm{terreno}})`.
Por exemplo, suponha que estejamos calculando a CV na estaca :math:`A1`. Esta seria de
:math:`-1,4\,\text{m}` :math:`(301,0-302,4)`, o que significa um corte de :math:`1,4\,\text{m}`
nesta estaca. O mesmo pode ser aplicado para as demais estacas deste quadrado. Agora temos um sólido
geométrico de base quadrada em que se pode calcular o seu volume, como apresentado a seguir.

Um **prisma reto** é um sólido geométrico (três dimensões) que tem
como base um polígono e lados  verticais perpendiculares a base. A base e o topo
de um prisma reto tem mesma área e forma (p.ex: triângulo, quadrado, retângulo, etc).
A título de ilustração, na figura ao lado
são apresentados dois prismas retos, um com base triangular e, o outro, com base
quadrangular. O volume de um prisma reto é calculado como:

.. _volume_prisma_metodo:

.. figure:: /images/capitulo10/fig:volume_prisma_metodo.png
   :scale: 45 %
   :alt: fig:volume_prisma_metodo.png
   :align: center

   Volume de um prima


.. math::
   \mathrm{V}=Ah
   :label: eq:volume_prisma_reto


em que: :math:`\mathrm{V}` é o volume em unidades cúbicas; :math:`A` é a
área da base e, :math:`h`, a altura. Como normalmente trabalhamos com unidade
de comprimento em metros, teremos :math:`\mathrm{V}`  em :math:`\mathrm{m}^3`.

Retornemos ao nosso sólido da a :numref:`volume_area_unitaria` b. Podemos considerar
que o mesmo se aproxima a um prisma reto. Só não é porque o terreno é irregular.
Todavia, pode-se considerar que a sua altura, :math:`h`,
será a média das alturas das CV deste quadrado, sendo então:

.. math::
   h&=\left(\frac{-1,4-2,3-1,3-2,4}{4}\right)\\
   h&= -1,85\,\mathrm{m}.


Agora pode-se calcular o volume referente ao quadrado analisado :math:`\mathrm{A1-A2-B1-B2}`
por meio da Equação :eq:`eq:volume_prisma_reto`:

.. math::
   \mathrm{V}&=10\times10\times-1,85\\
   \mathrm{V}&=-185\,\mathrm{m}^3.


O sinal negativo do volume calculado significa que neste quadrado o volume
de :math:`185\,\text{m}`:math:`^3` será escavado.  Por outro lado, caso fosse
positivo, seria o volume a ser aterrado.

Para se calcular o volume de material de toda área, ao invés de calcular
os volumes dos quadrados individuais e depois somar, se usa o seguinte método,
a área de quadrado é dividida por quatro, referente ao
denominador da média calculada de CV para as 4 estacas de cada quadrado. Este
resultado, é multiplicado pela soma do produto da CVs de cada estaca pelo número
de quadrados que a mesma é comum (ver Exemplo abaixo). Matematicamente:

.. math::
   V=\frac{A}{4}\sum\mathrm{CV}_{i,\,j}\times w_{i,\,j}
   :label: eq_somas_unitarios


em que: :math:`V` é o volume (:math:`\mathrm{m}^3)`; :math:`A` é a
área do quadrado (:math:`\mathrm{m}^2)`; :math:`i` e :math:`j` são os índices
das linhas e colunas, respectivamente, :math:`i=1, 2,\dotsc\,,`
índice das linhas e :math:`j=1, 2, \dotsc\,, ` índice de colunas;
:math:`w_{i,\,j}` é o peso, sendo igual ao número de quadrados em comum na
estaca :math:`i,\,j`;

.. admonition:: :exem:`Exemplo 4` Considere sistematizar o terreno da
   :numref:`volume_area_unitaria` a para ter cota final de :math:`301\,\text{m}`
   em toda a sua extensão. Qual será o volume de material a ser cortado ou aterrado?

   :solucao:`Solução:`

   .. _volume_area_unitaria_exemplo:

   .. figure:: /images/capitulo10/volume_area_unitaria_exemplo.png
      :scale: 45 %
      :alt: volume_area_unitaria_exemplo.png
      :align: center

      Cotas vermelhas, entre parenteses, peso da estaca a ser utilizado
      na Equação :eq:`eq_somas_unitarios`, :math:`w_{i,\,j}`

   Para verificar se as estacas que terão corte ou aterro, quando a cota final do terreno
   será de :math:`301\,\text{m}`, basta calcular as CVs das estacas, por exemplo,
   a CV na estaca :math:`A1` é:

   .. math::
      \mathrm{CV}_{\mathrm{A1}}&=301-302,4\\
      \mathrm{CV}_{\mathrm{A1}}&=-1,4\,\mathrm{m}.

   Repetindo-se para as demais estacas, temos os resultados apresentados
   na :numref:`volume_area_unitaria_exemplo`. Como todos os sinais das CVs são negativos,
   conclui-se que no terreno só haverá corte, logo, apenas o volume de corte será calculado.

   Agora temos que determinar o número de quadrados em que cada estaca está presente,
   por exemplo, as estacas :math:`A1`, :math:`A2`, :math:`B2` e :math:`D3`
   pertencem, respetivamente a um, dois, três e quatro quadrados. Esta contagem também
   é apresentada na :numref:`volume_area_unitaria_exemplo`, correspondendo aos
   números que se encontram entre parênteses. Fazendo-se a multiplicação da área de cada
   quadrado pelo somatório do produto das CVs com o número de quadrados para o qual
   pertence, temos:

   .. math::
      \mathrm{V}_{\mathrm{total}} =& \frac{10\times10}{4}(-6,4\times1-6,8\times2-6,0\times2-4,7\times2-2,3\times2-1,4\times1\\
      &-5,9\times2-6,6\times4-6,5\times4-4,6\times4-2,4\times4-1,3\times2-6,3\times1-6,7\times3\\
      &-5,1\times4-3,0\times4-2,0\times4-0,7\times2-6,4\times1-3,5\times2-2,0\times3\\
      &-1,1\times4-0,7\times2-2,9\times1-1,4\times3-1,0\times2-1,2\times1-0,5\times1)\\
      =&\frac{10\times10}{4}(-246,4)\\
      \mathrm{V}_{\mathrm{total}}=&\mathbf{-6\,160\,m^3}

   O sinal do volume calculado representa que o terreno será escavado. Logo,  para
   que o terreno analisado seja sistematizado para a cota de :math:`301\,\text{m}`,
   o volume total a ser escavado será de :math:`6\,160\,\mathrm{m}^3`.

.. _exemplo 5:

.. admonition:: :exem:`Exemplo 5` No problema anterior, verificou-se que haverá a necessidade
   de transporte de uma grande quantidade de material. Sabendo-se que os custos com o
   transporte para a área de aterro é alto, pode-se estudar a possibilidade de se trabalhar
   com uma cota a ser sistematizado o terreno, tal qual, o volume escavado dentro da área seja
   igual ao volume a ser depositado nela mesma.
   Com a finalidade de minimizar os custos de transporte de material do terreno
   apresentado na :numref:`volume_area_unitaria` a, calcular: (a) a cota que o terreno deve
   ter para que volume de corte seja igual ao volume a ser de aterrado na área e, (b) o volume de corte.

   :solucao:`Solução:`

   **Cálculo da altura que resultará no volume de corte igual ao volume de aterro**

   Esta solução é aproximada, pois não serão considerados os fatores
   de expansão do solo ao ser escavado, assim como o fator de compactação do solo ao ser aterrado.
   Considerando que o :math:`1\,\text{m}`:math:`^3` de solo escavado vai ser igual ao :math:`1\,\text{m}`:math:`^3` aterrado, a cota que resultará no volume de material a ser a escavado igual ao volume depositado dentro da mesma área, corresponderá a média ponderada das cotas das estacas. A ponderação a ser utilizada em determinada estaca corresponderá ao número de quadrados que a mesma tem em comum na grade, desta forma:

   .. math::
      \mathrm{cota}_{\mathrm{media}} =&(307,4\times1+307,8\times2+307,0\times2+305,7\times2+303,3\times2+302,4\times1+ \\
      &306,9\times2+307,6\times4+307,5\times4+305,6\times4+303,4\times4+ \\
      &302,3\times2+307,3\times1+307,7\times3+306,1\times4+304,0\times4+ \\
      &303,0\times4+301,7\times2+307,4\times1+304,5\times2+303,0\times3+ \\
      &302,1\times4+301,7\times2+303,9\times1+302,4\times3+ \\
      &302,0\times2+302,2\times1+301,5\times1)/68 \\
      =&\frac{20\,714,4}{68} \\
      \mathrm{cota}_{\mathrm{media}}=&\mathbf{304,624\,m}

   Logo, a cota que resultará em volume de corte igual ao volume a ser aterrado é
   de :math:`304,624\,\text{m}`.

   **Càlculo do volume de corte**

   Para cálculo dos volumes de corte, primeiramente deve-se traçar a curva de nível com a
   valor da cota que resultará no volume de corte igual ao volume de aterro, no nosso caso,
   a de :math:`304,624\,\text{m}`. Ela determinará na planta o que denominamos de **pontos de passagem**.
   Na curva de nível dos pontos de passagem, não haverá nem corte ou aterro, todavia, ela é
   importante pois separa as regiões onde serão realizados os trabalhos de escavação daquelas
   de deposição de material.

   Nota-se, na figura a seguir, que o terreno com a linha dos pontos de passagem,
   divide o terreno em duas áreas uma na porção inferior e outra na porção superior representando,
   respectivamente, área de corte e de aterro.

   .. figure:: /images/capitulo10/curva_nivelExemplo2.png
      :scale: 45 %
      :alt: curva_nivelExemplo2.png
      :align: center

   Para calcular o volume de corte tem-se que considerar apenas as estacas com CVs
   negativa com limite da curva de nível :math:`304,624\,\text{m}`. Será necessário
   computar os volumes da região que têm os quadrados inteiros, e somar com os volumes das
   áreas que têm apenas parte do quadrado indicando como corte, com limite dado pela curva de
   nível :math:`304,624\,\text{m}`. Para fins de simplificação e por representar volume a
   ser calculado desprezível, tomemos a CV em :math:`D4` igual a :math:`0` metros.


   - volume dos prismas com área da base em forma de quadrado:

   .. math::
      V_{\mathrm{quadCorte}} =&\frac{10\times10}{4}(-2,776\times1-3,176\times2-2,376\times2-1,076\times1 \\
      &-2,276\times2-2,976\times4-2,876\times3-0,976\times1-2,676\times1\\
      &-3,076\times3-1.476\times2-2,776\times1)\\
      =&\frac{10\times10}{4}58,647\\
      =&\mathbf{-1\,466\,m^3}

   -  Volume referente a área **A1c**, prisma com base em forma de trapézio:

   .. math::
      V_{\mathrm{1c}} =&\left(\frac{(4,48+4,44)10}{2}\right)\left(\frac{-1,076-0,976+0+0}{4}\right) \\
      =& 44,6\times-0,513 \\
      =& \mathbf{-23\,m^3}

   -  Volume referente a área **A2c**, prisma com base em forma de triângulo:

   .. math::
      V_{\mathrm{2c}} =&\left(\frac{4,44\times6,1}{2}\right)\left(\frac{-0,976+0+0}{3}\right)\\
      =&13,542\times-0,325 \\
      =&\mathbf{-4\,m^3}

   -  Volume referente a área **A3c**, prisma com base em forma de retângulo mais trapézio:}

   .. math::
      V_{\mathrm{3c}} =&\left(10\times6,1 +\frac{(10+7)\times3,9}{2}\right)\left(\frac{-2,876-0,976+0+0-1,476}{5}\right) \\
      =&94,15\times-1,066\\
      =& \mathbf{-100\,m^3}

   - Volume referente a área **A4c**, prisma com base em forma triângulo:

   .. math::
      V_{\mathrm{4c}} =&\left(\frac{7\times9,92}{2}\right)\left(\frac{-1,476+0+0}{3}\right) \\
      =&34,72\times-0,492 \\
      =&\mathbf{-17\,m^3}


   O volume total a ser escavado, considerando os volumes dos quadrados inteiros e os parciais.

   .. math::
      V_{\mathrm{totalCorte}}=&V_{\mathrm{quadCorte}}+V_{\mathrm{1c}}+V_{\mathrm{2c}}+V_{\mathrm{3c}}+V_{\mathrm{4c}}\\
      =&-1\,466-23-4-100-17\\
      =&\mathbf{-1\,610\,m^3}

   Mais uma vez, o sinal apenas indica que será um volume de :math:`1\,610\,\text{m}^3` a ser escavado.

Exercícios
==========

:exem:`1)` Para fins de uma obra de engenharia, será escavado um volume
de :math:`6\,000\,\text{m}`:math:`^3`. Sabendo-se que o material a ser escavado vai sofrer
expansão de :math:`15\%` de seu volume e, que o caminhão, tipo basculante, que será
empregado no transporte tem capacidade de :math:`12\,\text{m}^3`, qual será o
número de viagens necessárias para transportar todo o material?

:exem:`Resp.:` 575 viagens.

----

:exem:`2)` Deseja-se aterrar um volume de :math:`400\,\text{m}^3` com terra. Qual será o
volume de terra necessário para este aterro, sabendo-se que o material a ser utilizado
terá seu volume reduzido em :math:`20\%` no processo de compactação?

:exem:`Resp.:` :math:`500\,\text{m}^3`.

-----

:exem:`3)` Considere  as áreas entre as secções da estaca :math:`5+0\,\text{m}` e
a intermediária :math:`6+0\,\text{m}` de, respectivamente :math:`31\,\text{m}^2`
e :math:`24\,\text{m}`:math:`^2`. Qual o volume entre as secções das duas estacas.
Considere a distância horizontal de :math:`20\,\text{m}` entre as estacas inteiras.

:exem:`Resp.:` :math:`550\,\text{m}^3`.

-----

:exem:`4)` Considere as áreas entre as secções da estaca :math:`31+5\,\text{m}` e a
intermediária :math:`32+0\,\text{m}` de, respectivamente :math:`11\,\text{m}^2`
e :math:`16\,\text{m}^2`. Qual o volume entre as secções das duas estacas? Considere a
distância horizontal de :math:`20\,\text{m}` entre as estacas inteiras.

:exem:`Resp.:` :math:`202,5\,\text{m}`:math:`^3`.

-----

:exem:`5)` Para os dados das áreas a serem escavadas de secções apresentadas na tabela a
seguir, calcular o volume de material a ser escavado. Considere a distância entre as secções
de :math:`20\,\text{m}`

.. table:: Apresentação da :math:`\mathrm{CV}` em uma caderneta de campo.
   :widths: 1 1
   :header-alignment: cc
   :column-alignment: cc
   :column-dividers:  none single

   ======================= ======================================
   Estaca                  Área de corte :math:`(\mathrm{m}^2)`
   ======================= ======================================
   :math:`8+0\,\text{m}`   :math:`151`
   :math:`9+0\,\text{m}`   :math:`191`
   :math:`10+0\,\text{m}`  :math:`133`
   :math:`11+0\,\text{m}`  :math:`49`
   :math:`12+0\,\text{m}`  :math:`70`
   ======================= ======================================

:exem:`Resp.:` :math:`9\,670\,\text{m}`:math:`^3`

-----

:exem:`6)` Utilizando os dados do **Exemplo resolvido 5**, calcular o volume de aterro.

:exem:`Resp.:` :math:`1\,617\,\text{m}^3`.

-----

:exem:`7)` Um terreno foi estaqueado, conforme a Figura abaixo, para
fins de trabalho de terraplenagem. O espaçamento entre as estacas
foi de :math:`20,0\,\text{m}`. A declividade do terreno na direção das linhas é de
:math:`-3`\% e na direção das colunas é de :math:`-2`\%. A cota
do terreno para estaca :math:`A1` de :math:`100,00\,\text{m}`. Pede-se:

.. figure:: /images/capitulo10/cap_alt_exe_grid.png
  :scale: 45 %
  :alt: cap_alt_exe_grid.png
  :align: center

a. Calcular as cotas para todas as estacas;
b. Traçar as curvas de nível da área, com equidistância vertical de :math:`1,00\,\text{m}`;
c. Calcular a cota (hm) de um plano horizontal que, na terraplenagem, resulte em volumes de corte e aterro iguais;
d. Traçar a linha de passagem, indicando as áreas de corte e aterro;
e. Calcular a cota vermelha para todas as estacas.

:exem:`Resp.:` (a) e (e) nas Tabelas abaixo; (c) :math:`hm=98,5\,\text{m}`.

.. figure:: /images/capitulo10/ExUmTerreno.png
  :scale: 45 %
  :alt: ExUmTerreno.png
  :align: center

-----

:exem:`8)` Num trabalho de sistematização, transferiu-se a altitude
de um marco para um ponto próximo a área de trabalho, pelo método
de nivelamento trigonométrico. Posteriormente, conhecendo-se esta
nova altitude, determinaram-se as altitudes das estacas que serviram
de sistematização. Dados:

- transferência de altitude: na estação :math:`A`, cuja altitude é de :math:`305,3\,\text{m}`
  instalou-se uma estação total ficando o eixo da
  luneta a :math:`1,74\,\text{m}` de altura :math:`(ai)` , em seguida visou-se o prisma, cuja a altura era
  de :math:`1,0\,\text{m}` (\emph{ap}), em :math:`X`, anotando-se o ângulo zenital :math:`96^{\circ}20'`
  e a :math:`DI` de :math:`926,0\,\text{m}`;
- altitudes das estacas que serviram à sistematização, com o nível de
  precisão fez-se uma irradiação geométrica obtendo-se os seguintes
  dados, visada de \emph{ré} na mira colocada sobre :math:`X` igual a :math:`0,12\,\text{m}`;
  leitura da mira, em metros, nas estacas da quadrícula :math:`(20\,\text{m}` por
  :math:`20\,\text{m})` na Tabela abaixo.

Com os dados acima pede-se:

a. a altitude em :math:`X`;
b. a altitude nas estacas da quadrícula;
c. calcular a altura média do plano que resultará em :math:`V_c=V_a`;
d. projetar um plano inclinado de :math:`1\%` de declividade no sentido
   A para C e de :math:`-2\%` na direção da seção de :math:`1` para :math:`2`.


.. table::
   :widths: 1 1 1 1
   :header-alignment: cccc
   :column-alignment: cccc

   ========== ============= ============= =============
   Estaca     :math:`A`     :math:`B`     :math:`C`
   ========== ============= ============= =============
   :math:`1`  :math:`1,86`  :math:`2,20`  :math:`1,30`
   :math:`2`  :math:`2,50`  :math:`2,40`  :math:`2,30`
   ========== ============= ============= =============


:exem:`Resp.:` (a) altitude :math:`X=203,891\,\text{m}`; (b) na Tabela abaixo:

.. table:: resposta (b) Altitude das estacas (m).
   :widths: 1 1 1 1
   :header-alignment: cccc
   :column-alignment: cccc

   ========== ================ ================ ================
   Estaca     :math:`A`        :math:`B`        :math:`C`
   ========== ================ ================ ================
   :math:`1`  :math:`202,151`  :math:`201,811`  :math:`202,711`
   :math:`2`  :math:`201,511`  :math:`201,611`  :math:`201,711`
   ========== ================ ================ ================

(c) :math:`\mathrm{hm}=201,866\,\text{m}`; (d) na Tabela abaixo.

.. table:: resposta (d) Cotas do plano inclinado.
   :widths: 1 1 1 1
   :header-alignment: cccc
   :column-alignment: cccc

   ========== ================ ================ ================
   Estaca     :math:`A`        :math:`B`        :math:`C`
   ========== ================ ================ ================
   :math:`1`  :math:`201,866`  :math:`202,066`  :math:`202,266`
   :math:`2`  :math:`201,466`  :math:`201,666`  :math:`201,866`
   ========== ================ ================ ================

-----

:exem:`8)` Um terreno de :math:`40,0\,\text{m}` por :math:`40,0\,\text{m}`, foi
estaqueado em quadrículas de :math:`20,0\,\text{m}` por :math:`20,0\,\text{m}`.
As cotas obtidas para cada vértice estão na Figura abaixo.

.. figure:: /images/capitulo10/cap_alt_exer_grid2.png
  :scale: 45 %
  :alt: cap_alt_exer_grid2.png
  :align: center

Pede-se: 

a. desenhar o terreno na escala :math:`1:500` e locar as curvas de
   nível inteiras, pelo método de interpolação por cálculo
   com :math:`EV = 1,0\,\text{m}`;
b. projetar um plano inclinado de :math:`+2\%` na direção e sentido de :math:`A` para
   :math:`C` que resultará em :math:`V_c=V_a`. Fazer desenho na escala :math:`1:500`;
c. calcular os volumes de corte e aterro para o plano inclinado (não considere
   talude de corte e saia de aterro), utilize fórmula da área média das secções.

:exem:`Resp.:` (b) Figura abaixo; (c) :math:`V_{\textit{c}}=557,90\,\mathrm{m}^3`;
:math:`V_{\textit{a}}=562,89\,\mathrm{m}^3`.

.. figure:: /images/capitulo10/cap_alt_exer_grid2_rep.png
  :scale: 45 %
  :alt: cap_alt_exer_grid2_rep.png
  :align: center