import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import { useSignUpMutation } from "../features/userAPI";
  import { useNavigation } from "@react-navigation/native";
  import React from "react";
  
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const SignUp = () => {
    const [name, setName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [photo, setPhoto] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigation = useNavigation();
    const [signUp] = useSignUpMutation();
    const sendSignUp = () => {
      signUp({
        name: name,
        lastName: lastName,
        photo: photo,
        country: country,
        mail: mail,
        password: password,
        from: "form",
        role: "user",
      })
        .then((response) => {
          if (response.data.success) {
            navigation.navigate("signin");
          } else {
            console.log(response.error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
      <View style={styles.container}>
        <View style={styles.containerForm}>
          <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Claudia"
            keyboardType="text"
            name="name"
          />
          <Text style={styles.text}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Hernandez"
            keyboardType="text"
            name="lastName"
          />
          <Text style={styles.text}>Photo</Text>
          <TextInput
            style={styles.input}
            value={photo}
            onChangeText={setPhoto}
            placeholder="http://direction-image.jpg"
            keyboardType="text"
            name="photo"
          />
          <Text style={styles.text}>Country</Text>
          <TextInput
            style={styles.input}
            value={country}
            onChangeText={setCountry}
            placeholder="Argentina"
            keyboardType="text"
            name="country"
          />
          <Text style={styles.text}>Mail</Text>
          <TextInput
            style={styles.input}
            value={mail}
            onChangeText={setMail}
            placeholder="mail@gmail.com"
            keyboardType="email-address"
            name="mail"
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholder="Password"
            keyboardType="text"
            name="password"
          />
          <TouchableOpacity onPress={sendSignUp}>
            <View style={styles.button}>
              <Text style={{ color: "#F9F8EB", fontSize: 20 }}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default SignUp;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      lexDirection: "row",
      justifyContent: "center",
      width: width,
      height: height,
      backgroundColor: "#fff",
      padding: 10,
    },
    containerForm: {
      width: "100%",
      backgroundColor: "#A7D7C5",
      padding: 30,
      shadowColor: "#595959",
      elevation: 13,
      borderRadius: 15,
    },
    text: {
      alignSelf: "flex-start",
      fontSize: 20,
      fontWeight: "500",
      paddingVertical: 10,
      color: "#77628c",
    },
    input: {
      fontSize: 18,
      width: "100%",
      padding: 10,
      borderRadius: 10,
      backgroundColor: "white",
      shadowColor: "#595959",
      elevation: 13,
    },
    button: {
      marginTop: 20,
      alignSelf: "center",
      backgroundColor: "#77628C",
      paddingHorizontal: 25,
      paddingVertical: 6,
      borderRadius: 7,
    },
    textFooter: {
      marginStart: 5,
      fontSize: 18,
      fontWeight: "bold",
      color: "#5c98ff",
    },
  });