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

Capitulo 10: Curva de nível e cáculo de volume
**********************************************

Uma das maneiras de avaliar o relevo de uma região é por meio de
curvas de nível. Neste capítulo será apresentado sua importância,
como se fazer a sua leitura, e também, uma metodologia para desenhá-la.
Outro tema que será abordado neste capítulo é o de cálculo de volume de
material a ser escavado e/ou aterrado para obras de sistematização.

Curva de nível
==============

Entende-se por **curva de nível** a linha que liga pontos de igual cota ou altitude. Em uma curva de nível perfeita, todos os seus pontos teriam mesma altitude/cota no terreno, desta forma, se uma pessoa estivesse realizando uma caminhada ao longo desta, no terreno, ela não estaria subindo ou descendo. As curvas de nível são importantes para se conhecer o terreno quanto ao seu relevo, podendo-se aferir por meio delas: o grau de inclinação nas diferentes direções de pontos no mapa; se tem forma plana ou ondulada; os locais em que podem ocorrer escoamento e/ou alagamento. Logo, as curvas de nível, fornecem informações essenciais para planejamento de projetos: de estradas; de terraplanagem; de zoneamento agrícola; hidráulicos/hidrológicos, etc.

A título de ilustração, na Figura \ref{fig:curva_nivel1}a é apresentado um exemplo de relevo, juntamente com linhas de interseção do terreno com várias superfícies de nível ``interceptando" o mesmo. A separação entre as superfícies, na vertical, é de $10$ m. Estas linhas de interseção, quando projetadas no plano de projeção, cartográfico ou topográfico, resultam nas curvas de níveis, onde  podem ser observadas na Figura \ref{fig:curva_nivel1}b.


Para facilitar a leitura das curvas de nível, a cada cinco curvas, uma é cotada. As linhas cotadas são denominadas de \index{curvas mestras}curvas mestras, e são apresentadas com linhas mais grossas. Na Figura \ref{fig:curva_nivel1}b as curvas mestras são as de $0$ m, $50$ m e $100$ m. Observe que, apenas com a leitura nas curvas mestras, é possível calcular a distância vertical entre quaisquer par de linhas subsequentes e, logicamente, atribuir a sua cota. Para se calcular a distância vertical entre duas curvas na sequência, toma-se, por exemplo, as curvas mestras $50$ m e $100$ m, então:

\begin{equation}\label{eq:equi_vertical}
\frac{100\,\mathrm{m}-50\,\mathrm{m}}{5}=10\,\mathrm{m},
\end{equation}

\noindent isto é, as curvas de nível terão cotas de $10$ m em $10$ m. Entende-se por \index{equidistância vertical} \emph{equidistância vertical} de curvas de nível, a distância vertical entre uma curva e a sua sequente, sendo este valor constante no mapa. Logo, neste nosso exemplo, a equidistância vertical do mapa apresentado na \ref{fig:curva_nivel1}b é de $10$ m. 

