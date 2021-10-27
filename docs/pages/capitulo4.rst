.. raw:: html

    <style> .exem {color:blue; font-weight: bold} </style>

.. role:: exem

.. raw:: html

    <style> .solucao {font-weight: bold} </style>

.. role:: solucao

.. raw:: html

    <style> .blue {color:blue} </style>

.. role:: blue

.. _RST Capitulo 4:

Capitulo 4: Sistemas Globais de Navegação por Satélite (GNSS)
*************************************************************

Os Sistemas Globais de Navegação por Satélite
(*Global Navigation Satellite Systems*, GNSS) tratam-se de
diferentes sistemas, para fins de posicionamento, que utilizam ondas
eletromagnéticas emitidas por satélites artificiais à terra. Estes
sistemas são utilizados em diferentes áreas, sendo primeiramente construídos
com finalidades militares. Atualmente, por exemplo, são empregados
nos transportes terrestres, marinhos e aéreos, em levantamentos geodésicos
e, na agricultura, na denominada agricultura de precisão e no georreferenciamento
de imóveis rurais. Neste capítulo será realizada uma apresentação
do princípio de seu funcionamento, dos sistemas existentes, das fontes
de erros, e dos tipos de posicionamento GNSS.


Introdução
==========

O posicionamento baseado por satélite, se refere à obtenção da posição
de um ponto (p.ex.: latitude e longitude), por meio de receptor que
capta e processa sinais emitidos por satélites artificiais, na superfície
terrestre, no mar, no ar ou no espaço. Antes dos satélites a posição
de um ponto era realizado por meio da técnica denominada de triangulação,
em que vários lados dos triângulos são ligados por pontos (vértices)
na área de interesse. Então os lados e ângulos dos triângulos eram
medidos. Os vértices dos triângulos eram, geralmente, materializados
por marcos. Os lados dos triângulos eram medidos por réguas, trenas
e mais recentemente por meio de medidores eletrônicos de distância
e os ângulos, medidos por teodolitos. Sendo que cada lado dos triângulos
poderia chegar a 100 km. Para o ajustamento era necessário que em
pelo menos um ponto as suas coordenadas (p.ex. latitude, longitude
e altitude) fossem conhecidas, assim como também fosse determinado
o azimute de uma linha. As coordenadas do ponto era estabelecida com
base em observações astronômicas, o que poderia resultar em erros
de metros.

O primeiro satélite a ser lançado foi o Sputnik, Russo, em 4 de outubro
de 1957. Desde então vários outros foram lançados, fazendo com que
uma outra metodologia pudesse ser utilizada para o posicionamento,
sendo denominada de programa mundial de triangulação por satélite
(*worldwide satellate triangulation program*). Constituia em
fotografar, de dois pontos da terra, satélites com características
refletivas no espaço, com estrelas ao fundo, ao longo de um tempo.
Por técnicas fotogramétricas era possível encontrar a direção entre
estes dois pontos. Observações de outros pontos na terra eram realizadas,
formando uma rede global para ajustamento. Podem-se citar como problemas
para esta metodologia: necessidade de céu limpo durante a fotografia
nas duas estações que, eram separadas em aproximadamente :math:`4.000\,\text{km}`;
e o equipamento para fotografia, pesado e caro.

O primeiro sistema a utilizar satélites artificias, com capacidade
de emitir sinais à terra, que poderiam ser captados por receptores
para fins de posicionamento, foi o *Transit*,
formalmente conhecido por *Navy Navigation Satellite System*,
utilizado pela Marinha Norte Americana para o posicionamento de submarinos
e de navios de guerra por um período de 32 anos, tendo finalizado
suas operações em 1996. O primeiro satélite Transit lançado com sucesso
ocorreu em 1960, transmitindo sinais em duas frequências tendo como
finalidade a realização de testes. O lançamento de um satélite operacional
ocorreu em 5 de dezembro de 1963.

Quando em operação o sistema Transit era constituído de 6 satélites
orbitando a terra na altitude de :math:`1.100\,\text{km}`, período orbital de 106
min e enviando sinais em duas frequências (:math:`150\,\text{MHz}` e :math:`400\,\text{MHz}`). Em
1967 o presidente dos Estados Unidos autorizou o uso comercial e privado,
sendo fabricado mais de 80.000 receptores. Segundo :cite:t:`Hofmann2008`,
a precisão de posicionamento do sistema Transit, quando utilizando
receptor com capacidade de rastreio de uma e de duas frequências,
era de :math:`100\,\text{m}` e :math:`20\,\text{m}`, respectivamente. Este sistema tinha como limitação
a precisão e, principalmente, a baixa frequência para obter a posição,
ou seja, não era apenas ligar o receptor em terra e já obter a coordenada,
poderia demorar de 6 horas a 12 horas para ter satélites disponíveis
e então obter a coordenada. Isto ocorria pelo número reduzido de satélites
em órbita :cite:p:`smith1997introduction`. Na mesma época, um sistema
similar ao Transit, o *Cicata*, foi desenvolvido
pela Rússia.

