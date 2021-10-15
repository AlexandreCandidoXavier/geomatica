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

O georreferenciamento de imóveis rurais trata da identificação do
imóvel, realizado por profissional habilitado onde, no memorial descritivo,
deve conter as coordenadas dos vértices definidores dos limites. As
coordenadas devem estar georreferenciadas ao Sistema Geodésico Brasileiro,
o Sistema de Referência Geocêntrico para as Américas, SIRGAS2000 (ver
secção :any:`Datum horizontal`). Há uma norma para execução
deste serviço, denominada Norma Técnica para Georreferenciamento de
Imóveis Rurais (`Disponível aqui <https://sigef.incra.gov.br/static/documentos/norma_tecnica_georreferenciamento_imoveis_rurais_3ed.pdf>`_)
:cite:`norma_georre2013`, com o Manual Técnico de Posicionamento: georreferenciamento de imóveis rurais
(`disponível aqui <https://sigef.incra.gov.br/static/documentos/manual_tecnico_posicionamento_1ed.pdf>`_) :cite:`manual_georre2013`
e do  Manual Técnico de Limites e Confrontações, publicado pelo INCRA
(`disponível aqui  <https://sigef.incra.gov.br/static/documentos/manual_tecnico_limites_confrontacoes_1ed.pdf>`_) :cite:`limitantes_georre2013`.
Nesta secção será realizada uma breve apresentação.


Objetivo e prazos
-----------------

O objetivo do georreferenciamento de imóveis rurais é o de disponibilizar
um Cadastro Nacional de Imóveis Rurais (CNIR), sistema único de registro
de imóveis rurais para o país, tornando os limites das propriedades
rurais precisas. Desta forma, evita-se que uma área tenha mais de
uma matrícula\footnote{Segundo :cite:`norma_georre2013` matrícula é ``\textit{ato cadastral
realizado pelo registro de imóveis que visa à perfeita identificação
do imóvel, caracterizando-o e confrontando-o, conferindo-lhe um número
de ordem pelo qual será identificado, sem criar, conferir ou modificar
direitos}''.} no serviço de registro de imóveis. Nos casos de desmembramento, parcelamento,
remembramento e em qualquer situação de transferência de imóvel rural,
os prazos\footnote{Ver \url{http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2011/Decreto/D7620.htm}}
para o georreferenciamento variam de acordo com o tamanho da propriedade
(Tabela~\ref{tab:norma_georreferenciamento_prazos}), sendo que as
maiores que 500\ ha já são obrigadas a realizá-lo. Imóveis rurais
com área entre 100~ha a 250~ha, por exemplo, só serão obrigadas
a realizar o georreferenciamento a partir de 20 de novembro de 2016.

\begin{SCtable}[][htb]\centering \caption{Prazos para o georreferenciamento de imóveis rurais.}

\begin{tabular}{cc}
\hline
Área (ha) & Prazo\tabularnewline
100$\vdash$250 & 20 de novembro de 2016\tabularnewline
25$\vdash$100  & 20 de novembro de 2019\tabularnewline
$<$25 & 20 de novembro de 2023\tabularnewline
\hline
\end{tabular}\label{tab:norma_georreferenciamento_prazos}\end{SCtable}

\section{Profissional habilitado\index{Profissional habilitado}}

O georreferenciamento só pode ser realizado por profissional habilitado,
com registro no Conselho Regional de Engenharia e Arquitetura (CREA\footnote{É a entidade autárquica de fiscalização do exercício e das atividades
profissionais dotada de personalidade jurídica de direito público,
constituindo serviço público federal, vinculada ao Conselho Federal
de Engenharia e Agronomia \textendash{} Confea. Cada estado tem o
seu CREA.})\index{CREA}, pois será necessário a emissão de uma \index{Anotação de Responsabilidade Técnica}Anotação
de Responsabilidade Técnica (ART). Há também a necessidade deste profissional
ser credenciado junto ao Instituto Nacional de Colonização e Reforma
Agrária\index{Instituto Nacional de Colonização e Reforma Agrária}
(\index{INCRA}INCRA) para este tipo de levantamento. O Procedimento
para cadastramento se encontra na Norma, só podendo requirir o credenciamento
aqueles profissionais habilitados.