\begin{figure}
\includegraphics[trim ={10mm 0mm 30mm 0mm},clip,scale=.9]{curva_nivel1}
\caption{Representação do relevo de uma região (a) juntamente com a sua representação por meio de curvas de nível, com equidistância vertical de $10$ m (b). Linhas tracejadas na cor azul, são cursos de água, e as marcas ``$\times$" são pontos cotados.}
\label{fig:curva_nivel1}
\end{figure}

 

\parpic[r]{\begin{minipage}{100mm}\includegraphics[trim ={4mm 5mm 0mm 0mm},clip,scale=0.7]{curva_nivel2}\captionof{figure}{Exemplos de curvas de nível em regiões com aproximadamente a mesma área, $1\,700$ km$^2$. Em: (a) a localização geográficas das regiões, nos estados de SP e ES, em cor verde e vermelha, respectivamente; (b) região em SP, equidistância vertical de $40$ m; (c) e (d) mesma região no ES, equidistância vertical de $50$ m e de $100$ m, respectivamente. As curvas de nível foram geradas a partir dos dados de altitude  do \emph{\index{Global Multi-resolution Terrain Elevation Data 2010}Global Multi-resolution Terrain Elevation Data 2010} \index{GMTED2010}(GMTED2010) \cite{GMTED2010}.
}\label{fig:curva_nivel2}\end{minipage}%D:\Dropbox\PythonCodes\ExemplosPython\exemplo_curvas_de_nivel.py
}
A equidistância vertical que será utilizada no mapeamento vai depender do relevo e da escala do mapa. Considere duas regiões distintas, uma de montanha e outra de planície, ambas com uma mesma medida de área e mapeadas em mesma escala. Nestas condições, espera-se a utilização de um valor de equidistância vertical, maior no terreno de montanha do que no plano. Pois, se no mapeamento do terreno montanhoso a equidistância vertical for pequena, pode-se ter um sobrecarregamento de curvas de nível, o mesmo não acontecendo em região mais plana. Tais observações podem ser observadas na Figura\ref{fig:curva_nivel2}b e d, que representam uma região plana e outra de montanha, nos estados de SP e ES, respetivamente. As duas regiões tem a mesma área ($\approx 1\,700$ km$^2$) e escala. Para permitir uma leitura adequada das curvas de nível, enquanto na região de SP se permitiu uma equidistância vertical de $40$ m (Figura\ref{fig:curva_nivel2}b), a região de montanha do ES, a equidistância vertical ficou em $100$ m. Para a região do ES, ao se tentar reduzir a equidistância vertical para $50$ m, na mesma escala, verifica-se um carregamento de curvas de nível, que em nada ajudam na leitura adequada do relevo (Figura\ref{fig:curva_nivel2}c).

A seguir, é apresentada a forma de se realizar a leitura/interpretação das curvas de nível, assim como suas características \cite{cole2009surveyor}:

\begin{itemize}
\item as curvas de nível são sempre fechadas dentro ou fora da borda do mapa. Desta forma, uma curva de nível nunca pode acabar abruptamente num mapa;
\item em condições normais, as curvas de nível nunca se tocam ou se cruzam. Exceções são saliências em penhasco ou cachoeiras;
\item sequências de curvas de nível fechadas na planta, tanto podem ser a representação de um morro como uma depressão. Será um morro se, na leitura das cotas das curvas de nível, seus valores aumentam à medida que as curvas se tornam menores. Por outro lado, se as cotas das curvas de nível diminuem à medida que as curvas se tornam menores, esta área representará uma depressão.
\item curvas de nível cortando rios tem forma de ``V", indicando rio acima;
\item antes de junção de cursos de água, as curvas de nível tem forma de ``M";
\item curvas de nível cortando um cume tem forma de ``U";
\item curvas de nível são espaçadas uniformidade em terrenos com uniforme declividade;
\item curvas de nível espaçadas de forma irregular, representa terreno acidentado;
\item a distância horizontal entre curvas de nível indicam o grau de declividade. Quanto mais próximas, maior a declividade, mais íngreme é o terreno. Por outro lado, quando espaçadas, menor declividade, terrenos planos;
\item curvas de nível são perpendiculares a direção de máxima declividade, podendo esta informação ser utilizada para determinação do escoamento da água no terreno.
\end{itemize}

Com o objetivo de se caracterizar melhor o relevo, além das curvas de nível, pontos de destaque são cotados, podendo ser, por exemplo, picos, depressões locais e pontos onde as curvas de nível são muito espaçadas (terrenos planos). Para apresentar a posição destes pontos cotados, usa-se, normalmente, o símbolo ``$\times$", acompanhado do valor da cota ou da altitude. 

\subsection{Determinação das curvas de nível}

Existem vários métodos para se determinar as curvas de nível. Para todos os métodos, há necessidade de se conhecer, na área a ser levantada, as coordenadas de pontos, juntamente com os seus respectivos valores da altitude ou cota. As coordenadas e cotas dos pontos, em levantamentos convencionais, são obtidas com o auxílio da estação total, pelo método da irradiação. Em levantamentos que requerem maior precisão na determinação das cotas, é preferível o nivelamento do tipo geométrico, ou seja, emprega-se o nível como equipamento. Quanto à distribuição espacial dos pontos cotados, estes podem estar uniformementes distribuídos ou não. Quando os pontos são uniformemente distribuídos, denominamos de \index{grade regular}grade regular, sendo utilizada em terrenos de topografia mais uniforme. Já uma grade irregular, é aquela em que os pontos cotados não são uniformemente distribuídos no terreno, podendo ser utilizada para todos os tipos de terreno.

Nesta secção será apresentada um método de determinação de curvas de nível para quando os pontos estão distribuídos em grade regular. Para a geração das curvas de nível de grade irregular, pode-se consultar  \citeonline{comastri}, \citeonline{WOLF} e \citeonline{cole2009surveyor}.

Saliente-se também que no dia a dia de um técnico em topografia, mapas com curvas de nível são geradas rapidamente por meio de programas de computador, podendo-se destacar os programas QGIS \footnote{Disponível em: \url{https://www.qgis.org/pt_BR/site/}}, que é gratuito e o Autocad. Resumidamente, para se obter as curvas em computador, deve-se importar ou inserir os dados de posição e de altitude dos pontos $(x,\,y,\,z)$ no programa utilizado, sendo que as posições podem estar em grade regular ou irregular; e, para finalizar a operação, defini-se alguns parâmetros, como a equidistância vertical desejada. Para descrição detalhada dos procedimentos necessários, consultar os manuais dos respectivos programas e, para estudar a teoria por trás da geração, pode-se consultar \citeonline{WOLF}. 

\subsubsection*{Curva de nível em grade regular}\index{curva de nível!grade regular}
\parpic[r]{\begin{minipage}{100mm}\includegraphics[trim ={4mm 0mm 0mm 0mm},clip,scale=0.7]{curva_nivel3}\captionof{figure}{Método da determinação das curvas de nível por meio de dados em grade regular.}\label{fig:curva_nivel3}\end{minipage}}
Nesta secção veremos a metodologia para determinação de curvas de nível quando o terreno é nivelado por meio de uma grade regular. O nivelamento por grade regular é utilizado em terreno  de declividade uniforme e em área pequenas. 

No terreno, é realizada a \index{quadriculação}quadriculação (área dividida em quadrados), com estacas materializando os vértices, formando uma grade. As DHs entre as estacas são, normalmente, de $10$ m ou de $20$ m, a depender do relevo a ser levantado. Os pontos são cotados pelo método do nivelamento geométrico ou pelo nivelamento trigonométrico com teodolitos ou estações totais. As linhas e colunas da grade são nomeadas para se localizar as estacas no terreno. 

Para exemplificar a metodologia da determinação das curvas de nível, vamos utilizar a Figura \ref{fig:curva_nivel3}. Na Figura \ref{fig:curva_nivel3}a é apresentada a grade, com as respectivas cotas das estacas, em metros. As linhas foram nominadas pelas letras ``A", ``B" e ``C", enquanto as colunas, pelos números ``1", ``2" e ``3". Desta forma, pode-se verificar facilmente as cotas das estacas,  por exemplo, a estaca B2 tem cota de $102,5$ m.  Para esta grade, vamos considerar que a DH entre as estaca é de $20$ m.

A grade tem a menor e a maior cota nas estacas C3 e A1, $100,0$ m e $104,5$ m, respectivamente, ou seja, há uma DN total de $4,5$ m no terreno. Pode-se considerar razoável, que uma equidistância vertical de $1$ m seja adequada para representar o relevo deste terreno. Considerando esta equidistância vertical, teremos que desenhar as curvas de nível $101$ m, $102$ m, $103$ m e $104$ m. 

Para cada curva de nível deve ser verificado em quais pares de estacas ela passa. Por exemplo, considere a curva de nível $101$ m, em algum ponto entre a estaca C1 e C2 ela ira passar, uma vez que as suas respectivas cotas são de $101,1$ m e $100,8$ m. Seja o perfil do terreno uniforme entre estas (sem grandes variações), pode-se, por interpolação, determinar a DH que a curva de nível $101$ m estará em relação a estaca C1 ou C2, mas como? Entre estas estacas, há uma DN de $0,3$ m e uma DH de $20$ m. Da estaca C1, cota $101,1$ m, ao ponto de cota $101$ m, onde passa a curva de nível $101$ m, há uma DN de $0,1$. Por regra de três, a curva de nível $101$ m estará a $\approx6,7$ m da estaca C1 $\left(0,1\frac{20}{0,3}\right)$. Desta forma, entre C1 e C2, no ponto a $6,7$ m da estaca C1 é feito um pequeno risco. Tal procedimento é repetido para todos os pares de estacas onde a curva de nível $101$ os cruzam. Para curva de nível $101$, os pares a serem verificados são C2-B2, B2-B3 e B3-A3. Para estes pares encontra-se o ponto de cota $101$ m e marca-se a posição, sempre com um risco, ou seja a posição onde a curva de nível $101$ cruza as estacas.

As marcas onde as curvas de nível cruzam os quadrados da quadrícula são apresentadas na Figura \ref{fig:curva_nivel3}b. Após tal procedimento, é realizada a conexão das marcas de cada uma das curvas de nível por linhas retas ou suavizadas. No nosso exemplo, as marcas foram conectadas por linhas retas (Figura \ref{fig:curva_nivel3}b). Caso contenha linhas mestras, utilizar linha mais grossa para destacá-la. Para finalizar, as curvas de nível são cotadas com as respectivas cotas (Figura \ref{fig:curva_nivel3}d).

\subsubsection*{Obtenção das curvas de nível em campo}

A obtenção de curvas de nível em campo pode ser necessária na locação de linhas de plantio de culturas agrícolas e florestais, na construção de terraços, visando a prevenção e contenção da erosão do solo, etc. Para a locação das mesmas, podem ser utilizados como equipamentos os níveis, os teodolitos  ou as estações totais, sempre realizando visadas horizontais.

Vamos considerar que o equipamento que será utilizado é uma estação total com o prisma. O técnico na estação fará visadas horizontais, ou seja, o ângulo zenital ($z$) deverá sempre marcar $90^\circ$. Suponha que a estação esteja em um ponto de cota $100$ m, com a altura do instrumento (ai) de $1,7$ m (medida com uma trena) então, a altura do instrumento (AI) seria de $101,7$ m. Para se obter pontos onde passa a curva de nível de $100$ m, por exemplo, deve-se fixar a altura do prisma em $1,7$ m. Desta forma, toda vez que, da estação, o centro do prisma for corretamente observado, a cota naquela posição do prisma será de $100$ m. O técnico com o prisma é orientado pelo o da estação total, que o indica, se o prisma deve ser posto em posição mais ou menos elevada, de tal forma que o centro do prisma esteja na visada correta. Quando houver concordância, o ponto é materializado por uma estaca, sabendo-se que nela, passa a curva de nível de $100$ m. O técnico com o prisma desloca-se para uma nova posição, e novamente procura-se fazer a visada no centro do prisma. 

Se no levantamento há também o objetivo de desenho em planta, para fins de determinação das coordenadas, deve-se anotar as DH's e o Hz's, para posterior cálculo das coordenadas.

Outros métodos para locação de curvas de nível em campo podem ser encontradas em \cite{godoy}.

\section{Sistematização e cálculo de volume}
Um dos serviços importantes de técnicos em topografia é o de sistematização\index{sistematização} de terrenos, ou seja, modificar a sua forma, tornando-o plano, para fins de execução de projetos de engenharia na área de interesse. Podem-se citar como projetos que demandam sistematização de um determinado terreno: os residenciais e prediais; os de irrigação por gravidade; construção de quadras e campos de futebol, etc.

Na execução da sistematização de um terreno, geralmente acorrerá as seguintes etapas: \emph{i}) escavação de rochas, terras e cascalhos, ou mistura destes, sendo esta etapa denominada de (\emph{corte})\index{sistematização!corte}; \emph{ii}) o transporte de material e; \emph{iii}) a sua deposição, normalmente com compactação do material, denominada de \emph{aterro}\index{sistematização!aterro}. Certos projetos podem ter mais ênfase no corte do terreno, como em projetos de estradas. Outros, terão mais trabalho de aterro, como na construção de barragens. Na sistematização, se busca quantificar o volume de material a ser trabalhado, assim como analisar a forma de quantificar este material em escritório. Se busca também diminuir custos da operação. Por exemplo, sabendo-se que o custo de transporte de material é elevado, buscar-se-á minimizar o volume desta operação. 