O termo :math:`\bf{GNSS}` (:math:`\bf{G}\it{lobal}` :math:`\bf{N}\it{avigation}`
:math:`\bf{S}\it{atellite}` :math:`\bf{S}\it{ystems}`)
descreve os diferentes sistemas de posicionamento por satélites, assim
como as suas combinações para se obter o tempo, posição e velocidade
em qualquer tempo e condição atmosférica :cite:p:`GNSS:bhatta2010global`.
Com o breve histórico apresentado anteriormente, percebe-se que toda
uma base tecnológica de conhecimento estava formada para construção
de novos GNSS. Desta forma, vários países ou nações, partiram para
o desenvolvimento e construção de seu próprio GNSS, sem as limitações
dos anteriores, como a baixa precisão e frequência. Seguem alguns
exemplos de GNSS: nos Estados Unidos, por meio do seu Departamento
de Defesa (DoD, abreviação de *Department of Defense*),
houve o desenvolvimento do Sistema de Posicionamento Global (:math:`\bf{GPS}`,
:math:`\bf{G}\it{lobal}` :math:`\bf{P}\it{ositioning}` :math:`\bf{S}\it{ystem}`), na Rússia, sob a operação das
forças armadas, o Sistema de Navegação Global por Satélite (:math:`\bf{GLONASS}\text{,}\,`
:math:`\bf{GL}\it{Obal'naya}` :math:`\bf{NA}\it{vigatsionnaya}` :math:`\bf{S}\it{putnikovaya}` :math:`\bf{S}\it{istema}`);
e, na Europa, sendo construído pela União Europeia, o sistema :math:`\bf{Galileu}`.
Maiores detalhes destes sistemas serão apresentados em :ref:`Exemplos de GNSS.

.. _posicionamento_satelite:

Posicionamento por satélite
===========================

Nesta secção será apresentado o princípio básico do posicionamento
por satélite conforme explicação de :cite:t:`Hofmann2008`. Como
já foi dito, o GNSS fornece informação da posição de um lugar, por
exemplo, a latitude, longitude e altitude geométrica. Para tanto,
é necessário: uma constelação de satélites sobrevoando o espaço e
enviando sinais à terra e; receptores. capazes de captar e processar
as informações contidas nestes sinais. Basicamente, para o posicionamento
ser realizado, é necessário a determinação da distância entre satélites
e receptor. Considere a :numref:`fig_GNSS_posicion`, com a representação
da terra, de um receptor e de um satélite, em uma determinada época.
Imagine esta época congelada. A posição do receptor :math:`(\boldsymbol{\varrho_{r}})`
e de cada satélite :math:`(\boldsymbol{\varrho^{s}})` tem como sistema
de referência o centro de massa da terra (sistema geocêntrico). A
posição de cada satélite pode ser determinada com o auxílio das efemérides
(tabelas de valores que torna possível determinar a posição do satélite
no espaço) transmitidas pelos satélites e processadas no receptor. Se o receptor,
definido na terra por sua posição geocêntrica :math:`(\boldsymbol{\varrho_{r}})`,
tem um relógio preciso, a distância :math:`(\delta)` entre cada satélite
e o receptor pode ser calculada pela medida de tempo que o sinal (código)
demorou entre a emissão do satélite até a chegada no receptor. Cada
satélite definirá uma superfície de esfera, em que o seu centro é
a posição do satélite. Desta forma, determinada as distâncias entre
três satélites e o receptor, torna-se suficiente para que a intersecção
das três esferas resulte na determinação das três incógnitas da posição
do receptor, por exemplo, a latitude, a longitude a altitude geométrica.
A equação da distância entre cada satélite e receptor é determinada
por:

.. math::
   \delta=\left\Vert \boldsymbol{\varrho^{s}-\varrho_{r}}\right\Vert
   :label: eq:GNSSdistanciasatelitereceptor

.. _fig_GNSS_posicion:

.. figure:: /images/capitulo4/fig_GNSS_posicion.png
   :scale: 35 %
   :alt: fig_GNSS_posicion.png
   :align: center

   Princípio do posicionamento por GNSS.

Dado um vetor :math:`\mathbf{a}`, no espaço tridimensional de coordenadas
:math:`x`, :math:`y` e :math:`z`, tem-se que, :math:`\left\Vert \mathbf{a} \right\Vert`
representa a norma de um vetor (também denominado de módulo de um vetor),
onde:

.. math::
   \left\Vert \mathbf{a}\right\Vert =\sqrt{x^2+y^2+z^2}

No Exemplo 1 é apresentado a obtenção
da posição de um ponto, em um sistema de coordenadas bidimensional,
conhecendo-se as posições dos satélites e dos intervalos de tempo
entre o envio do sinal pelos satélites e a sua chegada ao receptor.

----

:exem:`Exemplo 1` Os dados das posições e distâncias que serão apresentados neste exemplo têm magnitude
muito inferiores das usuais nos GNSS, uma vez que, geralmente, são
dadas em milhares de metros, vistas as altitudes dos satélites (a altitude da órbita dos satélites GPS é de 20.200 km)
e o sistema de referência utilizado. Desta forma, busca-se apenas
ilustrar a estratégia utilizada no GNSS para cálculo da posição do
receptor. Vamos supor que desejamos encontrar as coordenadas bidimensionais
de um ponto onde uma pessoa possua um receptor (:math:`r`). Este receptor
recebe e processa os sinais, de uma determinada época, emitidos de
dois satélites, denominados aqui por satélites 1 e 2. Nestes sinais
são enviadas as efemérides dos satélites, sendo então calculadas suas
posições: para o satélite 1 e 2, respectivamente, :math:`\boldsymbol{\varrho}^1=(3,\,5)`
e :math:`\boldsymbol{\varrho}^2=(6,\,4)`. Os receptores GNSS, também
por meio dos sinais (código), conseguem realizar uma estimativa do
intervalo de tempo entre o envio do sinal e a chegada ao receptor
:math:`(\Delta t)`. Como se conhece a velocidade de propagação do sinal,
velocidade da luz :math:`(c=299.792,458\,\text{km s}^{-1})`,
pode-se calcular a distância entre eles :math:`(\varrho=c\cdot\Delta t)`,
sendo de :math:`\varrho_{1r}=\text{4,123}` e de :math:`\varrho_{2r}=\text{3,606}`.
Calcule as coordenadas do receptor (:math:`\boldsymbol{\delta}_{r}`).

:solucao:`Solução:` Com os dados apresentados na figura a seguir, pode-se desenhar
a configuração geométrica dos satélites e, por circunferências, as
distâncias entre eles e o receptor. As circunferências se interceptam
em dois pontos, sendo estas as possíveis posições para o receptor.
Considerando que o receptor não pode estar localizado acima dos satélites,
temos apenas uma posição possível, a do receptor.


.. _GNSSPosicExemplo:

.. figure:: /images/capitulo4/GNSSPosicExemplo.png
   :scale: 35 %
   :alt: GNSSPosicExemplo.png
   :align: center

Para encontrar a posição do receptor, utiliza-se a Equação :eq:`eq:GNSSdistanciasatelitereceptor`,
sendo, para o receptor e o satélite 1:

.. math::
   4,123^2=\sqrt{(x_r-3)^2+(y_r-5)^2}

.. math::
   -17,001=x_r^2-6x_r+y_r^2-10y_r
   :label: exem_a


Para o satélite 2 e o receptor:

.. math::
   3,606^2=\sqrt{(x_r-6)^2+(y_r-4)^2}

.. math::
   -38,997 = x_r^2-12x_r+y_r^2-8y_r
   :label: exem_b


Subtraindo a Equação :eq:`exem_a` da :eq:`exem_b` e isolando :math:`y`:

.. math::
   y_r = -10,998+3x_r
   :label: exem_c

Substituindo :eq:`exem_c`  em :eq:`exem_a` :

.. math::
   x_r^2-6x_r+(-10,998+3x_r)^2-10(-10,998+3x_r) = -17,001

.. math::
   10x_r^2-101,988x_r+247,935=0
   :label: exem_d

A Equação :eq:`exem_d` é do tipo polinomial do segundo grau, sendo
suas raízes. A equação do segundo grau, :math:`ax^{2}+bx+x=0`, tem raízes: :math:`\displaystyle {x=\frac{-b\pm\sqrt{b^{2}-4ac}}{2a}}`
. Logo, :math:`x_{r1}=4` e :math:`x_{r2}=6,2`. Por fim, substituindo as raízes na Equação
(a) ou (b) encontram-se, :math:`y_{r1}=1` e :math:`y_{r2}=7,6`. Ou seja, temos
duas posições possíveis para o receptor, :math:`\boldsymbol{\varrho_{r}}=(4,\,1)`
ou :math:`\boldsymbol{\varrho_{r}}=(6,2,\,7,6)`. Como o receptor não estará
acima dos satélites, a posição do receptor seria :math:`\boldsymbol{\varrho_{r}}=(4,\,1)`.

----


Como foi apresentado no Exemplo :ref`GNSSPosicExemplo`,
há a necessidade de se conhecer a distância geométrica entre o receptor
e os satélites. Isto é realizado medindo-se o lapso de tempo entre
o envio e a chegada ao receptor multiplicado pela velocidade da luz.
Desta forma, o lapso de tempo poderia ser calculado se os relógios
do receptor e dos satélites estivessem sincronizados. Contudo os relógios
dos receptores são de baixa precisão e apresentam apenas uma aproximação
do sistema de tempo do GNSS, resultando em um erro do relógio :math:`(\delta)`
e posteriormente em um erro na distância :math:`\Delta\varrho`. Desta forma,
a distância calculada pelos receptores não será a distância geométrica,
mais sim ao que se denomina pseudodistância
:math:`(R)`:

.. math::
   R=\varrho+\Delta\varrho=\varrho+c\delta
   :label: eq:GNSSpseudodistancia

O sistema passa agora a ter quatro variáveis desconhecidas, a posição,
três variáveis :math:`(x_{r},\,y_{r},\,z_{r})`, mais a variável erro do
relógio :math:`(\delta)`, fazendo com que sejam necessários pelo menos
4 pseudodistâncias para solucionar estas quatro variáveis desconhecidas.
Considerando um receptor com coordenadas :math:`x_{r},\,y_{r}` e :math:`z_{r}`,
observando 4 satélites, ele poderá calcular as 4 pseudodistâncias,
resultado em:

.. math::
   R_{1} & =\sqrt{(x_{1}-x_{r})^{2}+(y_{1}-y_{r})^{2}+(z_{1}-z_{r})^{2}}+c\delta\\
   R_{2} & =\sqrt{(x_{2}-x_{r})^{2}+(y_{2}-y_{r})^{2}+(z_{2}-z_{r})^{2}}+c\delta\\
   R_{3} & =\sqrt{(x_{3}-x_{r})^{2}+(y_{3}-y_{r})^{2}+(z_{3}-z_{r})^{2}}+c\delta\\
   R_{4} & =\sqrt{(x_{4}-x_{r})^{2}+(y_{4}-y_{r})^{2}+(z_{4}-z_{r})^{2}}+c\delta


As Equações acima são do tipo não lineares,
onde as variáveis :math:`x_{r}`, :math:`y_{r}`, :math:`z_{r}`
e :math:`\delta` podem ser estimadas de diferentes métodos, por exemplo,
pelo método iterativo, baseando-se na sua linearização :cite:`GNSS:kaplan2006fundamental`.

Segmentos GNSS
==============


Para que o GNSS seja capaz de calcular a posição, o tempo e a velocidade, em qualquer
posição e hora na terra, são necessários três segmentos, denominados
de segmentos espacial, de controle e usuário. Segue uma descrição
dos mesmos.

.. _seg_gnss.png:

.. figure:: /images/capitulo4/seg_gnss.png
   :scale: 35 %
   :alt: seg_gnss.png
   :align: center

   Segmentos GNSS.

Segmento espacial
-----------------

É constituído da constelação de satélites, com um número adequado,
orbitando a terra em diferentes posições no espaço, com a finalidade
de garantir que em qualquer posição na superfície da terra ou acima
dela, pelo menos quatro satélites disponíveis enviando sinais. Os
satélites são equipados com diversos instrumentos, podendo-se citar:
relógio(s) atômicos de alta precisão\footnote{Os relógios atômicos utilizam a frequência em diversas regiões de
espectro eletromagnético de átomos para a medição do tempo.}; painéis para captar energia solar, transformando em energia elétrica
para ser utilizada nos diversos equipamentos do satélite; computadores;
e transmissores de rádios, para enviar os sinais à terra. É por meio
dos sinais enviados, por cada satélite visível, que os receptores
conseguem calcular, para época do seu envio, a pseudodistância :math:`(R)`
e a posição orbital do satélite :math:`(\boldsymbol{\varrho}^{s})`. 

Segmento controle
-----------------

É o responsável, em terra, pelos satélites GNSS funcionarem de forma
adequada. Geralmente há uma estação de controle principal e outras
que auxiliam no rastreamento dos satélites. No rastreamento dos satélites,
por estas estações, faz-se a avaliação da qualidade de seus equipamentos,
relógio(s), e órbita. Por exemplo, observado algum problema de erro
do relógio do satélite, as estações de controle em terra fazem a correção.

O segmento controle também é responsável ligar ou deligar a função
de encriptar as informações enviadas quando isto se fizer necessário.
Por exemplo, em época de guerra, para que os únicos usuários a terem
informação de posição precisa, sejam os usuários de sua arma.

Segmento usuário
----------------

São todos aqueles que têm a sua disposição um receptor GNSS. Podem
ser classificados nas categorias de usuário e tipo de receptor. A
categoria usuário pode ser, militar ou civil. Geralmente, o usuário
civil, não vai ter acesso a todos serviços GNSS. Lembre-se que inicialmente
o GNSS foi construído com finalidades militares.

Os receptores, que são os equipamentos que vão captar e processar
a informação emitidas pelos satélites, são constituídos basicamente
de uma antena, processador para recebimento do sinal, relógio (geralmente
de cristal) e dispositivo para visualização de informação. Eles podem
apresentar diversas classificações de acordo com: o número de frequências
que consegue rastrear; ao tipo de sinal que rastreia; a capacidade
de rastrear diferentes GNSS.

.. _Exemplos de GNSS:

Exemplos de GNSS
================

GPS
---

O Sistema de Posicionamento Global (:math:`\bf{GPS}`,
:math:`\bf{G}\it{lobal}` :math:`\bf{P}\it{ositioning}` :math:`\bf{S}\it{ystem}`) é o mais conhecido GNSS. O seu
desenvolvimento começou em 1973, tendo como responsável o Departamento
de Defesa dos Estados Unidos. Entre os anos de 1978 a 1985 foram lançados
em órbita 11 protótipos, denominados de Bloco I, para avaliação e
testes. O primeiro satélite operacional foi lançado 1989, tornando
o segmento espacial do GPS completo 1994, com 24 satélites em órbita,
com satélites do Bloco II e IIA. No espaço eles estão distribuídos
em 6 planos orbitais distintos, com um ângulo de :math:`55^{\circ}` na
linha do Equador, a uma altitude de :math:`20.200\,\text{km}`, resultando em uma
volta ao redor da terra a cada 12 horas. Atualmente o segmento espacial
conta com 32 satélites, dos Blocos II/IIA/IIR/IIR-M\footnote{26/06/2012. Informações atualizadas podem
ser encontradas em `Navegation Center <https://www.navcen.uscg.gov/?Do=constellationStatus>`_.
Esta configuração de satélites permite que em qualquer hora do dia,
de quatro a oito satélites estejam simultaneamente disponíveis na
região. O segmento espacial segue em constante modernização. Atualmente
em teste nos satélites do Bloco IIR-M, um segundo sinal para uso civil
(L2C) e um sinal para uso militar (M). Os satélites GPS que foram
recentemente lançados, fazem parte do Bloco IIF, que inclui uma nova
frequência (L5).

