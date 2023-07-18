import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const HourlyForecastFlatList = ({ hourlyWeatherData }) => {
	const {
		weather,
		name,
		dt_txt,
		main: { temp, temp_max, temp_min, humidity },
	} = hourlyWeatherData;
	const [{ main, icon }] = weather;
	const renderForecastItem = ({ item }) => {
		const {
			dt_txt,
			main: { temp, humidity },
		} = item;
		return (
			<View style={styles.forecastItem}>
				<Text style={styles.forecastText}>{dt_txt}</Text>
				<Text style={styles.forecastText}>Temp: {temp}</Text>
				<Text style={styles.forecastText}>Humidity: {humidity}</Text>
			</View>
		);
	};
	return (
		<View>
			<FlatList
				data={hourlyWeatherData.list}
				keyExtractor={(item) => item.dt_txt}
				renderItem={renderForecastItem}
				horizontal
				style={styles.forecastContainer}
			/>
		</View>
	);
};

export default HourlyForecastFlatList;

const styles = StyleSheet.create({
	forecastContainer: {
		marginTop: 20,
		marginBottom: 20,
	},
	forecastItem: {
		backgroundColor: "rgba(0,0,0,0.5)",
		padding: 10,
		marginHorizontal: 5,
		borderRadius: 10,
		width: Dimensions.get("screen").width / 2.5,
	},
	forecastText: {
		color: "white",
		fontSize: 16,
		textAlign: "center",
	},
});
