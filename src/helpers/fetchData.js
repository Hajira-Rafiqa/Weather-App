const fetchData = async (location, days) => {
    try {
        const REACT_APP_API_KEY="2c87a36396404f52bc4162107221101";
        console.log(REACT_APP_API_KEY);
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${REACT_APP_API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`);
        const data = await response.json();
        //console.log(response)
        return data;
    } catch (e) {
        console.error(e);
    }
};

export default fetchData;