.. _seg_gps.png:

.. figure:: /images/capitulo4/seg_gps.png
   :scale: 35 %
   :alt: seg_gps.png
   :align: center

   Características principais do GPS.

Há dois tipos de serviços no GPS, o Serviço de Posicionamento Padrão
(SPS, *Standard Positioning Service*)
para uso civil e o Serviço de Posicionamento Preciso (PPS, *Precise
Positioning Service*)
para uso militar. Para compreender melhor estes serviços, voltaremos
para os satélites, especificamente para os sinais enviados. Dentro
dos satélites é gerada uma frequência fundamental de 10,23 MHz, e
de forma coerente é derivada desta frequência duas ondas portadoras,
L1 e L2, gerados pela multiplicação da frequência fundamental por
154 e 120, respectivamente. Desta forma, a frequência de L1 e L2 corresponde,
a 1575,42 MHz e 1227,60 MHz, respectivamente. Modulado em L1 há o
Código Aberto (C/A, *Coarse/Acquisition*) disponível para uso civil, apresentando
aproximadamente 300 m de comprimento de onda. Um segundo código,
denominado de código de Precisão (P, *Precision Code*),
é modulado tanto em L1 como em L2 e é reservado para uso da arma Norte-Americana.
O código C/A é o utilizado no Serviço de SPS, enquanto o P para o
PPS. Adicionalmente a estes dados, são também enviados dados do erro
do relógio do satélite e suas efemérides, nas duas ondas portadoras.

