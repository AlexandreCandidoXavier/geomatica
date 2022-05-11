.. raw:: html

    <style> .exem {color:blue; font-weight: bold} </style>

.. role:: exem

.. raw:: html

    <style> .solucao {font-weight: bold} </style>

.. role:: solucao

.. raw:: html

    <style> .blue {color:blue} </style>

.. role:: blue

.. _RST Capitulo 9:

Capitulo 9: Altimetria
**********************

Um ponto na superfície da terra só estará completamente definido depois
de estabelecida as suas coordenadas horizontal e vertical. Por exemplo,
um ponto que tenha as suas coordenadas horizontais do tipo geográficas
:math:`(\phi,\,\lambda)` poderá estar em infinitas distâncias verticais
acima do Datum vertical utilizado (ver página :any:`Datum Vertical`).
Desta forma, depois de ser apresentado os métodos para os cálculos
no plano horizontal topográfico, agora estudaremos da altimetria, que
trata das medidas das distâncias verticais entre pontos. A altimetria
é necessária em várias aplicações na engenharia, podendo-se citar:
na determinação da distância vertical entre pontos onde será realizada
a construção de uma elevatória; na construção de curvas de nível;
na determinação de greides (rampas); e para cálculo de volume de corte
ou aterro de uma área.


Definições
==========

Na :numref:`cap_altimetria_definicoes` são apresentados os
elementos da altimetria, em que:

- **Fio de prumo** é um cordão com um peso
  em uma extremidade onde, quando solto, indica a direção da gravidade
  local;
- **Linha vertical** é a linha de qualquer
  ponto da terra ao centro da terra. Ela tem a direção da gravidade
  local. A linha vertical do lugar coincide com o fio de prumo em repouso;
- **Plano horizontal**  é o plano perpendicular
  a direção da gravidade local;
- **Linha horizontal** é uma linha no
  plano horizontal, perpendicular à direção da gravidade local;
- **Superfície de nível** é uma superfície
  curva em que ela é perpendicular a linha vertical local, sendo o potencial
  gravitacional igual em todos os pontos desta superfície;
- **Linha de nível** uma linha qualquer em
  uma determinada superfície de nível;
- **Datum vertical** é uma superfície de
  nível que será utilizada como referência para determinação de elevações
  de outros pontos. Pontos em uma mesma superfície de nível têm diferença
  de elevação zero;
- **Elevação** é a distância ao longo da linha
  vertical entre o ponto observado e o Datum vertical;
- **Diferença de nível** :math:`(\mathrm{DN})` é a
  diferença entre a elevação de dois pontos. É também denominada de
- **Distância Vertical** :math:`(\mathrm{DV})`;
- **nivelamento** é o processo para se determinar a altitude, elevação
  ou a :math:`\mathrm{DN}` entre entre pontos topográficos;
- **Referência de nível** :math:`\mathrm{(RN})` é um
  ponto materializada em que sua altitude foi determinada.


.. _cap_altimetria_definicoes:

.. figure:: /images/capitulo9/cap_altimetria_definicoes.png
   :scale: 35 %
   :alt: cap_altimetria_definicoes.png
   :align: center

   Elementos básicos da altimetria (adaptado de :cite:`WOLF`).

Pode-se ainda recordar da seção :any:`Datum Vertical`,
que a altitude ortométrica corresponde à distância vertical entre
um ponto ao Datum Altimétrico utilizado, no caso do Brasil Datum de
Imbituba ou o de Santana.
Já a altitude geométrica é distância vertical
entre o ponto e o :ref:`Datum horizontal`, por exemplo o `SIRGAS2000 <https://geoftp.ibge.gov.br/informacoes_sobre_posicionamento_geodesico/rede_planialtimetrica/relatorio/rel_sirgas2000.pdf>`_.

Sempre que possível, é desejável que se trabalhe com valores de altitude
ortométrica, pois assim os pontos levantados poderão ser comparados
com mapas e a outros levantamentos existentes. Entretanto, nem sempre
se trabalha com ela, seja porque, a :math:`\mathrm{RN}` de **altitude ortométrica**
mais próxima esteja muito distante do local a ser levantado e o seu
transporte seria de alto custo, ou porque o levantamento a ser
realizado não a faz necessária.

Em levantamentos em que não há :math:`\mathrm{RN}` próxima ou ela não se faz necessária,
precisa-se arbitrar uma :math:`\mathrm{RN}` local para ser utilizada nas medidas altimétricas.
É então atribuído :math:`\mathrm{RN}` inicial do levantamento, ou seja, um valor de
:math:`\mathrm{DN}` dele à uma superfície de nível arbitrária, um Datum altimétrico
local. A esta :math:`\mathrm{DN}`, e às demais :math:`\mathrm{DN}`'s que serão calculadas em relação
a este Datum local, denominam-se de **cota**.

A partir da :math:`\mathrm{RN}` inicial, em que se conhece a altitude ou a cota, e
com os métodos que serão vistos a seguir, pode-se medir a :math:`\mathrm{DN}` deste
ponto a outro ponto. Tais procedimentos podem ser repetidos, determinando-se
as :math:`\mathrm{DN}` entre os pontos. Uma vez conhecida a :math:`\mathrm{DN}` entre dois pontos e
a altitude ou cota do ponto inicial, por exemplo, para os pontos :math:`\mathrm{A}`
e :math:`\mathrm{B}`, a :math:`\mathrm{DN_{AB}}`  e a altitude de :math:`\mathrm{A}\,(\mathrm{alt_{A}})`,
pode-se calcular a altitude de :math:`\mathrm{B}\,(\mathrm{alt_{B}})`, conforme
Equação :eq:`eq:altitude`. O mesmo raciocínio pode ser utilizado
para cálculo das altitudes dos demais pontos levantados.

.. math::
   \mathrm{alt_{B}} =\mathrm{alt_{A}+DN_{AB}}\\
   :label: eq:altitude

.. math::
   \mathrm{cota_{B}} =\mathrm{cota_{A}+DN_{AB}}
   :label: eq:cota

----

.. admonition:: :exem:`Exemplo 1` De uma marco do IBGE de altitude
   :math:`691,421\,\text{m}` ao ponto :math:`\mathbf{X}`, mediu-se uma :math:`\mathrm{DN}` de
   :math:`-39,697\,\text{m}`. Qual a altitude de :math:`\mathbf{X}`?

   :solucao:`Solução:`

   .. math::
      \mathrm{alt_{\mathbf{X}}}&=\mathrm{alt_{IBGE}+DN_{IBGE,\,\mathbf{X}}}\\
      \mathrm{alt_{\mathbf{X}}}&=691,421-39,697\\
      \mathrm{alt_{\mathbf{X}}}&=651,724\,\text{m}

.. _Erro de esfericidade e refração:

Erro de esfericidade e refração
===============================

Quando o nivelamento é realizado entre pontos distantes em mais de
:math:`100\,\text{m}`, a :cite:t:`NBR13133` recomenda que o efeito da curvatura terrestre
:math:`(C_{c})` e o da refração atmosférica :math:`(C_{r})` sejam compensadas.

Erro de esfericidade
--------------------

Na :numref:`cap_ref_cur2` são apresentados dois pontos topográficos,
:math:`A`  e :math:`B`, na mesma linha de nível. A partir de :math:`A`  é realizada
uma visada horizontal para medidas de elevação. A medida que um ponto
a ser medido se afasta de :math:`A`, há um aumento da separação entre a
linha horizontal e a linha de nível que passa por :math:`A`. Por exemplo,
em :math:`B`, que está na mesma linha de nível de :math:`A`, há uma separação,
correspondendo a :math:`BC`. A esta separação denominamos :math:`C_{c}`.
Do triângulo retângulo :math:`AOC` :

.. math::
   OC^{2}&=OA^{2}+AC^{2}\nonumber \\
   (R+C_{c})^{2}&=R^{2}+\mathrm{DH^{2}}\nonumber \\
   R^{2}+2RC_{c}+C_{c}^{2}&=R^{2}+\mathrm{DH^{2}}\nonumber \\
   C_{c}(2R+C_{c})&=\mathrm{DH^{2}}\nonumber \\
   C_{c}&=\frac{\mathrm{DH^{2}}}{2R+C_{c}}.
   :label: eq:Cc1


