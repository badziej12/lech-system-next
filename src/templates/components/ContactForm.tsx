'use client'

import {FC} from "react";
import '../../scss/components/ContactForm.scss';
import {useForm} from "react-hook-form";
import {sendEmail} from "@/utils/send-email";

export type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const Contact: FC = () => {
    const {register, handleSubmit} = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        sendEmail(data);
    }

    return (
        <form className={"ContactForm"} onSubmit={handleSubmit(onSubmit)}>
            <div className={"ContactForm__input-container"}>
                <label htmlFor="name">Imię i nazwisko</label>
                <input id={"name"} type="text" placeholder={"np. Jan Kowalski"} {...register('name', {required: true})} autoComplete={"on"} />
            </div>
            <div className={"ContactForm__input-container"}>
                <label htmlFor="email">E-mail</label>
                <input id={"email"} type="email" placeholder={"twój-email@gmail.com"} {...register('email', {required: true})} autoComplete={"on"} />
            </div>
            <div className={"ContactForm__input-container"}>
                <label htmlFor="phoneNumber">Telefon</label>
                <input id={"phoneNumber"} type="tel" placeholder={"123456789"} {...register('phoneNumber', {required: true})}/>
            </div>
            <div className={"ContactForm__input-container"}>
                <label htmlFor="message">Treść</label>
                <textarea id="message"
                          cols={30}
                          rows={10}
                          {...register('message', {required: true})}
                          placeholder={"Treść wiadomości ..."}></textarea>
            </div>
            <div className={"end-xs"}>
                <button type={"submit"} className={"ContactForm__button"}>
                    Wyślij
                </button>
            </div>
        </form>
    )
}

export default Contact;