O volume de material a ser movimentado, seja no corte ou no aterro, é mensurado na unidade de m$^3$. Um fato importante na hora de quantificar o volume de material, é que o mesmo vai variar seu volume com a mudança da sua condição inicial para uma outra condição, por exemplo: \emph{i}) um volume na condição natural no terreno, após ser escavado, sofrerá expansão, pois o mesmo será desagregado; \emph{ii}) o volume transportado de material que será utilizado em aterro, vai ser compactado, diminuindo o seu volume.

Suponha o volume de $1$ m$^3$ de terra ainda no terreno natural, após a sua escavação, será desagregado, e terá o seu volume aumentado em aproximadamente $20\%$, o que resultará em um volume $\approx1,2$ m$^3$ para ser transportado. Por outro lado, um volume de $1$ m$^3$, após submetido à compactação, terá o volume reduzido em aproximadamente $15\%$, logo, o $1$ m$^3$ de material, após processo de compactação, resultará em um volume de $\approx0,85$ m$^3$ \cite{cole2009surveyor}. 

\begin{mybox}[breakable,enhanced,pad at break=0mm,label={exemp:volume}]{}Considere a escavação para fins de construção de uma piscina, cuja dimensão é de $50$ m de comprimento, $20$ m de largura e $2$ m de profundidade. Qual o número de viagens que um caminhão vai realizar para transporte deste material? Sabe-se que, o caminhão a ser utilizado tem capacidade de transporte de $10$ m$^3$ por viagem e, que a terra a ser escavada vai expandir em $20\%$.

\soluca 
Volume de terra a ser retirado do terreno será:

\[
V=50\times20\times2=2\,000\,\mathrm{m^3}
\]

Considerando o fator de expansão de $20\%$ e o volume de $10$ m$^3$ por viagem, temos um total de viagens:

\[
\frac{2\,000\times1,2}{10}=240.
\] 
\end{mybox}

Os métodos para se medir o volume de material dependem do tipo de projeto executado e dos dados disponíveis, sendo os mais usuais, o por secções e o por área unitária.

