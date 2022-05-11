export default function AppMenu({ children }) {
  return (
    <>
      <div className="menu">{children}</div>
      <style jsx>{`
        .menu {
          max-width: 1200px;
          width: 95%;
          margin: 0 auto;
          
        }
        @media (min-width: 768px) {
          .menu {
            display: flex;
            justify-content: space-between;
          }
        }
      `}</style>
    </>
  );
}
