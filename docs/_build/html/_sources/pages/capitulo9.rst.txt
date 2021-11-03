.. raw:: html

    <style> .exem {color:blue; font-weight: bold} </style>

.. role:: exem

.. raw:: html

    <style> .solucao {font-weight: bold} </style>

.. role:: solucao

.. raw:: html

    <style> .blue {color:blue} </style>

.. role:: blue

.. _RST Capitulo9:

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

Pode-se ainda recordar da Secção :any:`Datum Vertical`,
que a altitude ortométrica corresponde à distância vertical entre
um ponto ao Datum Altimétrico utilizado, no caso do Brasil Datum de
Imbituba ou o de Santana.
Já a altitude geométrica é distância vertical
entre o ponto e o :ref:`Datum horizontal`, por exemplo o SIRGAS2000.

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

:exem:`Exemplo 1` De uma marco do IBGE de altitude
:math:`691,421\,\text{m}` ao ponto :math:`\mathbf{X}`, mediu-se uma :math:`\mathrm{DN}` de
:math:`-39,697\,\text{m}`. Qual a altitude de :math:`\mathbf{X}`?

:solucao:`Solução:`

.. math::
   \mathrm{alt_{\mathbf{X}}} & =\mathrm{alt_{IBGE}+DN_{IBGE,\,\mathbf{X}}}\\
    & =691,421-39,697\\
    & =651,724\,\text{m}

----

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
   OC^{2} & =OA^{2}+AC^{2}\nonumber \\
   (R+C_{c})^{2} & =R^{2}+\mathrm{DH^{2}}\nonumber \\
   R^{2}+2RC_{c}+C_{c}^{2} & =R^{2}+\mathrm{DH^{2}}\nonumber \\
   C_{c}(2R+C_{c}) & =\mathrm{DH^{2}}\nonumber \\
   C_{c} & =\frac{\mathrm{DH^{2}}}{2R+C_{c}}.
   :label: eq:Cc1