\subsection{Volume por meio da área média de secções}
\parpic[r]{\begin{minipage}{70mm}\begin{tikzpicture}
% desenho arquivo volumeDeSolidos.tex
\path (0,0) coordinate (A) (1,1.6) coordinate (B) (3,1.6) coordinate (C) (3.5,.1)
coordinate (D);
\path (1.7,2) coordinate (E) (1.9,2.8) coordinate (F) (3.7,2.8) coordinate (G) (4.2,2)
coordinate (H);
\fill [red!20] (A)--(E)--(F)--(B);
\fill [red!20] (A)--(E)--(H)--(D);
\fill [opacity=1,blue!20] (A)--(B)--(C)--(D);
\draw (A)--(B)--(C)--(D)--(A);
\fill [opacity=1,blue!20] (E)--(F)--(G)--(H);
\draw (E)--(F)--(G)--(H)--(E);
\draw[<->] ([xshift =-0.35cm]B)-- node[fill=white]{$L$}([xshift =-0.35cm]F);
\draw [dashed, thick,red!50] (A)--(E) (B)--(F) (C)--(G) (D)--(H);
\path (A)-- node[above,sloped]{$A_1$} (D);
\path (E)-- node[above,sloped]{$A_2$} (H);
\end{tikzpicture}
\captionof{figure}{Volume pela método da área média das secções.}\label{fig:volume_area_media_metodo}
\end{minipage}}
O volume de um sólido que tem duas secções paralelas onde se conhecem suas respectivas áreas e a distância que as separam, conforme Figura \ref{fig:volume_area_media_metodo}, é calculado como a média da área das secções multiplicada pela distância entre elas:

\begin{equation}\label{eq:volume_area_media}
V=\frac{A_1+A_2}{2}\times L
\end{equation}

\noindent em que $A_1$ e $A_2$, são as áreas das secções paralelas analisadas e $L$, a distância horizontal que separa as secções. Considerando que as medidas das áreas das secção são em m$^2$ e a distância horizontal em metros, teremos o volume na unidade de m$^3$.

\begin{mybox}[breakable,enhanced,pad at break=0mm,label={exemp:volume_media_seccoes1}]{}Considere  as áreas entre as secções da estaca $10+0$ m e $11+0$ m de, respectivamente $61$ m$^2$ e $37$ m$^2$. Qual o volume entre estas duas estacas?

\soluca 
Considerando que a distância entre as estacas é de $20$ m:
\[
V=\frac{61+37}{2}20=980\,\mathrm{m^3}
\] 
\end{mybox}

\begin{mybox}[breakable,enhanced,pad at break=0mm,label={exemp:volume_media_seccoes2}]{}Considere  as áreas entre as secções da estaca $10+0$ m e a intermediária $10+10$ m de, respectivamente $61$ m$^2$ e $46$ m$^2$. Qual o volume entre estas duas estacas?

\soluca 
Considerando que a distância entre as estacas é de $20$ m, a distância entre as secções medidas é de $10$ m, logo:
\[
V=\frac{61+46}{2}10=535\,\mathrm{m^3}
\] 
\end{mybox}

O método de cálculo do volume pela área média das secções se aplica em áreas longitudinais, como em trechos de estradas. Para  exemplificar aplicação deste método, considere a Figura \ref{fig:exemplo_area_de_secoes}, na qual são apresentados os cálculos de volume do terreno da Figura \ref{fig:curva_nivel3} (pg. \pageref{fig:curva_nivel2}), quando o mesmo é sistematizado para ter cota de $102,5$ m em toda a sua extensão. Primeiramente calcula-se as CVs das estacas, em que valores negativos e positivos são pontos de corte e aterro, respectivamente. Neste exemplo escolheu fazer os cálculos das áreas de corte e de aterro utilizando-se como secções as colunas 1, 2 e 3. Para cada secção e desenhado o perfil do terreno e a sua distância vertical para cota a ser sistematizado. Por meio desta representação, pode-se verificar as áreas de cortes e aterros onde suas áreas são calculadas por meio de aproximação destas à figuras geométricas elementares, com triângulo e trapézio. Com os dados das áreas de corte e aterro tabulados, para cada par de secção é calculado o seu respectivo volume por meio da Equação \ref{eq:volume_area_media}.
\begin{figure}[H]
\includegraphics[trim ={0mm 0mm 0mm 0mm},clip,scale=0.85]{volume_media_seccoes.pdf}
\caption{Procedimentos para medição de volume pela área média das secções. Distância entre as estacas é de $20$ m e sistematização do terreno para cota de $102,5$.}\label{fig:exemplo_area_de_secoes}
\end{figure}


\subsection{Volume por meio da área unitária}


\parpic[r]{\begin{minipage}{110mm}\includegraphics[trim ={0mm 10mm 0mm 5mm},clip,scale=0.75]{curva_nivel4}\captionof{figure}{Exemplo de terreno nivelado para fins de sistematização pelo método da área unitária. É apresenta a cota de cada estaca, seguido do seu peso, entre parênteses, para ser utilizado no calculo do volume.}\label{fig:volume_area_unitaria}\end{minipage}%D:\Dropbox\PythonCodes\ExemplosPython\exemplo_curvas_de_nivel.py
}
O método por área unitária pode ser aplicado para a maioria dos casos de sistematização, exceção em casos de levantamento longitudinal, como em projetos de estradas, que é preferível o método da área média das secções. No método da área unitária, para a estimativa do volume de material a ser escavado ou depositado na área de interesse, primeiramente, a área é estaqueada em quadrados. As estacas têm a sua cota determinada por nivelamento, seja o trigonométrico, com estação total ou, por meio do nivelamento geométrico, com o nível. As linhas e colunas são identificadas por letras ou números. Na Figura \ref{fig:volume_area_unitaria}a é apresentada uma área a ser sistematizada, constando, para cada estaca, os valores das cotas. As colunas e linhas da grade são identificadas por letras e números, sendo, por exemplo, a estaca \textit{A1} a cota de $302,4$ m.

Suponha que o projeto de engenharia definiu que, após a sistematização, o terreno terá cota de $301,0$ m na sua extensão, logo, todas estacas terão também ao final cota de $301,0$ m. Para apresentar o procedimento do método área unitária, vamos considerar inicialmente, o primeiro quadrado da grade, \textit{A1-A2-B1-B2} (Figura \ref{fig:volume_area_unitaria}b), onde pode-se notar que em todas as suas estacas haverá corte para se ter cota final de $301,0$ m. Uma maneira de verificar se em determinada estaca haverá corte ou aterro e de quanto será, é por meio da cota vermelha ($\mathrm{CV}=\mathrm{cota}_{\mathrm{greide}}-\mathrm{cota}_{\mathrm{terreno}}$). Por exemplo, suponha que estejamos calculando a CV na estaca \textit{A1}. Esta seria de $-1,4$ m ($301,0-302,4$), o que significa um corte de $1,4$ m nesta estaca. O mesmo pode ser aplicado para as demais estacas deste quadrado. Agora temos um sólido geométrico de base quadrada em que se pode calcular o seu volume, como apresentado a seguir.

