import styles, { globalStyles } from "./styles";
export default function AppLayoutMenu({ children }) {
  return (
    <>
      <div>
        <main>
          {children}
        </main>
  
      </div>
     
      {/* <style jsx>{``}</style>
      <style jsx global>{``}</style> */}
      <style jsx>{styles}</style>
      <style jsx global>{globalStyles}</style>
    </>
  );
}