O governo Americano pode fazer com que o posicionamento com GPS seja
prejudicado sempre que se mostrar necessário, como em caso de guerra,
danificando os sinais. As maneiras de danificar os sinais são, por
meio da Disponibilidade Seletiva
(SA, *Selective Availability*) e da Antifraude (A-S), *anti-spoofing*).
Se a SA estiver ativada os dados do relógio do satélite e das efemérides
enviadas são danificados, fazendo com que ocorra erro na pseudodistância
calculada por C/A. Ela foi ativada em 1990, causando erro na posição
horizontal e vertical de 100 m e de 156 m, respectivamente. Foi
suspensa em maio de 2000, resultando no erro horizontal e vertical
menores que 13 m e 22 m (95% de probabilidade), respectivamente.
O A-S é responsável por desligar ou encriptar o código P, tornando-o
acessível somente às pessoas habilitadas. Quando o código P, presente
em L1 e L2, é encriptado, passa a ser denominado de código Y.

O segmento controle é constituído de uma estação *master* (principal),
localizada em Colorado Springs, Estado do Colorado, USA. As outras
estações de controle ficam em diferentes localidades na terra, Hawai,
Kwajalein no Pacífico, Ilha de Ascenção no Atlântico Sul, Diego Garcia
no Oceano Pacífico e Cabo Canaveral. Elas são equipadas de tempo padrão
atômico de precisão e receptores que realizam medidas contínuas de
pseudodistância. Em algumas estações há antenas para transmitir e
receber dados dos satélites. Na estação *master* as informações
das estações são coletadas, e então calculadas as órbitas e parâmetros
dos relógios dos satélites.  As informações das efemérides e do relógio
dos satélites, calculadas pela estação *master*, são retransmitidas
aos satélites, pelo menos três vezes ao dia, para atualização. Segundo
:cite:t:`Hofmann2008` até 2006 mais 11 estações monitoras se somaram
ao segmento de controle GPS.


GLONASS
-------

O Sistema de Navegação Global por Satélite
(:math:`\bf{GLONASS}\text{,}\,`
:math:`\bf{GL}\it{Obal'naya}` :math:`\bf{NA}\it{vigatsionnaya}` :math:`\bf{S}\it{putnikovaya}` :math:`\bf{S}\it{istema}`)
é o GNSS da Federação Russa. Teve os seus primeiros satélites lançados
em meados dos anos 80. Em 1996 a constelação estava completa, com
24 satélites. Todavia, nos anos seguintes houve uma diminuição no
número de satélites, caindo ao número mínimo em 2001, com no máximo
6 satélites em órbita e funcionando. Atualmente o GLONASS conta com
24 satélites `(aqui para dados atualizados) <https://www.glonass-iac.ru/en/cus/>`_,
sendo 21 em operação, e os demais estão de reserva, em manutenção
ou em avaliação :cite:`GNSS:glonass`. Eles têm uma inclinação em relação
ao equador de :math:`64,8^{\circ}`, orbitando a terra na altitude de 19.100 m,
resultando em uma órbita ao redor da terra a cada 11 horas e 15 min
e 44 s. Os planos orbitais estão separados em :math:`120^{\circ}` (três
planos orbitais), estando os satélites separados dentro de cada plano
em :math:`45^{\circ}`.

.. _seg_glonass.png:

.. figure:: /images/capitulo4/seg_glonass.png
   :scale: 35 %
   :alt: seg_glonass.png
   :align: center

   Características principais do GLONASS.


O sistema GLONASS transmite os sinais em duas ondas portadoras de frequências
L1, L2 e L3 `(ver aqui) <http://www.navipedia.net/index.php/GLONASS_Signal_Plan>`_:

.. math::
   \mathrm{L1} & =f_{0\mathrm{L1}}+k\Delta f_{\mathrm{L1}}\\
   \mathrm{L2} & =f_{0\mathrm{L2}}+k\Delta f_{\mathrm{L2}}\\
   \mathrm{L3} & =f_{0\mathrm{L3}}+k\Delta f_{\mathrm{L3}}

em que: :math:`f_{0\mathrm{L1}}`, :math:`f_{0\mathrm{L2}}` e :math:`f_{0\mathrm{L3}}`,
repectivamente :math:`1.602\,\text{MHz}`, :math:`1.246\,\text{MHz}` e :math:`1.201\,\text{MHz}`; :math:`\Delta f_{\mathrm{L1}}`,
:math:`\Delta f_{\mathrm{L2}}` e :math:`\Delta f_{\mathrm{L3}}`em intervalos
de frequência de :math:`0,5625\,\text{MHz}`, :math:`0,4375\,\text{MHz}` e :math:`0,4375\,\text{MHz}`; :math:`k-7,...,+6`
são os canais de frequência. Nestas duas frequências são enviados
códigos um para uso civil (C/A) e outra para uso militar (P), disponibilizando
dois tipos de serviços, semelhante ao SPS e PPS do GPS.

Segundo :cite:t:`GNSS:kaplan2006understanding`, o segmento controle
do GLONASS é subdividido em: *i*) Sistema de controle central
(SCC, *System control center*) localizado em Golitsyno-2 a
70 km de Moscou, um complexo militar, responsável pela coordenação
de todo funcionamento do GLONASS; *ii*) Central de sincronização
(*Central Synchronizer*) responsável pelo sistema de tempo
do GLONASS, monitorando o relógio dos satélites; *iii*) estações
de rastreio e comando (*Command and Tracking Stations*) onde
fazem o rastreamento individual da trajetória dos satélites e enviam
as atualizações; *iv*) estações de rastreamento por laser (*Laser
Tracking Stations*), utilizadas para calibrar as medidas realizadas
no rastreamento por radio frequência (item *iv*), sendo que
cada satélite tem um refletor de laser para esta finalidade; e *v*)
Controle de navegação em campo (*Navigation Field Control Equipment*),
responsável por monitorar os sinais de navegação do GLONAS e, em caso
de alguma anomalia ser detectada, é enviado um comunicado para o SCC.

Galileu
_______

:math:`\bf{Galileu}` é o nome do GNSS da União
Europeia (EU, *European Union*). O nome, Galileu, é uma homenagem
ao cientista italiano Galileu Galilei, que viveu entre os anos de
1564 e 1642, tendo realizado grandes contribuições às ciências, como,
por exemplo, a melhoria do telescópio (Maiores informações
`aqui <http://en.wikipedia.org/wiki/Galileo_Galilei>`_).
O sistema Galileu envolve uma parceria da Comissão Europeia (EC, *European
Commission*) com a Agência Espacial Europeia (ESA, *European
Space Agency*). A EC é responsável pelo dimensionamento político e
os requisitos necessários para o sistema. Já a ESA, tem como responsabilidade
a definição, o desenvolvimento e a validação do segmento espacial
e de terra :cite:`GNSS:galileu`. O sistema Galileu teve sua concepção
inicial nos anos 90, quando o GPS e o GLONASS já estavam quase em
funcionamento completo.

.. _seg_galileu.png:

.. figure:: /images/capitulo4/seg_galileu.png
   :scale: 45 %
   :alt: seg_galileu.png
   :align: center

   Características principais do Galileu.

