const adviceNumber = document.getElementById('advice-number');
const adviceBody = document.getElementById('advice-body');
const randomAdvice = document.getElementById('random-advice');

const getAdvice = async () => {
  try {
    const { slip } = await fetch('https://api.adviceslip.com/advice').then(
      (response) => {
        if (!response.ok)
          throw new Error('An Error has occurred: ' + response.status);

        return response.json();
      }
    );

    adviceNumber.innerText = 'Advice #' + slip.id;
    adviceBody.innerText = `“${slip.advice}”`;
  } catch (err) {
    console.log(err);
  }
};

getAdvice();

randomAdvice.addEventListener('click', getAdvice);
