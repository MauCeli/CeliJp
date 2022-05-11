/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import AppLayout from "/components/AppLayout";
import AppButton from "/components/AppButton";
import Progress from "/components/Icons/Progress";
import { color } from "../styles/theme";
import Link from "next/link";
import AppFooter from "../components/AppFooter";

export default function Home() {
  return (
    <>
      <title>日本語Celijp</title>
      <meta name="description" content="Listo para un desafío" />
      <link rel="icon" href="/favicon.ico" />
      <AppLayout>
        <section>
          <img src="/logo1.png" />
          <h1>日本語Celijp</h1>
          <h2>¿Estás listo?</h2>
          <div>
            <AppButton>
              <Link href="/info">
                <h2>始める!</h2>
              </Link>
              {/* <Progress width={24} height={24} /> */}
            </AppButton>
          </div>
        </section>
        
      </AppLayout>

      <style jsx>
        {`
          div {
          
          }
          img {
            width: 120px;
            margin-bot: 0;
          }
          section {
            display: grid;
            height: 100%;
            place-content: center;
            place-items: center;
          }
          h1 {
            color: ${color.primary};
            font-weight: 800;
            margin: 0;
            font-size: 50px;
          }
          h2 {
            color: ${color.secondary};
            font-size: 16px;
            margin: 0;
          }
          .image {
            margin: 0px;
            width: 100px;
          }
          a{
            
          }
        `}
      </style>
    </>
  );
}
