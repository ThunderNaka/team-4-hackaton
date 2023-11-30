interface MainLayoutProps {
  children: React.ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-screen w-full">
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-blue-300 sm:max-lg:landscape:hidden ">
        <div className="h-screen w-full overflow-scroll bg-white text-left xl:max-h-[95%] xl:max-w-md xl:rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
