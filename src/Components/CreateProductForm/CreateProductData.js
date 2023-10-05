import * as Yup from 'yup';

export const createProductInitialValue = [
  {
    title: 'Name',
    name: 'name',
    type: 'text',
  },
  {
    title: 'Count',
    name: 'count',
    type: 'number',
  },
  {
    title: 'Weight',
    name: 'weight',
    type: 'number',
  },
  {
    title: 'Width',
    name: 'width',
    type: 'number',
  },
  {
    title: 'Height',
    name: 'height',
    type: 'number',
  },
];

export const ValidateSchema = Yup.object().shape({
  count: Yup.number()
    .typeError('Must be a number')
    .required('Field is required')
    .positive('Must be a positive number')
    .integer('Must be an integer')
    .min(0, 'Value must be greater than or equal to 0')
    .max(100, 'Value must be less than or equal to 100'),
  weight: Yup.number()
    .typeError('Must be a number')
    .required('Field is required')
    .positive('Must be a positive number')
    .integer('Must be an integer')
    .min(0, 'Value must be greater than or equal to 0')
    .max(100, 'Value must be less than or equal to 100'),
  width: Yup.number()
    .typeError('Must be a number')
    .required('Field is required')
    .positive('Must be a positive number')
    .integer('Must be an integer')
    .min(0, 'Value must be greater than or equal to 0')
    .max(100, 'Value must be less than or equal to 100'),
  height: Yup.number()
    .typeError('Must be a number')
    .required('Field is required')
    .positive('Must be a positive number')
    .integer('Must be an integer')
    .min(0, 'Value must be greater than or equal to 0')
    .max(100, 'Value must be less than or equal to 100'),
  name: Yup.string().required('Field is required'),
});