considerando o valor de :math:`R`  como sendo a média dos raios
do WGS84\footnote{Raios do Datum WGS84: :math:`a=6\,378\,137\,\text{m}`,
:math:`b=6\,356\,752,314\,\text{m}`, :math:`R=6\,367\text{ km}`; e no denominador da :eq:`eq:Cc1`,
:math:`2R+C_{c}`, o valor de :math:`C_{c}`  insignificante em relação a ordem
de grandeza de :math:`2R`, tem-se, para :math:`C_{c}`  em metros e :math:`\mathrm{DH}` em km a
Equação:

.. math::
   C_{c}&=1\,000\frac{\mathrm{DH^{2}}}{2R}\\
   C_{c}&=0,07853\mathrm{DH^{2}}.
   :label: eq:Cc2

Com a finalidade de ilustrar o efeito de :math:`C_{c}`, imagine uma embarcação,
que em :math:`A`  é verificado que a sua altura é de :math:`4\,\text{m}`. Se ela parte ao
mar, quando estiver a uma distância de aproximadamente :math:`7,14\,\text{km}` de
:math:`A`  :math:`(\mathrm{DH}=(4/0,07853)^{0,5})`, Equação :eq:`eq:Cc2`, não
será mais possível observá-la. É lógico que a embarcação não ficou
:math:`4\,\text{m}`  menor, é apenas o efeito de :math:`C_{c}`  que, estando a embarcação
a :math:`7,14\,\text{km}` de :math:`A`, faz com que ela não seja mais visível. Daí pode-se
concluir que, devido à :math:`C_{c}`, qualquer ponto que esteja a uma distância
de :math:`7,14\,\text{km}` de onde se está realizando a medida de :math:`\mathrm{DN}`, tem-se que considerar
que a :math:`\mathrm{DN}` é :math:`4\,\text{km}\,\text{m}` aior do que a calculada, quando considerando o erro
devido a esfericidade da terra.

.. _cap_ref_cur2:

.. figure:: /images/capitulo9/cap_ref_cur2.png
   :scale: 35 %
   :alt: cap_ref_cur2.png
   :align: center

   Elementos básicos para definição do efeito da curvatura terrestre
   :math:`(C_{c})` e da refração :math:`(C_{r})` sobre as medidas de altitude.

Erro de refração
----------------

A luz, ao passar pela a atmosfera, é refratada para a Terra, assim
os objetos parecem ser mais altos do que eles realmente são. Na Figura
:numref:`cap_ref_cur2` é apresentada como seria uma visada horizontal
:math:`AH`, mas como realmente é o trajeto da luz, :math:`AD`. A refração
atmosférica depende das condições atmosféricas, da altitude, do ângulo
de visada e da distância medida. Para visadas horizontais, com :math:`C_{r}` 
em metros e a :math:`\mathrm{DH}` em quilômetro:

.. math::
   C_{r}=0,011\mathrm{DH^{2}}.
   :label: eq:Cr

Erro de esfericidade e refração combinado
-----------------------------------------

A combinação dos :math:`C_{c}`  e :math:`C_{r}`  resulta em :math:`C_{cr}`, ou seja,
a compensação que deve ser aplicada nas medidas de altimétricas a
pontos distantes entre si em mais de :math:`100\,\text{m}`. Como :math:`C_{c}`  resulta
em alturas menores e :math:`C_{r}`  os pontos parecem ser mais altos, a
compensação, :math:`C_{cr}` é:

.. math::
   C_{cr}&=0,07853\mathrm{DH}^2-0,011\mathrm{DH}^2\nonumber \\
   C_{cr}&=0,06753\mathrm{DH}^2
   :label: eq:Ccr

Mais uma vez, a unidade de :math:`C_{cr}` é metro e a :math:`\mathrm{DH}` em quilômetro.

----

.. admonition:: :exem:`Exemplo 2`  Qual será o erro cometido em um nivelamento se
   não for considerado o efeito da curvatura da terra e da refração atmosférica
   na medida de :math:`\mathrm{DN}` entre pontos distantes entre si em :math:`1\,398\,\text{m}`?

   :solucao:`Solução:`
   Considerando a :math:`\mathrm{DH}` em km e de acordo com a Equação :eq:`eq:Ccr`:

   .. math::
      C_{cr}&=0,06753\cdot1,398^2\\
      &=0,132\,\text{m}

   O erro cometido corresponderia a :math:`0,132\,\text{m}` para menos na
   :math:`\mathrm{DN}` entre os pontos.

----

.. admonition:: :exem:`Exemplo 3` No exemplo 1, considere que na
   :math:`\mathrm{DN}` de :math:`-39,697\,\text{m}`, entre o marco
   do IBGE ao ponto :math:`\mathrm{X}`, não foi
   considerado o erro de curvatura e de refração :math:`(C_{cr})`. Calcule
   novamente a altitude de :math:`\mathbf{X}` aplicando a correção para :math:`C_{cr}`.
   Considere a distância entre os pontos de :math:`753,982\,\text{m}`.

   :solucao:`Solução:`
   Uma vez que se queira realizar a compensação, basta aplicar
   à :math:`\mathrm{DN}` a :math:`C_{cr}`, desta forma:

   .. math::
      \mathrm{\mathrm{alt_{\mathbf{X}}}}&=\mathrm{alt_{IBGE}+DN_{IBGE,\,\mathbf{X}}+}C_{cr}\\
      &=\mathrm{alt_{IBGE}+DN_{\mathbf{X}IBGE}}+0,06753\mathrm{DH^{2}}\\
      &=691,421-39,697+0,06753\cdot0,753\,982^{2}\\
      &=651,762{\rm \,m.}

----

Declividade
===========

A declividade mede o grau de inclinação do terreno, podendo ser calculada
em percentagem :math:`d(\%)`  ou em graus :math:`d(^{\circ})`, conforme, respectivamente,
as Equações :eq:`eq:c1` e :eq:`eq:c2`:

.. math::
   d(\%)=100\frac{\mathrm{DN}}{\mathrm{DH}}
   :label: eq:c1

.. math::
   d(^{\circ})=\arctan\frac{\mathrm{DN}}{\mathrm{DH}}
   :label: eq:c2

A declividade é um parâmetro importante pois, de acordo com a grandeza
da declividade do terreno, pode haver limitação: ao uso agrícola;
à utilização de equipamentos agrícolas, como tratores; à construção
de estrada, uma vez que no transporte de cargas em caminhões, por
exemplo, há um limite para sua circulação em rampas com alta declividade.
Valores positivos e negativos de :math:`d(\%)`  e :math:`d(^{\circ})`  representam,
respectivamente, o terreno aclive e declive (ver :numref:`declividade`).

.. _declividade:

.. figure:: /images/capitulo9/declividade.png
   :scale: 35 %
   :alt: declividade.png
   :align: center

   Exemplo gráfico e numérico de terreno em aclive e em declive. O eixo-:math:`x`  representa a
   distância horizontal e o eixo-:math:`y`, a altitude ou a cota do terreno.

----

.. admonition:: :exem:`Exemplo 4` Calcule a declividade em percentagem
   e graus para uma :math:`\mathrm{DN}` e :math:`\mathrm{DH}` entre dois pontos de :math:`-27,9\,\text{m}`
   e :math:`162,2\,\text{m}`, respectivamente?

   :solucao:`Solução:`
   A :math:`\mathrm{DN}` negativa tem como significado que o terreno onde foi
   realizada a medição se apresenta em declive do ponto inicial ao final,
   isto é, ponto inicial tem cota/altitude maior do que o ponto final.

   - A declividade em percentagem:

   .. math::
      d(\%)&=\frac{\mathrm{DN}}{\mathrm{DH}}100\\
      &=\frac{-27,9}{162,2}100\\
      &=-17,201\%.

   - Em graus:

   .. math::
      d(^{\circ})&=\arctan\frac{\mathrm{DN}}{\mathrm{DH}}\\
      &=\arctan\frac{-27,9}{162,2}\\
      &=-9^\circ45'36''.

----

Uma maneira de interpretar o valor da declividade em percentagem
é, por exemplo, de acordo com o Exemplo 4, se o
terreno fosse uniforme com :math:`d(\%)=-17,201`, quando fosse percorrido
uma :math:`\mathrm{DH}` de :math:`100\,\text{m}`, a :math:`\mathrm{DN}` seria de :math:`-17,201\,\text{m}`.

Nivelamento
===========

Em topografia, chama-se de nivelamento, aos métodos utilizados para
medir a :math:`\mathrm{DN}`, a altitude ou a cota. Vários são os métodos que podem
ser empregados para o nivelamento. A utilização de um ou outro método
dependerá dos objetivos do nivelamento (ver :cite:t:`NBR13133`).
Nesta seção serão apresentados os métodos: *i*) :ref:`Nivelamento barométrico`;
*ii*) :ref:`Nivelamento trigonométrico`; *iii*) :ref:`Nivelamento trigonométrico`;
*iv*) :ref:`Nivelamento GNSS`; e *v*) :ref:`nivelamento geométrico`.

.. _Nivelamento barométrico:

Nivelamento barométrico
-----------------------

Por meio de equipamentos que medem a pressão do ar, que denominam-se
barômetros, é possível encontrar a :math:`\mathrm{DN}` entre os pontos. A explicação
é dada pela relação inversa que há entre pressão do ar e a altitude
(:numref:`BaromeHGvsAltitude`). Quanto mais alto um ponto, menor é a camada atmosférica
atuando nele, logo, menor será a pressão devida à atmosfera. Por outro
lado, um ponto em uma altitude menor, está sujeito a uma maior camada
de ar, resultando numa maior pressão atmosférica :cite:`espartel`.
A pressão do ar depende também da temperatura do ar e em menor grau
da umidade e da latitude do lugar (ver :cite:`deumlich1982surveying`, página 222).

.. _BaromeHGvsAltitude:

.. figure:: /images/capitulo9/BaromeHGvsAltitude.png
   :scale: 35 %
   :alt: BaromeHGvsAltitude.png
   :align: center

   Relação entre pressão atmosférica e altitude.

