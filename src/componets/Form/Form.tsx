import { useState } from 'react'
import { formIcons } from '../../constants'
import emailjs from '@emailjs/browser'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as yup from 'yup'

import cls from './Form.module.scss'
import { nanoid } from 'nanoid'
import { classNames } from '../utils/ClassNames'
import { useTranslation } from 'react-i18next'

interface FormProps {
  title: string
  placeholderName: string
  placeholderMail: string
  placeholderArea: string
}

type FormAttributes = {
  name: string
  email: string
  message: string
}

const FormEl = (props: FormProps) => {
  const { placeholderArea, placeholderMail, placeholderName, title } = props
  const { t } = useTranslation()

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string>('')
  const [errorM, setError] = useState<string>('')

  const schema: yup.Schema<FormAttributes> = yup.object().shape({
    email: yup
      .string()
      .email(t('Некорректный email'))
      .required(t('Пожалуйста, заполните поле')),
    name: yup.string().required(t('Пожалуйста, заполните поле')),
    message: yup.string().required(t('Пожалуйста, заполните поле')),
  })

  const handleFormSubmit = (
    values: FormAttributes,
    reset: () => void,
    resetForm: (w: boolean) => void,
  ) => {
    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          to_name: 'Catherine',
          from_email: values.email,
          to_email: 'catherinel011091@gmail.com',
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false)
          setSuccess(t('Спасибо. Я свяжусь с вами как можно скорее.'))
          reset()
          resetForm(false)
          setTimeout(() => {
            setSuccess('')
          }, 2000)
        },
        (error) => {
          setLoading(false)
          console.error(error)
          setError(t('Что-то пошло не так. Попробуйте еще раз.'))
          setTimeout(() => {
            setError('')
          }, 2000)
        },
      )
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={schema}
      onSubmit={(
        values: FormAttributes,
        { setSubmitting, resetForm }: FormikHelpers<FormAttributes>,
      ) => {
        handleFormSubmit(values, resetForm, setSubmitting)
      }}>
      {({ errors, touched }) => (
        <Form className={cls.Form}>
          <div className={cls.FormHead}>
            <h2 className={cls.FormTitle}>{title}</h2>
            <div className={cls.FormIcons}>
              {formIcons.map((icon) => (
                <a
                  target="_blank"
                  className={cls.FormIcon}
                  key={nanoid()}
                  href={icon.href}>
                  <img className={cls.FormIconImg} src={icon.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className={cls.FormBody}>
            <label className={cls.FormField}>
              <Field
                className={cls.FormInput}
                name="name"
                id="name"
                type="text"
                placeholder={placeholderName}
              />
              {touched.name && errors.name ? (
                <p className={cls.FormErrors}>{errors.name}</p>
              ) : null}
            </label>
            <label className={cls.FormField}>
              <Field
                className={cls.FormInput}
                name="email"
                id="mail"
                type="email"
                placeholder={placeholderMail}
              />
              {touched.email && errors.email ? (
                <p className={cls.FormErrors}>{errors.email}</p>
              ) : null}
            </label>
            <label className={cls.FormField}>
              <Field
                as="textarea"
                className={cls.FormArea}
                name="message"
                id="message"
                placeholder={placeholderArea}
              />
              {touched.message && errors.message ? (
                <p className={cls.FormErrors}>{errors.message}</p>
              ) : null}
            </label>
          </div>
          <div className={cls.FormBtnWrap}>
            {(success || errorM) && (
              <p
                className={classNames(
                  cls.FormMessage,
                  { [cls.Success]: success, [cls.Error]: errorM },
                  [],
                )}>
                {success || errorM}
              </p>
            )}
            <button className={cls.FormBtn} type="submit">
              <span className={cls.FormBtnText}>
                {loading ? t('Отправка...') : t('Отправить')}
              </span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormEl
