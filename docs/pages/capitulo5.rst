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

Capitulo 5: Georreferenciamento de imóveis rurais
*************************************************

Introdução
==========

O georreferenciamento de imóveis rurais trata da identificação do
imóvel, realizado por profissional habilitado onde, no memorial descritivo,
deve conter as coordenadas dos vértices definidores dos limites. As
coordenadas devem estar georreferenciadas ao Sistema Geodésico Brasileiro,
o Sistema de Referência Geocêntrico para as Américas, SIRGAS2000 (:any:`Datum horizontal`).
Há uma norma para execução
deste serviço, denominada Norma Técnica para Georreferenciamento de
Imóveis Rurais (`Disponível aqui <https://sigef.incra.gov.br/static/documentos/norma_tecnica_georreferenciamento_imoveis_rurais_3ed.pdf>`_)
:cite:`norma_georre2013`. Para melhor entendimento do georreferenciamento, acompanha
também o Manual Técnico de Posicionamento: georreferenciamento de imóveis rurais
(`disponível aqui <https://sigef.incra.gov.br/static/documentos/manual_tecnico_posicionamento_1ed.pdf>`_) :cite:`manual_georre2013`
e o Manual Técnico de Limites e Confrontações, publicado pelo INCRA
(`disponível aqui  <https://sigef.incra.gov.br/static/documentos/manual_tecnico_limites_confrontacoes_1ed.pdf>`_) :cite:`limitantes_georre2013`.
Nesta secção será realizada uma breve apresentação do georreferenciamento.

Objetivo e prazos
-----------------

O objetivo do georreferenciamento de imóveis rurais é o de disponibilizar
um Cadastro Nacional de Imóveis Rurais (CNIR), sistema único de registro
de imóveis rurais para o país, tornando os limites das propriedades
rurais precisas. Desta forma, evita-se que uma área tenha mais de
uma matrícula. Segundo :cite:t:`norma_georre2013`, a matrícula é 'ato cadastral
realizado pelo registro de imóveis que visa à perfeita identificação
do imóvel, caracterizando-o e confrontando-o, conferindo-lhe um número
de ordem pelo qual será identificado, sem criar, conferir ou modificar
direitos'. no serviço de registro de imóveis. Nos casos de desmembramento, parcelamento,
remembramento e em qualquer situação de transferência de imóvel rural,
os `prazos <http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2011/Decreto/D7620.htm>`_
para o georreferenciamento variam de acordo com o tamanho da propriedade
(Tabela abaixo).

.. table:: Prazos para o georreferenciamento de imóveis rurais
   :widths: auto

   +---------------------+------------------------+
   |Área                 | Prazo                  |
   +=====================+========================+
   |:math:`100\vdash250` | 20 de novembro de 2016 |
   +---------------------+------------------------+
   |:math:`25\vdash100`  | 20 de novembro de 2019 |
   +---------------------+------------------------+
   |:math:`<25`          | 20 de novembro de 2023 |
   +---------------------+------------------------+

Profissional habilitado
-----------------------

O georreferenciamento só pode ser realizado por profissional habilitado,
com registro no Conselho Regional de Engenharia e Arquitetura
(CREA, a entidade autárquica de fiscalização do exercício e das atividades
profissionais dotada de personalidade jurídica de direito público,
constituindo serviço público federal, vinculada ao Conselho Federal
de Engenharia e Agronomia (CONFEA)). Cada estado tem o
seu CREA, será necessário a emissão de uma Anotação de Responsabilidade Técnica (ART)
pelo técnico responsável. Há também a necessidade deste profissional
ser credenciado junto ao Instituto Nacional de Colonização e Reforma
Agrária (INCRA) para este tipo de levantamento. O Procedimento
para cadastramento se encontra na Norma, só podendo requirir o credenciamento
aqueles profissionais habilitados.

Segundo o Conselho Federal de Engenharia e Agronomia (CONFEA), os
profissionais habilitados
para assumir a responsabilidade técnica para o serviço de georreferenciamento
são aqueles que, por meio de cursos regulares de graduação ou técnico
de nível médio, ou por meio de cursos de pós-graduação ou de qualificação/aperfeiçoamento
profissional, comprovem que tenham cursado os seguintes conteúdos
formativos: topografia aplicada ao georreferenciamento; cartografia;
sistemas de referência; projeções cartográficas; ajustamentos; métodos
e medidas de posicionamento geodésico. São vários os profissionais
que podem fazer o georreferenciamento, caso tenha na sua grade, os
tópicos mostrados acima, podendo-se citar, por exemplo: Engenheiro
Agrônomo; Engenheiro Cartógrafo; Engenheiro de Geodésica e Topografia;
Engenheiro Civil; Engenheiro Florestal; Engenheiro Agrícola; Engenheiro
de Minas e Geólogo.

Tipos de vértices e sua identificação
-------------------------------------

Para a definição dos limites do imóvel rural são utilizados vértices
(vértice é '**É  o  ponto  onde  a  linha  limítrofe  do  imóvel  rural  muda  de  direção  ou  onde  existe
interseção desta linha com qualquer outra linha limítrofe de imóvel contíguo**' :cite:`manual_georre2013`),
sendo que estes podem ser de diferentes tipos, conforme Tabela abaixo.

.. table:: Tipos de vértices no georreferenciamento de imóveis rurais (ver :cite:t:`limitantes_georre2013`).
   :widths: auto

   +------+-----------------------------------------------+
   |Tipo  |Característica                                 |
   +======+===============================================+
   |**M** | medido, materializado e codificado em campo   |
   +------+-----------------------------------------------+
   |**P** | medido, mais não materializado                |
   +------+-----------------------------------------------+
   |**V** | determinado indiretamente e não materializado |
   +------+-----------------------------------------------+

A seguir é apresentada uma descrição dos tipos de vértices com uma
descrição.

- Os vértices tipo **M** (materializados), têm como finalidade
  a de preservar a localização do limite do imóvel. Devem ser materializados
  por marcos, de concreto, ferro, granito ou sintético, cujos padrões
  são apresentados pela Norma. No topo do marco materializando o vértice
  **M**, deve conter uma plaqueta de metal contendo a identificação
  do responsável técnico e o número do vértice. Exemplo de plaqueta
  é apresentado na :numref:`Modelo_plaqueta.png`;
- Os vértices do tipo **P** (ponto) são aqueles que foram ocupados,
  mas não materializados. São as divisas da propriedade cuja a sua localização
  são, por exemplo, cursos de água e estradas. Na localização final
  e inicial destes vértices, devem-se ter vértices tipo **M**;
- Os vértices do tipo **V** (virtual), são aqueles que não são
  nem ocupados nem materializados. Suas coordenadas são obtidas analiticamente,
  ou extraídas em base cartográficas ou meio de dados de Sensoriamento Remoto,
  o vértice projetado é (determinado
  no interior do perímetro do imóvel, a partir das informações constantes
  das matrículas que o compõe).

Cada um dos vértices terá uma identificação única, código, sendo gerado
pelo responsável técnico do georreferenciamento. O código terá como os
quatro primeiros campos o código do responsável técnico, constante
na Carteira Nacional de Credenciamento, emitida pelo INCRA; o quinto
campo é preenchido pela letra correspondente ao tipo de vértice, **M**, **P** ou **V**;
e os demais serão preenchidos por meio
de uma numeração sequencial, começando em 1 para o primeiro, 2
para o segundo e assim sucessivamente.

Então, tomemos como exemplo o vértice :math:`\bf{MHHJ}\,\bf{V}\,\bf{0143}`,
tem-se: :math:`\bf{MHHJ}` é o código do técnico responsável, :math:`\bf{V}`
é o tipo de vértice (virtual), e :math:`\bf{0143}` se refere ao :math:`\bf{143}^{\circ}`
vértice medido pelo técnico :math:`\bf{MHHJ}` credenciado para o georreferenciamento
de imóveis rurais. Quando, no georreferenciamento do imóvel, um ou
mais vértices já foram credenciados no INCRA, deve-se respeitar o
código do vértice já existente e não gerar um novo.


.. _Modelo_plaqueta.png:

.. figure:: /images/capitulo5/Modelo_plaqueta.png
   :scale: 30 %
   :alt: Modelo_plaqueta.png
   :align: center

   Modelo da plaqueta retirado do :cite:t:`manual_georre2013`.


Para a Norma, medidas de distância, área e azimute, são aqueles calculados
considerando o plano de projeção UTM (ver secção :any:`UTM`),
no Sistema Geodésico Brasileiro, SIRGAR2000 (ver :any:`Datum horizontal`).
A Norma para georreferenciamento de imóveis rurais prevê padrões de
precisão para as coordenadas, dependente do tipo de finalidade do
vértice assim como os métodos que podem ser empregados:

- Para vértices situados em limites artificiais: melhor ou igual a 0,50 m;
- Para vértices situados em limites naturais: melhor ou igual a 3,00 m; e
- Para vértices situados em limites inacessíveis: melhor ou igual a 7,50 m.

A determinação das coordenadas do imóvel rural pode ser realizado
pelos métodos convencionais ou por GNSS. Nos métodos convencionais
são realizadas medições de ângulos e distâncias por meio de estações
totais. Os métodos a serem empregados e equipamentos
que poderão ser utilizados, variam conforme o objetivo o tipo de poligonal,
levantamento por irradiação ou triangulação. Para todos os metodos
viáveis, ver tabela abaixo e o seu detalamento em :cite:t:`manual_georre2013`.

.. table:: Tipos de posicionamentos que podem ser realizados no georreferenciamento.
   :widths: auto

   +-------+----------------------------------+
   |Código | Método de Posicionamento         |
   +=======+==================================+
   |PG1    |Relativo estático                 |
   +-------+----------------------------------+
   |PG2    |Relativo estático-rápido          |
   +-------+----------------------------------+
   |PG6    |RTK convencional                  |
   +-------+----------------------------------+
   |PG7    |RTK em rede                       |
   +-------+----------------------------------+
   |PG9    | Posicionamento por Ponto Preciso |
   +-------+----------------------------------+
   |PT1    |Poligonação                       |
   +-------+----------------------------------+
   |PT2    |Triangulação                      |
   +-------+----------------------------------+
   |PT3    |Trilateração                      |
   +-------+----------------------------------+
   |PT4    |Triangulateração                  |
   +-------+----------------------------------+

.. table:: Métodos de posicionamento de acordo com a aplicação :cite:`manual_georre2013`.
   :widths: auto

   +-------+-------------------------------------+-------------------------------------------------+
   |Código | Método de Posicionamento            |Aplicação                                        |
   +-------+-------------------------------------+-------------------------------------------------+
   |PG1    |Relativo estático                    |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PG2    |Relativo estático-rápido             |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PG3    |Relativo semicinemático              |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PG4    |Relativo cinemático                  |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PG5    |Relativo a partir do código C/A      |Limite Natural                                   |
   +-------+-------------------------------------+-------------------------------------------------+
   |PG6    |RTK convencional                     |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PG7    |RTK em rede                          |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PG8    |Differential GPS (DGPS)              |Limite Natural                                   |
   +-------+-------------------------------------+-------------------------------------------------+
   |PG9    |Posicionamento por Ponto Preciso     |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PT1    |Poligonação                          |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PT2    |Triangulação                         |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PT3    |Trilateração                         |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PT4    |Triangulateração                     |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PT5    |Irradiação                           |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PT6    |Interseção linear                    |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PT7    |Interseção angular                   |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PT8    |Alinhamento                          |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PA1    |Paralela                             |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PA2    |Interseção de Retas                  |Limite Artificial ou Natural                     |
   +-------+-------------------------------------+-------------------------------------------------+
   |PS1    |Aerofotogrametria                    |Limite Artificial [#f1]_, Natural ou Inacessível |
   +-------+-------------------------------------+-------------------------------------------------+
   |PS2    |Radar aerotransportado               |Limite Artificial [#f1]_, Natural ou Inacessível |
   +-------+-------------------------------------+-------------------------------------------------+
   |PS3    |Laser scanner aerotransportado       |Limite Artificial [#f1]_, Natural ou Inacessível |
   +-------+-------------------------------------+-------------------------------------------------+
   |PS4    |Sensores orbitais                    |Limite Artificial [#f1]_, Natural ou Inacessível |
   +-------+-------------------------------------+-------------------------------------------------+


.. rubric:: Footnotes

.. [#f1] Com exceção de vértices tipo M e limites por cerca.

Exercícios
==========

:exem:`1)` O que é o georreferenciamento de imóveis rurais?


:exem:`2)` Quais são os prazos para o georreferenciamento
de imóveis rurais?

:exem:`3)` Quais são os tipos de vértices que podemos
ter no georreferenciamento de imóveis rurais? Como é realizada a sua
codificação?