considerando o valor de :math:`R`  como sendo a média dos raios
do WGS84\footnote{Raios do Datum WGS84: :math:`a=6\,378\,137\,\text{m}`,
:math:`b=6\,356\,752,314\,\text{m}`, :math:`R=6\,367\text{ km}`; e no denominador da :eq:`eq:Cc1`,
:math:`2R+C_{c}`, o valor de :math:`C_{c}`  insignificante em relação a ordem
de grandeza de :math:`2R`, tem-se, para :math:`C_{c}`  em metros e :math:`\mathrm{DH}` em km a
Equação:

.. math::
   C_{c}&=1\,000\cdot\frac{\mathrm{DH^{2}}}{2R}\\
   C_{c}&=0,078\,53\mathrm{DH^{2}}.
   :label: eq:Cc2

Com a finalidade de ilustrar o efeito de :math:`C_{c}`, imagine uma embarcação,
que em :math:`A`  é verificado que a sua altura é de :math:`4\,\text{m}`. Se ela parte ao
mar, quando estiver a uma distância de aproximadamente :math:`7,14\,\text{km}` de
:math:`A`  :math:`(\mathrm{DH}=(4/0,078\,53)^{0,5})`, Equação :eq:`eq:Cc2`, não
será mais possível observá-la. É lógico que a embarcação não ficou
:math:`4\,\text{m}`  menor, é apenas o efeito de :math:`C_{c}`  que, estando a embarcação
a :math:`7,14\,\text{km}` de :math:`A`, faz com que ela não seja mais visível. Daí pode-se
concluir que, devido à :math:`C_{c}`, qualquer ponto que esteja a uma distância
de :math:`7,14\,\text{km}` de onde se está realizando a medida de :math:`\mathrm{DN}`, tem-se que considerar
que a :math:`\mathrm{DN}` é :math:`4\,\text{km}` maior do que a calculada, quando considerando o erro
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
   C_{cr} & =0,078\,53\mathrm{DH}^2-0,011\mathrm{DH}^2\nonumber \\
   C_{cr} & =0,067\,53\mathrm{DH}^2
   :label: eq:Ccr

Mais uma vez, a unidade de :math:`C_{cr}` é metro e a DH em quilômetro.

----

:exem:`Exemplo 2`  Qual será o erro cometido em um nivelamento se
não for considerado o efeito da curvatura da terra e da refração atmosférica
na medida de :math:`\mathrm{DN}` entre pontos distantes entre si em :math:`1\,398\,\text{m}`?

:solucao:`Solução:`
Considerando a :math:`\mathrm{DH}` em km e de acordo com a Equação :eq:`eq:Ccr`:

.. math::
   C_{cr} & =0,067\,53\cdot1,398^2\\
   & =0,132\text{ m}

O erro cometido corresponderia a :math:`0,132\,\text{m}` para menos na
:math:`\mathrm{DN}` entre os pontos.

----

:exem:`Exemplo 3` No exemplo 1, considere que na
:math:`\mathrm{DN}` de :math:`-39,697\,\text{m}`, entre o marco
do IBGE ao ponto :math:`\mathrm{X}`, não foi
considerado o erro de curvatura e de refração :math:`(C_{cr})`. Calcule
novamente a altitude de :math:`\mathbf{X}` aplicando a correção para :math:`C_{cr}`.
Considere a distância entre os pontos de :math:`753,982\,\text{m}`.

:solucao:`Solução:`
Uma vez que se queira realizar a compensação, basta aplicar
à :math:`\mathrm{DN}` a :math:`C_{cr}`, desta forma:

.. math::
   \mathrm{\mathrm{alt_{\mathbf{X}}}} & =\mathrm{alt_{IBGE}+DN_{IBGE,\,\mathbf{X}}+}C_{cr}\\
    & =\mathrm{alt_{IBGE}+DN_{\mathbf{X}IBGE}}+0,067\,53\mathrm{DH^{2}}\\
    & =691,421-39,697+0,067\,53\cdot0,753\,982^{2}\\
    & =651,762{\rm \,m.}

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

:exem:`Exemplo 4` Calcule a declividade em percentagem
e graus para uma :math:`\mathrm{DN}` e :math:`\mathrm{DH}` entre dois pontos de :math:`-27,9\,\text{m}`
e :math:`162,2\,\text{m}`, respectivamente?

:solucao:`Solução:`
A :math:`\mathrm{DN}` negativa tem como significado que o terreno onde foi
realizada a medição se apresenta em declive do ponto inicial ao final,
isto é, ponto inicial tem cota/altitude maior do que o ponto final.

- A declividade em percentagem:

.. math::
   d(\%) & =\frac{\mathrm{DN}}{\mathrm{DH}}100\\
    & =\frac{-27,9}{162,2}100\\
    & =-17,201\%.

- Em graus:

.. math::
   d(^{\circ}) & =\arctan\frac{\mathrm{DN}}{\mathrm{DH}}\\
   & =\arctan\frac{-27,9}{162,2}\\
   & =-9^\circ45'36''.

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
dependerá dos objetivos do nivelamento (ver cite:t:`NBR13133`).
Nesta secção serão apresentados os métodos: *i*) :ref:`Nivelamento barométrico`;
*ii*) :ref:`Nivelamento trigonométrico`; *iii*) taqueométricos; *iv*) GNSS; e *v*) geométrico.

.. _Nivelamento barométrico:

Nivelamento barométrico
-----------------------

Por meio de equipamentos que medem a pressão do ar, que denominam-se
barômetros, é possível encontrar a :math:`\mathrm{DN}` entre os pontos. A explicação
é dada pela relação inversa que há entre pressão do ar e a altitude
(:numref:`BaromeHGvsAltitude`). Quanto mais alto um ponto, menor é a camada atmosférica
atuando nele, logo, menor será a pressão devida à atmosfera. Por outro
lado, um ponto em uma altitude menor, está sujeito a uma maior camada
de ar, resultando numa maior pressão atmosférica \cite{espartel}.
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
a :math:`\mathrm{C}`, e a intersecção da linha horizontal que passa por C com a linha
vertical que passa por :math:`\mathrm{B}`, corresponde à :math:`\mathrm{E}`. A distância vertical entre
:math:`\mathrm{E}` e :math:`\mathrm{D}` denominaremos por :math:`V`. Considerando o triângulo retângulo
:math:`\mathrm{CED}` e que foi medida a :math:`\mathrm{DI}`, tem-se :math:`V`:

.. math::
   V & =\mathrm{DI}\cos z,\label{eq:cap_alt_V_di_z}\\
   V & =\mathrm{DI}\sin\alpha,

para medidas de :math:`\mathrm{DH}`:

.. math::
   V & =\mathrm{DH}\cot z,\\
   V & =\mathrm{DH}\tan\alpha,

