import {
  Container,
  Flex,
  Box,
  Heading,
  Link,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  Textarea
} from '@chakra-ui/core';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required')
});

const Contact = () => {
  return (
    <>
      <Container maxW="xl">
        <Flex direction="row" py={24}>
          <Heading width={{ base: 'full', md: '4/5' }} size="lg" fontWeight="light">
            Contact page
          </Heading>
        </Flex>
      </Container>
      <Container maxW="xl">
        <FormContact />
      </Container>
    </>
  );
};

const FormContact = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 2000);
      }}
    >
      {(props) => (
        <Form>
          <Field name="name">
            {({ field, form }) => (
              <FormControl mt="3" isInvalid={form.errors.name && form.touched.name}>
                <Input
                  {...field}
                  id="name"
                  placeholder="Your Name"
                  borderRadius="0"
                  variant="flushed"
                  focusBorderColor="palletGoldHard"
                />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field type="email" name="email">
            {({ field, form }) => (
              <FormControl mt="3" isInvalid={form.errors.email && form.touched.email}>
                <Input
                  {...field}
                  id="email"
                  placeholder="Email"
                  borderRadius="0"
                  variant="flushed"
                  focusBorderColor="palletGoldHard"
                />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="message">
            {({ field, form }) => (
              <FormControl mt="3" isInvalid={form.errors.message && form.touched.message}>
                <Textarea
                  {...field}
                  id="textarea"
                  placeholder="Message"
                  borderRadius="0"
                  variant="flushed"
                  focusBorderColor="palletGoldHard"
                />
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            borderRadius="0"
            mt={4}
            bg="palletBlue"
            color="white"
            _hover={{ color: 'palletBlue', bg: 'palletGoldSoft' }}
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Contact;