Existem vários tipos de barômetros,
destacando-se os de **mercúrio** e os **aneroides**. O **barômetro de mercúrio**,
é constituído de um recipiente, fechado de um lado e aberto do outro.
É colocado mercúrio nesta coluna e a parte aberta é virada em um reservatório.
Na parte superior é criado um vácuo, que será equilibrado de acordo
com a pressão atmosférica que é aplicada no reservatório (:numref:`barometroHg`).
Ao nível do mar, a coluna mede :math:`760\,\text{mm}`. Quanto maior a pressão atmosférica,
maior a força agindo sobre o reservatório, forçando a coluna de mercúrio
a subir. Uma variação de :math:`1\,\text{mm}`  na coluna de mercúrio corresponde a
aproximadamente uma variação de :math:`11\,\text{m}` de altitude. Estes equipamentos
devem ser evitados por apresentarem pouca precisão, por exemplo, segundo
:cite:`deumlich1982surveying`, um erro de :math:`\pm2\,\text{m}`  (:math:`\pm0,15\,\text{mm Hg}``
à :math:`\pm0,19\,\text{mm Hg}`) pode ser encontrado para uma diferença
de elevação de :math:`200\,\text{m}`.


.. _barometroHg:

.. figure:: /images/capitulo9/barometroHg.png
   :scale: 35 %
   :alt: barometroHg.png
   :align: center

   Barômetro de mercúrio ao nível do mar.

Os barômetros do tipo **aneroides** consistem de uma pequena caixa flexível onde o ar interno é retirado,
criando-se um vácuo. Na medida que a pressão do ar muda, a membrana
da caixa se deforma, comprimindo-se os expandindo-se. Um mecanismo
mede esta deformação, que está relacionada a pressão do ar, e é mostrado
em uma escala graduada e em painel digital. São mais precisos que
os de mercúrio, por exemplo, o aumento precisão na medida de pressão
resulta em desvio padrão da :math:`\mathrm{DN}` entre pontos de :math:`\pm0,8\,\text{m}`
(ver :cite:`deumlich1982surveying`, página 224).

.. _Nivelamento trigonométrico:

Nivelamento trigonométrico
--------------------------

Nivelamento trigonométrico é aquele em que a :math:`\mathrm{DN}` é avaliada com o auxílio
das funções trigonométricas. Em campo são medidos: o ângulo vertical
e a :math:`\mathrm{DI}` ou a :math:`\mathrm{DH}` entre os pontos de interesse. As medidas de distâncias
podem ser realizadas utilizando a trena, o teodolito ou a estação
total, e as angulares, com estes dois últimos equipamentos ou com
clinômetros. Na :numref:`cap_niv_trig` é apresentado um esquema do
nivelamento trigonométrico para medidas de :math:`\mathrm{DN}` entre os pontos :math:`\mathrm{A}` e
:math:`\mathrm{B}`, materializados por piquetes. No ponto :math:`\mathrm{A}` é estacionada a
estação total, e em :math:`\mathrm{B}`, o prisma. O centro da estação total corresponde
a :math:`\mathrm{C}`, e a interseção da linha horizontal que passa por C com a linha
vertical que passa por :math:`\mathrm{B}`, corresponde à :math:`\mathrm{E}`. A distância vertical entre
:math:`\mathrm{E}` e :math:`\mathrm{D}` denominaremos por :math:`V`. Considerando o triângulo retângulo
:math:`\mathrm{CED}` e que foi medida a :math:`\mathrm{DI}`, tem-se :math:`V`:

.. math::
   V =\mathrm{DI}\cos z,
   :label: eq:cap_alt_V_di_z

.. math::
   V =\mathrm{DI}\sin\alpha,
   :label: eq:cap_alt_V_di_alfa

para medidas de :math:`\mathrm{DH}`:

.. math::
   V&=\mathrm{DH}\cot z,\\
   V&=\mathrm{DH}\tan\alpha,

A distância :math:`\mathrm{BD}` corresponde à altura do prisma :math:`(ap)`. É facilmente
obtida por meio da leitura na régua presente no bastão em que o prisma
está conectado. A altura do equipamento :math:`\mathrm{AI}`, distância vertical
entre :math:`\mathrm{C}` e :math:`\mathrm{A}`, pode ser obtida com uma trena. Com estas definições,
para a determinação da :math:`\mathrm{DN}` tem que somar a :math:`V`, a :math:`\mathrm{AI}` e
subtrair :math:`ap`:

.. math::
   \mathrm{DN}=V+ai-ap.
   :label: eq:cap_alt_tri

Para realizar a correção para os efeitos da curvatura da terra e da
refração atmosférica no nivelamento trigonométrico, basta somar à
Equação :eq:`eq:cap_alt_tri` o valor de :math:`C_{cr}`, isto é:

.. math::
   \mathrm{DN}=V+ai-ap+C_{cr}.
   :label: eq:cap_alt_tri_2

O valor de :math:`\mathrm{DN}` poderá ter valores positivos ou negativos. Valores positivos
indicam que o terreno está em aclive, enquanto valores negativos,
terreno em declive. Por exemplo, caso a :math:`\mathrm{DN}` seja positivo, indica que
a cota ou altitude de :math:`\mathrm{B}` é maior que em :math:`\mathrm{A}`.

.. _cap_niv_trig:

.. figure:: /images/capitulo9/cap_niv_trig.png
   :scale: 35 %
   :alt: cap_niv_trig.png
   :align: center

   Elementos básicos para o nivelamento trigonométrico.

----

.. admonition:: :exem:`Exemplo 5` Em um levantamento para determinar a :math:`\mathrm{DN}` entre os
   pontos :math:`\mathrm{A}` e :math:`\mathrm{B}`, estacionou-se a estação total em :math:`\mathrm{A}` e, em :math:`\mathrm{B}`, o prisma.
   Da estação total mirou-se o prisma, resultando na DI de :math:`322,567\,\text{m}`.
   Anotou-se também: o ângulo zenital de :math:`85^\circ24'`; a altura do
   instrumento de :math:`1,769\,\text{m}`; e a altura do prisma de :math:`2,000\,\text{m}`. Pergunta-se,
   qual a :math:`\mathrm{DN}` entre :math:`\mathrm{A}` e :math:`\mathrm{B}`, sem e com os efeitos da curvatura da terra
   e da refração atmosférica sendo considerado?

   :solucao:`Solução:`
   Sem :math:`C_{cr}`, considerando a Equação :eq:`eq:cap_alt_tri`
   com o valor de :math:`V` dado pela Equação :eq:`eq:cap_alt_V_di_z`,
   pois os dados disponíveis são DI e :math:`z`, tem-se:

   .. math::
      \mathrm{DN_{AB}}&=\mathrm{DI_{AB}}\cos z+ai-ap\\
      &=322,567\cos85^{\circ}24'+1,769-2,000\\
      &=25,638\,{\rm m.}

   No cálculo de :math:`\mathrm{DN}` considerando :math:`C_{cr}`, utiliza-se
   a Equação :eq:`eq:cap_alt_tri_2`. Para :math:`C_{cr}`  (Equação :eq:`eq:Ccr`)
   :math:`\mathrm{DH}` é na unidade de :math:`\mathrm{km}`, então por trigonometria:

   .. math::
      \mathrm{DH_{AB}}&=\frac{\mathrm{\mathrm{DI}}\sin z}{1000}\\
      &=\frac{322,567\sin85^{\circ}24'}{1000}\\
      &=0,3215{\rm \,km.}

   Por fim, aplicando-se a Equação :eq:`eq:cap_alt_tri_2`,
   tem-se:

   .. math::
      \mathrm{DN_{AB}}&=\mathrm{DI_{AB}}\cos z+ai-ap+C_{cr}\\
      &=\mathrm{DI}\cos z+ai-ap+0,06753\mathrm{DH^{2}}\\
      &=322,567\cos85^{\circ}24'+1,769-2,000+0,06753\cdot0,3215^{2}\\
      &=25,646\,{\rm m.}

.. _Nivelamento taqueométrico:

Nivelamento taqueométrico
-------------------------

De acordo com a :numref:`taqueometria`, agora, em A, é estacionado
um teodolito e em B, uma mira. O nivelamento taqueométrico é aquele
realizado por meio das leituras dos retículos sobre a mira e do ângulo
vertical com o auxílio do teodolito.
Sendo :math:`V`, a distância vertical entre o plano que passa pelo
centro do equipamento ao que passa por :math:`rm`, temos:

.. math::
   V=100H\cos z\sin z=\frac{100H\sin2z}{2}
   :label: eq:taque

em que: :math:`H=(rs-ri)`  sendo, :math:`rs`  e :math:`ri`, respectivamente,
a leitura sobre a mira em B dos retículos superior e inferior.

.. _taqueometria:

.. figure:: /images/capitulo9/taqueometria.png
   :scale: 35 %
   :alt: taqueometria.png
   :align: center

   Esquema para o nivelamento taqueométrico.

Para calcular a :math:`\mathrm{DN}`, aplicam-se as Equação :eq:`eq:cap_alt_tri` ou
:eq:`eq:cap_alt_tri_2`, esta última se :math:`C_{cr}`  for utilizado. O
valor da altura do prisma :math:`(ap)`, nestas Equações, é substituído
pela leitura do retículo médio :math:`(rm)`.

Por se tratar de um método que é a cada dia menos empregado nos levantamentos
topográficos, não será apresentado a determinação Equação :eq:`eq:taque`.
Aos interessados, consultar :cite:`godoy`, :cite:`comastri` e :cite:`casaca`,
entre outros.

----

.. admonition:: :exem:`Exemplo 6` Com um teodolito no ponto 9 de cota :math:`100,0\,{\rm m}`, visou-se
   o ponto 10, onde foram medidos: a altura do instrumento de :math:`1,532\,{\rm m}`;
   visando-se a mira em 10, as leitura do :math:`rs=2,984\,{\rm m}`  e do :math:`ri=0,200\,{\rm m}`;
   e ângulo zenital de :math:`97^{\circ}`. Determine a diferença de nível
   entre os pontos :math:`9` e :math:`10` e a cota em :math:`10`.

   :solucao:`Solução:`
   Da Equação :eq:`eq:taque`, verifica-se que temos que determinar
   :math:`rm`. Em taqueometria, :math:`rs-rm`  é igual a :math:`rm-ri`, desta forma:

   .. math::
      rs-rm&=rm-ri\\
      2rm&=rs+ri\\
      rm&=\frac{rs+ri}{2}\\
      rm&=\frac{2,984+0,200}{2}\\
      rm&=1,592\,{\rm m.}

   Substituindo as medidas na Equação :eq:`eq:taque` tem-se
   para :math:`V`:

   .. math::
      V&=\frac{100H\sin2z}{2}\\
      &=\frac{100(2,984-0,200)\sin(2\cdot97^{\circ})}{2}\\
      &=-33,676\,{\rm m.}

   Aplicando a Equação :eq:`eq:cap_alt_tri` com :math:`ap` igual a :math:`rm`:

   .. math::
      \mathrm{DN_{9,10}}&=V+ai-rm\\
      &=-33,676+1,532-1,592\\
      &=-33,736\,{\rm m.}

   Para o transporte da cota em :math:`9` para o ponto :math:`10`:

   .. math::
      \mathrm{cota_{10}}&=\mathrm{cota_{9}+DN_{9,10}}\\
      &=100-33,736\\
      &=66,264\,{\rm m.}

----

.. _Nivelamento GNSS:

Nivelamento GNSS
----------------

Como já foi visto anteriormente, a altitude que os receptores GNSS
determinam, corresponde à distância vertical do centro físico da antena
do receptor ao Datum horizontal considerado.
Esta distância é denominada de altitude geométrica
:math:`(h)`. A altitude que trabalhamos é a altitude em relação ao geóide,
altitude ortométrica :math:`(H)`, que é a
distância vertical do ponto na superfície ao geóide, isto é, aproximadamente
ao nível médio dos mares. Valores de :math:`H`  são, normalmente, medidos
por meio do :ref:`nivelamento geométrico`.
Todavia, pode-se obter :math:`H`  se conhecer :math:`h`, medida por GNSS e, a
ondulação geoidal :math:`(N)` local, diferença entre :math:`h` e :math:`H`
(Equação :eq:`eq:geoide` e  :numref:`fig_geoide` a).

.. math::
   H\approx h-N
   :label: eq:geoide

Na Figura :numref:`fig_geoide` b é apresentado, do modelo EGM96, a :math:`N`
para parte da região da América do Sul. O EGM96 tem como referência
o Datum WGS84. Valores positivos indicam que o geóide está acima do
WGS84, e negativos, abaixo. Segundo este modelo, no
Acre :math:`N\approx30\,\mathrm{m}`, já no Amapá, :math:`N\approx-30\,\mathrm{m}`.
Na América do sul, os maiores valores se encontram nas Cordilheira
dos Andes, com :math:`N\approx50\,\mathrm{m}`.

Valores de :math:`N`  com relação aos Data utilizados no Brasil, o
`SIRGAS2000 <https://geoftp.ibge.gov.br/informacoes_sobre_posicionamento_geodesico/rede_planialtimetrica/relatorio/rel_sirgas2000.pdf>`_,
podem ser obtidos por meio do programa `HgeoHNOR2020 <https://www.ibge.gov.br/geociencias/informacoes-sobre-posicionamento-geodesico/servicos-para-posicionamento-geodesico/31283-hgeohnor2020-modeloconversaoaltitudesgeometricasgnss-datumverticalsgb.html?edicao=31284&t=processar-os-dados>`_.
No **HgeoHNOR2020**, tem que informar para obter a estimativa
de :math:`N`, o Datum utilizado na coleta dos dados de :math:`h`  com  receptor
GNSS, SIRGASS2000, e, as coordenadas do ponto, em latitude e longitude. Uma vez conhecidos
os valores de :math:`h`  (receptor GNSS) e :math:`N`  (HgeoHNOR2020), pode-se calcular
:math:`H`  pela Equação :eq:`eq:geoide`.


.. _fig_geoide:

.. figure:: /images/capitulo9/fig_geoide.png
   :scale: 35 %
   :alt: fig_geoide.png
   :align: center

   Relação entre altura ortométrica :math:`(H)`, altura geométrica :math:`(h)`
   e ondulação geoidal :math:`(N)` em (a). Ondulação geoidal segundo EGM96
   :cite:`lemoine1998development`, tendo :math:`h`  em relação ao WGS84 (b).


.. admonition:: Sobre HgeoHNOR2020.

    .. raw:: html

        <div style="position: center; padding-bottom=75%; height:0; overflow: hidden; max-width: 100%; height:auto">
            <iframe width="930" height="530" src="https://www.youtube.com/embed/mPAYGAT_5OU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>




A precisão na determinação de :math:`H`, dependerá: *i*) da precisão
de :math:`h` ou seja, do tipo de receptor GNSS, do método de
posicionamento, e *ii*) da precisão da estimativa da :math:`N`. Para
a :math:`N`  do modelo HgeoHNOR2020, segundo :cite:t:`hgeoHNOR2020`, o resíduo
(*reqm*, raiz do erro quadrático médio) em ralação
à :math:`N`  estimadas e  a medida por meio de GNSS em pontos onde se conhecia o valor de
:math:`H`, pontos de RN do IBGE, foi de :math:`6,5\,\text{cm}`.

