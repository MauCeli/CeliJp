import styles from "./styles";
export default function AppButton({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{styles}</style>
    </>
  );
}
