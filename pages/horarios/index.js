import AppButton from "/components/AppButton";
import Link from "next/link";
import Progress from "/components/Icons/Progress";
import AppLayoutMenu from "../../components/AppLayoutMenu";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import AppTextScroller from "../../components/AppTextScroller";
import AppMenu from "../../components/AppMenu";
import AppDescription from "../../components/AppDescription";
export default function Horarios() {
  return (
    <>
    
     <title>日本語Celijp</title>
      <meta name="description" content="Listo para un desafío" />
      <link rel="icon" href="/favicon.ico" />
        <AppHeader></AppHeader>
        <AppTextScroller>
        ・アルゼンチン・フフイから世界へ！（ ＾ω＾）・
        </AppTextScroller>
        <AppMenu>
          <AppDescription>
            
          </AppDescription>
        </AppMenu>
        <AppButton>
          <Link href="/">
            <a>始める!</a>
          </Link>
          <Progress width={24} height={24} />
        </AppButton>
      <AppFooter>

      </AppFooter>
      <style jsx>{`
      a{
           
          }
        `}
      </style>
    </>
  );
}
