import styles from "./styles";
export default function AppCardContainer({ children }) {
    return (
      <>
        <div className="container">{children}</div>
        <style jsx>{styles}</style>
      </> 
    );
  
  }
  