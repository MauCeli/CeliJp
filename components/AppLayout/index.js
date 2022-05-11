import styles, { globalStyles } from "./styles";
import AppFooter from "/components/AppFooter";
export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <main>
          {children}
        </main>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>{globalStyles}</style>
    </>
  );
}
