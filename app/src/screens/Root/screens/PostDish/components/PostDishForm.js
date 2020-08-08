import styled from "@emotion/native";
import React, { useState } from "react";
import ImagePicker from "react-native-image-picker";

export default function PostDishForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => console.log("Submit!");

  const handleChoosePicturePress = () => {
    ImagePicker.showImagePicker(
      {
        title: "Select pictures",
      },
      console.log
    );
  };

  return (
    <ScrollContainer>
      <Container>
        <PicturesContainer>
          <PicturesLabel>Pictures</PicturesLabel>
          <ChoosePictureButton onPress={handleChoosePicturePress}>
            <ChoosePictureButtonText>Choose Picture</ChoosePictureButtonText>
          </ChoosePictureButton>
        </PicturesContainer>
        <NameContainer>
          <NameLabel>Name</NameLabel>
          <NameTextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
        </NameContainer>
        <DescriptionContainer>
          <DescriptionLabel>Description</DescriptionLabel>
          <DescriptionTextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
        </DescriptionContainer>
        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Post it!</SubmitButtonText>
        </SubmitButton>
      </Container>
    </ScrollContainer>
  );
}

const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

const Container = styled.View`
  flex-direction: column;
  align-items: stretch;
  padding: 12px;
`;

const NameContainer = styled.View`
  margin-top: 12px;
`;

const DescriptionContainer = styled.View`
  margin-top: 12px;
`;

const PicturesContainer = styled.View`
  margin-top: 12px;
`;

const Label = styled.Text``;

const NameLabel = styled(Label)``;

const DescriptionLabel = styled(Label)``;

const PicturesLabel = styled(Label)``;

const TextInput = styled.TextInput`
  border-radius: 4px;
  background-color: white;
  margin-top: 4px;
  padding: 12px;
`;

const NameTextInput = styled(TextInput)``;

const DescriptionTextInput = styled(TextInput)`
  height: 120px;
`;

DescriptionTextInput.defaultProps = {
  multiline: true,
  numberOfLines: 4,
};

const Button = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  background-color: lightgray;
  border-radius: 4px;
  padding: 12px;
`;

const ButtonText = styled.Text`
  text-align: center;
`;

const SubmitButton = styled(Button)`
  margin-top: 24px;
`;

const SubmitButtonText = styled(ButtonText)``;

const ChoosePictureButton = styled(Button)`
  margin-top: 4px;
  width: 96px;
  height: 96px;
`;

const ChoosePictureButtonText = styled(ButtonText)``;
