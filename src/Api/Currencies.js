const endPoint = 'https://economia.awesomeapi.com.br/json/all';

const requestCurrencies = async () => {
  const request = await fetch(endPoint);
  const response = request.json();
  return response;
};

export default requestCurrencies;