Para aumentar a precisão do receptor, ou seja, a :math:`h`, sugere-se utilizar
os métodos de medidas relativas e por diferença de fase por onda portadora.
Já, para aumentar a precisão no que diz respeito a :math:`N`, pode-se realizar
a sua calibração local. Esta calibração não será apresentada, por
este texto ser apenas introdutório à esta disciplina. Maiores detalhes
podem ser encontrados em :cite:`WOLF`.

----

.. admonition:: :exem:`Exemplo 7` Encontre, por meio do programa `HgeoHNOR2020 <https://www.ibge.gov.br/geociencias/informacoes-sobre-posicionamento-geodesico/servicos-para-posicionamento-geodesico/31283-hgeohnor2020-modeloconversaoaltitudesgeometricasgnss-datumverticalsgb.html?edicao=31284&t=processar-os-dados>`_,
   a ondulação geoidal para um ponto de coordenadas :math:`-22^{\circ}6'41''`  de latitude
   e :math:`-41^{\circ}54'8''`  de longitude, no Datum
   `SIRGAS2000 <https://geoftp.ibge.gov.br/informacoes_sobre_posicionamento_geodesico/rede_planialtimetrica/relatorio/rel_sirgas2000.pdf>`_. Sabendo-se que a altura geométrica calculada pelo receptor
   GNSS nesta coordenada foi de :math:`562,672\,\text{m}`, qual a altitude
   ortométrica.

   :solucao:`Solução:`
   Com as coordenadas e o Datum apresentados acima, obteve-se por meio do
   `HgeoHNOR2020 <https://www.ibge.gov.br/geociencias/informacoes-sobre-posicionamento-geodesico/servicos-para-posicionamento-geodesico/31283-hgeohnor2020-modeloconversaoaltitudesgeometricasgnss-datumverticalsgb.html?edicao=31284&t=processar-os-dados>`_
   o valor de :math:`N` de :math:`-6,54\,\text{m}`. Para
   calcular a altitude ortométrica :math:`(H)`, aplica-se a Equação :eq:`eq:geoide`:

   .. math::
      H&=h-N\\
      &=562,672--6,54\\
      &=569,112\,\rm{m.}

----

.. admonition:: :exem:`Exemplo 8` Trabalhando com receptores GNSS com a técnica de
   medida relativa por diferença de fase, obteve-se para um ponto a altitude
   geométrica de :math:`231,849\,\text{m}` no Datum `SIRGAS2000 <https://geoftp.ibge.gov.br/informacoes_sobre_posicionamento_geodesico/rede_planialtimetrica/relatorio/rel_sirgas2000.pdf>`_. Utilizando o programa
   `HgeoHNOR2020 <https://www.ibge.gov.br/geociencias/informacoes-sobre-posicionamento-geodesico/servicos-para-posicionamento-geodesico/31283-hgeohnor2020-modeloconversaoaltitudesgeometricasgnss-datumverticalsgb.html?edicao=31284&t=processar-os-dados>`_,
   foi encontrado a ondulação geoidal de :math:`-12,598\,\text{m}`.
   Calcule a altitude ortométrica.

   :solucao:`Solução:`
   Da Equação :eq:`eq:geoide`, e com os dados apresentados acima, temos:

   .. math::
      H&=h-N\\
      &=231,849--12,598\\
      &=244,447\,\rm{m.}

----



.. admonition:: Sugestão de aula prática

   **Levantamento de ponto inacessível**

   *Introdução*: Um problema comum em topografia é ter pontos
   onde se deseja conhecer sua altitude ou, a :math:`\mathrm{DN}` entre ele e o ponto
   da estação. Isto é facilmente resolvido se for possível levar ao ponto
   de interesse, uma mira ou um prisma, respectivamente, para levantamento
   com teodolito ou estação total, Secções :ref:`Nivelamento trigonométrico`
   e :ref:`Nivelamento taqueométrico`. Todavia, em algumas
   situações, este procedimento não pode ser realizado devido, por exemplo,
   a não se ter acesso ao ponto de interesse.

   *Objetivo*: Determinar a :math:`\mathrm{DN}` entre o ponto em que a estação
   total está estacionada, a um ponto inacessível, escolhido em campo.

   *Material*:  Estação total, prisma, trena e estaca.

   *Procedimento*: é apresentado graficamente abaixo, onde: A
   é o ponto de referência para a medida de :math:`\mathrm{DN}`, primeiro ponto onde a
   estação total será estacionada; O é o ponto inacessível; B é uma posição
   onde se tem acesso; AB é a base, onde é medida a :math:`\mathrm{DH_{AB}}`;
   :math:`\alpha`  e :math:`\beta`  são os ângulos horizontais medidos em A e B,
   respectivamente; :math:`\mathrm{AI}`  é a altura do instrumento em A, medida com
   a trena.


   .. _pontoinacessivel.png:

   .. figure:: /images/capitulo9/pontoinacessivel.png
      :scale: 35 %
      :alt: pontoinacessivel.png
      :align: center

.. _nivelamento geométrico:

Nivelamento geométrico
----------------------

O nivelamento geométrico (NG) é aquele em que, a DN, a cota ou a altitude,
é calculada por meio de visadas horizontais às miras localizadas sobre
os pontos de interesse :cite:`NBR13133`. Os equipamentos topográficos
que fazem visadas horizontais são denominados de níveis. 

Se o NG é realizado de uma única estação, ponto em que o nível é estacionado,
denomina-se nivelamento geométrico simples (NGS). Caso tenha que ocorrer
mudança de estação, denomina-se de nivelamento geométrico composto
(NGC). A seguir são descritos uma breve explicação das duas metodologias.

Nivelamento geométrico simples (NGS)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Na :numref:`fig_nivelageome1` é apresentado o procedimento para
o nivelamento entre dois pontos, o :math:`A` e o :math:`B`. O nível é estacionado,
de preferência em um ponto intermediário à :math:`A` e :math:`B`. Ao primeiro
ponto em que é realizada a leitura na mira, denomina-se de ponto de
:math:`\mathrm{ré}`, no nosso exemplo o ponto
:math:`A`. Este ponto deve ter a sua :math:`\mathrm{cota}` ou altitude conhecida, será a
:math:`RN`. Uma vez conhecida a :math:`\mathrm{cota}` ou a altitude do ponto de ré, pode-se
calcular a altura do instrumento :math:`\mathrm{AI}`,
Equação :eq:`eq:AI`), distância vertical do centro do equipamento
ao Datum vertical utilizado.

.. math::
   \mathrm{AI}=\mathrm{cota+\text{ré}}
   :label: eq:AI

Os demais pontos de um NGS denominam-se de pontos de vante. Logo,
a leitura da mira em :math:`B`, é de vante. A :math:`\mathrm{cota}` dos pontos de vante
é calculada subtraindo da :eq:`eq:AI` o valor da sua leitura de vante,
isto é:

.. math::
   \mathrm{cota=AI-vante}.
   :label: eq:cotaNG

Observe que o conceito de :math:`\mathrm{AI}` para o NG é diferente do que foi visto
no nivelamento trigonométrico e taqueométrico, onde a altura do instrumento
:math:`\mathrm{AI}` é a distância vertical do centro do equipamento ao piquete
ou ao marco do ponto onde o equipamento está estacionada.

.. _fig_nivelageome1:

.. figure:: /images/capitulo9/fig_nivelageome1.png
   :scale: 35 %
   :alt: pontoinacessivel.png
   :align: center

   Nivelamento geométrico simples.


De acordo com a :numref:`fig_nivelageome1` a, suponha que se deseja
calcular a :math:`\mathrm{cota}` de :math:`B` e a :math:`\mathrm{DN}_{AB}`. O ponto :math:`A`
tem :math:`\mathrm{cota}` de :math:`253,543\,\text{m}`, :math:`RN` do levantamento. Inicialmente estaciona-se
o nível em um ponto intermediário aos pontos :math:`A` e :math:`B` e,
sobre o ponto :math:`A`, é colocada a mira. Não há a necessidade do
nível estar alinhado com os pontos :math:`A` e :math:`B`, no entando
a distância deveria ser aproximadamente igual aos pontos de interesse.
A mira em :math:`A` é visada com o nível e, realiza-se a leitura, denominada
de :math:`\mathrm{ré}`. Considere o valor de :math:`\mathrm{ré}` de :math:`3,580\,\text{m}`
(:numref:`fig_nivelageome1` b).
Pode-se, de acordo com a Equação :eq:`eq:AI`, calcular a AI:

:math:`\mathrm{AI}=253,543+3,580=257,123\,\text{m}`.

O próximo passo é deslocar a mira para :math:`B`, ponto de :math:`\mathrm{vante}`. Faz-se
a leitura com a luneta do nível apontado sobre a mira em :math:`B`, onde,
para este exemplo, o valor de :math:`0,643\,\text{m}`, leitura de :math:`\mathrm{vante}`
(:numref:`fig_nivelageome1` c).
Desta forma, a :math:`\mathrm{cota}_{\textit{B}}` é (Equação :eq:`eq:cotaNG`):

:math:`\mathrm{cota}_{B}=257,123-0,643=256,480\,\text{m}`.

Uma vez conhecidas as :math:`\mathrm{cotas}` de :math:`A` e :math:`B`, a
:math:`\mathrm{DN}_{\textit{AB}}` (:numref:`fig_nivelageome1` d) será:

.. math::
   \mathrm{DN}_{\textit{AB}}&=\mathrm{cota}_{B}-\mathrm{cota}_{A}\\
   \mathrm{DN}_{\textit{AB}}&=256,480-253,543\\
   \mathrm{DN}_{\textit{AB}}&=2,937\text{ m.}

----

Supondo-se que há outras estacas (pontos) a serem levantados, os dados
terão que ser tabelados de forma organizada. Na :numref:`tab_tabelaNGS`
é apresentado um exemplo de caderneta de campo para o NGS com cinco
pontos :math:`A,\,B,\,C,\,D` e :math:`E`. Nesta Tabela, a coluna: (**I**) é a posição onde
a mira foi estacionada e se fez a leitura; (**II**) é o valor da leitura
de :math:`\mathrm{ré}`, o primeiro ponto visado; (**III**) é altura do instrumento (Equação
:eq:`eq:AI`); (**IV**) são as leituras de :math:`\mathrm{vante}` e; (**V**), com exceção da
estaca :math:`A`, referência de nível, são as :math:`\mathrm{cotas}`
calculadas (Equação :eq:`eq:cotaNG`).
Para o cálculo das :math:`\mathrm{cotas}`, a :math:`\mathrm{AI}` é sempre igual a
:math:`257,123\,\text{m}`, modificando-se
apenas os valores das leituras de :math:`\mathrm{vante}` dos pontos. Um fato importante
a ser observado nesta Tabela de nivelamento, é que não é possível
conhecer a distribuição espacial dos pontos na superfície terrestre,
uma vez que não são apresentadas, por exemplo, as suas respectivas
coordenadas. Se for necessário conhecer a distribuição espacial dos
pontos no plano, terá que ser realizado o levantamento planimétrico
para os pontos do NG. A título de ilustração, a :numref:`cap_alt_niv_geometrico_espaco`
apresenta uma possível configuração espacial dos pontos referentes
aos dados da :numref:`tab_tabelaNGS` em uma superfície topográfica.

.. _tab_tabelaNGS:

.. figure:: /images/capitulo9/tabelaNGS.png
   :scale: 35 %
   :alt: tabelaNGS.png
   :align: center

   Exemplo de caderneta de campo.

.. _cap_alt_niv_geometrico_espaco:

.. figure:: /images/capitulo9/cap_alt_niv_geometrico_espaco.png
   :scale: 35 %
   :alt: cap_alt_niv_geometrico_espaco.png
   :align: center

   Exemplo da distribuição espacial dos pontos do NGS da :numref:`tab_tabelaNGS`.

----

.. admonition:: :exem:`Exemplo 9` Com os dados da caderneta de campo de um NGS, figura
   a seguir, calcule as :math:`\mathrm{cotas}` dos pontos
   :math:`1,\,2,\,3,\,4` e :math:`5`. Considere o
   ponto :math:`0` como sendo a :math:`\mathrm{RN}`,
   com :math:`\mathrm{cota}` atribuída de :math:`100\,\text{m}`.

   .. figure:: /images/capitulo9/cap_niv_intr_NG_exe1.png
      :scale: 35 %
      :alt: cap_niv_intr_NG_exe1.png
      :align: center

   :solucao:`Solução:`
   De acordo com as Equações :eq:`eq:AI` e :eq:`eq:cotaNG`,
   a solução é apresentada na Tabela que segue, onde, em negrito são
   as respostas e, em parenteses, os cálculos realizados.

   .. table:: Compensação do erro angular pelo método linear
       :widths: 1 1 2 1 2
       :header-alignment: ccccc
       :column-alignment: ccrcr
       :column-dividers:  none single single single single none

       ============= ==================== ========================================= ========================= ==========================================
       Ponto         :math:`\mathbf{ré}`  :math:`\mathbf{AI}`                       :math:`\mathbf{vante}`    :math:`\mathbf{cota}`
       ============= ==================== ========================================= ========================= ==========================================
       :math:`0`     :math:`1,937`        :math:`\mathbf{101,937}\,(100+1,937)`                               :math:`100`
       :math:`1`                                                                    :math:`2,189`             :math:`\mathbf{99,748}\,(101,937-2,189)`
       :math:`2`                                                                    :math:`3,105`             :math:`\mathbf{98,832}\,(101,937-3,105)`
       :math:`3`                                                                    :math:`0,825`             :math:`\mathbf{101,112}\,(101,937-0,825)`
       :math:`4`                                                                    :math:`0,194`             :math:`\mathbf{101,743}\,(101,937-0,194)`
       :math:`5`                                                                    :math:`0,491`             :math:`\mathbf{101,446}\,(101,937-0,491)`
       ============= ==================== ========================================= ========================= ==========================================

----

Nivelamento geométrico composto (NGC)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Quando de uma única estação, ponto em que o nível é estacionado, não
se consegue fazer a visada para o ponto de interesse, há a necessidade
de realizar a mudança do equipamento, para que os outros pontos possam
ser medidos. A este NG, com mudança de estação, denomina-se de nivelamento
geométrico composto (NGC).

O procedimento inicial do NGC é o mesmo do NGS. Inicialmente faz-se
a leitura de :math:`\mathrm{ré}`
em um ponto de :math:`\mathrm{cota}` conhecida ou estabelecida (RN). Os próximas pontos
a serem visados também são denominadas de pontos   :math:`\mathrm{vante}`,
todavia, eles podem ser de dois tipos, **ponto intermediário** :math:`(\mathrm{PI})` ou
**ponto de mudança** :math:`(\mathrm{PM})`. Será :math:`\mathrm{PI}` até o penúltimo ponto a ser visado
de uma determinada estação e, :math:`\mathrm{PM}` é o último ponto observado da estação.
Desta forma, no NGC, após a leitura de um :math:`\mathrm{PM}`, o equipamento é colocado
em outra estação, tendo que realizar em seguida, a sua primeira visada,
sobre a mira no :math:`\mathrm{PM}` da estação anterior. Esta leitura, agora realizada
da nova estação, também é denominada de :math:`\mathrm{ré}`. Pode-se então calcular
a nova :math:`\mathrm{AI}` (Equação :eq:`eq:AI`).

As :math:`\mathrm{cotas}` dos pontos :math:`\mathrm{vante}` de uma nova estação, que poderão ser :math:`\mathrm{PI}`
ou :math:`\mathrm{PM}`, serão calculadas pela Equação :eq:`eq:cotaNG`. O último ponto
medido no NGC é sempre denominado de :math:`\mathrm{PM}`.

Os cálculos do NGC podem ser verificados de acordo com a Equação :eq:`eq:verificacaongc`.
Nesta verificação, não é observado se o trabalho foi bem realizado
ou não. Ela apenas informa se os cálculos foram feitos corretamente.
A avaliação da qualidade do levantamento será avaliada na seção
:eq:`eq:tolerancia_nivelamento`.

.. math::
   \Sigma\mathrm{{r\acute{e}}}-\Sigma\mathrm{PM}=\mathrm{\text{cota}_{final}}-\mathrm{\text{cota}_{inicial}}.
   :label: eq:verificacaongc

----

.. admonition:: :exem:`Exemplo 10` Com os dados de um NGC coletados
   em campo conforme o esquema gráfico a seguir, calcule as :math:`\mathrm{cotas}` das estacas
   (pontos materializados em campo por estacas).

   .. figure:: /images/capitulo9/cap_niv_intr_NGC_exe1.png
      :scale: 35 %
      :alt: cap_niv_intr_NGC_exe1.png
      :align: center

   :solucao:`Solução:`
   Solução na Tabela abaixo, sendo que em negrito
   são  os valores calculados e, entre parenteses, os cálculos realizados.

   .. table:: Compensação do erro angular pelo método linear
       :widths: 1 1 2 1 2
       :header-alignment: cccccc
       :column-alignment: ccrccr
       :column-dividers:  none single single single single single none

       ========== ===================== =========================================== ===================== ====================== =========================================
       Estaca     :math:`\mathbf{ré}`   :math:`\mathbf{AI (cota+ré)}`               :math:`\mathbf{PI}`   :math:`\mathbf{PM}`    :math:`\mathbf{cota (AI-vante)}`
       ========== ===================== =========================================== ===================== ====================== =========================================
       :math:`0`  :math:`0,796`         :math:`\mathbf{200,796}(200,000+0,796)`                                                  200,000
       :math:`1`                                                                    :math:`1,491`                                :math:`\mathbf{199,305}(200,796-1,491)`
       :math:`2`  :math:`0,264`         :math:`\mathbf{197,359}(197,095+0,264)`                           :math:`3,701`          :math:`\mathbf{197,095}(200,796-3,701)`
       :math:`3`  :math:`0,450`         :math:`\mathbf{193,920}(193,470+0,450)`                           :math:`3,889`          :math:`\mathbf{193,470}197,359-3,889)`
       :math:`4`                                                                    :math:`1.982`                                :math:`\mathbf{191,938}(193,920-1,982)`
       :math:`5`  :math:`0,868`         :math:`\mathbf{191,142}(190,274+0,868)`                           :math:`3,646`          :math:`\mathbf{190,274}(193,920-3,646)`
       :math:`6`                                                                                          :math:`3,317`          :math:`\mathbf{187,825}(191,142 -3,317)`
       ========== ===================== =========================================== ===================== ====================== =========================================

   Verificando os calculos conforme :eq:`eq:verificacaongc`:

   .. math::
      \Sigma\mathrm{{r\acute{e}}}-\Sigma\mathrm{PM}&=\mathrm{\text{cota}_{final}}-\mathrm{\text{cota}_{inicial}}\\
      2,378-14,553&=187,825-200,000\\
      -12,175&=-12,175\,\text{(OK!)}

----

Cuidados no nivelamento geométrico
----------------------------------

Alguns cuidados devem ser tomados em um NG a fim de se obter melhores
resultados no NG. Podendo-se citar, por exemplo :cite:`NBR13133`:

- medir sempre pontos de destaque no terreno, como depressões e elevações;
- repetição das medidas;
- utilização de equipamentos precisos;
- sejam estabelecidos pontos materializados para o controle do nivelamento;
- realização do nivelamento e o contra-nivelamente em horários destintos.
  Assim, pode-se calcular a diferença entre o desnível nas duas medições,
  e compará-lo com a tolerância do nivelamento (seção :ref:`tolerancia_nivelamento`);
- os comprimentos das visadas de :math:`\mathrm{ré}` e de :math:`\mathrm{vante}` devem ser de no máximo
  :math:`80\,\text{m}`, minimizando os erros de refração e curvatura da terra, além
  de facilitar as leituras na mira. As distâncias podem ser medidas
  utilizando-se uma trena, ou mais comumente, com a leitura dos   :math:`rs`, :math:`rm`
  e :math:`ri` e aplicando a fórmula taqueométricas. As informações de
  distâncias podem ser inseridas na tabela de campo do NGC com a inclusão
  de mais duas colunas, indicando as distâncias do nível ao ponto de
  :math:`\mathrm{ré}` e de :math:`\mathrm{vante}` (:cite:`NBR13133`, página 30);
