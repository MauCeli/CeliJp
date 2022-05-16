import styles from "./styles";
export default function AppButton({ children, onClick }) {
  return (
    <>
    <div className="boton_padding">
    <button onClick={onClick}>{children}</button>
    </div>
      
      <style jsx>{styles}</style>
    </>
  );
}