\parpic[r]{\begin{minipage}{60mm}
\begin{tikzpicture}
\draw[dashed,thick] (-1,0) -- (0,0.5) edge (0,2.5) -- (1,0);
\draw[thick] (-1,0) rectangle (1,2) -- (0,2.5) -- (-1,2);
\draw (1,0)-- node[below,sloped]{$h$}  (1,2); 
\draw (-1,0)-- node[above]{$A$} (1,0);
\fill [opacity=0.2,blue] (-1,0) -- (0,0.5) -- (1,0);
\fill [opacity=0.2,blue] (-1,2) -- (0,2.5) -- (1,2);
\pgfmathsetmacro{\x}{3}
\pgfmathsetmacro{\xo}{2}
\pgfmathsetmacro{\y}{-1}
\pgfmathsetmacro{\yo}{2}
\pgfmathsetmacro{\z}{2}
\path (\xo,0,\y) coordinate (A) (\x,0,\y) coordinate (B) (\x,0,0) coordinate (C) (\xo,0,0)
coordinate (D) (\xo,\z,\y) coordinate (E) (\x,\z,\y) coordinate (F) (\x,\z,0) coordinate (G)
(\xo,\z,0) coordinate (H);
\draw[thick] (B)--(C)--(G)--(F)--(B) (E)--(F)--(G)--(H)--(E) (D)--(C) (D)--(H);
%\draw [dashed,black] (A)--(D)--(C) (D)--(H);
\draw [dashed, thick] (A)--(D) (A)--(B) (A)--(E);
\draw (B)-- node[below,sloped]{$h$} (F);
\path (2,-0.2)-- node[above]{$A$} (3,0);
\fill [opacity=0.2,blue] (A)--(B)--(C)--(D);
\fill [opacity=0.2,blue] (E)--(F)--(G)--(H);
\end{tikzpicture}
\captionof{figure}{Volume de um prima.}\label{fig:volume_prisma_metodo}
\end{minipage}}
Um \emph{prisma reto}\index{volume!prisma reto} é um sólido geométrico que tem como base um polígono e lados  verticais perpendiculares a base. A base e o topo de um prisma reto tem mesma área e forma. A título de ilustração, na figura ao lado são apresentados dois prismas retos, um com base triangular e, o outro, com base quadrangular. O volume de um prisma reto é calculado como:

\begin{equation}\label{eq:volume_prisma_reto}
\mathrm{V}=Ah,
\end{equation}

\noindent em que: $\mathrm{V}$ é o volume em unidades cúbicas; $A$ é a área da base e, $h$, a altura. Como normalmente trabalhamos com unidade de comprimento em metros, teremos $\mathrm{V}$  em m$^3$.

Retornemos ao nosso sólido da a Figura \ref{fig:volume_area_unitaria}b. Podemos considerar que o mesmo se aproxima a um prisma reto. Só não é porque o terreno é irregular. Todavia, pode-se considerar que a sua altura, $h$, será a média das alturas das CV deste quadrado, sendo então:
\[
\left(\frac{-1,4-2,3-1,3-2,4}{4}\right)= -1,85\,\mathrm{m},
\]

Agora pode-se calcular o volume referente ao quadrado analisado (\textit{A1-A2-B1-B2}) por meio da Equação \ref{eq:volume_prisma_reto}:

\[
\mathrm{V}=10\times10\times-1,85=-185\,\mathrm{m}^3.
\]

O sinal negativo do volume calculado significa que neste quadrado o volume de $185$ m$^3$ será escavado.  Por outro lado, caso fosse positivo, seria o volume a ser aterrado.

Para se calcular o volume de material de toda área, ao invés de calcular os volumes dos quadrados individuais e depois somar, se usa o seguinte método, a área de quadrado é dividida por quatro\footnote{O número quatro é referente ao denominador da média calculada de CV para as 4 estacas de cada quadrado} e, este resultado, multiplicado pela soma do produto da CVs de cada estaca pelo número de quadrados que a mesma é comum (ver Exemplo \ref{exem:volume_area_unitaria}). Matematicamente:

\begin{equation}
V=\frac{A}{4}\sum\mathrm{CV}_{i,\,j}\times w_{i,\,j}
\end{equation} 

\noindent em que: $V$ é o volume (m$^3$); $A$ é a área do quadrado (m$^2$); $i$ e $j$ são os índices das linhas e colunas, respectivamente, $i=1, 2,\dotsc\,, $ índice das linhas e $j=1, 2, \dotsc\,, $ índice de colunas; $w_{i,\,j}$ é o peso, sendo igual ao número de quadrados em comum na estaca $i,\,j$;   

\begin{mybox}[breakable,enhanced,pad at break=0mm,label={exemp:area_unitaria}]{}\label{exem:volume_area_unitaria}Considere sistematizar o terreno da Figura \ref{fig:volume_area_unitaria}a para ter cota final de $301$ m em toda a sua extensão. Qual será o volume de material a ser cortado ou aterrado?

\soluca
\parpic[r]{\begin{minipage}{90mm}\includegraphics[trim ={0mm 10mm 5mm 10mm},clip,scale=0.75]{curva_nivelExempo1}\captionof{figure}{}\label{fig:volume_area_unitaria_exemplo}\end{minipage}%D:\Dropbox\PythonCodes\ExemplosPython\exemplo_curvas_de_nivel.py
}
Para verificar se as estacas que terão corte ou aterro, quando a cota final do terreno será de $301$ m, basta calcular as CVs das estacas, por exemplo, a CV na estaca A1 é:
\[
\mathrm{CV}_{\mathrm{A1}}=301-302,4=-1,4\,\mathrm{m}.
\]

Repetindo-se para as demais estacas, temos os resultados apresentados na Figura \ref{fig:volume_area_unitaria_exemplo}. Como todos os sinais das CVs são negativos, conclui-se que no terreno só haverá corte, logo, apenas o volume de corte será calculado.