- as visadas de :math:`\mathrm{ré}` e de :math:`\mathrm{vante}` devem ser à uma altura em relação ao solo,
  superior a :math:`0,50\,\text{m}`, com a finalidade de minimizar o problema de reverberação;
- a mira deve ser de madeira e dobrável, não de encaixe, devendo ser
  apoiada sobre sapatas. A sapara é um equipamento que é colocado no solo,
  e permite que a mira, sobre ele, gire sem se deslocar no ponto.

.. _tolerancia_nivelamento:

Tolerância para o nivelamento
-----------------------------

Em um nivelamento, é sempre prudente realizar uma avaliação da qualidade
do levantamento. A :cite:t:`NBR13133` estabelece os métodos, os
equipamentos e as tolerâncias que serão permitidas, que dependerá
da escala, da equidistância das curvas de nível e da densidade de
pontos medidos.

A norma estabelece 4 classes de nivelamento: IN e IIN, nivelamento
geométrico; IIIN, nivelamento trigonométrico e; IVN, nivelamento taqueométrico.
Para cada classe é estabelecida a metodologia, equipamentos e a tolerância
do erro de fechamento do nivelamento :math:`(\textit{T}_{\textit{nivelamento}})`,
para ser considerado aceitável:

.. math::
   T_{\textit{nivelamento}}=a\,\sqrt{\text{K}}
   :label: eq:tolerancia_nivelamento


em que: :math:`a` dependerá da classe do nivelamento, por exemplo
para a classe IIN [#f1]_, :math:`a=20\,\text{mm}`; :math:`K` é a extensão
nivelada em :math:`km`, medida num único
sentido. Para os demais valores de :math:`a`, consultar NBR13133.

O erro de nivelamento pode ser obtido, por exemplo, das seguintes
formas:

a. se for uma poligonal de nivelamento fechada, ponto de partida é o
   ponto de chegada, é só calcular a diferença entre as :math:`\mathrm{cotas}` de partida
   e de chegada;
b. se for aberta e, se conhece a :math:`\mathrm{cota}` do ponto de saida e final,
   o erro será a diferença entre a :math:`\mathrm{DN}\,\text{m}` edida em campo e a
   :math:`\mathrm{DN}` conhecida entre os pontos, ou comparando a cota final conhecida com
   a medida;
c. se a poligonal for aberta, mas sem conhecimento das :math:`\mathrm{cotas}` de partida
   e de chegada, é realizado o nivelamento e o contra-nivelamente, e
   a :math:`\mathrm{DN}` entre esses dois levantamentos, é o erro do nivelamento.

O procedimento para a compensação do erro do nivelamento pode ser,
para o caso: (a) e (b), distribuir de forma linear o erro entre as
estacas; e (c) distribuir o erro linearmente, por exemplo, nas :math:`\mathrm{cotas}`
do contra-nivelamento e, calcular a média entre as contas do nivelamento
e do contra-nivelamente compensada. Maiores detalhes e outros métodos
de ajuste para nivelamento podem ser encontrados em:
:cite:`comastri` [pg. 84-89], :cite:`MCCORMAC` [pg. 122-125] e
:cite:`WOLF` [pg. 406-411].

----

.. admonition:: :exem:`Exemplo 11` Foram realizados um nivelamento e um contra-nivelamento de 800 m
   de extensão. A :math:`\mathrm{DN}`, entre o ponto inicial e final do nivelamento e
   do contra-nivelamento, foram de :math:`8,581\,\text{m}` e :math:`-8,603\,\text{m}`, respectivamente.
   Este nivelamento é da classe IIN, de acordo com a NBR13133. Pergunta-se:
   o levantamento é aceitável?

   :solucao:`Solução:` Como se têm as medidas de :math:`\mathrm{DN}` do nivelamento e do contra-nivelamento,
   pode-se obter o erro do nivelamento :math:`(\textit{erro}_{\textit{nivelamento}})`,
   dada pelas diferenças das DNs em valores absolutos:

   .. math::
      \textit{erro}_{\textit{nivelamento}}&=\left|-8,603\right|-\left|8,581\right|\\
      &=0,022\text{ m.}

   Para a classe de IIN, o parâmentro  :math:`a` da Equação :eq:`eq:tolerancia_nivelamento`
   é de :math:`20\,\text{mm}`. Com :math:`K` de :math:`0,8\,\text{km}`,
   o erro máximo a ser tolerado:

   .. math::
      \textit{T}_{\mathit{nivelamento}}=20\,\text{mm}\sqrt{0,8}=17,9\,\text{mm}.

   Como :math:`\textit{erro}_{\textit{nivelamento}}>\textit{T}_{\textit{nivelamento}}`,
   o levantamento não é aceitável, novo levantamento deve ser realizado
   e, posterioremente, verificada se está de acordo com a tolerância.

----

Perfil topográfico
------------------

O perfil topográfico é um gráfico em que, o eixo-  x} representa
a distância horizontal, geralmente dado por números de estacas, e
o eixo-:math:`y` os valores das :math:`\mathrm{cotas}` ou altitudes das respectivas
estacas, determinadas em um nivelamento. A :math:`\mathrm{DH}` entre as estacas, na
maioria dos casos é constante, de :math:`10\,\text{m}` em :math:`10\,\text{m}` ou de :math:`20\,\text{m}` em :math:`20\,\text{m}`,
de acordo com o relevo. A metodologia mais empregada de nivelamento
para a determinação do perfil topográfico é o nivelamento geométrico,
por ser o mais preciso.

No desenho do perfil deve-se utilizar escalas para o eixo-:math:`x`,
escala horizontal :math:`(\mathrm{EH})`, distinta daquela
utilizada no eixo-:math:`y`, escala vertical
:math:`(\mathrm{EV})`. As escalas devem ser diferentes devido às variações das DHs
serem, na grande maioria dos casos, superiores às das DNs. Desta forma,
se colocadas em mesma escala, não se poderia avaliar o perfil do terreno
de forma adequada. Uma vez conhecida a EH, pode-se considerar inicialmente
para teste, :math:`\mathrm{EV}=10\mathrm{EH}` :cite:`godoy`. Deve-se verificar
se este valor é adequado para construção do perfil no tamanho do papel
utilizado. Se necessário escolhe-se outra :math:`\mathrm{EV}`.

Na :numref:`cap_niv_perfil` é apresentado o perfil do NG do Exemplo 10.
As estacas espaçadas em
:math:`20\,\text{m}`, no entanto, uma estaca a mais foi medida, localizada entre
a :math:`3` e a :math:`4`, a estaca :math:`3+12\,\text{m}`.
Isto é, distante :math:`12\,\text{m}` da estaca
número :math:`3`. A necessidade da medição de uma estaca intermediária pode
se dar por diversos motivo, por exemplo, cotar uma elevação ou depressão
no terreno. Neste exemplo, a estaca :math:`3+12\,\text{m}` está indicando
a mudança de direção do levantamento. Entre as estacas :math:`0` e :math:`3+12\,\text{m}`
o :math:`Az` é de :math:`137^{\circ}22'`, posteriormente o :math:`Az`
é de :math:`101^{\circ}49'`.

Além dos azimutes, pode-se também, apresentar no gráfico do perfil
topográfico, informações referentes a :math:`\mathrm{DH}`.
Por exemplo, na :numref:`cap_niv_perfil`
é apresentada a :math:`\mathrm{DH}` entre a estaca 0 e :math:`3+12\,\text{m}`,
de :math:`72\,\text{m}`,
e entre :math:`3+12\,\text{m}` e :math:`6`, de :math:`48\,\text{m}`.

.. _cap_niv_perfil:

.. figure:: /images/capitulo9/cap_niv_perfil.png
   :scale: 35 %
   :alt: _cap_niv_perfil.png
   :align: center

   Representação gráfica do perfil topográfico do Exemplo 10.


Greide
------

Juntamente com o perfil do terreno, pode-se ter um greide, também
denominado de rampa, com uma declividade (Equações :eq:`eq:c1` e :eq:`eq:c2`).
O greide pode representar, por exemplo, o eixo onde uma estrada passará,
um canal de irrigação ou a posição de uma rede de esgoto. Observando
as :math:`\mathrm{cotas}` do perfil topográfico com as do greide, pode-se também avaliar
as áreas que serão cortadas ou aterradas, ou a profundidade de escavamento
para posicionamento de uma rede de esgoto. A :math:`\mathrm{DN}` entre a cota greide
:math:`(\mathrm{cota}_{\text{greide}})` e a :math:`\mathrm{cota}`
do terreno :math:`(\mathrm{cota}_{\text{terreno}})`
é denominada de :math:`\mathrm{cota}` vermelha:

.. math::
   \mathrm{CV}=\mathrm{cota}_{\mathrm{greide}}-\mathrm{cota}_{\mathrm{terreno}}
   :label: eq:cv


Desta forma, a  :math:`\mathrm{CV}`  em um ponto, indicará se nele será realizado corte
ou aterro, em que:

- se  :math:`\mathrm{CV}`  for positiva,
  :math:`\mathrm{cota_{greide}}>\mathrm{cota_{terreno}}`,
  é um ponto de aterro;
- se  :math:`\mathrm{CV}`  for negativa,
  :math:`\mathrm{cota_{greide}}<\mathrm{cota_{terreno}}`,
  é um ponto de corte e;
- se  :math:`\mathrm{CV}`  for igual a zero,
  :math:`\mathrm{cota_{greide}}=\mathrm{cota_{terreno}}`,
  é um ponto de passagem :math:`(PP)`,
  não haverá nem corte nem aterro.

Sempre que o sinal algébrico da  :math:`\mathrm{CV}`  mudar entre estacas, haverá um
PP. Na Tabela abaixo é apresentado um exemplo de
uma caderneta de campo para um NGC com: as estacas de :math:`20\,\mathrm{m}` em :math:`20\,\mathrm{m}`;
as :math:`\mathrm{cotas}` do terreno calculadas; um greide arbitrário; e as respectivas
:math:`\mathrm{CV's}`. Na :numref:`cap_niv_perfil_2` é apresentada a representação gráfica
destes dados, inclusive com a posição dos PPs. O perfil do terreno
apresentado começa na estaca :math:`5+13,5\,\text{m}` de cota de :math:`200,00\,\text{m}` e
termina na estaca :math:`10+15,1\,\text{m}` de cota :math:`202,1\,\text{m}`,
ou seja, uma DN total de :math:`2,11\,\text{m}`, com o terreno em
aclive entre a primeira estaca e a última.

