const BASE_URL = 'https://app.exchangerate-api.com/v4/latest'

 export async function exchangeRateApi(fromCurrency) {

    try {
    const response= await fetch(`${BASE_URL}/${fromCurrency}`)
    const data = await response.json()
    return data
}
     catch (error) {
        console.log(error)
        throw error;
    }
}