export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "cdbf4f4089msh20ec02a3150b88ep10a97cjsn2fc33553a816",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
