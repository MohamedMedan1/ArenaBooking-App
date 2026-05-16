"use client";

import { useForm } from "react-hook-form";
import { loginAction } from "../_services/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2, ChevronRight } from "lucide-react";
import Link from "next/link";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<LoginFormInputs>();
  const { errors, isSubmitting } = formState;

  async function onSubmitFn(formData: any) {
    const toastId = toast.loading("Verifying your credentials...");

    try {
      const res = await loginAction(formData);

      if (res?.status === "success") {
        toast.success("Your login successfully!", {
          id: toastId,
        });
        setTimeout(() => {
          router.push("/fields");
        }, 1500);
      } else {
        toast.error(res?.message || "Failed to login", {
          id: toastId,
        });
      }
    } catch (err) {
      console.log("Error: ", err);
      toast.error("Something went wrong. Please try again later.", {
        id: toastId,
      });
    }
  }

  return (
    <main
      className="fixed inset-0 flex items-center justify-center overflow-hidden font-sans z-50"
      style={{
        backgroundImage: `url('/login.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#02050a",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(50,80,255,0.15)_0%,_transparent_40%),_radial-gradient(circle_at_80%_10%,_rgba(60,120,255,0.2)_0%,_transparent_35%),_radial-gradient(circle_at_50%_110%,_rgba(15,35,25,0.8)_0%,_transparent_60%)]">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-blue-400/20 to-transparent rotate-[-15deg] blur-sm" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-blue-400/20 to-transparent rotate-[15deg] blur-sm" />
      </div>

      {/* FIFA Style Shards */}
      <div className="absolute right-[-10%] top-1/4 w-96 h-96 bg-blue-500/10 skew-x-[-20deg] blur-3xl opacity-50" />
      <div className="absolute right-20 top-1/3 w-32 h-[500px] bg-gradient-to-b from-white/5 to-transparent border-l border-white/5 skew-x-[-15deg] opacity-40" />
      <div className="absolute right-40 top-1/2 w-16 h-64 bg-blue-600/10 skew-x-[-15deg] border-l border-blue-400/20 opacity-30" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-[480px] px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
          {/* Top reflection */}
          <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Side shard */}
          <div className="absolute -right-4 top-20 w-12 h-24 bg-blue-500/10 skew-x-[-15deg] border-l border-white/5 pointer-events-none" />

          <div className="space-y-1 pb-4 pt-10 px-10 text-left">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400 mb-2">
              Mal3abek{" "}
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-white">
              Login
            </h2>
            <p className="text-white/50 text-sm font-medium">
              Access your account and continue
            </p>
          </div>

          <div className="px-10 pb-10">
            <form onSubmit={handleSubmit(onSubmitFn)} className="space-y-6">
              <div className="space-y-5">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-white/40 uppercase tracking-wider ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "This field is required" })}
                    placeholder="email@arenamatch.com"
                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 text-white placeholder:text-white/20 backdrop-blur-md outline-none transition-all focus:bg-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-[10px] ml-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-white/40 uppercase tracking-wider ml-1">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "This field is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      maxLength: {
                        value: 16,
                        message: "Password can be at most 16 characters",
                      },
                    })}
                    placeholder="••••••••"
                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 text-white placeholder:text-white/20 backdrop-blur-md outline-none transition-all focus:bg-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10"
                  />
                  {errors.password && (
                    <p className="text-red-400 text-[10px] ml-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative flex items-center justify-center h-14 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold transition-all duration-300 hover:from-blue-500 hover:to-blue-400 hover:scale-[1.01] active:scale-[0.98] shadow-lg shadow-blue-900/20 disabled:opacity-70 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    Continue
                    <ChevronRight className="h-5 w-5 opacity-70" />
                  </span>
                )}
              </button>

              <div className="flex justify-center pt-2">
                <Link
                  href="/auth/signUp"
                  className="text-[10px] font-bold text-white/30 uppercase tracking-widest hover:text-white/60 transition-colors"
                >
                  Don't have an account? Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom glow */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-blue-500/10 blur-2xl rounded-full" />
      </div>

      {/* Corner details */}
      <div className="absolute bottom-8 left-12 flex items-center gap-4 opacity-30 pointer-events-none z-10">
        <div className="w-10 h-1 bg-white/40" />
        <span className="text-[10px] text-white font-bold tracking-widest uppercase">
          Stadium Sec 402
        </span>
      </div>
      <div className="absolute bottom-8 right-12 text-right opacity-30 pointer-events-none z-10">
        <span className="text-[10px] text-white font-bold tracking-widest block uppercase">
          v 1.0.42
        </span>
        <span className="text-[8px] text-white font-medium uppercase">
          Official Partner
        </span>
      </div>
    </main>
  );
}