Agora temos que determinar o número de quadrados em que cada estaca está presente, por exemplo, as estacas \textit{A1}, \textit{A2}, \textit{B2} e \textit{D3} pertencem, respetivamente a um, dois, três e quatro quadrados. Esta contagem também é apresentada na Figura \ref{fig:volume_area_unitaria_exemplo}, correspondendo aos números que se encontram entre parênteses. Fazendo-se a multiplicação da área de cada quadrado pelo somatório do produto das CVs com o número de quadrados para o qual pertence, temos:\picskip{0}

\begin{align*}
\mathrm{V}_{\mathrm{total}} =& \frac{10\times10}{4}(-6,4\times1-6,8\times2-6,0\times2-4,7\times2-2,3\times2-1,4\times1\\
&-5,9\times2-6,6\times4-6,5\times4-4,6\times4-2,4\times4-1,3\times2-6,3\times1-6,7\times3\\
&-5,1\times4-3,0\times4-2,0\times4-0,7\times2-6,4\times1-3,5\times2-2,0\times3\\
&-1,1\times4-0,7\times2-2,9\times1-1,4\times3-1,0\times2-1,2\times1-0,5\times1)\\
=&\frac{10\times10}{4}(-246,4)\\
\mathrm{V}_{\mathrm{total}}=&\mathbf{-6\,160\,m^3}
\end{align*}

O sinal do volume calculado representa que o terreno será escavado. Logo,  para que o terreno analisado seja sistematizado para a cota de $301$ m, o volume total a ser escavado será de $6\,160\,\mathrm{m}^3$.
\end{mybox}

\begin{mybox}[breakable,enhanced,pad at break=0mm,label={exemp:area_unitaria2}]{}No problema anterior, verificou-se que haverá a necessidade de transporte de uma grande quantidade de material. Sabendo-se que os custos com o transporte para a área de aterro é alto, pode-se estudar a possibilidade de se trabalhar com uma cota a ser sistematizado o terreno, tal qual, o volume escavado dentro da área seja igual ao volume a ser depositado nela mesma. 
Com a finalidade de minimizar os custos de transporte de material do terreno apresentado na Figura \ref{fig:volume_area_unitaria}a, calcular:
\begin{enumerate}
\item a cota que o terreno deve ter para que volume de corte seja igual ao volume a ser de aterrado na área;
\item o volume de corte.


\soluca
Esta solução é aproximada, pois não serão considerados os fatores de expansão do solo ao ser escavado, assim como o fator de compactação do solo ao ser aterrado. Considerando que o $1$ m$^3$ de solo escavado vai ser igual ao $1$ m$^3$ aterrado, a cota que resultará no volume de material a ser a escavado igual ao volume depositado dentro da mesma área, corresponderá a média ponderada das cotas das estacas. A ponderação a ser utilizada em determinada estaca corresponderá ao número de quadrados que a mesma tem em comum na grade, desta forma:


\begin{align*}
\mathrm{cota}_{\mathrm{media}} =&(307,4\times1+307,8\times2+307,0\times2+305,7\times2+303,3\times2+302,4\times1+ \\
&306,9\times2+307,6\times4+307,5\times4+305,6\times4+303,4\times4+ \\
&302,3\times2+307,3\times1+307,7\times3+306,1\times4+304,0\times4+ \\
&303,0\times4+301,7\times2+307,4\times1+304,5\times2+303,0\times3+ \\
&302,1\times4+301,7\times2+303,9\times1+302,4\times3+ \\
&302,0\times2+302,2\times1+301,5\times1)/68 \\
=&\frac{20\,714,4}{68} \\
\mathrm{cota}_{\mathrm{media}}=&\mathbf{304,624\,m}
\end{align*}

Logo, a cota que resultará em volume de corte igual ao volume a ser aterrado é de $304,624$ m. 
\\
Para cálculo dos volumes de corte, primeiramente deve-se traçar a curva de nível com a valor da cota que resultará no volume de corte igual ao volume de aterro, no nosso caso, a de $304,624$ m. Ela determinará na planta o que denominamos de \emph{pontos de passagem}\index{pontos de passagem}. Na curva de nível dos pontos de passagem, não haverá nem corte ou aterro, todavia, ela é importante pois separa as regiões onde serão realizados os trabalhos de escavação daquelas de deposição de material.

Nota-se, na figura a seguir, que o terreno com a linha dos pontos de passagem, divide o terreno em duas áreas uma na porção inferior e outra na porção superior representando, respectivamente, área de corte e de aterro.

\includegraphics[trim ={0mm 10mm 0mm 10mm},clip,scale=0.75]{curva_nivelExemplo2}

Para calcular o volume de corte tem-se que considerar apenas as estacas com CVs negativa com limite da curva de nível $304,624$ m. Será necessário computar os volumes da região que têm os quadrados inteiros, e somar com os volumes das áreas que têm apenas parte do quadrado indicando como corte, com limite dado pela curva de nível $304,624$ m. Para fins de simplificação e por representar volume a ser calculado desprezível, tomemos a CV em \emph{D4} igual a zero metros. 

\begin{itemize}
\item \emph{volume dos prismas com área da base em forma de quadrado:}
\end{itemize}