A distância :math:`\mathrm{BD}` corresponde à altura do prisma :math:`(ap)`. É facilmente
obtida por meio da leitura na régua presente no bastão em que o prisma
está conectado. A altura do equipamento :math:`(ai)`, distância vertical
entre :math:`\mathrm{C}` e :math:`\mathrm{A}`, pode ser obtida com uma trena. Com estas definições,
para a determinação da :math:`\mathrm{DN}` tem que somar a :math:`V`, a :math:`ai` e
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

:exem:`Exemplo 5` Em um levantamento para determinar a :math:`\mathrm{DN}` entre os
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
   \mathrm{DN_{AB}} & =\textit{\ensuremath{\mathrm{DI_{AB}}}}\cos z+ai-ap\\
   & =322,567\cos85^{\circ}24'+1,769-2,000\\
   & =25,638\,{\rm m.}

No cálculo de \emph{DN }considerando :math:`C_{cr}`, utiliza-se
a Equação~\ref{eq:cap_alt_tri_2}. Para :math:`C_{cr}`  (Equação~\ref{eq:Ccr})
DH é na unidade de km, então por trigonometria:

.. math::
   \mathrm{DH_{AB}} & =\frac{\textit{\ensuremath{\mathrm{\mathrm{DI}}}}\sin z}{1000}\\
   & =\frac{322,567\sin85^{\circ}24'}{1000}\\
   & =0,3215{\rm \,km.}

Por fim, aplicando-se a Equação :eq:`eq:cap_alt_tri_2`,
tem-se:

.. math::
   \mathrm{DN_{AB}} & =\mathrm{DI_{AB}}\cos z+ai-ap+C_{cr}\\
   & =\mathrm{DI}\cos z+ai-ap+0,067\,53\mathrm{DH^{2}}\\
   & =322,567\cos85^{\circ}24'+1,769-2,000+0,067\,53\cdot0,321\,5^{2}\\
   & =25,646\,{\rm m.}

----

.. _Nivelamento taqueométrico:

Nivelamento taqueométrico
-------------------------

\parpic[r]{\begin{minipage}{80mm}\includegraphics{Cap_altimetria/taqueometria.pdf}\captionof{figure}{Esquema para o nivelamento taqueométrico.} \label{fig:taqueometria}  
\end{minipage}}De acordo com a Figura~\ref{fig:fig1}, agora, em A, é estacionado
um teodolito e em B, uma mira. O nivelamento taqueométrico é aquele
realizado por meio das leituras dos retículos sobre a mira e do ângulo
vertical com o auxílio do teodolito (ver Secção \ref{sec:Medi=0000E7=0000E3o-por-taqueometria}).
Sendo \emph{V}, a distância vertical entre o plano que passa pelo
centro do equipamento ao que passa por :math:`rm`, temos:

\begin{equation}
\textit{V}=100H\cos z\sin z=\frac{100H\sin2z}{2}\label{eq:taque}
\end{equation}

\noindent em que: :math:`H=(rs-ri)`  sendo, :math:`rs`  e :math:`ri`, respectivamente,
a leitura sobre a mira em B dos retículos superior e inferior.\picskip{0}

Para calcular a :math:`\mathrm{DN}`, aplicam-se as Equação~\ref{eq:cap_alt_tri} ou
\ref{eq:cap_alt_tri_2}, esta última se :math:`C_{cr}`  for utilizado. O
valor da altura do prisma (\emph{ap}), nestas Equações, é substituído
pela leitura do retículo médio (\emph{rm}). 

Por se tratar de um método que é a cada dia menos empregado nos levantamentos
topográficos, não será apresentado a determinação Equação \ref{eq:taque}.
Aos interessados, consultar \citeonline{godoy,comastri} e \citeonline{casaca},
entre outros.

\begin{mybox}[breakable,enhanced,pad at break=0mm]{} Com um teodolito no ponto 9 de cota :math:`100,0`  m, visou-se
o ponto 10, onde foram medidos: a altura do instrumento de :math:`1,532` ~m;
visando-se a mira em 10, as leitura do :math:`rs=2,984\,{\rm m}`  e do :math:`ri=0,200\,{\rm m}`;
e ângulo zenital de :math:`97^{\circ}`. Determine a diferença de nível
entre os pontos 9 e 10 e a cota em 10. 

\soluca

\noindent Da Equação~\ref{eq:taque}, verifica-se que temos que determinar
:math:`rm`. Em taqueometria, :math:`rs-rm`  é igual a :math:`rm-ri`  (ver Equação \ref{eq:taqueometria_reticulos},
página \pageref{eq:taqueometria_reticulos}), desta forma:

\[
rm=\frac{rs+ri}{2}=\frac{2,984+0,200}{2}=1,592\,{\rm m.}
\]

\noindent Substituindo as medidas na Equação~\ref{eq:taque} tem-se
para \emph{V}:

\[
\textit{V}=\frac{100H\sin2z}{2}=\frac{100(2,984-0,200)\sin(2\cdot97^{\circ})}{2}=-33,676\,{\rm m.}
\]

\noindent Aplicando a Equação~\ref{eq:cap_alt_tri} com \emph{ap
}igual a \emph{rm}:

\[
\mathrm{DN_{9,10}}=V+ai-rm=-33,676+1,532-1,592=-33,736\,{\rm m.}
\]

\noindent Para o transporte da cota em 9 para o ponto 10:

\noindent 
\[
\mathrm{cota_{10}}=\mathrm{cota_{9}+DN_{9,10}}=100-33,736=66,264\,{\rm m.}
\]
 \end{mybox}

\subsection{\index{Nivelamento!GNSS}Nivelamento GNSS\label{subsec:Nivelamento-GNSS}}

Como já foi visto anteriormente, a altitude que os receptores GNSS
determinam, corresponde à distância vertical do centro físico da antena
do receptor ao Datum horizontal considerado (ver Capítulo \ref{ch:IntroducaoGeodesiaCartografia}).
Esta distância é denominada de altitude geométrica\index{altitude!geométrica}
(:math:`h` ). A altitude que trabalhamos é a altitude em relação ao geóide\index{geóide},
altitude ortométrica\index{altitude!ortométrica} :math:`(H)`, que é a
distância vertical do ponto na superfície ao geóide, isto é, aproximadamente
ao nível médio dos mares. Valores de :math:`H`  são, normalmente, medidos
por meio do nivelamento geométrico (ver Secção \ref{subsec:Nivelamento-geom=0000E9trico}).
Todavia, pode-se obter :math:`H`  se conhecer :math:`h`, medida por GNSS e, a
ondulação geoidal (:math:`N` ) local, diferença entre \emph{h }e \emph{H}
(Equação \ref{eq:geoide}e Figura~\ref{fig:geoide}a).

\begin{equation}
H\approx h-N\label{eq:geoide}
\end{equation}

Na Figura~\ref{fig:geoide}b é apresentado, do modelo EGM96, a :math:`N` 
para parte da região da América do Sul. O EGM96 tem como referência
o Datum WGS84. Valores positivos indicam que o geóide está acima do
\index{WGS84}WGS84, e negativos, abaixo. Segundo este modelo, no
Acre :math:`N\approx30\,\mathrm{m}`, já no Amapá, :math:`N\approx-30\,\mathrm{m}`.
Na América do sul, os maiores valores se encontram nas Cordilheira
dos Andes, com :math:`N\approx50\,\mathrm{m}`.

Valores de :math:`N`  com relação aos Data utilizados no Brasil, o SAD69
e o SIRGAS2000, podem ser obtidos por meio do programa MAPGEO2010
\cite{mapgeo}. No MAPGEO2010, tem que informar para obter a estimativa
de :math:`N`, o Datum utilizado na coleta dos dados de :math:`h`  com  receptor
GNSS, o SAD69\index{Datum!horizontal!SAD69} ou SIRGASS2000\index{Datum!horizontal!SIRGAS2000},
e, as coordenadas do ponto, em latitude e longitude. Uma vez conhecidos
os valores de :math:`h`  (receptor GNSS) e :math:`N`  (MAPGEO2010), pode-se calcular
:math:`H`  pela Equação~\ref{eq:geoide}.

\begin{figure}[H] \includegraphics[scale=0.95]{Cap_altimetria/geoide.pdf}
\caption{Relação entre altura ortométrica (:math:`H` ), altura geométrica (:math:`h` )
e ondulação geoidal (:math:`N` ) em (a). Ondulação geoidal segundo EGM96
\cite{lemoine1998development}, tendo :math:`h`  em relação ao WGS84 (b).}

\label{fig:geoide} 
\end{figure}

A precisão na determinação de \emph{H}, dependerá: i) da precisão
de \emph{h},\emph{ }ou seja, do tipo de receptor GNSS, do método de
posicionamento, e ii) da precisão da estimativa da \emph{N}. Para
a :math:`N`  do modelo MAPGEO2010, segundo \citeonline{Matos2012}, o desvio
com relação à :math:`N`  calculadas de medidas de GPS (:math:`H` ) em referências
de níveis (:math:`h` ) do IBGE, foi de aproximadamente :math:`\pm1`  m.

