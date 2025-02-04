"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
export default function Home() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="center flex-col w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white center flex-col w-6/12 py-4 rounded-xl"
      >
        <label htmlFor="">Contact Us</label>
        <div className="center gap-4">
          <div className="center flex-col">
            <label htmlFor="">First Name *</label>
            <input
              {...register("firstName", { required: true })}
              aria-invalid={errors.firstName ? "true" : "false"}
              className="input"
            />
            {errors.firstName?.type === "required" && (
              <p role="alert" className="text-[--red]">
                This field is required
              </p>
            )}
          </div>
          <div className="center flex-col">
            <label htmlFor="">Last Name *</label>
            <input
              {...register("lastName", { required: true })}
              aria-invalid={errors.lastName ? "true" : "false"}
              className="input"
            />
            {errors.lastName?.type === "required" && (
              <p role="alert" className="text-[--red]">
                This field is required
              </p>
            )}
          </div>
        </div>
        <div className="center flex-col">
          <label htmlFor="">Email Address *</label>
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            className="input"
          />
          {errors.email && (
            <p className="text-[--red]">Please enter a valid email address</p>
          )}
        </div>
        <div className="center flex-col">
          <label htmlFor="">Query Type *</label>
          <div className="center ">
            <div>
              <input
                type="radio"
                id="general"
                {...register("radio", {
                  required: true,
                })}
                aria-invalid={errors.email ? "true" : "false"}
                className="input"
              />
              <label htmlFor="general">General Enquiry</label>
            </div>
            <div>
              <input
                type="radio"
                id="sup"
                {...register("radio", {
                  required: true,
                })}
                aria-invalid={errors.email ? "true" : "false"}
                className="input"
              />
              <label htmlFor="sup">Support Request</label>
            </div>
          </div>
          {errors.radio && (
            <p className="text-[--red]">Please select a query type</p>
          )}
        </div>
        <div className="center flex-col">
          <label htmlFor="">Message *</label>
          <input
            {...register("message", { required: true })}
            aria-invalid={errors.message ? "true" : "false"}
            className="input"
          />
          {errors.message?.type === "required" && (
            <p role="alert" className="text-[--red]">
              This field is required
            </p>
          )}
        </div>
        <div>
          <input
            type="checkbox"
            {...register("checkbox", { required: true })}
            aria-invalid={errors.checkbox ? "true" : "false"}
            className="input"
          />
          {errors.checkbox?.type === "required" && (
            <p role="alert" className="text-[--red]">
              To submit this form, please consent to being contacted
            </p>
          )}
          <label htmlFor="">I consent to being contacted by the team *</label>
        </div>
        <button type="submit">Submit</button>
        {isSubmitted && (
          <div className="center absolute top-40 bg-[--green600]">
            <p className="text-white">
              Message Sent! Thanks for completing the form. We'll be in touch
              soon!
            </p>
          </div>
        )}
      </form>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://ihakkiergin.me/">İbrahim Hakkı Ergin</a>.
      </div>
    </div>
  );
}
