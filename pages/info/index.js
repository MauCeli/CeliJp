import AppLayout from "/components/AppLayout";
import AppButton from "/components/AppButton";
import AppMenu from "/components/AppMenu";
import Link from "next/link";
import AppCard from "../../components/AppCard";
import AppCardContainer from "../../components/AppCardContainer";
import AppFooter from "../../components/AppFooter";
import AppLayoutMenu from "../../components/AppLayoutMenu";
import AppHeader from "../../components/AppHeader";
import AppTextScroller from "../../components/AppTextScroller"
import { color } from "../../styles/theme";
import AppDescription from "../../components/AppDescription";

export default function Info() {
  return (
    <>
     <title>日本語Celijp</title>
      <meta name="description" content="Listo para un desafío" />
      <link rel="icon" href="/favicon.ico" />
     
      <AppHeader>
      </AppHeader>
      
      <AppTextScroller>
      </AppTextScroller>
     
      
        <AppMenu>
          <AppCard>
            <AppCardContainer>
              <img src="/horario.png" />
              <h2>HORARIOS</h2>
            </AppCardContainer>
            <div>
              <AppButton>
                <Link href="/horarios">
                  <a>ver horarios!</a>
                </Link>
              </AppButton>
            </div>
          </AppCard>

          <AppCard>
            <AppCardContainer>
              <img src="/logo1.png" />
              <h2>PLANES</h2>
            </AppCardContainer>
            <div>
              <AppButton>
                <Link href="/planes">
                  <a>ver planes!</a>
                </Link>
              </AppButton>
            </div>
          </AppCard>
        </AppMenu>
        <AppDescription>
          
        </AppDescription>
        <AppFooter></AppFooter>

   

      
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&family=Zen+Maru+Gothic:wght@700&display=swap");
        html,
        body {
          background-color: #e5e5f7;
          opacity: 0.8;
          background-image: linear-gradient(#f74545 1px, transparent 1px),
            linear-gradient(to right, #f74545 1px, #e5e5f7 1px);
          background-size: 20px 20px;
          font-family: "Noto Sans JP", sans-serif;
          font-family: "Zen Maru Gothic", sans-serif;
        }

        div {
          place-items: center;
          place-content: center;
        }
        img {
          width: 50%;
          margin-bot: 0;
        }
        a{
          color: ${color.secondary};
            font-size: 16px;
            margin-top: 10px;
            text-decoration: none;
        }
      `}</style>
    </>
  );
}