Segundo o Conselho Federal de Engenharia e Agronomia (CONFEA), os
profissionais habilitados\footnote{Profissionais habilitados definidos pelas PL-2087/2004 e PL-0633/2003
disponíveis, respectivamente, em: \url{http://200.252.80.40/Credencia/download/Decisao_Plenaria_CONFEA_PL2087.pdf};
e \url{http://200.252.80.40/Credencia/download/Decisao_Plenaria_CONFEA_PL633.pdf}} para assumir a responsabilidade técnica para o serviço de georreferenciamento
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

\section{Tipos de vértices e sua identificação}

Para a definição dos limites do imóvel rural são utilizados vértices\footnote{Segundo \cite{norma_georre2010}, vértice é ``\textit{todo local onde
a linha limítrofe do imóvel muda de direção ou existe interseção desta
linha com qualquer outra linha limítrofe contíguos ou servidões de
passagem}''.}, sendo que estes podem ser de diferentes tipos, conforme Tabela~\ref{tab:GNSS_tipos_vertices}.
A seguir é apresentada uma descrição dos tipos de vértices com uma
descrição.
\begin{itemize}
\item Os vértices tipo\textbf{ M} (materializados), têm como finalidade
a de preservar a localização do limite do imóvel. Devem ser materializados
por marcos, de concreto, ferro, granito ou sintético, cujos padrões
são apresentados pela Norma. No topo do marco materializando o vértice
\textbf{M}, deve conter uma plaqueta de metal contendo a identificação
do responsável técnico e o número do vértice. Exemplo de plaqueta
é apresentado na Figura~\ref{fig:gnss_norma_plaqueta};
\item Os vértices do tipo \textbf{P} (ponto) são aqueles que foram ocupados,
mas não materializados. São as divisas da propriedade cuja a sua localização
são, por exemplo, cursos de água e estradas. Na localização final
e inicial destes vértices, devem-se ter vértices tipo \textbf{M};
\item Os vértices do tipo \textbf{V} (virtual), são aqueles que não são
nem ocupados nem materializados. Suas coordenadas são obtidas analiticamente,
ou extraídas de base cartográfica ou projetado\footnote{Segundo \cite{norma_georre2010}, o vértice projetado é ``\textit{determinado
no interior do perímetro do imóvel, a partir das informações constantes
das matrículas que o compõe}''.};
\item Os vértices do tipo \textbf{O} (virtual) são aqueles determinados
de forma analítica, em locais de difícil ocupação. A obtenção das
coordenadas se dá por linhas paralelas ao delineamento, podendo ser
o trecho de uma estrada ou rio, por exemplo.
\end{itemize}
\begin{SCtable}[][htb]\centering \caption{Tipos de vértices no georreferenciamento de imóveis rurais \cite[p. 13 e 28]{norma_georre2010}.}

\begin{tabular}{cl}
\hline
Tipo & Características\tabularnewline
\hline
\textbf{M} & medido, materializado e codificado em campo\tabularnewline
\textbf{P} & medido, mais não materializado\tabularnewline
\textbf{V} & determinado indiretamente e não materializado\tabularnewline
\textbf{O} & paralelo a eixo levantado e não materializado\tabularnewline
\hline
\end{tabular}\label{tab:GNSS_tipos_vertices}\end{SCtable}

\noindent \begin{SCfigure}[][htb] \includegraphics{gnss_norma_vertice_defin}
\caption{Exemplos de tipos de vértices no georreferenciamento de imóveis rurais.}

\label{fig:gnss_norma_vertice_defin} \end{SCfigure}

Cada um dos vértices terá uma identificação única, código, sendo gerado
pelo responsável técnico do georreferenciamento. O código terá 8 campos,
sendo os três primeiros campos o código do responsável técnico, constante
na Carteira Nacional de Credenciamento, emitida pelo INCRA; o quarto
campo é preenchido pela letra correspondente ao tipo de vértice, \textbf{M},\textbf{~P},~\textbf{V}
ou \textbf{O}; e os quatro últimos campos serão preenchidos por meio
de uma numeração sequencial, começando em 0001 para o primeiro, 0002
para o segundo e assim sucessivamente.

Então, tomemos como exemplo o vértice \textbf{MHJ$\,$V$\,$0143},
tem-se: \textbf{MHJ} é o código do técnico responsável,\textbf{ V}
é o tipo de vértice (virtual), e \textbf{0143} se refere ao 143$^{\circ}$
vértice medido pelo técnico MHJ credenciado para o georreferenciamento
de imóveis rurais. Quando, no georreferenciamento do imóvel, um ou
mais vértices já foram credenciados no INCRA, deve-se respeitar o
código do vértice já existente e não gerar um novo.

\noindent \begin{SCfigure}[][htb] \includegraphics{gnss_norma_plaqueta}
\caption{Modelo da plaqueta com furos para fixação \cite[p. 69]{norma_georre2010}.}

\label{fig:gnss_norma_plaqueta} \end{SCfigure}

Para a Norma, medidas de distância, área e azimute, são aqueles calculados
considerando o plano de projeção UTM (ver secção~\ref{subsec:Proje=0000E7=0000E3o-Universal-Transversa}),
no Sistema Geodésico Brasileiro, SIRGAR2000 (ver secção~\ref{subsec:Datum-horizontal}).
A Norma estabelece que a infraestrutura para os trabalhos de georreferenciamento
deve ser oriundos de: estações ativas receptoras de sinais do GNSS,
da Rede Brasileira de Monitoramento Contínuo\index{Rede Brasileira de Monitoramento Contínuo}
(RBMC\index{RBMC}\footnote{Redes que tem por objetivo propiciar aos usuários de levantamento
relativo informações GNSS de estações de referência, isto é, não há
a necessidade de ocupar a estação de referência, uma vez que nesta
rede há receptor GNSS realizando observações contínuas, 24 horas por
dia, todos os dias do ano. Estas Observações podem ser obtidas pela
internet: \url{http://www.ibge.gov.br/home/geociencias/download/tela_inicial.php?tipo=14}.}, \citeonline{RBMC2011}); da Rede Incra de Bases Comunitárias do
GPS\index{Rede Incra de Bases Comunitárias do GPS} (Ribac\index{Ribac}\footnote{Ver: \url{http://ribac.incra.gov.br/}.});
de redes geodésicas estaduais; ou de estações de sinais GNSS. Vale
ressaltar que estas estações devem ser homologadas pelo IBGE.

A Norma para georreferenciamento de imóveis rurais prevê padrões de
precisão para as coordenadas, dependente do tipo de finalidade do
vértice (Tabela\ \ref{tab:georreferenciamento_padroes_precisao}),
assim como os métodos que podem ser empregados.

\begin{SCtable}[][htb]\centering \caption{Padrões de precisão segundo a classe do levantamento \cite[p. 21]{norma_georre2010}.}

\begin{tabular}{clcc}
\hline
Classe\footnote{testes teste} & Finalidade & Precisão (m) & Tipo\tabularnewline
\hline
C1 & Apoio básico/apoio imediato/limite & $\leq$0,10 & \textbf{M}\tabularnewline
C2 & Apoio básico/limite & $\leq$0,20 & \textbf{M}\tabularnewline
C3 & Desenvolvimento de poligonal & $\leq$0,40 & \textbf{M}, \textbf{P},\tabularnewline
C4 & Limite & $\leq$0,50 & \textbf{M}, \textbf{P}, \textbf{V}, \textbf{O}\tabularnewline
C5 & Limites naturais & $\leq$2,00 & \textbf{P}, \textbf{V}, \textbf{O}\tabularnewline
C7 & Limite - uso restrito & {*} & \tabularnewline
\hline
\end{tabular}\label{tab:georreferenciamento_padroes_precisao}\end{SCtable}

A determinação das coordenadas do imóvel rural pode ser realizado
pelos métodos convencionais ou por GNSS. Nos métodos convencionais
são realizadas medições de ângulos e distâncias por meio de estações
totais\index{Estação total}. Os métodos a serem empregados e equipamentos
que poderão ser utilizados, variam conforme o objetivo o tipo de poligonal,
levantamento por irradiação ou triangulação.

Para o levantamento realizado com GNSS, os posicionamentos permitidos
são vários, podendo-se citar: o posicionamento relativo estático para
a definição dos vértices das classes C1, C2, C4, C5 e C7; o relativo
estático rápido, para vetrices das classes C2, C4, C5 e C7. Maiores
detalhes consultar \citeonline{NBR13133,norma_georre2010} e o Capítulo~\ref{chap:GNSS}.

\section*{Exercício}

\begin{exercicio}O que é o georreferenciamento de imóveis rurais?
\end{exercicio}

\noindent \begin{exercicio}Quais são os prazos para o georreferenciamento
de imóveis rurais? \end{exercicio}

\noindent \begin{exercicio}Quais são os tipos de vértices que podemos
ter no georreferenciamento de imóveis rurais? Como é realizada a sua
codificação? \end{exercicio}

