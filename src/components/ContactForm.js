import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Text,
} from '@chakra-ui/react';
import * as Yup from 'yup';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);

    try {
      // Your HeroTofu POST endpoint
      const apiUrl = 'https://public.herotofu.com/v1/94592210-49e2-11ee-afc4-2f612dbc7441';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSuccess(true);
        setErrorMessage('');
      } else {
        setIsSuccess(false);
        setErrorMessage('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setIsSuccess(false);
      setErrorMessage('Failed to send message. Please try again later.');
      console.error('HeroTofu form submission error:', error);
    }

    setIsSubmitting(false);
    resetForm();
  };

  return (
    <Box mb={6} p={6} bg="white" borderRadius="md" boxShadow="md">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <VStack spacing={4}>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" {...field} />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="email">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" {...field} />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="message">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.message && form.touched.message}
                >
                  <FormLabel>Message</FormLabel>
                  <Textarea rows={4} {...field} />
                  <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button
              colorScheme="teal"
              type="submit"
              isDisabled={isSubmitting}
            >
              Send Message
            </Button>

            {isSuccess && (
              <Text color="green.500">Message Sent Successfully</Text>
            )}

            {errorMessage && (
              <Text color="red.500" fontSize="sm">
                {errorMessage}
              </Text>
            )}
          </VStack>
        </Form>
      </Formik>
    </Box>
  );
};

export default ContactForm;
