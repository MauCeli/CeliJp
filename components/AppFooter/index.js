import Link from "next/link";

export default function AppFooter({ children }) {
  return (
    <>
    <div>
      <footer>
        <div className="footer-content">
         
          
        </div>
      </footer>
    </div>
      <style jsx>{`
        footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #111;
          height: 30px;
          width: auto;
          color: #fff;
          -webkit-backdrop-filter: blur(8.9px);
        }
        .footer-content {
          display: flex;
          align-items: right;
          justify-content: center;
          flex-direction: column;
          text-align: left;
        }
        .footer-content h3 {
          font-size: 11px;
          font-weight: auto;
        }
        @media (min-width: 600px) {
          footer {
          }
        }
        h3{
          cursor:pointer;

        }
      `}</style>
    </>
  );
}