.. table:: Apresentação da :math:`\mathrm{CV}` em uma caderneta de campo.
    :widths: 1 1 1 1 1 1 1 1
    :header-alignment: cccccccc
    :column-alignment: cccccccc
    :column-dividers:  none single single single single single single single

    ========================= =================== =================== =================== =================== ==================================== =================================== ====================
    Estacas                   :math:`\mathrm{ré}` :math:`\mathrm{AI}` :math:`\mathrm{PI}` :math:`\mathrm{PM}` :math:`\text{cota}_{\text{terreno}}` :math:`\text{cota}_{\text{greide}}` :math:`\mathrm{CV}`
    ========================= =================== =================== =================== =================== ==================================== =================================== ====================
    :math:`5+13,5\,\text{m}`  :math:`1,75`        :math:`201,75`                                              :math:`200,00`                       :math:`200,465`                     :math:`0,465`
    :math:`6`                                                         :math:`1,43`                            :math:`200,32`                       :math:`200,530`                     :math:`0,210`
    :math:`7`                                                         :math:`0,67`                            :math:`201,08`                       :math:`200,730`                     :math:`-0,350`
    :math:`8`                                                         :math:`0,50`                            :math:`201,25`                       :math:`200,930`                     :math:`-0,320`
    :math:`9`                 :math:`0,79`        :math:`202,43`                          :math:`0,11`        :math:`201,64`                       :math:`201,130`                     :math:`-0,510`
    :math:`10`                                                        :math:`1,59`                            :math:`200,84`                       :math:`201,330`                     :math:`0,490`
    :math:`10+15,1\,\text{m}`                                                             :math:`0,32`        :math:`202,11`                       :math:`201,481`                     :math:`-0,629`
    ========================= =================== =================== =================== =================== ==================================== =================================== ====================

Mais uma vez, a interpretação dos números das estacas intermediárias
é: *i*) o primeiro número corresponde ao número da estaca anterior;
e *ii*) o segundo número, caso ocorra, é a fração que a estaca
se encontra em relação a estaca anterior. Então, a estaca inicial
:math:`5+13,5\,\text{m}` está :math:`13,5\,\text{m}` à frente da estaca número
:math:`5`, e :math:`6,5\,\text{m}` atrás
da estaca :math:`6` :math:`(20\,\text{m}-13,5\,\text{m})`. Segundo esta mesma linha
de raciocínio, somando as distâncias entre as estacas, tem-se que
a :math:`\mathrm{DH}` entre as estacas inicial e final é de
:math:`101,6\,\text{m}` :math:`(6,5+20\cdot4+15,1`).

.. _cap_niv_perfil_2:

.. figure:: /images/capitulo9/cap_niv_perfil_2.png
   :scale: 35 %
   :alt: cap_niv_perfil_2.png
   :align: center

   Perfil topográfico, greide e  :math:`\mathrm{CV}`  dos dados apresentados na Tabela acima.

----

.. admonition:: :exem:`Exemplo 12` Com os dados da Tabela acima, pergunta-se:
   (a) qual é a declividade do greide (\%);
   (b) qual a :math:`\mathrm{cota}` do greide na estaca :math:`8`;
   (c) a estaca a :math:`\mathrm{cota}` do segundo :math:`\mathrm{PP}`.

   :solucao:`Solução:`  Questão (a): considerando as :math:`\mathrm{cotas}`
   do greide nas estacas :math:`5+13,5\,\text{m}` e
   :math:`10+15,1\,\text{m}` e a :math:`\mathrm{DH}` entre estas estacas
   de :math:`101,6\,\text{m}`:

   .. math::
      d(\%) &=100\frac{\mathrm{DN}}{\mathrm{DH}}\\
      &=\frac{201,481-200,465}{101,6}100\\
      &=1\%.

   Questão (b): as :math:`\mathrm{cotas}` do greide, que na Tabela acima
   são apenas apresentadas, são calculadas conhecendo-se: **i**) a declividade
   do greide, neste caso de :math:`1\%` e, **ii**) as
   :math:`\mathrm{DH's}` entre a primeira estaca
   às estacas de interesse, para o exercício, a 8.
   A :math:`\mathrm{DH}` é de :math:`46,5\,\text{m}`
   :math:`{(6,5+20\cdot2)}`. Como a declividade do greide é de :math:`1`\%, tem-se
   que para uma :math:`\mathrm{DH}` de :math:`100\,\text{m}` neste greide, há uma :math:`\mathrm{DN}` de :math:`1\,\text{m}`, então,
   para uma :math:`\mathrm{DH}` de :math:`46,5\,\text{m}`,
   tem-se uma :math:`\text{DN}_{\mathrm{greide(8,5+13,5 m)}}`
   de :math:`0,465\,\mathrm{m}` :math:`{\left(\frac{46,5}{100}1\right)}`, logo:

   .. math::
      \mathrm{cota}_{\mathrm{greide, 8}}&=\mathrm{cota}_{\mathrm{greide,\,[5+13,5\,m]}}+\mathrm{DN}_{\mathrm{greide,\,([8],\,[5+13,5 m])}}\\
      &=200,465+0,465\\
      &=200,930\,\text{ m}.

   Questão (c): o segundo :math:`\mathrm{PP}` encontra-se entre as estacas
   :math:`9` e :math:`10`. A figura a seguir apresenta uma ampliação do perfil
   do terreno e do greide entre esras estacas. As  :math:`\mathrm{CV}` s são apresentadas
   em valores absolutos, uma vez que se vai avaliar as distância que
   separam o greide do terreno em valores absolutos. Seja   :math:`x` a
   DH da estaca :math:`9` ao :math:`\mathrm{PP}`.
   Como a :math:`\mathrm{DH}` entre as estacas é de :math:`20\,\text{m}`, a DH
   de PP à estaca 10 será de :math:`20-x`. Por semelhança de triângulos:

   .. math::
      \frac{x}{0,51} &=\frac{20-x}{0,49}\\
      x&=\frac{20\cdot0,51}{0,49+0,51}\\
      x&=10,2\,\text{ m}.

   Desta forma, a estaca no ponto de passagem é :math:`9+10,2\,\text{m}`}.

   .. figure:: /images/capitulo9/cap_niv_perfil_ex.png
      :scale: 35 %
      :alt: cap_niv_perfil_ex.png
      :align: center

   Para calcular o valor da :math:`\mathrm{cota}` no :math:`\mathrm{PP}`,
   a :math:`\mathrm{DH}` entre a estaca
   :math:`{5+13,5\,\text{ m}}` e a estaca no :math:`\mathrm{PP}`,
   :math:`9+10,2\,\text{ m}`, é de
   :math:`76,7\,\text{ m}\,(6,5+20\cdot3+10,2)`. Sendo a declividade do greide de
   :math:`1\%`, a :math:`\mathrm{DN}` entre estas estacas é de :math:`0,767\,\text{ m}`
   :math:`\left(\frac{76,7}{100}1\right)`}. Desta forma:

   .. math::
      \mathrm{cota}_{9+10,2\,\text{m}}&=\mathrm{cota}_{5+13,5\,\text{m}}+\mathrm{DN}\\
      &=200,465+0,767\\
      &=201,232\,\text{m}.

----

Exercícios
==========

:exem:`1)` Qual o erro que resultará se, a correção dos efeitos
da curvatura da terra e de refração, for negligenciado em nivelamentos
trigonométricos para pontos separados em:

a. :math:`100\,\text{m}`;
b. :math:`500\,\text{m}`;
c. :math:`1\,500\,\text{m}`;
d. :math:`4\,000\,\text{m}`;

:exem:`Resp.:` a) :math:`0,000\,7\,\text{m}` ; b) :math:`0,016\,9\,\text{m}` ; c) :math:`0,151\,9\,\text{m}` ; d) :math:`1,080\,4\,\text{m}` .

----

:exem:`2)` Qual o princípio de funcionamento dos barômetros?

:exem:`Resp.:` ver texto e referências.

----

:exem:`3)` Com uma estação total no ponto :math:`A`, de altitude :math:`1.392,869\,\text{m}`,
visou-se um prisma sobre o ponto :math:`P`, registrando-se os seguintes valores:
:math:`z=81^{\circ}2'45''`; :math:`\mathrm{DI_{AP}}=792,298\,\text{m}`; :math:`\textit{ai}=1,521\,\text{m}`;
:math:`\textit{ap}=1,775\,\text{m}`. Considerando o erro da curvatura da
terra e o de refração, qual a altitude em :math:`P`?

:exem:`Resp.:` Altitude em :math:`P=1.515,972\,\text{m}` .

----

:exem:`4)` Um nivelamento foi realizado da estação :math:`A` para :math:`B`,
sendo a altitude de :math:`B` de :math:`409,56\,\text{m}`. Obteve-se os seguintes
dados: :math:`z_{\mathrm{AB}}=86^{\circ}8'47''`; :math:`\mathrm{DI_{AB}}=3\,524,68\,\text{m}`;
:math:`ai_{A}=1,440\,\text{m}` (altura do instrumento em :math:`A`); altura do centro do refletor :math:`(ap)`
no ponto :math:`B` de :math:`2,510\,\text{m}`. Calcular a altitude do ponto :math:`A`.
Considere o efeito de curvatura e o de refração terrestre.

:exem:`Resp.:` Altitude em   A} = :math:`172,911\,\text{m}` .

----

:exem:`5)` A distância inclinada e o ângulo zenital foram medidos
de   :math:`X` para :math:`Y`, sendo
:math:`\mathrm{DI}=474,3\,\text{m}` e :math:`z=93^{\circ}13'46''`,
respectivamente. A altura do prisma e a altura do equipamento foi
a mesma. Se a elevação de :math:`X` foi de :math:`837,5\,\text{m}` acima do Datum,
qual a elevação de :math:`Y`?

:exem:`Resp.:` Elevação de :math:`Y=810,781\,\text{m}`.

----

:exem:`6)` De um teodolito estacionado no ponto :math:`13`, de altitude
:math:`492,7\,\text{m}`, foi visada a mira no ponto :math:`14`,
realizando as seguintes medidas: :math:`z=92^{\circ}27'`;
:math:`\textit{ri}=1,000\,\text{m}`; :math:`\textit{rm}=1,598\,\text{m}`;
:math:`\textit{rs}=2,196\,\text{m}`; :math:`\textit{ai}=1,7\,\text{m}`. Pergunta-se:

- qual a :math:`DN` entre os pontos 13 e 14?
- qual a altitude do ponto 14?

:exem:`Resp.:`  :math:`\mathrm{DN}=5,006\,\text{m}`; altitude do ponto :math:`14` é de
:math:`487,694\,\text{m}`.

----

:exem:`7)`  Em nivelamento taqueométrico do ponto :math:`X` para
:math:`Y`, foram realizadas as seguinte leituras: :math:`z=86^{\circ}10'`;
:math:`\textit{ri}=1,700\,\text{m}`; :math:`\textit{rs}=2,300\,\text{m}`. Sabendo-se
que a altura do instrumento foi igual a leitura do retículo médio.
Pergunta-se qual a :math:`\mathrm{DN}` entre os pontos :math:`X` e :math:`Y`?

:exem:`Resp.:`  :math:`\mathrm{DN}=4,002\,\text{m}`

----

:exem:`8)` Com o objetivo de determinar a altitude do ponto
inacessível, :math:`P`, foram realizadas as seguintes medidas: comprimento
de uma base :math:`AB` de :math:`50\,\text{m}`;
ângulos horizontais :math:`\widehat{PAB}`
:math:`(\alpha=67^{\circ}37'49'')` e :math:`\widehat{ABP}`
:math:`(\beta=52^{\circ}25'38'')`,
conforme :numref:`triangle`
(plano topográfico);
:math:`\textit{ai}_{\textit{A}}=1,745\,\text{m}`; e ângulo zenital da luneta
em   :math:`A` visando :math:`P` de :math:`57^{\circ}27'31''`. Sabe-se que
a altitude em   :math:`A` é de :math:`564,693\,\text{m}`. Pede-se:

- a  :math:`\mathrm{DH}` entre :math:`A` e :math:`P`;
- a altitude de :math:`P`.

.. _triangle:

.. figure:: /images/capitulo9/triangle.png
   :scale: 35 %
   :alt: triangle.png
   :align: center

   Ponto inacessível.

:exem:`Resp.:` :math:`\mathrm{DH}_{AP}=45,786\,\text{m}`; Altitude   P} = :math:`595,654`
m.

----

:exem:`9)` Calcule a altitude ortométrica :math:`(H)` para uma estação
em que a altitude geométrica :math:`(h)`, cuja a medida com receptor GPS foi de
:math:`59,1\,\text{m}`. Sabe-se que a ondulação geoidal :math:`(N)`
para a estação é de :math:`-21,3\,\text{m}`.

:exem:`Resp.:` :math:`H=80,4\,\text{m}`.

----

:exem:`10)` Sobre uma referência de nivel (RN) do IBGE foi estacionado um receptor
GNSS, utilizando como método de cálculo da posição, a diferença de
fase. Foi obtida com este receptor a altitude de :math:`329,673\,\text{m}` (geométrica).
Consultando o *site* `HgeoHNOR2020 <https://www.ibge.gov.br/geociencias/informacoes-sobre-posicionamento-geodesico/servicos-para-posicionamento-geodesico/31283-hgeohnor2020-modeloconversaoaltitudesgeometricasgnss-datumverticalsgb.html?edicao=31284&t=processar-os-dados>`_,
foi verificado que a altitude ortométrica
deste marco é de :math:`335,958\,\text{m}`. Qual é a ondulação geoidal deste ponto?

:exem:`Resp.:` :math:`N=-6,285\,\text{m}`.

----

:exem:`11)` Utilizando-se um receptor GNSS, configurado para
trabalhar com o Datum `SIRGAS2000 <https://geoftp.ibge.gov.br/informacoes_sobre_posicionamento_geodesico/rede_planialtimetrica/relatorio/rel_sirgas2000.pdf>`_, obteve-se os seguintes dados de
um determinado ponto: coordenadas :math:`20,7615^{\circ}` de Latitude Sul
e :math:`41,5354^{\circ}` de Longitude Oeste e, altitude geométrica de
272,13 m. Calcule a altitude em relação ao geóide (altitude ortométrica).
Utilizar o programa `HgeoHNOR2020 <https://www.ibge.gov.br/geociencias/informacoes-sobre-posicionamento-geodesico/servicos-para-posicionamento-geodesico/31283-hgeohnor2020-modeloconversaoaltitudesgeometricasgnss-datumverticalsgb.html?edicao=31284&t=processar-os-dados>`_.

\textsl{Resp.}: :math:`278,59\,\text{m}` .

----

:exem:`12)` Em um perfil topográfico, a estaca :math:`5+14\,\text{m}` tem
:math:`\mathrm{cota}` :math:`200,5\,\text{m}` e a estaca :math:`10+2\,\text{m}` tem cota :math:`204,7\,\text{m}`. O terreno entre
essas estacas é aproximadamente plano. Com estas informações calcular:

a. a declividade :math:`(\%)` de um greide que passaria pelas referidas estacas, se na estaca :math:`5+14\,\text{m}` fosse feito um aterro de :math:`1,7\,\text{m}`  de altura e um corte da mesma altura na estaca  :math:`10+2\,\text{m}`;
b. a :math:`\mathrm{cota}` do ponto de passagem e sua distância com relação à estaca :math:`5+14\,\text{m}`;
c. a :math:`\mathrm{cota}` no terreno e no greide na estaca :math:`7`.

:exem:`Resp.:` :math:`d=0,91\%`; :math:`\mathrm{cota_{PP}}=202,6\,\text{m}`
e distância de PP à estaca :math:`5+14\,\text{m}` é de :math:`44\,\text{m}`; :math:`\mathrm{cota_{greide[7]}}=202,436\,\text{m}`
e :math:`\mathrm{cota_{terreno[7]}}=201,741\,\text{m}`.

----

:exem:`13)` Foi realizado um nivelamento e um contra-nivelamento
entre os pontos   :math:`A` e   :math:`B`, obtendo-se
a :math:`\mathrm{DN}` de, respectivamente,
:math:`3,837\,\text{m}` e :math:`3,842\,\text{m}`. Sabendo-se que o
trecho   AB }tem uma extensão
de :math:`580\,\text{m}`. Pede-se:

a. o erro cometido no trecho;
b. considerando um levantamento da classe IIN da NBR13133, este levantamento está dentro do limite tolerado?

:exem:`Resp.:` a) :math:`\mathrm{erro=0,005\,m}`; b) está de acordo com a Norma.

----

:exem:`14)` Com os dados das cadernetas de nivelamento e contra-nivelamento
(Tabelas abaixo), e sabendo-se que as estacas
estão espaçadas de :math:`20\,\text{m}`, calcular:

a. o erro cometido no trecho;
b. considerando um levantamento da classe IIN da NBR13133, este levantamento está dentro do limite tolerado?

.. table:: Nivelamento.
    :header-alignment: cccccc
    :column-alignment: cccccc
    :column-dividers:  none single single single single single

    ========== ====================== ====================== ===================== ===================== =======================
    Estaca     :math:`\mathrm{ré}`    :math:`\mathrm{AI}`    :math:`\mathrm{PI}`   :math:`\mathrm{PM}`   :math:`\mathrm{cota}`
    ========== ====================== ====================== ===================== ===================== =======================
    :math:`4`  :math:`3,321`                                                                             :math:`100,000`
    :math:`5`                                                :math:`1,325`
    :math:`6`                                                :math:`3,793`
    :math:`7`  :math:`2,650`                                                       :math:`1,467`
    :math:`8`                                                :math:`3,820`
    :math:`9`                                                                      :math:`2,100`
    ========== ====================== ====================== ===================== ===================== =======================


.. table:: Contra-nivelamento.
    :header-alignment: cccccc
    :column-alignment: cccccc
    :column-dividers:  none single single single single single

    ========== ====================== ====================== ===================== ===================== =======================
    Estaca     :math:`\mathrm{ré}`    :math:`\mathrm{AI}`    :math:`\mathrm{PI}`   :math:`\mathrm{PM}`   :math:`\mathrm{cota}`
    ========== ====================== ====================== ===================== ===================== =======================
    :math:`9`  :math:`1,200`
    :math:`8`                                                :math:`2,923`
    :math:`7`  :math:`0,621`                                                       :math:`1,756`
    :math:`6`                                                :math:`2,947`
    :math:`5`  :math:`0,710`                                                       :math:`0,479`
    :math:`4`                                                                      :math:`2,706`
    ========== ====================== ====================== ===================== ===================== =======================

:exem:`Resp.:` erro do nivelamento :math:`0,006\,\text{m}`; está de acordo com a Norma.

----

:exem:`15)` Com os dados de um NGC apresentados na caderneta
de campo da Tabela abaixo, calcule:

a. a declividade, em \%, de um plano inclinado que passa pelas estacas :math:`7+12\,\text{m}` e :math:`12+5\,\text{m}`, considerando-se que o espaçamento entre as estacas é de :math:`20,0\,\text{m}` ;
b. as :math:`\mathrm{CV}`  para todos as estacas;
c. em que estaca(s) se encontra(m) o(s) ponto(s) de passagem.

.. table:: Tabela de nivelamento.
    :widths: 1 1 1 1 1 1 1 1
    :header-alignment: cccccccc
    :column-alignment: cccccccc
    :column-dividers:  none single single single single single single single

    ======================= ====================== ===================== ===================== ===================== ======================= ========================= =====================
    Estaca                  :math:`\mathrm{ré}`    :math:`\mathrm{AI}`   :math:`\mathrm{PI}`   :math:`\mathrm{PM}`   :math:`\mathrm{cota}`   :math:`\mathrm{greide}`   :math:`\mathrm{CV}`
    ======================= ====================== ===================== ===================== ===================== ======================= ========================= =====================
    :math:`7+12\,\text{m}`  :math:`1,316`                                                                            :math:`200,0`
    :math:`8`     	                                                     :math:`2,725`
    :math:`9`     	        :math:`2,321`                                                      :math:`0,214`
    :math:`10`   	        :math:`0,340`                                                      :math:`2,500`
    :math:`11`    	                                                     :math:`1,470`
    :math:`12`    	                                                     :math:`3,218`
    :math:`12+5\,\text{m}`  	                                                               :math:`2,200`
    ======================= ====================== ===================== ===================== ===================== ======================= ========================= =====================


:exem:`Resp.:` a) :math:`d=-1,008\%`; b) :math:`\mathrm{CV}_{7+12{\rm \ m}}=0\,\text{m}`,
:math:`\mathrm{CV}_{8}=1,328\,\text{m}`, :math:`\mathrm{CV}_{9}=-1,384\,\text{m}`,
:math:`\mathrm{CV}_{10}=-1,407\,\text{m}`, :math:`\mathrm{CV}_{11}=-0,478\,\text{m}`, :math:`\mathrm{CV}_{12}=1,068\,\text{m}`,
:math:`\mathrm{CV}_{12+5\,{\rm m}}=0\,\text{m}`; c) :math:`\mathrm{PP_{1}}=8+9.795\,\text{m}`,
:math:`\mathrm{PP_{2}}=11+6.183\,\text{m}` .

.. rubric:: Footnotes

.. [#f1] Neste nivelamento: o nível é da classe 2, com precisão média, desvio-padrão
   :math:`\leq\pm10\text{ mm/km}`; as miras dobráveis, centimétricas e devidamente
   aferidas, providas de prumo esférico; pode ser realizado em circuito
   fechado NBR13133, páginas 6 e 17