Para aumentar a precisão do receptor, ou seja, a :math:`h`, sugere-se utilizar
os métodos de medidas relativas e por diferença de fase por onda portadora.
Já, para aumentar a precisão no que diz respeito a :math:`N`, pode-se realizar
a sua calibração local. Esta calibração não será apresentada, por
este texto ser apenas introdutório à esta disciplina. Maiores detalhes
podem ser encontrados em \citeonline{WOLF}.

\begin{mybox}[breakable,enhanced,pad at break=0mm]{} Encontre, por meio do programa MAPGEO2010, a ondulação
geoidal para um ponto de coordenadas :math:`-22^{\circ}6'41''`  de latitude
e :math:`-41^{\circ}54'8''`  de longitude, no \index{Datum!horizontal!SIRGAS2000}Datum
SIRGAS2000. Sabendo-se que a altura geométrica calculada pelo receptor
GNSS\index{GNSS} nesta coordenada foi de :math:`562,672` ~m, qual a altitude
ortométrica.

\noindent \soluca

\noindent \parpic[r]{\includegraphics[scale=.4]{Cap_altimetria/mapgeopdf.pdf}}Com
as coordenadas e o Datum apresentados acima, obteve-se por meio do
MAPGEO2010 o valor de :math:`N` ~de~:math:`-6,44` ~m (Figura ao lado). Para
calcular a altitude ortométrica (\emph{H}), aplica-se a Equação~\ref{eq:geoide}:

\[
H=h-N=562,672--6,44=569,112~{\rm m.}
\]

\vspace{1cm}\end{mybox}

\begin{mybox}[breakable,enhanced,pad at break=0mm]{}Trabalhando com receptores GNSS com a técnica de
medida relativa por diferença de fase, obteve-se para um ponto a altitude
geométrica de 231,849~m no Datum SIRGAS2000. Utilizando o programa
MAPGEO2010\index{MAPGEO2010}, foi encontrado a ondulação geoidal
de :math:`-12,598` ~m. Calcule a altitude ortométrica. 

\soluca

Da Equação~\ref{eq:geoide}, e com os dados apresentados acima, temos:

\noindent 
\[
H=h-N=231,849--12,598=244,447~{\rm m.}
\]
\end{mybox}

\section*{Sugestão de aula prática}


\begin{tcolorbox}[breakable,enhanced,pad at break=0mm,adjusted title= Levantamento de ponto inacessível.] 

\textbf{Introdução}: Um problema comum em topografia é ter pontos
onde se deseja conhecer sua altitude ou, a :math:`\mathrm{DN}` entre ele e o ponto
da estação. Isto é facilmente resolvido se for possível levar ao ponto
de interesse, uma mira ou um prisma, respectivamente, para levantamento
com teodolito ou estação total, Secções \ref{subsec:Nivelamento-trigonom=0000E9trico}
e \ref{subsec:Nivelamento-taqueom=0000E9trico}. Todavia, em algumas
situações, este procedimento não pode ser realizado devido, por exemplo,
a não se ter acesso ao ponto de interesse. 

\textbf{Objetivo}: Determinar a :math:`\mathrm{DN}` entre o ponto em que a estação
total está estacionada, a um ponto inacessível, escolhido em campo.

\textbf{Material}:  Estação total, prisma, trena e estaca.

\textbf{Procedimento}: é apresentado graficamente abaixo, onde: A
é o ponto de referência para a medida de :math:`\mathrm{DN}`, primeiro ponto onde a
estação total será estacionada; O é o ponto inacessível; B é uma posição
onde se tem acesso; AB é a base, onde é medida a :math:`\mathrm{DH_{AB}}`;
:math:`\alpha`  e :math:`\beta`  são os ângulos horizontais medidos em A e B,
respectivamente; :math:`ai`  é a altura do instrumento em A, medida com
a trena. \vspace{0.4cm}

\includegraphics[trim = 0mm 20mm 200mm 0mm,scale=1]{Cap_altimetria/pontoinacessivel}
\end{tcolorbox} 
