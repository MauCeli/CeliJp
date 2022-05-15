import styles from "./styles";
export default function AppDescription({ children }) {
  return (
    <>
      <section className="section_info">{children}</section>
      <style jsx>{styles}</style> 
    </>
  );
}
