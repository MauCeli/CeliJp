import styles from "./styles";
export default function AppMenu({ children }) {
  return (
    <>
      <div className="menu">{children}</div>
      <style jsx>{styles}</style> 
    </>
  );
}
