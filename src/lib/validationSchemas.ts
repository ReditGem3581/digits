import * as Yup from 'yup';

// Contact validation schema / type
export type Contact = {
  id?: number;
  firstName: string;
  lastName: string;
  address: string;
  image: string;
  description: string;
  owner: string;
};

export const ContactSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  address: Yup.string().required(),
  image: Yup.string().url().required(),
  description: Yup.string().required(),
  owner: Yup.string().required(),
});
