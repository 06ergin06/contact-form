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
    <div className="center flex-col w-full text-[--grey900]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white start w-6/12 py-16 rounded-xl px-10"
      >
        <label htmlFor="" className="text-3xl font-bold mb-8">
          Contact Us
        </label>
        <div className="flex gap-4 w-full mb-6">
          <div className="start w-1/2">
            <label htmlFor="">First Name *</label>
            <input
              {...register("firstName", { required: true })}
              aria-invalid={errors.firstName ? "true" : "false"}
              className={`input w-full ${
                errors.firstName ? "border-[--red]" : "border-[--grey900]"
              }`}
            />
            {errors.firstName?.type === "required" && (
              <p role="alert" className="text-[--red]">
                This field is required
              </p>
            )}
          </div>
          <div className="start w-1/2">
            <label htmlFor="">Last Name *</label>
            <input
              {...register("lastName", { required: true })}
              aria-invalid={errors.lastName ? "true" : "false"}
              className={`input w-full ${
                errors.lastName ? "border-[--red]" : "border-[--grey900]"
              }`}
            />
            {errors.lastName?.type === "required" && (
              <p role="alert" className="text-[--red]">
                This field is required
              </p>
            )}
          </div>
        </div>
        <div className="start w-full mb-6">
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
            className={`input w-full ${
              errors.email ? "border-[--red]" : "border-[--grey900]"
            }`}
          />
          {errors.email && (
            <p className="text-[--red]">Please enter a valid email address</p>
          )}
        </div>
        <div className="start w-full mb-6">
          <label className="mb-2" htmlFor="">Query Type *</label>
          <div className="center w-full gap-4">
            <div
              className={`flex justify-start items-center text-center input px-6 w-1/2 gap-4 active:bg-[--grey900]  ${
                errors.radio ? "border-[--red]" : "border-[--grey900]"
              }
              `}
            >
              <input
                type="radio"
                id="general"
                {...register("radio", {
                  required: true,
                })}
                aria-invalid={errors.email ? "true" : "false"}
                className="w-5 h-5"
              />
              <p htmlFor="general">General Enquiry</p>
            </div>
            <div
              className={`flex justify-start items-center text-center input px-6 w-1/2 gap-4 ${
                errors.firstName ? "border-[--red]" : "border-[--grey900]"
              }`}
            >
              <div className="center gap-2">
                <input
                  type="radio"
                  id="sup"
                  {...register("radio", {
                    required: true,
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                  className="w-5 h-5"
                />
                <p htmlFor="sup">Support Request</p>
              </div>
            </div>
          </div>
          {errors.radio && (
            <p className="text-[--red]">Please select a query type</p>
          )}
        </div>
        <div className="start w-full mb-6">
          <label htmlFor="">Message *</label>
          <textarea
            {...register("message", { required: true })}
            aria-invalid={errors.message ? "true" : "false"}
            className={`input h-20 w-full text-wrap p-4 ${
              errors.message ? "border-[--red]" : "border-[--grey900]"
            }`}
          />
          {errors.message?.type === "required" && (
            <p role="alert" className="text-[--red]">
              This field is required
            </p>
          )}
        </div>
        <div className="center items-start flex-col mb-10">
          <div className="center gap-2">
            <input
              type="checkbox"
              {...register("checkbox", { required: true })}
              aria-invalid={errors.checkbox ? "true" : "false"}
              className="mb-2 bg-[--green600]"
            />
            <label htmlFor="">I consent to being contacted by the team *</label>
          </div>
          {errors.checkbox?.type === "required" && (
            <p role="alert" className="text-[--red]">
              To submit this form, please consent to being contacted
            </p>
          )}
        </div>
        <button
          className="text-center text-white w-full bg-[--green600] rounded-md py-3"
          type="submit"
        >
          Submit
        </button>
        {isSubmitted && (
          <div className="center absolute top-10 bg-[--green600] rounded-xl px-5 py-5">
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