\begin{align*}
V_{\mathrm{quadCorte}} =&\frac{10\times10}{4}(-2,776\times1-3,176\times2-2,376\times2-1,076\times1 \\
&-2,276\times2-2,976\times4-2,876\times3-0,976\times1-2,676\times1\\
&-3,076\times3-1.476\times2-2,776\times1)\\
=&\frac{10\times10}{4}58,647\\
V_{\mathrm{quadCorte}} =&\mathbf{-1\,466\,m^3}
\end{align*}
\begin{itemize}
\item \emph{Volume ``1c", prisma com base em forma de trapézio:}
\end{itemize}

\begin{align*}
V_{\mathrm{1c}} =&
\left(\frac{(4,48+4,44)10}{2}\right)\left(\frac{-1,076-0,976+0+0}{4}\right) \\
=& 44,6\times-0,513 \\
V_{\mathrm{1c}} =& \mathbf{-23\,m^3}
\end{align*}
\begin{itemize}
\item \emph{Volume ``2c", prisma com base em forma de triângulo:}
\end{itemize}

\begin{align*}
V_{\mathrm{2c}} =&
\left(\frac{4,44\times6,1}{2}\right)\left(\frac{-0,976+0+0}{3}\right)\\
=&13,542\times-0,325 \\
V_{\mathrm{2c}} =&\mathbf{-4\,m^3}
\end{align*}
\begin{itemize}
\item \emph{Volume ``3c", prisma com base em forma de retângulo mais trapézio:}
\end{itemize}

\begin{align*}
V_{\mathrm{3c}} =&
\left(10\times6,1 +\frac{(10+7)\times3,9}{2}\right)\left(\frac{-2,876-0,976+0+0-1,476}{5}\right) \\
=&94,15\times-1,066\\
V_{\mathrm{3c}} =& \mathbf{-100\,m^3}
\end{align*}
\begin{itemize}

\item \emph{Volume ``4c", prisma com base em forma triângulo:}
\end{itemize}

\begin{align*}
V_{\mathrm{4c}} =&
\left(\frac{7\times9,92}{2}\right)\left(\frac{-1,476+0+0}{3}\right) \\
=&34,72\times-0,492 \\
V_{\mathrm{4c}} =&\mathbf{-17\,m^3}
\end{align*}

\begin{itemize}
\item
O volume total a ser escavado, considerando os volumes dos quadrados inteiros e os parciais.
\end{itemize}

\begin{align*}
V_{\mathrm{totalCorte}}=&V_{\mathrm{quadCorte}}+V_{\mathrm{1c}}+V_{\mathrm{2c}}+V_{\mathrm{3c}}+V_{\mathrm{4c}}\\
=&-1\,466-23-4-100-17\\
V_{\mathrm{totalCorte}}=&\mathbf{-1\,610\,m^3}
\end{align*}

Mais uma vez, o sinal apenas indica que será um volume de $1\,610$ m$^3$ a ser escavado.
%\begin{itemize}
%\item \textbf{Volume de aterro}
%\end{itemize}
%
%O procedimento é o mesmo anterior.
%
%\begin{align*}
%V_{\mathrm{quadrados}} =&
%\frac{10\times10}{4}(2,224\times1+2,324\times2+2,924\times2+2,924\times2+2,624\times2+\\
%&3,124\times1+1,324\times1+1,224\times2+1,624\times3+2,524\times4\\
%&2,224\times3+2,424\times1+0,624\times1+1,624\times2+0,724\times1\\
%=&\frac{10\times10}{4} 59,372\\
%V_{\mathrm{quadrados}} =&\mathbf{1\,484\,m^3}
%\end{align*}
%
%\begin{align*}
%V_{\mathrm{1A}} =&
%\left(100-\frac{(4,48+4,44)10}{2}\right)\left(\frac{1,324+1,224+0+0}{4}\right) \\
%=& 55,4\times0,637 \\
%V_{\mathrm{1A}} =& \mathbf{35\,m^3}
%\end{align*}
%
%\begin{align*}
%V_{\mathrm{2A}} =&
%\left(100-\frac{4,44\times6,1}{2}\right)\left(\frac{1,224+1,624+0,624+0+0}{5}\right)\\
%=&86,458\times0,694 \\
%V_{\mathrm{2A}} =&\mathbf{60\,m^3}
%\end{align*}
%
%\begin{align*}
%V_{\mathrm{3A}} =&
%\left(100-\left(10\times6,1 +\frac{(10+7)\times3,9}{2}\right))\right)\left(\frac{0,624+0+0}{3}\right) \\
%=&5,850\times0,208\\
%V_{\mathrm{3A}} =& \mathbf{1\,m^3}
%\end{align*}
%
%\begin{align*}
%V_{\mathrm{4A}} =&
%\left(100-\frac{7\times9,92}{2}\right)\left(\frac{0+0,642+1,624+0}{4}\right) \\
%=&65,28\times0.567 \\
%V_{\mathrm{4A}} =&\mathbf{37\,m^3}
%\end{align*}
%
%\begin{align*}
%V_{\mathrm{totalAterro}}=&V_{\mathrm{quadrados}}+V_{\mathrm{1A}}+V_{\mathrm{2A}}+V_{\mathrm{3A}}+V_{\mathrm{4A}}\\
%=&1\,484+35+60+1+37\\
%V_{\mathrm{totalAterro}}=&\mathbf{1\,617\,m^3}
%\end{align*}

\end{mybox}

\section*{Exercícios}
\begin{exercicio} Para fins de uma obra de engenharia, será escavado um volume de $6\,000$ m$^3$. Sabendo-se que o material a ser escavado vai sofrer expansão de $15\%$ de seu volume e, que o caminhão, tipo basculante, que será empregado no transporte tem capacidade de $12$ m$^3$, qual será o número de viagens necessárias para transportar todo o material? 
\resp 575 viagens.

\begin{exercicio} Deseja-se aterrar um volume de $400$ m$^3$ com terra. Qual será o volume de terra necessário para este aterro, sabendo-se que o material a ser utilizado terá seu volume reduzido em $25\%$ no processo de compactação? 
\resp $500$ m$^3$.

\begin{exercicio} Considere  as áreas entre as secções da estaca $5+0$ m e a intermediária $6+0$ m de, respectivamente $31$ m$^2$ e $24$ m$^2$. Qual o volume entre as secções das duas estacas. Considere a distância horizontal de $20$ m entre as estacas inteiras. 
\resp $550$ m$^3$.

\begin{exercicio} Considere as áreas entre as secções da estaca $31+5$ m e a intermediária $32+0$ m de, respectivamente $11$ m$^2$ e $16$ m$^2$. Qual o volume entre as secções das duas estacas? Considere a distância horizontal de $20$ m entre as estacas inteiras. 
\resp $202,5$ m$^3$.

\begin{exercicio}Para os dados das áreas a serem escavadas de secções apresentadas na tabela a seguir, calcular o volume de material a ser escavado. Considere a distância entre as secções de $20$ m
\begin{table}[h!]\label{tab:exercicio_area_secao_media}
\def\arraystretch{1.0}
\begin{tabular}{rc}
\hline
\multirow{2}{*}{\cellcolor{white}Estaca} & Área de\\ 
                        & corte (m$^2$) \\ \cline{1-2}
$8+0$ m & 151 \\
$9+0$ m & 191 \\
$10+0$ m & 133 \\
$11+0$ m & 49 \\
$12+0$ m & 70 \\ \hline
\end{tabular}
\end{table}
\resp $9\,670$ m$^3$

\begin{exercicio} Utilizando os dados do Exemplo \ref{exemp:area_unitaria2} da página \pageref{exemp:area_unitaria2}, calcular o volume de aterro.
\resp $1\,617$ m$^3$.


\begin{exercicio} Um terreno foi estaqueado conforme a Figura~\ref{fig:cap_alt_grid_exer}
para fins de trabalho de terraplenagem. O espaçamento entre as estacas
foi de $20,0$ m. A declividade do terreno na direção das linhas é de
\textendash $3$\% e na direção das colunas é de \textendash $2$\%. A cota
do terreno para estaca A1 de $100,00$~m. Pedem-se: 


\item Calcular as cotas para todas as estacas; 
\item Traçar as curvas de nível da área, com equidistância vertical de $1,00$ m;
\item Calcular a cota (hm) de um plano horizontal que, na terraplenagem, resulte em volumes de corte e aterro iguais;
\item Traçar a linha de passagem, indicando as áreas de corte e aterro;
\item Calcular a cota vermelha para todas as estacas. 


\begin{SCfigure}[][!h] \includegraphics[trim = 0mm 0mm 20mm 60mm,scale=1]{Cap_altimetria/cap_alt_exe_grid}
\caption{}

\label{fig:cap_alt_grid_exer} 

\end{SCfigure}

\resp a) e e) nas Tabelas abaixo; c) \emph{hm} = $98,5$ m.

\begin{SCtable}[][!h] \includegraphics[trim = 0mm 0mm 0mm 0mm,scale=1]{Cap_altimetria/ExUmTerreno}
\caption{}

\label{tab:exe_solocao} \end{SCtable}

\begin{exercicio}Num trabalho de sistematização, transferiu-se a altitude
de um marco para um ponto próximo a área de trabalho, pelo método
de nivelamento trigonométrico. Posteriormente, conhecendo-se esta
nova altitude, determinaram-se as altitudes das estacas que serviram
de sistematização. Dados:
\begin{itemize}
\item transferência de altitude: na estação A, cuja altitude é de $305,3$~m
instalou-se uma estação total ficando o eixo da luneta a $1,74$~m de
altura (\emph{ai}), em seguida visou-se o prisma, cuja a altura era
de $1,0$~m (\emph{ap}), em X, anotando-se o ângulo zenital $96^{\circ}20'$
e a \emph{DI} de $926,0$~m;
\item altitudes das estacas que serviram à sistematização, com o nível de
precisão fez-se uma irradiação geométrica obtendo-se os seguintes
dados, visada de \emph{ré} na mira colocada sobre X igual a $0,12$~m;
leitura da mira, em metros, nas estacas da quadrícula ($20$~m por
 $20$ m) na Tabela~\ref{tab:cap_alt_transf_alt}.
\end{itemize}
Com os dados acima pede-se:


\item a altitude em X; 
\item a altitude nas estacas da quadrícula;
\item calcular a altura média do plano que resultará em $V_c=V_a$;
\item projetar um plano inclinado de $1\%$ de declividade no sentido A para C e de $-2\%$ na direção da secção de 1 para 2.




\begin{SCtable}[][htb] 
\centering 
\caption{Valores das medidas de \it vante.}
\setlength{\extrarowheight}{4pt} % 
\begin{tabular}{cccc} \hline \rowcolor[gray]{1}  
Estaca    & A     & B	 & C		
\tabularnewline \hline
 1	    & $1,86$  & $2,20$ & $1,30$     \tabularnewline  \rowcolor[gray]{.95}     
2    	& $2,50$ & $2,40$  & $2,30$     \tabularnewline      
 \hline 
\end{tabular}\label{tab:cap_alt_transf_alt}\end{SCtable}

\resp a) altitude X = $203,891$ m; b) na Tabela~\ref{tab:cap_alt_transf_alt_resp1};
c) \emph{hm}~=~$201,866$~m; d) na Tabela~\ref{tab:cap_alt_transf_alt_resp2}.

