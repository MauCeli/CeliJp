import styles from "./styles";
export default function AppCard({ children }) {
  return (
    <>
      <div className="card">{children}
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
