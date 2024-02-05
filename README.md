# Currency Converter

A simple currency converter built using React, Vite, Tailwind CSS, and a custom hook for fetching currency information from the [Currency API](https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json).
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
## Features

- Convert between different currencies
- Swap between the source and target currencies
- Choose from a variety of currencies using a dropdown
- Fetches the latest currency exchange rates from [Currency API](https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json)

## Technologies Used

- React + Vite
- Tailwind CSS
- Currency API

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/vikas1899/CurrencyConverter.git
    cd CurrencyConverter
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    npm run dev
    ```

4. **Open your browser and visit [http://localhost:5173/](http://localhost:5173) to view the app.**

## Parameters
currency (string): The currency code for which information is fetched.

## Return Value
An object containing the fetched currency information.

## Notes
This hook fetches data from the Currency API.
If an error occurs during the fetch operation, the returned data will be an empty object.
Please replace `${currency}` with the actual currency code you want to use in your API URL

## Acknowledgements
Currency data provided by [Currency API](https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json)





