import { Footer } from "../Footer";
import { Header } from "../Header/Header";
import type { MainLayoutType } from "./type";

export const MainLayout = ({ title, children }: MainLayoutType) => {
  return (
    <>
      <Header title={title} />
      <div className="w-full lg:w-2xl h-full border-gray-200 bg-white pt-16 lg:border-r lg:border-b lg:border-l lg:pt-0 dark:border-gray-800 dark:bg-gray-900">
        {children}
      </div>
      <Footer />
    </>
  );
};
