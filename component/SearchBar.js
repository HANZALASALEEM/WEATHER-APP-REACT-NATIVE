import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
export default function SearchBar({ fetchWeather, fetchHourlyWeather }) {
	const [cityName, setCityName] = useState("");

	return (
		<View style={styles.searchBar}>
			<TextInput
				placeholder="Enter City Name"
				value={cityName}
				onChangeText={(text) => setCityName(text)}
				color="white"
			></TextInput>
			<EvilIcons
				name="search"
				size={24}
				color="white"
				onPress={() => {
					fetchWeather(cityName);
					fetchHourlyWeather(cityName);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	searchBar: {
		marginTop: 40,
		flexDirection: "row",
		justifyContent: "space-between",
		width: Dimensions.get("screen").width - 20,
		borderWidth: 1.5,
		borderRadius: 20,
		paddingVertical: 10,
		marginHorizontal: 10,
		backgroundColor: "rgba(0,0,0,0.5)",
		paddingHorizontal: 10,
	},
});
