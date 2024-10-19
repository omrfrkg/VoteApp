import { View } from "react-native";
import React from "react";

//Firabase
import { auth } from "../../../../firabase";

//Vector Icons
import Ionicons from "@expo/vector-icons/Ionicons";

//Native Base
import { IconButton, Spinner } from "native-base";

//Apollo Client
import { useMutation } from "@apollo/client";
import { DELETE_QUESTION_MUTATION } from "../queries";

const DeleteButton = ({ id }) => {
  const [deleteQuestion, { loading }] = useMutation(DELETE_QUESTION_MUTATION, {
    variables: {
      id,
    },
  });

  const handleDelete = async () => {
    await deleteQuestion();
  };

  if (loading) {
    return <Spinner color={"indigo.500"} mr={5} />;
  }
  return (
    <View>
      <IconButton
        onPress={handleDelete}
        colorScheme="red"
        disabled={loading}
        _icon={{ as: Ionicons, name: "trash-outline" }}
      />
    </View>
  );
};

export default DeleteButton;
