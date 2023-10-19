import { ChangeEvent, FormEvent, useState } from 'react';

import Button from '../Button/Button';

import './SubscribeForm.css';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

export interface FormData {
  firstName: string;
  birthday: Date | string;
  email: string;
}

export const SubscribeForm = ({ onSubmit }: FormProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    birthday: '',
    email: '',
  });

  const initialFormData: FormData = {
    firstName: '',
    birthday: '',
    email: '',
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.firstName || !formData.birthday || !formData.email) {
      alert('Please fill in all fields.');
      return;
    }

    setFormData(initialFormData);

    onSubmit(formData);
  };

  return (
    <form method="post" onSubmit={handleSubmit} className="subscribe-form">
      <label>
        First Name:{' '}
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Birthday:{' '}
        <input
          type="date"
          name="birthday"
          value={formData.birthday.toString().split('T')[0]}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:{' '}
        <input
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <Button type="submit" className="subscribe-form__button">
        Submit form
      </Button>
    </form>
  );
};
