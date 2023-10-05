import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/Products/ProductsOperation';
import { Formik, Form } from 'formik';

import { Button } from '../ConfirmationButton/ConfirmationButton';

import { ValidateSchema, createProductInitialValue } from './CreateProductData';

import {
  UserInputBtn,
  InputItem,
  UploadFile,
} from './CreatePfoductForm.styled';
import { ButtonWrapper } from '../ConfirmDeletProduct/ConfirmDeleteProduct.styled';
import { Input } from '../FormInput/FormInput';

export const CreateProductFrom = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { validateForm }) => {
    const validationErrors = await validateForm(values);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(createProduct({ ...values }));
      closeModal();
    } else {
      console.log('Форма содержит ошибки', validationErrors);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        count: '',
        weight: '',
        width: '',
        height: '',
      }}
      validationSchema={ValidateSchema}
      validateOnChange={false}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, resetForm }) => (
        <Form>
          <ul>
            {createProductInitialValue.map(({ title, name, type }) => (
              <InputItem key={name}>
                <Input errors={errors} title={title} name={name} type={type} />
              </InputItem>
            ))}
          </ul>
          <UploadFile
            type="file"
            id="fileInput"
            name="fileInput"
            onChange={(event) => {
              //   const file = event.currentTarget.files[0];
              //   setFieldValue('fileInput', file);
            }}
          />
          <ButtonWrapper>
            <UserInputBtn type="submit">Submit</UserInputBtn>
            <Button type={'button'} text={'Cancel'} handleClick={closeModal} />
          </ButtonWrapper>
        </Form>
      )}
    </Formik>
  );
};
