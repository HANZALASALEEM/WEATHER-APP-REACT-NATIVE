import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import Weather from "./component/Weather";
import SearchBar from "./component/SearchBar";

const API_KEY = "c2eac64b960d26914db38182f0ce3598";

const YourApp = () => {
	const [weatherData, setWeatherData] = useState(null);
	const [loaded, setLoaded] = useState(true);

	async function fetchWeather(cityName) {
		setLoaded(false);
		const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=matric&appid=${API_KEY}`;
		try {
			const response = await fetch(API);
			if (response.status == 200) {
				const data = await response.json();
				setWeatherData(data);
			} else {
				setWeatherData(null);
			}
			setLoaded(true);
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		fetchWeather("gujranwala");
		console.log(weatherData);
	}, []);

	if (!loaded) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator color={"blue"} size={40} />
			</View>
		);
	} else if (weatherData === null) {
		return (
			<View>
				<SearchBar fetchWeather={fetchWeather} />
				<Text>City not Found</Text>
			</View>
		);
	}
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Weather weatherData={weatherData} fetchWeather={fetchWeather} />
		</View>
	);
};

export default YourApp;
