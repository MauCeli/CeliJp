export default function AppCardContainer({ children }) {
    return (
      <>
        <div className="container">{children}</div>
        <style jsx>{`
          .container {
            text-align: center;
          }
        `}</style>
      </>
    );
  }
  