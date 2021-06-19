import styled from "@emotion/styled";
import { useRouter } from "next/router";

import loginAdmin from "~/fetchers/loginAdmin";
import useForm from "~/hooks/useForm";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (values) => {
    const { error } = await loginAdmin(values.username, values.password);
    if (error) {
      throw error;
    }
    router.push("/admin");
  };

  const { values, onChange, onSubmit, error } = useForm({
    values: {
      username: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <Container>
      <CenterContainer>
        <FormContainer onSubmit={onSubmit}>
          <Title>jenny.cooking</Title>
          <InputsContainer>
            <InputContainer>
              <Label>Username</Label>
              <UsernameInput
                value={values.username}
                onChange={onChange("username")}
              />
            </InputContainer>
            <InputContainer>
              <Label>Password</Label>
              <PasswordInput
                value={values.password}
                onChange={onChange("password")}
              />
            </InputContainer>
          </InputsContainer>
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
          <Button>Login</Button>
        </FormContainer>
      </CenterContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  max-width: 64ch;
  padding: 0 1.2rem;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 1.6rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 32ch;

  & > * + * {
    margin-top: 1.6rem;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 0.8rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 0.4rem;
  }
`;

const Label = styled.label``;

const UsernameInput = styled.input``;

UsernameInput.defaultProps = {
  placeholder: "Username",
};

const PasswordInput = styled.input``;

PasswordInput.defaultProps = {
  placeholder: "Password",
  type: "password",
};

const ErrorMessage = styled.div`
  color: red;
`;

const Button = styled.button``;
