import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <Image
            src="/assets/icons/logo-full.svg"
            width={224}
            height={224}
            alt="logo"
          />
          <div className="space-y-5 text-white ">
            <h1 className="h1">Manage your files the best way.</h1>
            <p className="body-1">A place to store all your documents.</p>
          </div>
          <div>
            <Image
              src="/Illustration.svg"
              alt="files"
              width={342}
              height={342}
              className="transition-all hover:rotate-2 hover:scale-105"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo-full-brand.svg"
            alt="Logo"
            width={224}
            height={82}
          />
        </div>
        {children}
      </section>
    </div>
  );
}
