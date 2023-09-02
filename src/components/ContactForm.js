import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  return (
    <Box mb={6} p={6} bg="white" borderRadius="md" boxShadow="md">
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          message: Yup.string().required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          // Handle form submission here (e.g., send data to backend)
          console.log(values);
          // Reset the form after submission
          resetForm();
        }}
      >
        <Form>
          <Field name="name">
            {({ field }) => (
              <FormControl id="name" isInvalid={field.value && field.value.length === 0}>
                <FormLabel>Name</FormLabel>
                <Input {...field} />
                <ErrorMessage style={{ color: 'red' }} name="name" component="div" color="red.500" />
              </FormControl>
            )}
          </Field>

          <Field name="email">
            {({ field }) => (
              <FormControl id="email" isInvalid={field.value && !/^\S+@\S+\.\S+$/.test(field.value)}>
                <FormLabel>Email</FormLabel>
                <Input {...field} />
                <ErrorMessage style={{ color: 'red' }} name="email" component="div" color="red.500" />
              </FormControl>
            )}
          </Field>

          <Field name="message">
            {({ field }) => (
              <FormControl id="message" isInvalid={field.value && field.value.length === 0}>
                <FormLabel>Message</FormLabel>
                <Textarea {...field} />
                <ErrorMessage style={{ color: 'red' }} name="message" component="div" color="red.500" />
              </FormControl>
            )}
          </Field>

          <Button type="submit" colorScheme="teal" mt={4}>
            Send Message
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default ContactForm;