Em outubro de 2021 haviam 22 satélites em funcionamento(Informações atualizadas `aqui
<http://www.esa.int/Our_Activities/Navigation/The_future_-_Galileo/What_is_Galileo>`_.
De acordo com :cite:t:`GNSS:kaplan2006galileu`, quando o sistema
espacial estiver em plena operação terá de 30 satélites em três planos
orbitais igualmente espaçados, cada plano com 9 satélites ativos e
um de reserva, espaçados em :math:`40^\circ`. A órbita tem inclinação
de :math:`56^\circ` no plano do equador :cite:`GNSS:galileu`. A altitude
de :math:`23.222` km resultará em uma órbita a cada 14 horas. É esperado
que existirá uma alta probabilidade (maior que 90%) que em qualquer
posição e altitude, o usuário vá receber sinal de pelo menos 4 satélites.
Segundo :cite:t:`Hofmann2008`, as frequencias enviadas pelo sistema
Galileu são: E1 (:math:`1.575,420` MHz); E6 (:math:`1.278,750` MHz); E5 (:math:`1.191,795`
MHz); E5a (:math:`1.176,450` MHz) e; E5b (:math:`1.207,140` MHz)

São cinco os serviços que serão disponibilizados pelo sistema Galileu
para os usuários :cite:`GNSS:european2010european2`: *i*) serviço
aberto (*open service*), que tem como objetivo prover informação
de posição, velocidade e tempo sem custo algum para o usuário; *ii*)
serviço comercial (*commercial service*), que possibilitará
o desenvolvimento de aplicações comerciais, terá precisão centimétrica;
*iii*) navegação para segurança da vida (*Safety Of
life navigation*), serviço para ser utilizado no transporte marítimo,
na aviação e em trens; *iv*) serviço público regulado (*Public
regulated navigation*), um serviço em que o sinal é encriptado e apenas
os usuários autorizados terão acesso a este sinal; e *v*) serviço
de busca e resgate (*Search and Rescue Service*), utilizado
para localização e resgate de usuários que utilizam rádio sinalizadores.

Segundo :cite:t:`GNSS:kaplan2006galileu`, o sistema Galileu tem
dois segmentos de controle principal em terra, o segmento de controle
em terra (GCS, *Ground Control Segment*) que irá controlar
e comandar a constelação de satélites e, o segmento de missão em terra
(GMS, *Ground Mission Segment*), responsável por operar o sistema
de navegação e a determinação da integridade, assim como disseminar
os serviços do Galileu. Estes dois segmentos se localizam em Fucino
(Itália) e em Oberpfaffenhofen (Alemanha). Haverá também uma rede
de estações (GSS, GALILEO *Sensor Stations*), para realização
de medidas de distância e monitoramento dos sinais dos satélites;
uma rede de telemetria, rastreamento e controle (TT&C, *Telemetry,
tracking and control*); e uma rede de estações para envio de informação
(ULS, *uplink stations*); uma rede de intercomunicação de alta
performance.

Outros GNSS
-----------

Além do GNSS americano, russo e europeu, outros países também desenvolvem
o seu próprio sistema. O principal motivo para o desenvolvimento de
novos GNSS é o de ter independência dos outros sistemas que, como
visto, a permissão de uso depende das nações que os construíram. Abaixo
descreve-se um resumo do sistema chinês (Beidou-2/Compass,
e dos regionais, o japonês (QZSS) e o indiano (IRNSS).

O sistema Beidou-2/Compass, desenvolvido pela República da China,
tem como predecessor o sistema Beidou-1,
que teve seus primeiros estudos nos anos 80, e o primeiro satélite
em órbita no ano 2000 e o terceiro e último, em 2003. O Beidou-1 funciona
regionalmente. Diferentemente do GPS, Galileu e GLONASS, ele é geoestacionário,
fazendo com que apenas uma parte da terra tenha disponibilidade dos
sinais destes satélites, entre as latitudes de :math:`5^\circ` N a :math:`55^\circ`
N e as longitudes entre :math:`70^\circ` E e :math:`140^\circ` E. O Beidou-2
será global, com o segmento espacial híbrido, tendo 5 satélites geoestacionário
e 30 orbitando a terra. Terá, assim como o GPS, um serviço aberto
para uso civil e um outro restrito. Atualmente estão em operação 42
satélites em outubro de 2021 (dados atualizados
`aqui <http://en.wikipedia.org/wiki/Beidou_navigation_system>`_).

O sistema de posicionamento japonês é denominado de sistema de satélite
quase zenital (QZSS, :math:`\bf{Q}\it{uasi-}\bf{Z}enith` :math:`\bf{S}\it{atellite}` System}), desenvolvido
pela agência de exploração aeroespacial do Japão (JAXA, *Japan Aerospace Exploration Agency*). O QZSS oferece seus serviços na região
compreendendo o Japão, sul da Ásia e Oceania. Os satélites QZSS enviam
os sinais à terra na direção quase zenital, o que aumenta sua disponibilidade
em áreas com prédios ou morros. Funcionará complementando o GPS, fazendo
com que mais sinais estejam disponíveis, uma vez que o número de satélites
na região será maior, pois soma-se ao GPS o QZSS. Desta forma, a precisão
do posicionamento será melhorada. Os satélites QZSS transmitem sinais
semelhantes ao GPS (L1C/A, L1C, L2C e L5) (Informações atualizadas
`aqui <https://global.jaxa.jp/projects/sat/qzss/>`_).
O primeiro satélite foi lançado em setembro de 2011, está a uma altitude
entre :math:`32.000` km a :math:`40.000` km, e tem sua longitude central de :math:`135^{\circ}`
E. O QZSS além do segmento espacial, consta do: segmento de controle,
que compreende estações de monitoramento; uma estação de controle
principal; estação de controle e rastreamento; e estação de administração
do tempo :cite:`GNSS:QZSS`.

O sistema de navegação por satélite indiano (IRNSS,
*Indian Regional Navigational Satellite System*) constituído
de 7 satélites, sendo que o primeiro tem a estimativa de ser lançado
em 2012-13 :cite:`GNSS:IRNSS_indiano`. Como o sistema GPS, serão disponibilizados
os serviço SPS e PS.

Observáveis e fontes de erro
============================

Os satélites no espaço enviam os sinais para terra que são captados
pelos receptores, sendo a distância, na verdade pseudodistância\index{Pseudodistância},
entre o sinal emitido pelo satélite e recebido pelo sensor calculada,
ou por código (medida de tempo) ou pela medida de fase da onda portadora.
A distância calculada tem várias fontes de erro, por exemplo, a falta
de sincronismo de tempo entre o relógio do receptor e do satélite,
resultando distâncias que não correspondem à distância geométrica
do satélite ao receptor. Desta maneira as distâncias calculadas pelos
receptores são denominadas de pseudodistâncias como já visto na secção :ref:`posicionamento_satelite`.

.. _Pseudodistância por código:

Pseudodistância por código
--------------------------

Lembre-se que, por exemplo, no GPS há o envio do código C/A, onde
são transmitidas várias informações, dentre elas a hora em que o sinal
foi emitido pelo satélite, :math:`t^{s}(sat)`. Esta informação chega ao
receptor, depois de viajar pelo espaço e passar pela atmosfera. A
hora de chegada do sinal no receptor denominado de :math:`t_{r}(rec)`.
O erro dos relógios dos satélites e do receptor ao sistema de hora
GPS são denominados de :math:`\delta^{s}` e :math:`\delta_{r}`, respectivamente.
Considere que no sistema de tempo sem erros, :math:`t^{s}` e :math:`t_{r}`,
seria a hora de envio do sinal pelo satélite e a hora de recebimento
pelo receptor. Então, :math:`t_{r}(rec)=t_{r}-\delta_{r}` e :math:`t^{s}(sat)=t^{s}-\delta^{s}`.
O lapso de tempo entre o envio do sinal e a chegada ao receptor será:

.. math::
   t_{r}(rec)-t^{s}(sat)=(t_{r}-\delta_{r})-(t^{s}-\delta^{s})=\Delta t+\Delta\delta,

em que: :math:`\Delta t=t_{r}-t^{s}` e :math:`\Delta\delta=\delta_{r}-\delta^{s}`.
Se multiplicar a diferença de tempo, :math:`{t_r(rec)-t^s(sat)}`, pela
velocidade da luz, :math:`c`, temos a pseudodistância (:math:`R`) determinada
pelo código:

