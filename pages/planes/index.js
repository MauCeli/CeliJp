import AppButton from "/components/AppButton";
import Link from "next/link";
import Progress from "/components/Icons/Progress";
import AppMenu from "/components/AppMenu";
import AppLayoutMenu from "../../components/AppLayoutMenu";
import AppCardContainer from "../../components/AppCardContainer";
import AppCard from "../../components/AppCard";
import AppCardDescription from "../../components/AppCardDescription";
import AppHeader from "../../components/AppHeader";
import AppTextScroller from "../../components/AppTextScroller";
import AppFooter from "../../components/AppFooter";
export default function Planes() {
  return (
    <>

        <AppHeader></AppHeader>
        <AppTextScroller></AppTextScroller>
        <AppMenu>
          <AppCard>
            <AppCardContainer> contenido </AppCardContainer>
            <AppCardDescription>description</AppCardDescription>
            <AppButton>plan 1</AppButton>
          </AppCard>

          <AppCard>
            <AppCardContainer> contenido </AppCardContainer>
            <AppCardDescription>description</AppCardDescription>
            <AppButton>plan 2</AppButton>
          </AppCard>

          <AppCard>
            <AppCardContainer> contenido </AppCardContainer>
            <AppCardDescription>description</AppCardDescription>
            <AppButton>plan 3</AppButton>
          </AppCard>
        </AppMenu>
  
      <AppButton>
          <Link href="/">
            <a>始める!</a>
          </Link>
          <Progress width={24} height={24} />
        </AppButton>
        <AppFooter></AppFooter>
    </>
  );
}
