import LoginView from "@/features/auth/login/LoginView";

export default function LoginPage() {
  return (
    <div className="flex h-dvh w-full items-center justify-center overflow-hidden bg-zinc-100 bg-[url('/images/background/authBackground_Desktop.png')] bg-cover bg-center bg-no-repeat p-3 sm:p-4">
      <LoginView />
    </div>
  );
}
