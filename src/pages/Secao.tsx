
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import FABMenu from '@/components/FABMenu';

const sectionData = {
  1: {
    title: 'Origens filosóficas dos direitos humanos',
    content: `
      A discussão sobre os direitos humanos é central em nossa sociedade contemporânea, marcada por grandes diferenças entre as parcelas mais ricas e as mais marginalizadas da população global. Questões políticas, econômicas, raciais, étnicas e sociais dividem os grupos humanos a ponto de impedir que uma parcela significativa da humanidade não tenha acesso aos seus direitos mais básicos.

      No entanto, os debates sobre os direitos individuais não são recentes. Na verdade, estão presentes desde os pensamentos dos primeiros filósofos clássicos. Logo, as bases dos conceitos que norteiam as legislações quanto aos direitos humanos podem ser rastreadas nas ideias da lei natural e do direito natural.

      Platão discute a lei natural em alguns de seus diálogos, como em Timeu, no qual o filósofo aponta o indivíduo como um ser social que deve agir de modo justo com os outros indivíduos (MATSUURA, 2019). A lei natural também é discutida por Platão em Górgias, outro de seus diálogos, publicado originalmente por volta do ano 403 a.C. Em uma discussão entre Sócrates e Cálicles a respeito da justiça, Platão (2006, p. 167) define: "não é, portanto, apenas em virtude da lei que é mais feio praticar algum ato injusto do que ser vítima de injustiça, e que a justiça consiste na igualdade, mas também por natureza".

      Em uma de suas obras mais importantes, A República, o filósofo aprofunda as discussões sobre a justiça e sobre o que chama de direito natural, utilizando o termo physei dikaion (justo por natureza) para explicar como esse direito é diferente do direito fundado nas leis escritas pelos seres humanos. Segundo Platão (2006), as ações humanas são mutáveis e individuais, portanto o direito humano é diferente do direito natural, que é sempre igual e imutável para todos (NEIVA, 2011).

      A discussão sobre o physei dikaion está presente também na obra Ética a Nicômaco (ARISTÓTELES, 2009), em que Aristóteles discute os conceitos de justiça e equidade. Para o filósofo, equidade e justiça estão interligadas. Contudo, não é possível afirmarmos que tudo o que é lei seja totalmente pleno e justo, pois não abarca todas as possibilidades e realidades de todos os indivíduos. Mesmo que as leis desenvolvidas pelo grupo social sejam justas, nem tudo que é justo, do ponto de vista da natureza humana e das relações sociais, é abarcado pela lei. Dessa forma, o direito natural deve estar acima dos códigos legais desenvolvidos pela sociedade (MIRANDA FILHO, 2013).

      São Tomás de Aquino (2005), um dos principais filósofos católicos, retoma o tema dos direitos naturais em Suma Teológica, obra na qual discute as diversas modalidades da lei e as classifica em quatro diferentes tipos: lei eterna, lei natural, lei humana e lei divina positiva.

      A lei eterna é aquela que está relacionada a Deus e dirige os atos dos indivíduos. Já a lei natural, segundo Aquino (2005), surge da relação entre a lei eterna e a ação moral do ser humano racional. Enquanto a lei eterna é infinita, a lei natural é finita e temporal, por se relacionar à humanidade e ao grupo social. A lei natural é, para o filósofo, a manifestação da lei eterna no indivíduo, que possibilita a ele poder distinguir entre o bem e o mal. Para que os princípios e as normas éticas da lei eterna e da lei natural possam ser colocados em prática no cotidiano das relações humanas, é necessário que sejam transcritos e traduzidos para regras específicas e normas explícitas. Essa é a origem da terceira lei, a lei humana, um ordenamento jurídico que possibilita a convivência em sociedade.

      Como filósofo católico, Aquino (2005) desenvolve um quarto tipo de lei, a denominada lei divina positiva. Para ele, essa lei é necessária para que o ser humano seja virtuoso e possa agir tanto de acordo com a lei eterna quanto com a lei natural, e isso depende de ele receber ou não a revelação divina. O ser humano é falho e, para ter a certeza de que suas ações não sejam fundamentadas em juízos equivocados, deve seguir a lei divina. As leis humanas dizem respeito apenas aos atos externos que ocorrem nas relações humanas. Entretanto, para ser virtuoso, o ser humano precisa seguir internamente os ensinamentos e as regras divinas. De acordo com o filósofo cristão, a lei humana não consegue controlar e castigar todos os males realizados pelo indivíduo. Assim, a lei divina pune aqueles que não são julgados pela lei humana.

      Aquino – assim como outro importante filósofo católico da Idade Média, Santo Agostinho – estabelece uma relação entre o direito natural, discutido pelos filósofos gregos, e a fé cristã, mostrando que a lei divina e a lei eterna são a base sobre a qual se estabelece a lei natural, que coloca todos os seres humanos como iguais.

      A lei humana, por ser imperfeita e incompleta, não garante que essa igualdade seja colocada em prática. Por isso, os direitos humanos, apesar de serem um direito de todos os indivíduos, não são totalmente garantidos pela lei humana.

      Martin Luther King Jr., um dos mais proeminentes líderes na luta pelos direitos humanos no século XX, apoiou algumas de suas ideias nessa visão da filosofia católica da era medieval, tanto nas ideias de Santo Agostinho quanto nas de São Tomás de Aquino. Conforme King: "todos os estatutos da segregação são injustos porque a segregação distorce a alma, prejudica a personalidade, dá ao segregacionista um sentido falso de superioridade e ao segregado um sentido falso de inferioridade" (KING, 1970 apud MIRANDA FILHO, 2013, p. 18).

      Para Miranda Filho (2013), estão presentes nas ideias e na luta de King aspectos relacionados à lei eterna e à lei natural. A lei humana, no momento histórico no qual se dá a luta de King, não garante a igualdade, pois é segregacionista. Para o líder, só com o total respeito ao direito de todos os indivíduos, com equidade e justiça, a lei humana se aproximaria da justiça divina e natural.
    `,
    videoTitle: 'Fundamentos Filosóficos dos Direitos Humanos',
    videoUrl: 'https://player-serverless.iesde.com.br/prod/player?path=ZGlyZWl0b3NfaHVtYW5vc19lX3JlbGFjb2VzX3NvY2lhaXMvZGlyZWl0b3NfaHVtYW5vc19lX3JlbGFjb2VzX3NvY2lhaXNfMDFfc2VjXzAxXzI2Njc0NC5tcDQ='
  },
  2: {
    title: 'Origens jurídicas dos direitos humanos',
    content: `
      Com base nas discussões desenvolvidas pelos filósofos contratualistas, os direitos humanos passaram a ser incluídos nas legislações e nas constituições dos países democráticos com base em dois importantes documentos: a Constituição dos Estados Unidos da América, promulgada em 1787, e a Constituição Francesa, de 1791.

      Após a Revolução Francesa, em 1789, foi instituída a Assembleia Nacional Constituinte, que votou e promulgou, no mesmo ano, os Artigos da Constituição, que serviram de base para o desenvolvimento da Constituição Francesa, promulgada em 1791. O documento central da Assembleia é a Declaração dos Direitos do Homem e do Cidadão, de 1789. O artigo 1º da Declaração define que:

      "os homens nascem e são livres e iguais em direitos. As distinções sociais só podem fundar-se na utilidade comum" (DECLARAÇÃO..., 2021).

      No mesmo período, os Estados Unidos da América, recém-fundados no ano de 1776, após a independência do jugo político da Inglaterra, também passavam pelo processo de criação de sua constituição. Assinada em 1787, a Constituição Americana foi complementada, no ano de 1791, pelo documento conhecido como Bill of Rights (Carta de Direitos, em tradução livre), que define a garantia dos direitos humanos como um ponto central da legislação americana.

      A Constituição Francesa e a Americana eram inovadoras e representaram uma ruptura nos modelos de legislação característicos dos Estados absolutistas que dominaram a Europa e suas colônias durante grande parte da Idade Média e no início da Idade Moderna.

      A inclusão dos direitos humanos como base conceitual e ponto central das constituições dos dois países influenciou a criação e a alteração de constituições e do arcabouço jurídico de diversos outros países, tanto aqueles que realizaram a transição para formas democráticas de governo quanto os que mantiveram a forma de governo monárquico.

      Um exemplo de como a preocupação com os direitos humanos passou a ser presente nas legislações de diversos países pode ser observado nas mudanças implementadas na Constituição de Portugal, realizada em 1822, que incluiu, em um de seus artigos, o objetivo de garantir a liberdade, os direitos individuais, a segurança e o direito à propriedade privada a todos os cidadãos portugueses.

      A crescente constitucionalização tornou os direitos humanos ainda mais importantes nas discussões políticas e jurídicas, com a promulgação, em diversos países, de leis positivas com o objetivo de garantir o acesso de todos os cidadãos aos seus direitos individuais.

      Apesar de ter como base filosófica a ideia do contrato social e dos direitos naturais, de acordo com as pressões políticas, características culturais e influência de forças econômicas sobre o governo em cada país, as legislações dos direitos humanos foram adotadas e promulgadas com velocidades e intensidades diferentes.

      Um exemplo é a abolição da escravidão. Enquanto a Dinamarca promulgou a lei da abolição da escravatura no ano de 1792, nos Estados Unidos, um dos berços dos direitos humanos, somente no ano de 1863 os negros foram libertados da escravidão por Abraham Lincoln, após a guerra civil conhecida como Guerra da Secessão, durante os anos de 1861 e 1865.

      Já no Brasil, a escravidão só foi abolida em 1888, mais de um século depois da promulgação das constituições francesa e americana que colocaram os direitos humanos no centro da discussão jurídica das constituições nacionais.

      Com o rápido crescimento econômico trazido pela industrialização e pela adoção do modelo capitalista de produção e o consequente crescimento das cidades, com a migração de trabalhadores em busca dos empregos nas indústrias, surgiram novas demandas sociais, notadamente entre os membros das classes proletárias (MARX; ENGELS, 2008).

      Entre as diversas demandas surgidas com a nova realidade social, destacam-se:

      • o direito a um salário justo com relação ao trabalho desenvolvido,
      • o direito à saúde,
      • à habitação digna e
      • à educação (JERÓNIMO, 2019).

      Esses direitos sociais, que não estavam incluídos na visão filosófica dos direitos naturais, seguem a lógica de individualidade dos direitos. Da mesma forma que os direitos humanos e os direitos naturais foram incluídos na maioria das constituições de diversos países, os direitos sociais também passaram a fazer parte do arcabouço jurídico de diversos países a partir da última década do século XIX e início do século XX.
    `,
    videoTitle: 'Desenvolvimento Jurídico dos Direitos Humanos',
    videoUrl: 'https://player-serverless.iesde.com.br/prod/player?path=ZGlyZWl0b3NfaHVtYW5vc19lX3JlbGFjb2VzX3NvY2lhaXMvZGlyZWl0b3NfaHVtYW5vc19lX3JlbGFjb2VzX3NvY2lhaXNfMDFfc2VjXzAyXzI2Njc0NS5tcDQ='
  },
  3: {
    title: 'Origens políticas dos direitos humanos',
    content: `
      Antes de apontarmos as origens políticas das discussões sobre os direitos humanos, é necessário definirmos o termo política. A palavra é bastante utilizada no cotidiano e está presente na mídia diariamente. Afinal, as decisões tomadas pelos políticos, sejam eles do Poder Executivo, sejam do Poder Legislativo, impactam diretamente a vida dos indivíduos de uma sociedade.

      O termo política pode ser usado em diversos contextos diferentes e com significados diversos. Pode estar relacionado às políticas públicas, isto é, aos programas e às ações coordenadas pelo governo ou pelo Estado. Para Souza (2006), ao analisarmos as políticas públicas de determinado governo, é possível compreendermos as motivações, os valores e os objetivos do grupo político que está no poder.

      Na sua acepção mais conhecida e utilizada, política está relacionada à organização do Estado em poderes que se equilibram e ao processo eleitoral pelo qual os representantes do povo são escolhidos para exercer cargos nesses poderes. Segundo Caxito (2020, p. 39):

      "Assim, o governo é composto por um grupo de indivíduos eleitos, que assumem posições nas quais têm alto poder de decisão sobre os rumos da sociedade. Porém, essas decisões são contrabalançadas pelo sistema de freios, pelos contrapesos dos três poderes, pela atuação política, pelas estratégias dos partidos políticos, pelos interesses de grupos econômicos e, também, pelas ideologias que cada um desses grupos representa."

      É possível observarmos, na definição apresentada, que a palavra política aparece em vários contextos diferentes. Ela está relacionada ao próprio modelo de divisão de poderes, aos grupos de interesse que se organizam na cena pública, às ideologias defendidas e representadas por esses grupos e ao processo de negociação e mediação dos conflitos e interesses das diversas parcelas da sociedade.

      Hannah Arendt, uma das principais filósofas a abordar o conceito de política, apresenta em sua obra O que é política? (2002) diversos conceitos sobre o termo. Para ela, a política surge por meio da pluralidade dos indivíduos que fazem parte de um grupo social. Como as pessoas não são iguais e têm interesses, crenças e valores diferentes, é necessário haver uma forma de mediar essas divergências, e é por meio da política que a convivência entre diferentes é possível.

      Uma das definições dadas por Arendt (2002) de política é especialmente importante no contexto das discussões no que diz respeito aos direitos humanos:

      "O homem, tal como a filosofia e a teologia o conhecem, existe — ou se realiza — na política apenas no tocante aos direitos iguais que os mais diferentes garantem a si próprios. Exatamente na garantia e concessão voluntária de uma reivindicação juridicamente equânime reconhece-se que a pluralidade dos homens, os quais devem a si mesmos sua pluralidade, atribui sua existência à criação do homem." (ARENDT, 2002, p. 2)

      Já Rancière (2018) define a política tanto como um processo que agrega ao grupo social pela aceitação e pelo consentimento das diferenças quanto como a organização do Estado em diferentes poderes equilibrados, formados por lugares, cargos e funções que são ocupados e distribuídos entre os grupos de interesse, de acordo com processos definidos – processos eleitorais, por exemplo.

      No contexto político, mesmo com as discussões referentes aos direitos humanos tendo iniciado nos séculos XVII e XVIII, como abordamos na primeira parte deste capítulo, houve a transição dos regimes absolutistas para o modelo democrático do Estado graças às ideias dos filósofos contratualistas. Foi somente após a Segunda Guerra Mundial (1939–1945) que o tema passou a fazer parte das articulações políticas globais, com a publicação da Declaração Universal de Direitos Humanos pela Organização das Nações Unidas (ONU), em 1948.

      De acordo com Salles (2015), a ONU foi criada no ano de 1945, logo após o final da Segunda Guerra Mundial, como resultado de um esforço de diversos países para promover a paz, a reorganização econômica e a reconstrução das relações entre as nações. Além da preocupação imediata com a reconstrução da Europa, em grande parte destruída pela guerra, a ONU nasceu também com a preocupação de promover o desenvolvimento social nos países em desenvolvimento.

      A Declaração Universal dos Direitos Humanos, segundo Rosa (2015), foi um dos principais documentos publicados pela ONU nos primeiros anos após sua formação. Conforme a autora, 50 países foram signatários da Declaração, que buscava garantir a proteção social e os direitos individuais que haviam sido sistematicamente desrespeitados durante a sequência de conflitos que marcaram a primeira metade do século.

      O contexto político no qual a Declaração foi publicada é fundamental para entendermos cada um de seus artigos. Em seu preâmbulo, o documento destaca, entre outras considerações que fundamentam o documento, que:

      "considerando que o desconhecimento e o desprezo dos Direitos Humanos conduziram a atos de barbárie que revoltam a consciência da Humanidade e que o advento de um mundo em que os seres humanos sejam livres de falar e de crer, libertos do terror e da miséria, foi proclamado como a mais alta inspiração humana;

      considerando que é essencial a proteção dos Direitos Humanos através de um regime de direito, para que o homem não seja compelido, em supremo recurso, à revolta contra a tirania e a opressão."
      (ONU, 1948, p. 1)

      As duas considerações estão relacionadas ao momento político global do pós-guerra, no qual o documento foi escrito. A primeira mostra que os motivos políticos que causaram as duas guerras mundiais levaram a situações de total desrespeito aos direitos humanos. O que se pretende, com a declaração, é lançar as bases para um mundo no qual as divergências políticas não ocasionem perdas de direitos individuais.

      A segunda consideração mostra o receio dos países signatários com o desenvolvimento de ditaduras nas quais os direitos humanos não sejam respeitados. No contexto político do momento, o mundo assistia ao início da divisão política entre o mundo ocidental, capitaneado pelos Estados Unidos, e os países comunistas, liderados pela União Soviética.

      Mesmo tendo sido aprovada pela esmagadora maioria dos países que compunham a ONU naquele momento, profundas divergências marcaram a definição dos direitos que constam no documento. Essas divergências prenunciavam a divisão do mundo em duas diferentes visões econômicas e políticas que marcaram o período da Guerra Fria.

      Divergências sobre aspectos culturais e religiosos também marcaram as discussões que deram origem à Declaração, em especial com relação às nações da África e Oriente Médio, como África do Sul e Arábia Saudita, para as quais a declaração apresentava uma visão ocidentalizada.

      Já para as nações socialistas do Leste Europeu e da Ásia, a Declaração apresentava uma visão capitalista e individualista, em contraposição à visão da economia centralizada do comunismo. Assim, países como União Soviética, Iugoslávia, Bielorrússia, Polônia, Tchecoslováquia e Ucrânia se abstiveram durante a votação do documento.

      Para Alves (1994), o documento só foi aprovado por ter um caráter de declaração e orientação, não sendo nenhum país signatário obrigado a implantar nenhuma de suas determinações. O autor aponta que foram necessários quase 20 anos para que a declaração passasse a ter peso de obrigatoriedade, com a aprovação no ano de 1966 do:

      • Pacto Internacional de Direitos Econômicos, Sociais e Culturais e
      • Pacto Internacional de Direitos Civis e Políticos.

      Com base na Declaração da ONU, cada país passou a realizar alterações jurídicas e foram criadas legislações específicas para orientar as políticas públicas com o objetivo de garantir a proteção dos direitos humanos.
    `,
    videoTitle: 'Movimentos Políticos e Direitos Humanos',
    videoUrl: 'https://player-serverless.iesde.com.br/prod/player?path=ZGlyZWl0b3NfaHVtYW5vc19lX3JlbGFjb2VzX3NvY2lhaXMvZGlyZWl0b3NfaHVtYW5vc19lX3JlbGFjb2VzX3NvY2lhaXNfMDFfc2VjXzAzXzI2Njc0Ni5tcDQ='
  },
  4: {
    title: 'Direitos humanos: contextualização histórica',
    content: `
      Segundo Tosi (2009), a discussão a respeito dos direitos humanos evoluiu à medida que o entendimento sobre o tema foi se tornando mais global, aprofundado e diversificado.

      Se em sua primeira versão, em 1948, a Declaração Universal dos Direitos Humanos da ONU foi assinada por 48 países, nas décadas iniciais do século XXI, o número de Estados participantes da organização e signatários da declaração se aproximou de 200 nações, mostrando que o tema é uma preocupação global.

      No decorrer da segunda metade do século XX e nas primeiras décadas do século XXI, a ONU e diversos outros organismos internacionais desenvolveram estudos, conferências, documentos e legislações sobre os direitos humanos, o que trouxe um conhecimento cada vez mais profundo e extenso de diversos temas relacionados aos direitos humanos.

      À medida que as discussões se aprofundaram, também se diversificaram e especializaram. Se nos primeiros documentos os direitos humanos eram pensados para um indivíduo genérico, gradativamente se passou a enxergar a diversidade cultural, religiosa, etária, étnica e de gênero. Desse modo, as legislações passaram a ser desenvolvidas para garantir os direitos específicos dos diversos grupos sociais.

      Analisando essa evolução dentro do contexto histórico das discussões sobre os direitos humanos, Tosi (2009) classifica os direitos humanos em quatro gerações:

      **Primeira geração**
      Relacionada à conquista dos direitos civis ou naturais, que Tosi chama de direitos negativos, pois têm como objetivo limitar os excessos do Estado.

      Exemplos:
      • Direito à vida,
      • Liberdade,
      • Propriedade privada,
      • Liberdade de expressão.

      Esses direitos foram o foco das primeiras legislações, como a Declaração dos Direitos do Homem e do Cidadão (França) e a Bill of Rights (EUA), no final do século XVIII.

      Apesar de estarem presentes em declarações e legislações, ainda não são plenamente garantidos. A ONU (2019) apontou:
      • 150 milhões de crianças em trabalho infantil,
      • 25 milhões em situação análoga à escravidão,
      • 5 milhões vítimas de exploração sexual.

      Segundo a Anistia Internacional (2021), 652 execuções por pena de morte ocorreram em 2019 (sem contar a China, que não divulga números oficiais, mas estima-se mais de mil execuções).

      **Segunda geração**
      Ligada aos direitos sociais, especialmente os econômicos, como:
      • Direito ao trabalho digno,
      • Saúde,
      • Educação gratuita,
      • Cultura,
      • Proteção à infância.

      Surgem das lutas da classe trabalhadora, principalmente no século XIX.

      Apesar de já constarem em muitas legislações, muitos ainda não são plenamente garantidos. Em muitos países, inclusive no Brasil, esses direitos são vistos como metas a serem alcançadas, e não como obrigações imediatas do Estado.

      **Terceira geração**
      Referem-se aos direitos de caráter coletivo ou difuso, como:
      • Direito à paz,
      • Meio ambiente equilibrado,
      • Desenvolvimento sustentável,
      • Preservação da cultura dos povos.

      Esses direitos envolvem solidariedade entre as nações e exigem cooperação internacional. Exemplo: Acordo de Paris, voltado à redução de poluentes e combate às mudanças climáticas.

      São complexos de garantir porque dependem da vontade política e econômica de vários países, com diferentes ideologias e prioridades.

      **Quarta geração**
      Direitos voltados às próximas gerações, garantindo:
      • Sustentabilidade ambiental,
      • Equidade tecnológica,
      • Proteção dos dados e privacidade digital.

      Segundo Bonavides (2003), a institucionalização desses direitos será o marco do Estado social pleno.
    `,
    videoTitle: 'Evolução Histórica dos Direitos Humanos',
    videoUrl: 'https://player-serverless.iesde.com.br/prod/player?path=ZGlyZWl0b3NfaHVtYW5vc19lX3JlbGFjb2VzX3NvY2lhaXMvZGlyZWl0b3NfaHVtYW5vc19lX3JlbGFjb2VzX3NvY2lhaXNfMDFfc2VjXzA0XzI2Njc0Ny5tcDQ='
  },
  5: {
    title: 'Direitos humanos no Brasil',
    content: `
      Existe uma relação intrínseca entre as legislações sobre os direitos humanos e os estados democráticos, pois respeitar os direitos dos indivíduos é um dos principais valores da República e da democracia. Moraes (2003) estabelece uma relação entre os direitos humanos, a justiça e o arcabouço jurídico do país. Para o autor, sem respeito aos direitos individuais, não é possível garantir a justiça social.

      Conforme as Diretrizes Nacionais de Ensino em Direitos Humanos (BRASIL, 2013, p. 38), os valores que direcionam as legislações e os programas do governo brasileiro quanto aos direitos humanos são:

      "por valores democráticos entendem-se:
      (a) O amor à igualdade e consequente horror aos privilégios;
      (b) A aceitação da vontade da maioria legitimamente formada, decorrente de eleições ou de outro processo democrático, porém com constante respeito aos direitos das minorias; e
      (c) Em consequência dos tópicos acima, configura-se como conclusivo o respeito integral aos Direitos Humanos."

      No entanto, mesmo que as legislações existam e sejam adequadas, garantir que os direitos humanos sejam respeitados no cotidiano da sociedade é uma tarefa complexa e ainda difícil de ser implementada. Nogueira (2001) afirma que a democracia, na prática da política brasileira, ainda está mais ligada ao rito eleitoral do que à garantia real dos direitos humanos de todas as parcelas da população.

      Após mais de duas décadas sob regime militar, foi promulgada em 1988 uma nova constituição brasileira, conhecida como Constituição Cidadã. Foi o primeiro documento a determinar os direitos e deveres dos cidadãos, institucionalizando os direitos humanos no país. No artigo 5º da Constituição:

      "Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade." (BRASIL, 1988)

      Apesar de representar um grande avanço, mesmo depois de mais de três décadas, a garantia plena dos direitos dos cidadãos brasileiros ainda não foi alcançada.

      O Brasil possui uma grande extensão territorial e uma diversidade cultural e étnica significativa, com origens marcadas por ondas migratórias, pela exploração das riquezas naturais e pela escravização de povos. Como resultado, é um país com um grande débito em relação aos direitos humanos de boa parte de sua população (SANTOS; CHAUÍ, 2016).

      Mesmo nas grandes capitais, o Estado não consegue garantir o direito à vida, o mais básico de todos. A situação se agrava quando se trata dos direitos de segunda e terceira geração, que exigem investimentos de longo prazo em políticas públicas. Frequentemente, tais políticas sofrem descontinuidade a cada troca de governo.

      Outro desafio central no Brasil é a reparação histórica aos grupos minoritários, como as minorias étnicas e de gênero. Para Paula, Silva e Bittar (2017, p. 3842), minorias podem ser definidas como:

      "um grupo humano ou social que esteja em uma situação de inferioridade ou subordinação em relação a outro, considerado majoritário ou dominante. Essa posição de inferioridade pode ter como fundamento diversos fatores, como socioeconômico, legislativo, psíquico, etário, físico, linguístico, de gênero, étnico ou religioso."

      A inclusão social dessas minorias é uma das maiores dívidas da sociedade brasileira (URI; URI, 2019), e não depende apenas de leis ou ações afirmativas, mas de mudanças estruturais nas políticas econômicas e sociais, visando a redução da desigualdade de renda e concentração de riqueza.

      O Brasil é signatário de grande parte dos instrumentos internacionais de direitos humanos, mas ainda apresenta fortes desigualdades sociais e dificuldade em garantir o acesso efetivo aos direitos pela população mais vulnerável (MARTINS; SIQUEIRA, 2017).

      Dornelles (1998) destaca a falta de conhecimento dos próprios cidadãos quanto a seus direitos como um grande obstáculo. A educação em direitos humanos é uma das ferramentas mais eficazes para aumentar a consciência da população. Por isso, em 2013, a Secretaria de Direitos Humanos da Presidência da República publicou o Caderno de Educação em Direitos Humanos, que define diretrizes para o ensino do tema no Brasil (BRASIL, 2013).

      O documento orienta a educação em direitos humanos em cinco eixos:
      • Educação básica
      • Educação superior
      • Educação dos profissionais de Justiça e Segurança
      • Educação e mídia
      • Educação não formal

      Com o objetivo de consolidar os direitos previstos na Constituição, o Estado brasileiro lançou, em 1996, o Programa Nacional de Direitos Humanos (PNDH). Esse programa visava garantir direitos de primeira e segunda geração, como vida, liberdade, igualdade, cidadania e educação, alinhando-se com documentos internacionais.

      O programa foi:
      • Revisado em 2002 (PNDH II) – Incluindo moradia, trabalho, alimentação, cultura e saúde.
      • Ampliado novamente em 2009 (PNDH III) – Avançando na concretização das leis de proteção aos direitos humanos.

      Para Dallari (2004), a Constituição brasileira é rigorosa e explícita em relação aos direitos humanos de primeira, segunda e terceira gerações, mas também é aberta a novas demandas sociais. Leis recentes exemplificam essa evolução:

      • Lei nº 12.965/2014 – Marco Civil da Internet, que trata da proteção de dados e liberdade online.
      • Lei nº 13.709/2018 – LGPD, que regulamenta o uso de dados pessoais.

      Essas leis refletem o esforço de adaptar os direitos humanos ao contexto tecnológico e digital contemporâneo, algo inexistente quando a Constituição foi promulgada.
    `,
    videoTitle: 'Direitos Humanos na História do Brasil',
    videoUrl: 'https://player-serverless.iesde.com.br/prod/player?path=ZGlyZWl0b3NfaHVtYW5vc19lX3JlbGFjb2VzX3NvY2lhaXMvZGlyZWl0b3NfaHVtYW5vc19lX3JlbGFjb2VzX3NvY2lhaXNfMDFfc2VjXzA1XzI2Njc0OC5tcDQ='
  }
};

const Secao = () => {
  const { secaoId } = useParams();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState<number>(1);

  useEffect(() => {
    if (secaoId) {
      setCurrentSection(parseInt(secaoId));
    }
  }, [secaoId]);

  const section = sectionData[currentSection as keyof typeof sectionData];
  
  const goToSection = (sectionNumber: number) => {
    navigate(`/capitulo/1/secao/${sectionNumber}`);
  };

  const goToPrevious = () => {
    if (currentSection > 1) {
      goToSection(currentSection - 1);
    } else {
      navigate('/capitulo/1');
    }
  };

  const goToNext = () => {
    if (currentSection < 5) {
      goToSection(currentSection + 1);
    }
  };

  if (!section) {
    return <div>Seção não encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/capitulo/1')}
          className="text-white hover:bg-slate-800"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-white text-lg font-semibold">Seção 1.{currentSection}</h1>
        <div className="w-10"></div>
      </header>

      {/* Content */}
      <div className="p-6 max-w-4xl mx-auto space-y-8">
        {/* Video Section */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden mb-4">
              {section.videoUrl ? (
                <iframe
                  src={section.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title={section.videoTitle}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 w-16 h-16 rounded-full">
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
              )}
            </div>
            <h2 className="text-white text-xl font-bold mb-2">{section.videoTitle}</h2>
            <p className="text-gray-400 text-sm">Videoaula sobre {section.title.toLowerCase()}</p>
          </CardContent>
        </Card>

        {/* Section Title */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <h2 className="text-white text-2xl font-bold mb-4">
              1.{currentSection} {section.title}
            </h2>
          </CardContent>
        </Card>

        {/* Text Content */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="text-gray-300 space-y-4 leading-relaxed">
              {section.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={goToPrevious}
            className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {currentSection > 1 ? `Anterior: 1.${currentSection - 1}` : 'Voltar ao Capítulo'}
          </Button>
          {currentSection < 5 && (
            <Button
              onClick={goToNext}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Próximo: 1.{currentSection + 1}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>

      {/* FAB Menu */}
      <FABMenu 
        context={`secao-1-${currentSection}`} 
        chapterTitle={`1.${currentSection} ${section.title}`} 
      />
    </div>
  );
};

export default Secao;