\begin{SCtable}[][htb] 
\centering 
\caption{Altitude das estacas \rm{(m)}.}
\setlength{\extrarowheight}{4pt} % 
\begin{tabular}{cccc} \hline  
Estaca    & A     & B	 & C		
\tabularnewline \hline
1	     & $202,151$ & $201,811$ & $202,711$    \tabularnewline  \rowcolor[gray]{.95}     
2     	&$ 201,511$ & $201,611$ & $201,711$   \tabularnewline      
 \hline 
\end{tabular}\label{tab:cap_alt_transf_alt_resp1}
\end{SCtable}
\begin{SCtable}[][htb] 
\centering 
\caption{Cotas do plano inclinado.}
\setlength{\extrarowheight}{4pt} % 
\begin{tabular}{cccc} \hline  
Estaca    & A     & B	 & C		
\tabularnewline \hline
1	  & $201,866$ & $202,066$ & $202,266$   \tabularnewline  \rowcolor[gray]{.95}     
2       & $201,466$ & $201,666$ & $201,866$   \tabularnewline      
 \hline 
\end{tabular}\label{tab:cap_alt_transf_alt_resp2}\end{SCtable}

\begin{exercicio}Um terreno de $40,0$ m por $40,0$ m, foi estaqueado
em quadrículas de $20,0$~m~por~$20,0$~m. As cotas obtidas para cada
vértice estão na Figura~\ref{fig:cap_alt_exer_grid2}. 

\begin{figure}[H] \includegraphics[trim = 0mm 0mm 0mm 0mm,scale=1]{Cap_altimetria/cap_alt_exer_grid2}
\caption{Cotas no terreno \rm{(m)}.}
\label{fig:cap_alt_exer_grid2} 
\end{figure}

Pede-se: 


\item desenhar o terreno na escala $1:500$ e locar as curvas de nível inteiras, pelo método de interpolação por cálculo com $EV = 1,0$ m; 
\item projetar um plano inclinado de $+2$\% na direção e sentido de A para C que resultará em $V_c=V_a$. Fazer desenho na escala 1:500; 
\item calcular os volumes de corte e aterro para o plano inclinado (não considere talude de corte e saia de aterro), utilize fórmula da área média das secções.




\resp b) Figura~\ref{fig:cap_alt_exer_grid2_rep}; c) $V_{\textit{c}}=557,90\text{\,\ m}^{3}$;
$V_{\textit{a}}=562,89\text{\,\ m}^{3}$.
\begin{figure}[H] \includegraphics[trim = 0mm 0mm 0mm 0mm,scale=1]{Cap_altimetria/cap_alt_exer_grid2_resp}
\caption{Plano inclinado \rm{(m)}.}
\label{fig:cap_alt_exer_grid2_rep} 
\end{figure}

