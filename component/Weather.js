// import React, { useState, useEffect } from "react";
// import {
// 	View,
// 	Text,
// 	StyleSheet,
// 	ImageBackground,
// 	StatusBar,
// 	Dimensions,
// } from "react-native";
// import SearchBar from "./SearchBar";
// import { haze, rainy, sunny, snow } from "../assets/backgroundimg/index";

// export default function Weather({ weatherData, fetchWeather }) {
// 	const [backgroundImg, setBackgroundImg] = useState(null);
// 	const {
// 		weather,
// 		name,
// 		main: { temp, humidity },
// 		wind: { speed },
// 	} = weatherData;
// 	const [{ main }] = weather;

// 	useEffect(() => {
// 		console.log(main);
// 		setBackgroundImg(getBackgroundImg(main));
// 	}, [weatherData]);

// 	function getBackgroundImg(weather) {
// 		if (weather === "Snow") return snow;
// 		if (weather === "Haze") return haze;
// 		if (weather === "Rain") return rainy;
// 		if (weather === "clear") return sunny;
// 		return haze;
// 	}

// 	let textColor =
// 		backgroundImg !== rainy && backgroundImg !== sunny ? "black" : "white";

// 	return (
// 		<View style={styles.container}>
// 			<ImageBackground
// 				source={backgroundImg}
// 				resizeMode="cover"
// 				style={styles.backgroundImg}
// 			>
// 				<SearchBar fetchWeather={fetchWeather} />
// 				<View
// 					style={{
// 						alignItems: "center",
// 					}}
// 				>
// 					<Text
// 						style={{
// 							...styles.headerText,
// 							color: textColor,
// 							fontWeight: "bold",
// 						}}
// 					>
// 						{name}
// 					</Text>
// 					<Text
// 						style={{
// 							...styles.headerText,
// 							color: textColor,
// 							fontSize: 30,
// 						}}
// 					>
// 						{main}
// 					</Text>
// 					<Text
// 						style={{
// 							...styles.headerText,
// 							color: textColor,
// 							fontWeight: "bold",
// 						}}
// 					>
// 						{Number(temp - 273).toFixed(0)}°C
// 					</Text>
// 					<View style={{ ...styles.box }}>
// 						<View style={{ ...styles.info }}>
// 							<Text style={{ color: textColor, fontSize: 22 }}>Humidity</Text>
// 							<Text
// 								style={{
// 									color: textColor,
// 									fontSize: 22,
// 								}}
// 							>
// 								{humidity}%
// 							</Text>
// 						</View>
// 						<View style={{ ...styles.info }}>
// 							<Text style={{ color: textColor, fontSize: 22 }}>Wind Speed</Text>
// 							<Text
// 								style={{
// 									color: textColor,
// 									fontSize: 22,
// 								}}
// 							>
// 								{speed}m/s
// 							</Text>
// 						</View>
// 					</View>
// 				</View>
// 			</ImageBackground>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		justifyContent: "center",
// 		alignItems: "center",
// 	},
// 	backgroundImg: {
// 		flex: 1,
// 		width: Dimensions.get("screen").width,
// 	},
// 	headerText: {
// 		fontSize: 36,
// 		marginTop: 20,
// 		marginRight: 150,
// 	},
// 	info: {
// 		alignItems: "center",
// 		backgroundColor: "rgba(0,0,0,0.5)",
// 		margin: 33,
// 		borderRadius: 15,
// 		width: Dimensions.get("screen").width / 2.5,
// 		padding: 10,
// 	},
// 	box: {
// 		flexDirection: "row",
// 		justifyContent: "space-between",
// 		marginTop: 200,
// 	},
// });

import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	StatusBar,
	Dimensions,
	FlatList,
} from "react-native";
import SearchBar from "./SearchBar";
import { haze, rainy, sunny, snow } from "../assets/backgroundimg/index";
import HourlyForecastFlatList from "./HourlyForecastFlatList";

export default function Weather({
	weatherData,
	fetchWeather,
	fetchHourlyWeather,
	hourlyWeatherData,
}) {
	const [backgroundImg, setBackgroundImg] = useState(null);
	const {
		weather,
		name,
		main: { temp, humidity },
		wind: { speed },
	} = weatherData;
	const [{ main }] = weather;

	useEffect(() => {
		console.log(main);
		setBackgroundImg(getBackgroundImg(main));
	}, [weatherData]);

	function getBackgroundImg(weather) {
		if (weather === "Snow") return snow;
		if (weather === "Haze") return haze;
		if (weather === "Rain") return rainy;
		if (weather === "Clear") return sunny;
		return haze;
	}

	let textColor =
		backgroundImg !== rainy && backgroundImg !== sunny ? "black" : "white";

	return (
		<View style={styles.container}>
			<ImageBackground
				source={backgroundImg}
				resizeMode="cover"
				style={styles.backgroundImg}
			>
				<SearchBar
					fetchWeather={fetchWeather}
					fetchHourlyWeather={fetchHourlyWeather}
				/>
				<View style={{ alignItems: "center" }}>
					<Text
						style={{
							...styles.headerText,
							color: textColor,
							fontWeight: "bold",
						}}
					>
						{name}
					</Text>
					<Text
						style={{
							...styles.headerText,
							color: textColor,
							fontSize: 30,
						}}
					>
						{main}
					</Text>
					<Text
						style={{
							...styles.headerText,
							color: textColor,
							fontWeight: "bold",
						}}
					>
						{Number(temp - 273).toFixed(0)}°C
					</Text>
					<View style={{ ...styles.box }}>
						<View style={{ ...styles.info }}>
							<Text style={{ color: textColor, fontSize: 22 }}>Humidity</Text>
							<Text
								style={{
									color: textColor,
									fontSize: 22,
								}}
							>
								{humidity}%
							</Text>
						</View>
						<View style={{ ...styles.info }}>
							<Text style={{ color: textColor, fontSize: 22 }}>Wind Speed</Text>
							<Text
								style={{
									color: textColor,
									fontSize: 22,
								}}
							>
								{speed}m/s
							</Text>
						</View>
					</View>

					{/* <HourlyForecastFlatList hourlyWeatherData={hourlyWeatherData} /> */}
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
	backgroundImg: {
		flex: 1,
		width: Dimensions.get("screen").width,
	},
	headerText: {
		fontSize: 36,
		marginTop: 20,
		marginRight: 150,
	},
	info: {
		alignItems: "center",
		backgroundColor: "rgba(0,0,0,0.5)",
		margin: 33,
		borderRadius: 15,
		width: Dimensions.get("screen").width / 2.5,
		padding: 10,
	},
	box: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 200,
	},
});