.. math::
   R=c(t_{r}(rec)-t^{s}(sat))=c\Delta t+c\Delta\delta=\varrho+c\Delta\delta


em que :math:`\varrho` é a distância geométrica (ver Figura :numref:`fig_GNSS_posicion`),
na época de envio do sinal (:math:`t^{s}`), entre o satélite e o receptor.
O erro no cálculo da pseudodisdância por código é de cerca de 1\%
da comprimento de onda em que o código é enviado. No sistema GPS,
o C/A tem comprimento de onda de :math:`\approx300\,\text{m}`, o que
resultaria em um erro de :math:`3` m. Já o código P,
tem comprimento de onda de :math:`\approx30\text{ m}`, o que resultaria
em um erro da pseudodistância de :math:`0,3` m na medida de :math:`R`.

.. _Pseudodistância por fase da onda portadora:

Pseudodistância por fase da onda portadora
------------------------------------------

Uma outra maneira de medir a distância é por meio da fase de onda
portadora. Esta medida apresentará maior precisão no posicionamento.
Nesta técnica, em cada época em que o sinal é transmitido, mede-se
a diferença de fase que ocorreu entre a fase do sinal enviada pelo
satélite e a fase observada no receptor. Matematicamente é dada por:

.. math::
   \Phi_{s}^{r}(t)=\frac{1}{\lambda^{s}}\varrho_{s}^{r}(t)+N_{r}^{s}+\frac{c}{\lambda^{s}}\Delta\delta_{r}^{s}(t)

em que: :math:`\Phi_{s}^{r}(t)` é a medida de fase, sendo expressa
em ciclos; :math:`\lambda^{s}` é o comprimento de onda da portadora; :math:`\varrho_{s}^{r}(t)`
é a mesma pseudodistância estimado pelo código; :math:`N_{r}^{s}` é a denominado
de ambiguidade, corresponde ao número inteiro
de comprimentos de onda ou número de ciclos inicial, entre o satélite
e o receptor; :math:`c` é a velocidade da luz; e :math:`\Delta\delta_{r}^{s}=\delta_{r}-\delta^{s}`.
O valor :math:`N_{r}^{s}` inicialmente é desconhecido, contudo com o rastreamento
de outras observações no tempo, sem que ocorra a perda de sinal, pode-se
determiná-la.

Erros nas observações
---------------------

Do que foi visto anteriormente, para o GNSS realizar as medidas de
posição, tem-se: os satélites enviando sinais com várias informações,
como o tempo e as efemérides; estes sinais viajam pelo espaço, passando
pela atmosfera; e enfim chegam ao receptor, que também tem um relógio.
Desta forma, as fontes de erros do GNSS são devidos aos satélites
(relógio e órbita), à propagação do sinal (refração devido a passagem
do sinal pela ionosfera e troposfera) e ao receptor (erro do relógio,
erro do centro de fase da antena e o multicaminhamento). Alguns erros
podem ser modelados e outros eliminados, por exemplo, por meio de
medidas simultâneas com dois receptores. Segue uma breve discussão
dos erros.

.. _Erro devido ao satélite:

Erro devido ao satélite
-----------------------

#. **Relógio do satélite**: o erro devido
   ao relógio do satélite é modelado, por: :math:`{\delta^{s}(t)=a_{0}+a_{1}(t-t_{0})+a_{2}(t-t_{0})^{2}}`,
   em que: {:math:`\delta^{s}(t)`} é o erro do satélite
   na época :math:`t;` :math:`t_{0}` é a época de referência do relógio do satélite;
   :math:`a_{0},\,a_{1}` e :math:`a_{2}` são parâmetros do modelo, sendo enviados
   na mensagem do satélite, juntamente com :math:`t_{0}`. Se for utilizado
   o posicionamento relativo este erro pode ser anulado (ver :ref:`sec_Tipos-de-posicionamento`).
#. **Órbita do satélite**: devido a variação
   da força gravitacional da terra e da variação das marés, por exemplo,
   as efemérides enviadas pelos satélites, que são utilizadas para determinação
   de suas posições, podem não resultar nas suas corretas posições no
   espaço. O erro da posição da órbita é avaliado pelas estações de controle
   em solo, e são disponibilizadas para pós-processamento, minimizando
   este erro. Dependendo do nível de precisão das órbitas que se deseja,
   pode-se levar até duas semanas para estarem disponíveis :cite:`WOLF`.
   Outra forma de anular este erro é por meio do posicionamento relativo
   (ver :ref:`Posicionamento relativo:`).


Erro devido à propagação do sinal
---------------------------------

A velocidade de propagação da radiação eletromagnética depende do
índice de refração do meio em que ela viaja, sendo no vácuo :math:`c=299.792,458\,\text{km s}^{-1}`.
Inicialmente, ao ser transmitida pelo satélite, ela viaja no vácuo
até chegar na atmosfera. As camadas atmosféricas que tem impacto nos
sinais que são enviados pelos GNSS são, a troposfera e a ionosfera.
A troposfera é a camada mais próxima a superfície terrestre chegando
até à altitudes entre 14 km-18 km, já a ionosfera está situada na
camada entre 70 km-1.000 km de altitude. Este problema pode ser
minimizado com receptores que trabalham em duas frequências (e.g.
GPS, L1 e L2), em que a refração atmosférica poderá ser modelada.

Como o erro da refração aumenta com o comprimento da camada atmosférica
que o sinal vai atravesar, pode-se configurar o receptor para evitar
satélites que estajam próximos à linha do horizonte, geralmente aqueles
abaixo de :math:`20^{\circ}` da linha do horizonte, minimizando a influência
da atmosfera. Este ângulo é denominação de ângulo de máscara de elevação
do satélite (*satellite
angle mask*). Na :numref:`GNSSmaskangle.png` é apresentado um
receptor que está configurado para receber sinais daqueles satélites
que estiverem acima de :math:`20^{\circ}` da linha do horizonte.

.. _GNSSmaskangle.png:

.. figure:: /images/capitulo4/GNSSmaskangle.png
   :scale: 35 %
   :alt: GNSSmaskangle.png
   :align: center

   Princípio da utilização de máscara de elevação pera prevenir satélites
   próximos a linha do horizonte.

.. _Erro devido ao receptor:

Erro devido ao receptor
-----------------------

#. **Antena**
   - **Centralização do centro da antena**: em levantamento de precisão, a antena do receptor
     GNSS terá que estar centralizada sobre um ponto, geralmente materializado
     por um marco. A vertical do centro da antena é materializada por um
     bastão, apoiado por um tripé. Deve-se fazer a centralização de forma
     cuidadosa, uma vez todo erro cometido devido a falta de centralização
     será transferido para o ponto medido.
   - Para medidas de altitude geométrica (ver :ref:`Coordenada geodésica`)
     é necessário realizar a **medida da altura da antena**,
     distância vertical entre o centro da antena e o centro do marco. Esta
     medida geralmente é realizada de forma inclinada, sendo que posteriormente
     é corrigida para distância vertical, ou por meio de software do equipamento,
     ou por simples cálculo.
   - O centro de fase da antena,
     definido como o centro eletrônico da antena, varia com a orientação
     e a frequência do sinal. É necessário que ele corresponda ao centro
     físico da antena, sendo que nem sempre isto ocorre. Para levantamentos
     de alta precisão é necessário conhecer este desvio para correção.
     Procedimento para esta avaliação é encontrado em :cite:t:`Hofmann2008`.
#. **Erro do relógio**: os relógios presentes nos receptores GNSS não são de alta precisão como
   os presentes nos satélites, não apresentando sincronismo com o sistema
   de tempo do GNSS. Este problema é resolvido com a utilização da observação
   de quatro satélites simultaneamente.
