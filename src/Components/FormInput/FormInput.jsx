import {
  UserInputWrapper,
  UserInputTitle,
  UserInput,
  ErrorMsg,
} from './FormInput.styled';

export const Input = ({ errors, title, name, type }) => {
  return (
    <>
      <UserInputTitle>{title}</UserInputTitle>
      <UserInputWrapper>
        <UserInput
          name={name}
          type={type}
          placeholder={name}
          onBlur={(e) => {
            //   let formattedValue = formatNumber(e.target.value);
            //   setValue(formattedValue);
          }}
          errors={errors[name]}
        />
        {errors[name] && <ErrorMsg>{errors[name]}</ErrorMsg>}
      </UserInputWrapper>
    </>
  );
};
