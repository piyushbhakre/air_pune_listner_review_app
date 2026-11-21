import SignupView from "@/features/auth/signup/SignupView";

export default function SignupPage() {
  return (
    <div className="flex h-dvh w-full items-center justify-center overflow-hidden bg-zinc-100 bg-[url('/images/background/authBackground_Desktop.png')] bg-cover bg-center bg-no-repeat p-3 sm:p-4">
      <SignupView />
    </div>
  );
}
