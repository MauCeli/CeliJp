import styles, { globalStyles } from "./styles";
import AppFooter from "/components/AppFooter";
export default function AppLayoutMenu({ children }) {
  return (
    <>
      <div>
        <main>
          {children}
        </main>
      </div>
      <AppFooter></AppFooter>
      {/* <style jsx>{``}</style>
      <style jsx global>{``}</style> */}
      <style jsx>{styles}</style>
      <style jsx global>{globalStyles}</style>
    </>
  );
}
