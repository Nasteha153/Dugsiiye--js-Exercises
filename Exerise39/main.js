//  languages
async function getLanguages() {
  const url = 'https://microsoft-translator-text-api3.p.rapidapi.com/languages';
  const options = {
    method: 'GET',
    headers: {
     'x-rapidapi-key': 'e2e72c373dmshcfa10e4f3337f69p1c26c3jsn13eeb48ed938',
		'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const fromSelect = document.getElementById("From-language");
    const toSelect = document.getElementById("To-language");

    const languages = result.translation;

    for (let code in languages) {
      const option1 = document.createElement("option");
      option1.value = code;
      option1.textContent = languages[code].name;

      const option2 = option1.cloneNode(true);

      fromSelect.appendChild(option1);
      toSelect.appendChild(option2);
    }


  } catch (error) {
    console.error("Error fetching languages:", error);
  }
}

getLanguages();

//  Translate text using selected languages
async function translateText() {
  const text = document.getElementById("inputText").value;
  const from = document.getElementById("From-language").value;
  const to = document.getElementById("To-language").value;
  const url = `https://microsoft-translator-text-api3.p.rapidapi.com/translate?from=${from}&to=${to}&text=${encodeURIComponent(text)}`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'e2e72c373dmshcfa10e4f3337f69p1c26c3jsn13eeb48ed938',
		'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
		'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    document.getElementById("output").innerText =
      result[0].translations[0].text;

  } catch (error) {
    console.error("Translation error:", error);
  }
}

