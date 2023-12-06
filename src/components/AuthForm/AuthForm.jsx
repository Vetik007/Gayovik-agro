import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import sprite from '../../assets/sprite.svg';
import ButtonInput from '../ButtonInput/ButtonInput';

import {
  StyledField,
  StyledForm,
  WrapperInput,
  MessageStyleError,
  MessageStyleSuccess,
  PasswordField,
  WrapperPassword,
} from './AuthForm.styled';

const FormComponent = ({
  nameIsShown,
  handleSubmit,
  toglePassword,
  passwordInput,
  isPassword,
  children,
}) => {
  const initialValues = nameIsShown
    ? {
        name: '',
        email: '',
        password: '',
      }
    : { email: '', password: '' };

  const AuthSchema = Yup.object().shape({
    name: nameIsShown
      ? Yup.string().required('Будь ласка введіть своє ім`я')
      : null,
    email: Yup.string()
      .matches(
        /^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
        'Невірний формат електронної пошти',
      )
      .required('Будь ласка, введіть свій E-mail!'),
    password: Yup.string()
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/,
        'Пароль повинен містити не менше 6 літер та 1 цифри',
      )
      .required('Будь ласка, введіть свій пароль'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AuthSchema}
      onSubmit={handleSubmit}
    >
      {({ handleBlur, touched, errors }) => (
        <StyledForm autoComplete="off" className="StyledForm">
          <WrapperInput className="WrapperInput">
            {nameIsShown && (
              <div className="www">
                <div>
                  <StyledField
                    type="text"
                    name="name"
                    placeholder="Name"
                    onBlur={handleBlur}
                    className="StyledField"
                  />
                </div>

                {touched.name && errors.name ? (
                  <MessageStyleError>
                    <svg width="16" height="16" fill="currentColor">
                      <use href={sprite + `#icon-checkbox-error`} />
                    </svg>
                    {errors.name}
                  </MessageStyleError>
                ) : touched.name ? (
                  <MessageStyleSuccess>
                    <svg width="16" height="16" fill="currentColor">
                      <use href={sprite + `#icon-checkbox-success`} />
                    </svg>
                    Формат вірний
                  </MessageStyleSuccess>
                ) : null}
              </div>
            )}

            <div>
              <div>
                <StyledField
                  type="email"
                  name="email"
                  placeholder="Email"
                  onBlur={handleBlur}
                  className="StyledField"
                />
              </div>

              {touched.email && errors.email ? (
                <MessageStyleError>
                  <svg width="16" height="16" fill="currentColor">
                    <use href={sprite + `#icon-checkbox-error`} />
                  </svg>
                  {errors.email}
                </MessageStyleError>
              ) : touched.email ? (
                <MessageStyleSuccess>
                  <svg width="16" height="16" fill="currentColor">
                    <use href={sprite + `#icon-checkbox-success`} />
                  </svg>
                  Формат email вірний
                </MessageStyleSuccess>
              ) : null}
            </div>

            <div>
              <WrapperPassword>
                <PasswordField
                  id="password"
                  type={passwordInput}
                  placeholder="Password"
                  name="password"
                  onBlur={handleBlur}
                />

                <ButtonInput type="button" onClick={toglePassword}>
                  <svg width="20" height="20">
                    <use
                      href={
                        sprite + `${isPassword ? `#icon-eye-off` : `#icon-eye`}`
                      }
                    ></use>
                  </svg>
                </ButtonInput>
              </WrapperPassword>

              {touched.password && errors.password ? (
                <MessageStyleError>
                  <svg width="16" height="16" fill="currentColor">
                    <use href={sprite + `#icon-checkbox-error`} />
                  </svg>
                  {errors.password}
                </MessageStyleError>
              ) : touched.password ? (
                <MessageStyleSuccess>
                  <svg width="16" height="16" fill="currentColor">
                    <use href={sprite + `#icon-checkbox-success`} />
                  </svg>
                  Формат password вірний
                </MessageStyleSuccess>
              ) : null}
            </div>
          </WrapperInput>
          {children}
          {/* <FormButtons /> */}
        </StyledForm>
      )}
    </Formik>
  );
};

export default FormComponent;

FormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  toglePassword: PropTypes.func.isRequired,
  passwordInput: PropTypes.string.isRequired,
  isPassword: PropTypes.bool.isRequired,
  nameIsShown: PropTypes.bool.isRequired,
  children: PropTypes.node,
};
