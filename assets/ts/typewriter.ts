function sleep (ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


const writeLoop = async () => {
  // Obtener el elemento ul/List
  const infoList: HTMLElement = document.getElementById("infoList");

  // Inicializar un array para almacenar las frases o elementos de información
  const phrases: string[] = [];
  if (infoList) {
    // Obtener todos los elementos <li> dentro del <ul>
    const liElements: NodeListOf<HTMLLIElement> = infoList.querySelectorAll('li');

    // Iterar sobre los elementos <li> para obtener su texto y agregarlo al array
    liElements.forEach(function (liElement: HTMLLIElement) {
      phrases.push(liElement.textContent.split('•')[1].trim());
    });

    const elementTypeWriter: HTMLElement = document.getElementById("typewriter");

    const sleepTime: number = 100;

    let currentPhraseIndex: number = 0;

    async function updateTextWriter (currentWord: string, index: number, speed: number) {
      elementTypeWriter.innerText = currentWord.substring(0, index);
      await sleep(speed);
    }

    while (true) {
      let currentWord: string = phrases[currentPhraseIndex];

      for (let i = 0;i < currentWord.length;i++) {
        const speed: number = sleepTime / 1.1;
        const index: number = i + 1;
        await updateTextWriter(currentWord, index, speed);
      }

      await sleep(sleepTime * 12); // Waiting stay after complete typewriter

      for (let i = currentWord.length;i > 0;i--) {
        const speed: number = sleepTime / 4;
        const index: number = i - 1;
        await updateTextWriter(currentWord, index, speed);
      }

      await sleep(sleepTime * 5);

      if (currentPhraseIndex === phrases.length - 1) {
        currentPhraseIndex = 0;
      } else {
        currentPhraseIndex++;
      }
    }
  }
};

writeLoop();