import styled from "@emotion/native";
import React, { useState } from "react";

export default function PostDishForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => console.log("Submit!");

  return (
    <ScrollContainer>
      <Container>
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

const Label = styled.Text``;

const NameLabel = styled(Label)``;

const DescriptionLabel = styled(Label)``;

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

const SubmitButton = styled.TouchableOpacity`
  margin-top: 24px;
`;

const SubmitButtonText = styled.Text`
  border-radius: 4px;
  background-color: lightgray;
  text-align: center;
  padding: 12px;
`;