#. **Multicaminhamento**: o multicaminhamento é definido como sendo as réplicas de sinal que o
   receptor recebe devido ao sinal ter percorrido diferentes caminhos.
   Na :numref:`fig_GNSS_multipath` é apresentada a concepção básica
   do que é o efeito multicaminhamentoem uma
   determinada época. Nesta figura há o sinal que percorre o caminho
   direto do satélite ao receptor e dois sinais que são recebidos pelo
   receptor por caminho indireto, sinais refletidos de superfícies refletoras,
   a obra de construção civil e a superfície terrestre.

   A consequência do multicaminhamento é a imprecisão da medida de distância
   satélite-receptor (:math:`\varrho`). O multicaminhamento pode ser de tal
   grandeza que o receptor não possa mais contar com a informação de
   determinado satélite, para o posicionamento do ponto. Maneiras para
   mitigar o multicaminhamento podem ser encontrados em :cite:t:`GNSS:kaplan2006Multipath`.
   Pode-se citar, por exemplo, como uma maneira simples para minimizar
   o efeito do multicaminhamento devido à superfície refletora, a instalação
   da antena próxima a superfície.


.. _fig_GNSS_multipath:

.. figure:: /images/capitulo4/GNSSmultipath.png
   :scale: 35 %
   :alt: GNSSmultipath.png
   :align: center

   Multicaminhamento no GNSS.

.. _sec_Tipos-de-posicionamento:

Tipos de posicionamento
=======================

Terminologia
------------

Não há um concenso quanto terminologia utilizada às diferentes técnicas
de posicionamento GNSS. Aqui será utilizada a terminologia adotada
por :cite:t:`Hofmann2008`. No posicionamento, as medidas de pseudodistância
podem ser obtidas de duas formas, por meio dos **códigos** (ver
secção :ref:`Posicionamento por ponto`) ou da medida
de **fase da onda portadora** (ver ver :ref:`Pseudodistância por fase da onda portadora`).
As medidas por código tem precisão em nível de metros, enquanto pela
medida da onda portadora tem precisão de milímetros. A desvantagem
das medidas de fase da onda portadora é a solução da ambiguidade :math:`(N)`.

Quando na medida de posição é utilizado um único receptor, recebendo
sinais de pelo menos quatro satélites, ela é dita de **posicionamento por ponto**, sendo este o
termo que será utilizado neste texto.
O posicionamento por ponto também pode ser denominado de **posicionamento absoluto**,
**posicionamento por ponto simples** ou **posicionamento por ponto absoluto**.

No **posicionamento relativo**,
empregam-se dois receptores, recebendo sinais dos mesmos satélites
simultaneamente. Estas medidas então são combinadas, melhorando a
precisão do levantamento. A posição de um ponto tem que ser conhecida,
sendo então calculada a posição do outro ponto relativa a esta.

O **posicionamento diferencial**
é realizado também a partir de dois receptores, que fazem observações
simultâneas aos mesmos satélites, todavia é feita tendo como base
as pseudodistâncias corrigidas. Como um receptor é fixo em um ponto
de coordenada conhecida, calcula-se as correções das pseudodistância
a este ponto e estas correções, em determinada época, são enviadas
em tempo real para o(s) outro(s) receptores.

O posicionamento é dito **estático**, se não há movimentação do receptor durante posicionamento.
Por outro lado, se o receptor está em movimento, o posicionamento
é dito **cinemático**.

O posicionamento pode ser realizado em **tempo real**,
quando os resultados são processados e apresentados imediatamente.
Já o posicionamento **pós-processado**,
como o próprio nome diz, só serão conhecidas as posições depois de
processados. Ou seja, neste caso, os dados são coletados em campo
e, no escritório, são submetidos ao processamento. O método de pós-processamento
é o método mais utilizado nos posicionamentos relativos, onde as medidas
dos dois receptores são combinadas e processadas depois da coleta
em campo.

.. _Posicionamento por ponto:

Posicionamento por ponto
________________________

No posicionamento por ponto, utiliza-se apenas um receptor, sendo
que este deve estar recebendo sinais de pelo menos 4 satélites para
calcular as coordenadas tridimensionais (:numref:`GNSSposiabsoluto`).
O posicionamento por ponto pode se dar por meio dos códigos (ver :ref:`Pseudodistância por código`)
ou pela medida de fase da onda portadora (ver :ref:`Pseudodistância por fase da onda portadora`).
A precisão deste tipo de posicionamento depende da qualidade do sinal.
No posicionamento por ponto no GPS, utilizando o código C/A, antes
de maio de 2000, com disponibilidade seletiva (SA)
em funcionamento, a precisão era em torno de 100 m na horizontal
e 156 m na vertical, ao nível de 95% de probabilidade :cite:`WOLF` [p. 346].
Quando ela foi desabilitada, a precisão aumentou, para velares menores
que 13 m na horizontal, e menores que 22 m na vertical, a 95% de
probabilidade  :cite:t:`Hofmann2008` [p. 317], sendo esta a precisão obtida
atualmente.

.. _GNSSposiabsoluto:

.. figure:: /images/capitulo4/GNSSposiabsoluto.png
   :scale: 35 %
   :alt: GNSSposiabsoluto.png
   :align: center

   Concepção do posicionamento por ponto.

Pode-se obter coordenadas com maior precisão com um único receptor
pelo método denominado de **posicionamento por ponto preciso**.
Para tanto, deve-se trabalhar
com: *i*) as efemérides precisas dos satélites, para determinação
de suas posições precisas dos satélites; *ii*) receptor com
frequência dupla que permitirá eliminar a influência da ionosfera.

.. _Posicionamento_diferencial:

Posicionamento diferencial (DGNSS)
----------------------------------

O posicionamento diferencial GNSS (DGNSS)
é aquele em que se utilizam pelo menos 2 receptores, sendo um fixo
na estação base (*base station*), também denominada de estação
de referência, e o(s) outro(s) fixo(s) ou móvel(is) (*rover*)
(:numref:`GNSSposiDGNSS`). Os receptores observam, em determinada
época, os mesmos satélites. A estação base tem suas coordenadas conhecidas.
Logo, com o receptor fixo a este ponto, é possível calcular os erros
nas medidas de pseudodistância de cada um dos satélites a esta estação.
Como os outros receptores se encontram próximos à estação base (distância
de apenas alguns quilômetros), assume-se que os erros nas pseudodistâncias
sejam os mesmos. Estas informações são enviadas por meio de transmissor
aos outros receptores para realizar, em tempo real, a correção de
suas respectivas pseudoditâncias aos satélites, e assim calcular as
suas coordenadas com maior precisão. O DGNSS pode ser realizado por
meio de receptores que trabalham com códigos ou com medidas de fase
da onda portadora. Valores de precisão do levantamento DGNSS são apresentados
na Tabela abaixo :cite:`Hofmann2008` [p. 437].
Quando se utiliza as medidas de fase da onda portadora, este posicionamento
é denominado de levantamento cinemático em tempo real
(*real-time kinematic*, RTK)
:cite:`WOLF`.


.. _GNSSposiDGNSS:

.. figure:: /images/capitulo4/GNSSposiDGNSS.png
   :scale: 35 %
   :alt: GNSSposiDGNSS.png
   :align: center

   Concepção do posicionamento relativo.


.. table:: Precisão DGNSS.
    :header-alignment: lcc
    :column-alignment: lrr

    =============== ======================= =====================
    Observável      Separação das estações  Precisão horizontal
    =============== ======================= =====================
    Código          :math:`1.000` km        :math:`<10` m
    Onda portadora  :math:`\sim 10` km      :math:`<0,1` m
    =============== ======================= =====================

