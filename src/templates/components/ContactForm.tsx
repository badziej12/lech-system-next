'use client'

import {FC, useState} from "react";
import '../../scss/components/ContactForm.scss';
import {useForm} from "react-hook-form";
import {ErrorMessage, sendEmail} from "@/utils/send-email";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "@/utils/validationSchema";

export type FormData = {
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
};

const Contact: FC = () => {
    const {register, handleSubmit, formState: {errors, isSubmitting}, reset} = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const [status, setStatus] = useState<ErrorMessage | null>(null);

    const onSubmit = async (data: FormData) => {
        setStatus(null);
        const result = await sendEmail(data);
        setStatus(result);
        reset();
    }

    return (
        <form className={"ContactForm"} onSubmit={handleSubmit(onSubmit)} noValidate={true}>
            <div className={"ContactForm__input-container"}>
                <label htmlFor="name">Imię i nazwisko</label>
                <input id={"name"} type="text" placeholder={"np. Jan Kowalski"} {...register('name', {required: true})}
                       autoComplete={"on"} className={errors.name ? 'error' : ''}/>
                {errors.name && <p className={"error-message"}>{errors.name?.message}</p>}
            </div>
            <div className={"ContactForm__input-container"}>
                <label htmlFor="email">E-mail</label>
                <input id={"email"} type="email"
                       placeholder={"twój-email@gmail.com"} {...register('email', {required: true})}
                       autoComplete={"on"} className={errors.email ? 'error' : ''}/>
                {errors.email && <p className={"error-message"}>{errors.email?.message}</p>}
            </div>
            <div className={"ContactForm__input-container"}>
                <label htmlFor="phoneNumber">Telefon</label>
                <input id={"phoneNumber"} type="tel" className={errors.phoneNumber ? 'error' : ''}
                       placeholder={"123456789"} {...register('phoneNumber', {required: true})}/>
                {errors.phoneNumber && <p className={"error-message"}>{errors.phoneNumber?.message}</p>}
            </div>
            <div className={"ContactForm__input-container"}>
                <label htmlFor="message">Treść</label>
                <textarea id="message"
                          cols={30}
                          rows={10}
                          {...register('message', {required: true})}
                          className={errors.message ? 'error' : ''}
                          placeholder={"Treść wiadomości ..."}></textarea>
                {errors.message && <p className={"error-message"}>{errors.message?.message}</p>}
            </div>
            <div className={"end-xs"}>
                <button type={"submit"} className={"ContactForm__button"}>
                    {isSubmitting ? "Wysyłanie..." : "Wyślij"}
                </button>
            </div>
            {status && <p className={`status-message ${status.success ? "" : "error"}`}>{status.message}</p>}
        </form>
    )
}

export default Contact;