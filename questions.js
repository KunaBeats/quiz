const questionArray = [
  {
    question: "Welches Land gewann die FIFA Fußball-Weltmeisterschaft 2018?",
    options: [
      { answer: "Brasilien", isCorrect: false },
      { answer: "Deutschland", isCorrect: false },
      { answer: "Frankreich", isCorrect: true },
      { answer: "Spanien", isCorrect: false },
    ],
  },
  {
    question:
      "Wer ist der Rekordtorschütze in der Geschichte der FIFA-Weltmeisterschaften?",
    options: [
      { answer: "Cristiano Ronaldo", isCorrect: false },
      { answer: "Miroslav Klose", isCorrect: true },
      { answer: "Pelé", isCorrect: false },
      { answer: "Lionel Messi", isCorrect: false },
    ],
  },
  {
    question: "Welcher Club gewann die UEFA Champions League im Jahr 2020?",
    options: [
      { answer: "FC Barcelona", isCorrect: false },
      { answer: "Bayern München", isCorrect: true },
      { answer: "Liverpool FC", isCorrect: false },
      { answer: "Real Madrid", isCorrect: false },
    ],
  },
  {
    question: "Wie viele Spieler sind auf dem Feld einer Fußballmannschaft?",
    options: [
      { answer: "11", isCorrect: true },
      { answer: "8", isCorrect: false },
      { answer: "9", isCorrect: false },
      { answer: "10", isCorrect: false },
    ],
  },
  {
    question: "Wer ist der amtierende Weltfußballer des Jahres (2021)?",
    options: [
      { answer: "Lionel Messi", isCorrect: false },
      { answer: "Cristiano Ronaldo", isCorrect: false },
      { answer: "Kylian Mbappe", isCorrect: false },
      { answer: "Robert Lewandowski", isCorrect: true },
    ],
  },
  {
    question: "Welches Land gewann die UEFA Europameisterschaft 2016?",
    options: [
      { answer: "Portugal", isCorrect: true },
      { answer: "Deutschland", isCorrect: false },
      { answer: "Spanien", isCorrect: false },
      { answer: "Frankreich", isCorrect: false },
    ],
  },

  {
    question: "Wer ist der Rekordspieler mit den meisten Länderspielen?",
    options: [
      { answer: "Andres Iniesta", isCorrect: false },
      { answer: "Toni Kroos", isCorrect: false },
      { answer: "Cristiano Ronaldo", isCorrect: true },
      { answer: "Sergio Ramos", isCorrect: false },
    ],
  },

  {
    question: "Welches Land gewann die Copa América 2021?",
    options: [
      { answer: "Brasilien", isCorrect: false },
      { answer: "Argentinien", isCorrect: true },
      { answer: "Uruguay", isCorrect: false },
      { answer: "Kolumbien", isCorrect: false },
    ],
  },

  {
    question: "Welches Land hat die meisten FIFA-Weltmeisterschaften gewonnen?",
    options: [
      { answer: "Deutschland", isCorrect: false },
      { answer: "Italien", isCorrect: false },
      { answer: "Argentinien", isCorrect: false },
      { answer: "Brasilien", isCorrect: true },
    ],
  },

  {
    question:
      "Welcher Spieler hält den Rekord für die meisten Tore in einer Bundesliga-Saison?",
    options: [
      { answer: "Robert Lewandowski", isCorrect: true },
      { answer: "Pierre-E. Aubameyang", isCorrect: false },
      { answer: "Gerd Müller", isCorrect: false },
      { answer: "Mario Gomez", isCorrect: false },
    ],
  },
  {
    question:
      "Wer ist der jüngste Torschütze in der Geschichte der FIFA-Weltmeisterschaften?",
    options: [
      { answer: "Kylian Mbappe", isCorrect: false },
      { answer: "Lionel Messi", isCorrect: false },
      { answer: "Pelé", isCorrect: true },
      { answer: "Thomas Müller", isCorrect: false },
    ],
  },
  {
    question:
      "Welcher Club hält den Rekord für die meisten gewonnenen UEFA Champions League Titel?",
    options: [
      { answer: "Real Madrid", isCorrect: true },
      { answer: "AC Mailand", isCorrect: false },
      { answer: "Manchester United", isCorrect: false },
      { answer: "Bayern München", isCorrect: false },
    ],
  },
  {
    question:
      "Welcher Spieler hat die meisten Ballon d'Or Auszeichnungen gewonnen?",
    options: [
      { answer: "Cristiano Ronaldo", isCorrect: false },
      { answer: "Maradona", isCorrect: false },
      { answer: "Zinedine Zidane", isCorrect: false },
      { answer: "Lionel Messi", isCorrect: true },
    ],
  },
  {
    question: "Wie viele Minuten dauert eine reguläre Fußballhalbzeit?",
    options: [
      { answer: "30 Minuten", isCorrect: false },
      { answer: "45 Minuten", isCorrect: true },
      { answer: "35 Minuten", isCorrect: false },
      { answer: "40 Minuten", isCorrect: false },
    ],
  },
  {
    question:
      "Wer ist der erfolgreichste Torschütze in der Geschichte der UEFA Champions League?",
    options: [
      { answer: "Karim Benzema", isCorrect: false },
      { answer: "Lionel Messi", isCorrect: false },
      { answer: "Cristiano Ronaldo", isCorrect: true },
      { answer: "Raùl", isCorrect: false },
    ],
  },
  {
    question: "Wer ist der Trainer mit den meisten Bundesliga-Meisterschaften?",
    options: [
      { answer: "Jupp Heynckes", isCorrect: true },
      { answer: "Pep Guardiola", isCorrect: false },
      { answer: "Jürgen Klopp", isCorrect: false },
      { answer: "Felix Magath", isCorrect: false },
    ],
  },
  {
    question:
      "Welches Stadion hat die größte Zuschauerkapazität in der Bundesliga?",
    options: [
      { answer: "Signal Iduna Park", isCorrect: true },
      { answer: "Allianz Arena", isCorrect: false },
      { answer: "Olympiastadion Berlin", isCorrect: false },
      { answer: "Veltins-Arena", isCorrect: false },
    ],
  },
  {
    question:
      "Wer ist der jüngste Torschütze in der Geschichte der Bundesliga?",
    options: [
      { answer: "Nuri Şahin", isCorrect: false },
      { answer: "Lukas Podolski", isCorrect: false },
      { answer: "Timo Werner", isCorrect: false },
      { answer: "Youssoufa Moukoko", isCorrect: true },
    ],
  },
  {
    question:
      "Welcher Spieler hält den Rekord für die meisten Spiele in der Bundesliga?",
    options: [
      { answer: "Karl-Heinz Körbel", isCorrect: true },
      { answer: "Oliver Kahn", isCorrect: false },
      { answer: "Lothar Matthäus", isCorrect: false },
      { answer: "Franz Beckenbauer", isCorrect: false },
    ],
  },
  {
    question: "Wer ist der jüngste Bundesliga-Trainer aller Zeiten?",
    options: [
      { answer: "Julian Nagelsmann", isCorrect: true },
      { answer: "Florian Kohfeldt", isCorrect: false },
      { answer: "Domenico Tedesco", isCorrect: false },
      { answer: "David Wagner", isCorrect: false },
    ],
  },
  {
    question:
      "Wer ist der Rekordtorschütze für den FC Barcelona in der UEFA Champions League?",
    options: [
      { answer: "Samuel Eto'o", isCorrect: false },
      { answer: "Lionel Messi", isCorrect: true },
      { answer: "Neymar", isCorrect: false },
      { answer: "Rivaldo", isCorrect: false },
    ],
  },
  {
    question:
      "Welches Land hat die meisten Finalteilnahmen bei FIFA-Weltmeisterschaften?",
    options: [
      { answer: "Brasilien", isCorrect: true },
      { answer: "Deutschland", isCorrect: false },
      { answer: "Argentinien", isCorrect: false },
      { answer: "Italien", isCorrect: false },
    ],
  },
  {
    question:
      "Welcher Spieler hat die meisten Tore in einer einzelnen FIFA-Weltmeisterschaft erzielt?",
    options: [
      { answer: "Just Fontaine", isCorrect: true },
      { answer: "Miroslav Klose", isCorrect: false },
      { answer: "Pelé", isCorrect: false },
      { answer: "Gerd Müller", isCorrect: false },
    ],
  },
  {
    question:
      "Welcher Spieler wurde zum besten jungen Spieler der FIFA-Weltmeisterschaft 2018 ernannt?",
    options: [
      { answer: "Luka Modrić", isCorrect: false },
      { answer: "Cristiano Ronaldo", isCorrect: false },
      { answer: "Kylian Mbappé", isCorrect: true },
      { answer: "Antoine Griezmann", isCorrect: false },
    ],
  },
  {
    question:
      "Welcher Spieler wurde zum besten Spieler der FIFA-Weltmeisterschaft 2018 ernannt?",
    options: [
      { answer: "Luka Modrić", isCorrect: true },
      { answer: "Cristiano Ronaldo", isCorrect: false },
      { answer: "Kylian Mbappé", isCorrect: false },
      { answer: "Antoine Griezmann", isCorrect: false },
    ],
  },
  {
    question: "Welcher Club gewann die Serie A in der Saison 2020/2021?",
    options: [
      { answer: "Juventus Turin", isCorrect: false },
      { answer: "Inter Mailand", isCorrect: true },
      { answer: "AC Mailand", isCorrect: false },
      { answer: "AS Rom", isCorrect: false },
    ],
  },

  {
    question:
      "Welcher spanische Verein hat die meisten La Liga-Titel gewonnen?",
    options: [
      { answer: "FC Barcelona", isCorrect: false },
      { answer: "Atletico Madrid", isCorrect: false },
      { answer: "FC Valencia", isCorrect: false },
      { answer: "Real Madrid", isCorrect: true },
    ],
  },

  {
    question:
      "Welcher Verein wurde in der Saison 2020/2021 Premier League-Meister?",
    options: [
      { answer: "Manchester United", isCorrect: false },
      { answer: "Manchester City", isCorrect: true },
      { answer: "FC Liverpool", isCorrect: false },
      { answer: "Chelsea FC", isCorrect: false },
    ],
  },

  {
    question:
      "Welcher französische Verein hat die meisten Ligue 1-Titel gewonnen?",
    options: [
      { answer: "AS Monaco", isCorrect: false },
      { answer: "Olympique Marseille", isCorrect: false },
      { answer: "Girondins Bordeaux", isCorrect: false },
      { answer: "Paris Saint-Germain", isCorrect: true },
    ],
  },

  {
    question:
      "Welcher Verein gewann die UEFA Europa League in der Saison 2020/2021?",
    options: [
      { answer: "FC Villarreal", isCorrect: true },
      { answer: "FC Arsenal", isCorrect: false },
      { answer: "AS Rom", isCorrect: false },
      { answer: "Tottenham Hotspur", isCorrect: false },
    ],
  },
  {
    question:
      "Welcher spanische Club hat die meisten UEFA Europa League-Titel gewonnen?",
    options: [
      { answer: "FC Sevilla", isCorrect: true },
      { answer: "Atletico Madrid", isCorrect: false },
      { answer: "FC Barcelona", isCorrect: false },
      { answer: "Real Madrid", isCorrect: false },
    ],
  },
  {
    question:
      "Welcher Spieler hält den Rekord für die meisten Tore in La Liga?",
    options: [
      { answer: "Cristiano Ronaldo", isCorrect: false },
      { answer: "Lionel Messi", isCorrect: true },
      { answer: "Telmo Zarra", isCorrect: false },
      { answer: "Hugo Sanchez", isCorrect: false },
    ],
  },
  {
    question: "Welcher Club gewann die Serie A in der Saison 2019/2020?",
    options: [
      { answer: "Juventus Turin", isCorrect: true },
      { answer: "Inter Mailand", isCorrect: false },
      { answer: "AS Rom", isCorrect: false },
      { answer: "AC Mailand", isCorrect: false },
    ],
  },

  {
    question:
      "Welcher spanische Verein gewann die La Liga in der Saison 2019/2020?",
    options: [
      { answer: "FC Barcelona", isCorrect: false },
      { answer: "Real Madrid", isCorrect: true },
      { answer: "Atletico Madrid", isCorrect: false },
      { answer: "FC Sevilla", isCorrect: false },
    ],
  },

  {
    question: "Welcher Club gewann die Premier League in der Saison 2019/2020?",
    options: [
      { answer: "Manchester United", isCorrect: false },
      { answer: "Manchester City", isCorrect: false },
      { answer: "FC Liverpool", isCorrect: true },
      { answer: "Chelsea FC", isCorrect: false },
    ],
  },

  {
    question:
      "Welcher Verein wurde in der Saison 2019/2020 Bundesliga-Meister?",
    options: [
      { answer: "Borussia Dortmund", isCorrect: false },
      { answer: "RB Leipzig", isCorrect: false },
      { answer: "Bayern München", isCorrect: true },
      { answer: "Borussia Mönchengladbach", isCorrect: false },
    ],
  },

  {
    question:
      "Welcher französische Verein gewann die Ligue 1 in der Saison 2019/2020?",
    options: [
      { answer: "AS Monaco", isCorrect: false },
      { answer: "Paris Saint-Germain", isCorrect: true },
      { answer: "Olympique Marseille", isCorrect: false },
      { answer: "Lille OSC", isCorrect: false },
    ],
  },

  {
    question:
      "Welcher Verein gewann die UEFA Europa League in der Saison 2019/2020?",
    options: [
      { answer: "Inter Mailand", isCorrect: false },
      { answer: "Manchester United", isCorrect: false },
      { answer: "AS Rom", isCorrect: false },
      { answer: "FC Sevilla", isCorrect: true },
    ],
  },
  {
    question: "Welche Nationalmannschaft gewann die UEFA Euro 2020?",
    options: [
      { answer: "Frankreich", isCorrect: false },
      { answer: "England", isCorrect: false },
      { answer: "Italien", isCorrect: true },
      { answer: "Spanien", isCorrect: false },
    ],
  },
  {
    question:
      "Welcher Spieler erzielte die meisten Tore in einer einzelnen Premier League-Saison?",
    options: [
      { answer: "Thierry Henry", isCorrect: false },
      { answer: "Alan Shearer", isCorrect: false },
      { answer: "Harry Kane", isCorrect: false },
      { answer: "Erling Haaland", isCorrect: true },
    ],
  },

  {
    question: "Welche Mannschaft gewann die FIFA-Weltmeisterschaft 2014?",
    options: [
      { answer: "Argentinien", isCorrect: false },
      { answer: "Brasilien", isCorrect: false },
      { answer: "Deutschland", isCorrect: true },
      { answer: "Spanien", isCorrect: false },
    ],
  },
  {
    question: "Welcher Verein gewann die Serie A in der Saison 2018/2019?",
    options: [
      { answer: "Juventus Turin", isCorrect: true },
      { answer: "Inter Mailand", isCorrect: false },
      { answer: "AC Mailand", isCorrect: false },
      { answer: "AS Rom", isCorrect: false },
    ],
  },

  {
    question:
      "Welcher spanische Verein gewann die La Liga in der Saison 2018/2019?",
    options: [
      { answer: "FC Barcelona", isCorrect: true },
      { answer: "Real Madrid", isCorrect: false },
      { answer: "Atletico Madrid", isCorrect: false },
      { answer: "FC Sevilla", isCorrect: false },
    ],
  },

  {
    question: "Welcher Club gewann die Premier League in der Saison 2018/2019?",
    options: [
      { answer: "Manchester United", isCorrect: false },
      { answer: "Manchester City", isCorrect: true },
      { answer: "FC Liverpool", isCorrect: false },
      { answer: "Chelsea FC", isCorrect: false },
    ],
  },

  {
    question:
      "Welcher Verein wurde in der Saison 2018/2019 Bundesliga-Meister?",
    options: [
      { answer: "Borussia Dortmund", isCorrect: false },
      { answer: "Bayern München", isCorrect: true },
      { answer: "RB Leipzig", isCorrect: false },
      { answer: "Bayer Leverkusen", isCorrect: false },
    ],
  },

  {
    question:
      "Welcher französische Verein gewann die Ligue 1 in der Saison 2018/2019?",
    options: [
      { answer: "AS Monaco", isCorrect: false },
      { answer: "Olympique Lyon", isCorrect: false },
      { answer: "Paris Saint-Germain", isCorrect: true },
      { answer: "Olympique Marseille", isCorrect: false },
    ],
  },

  {
    question:
      "Welcher Verein gewann die UEFA Europa League in der Saison 2018/2019?",
    options: [
      { answer: "FC Arsenal", isCorrect: false },
      { answer: "Eintracht Frankfurt", isCorrect: false },
      { answer: "FC Chelsea", isCorrect: true },
      { answer: "FC Sevilla", isCorrect: false },
    ],
  },

  {
    question:
      "Welcher Club gewann die UEFA Champions League in der Saison 2018/2019?",
    options: [
      { answer: "FC Barcelona", isCorrect: false },
      { answer: "Bayern München", isCorrect: false },
      { answer: "Real Madrid", isCorrect: false },
      { answer: "Liverpool FC", isCorrect: true },
    ],
  },
  {
    question:
      "Welcher französische Verein gewann die Ligue 1 in der Saison 2017/2018?",
    options: [
      { answer: "Paris Saint-Germain", isCorrect: false },
      { answer: "Olympique Marseille", isCorrect: false },
      { answer: "Lyon", isCorrect: false },
      { answer: "AS Monaco", isCorrect: true },
    ],
  },
  {
    question:
      "Welcher Verein wurde in der Saison 2010/2011 Bundesliga-Meister?",
    options: [
      { answer: "Bayern München", isCorrect: false },
      { answer: "RB Leipzig", isCorrect: false },
      { answer: "Borussia Dortmund", isCorrect: true },
      { answer: "Bayer Leverkusen", isCorrect: false },
    ],
  },
];

export default questionArray;