.. _Posicionamento relativo:

Posicionamento relativo
-----------------------

No posicionamento relativo (:numref:`GNSSposiarelativo`)
o que se calcula é a distância relativa entre o receptor que se encontra
fixo na estação de coordenada conhecida (:math:`A`) e o que se encontra
na posição desconhecida, :math:`B`, ou seja, :math:`\Delta X_{AB},\,\Delta Y_{AB}\,\text{e}\,\Delta Z_{AB}`,
denominado de vetor base. Como a posição de :math:`A` é conhecida (:math:`X_{A},\,Y_{A},\,Z_{A}`),
a posição de :math:`B` será:

.. math::
   X_{B} & =X_{A}+\Delta X_{AB}\\
   Y_{B} & =Y_{A}+\Delta Y_{AB}\\
   Z_{B} & =Z_{A}+\Delta Z_{AB}

Neste método geralmente são utilizadas as medidas de diferença de
fase juntamente com o código. Requer que os mesmos satélites sejam
observados pelos receptores da estação base e no móvel durante o período
de aquisição dos dados.

.. _Posicionamento relativo estático:

Posicionamento relativo estático
--------------------------------

O posicionamento dito como **posicionamento relativo estático**
ocorre quando os dois receptores ficam estacionados por um tempo suficientemente
longo para resolver o problema das medidas relativas entre eles. Este
tipo de posicionamento é o utilizado nos levantamentos geodésicos.
O tempo para coleta dos dados depende do número de fases medidas e
da distância que separa os receptores. Sugestões de tempo para obtenção
da posição é apresentada na Tabela abaixo,
sendo considerado pelo menos quatro satélites visíveis, condição atmosférica
normal e boa geometria dos satélites :cite:`Hofmann2008` [p. 438].
Segundo :cite:`WOLF` [p. 361], a precisão deste tipo de posicionamento
é de aproximadamente :math:`\pm(3\,\text{mm}+1\,\text{ppm})`.

.. table:: Tempo para aquisição da posição pelo método relativo estático.
    :header-alignment: lcc
    :column-alignment: lrr

    =================== ======================================== =========================================
    Receptor (# fases)  Estático (m)                             Estático rápido
    =================== ======================================== =========================================
    Simples frequência  30 min + 3 min :math:`\,\text{km}^{-1}`  20 min + 2 min :math:`\,\text{km}^{-1}`
    Dupla frequência    20 min + 2 min :math:`\,\text{km}^{-1}`  10 min + 1 min :math:`\,\text{km}^{-1}`
    =================== ======================================== =========================================

.. _Posicionamento relativo pseudo-cinemático:

Posicionamento relativo pseudo-cinemático
-----------------------------------------

O **posicionamento relativo pseudo-cinemático** (*Pseudokinematic
relative positioning*)
é aquele em que as posições relativas dos pontos a serem determinadas
são ocupadas mais de uma vez com o receptor :math:`B`. Mais uma vez, um
outro receptor estacionado em ponto de coordenadas conhecidas :math:`(A)`.
O receptor :math:`B` fica estacionado por uns 5 min em cada ponto. Depois
de aproximadamente uma hora, a posição é novamente reocupada por :math:`B`.
Caso o levantamento não seja bem planejado a reocupação dos pontos
pelo receptor pode passar a ser um problema.

.. _GNSSposiarelativo:

.. figure:: /images/capitulo4/GNSSposiarelativo.png
   :scale: 35 %
   :alt: GNSSposiarelativo.png
   :align: center

   Concepção do posicionamento relativo.

.. _Posicionamento relativo cinemático:

Posicionamento relativo cinemático
----------------------------------

O **posicionamento relativo cinemático** (*kinematic relative positioning*)
é aquele em que é possível determinar as posições de um maior número
pontos, no menor tempo, com grande precisão. É necessário que a ambiguidade
inicial (ver :ref:`Pseudodistância por fase da onda portadora`)
seja determinada, o que pode ser realizado por diferentes técnicas.
Por exemplo, se as coordenadas iniciais dos receptores forem conhecidas,
então :math:`\Delta X_{AB},\,\Delta Y_{AB},\,\Delta Z_{AB}` (ver :ref:`Posicionamento relativo`)
também serão. Então, estaciona-se os receptores nestes ponto e a ambiguidade
é determinada depois de um intervalo curto de tempo (2 a 15 min).
Um outro método é o de determinar a ambiguidade com o receptor :math:`B`
em movimento, método denominado  de *on-the-fly*.
Neste método é necessário trabalhar com receptor de dupla frequência,
sendo a ambiguidade resolvida em cerca de 2 min para receptores separados
em 20 km. Uma limitação deste método é que durante a coleta de dados
não se pode perder os sinais GNSS. Caso ocorra perda de sinal iniciar
novamente o sistema para determinação da ambiguidade.

Um método baseado no posicionamento relativo cinemático, mas que apresenta
maior precisão, pois nos pontos de posições desconhecidas, o receptor
:math:`B` permanecerá parado por poucos segundos, é denominado de pare-e-continue
(*stop-and-go*) ou semi-cinemático (*semikinematic*).
A precisão é aumentada conforme o tempo de parada se torna mais longo.
Para vetor base de 20 km a precisão é centimétrica.

.. admonition:: Sugestão de aula prática

   **Levantamento de área com equipamento GNSS de navegação**

   *Objetivo*:  Levantar uma poligonal em campo com o auxílio de GNSS de navegação, para posteriormente desenhar no
   *AutoCad*  ou no *Google Earth Pro*

   Como roteiro:

   - apresentar uma visão geral do receptor que será utilizado: ântena, bateria, visor, teclado de comandos, janelas de configuração e coleta de dados, etc;
   - configurar para o Datum WGS84;
   - configurar para o sistema de projeção UTM;
   - apresentar os modos de salvar as coordendas dos pontos;
   - mostrar as medidas de qualidade da coordenada (e.g. precisão, HDOP, PDOP)
   - em campo, coletar as coordenadas dos vértices da poligonal;
   - desenhar no *AutoCad*  ou no *Google Earth Pro*.

   Ao final o aluno deve apresentar um relatório sobre o levantamento e, suas considerações sobre
   a qualidade do levantamento de uma área, quando um receptor GNSS de navegação é utilizado.

Exercícios
==========


:exem:`1)` Quais são os segmentos do GNSS? Explique-os? 

----

:exem:`2)` Explique como os GNSS calculam as coordenadas de
um ponto.

----

:exem:`3)` Como são denominados os GNSS americano, o da comunidade
europeia e o russo? Comente cada um deles.

----

:exem:`4)` O posicionamento GNSS pode ser por ponto, diferencial
ou relativo. Comente.

:exem:`5)`  Quais são as fontes de erros nas medidas de pseudodistância
do GNSS? 

----

:exem:`6)` O GNSS calcula a altitude geométrica ou ortométrica?
Explique.

----

:exem:`7)` A altitude medida pelo GPS é em relação a qual elipsóide?

:exem:`8)` Sobre um marco geodésico do IBGE de coordenada
:math:`E=595.690,0\,\text{m}` e :math:`N=9.433.750,0\,\text{m}` (fuso 24M) foi colocado
um receptor GNSS, e este mostrou a coordenada :math:`E= 595.650,0\,\text{m}` e
:math:`N= 9.433.720,0\,\text{m}` (fuso 24M). A coordenada do receptor está a NE, SE,
SW ou NW com relação à coordenada do marco? Explique. 

:exem:`Resp.`: SW.

----

