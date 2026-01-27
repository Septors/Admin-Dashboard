import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormVariant = "login" | "register";

type FormValues = {
  email: string;
  password: string;
  username?: string;
  remember?: boolean;
  agreement?: boolean;
};

interface AuthFormProps {
  onSubmit: (data: FormValues) => Promise<boolean> | boolean;
  onForgotPassword?: () => void;
}

const AuthForm = ({ onSubmit, onForgotPassword }: AuthFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const navigate = useNavigate();
  const [formType, setFormType] = useState<FormVariant>("login");

  const handleFormSubmit = async (data: FormValues) => {
    const success = await onSubmit(data);
    if (success) navigate("/app");
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col bg-white items-center justify-center rounded-[24px] gap-8 p-[90px_57px] w-full max-w-md"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-2xl font-bold">
          {formType === "login" ? "Login to Account" : "Create an Account"}
        </span>
        <span className="text-sm text-gray-600">
          {formType === "login"
            ? "Please enter your email and password to continue"
            : "Fill in details to create your account"}
        </span>
      </div>

      {/* Email */}
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
          className="w-full h-12 border rounded-md px-4"
        />
        {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
      </div>

      {/* Username for register */}
      {formType === "register" && (
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="username" className="text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            {...register("username", { required: "Username is required" })}
            placeholder="Username"
            className="w-full h-12 border rounded-md px-4"
          />
          {errors.username && <span className="text-xs text-red-500">{errors.username.message}</span>}
        </div>
      )}

      {/* Password */}
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password", { required: "Password is required" })}
          placeholder="Password"
          className="w-full h-12 border rounded-md px-4"
        />
        {errors.password && <span className="text-xs text-red-500">{errors.password.message}</span>}
      </div>

      {/* Remember me / Forgot password (login only) */}
      {formType === "login" && (
        <div className="w-full flex justify-between items-center text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("remember")} className="h-4 w-4" />
            Remember me
          </label>
          <button
            type="button"
            className="text-blue-600 underline"
            onClick={onForgotPassword}
          >
            Forgot password?
          </button>
        </div>
      )}

      {/* Agreement (register only) */}
      {formType === "register" && (
        <div className="w-full flex items-center gap-2 text-sm">
          <input
            id="agreement"
            type="checkbox"
            {...register("agreement", { required: "You must accept the agreement" })}
            className="h-4 w-4"
          />
          <label htmlFor="agreement" className="text-gray-700">
            I agree to the <span className="text-blue-600 underline">terms & conditions</span>
          </label>
        </div>
      )}
      {errors.agreement && <span className="text-xs text-red-500">{errors.agreement.message}</span>}

      {/* Submit */}
      <button
        type="submit"
        className="bg-[#4880FF] text-white font-semibold rounded-md py-3 px-20 w-full"
      >
        {formType === "login" ? "Login" : "Register"}
      </button>

      {/* Switch form */}
      <button
        type="button"
        className="text-sm text-blue-600 underline mt-2"
        onClick={() => setFormType(formType === "login" ? "register" : "login")}
      >
        {formType === "login"
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </button>
    </form>
  );
};

export default AuthForm;
