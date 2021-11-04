Prefásio
********

Este livro (inacabado) trata da apresentação de elementos básicos
de alguns tópicos da disciplina Geomática, sendo estes: introdução
de geodésia; Sistemas Globais de Navegação por Satélite
(GNSS, *Global Navigation Satellite System*); planimetria e altimetria.
Este texto vem sendo utilizado na graduação, disciplina
Geomática I (ENG05644), que ministro semestralmente
na Universidade Federal do Espírito Santo (UFES), *campus* de Alegre, para
os cursos de Agronomia, Engenharia Florestal e Geologia. Para estes cursos, o conteúdo referente a
outros tópicos da área Geomática, como o sensoriamento remoto,
os sistemas de informação geográficas e o geoprocessamento, são apresentados em
uma outra disciplina, denominada Geomática II, e não
é tratada neste texto.

Embora exista uma imensa quantidade de livros que abordam os temas objetos
desta obra, eu justifico a existência deste material como de consulta, tanto para
o professor como para o aluno, durante as aulas teóricas e práticas.
O texto conta sempre com uma breve explicação teórica dos temas, tendo ainda cerca de 50 exemplos
resolvidos, 67 exercícios propostos, em que vários deles, são apresentados os resultados.
Há ainda sugestões de aulas práticas, a serem realizadas em computador (e.g. uso de
planilha eletrônica) e em campo (e.g. nivelamento).

Buscou-se sempre apresentar sugestões de leituras para estudos mais aprofundados.
Isto se faz necessário, uma vez que o aprofundamento de determinados tópicos,
fogem ao objetivo deste texto, que é apenas introdutório à disciplina Geomática.

Como meu resumo acadêmico: sou Engenheiro Agrícola, formado para
Universidade Federal da Paraíba, hoje Universidade Federal de
Campina Grande. Meu mestrado é em Sensoriamento Remoto pelo Instituto Nacional de Pesquisas
Espaciais, enquanto o doutorado é em Agronomia, na Universidade de São Paulo-ESALQ. Desde 2004
sou professor da disciplina Geomática I na UFES, trabalhando em pesquisa na área Engenharia Agrícola.
Logo, observem, que não sou um especialista na área, de tal forma que erros
existirão nesta obra. Desta forma, desde já, agradeceria que, em se encontrando
inconsistências, erros etc, estes me fossem
comunicados (*e-mail*: alexandre.xavier@ufes.br). Farei a correção o mais brevemente possível.

Em relação a divisão do conteúdo deste texto, adotei aquela que coincide com ao que ministro
na disciplina Geomática I da UFES. Esta disciplina tem um total de 80 horas semestrais, sendo
60 horas e 20 horas de aulas, respectivamente, teóricas e práticas. Segue uma apresentação dos
conteúdos abordados em cada capítulo:


- :ref:`RST Capitulo 1`: conceitos básicos de matemática que, ao longo
  do texto, se farão necessários, como ângulos, trigonometria, cálculo áreas
  elementares, etc. Dependendo do nível dos estudantes, este capítulo poderá ser ou não
  abordado em sala de aula;

- :ref:`RST Capitulo 2`: trata de medidas de comprimento e de
  área utilizadas em levantamento topográficos. Também são
  definidas as escalas gráfica e numérica. Finalizo este capítulo apresentando
  alguns métodos para se determinar áreas;

- :ref:`RST Capitulo 3`: são apresentadas noções de geodésia,
  como a forma da terra, o sistema geodésico brasileiro, datum horizontal e
  vertical, projeções cartográficas e o sistema de coordenadas UTM;

- :ref:`RST Capitulo 4`: são apresentado os GNSSs e seu princípio de
  funcionamento, enfatizando seus segmentos, o de controle, o espacial e dos usuários. Descreve-se vários sistemas
  de posicionamento por satélite existentes, como o GPS e o Galileu.
  Os erros e os tipos de técnicas de levantamento GNSS, também são
  abordados;

- :ref:`RST Capitulo 5`: aborda o Georreferenciamento de
  Imóveis Rurais, de acordo com \citeonline{norma_georre2010}, mostrando o seu objetivo,
  as precisões requeridas e os tipos dos vértices que são levantados;

- :ref:`RST Capitulo 6`: A partir deste capítulo, tem inicio com maior ênfase,
  ao que era, nos anos anteriores, a disciplina
  topografia. Quais são os meios para se medir distâncias em campo, em especial,
  as distâncias horizontais? Este é o objetivo deste capítulo, onde serão
  apresentados o uso de trenas, dos teodolitos e das estações totais para esta finalidade;

- :ref:`RST Capitulo 7`: Neste capítulo, serão definidos os ângulos horizontais e verticais,
  e seus métodos de medição e determinação. Também serão tratados os
  ângulos de alinhamentos em relação ao norte, isto é. os azimutes e
  rumos. Conceito e exemplos práticos sobre a declinação magnética também é tema deste capítulo;

- :ref:`RST Capitulo 8`: trata propriamente do levantamento planimétrico
  (em termos simples, determinação das coordenadas :math:`x` e :math:`y` no plano topográfico), por meio
  de poligonais. Através de exemplos, serão abordados os erros que devem ser
  avaliados nas poligonais ditas fechadas. Na avaliação dos erros e a suas compensações
  é considerada a :cite:`NBR13133`;

- :ref:`RST Capitulo 9`: é apresentada a altimetria.
  Serão descritos diferentes métodos para determinar
  as altitudes, as cotas e as diferenças de nível de pontos. Aqui, estaremos
  dando atenção às coordenadas $(y)$.

- :ref:`RST Capitulo 10`: trataremos da definição, leitura e construção de curvas de nível para uso em estudo que requerem conhecimento do relevo. São também apresentados duas metodologias básicas para cálculo de volume em trabalhos de sistematização de terreno, o método área média de secção e o pela área unitária.


Este livro está sendo escrito em \LaTeX\footnote{\url{https://www.latex-project.org/}},
distribuído por \emph{MiKTeX}\footnote{\url{https://miktex.org/}}, com o auxílio do
editor \emph{Texmaker}\footnote{\url{http://www.xm1math.net/texmaker/}}.
Para a geração do estilo bibliográfico alfabético é
empregado o pacote \emph{abntex2cite}\footnote{\url{http://mirrors.ibiblio.org/CTAN/macros/latex/contrib/abntex2/doc/abntex2cite-alf.pdf}}.
As figuras foram geradas com o
auxílio dos pacotes Ti\textit{k}Z \cite{tantau:2013a} e
\emph{PSTricks}\footnote{\url{http://tug.org/PSTricks/main.cgi/}}. Destaco ainda
o pacote \emph{Cartopy} \cite{Cartopy}, utilizado para gerar mapas
de diferentes tipos projeções cartográficas (ver
Secção \ref{sec:projecao_cartografica}, página \pageref{sec:projecao_cartografica}). Teria
também muita mais dificuldade de produzir este material se não contasse com
o Python\footnote{\url{https://www.python.org/}} e o
Matlab\footnote{\url{http://www.mathworks.com/}}, linguagens em que
foram escritos vários \emph{scripts} para, por exemplo, a geração e a solução
dos problemas e exercícios propostos.

Gostaria de encerrar agradecendo aos meus professores que me ensinaram a
estudar. À UFES, por me propiciar a paz para
o desenvolvimento de minhas atividades de ensino e pesquisa. E, à minha
esposa Juliana e filhos, Beatriz e Thiago, por todos os momentos de alegria.