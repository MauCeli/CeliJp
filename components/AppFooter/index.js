import Link from "next/link";

export default function AppFooter({ children }) {
  return (
    <>
    <div>
      <footer>
        <div className="footer-content">
         <h3 >日本語Celijp！・アルゼンチン・フフイから世界へ！</h3>
          
        </div>
      </footer>
    </div>
      <style jsx>{`
        footer {
          position: relative;
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
          margin-left:10px;
          cursor:pointer;

        }
      `}</style>
    </>
  );
}
